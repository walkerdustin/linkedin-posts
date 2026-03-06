"""
Extract LinkedIn posts from saved HTML and create folder structure.

For each post:
  - yyyy-mm-dd_short_title/
      post.md
      statistics.md
      [images with .jpg extension]
"""
import re
import sys
import shutil
import datetime
import unicodedata
from pathlib import Path
from collections import defaultdict
from html import unescape

sys.stdout.reconfigure(encoding='utf-8')

# ── Configuration ──────────────────────────────────────────────────────────────
HTML_PATH  = Path('posts/LinkedIn.html')
FILES_DIR  = Path('posts/LinkedIn_files')
OUTPUT_DIR = Path('extracted')
STOP_URN   = '7392552484440879104'   # "I finally decided to do what I thought…"

# ── Helpers ────────────────────────────────────────────────────────────────────
def urn_to_date(urn_str: str) -> datetime.date:
    ts = int(urn_str) >> 22
    if ts > 253402300799:
        ts //= 1000
    try:
        dt = (datetime.datetime(1970, 1, 1, tzinfo=datetime.timezone.utc)
              + datetime.timedelta(seconds=ts))
        return dt.date()
    except (OverflowError, ValueError):
        return datetime.date(2000, 1, 1)


def strip_html(html: str) -> str:
    """Remove HTML tags, fix entities, normalise whitespace."""
    html = re.sub(r'<br\s*/?>', '\n', html)
    html = re.sub(r'<[^>]+>', '', html)
    html = unescape(html)
    html = html.replace('\u00a0', ' ')    # non-breaking space → regular space
    html = re.sub(r'[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]', '', html)
    html = re.sub(r'[ \t]+', ' ', html)  # collapse horizontal whitespace
    html = re.sub(r'\n{3,}', '\n\n', html)
    return html.strip()


def extract_text_from_p_tags(chunk: str) -> str:
    """Extract the actual post content from <p> tags.

    Activity-feed post structure in <p> blocks:
      [0]  '• You'
      [1]  job title
      [2]  'Xw •' time marker  ← anchor
      [3]  POST CONTENT         ← we want this
      [4+] reactions / comments text
    """
    chunk = re.sub(r'<style[^>]*>.*?</style>', '', chunk, flags=re.DOTALL)
    chunk = re.sub(r'<script[^>]*>.*?</script>', '', chunk, flags=re.DOTALL)

    p_blocks = re.findall(r'<p[^>]*>(.*?)</p>', chunk, re.DOTALL)
    if not p_blocks:
        return ''

    texts = [strip_html(b) for b in p_blocks]

    # Find the time-marker block (e.g. "2w •", "3mo •")
    for i, t in enumerate(texts):
        if re.match(r'^\d+[wdmh]\s*[•·]?\s*$', t.strip()):
            candidate_idx = i + 1
            if candidate_idx < len(texts) and len(texts[candidate_idx]) > 20:
                return texts[candidate_idx]

    # Fallback: pick the longest <p> block
    longest = max(texts, key=len) if texts else ''
    return longest if len(longest) > 50 else ''


def resolve_image(img_name: str) -> tuple[Path, str] | None:
    """Return (source_path, dest_filename) for an image, preferring full-size (1) variant."""
    # Try the full-size "(1)" version first
    fullsize = FILES_DIR / f'{img_name}(1)'
    original = FILES_DIR / img_name

    if fullsize.exists() and fullsize.stat().st_size > 1000:
        return fullsize, f'{img_name}.jpg'
    elif original.exists() and original.stat().st_size > 1000:
        return original, f'{img_name}.jpg'
    elif original.exists():
        return original, f'{img_name}.jpg'
    return None


def extract_images(chunk: str) -> list[str]:
    """Return unique image base-names referenced in chunk (just the filename, no path)."""
    refs = re.findall(r'src="(?:\./)?(LinkedIn_files/([^"(]+?)(?:\(\d+\))?)"', chunk)
    seen: set[str] = set()
    result: list[str] = []
    for _full, name in refs:
        if name not in seen:
            seen.add(name)
            result.append(name)
    return result


def extract_stats_from_chunk(chunk: str) -> dict:
    """Extract reactions and comments from a post chunk."""
    p_blocks = re.findall(r'<p[^>]*>(.*?)</p>', chunk, re.DOTALL)
    texts = [re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', b)).strip() for b in p_blocks]
    raw = re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', chunk))
    combined = raw + ' ' + ' '.join(texts)

    stats = {'reactions': 0, 'comments': 0, 'reposts': 0}

    # "Name and N others reacted" → N+1
    react_a = re.search(r'and (\d+) others reacted', combined, re.IGNORECASE)
    react_b = re.search(r'(\d+)\s+reactions?', combined, re.IGNORECASE)
    react_c = re.search(r'(\d+)\s*[•·]\s*\d+\s+comments?', combined, re.IGNORECASE)

    if react_a:
        stats['reactions'] = int(react_a.group(1)) + 1
    elif react_b:
        stats['reactions'] = int(react_b.group(1))
    elif react_c:
        stats['reactions'] = int(react_c.group(1))

    comment_matches = re.findall(r'(\d+)\s+comments?', combined, re.IGNORECASE)
    if comment_matches:
        stats['comments'] = int(comment_matches[0])

    repost_match = re.search(r'(\d+)\s+reposts?', combined, re.IGNORECASE)
    if repost_match:
        stats['reposts'] = int(repost_match.group(1))

    return stats


def extract_featured_reactions(content: str, urn: str) -> int:
    """For single-occurrence (featured) posts, extract the reaction count.

    In the featured carousel, the reaction count appears as a standalone number
    right before the label "Post" that starts the next carousel item.
    Format: "...post body text... 27 Post Next post title..."
    """
    pos = content.find(urn)
    if pos < 0:
        return 0
    # Look in a window AFTER the URN for the "N Post" pattern
    window = content[pos:pos + 15000]
    raw = re.sub(r'<[^>]+>', ' ', window)
    raw = re.sub(r'&nbsp;', ' ', raw)
    raw = re.sub(r'\s+', ' ', raw).strip()

    # The pattern "N Post" where N is the reaction count
    m = re.search(r'\b(\d+)\s+Post\b', raw)
    if m:
        return int(m.group(1))
    return 0


def normalize_unicode(text: str) -> str:
    return unicodedata.normalize('NFKD', text).encode('ascii', 'ignore').decode('ascii')


def slugify(text: str, max_words: int = 6) -> str:
    text = normalize_unicode(text)
    text = re.sub(r'[^\w\s-]', ' ', text)
    words = text.split()[:max_words]
    slug = '_'.join(w.lower() for w in words if w)
    slug = re.sub(r'_+', '_', slug).strip('_')
    return slug[:60] if slug else 'post'


# ── Load ───────────────────────────────────────────────────────────────────────
print(f'Loading {HTML_PATH} …')
content = HTML_PATH.read_text(encoding='utf-8')
print(f'  {len(content):,} chars')

all_urn_matches = list(re.finditer(r'urn:li:activity:(\d+)', content))
urn_positions: dict[str, list[int]] = defaultdict(list)
for m in all_urn_matches:
    urn_positions[m.group(1)].append(m.start())

urns_sorted = sorted(urn_positions.keys(), key=lambda x: int(x), reverse=True)
relevant_urns = [u for u in urns_sorted if int(u) >= int(STOP_URN)]
print(f'\nPosts to extract: {len(relevant_urns)}')

# ── Extract ────────────────────────────────────────────────────────────────────
OUTPUT_DIR.mkdir(exist_ok=True)
posts_data = []

for urn in relevant_urns:
    date  = urn_to_date(urn)
    positions = sorted(urn_positions[urn])
    first = positions[0]
    is_featured = len(positions) == 1

    # Content window
    if is_featured:
        start, end = max(0, first - 200), first + 12000
    else:
        start = max(0, first - 3500)
        end   = positions[1] + 5000
    chunk = content[start:end]

    # Text
    text = extract_text_from_p_tags(chunk)
    if not text:
        raw = re.sub(r'<[^>]+>', ' ', chunk)
        raw = re.sub(r'&nbsp;', ' ', raw)
        raw = re.sub(r'\s+', ' ', raw)
        m = re.search(r'\d+[wdmh] [•·]\s*(.+?)(?:Show translation|Like Comment)', raw)
        if m:
            text = m.group(1).strip()

    # Images
    images = extract_images(chunk)

    # Stats
    if is_featured:
        reactions = extract_featured_reactions(content, urn)
        stats = {'reactions': reactions, 'comments': 0, 'reposts': 0}
    else:
        stat_chunk = content[positions[0]:positions[1] + 500]
        stats = extract_stats_from_chunk(stat_chunk)

    # Folder name
    first_line = text.split('\n')[0] if text else f'post_{urn}'
    folder_name = f'{date.strftime("%Y-%m-%d")}_{slugify(first_line)}'

    posts_data.append({
        'urn': urn, 'date': date, 'folder': folder_name,
        'text': text, 'images': images, 'stats': stats,
        'is_featured': is_featured,
    })

    print(f'\n[{date}]{"*" if is_featured else " "} {folder_name}')
    print(f'  text:   {text[:90]!r}')
    print(f'  images: {images}')
    print(f'  stats:  {stats}')

# ── Write output ──────────────────────────────────────────────────────────────
print('\n\n── Writing output ──')
if OUTPUT_DIR.exists():
    shutil.rmtree(OUTPUT_DIR)
OUTPUT_DIR.mkdir()

for post in posts_data:
    folder = OUTPUT_DIR / post['folder']
    folder.mkdir()

    # post.md
    (folder / 'post.md').write_text(
        f'# {post["date"].strftime("%B %d, %Y")}\n\n{post["text"]}\n',
        encoding='utf-8'
    )

    # statistics.md
    s = post['stats']
    (folder / 'statistics.md').write_text(
        '# Statistics\n\n'
        '| Metric      | Value |\n'
        '|-------------|-------|\n'
        f'| Reactions   | {s["reactions"]} |\n'
        f'| Comments    | {s["comments"]} |\n'
        f'| Reposts     | {s["reposts"]} |\n'
        '| Impressions | N/A |\n',
        encoding='utf-8'
    )

    # Images — prefer full-size (1) variant, add .jpg extension
    copied = []
    for img_name in post['images']:
        resolved = resolve_image(img_name)
        if resolved:
            src_path, dest_name = resolved
            shutil.copy2(src_path, folder / dest_name)
            copied.append(dest_name)
        else:
            print(f'  MISSING image: {img_name}')

    print(f'  ✓ {folder.name}  [{len(copied)} image(s): {copied}]')

print('\nDone! Created', sum(1 for _ in OUTPUT_DIR.iterdir()), 'post folders.')
