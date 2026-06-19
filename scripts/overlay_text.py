"""Add a clean, high-contrast text overlay to the LinkedIn post photo.

Finds the bright wall gap between the two stacked photos and places a bold
caption there with a semi-transparent pill background and drop shadow.
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageStat

POST_DIR = Path(
    r"c:\git_repos\_personal\linkedin-posts\my-linkedin-posts\_personal"
    r"\2026-06-06_5_jahre_wissen_5_jahre_dokumente"
)
BASE = POST_DIR / "alte-ordner-regal.png"
OUT = POST_DIR / "alte-ordner-regal-overlay.png"

TEXT = "Alles wertlos?"
FONT_PATH = r"C:\Windows\Fonts\arialbd.ttf"


def find_gap_center(img: Image.Image) -> int:
    """Return the y of the brightest, most uniform horizontal band in the
    middle third of the image (the white wall between the two photos)."""
    gray = img.convert("L")
    w, h = gray.size
    start, end = int(h * 0.40), int(h * 0.72)
    best_y, best_score = (start + end) // 2, -1.0
    for y in range(start, end):
        row = gray.crop((0, y, w, y + 1))
        stat = ImageStat.Stat(row)
        brightness = stat.mean[0]
        uniformity = 255 - stat.stddev[0]
        score = brightness + uniformity
        if score > best_score:
            best_score, best_y = score, y
    return best_y


def fit_font(draw, text, max_width):
    size = 10
    font = ImageFont.truetype(FONT_PATH, size)
    while True:
        nxt = ImageFont.truetype(FONT_PATH, size + 4)
        bbox = draw.textbbox((0, 0), text, font=nxt)
        if bbox[2] - bbox[0] > max_width:
            return font
        size += 4
        font = nxt


def main():
    img = Image.open(BASE).convert("RGBA")
    w, h = img.size
    gap_y = find_gap_center(img)

    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    font = fit_font(draw, TEXT, int(w * 0.82))
    bbox = draw.textbbox((0, 0), TEXT, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    tx = (w - tw) // 2 - bbox[0]
    ty = gap_y - th // 2 - bbox[1]

    pad_x, pad_y = int(tw * 0.08), int(th * 0.45)
    box = [
        tx + bbox[0] - pad_x,
        ty + bbox[1] - pad_y,
        tx + bbox[0] + tw + pad_x,
        ty + bbox[1] + th + pad_y,
    ]
    radius = (box[3] - box[1]) // 2
    draw.rounded_rectangle(box, radius=radius, fill=(15, 15, 18, 205))

    shadow = (0, 0, 0, 160)
    for dx, dy in [(3, 3), (2, 2)]:
        draw.text((tx + dx, ty + dy), TEXT, font=font, fill=shadow)
    draw.text((tx, ty), TEXT, font=font, fill=(235, 64, 52, 255))

    out = Image.alpha_composite(img, overlay).convert("RGB")
    out.save(OUT, quality=95)
    print(f"size={w}x{h} gap_y={gap_y} font={font.size} -> {OUT.name}")


if __name__ == "__main__":
    main()
