---
name: carousel-pdf
description: Create LinkedIn carousel PDFs using React Remotion with a neumorphic 3D design system. Use when the user wants to create a carousel, PDF carousel, LinkedIn slides, or mentions carousel design. Requires a finished LinkedIn post as input.
---

# LinkedIn Carousel PDF Creator

## Prerequisites

**A carousel is always based on a finished LinkedIn post.** If no post is referenced, ask the user to provide or reference a specific post before proceeding. Do not start designing without post content.

## Design Philosophy

This is NOT Canva. We use **React + Remotion + inline CSS** to render slides as high-res PNGs and assemble them into a PDF. This gives us full CSS power: multi-layer box-shadows, radial gradients, absolute positioning, transforms, blend modes — anything CSS can do.

**Core principles:**
- **Dark mode first** — Deep Teal `#116578` as canvas (via radial gradient)
- **Neumorphic 3D** — Raised and inset box-shadows create depth and haptic feel
- **Clean, not flashy** — Professional engineering aesthetic, not marketing glitter
- **Breathe** — Generous whitespace; let elements stand on their own
- **Accent sparingly** — Deep Rust `#C05640` at max ~10% of surface area
- **Push boundaries** — Leverage CSS to create visuals impossible in Canva (glows, layered shadows, gradient overlays, decorative geometry)

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `colors.primary` | `#116578` | Slide background (via gradient) |
| `colors.container` | `#0D4D5C` | Raised/inset box backgrounds |
| `colors.accent` | `#C05640` | Highlights, badges, buttons, key numbers |
| `colors.text` | `#F0F7F8` | All text (off-white, never pure white or black) |
| `colors.textMuted` | `rgba(240,247,248,0.5)` | Labels, meta text |

Full tokens including shadow presets and gradients: `linkedin-carousel-generator/src/shared/theme.ts`

## Typography

| Component | Font | Weight | Role |
|-----------|------|--------|------|
| `<Headline>` | Oswald | 700 | Titles, statements. Always UPPERCASE. Sizes: `xl`/`lg`/`md`/`sm` |
| `<Subhead>` | Roboto | 300 | Subtitles, lighter supporting statements |
| `<Body>` | Roboto | 400 | Reading text. Sizes: `lg`/`md`/`sm` |
| `<Label>` | JetBrains Mono | 400 | Meta info, tags, technical labels |
| `<Highlight>` | (inherit) | 700 | Inline accent-colored emphasis |

## Available Components

Import from `../../shared/components`:

- **Layout:** `Slide`, `SlideLayout`
- **Content:** `ContentBox` (variants: `raised`/`raisedStrong`/`inset`/`flat`; accentBorder: `left`/`top`/`none`)
- **Typography:** `Headline`, `Subhead`, `Body`, `Label`, `Highlight`
- **UI:** `Avatar`, `Badge`, `Button`, `SwipeHint`, `AccentLine`, `PageIndicator`, `Watermark`

For full component props, see [components.md](components.md).
For a working carousel example, read `linkedin-carousel-generator/src/carousels/example/Carousel.tsx`.

## Workflow

### Step 1: Analyze the post

Read the referenced LinkedIn post. Identify:
- The core message / hook
- 3-5 key points that map to individual slides
- A strong opening statement for the cover
- Stats, numbers, or quotes to feature prominently

Plan a **4-6 slide** structure:

| Slide | Purpose | Layout |
|-------|---------|--------|
| 1 | **Cover** — Hook headline, portrait, tagline | `Slide` (custom centered) |
| 2 | **Problem / Hook** — Attention-grabber, key stat | `SlideLayout` |
| 3-4 | **Content** — Key insights, lists, steps | `SlideLayout` |
| 5-6 | **CTA** — Follow/connect with portrait | `Slide` (custom centered) |

### Step 2: Create the carousel

1. Create folder: `linkedin-carousel-generator/src/carousels/<name>/`
2. Create `Carousel.tsx` exporting the component and a `<NAME>_SLIDE_COUNT` constant
3. Each slide is a local function component; switch via `useCurrentFrame()`
4. Use `SlideLayout` for content slides (auto header, footer, watermark with correct z-stacking)
5. Use raw `Slide` for custom layouts (cover, CTA)

### Step 3: Register the composition

Add to `linkedin-carousel-generator/src/Root.tsx`:

```tsx
<Composition
  id="<name>"
  component={MyCarousel}
  durationInFrames={SLIDE_COUNT}
  fps={1}
  width={SLIDE_WIDTH}
  height={SLIDE_HEIGHT}
/>
```

### Step 4: Render, View, Improve (repeat)

This is the critical loop. Do not skip it.

```
- [ ] Render:  npm run render -- <name>
- [ ] Review EVERY slide by reading the PNGs in linkedin-carousel-generator/review/ (slide-1.png, slide-2.png, ...)
- [ ] Identify issues (spacing, hierarchy, readability, balance)
- [ ] Fix in code
- [ ] Re-render and review again
- [ ] Repeat until quality exceeds expectations
```

Run from `linkedin-carousel-generator/`:
```bash
npm run render -- <name>
```

Output lands in `linkedin-carousel-generator/out/<name>.pdf` (rendered at 3x resolution).
Review PNGs land in `linkedin-carousel-generator/review/slide-{n}.png` — use these to visually inspect each slide.

For live preview during development: `npm run studio`

### Quality Checklist (per slide)

- [ ] One clear focal point per slide
- [ ] Text large enough to read on mobile
- [ ] Accent color used for emphasis only, not decoration
- [ ] Boxes use correct variant (`raised` for content, `inset` for meta/tags, `raisedStrong` for hero stats)
- [ ] Sufficient padding between elements (minimum 20px gaps)
- [ ] No text overlapping decorative elements (check z-index)
- [ ] Visual variety across slides (not all identical layouts)

## Content Language

Write all carousel slide text in **German**.

## Key Conventions

- Slides: **1080x1350px** (LinkedIn portrait carousel)
- `durationInFrames` = number of slides, `fps` = 1
- Assets in `assets/` (repo root) are available via `staticFile()`
- Export slide count constant alongside the carousel component
- **Inline `style={{}}` only** — no CSS files, no Tailwind
- All styles use `React.CSSProperties` objects
- Design tokens come from `shared/theme.ts`, fonts from `shared/fonts.ts`
