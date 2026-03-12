# Component Reference

All imports from `linkedin-carousel-generator/src/shared/components`.

## Layout

### `Slide`
Base slide wrapper. Applies background gradient, dimensions, decorative circles.

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `children` | ReactNode | required | |
| `style` | CSSProperties | — | Merged into outer div |
| `showDecorations` | boolean | `true` | Decorative circles + corner bracket |

### `SlideLayout`
Wraps `Slide` with standard structure: header, footer, watermark — all z-index managed.

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `children` | ReactNode | required | Rendered inside flex column |
| `header` | boolean | `true` | Show `SlideHeader` |
| `footer` | boolean | `true` | Show `PageIndicator` (needs slideNumber + totalSlides) |
| `watermark` | string | — | e.g. `"02"`. Rendered at z-index 0 |
| `slideNumber` | number | — | 1-based current slide |
| `totalSlides` | number | — | Total slides in carousel |
| `title` | string | — | Override header name |
| `style` | CSSProperties | — | Passed to inner `Slide` |

## Content

### `ContentBox`
Dark container with 3D shadow variants.

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `children` | ReactNode | required | |
| `variant` | `"raised"` / `"raisedStrong"` / `"inset"` / `"flat"` | `"raised"` | Shadow style |
| `accentBorder` | `"left"` / `"top"` / `"none"` | `"none"` | Adds 4px accent border |
| `style` | CSSProperties | — | |

**When to use which variant:**
- `raised` — Default for content cards, info boxes
- `raisedStrong` — Hero elements (big stats, key quotes)
- `inset` — Stamped/pressed look (taglines, meta pills, secondary info)
- `flat` — No shadow; combine with `accentBorder` for quote-style blocks

## Typography

### `Headline`
Oswald Bold, uppercase.

| Prop | Type | Default |
|------|------|---------|
| `size` | `"xl"` (86px) / `"lg"` (58px) / `"md"` (48px) / `"sm"` (30px) | `"lg"` |
| `color` | string | `colors.text` |
| `style` | CSSProperties | — |

### `Subhead`
Roboto Light 34px.

| Prop | Type | Default |
|------|------|---------|
| `style` | CSSProperties | — |

### `Body`
Roboto Regular.

| Prop | Type | Default |
|------|------|---------|
| `size` | `"lg"` (32px) / `"md"` (28px) / `"sm"` (22px) | `"md"` |
| `opacity` | number | `0.9` |
| `style` | CSSProperties | — |

### `Label`
JetBrains Mono, uppercase, muted.

| Prop | Type | Default |
|------|------|---------|
| `style` | CSSProperties | — |

### `Highlight`
Inline `<span>` in accent color, bold.

| Prop | Type | Default |
|------|------|---------|
| `color` | string | `colors.accent` |
| `style` | CSSProperties | — |

## UI Elements

### `Avatar`
Circular portrait with glow ring (accent border + radial glow backdrop).

| Prop | Type | Default |
|------|------|---------|
| `size` | number | `280` |
| `src` | string | `"portrait_116578_clean.png"` |
| `glowIntensity` | `"normal"` / `"strong"` / `"none"` | `"normal"` |
| `style` | CSSProperties | — |

### `Badge`
Rounded square with accent background. For numbered lists.

| Prop | Type | Default |
|------|------|---------|
| `size` | number | `52` |
| `color` | string | `colors.text` |
| `bg` | string | `colors.accent` |
| `style` | CSSProperties | — |

### `Button`
Pill-shaped CTA button.

| Prop | Type | Default |
|------|------|---------|
| `variant` | `"primary"` / `"secondary"` | `"primary"` |
| `style` | CSSProperties | — |

Primary: accent bg, white text, glow shadow.
Secondary: transparent bg, accent border + text.

### `AccentLine`
Gradient horizontal divider.

| Prop | Type | Default |
|------|------|---------|
| `width` | string / number | `"100%"` |
| `direction` | `"center"` / `"left"` / `"right"` | `"center"` |
| `style` | CSSProperties | — |

### `SwipeHint`
"SWIPE →" text in accent color with glow. Use on cover slide.

| Prop | Type | Default |
|------|------|---------|
| `style` | CSSProperties | — |

### `Watermark`
Large faded background number. Auto z-index 0 (behind content).

| Prop | Type | Default |
|------|------|---------|
| `number` | string | required |
| `style` | CSSProperties | — |

### `PageIndicator`
Progress dots at bottom-right. Active dot is pill-shaped with accent glow.

| Prop | Type | Default |
|------|------|---------|
| `current` | number | required |
| `total` | number | required |

### `SlideHeader`
Name + role with accent underline.

| Prop | Type | Default |
|------|------|---------|
| `name` | string | `"DUSTIN WALKER"` |
| `role` | string | `"Gen AI Engineer"` |

## Theme Tokens

Access via `import { colors, shadows, gradients } from "../../shared/theme"`.

### `shadows`
- `shadows.raised` — Standard elevated box
- `shadows.raisedStrong` — Hero-level elevation
- `shadows.inset` — Pressed-in / stamped
- `shadows.portraitRing` — Multi-ring portrait effect
- `shadows.soft` — Subtle shadow
- `shadows.glow(color, spread?)` — Radial glow (for textShadow or boxShadow)

### `gradients`
- `gradients.slideBackground` — Radial gradient for slide bg
- `gradients.accentLine` — Center-out accent fade
- `gradients.accentBarRight` / `accentBarLeft` — Directional accent fade
- `gradients.containerHighlight` — Subtle top highlight for raised boxes
