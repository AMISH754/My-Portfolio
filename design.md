# Mono — Quiet & Precise

## North Star: "Printed Specimen"
Sleek, calm and exact, like a well-made type specimen or an architecture studio's portfolio. Black, white, and grays only. Character comes from typography, spacing, thin rules, and confident layout, not from decorative effects. Every element appears placed by hand with architectural precision.

---

## 1. Color Palette & Tokens

Neutrals only, slightly warm so the page avoids sterile coldness.

| Token | Hex | Usage |
|---|---|---|
| `white` | `#FAFAF8` | Page background. Warm off-white. Never pure `#FFFFFF`. |
| `surface` | `#F1F1EE` | Alternate section fills, hover states, input backgrounds. |
| `line` | `#DAD9D4` | Hairline borders, table dividers, and section separators. |
| `gray-400` | `#A3A29D` | Disabled text, subtle labels, placeholder values. |
| `gray-600` | `#6B6A66` | Secondary body copy, captions, meta tags, and subtitles. |
| `ink` | `#151514` | Primary text, display headings, solid buttons. Never pure `#000000`. |
| `ink-deep` | `#0C0C0B` | Full-bleed dark sections (`03 // Benchmarks`, `Footer`). |

### Rules:
- The interface is predominantly `white` (`#FAFAF8`) and `ink` (`#151514`). Grays provide support without dominating.
- Uses rhythmic full-bleed `ink-deep` (`#0C0C0B`) dark sections for contrast, paired with crisp `white` text.
- No gradients, no glowing borders, no glassmorphism blur tricks, and no saturated color accents.

---

## 2. Typography System

- **Display & Body Typeface:** `Schibsted Grotesk` (Fallback: `Hanken Grotesk`, `system-ui`, `sans-serif`)
  - Narrow, sharp, and confident.
  - Headings are set to medium weight (`500`), avoiding heavy bold weights.
  - Tight tracking: `-0.03em` on `h1`, `-0.02em` on `h2`, line-height `1.05–1.1`.
- **Meta / Index Typeface:** `IBM Plex Mono` (12px, uppercase, letter-spacing `0.08em`, `gray-600`)
  - Used for document stamps, section indexes (`00` to `08`), technical data tags, and parameters.
- **Scale Contrast:**
  - `h1`: `clamp(48px, 6.5vw, 104px)`
  - `h2`: `clamp(32px, 4vw, 44px)`
  - `h3`: `20px` (line-height `1.25`)
  - Body: `16px` (line-height `1.6`, max reading width `~64ch`)

---

## 3. Lines, Shapes & Elevation

- **Borders:**
  - `1px solid var(--line)` (`#DAD9D4`) for cards, section rules, and specimen table cells.
  - `1px solid var(--ink)` (`#151514`) for active buttons, outlines, and focus rings.
- **Corner Radii:**
  - `4px` (`var(--radius)`) for interactive buttons, inputs, and command dialogs.
  - `0–2px` (`var(--radius-sm)`) for specimen cards, tables, and images.
  - No rounded pills or large circular geometries.
- **Shadows:**
  - `box-shadow: none;` across all components. Visual depth is established through hairline borders, surface tone changes, and generous whitespace.
- **Section Dividers:**
  - Full-width hairline rules (`1px solid var(--line)`) cleanly separate sections like a printed monograph.

---

## 4. Motion & Micro-Interactions

Precise, subtle, and snappy:
- **Buttons:** Fill swaps from `ink` (`#151514`) to `#2A2A28` in `150ms`. No scaling or lifting.
- **Links:** Underline transitions smoothly on hover via text-decoration-color (`200ms`).
- **Cards:** Hover transitions border from `line` (`#DAD9D4`) to `ink` (`#151514`) with zero translation or scale.
- **Arrow Glyphs (`→`):** Nudge `translateX(3px)` on hover of their parent link or button.
- **Timing Function:** `cubic-bezier(0.25, 0.1, 0.25, 1)` with `120–200ms` duration.
- **Accessibility:** Fully supports `prefers-reduced-motion: reduce`.

---

## 5. Component Specifications

- **Primary Button (`.btn-primary`):**
  - Fill: `var(--ink)`, Text: `var(--white)`, Radius: `4px`, Padding: `12px 20px`, Weight: `500`. Label format: action verb + `→`.
- **Secondary Button (`.btn-secondary`):**
  - Transparent fill, `1px solid var(--ink)` border, `var(--ink)` text, `4px` radius. Hover fill: `var(--surface)`.
- **Specimen Cards (`.specimen-card`):**
  - `1px solid var(--line)` border, `0–2px` radius, `24–32px` padding. Features a mono index header (`CASE 01 · 2026`).
- **Form Inputs (`.specimen-input`):**
  - `var(--surface)` background, `1px solid var(--line)` border, `4px` radius. Focus: `outline: 2px solid var(--ink); outline-offset: 2px;`.
- **Tags (`.specimen-tag`):**
  - Monospace uppercase text, `1px solid var(--line)` border, `2px` radius.

---

## 6. Page Cadence & Section Architecture

1. **`00 // Hero Specimen`:** Asymmetrical 12-column grid. Left 8 columns with large heading + direct CTAs; right 4 columns with live data telemetry index.
2. **`01 // Biography & Specifications`:** 2-column split with academic background and verified metrics ledger.
3. **`02 // Technical Index`:** 4-category taxonomy table (Languages, Frontend, Backend, Toolchain).
4. **`03 // Algorithmic Benchmarks`:** Full-bleed `#0C0C0B` dark section with live API telemetry (Codeforces, LeetCode, GitHub).
5. **`04 // Signal Processing Lab`:** Architectural CRT oscilloscope simulation with harmonic superposition, noise parameter sliders, and wave equations.
6. **`05 // Selected Works`:** Case study grid (`CASE 01` through `CASE 04`) with naturally toned image previews, mono meta headers, and technical feature breakdowns.
7. **`06 // Recognitions & Leadership`:** Chronological ledger table for IETE Joint Secretary and institutional initiatives.
8. **`07 // Academic Record`:** Chronological academic ledger (BIT Mesra, St. Xavier's, Bishop Hartmann Academy).
9. **`08 // Direct Inquiries`:** Clean communication portal with focus-outlined inputs and transmission status.
10. **`Colophon / Footer`:** Full-bleed `#0C0C0B` closing statement and typography index.
11. **`Command Palette`:** `[ ⌘K ]` modal search frame with keyboard navigation.

---

## 7. Verified Metrics & Data Integrity

- **Cumulative GPA:** `8.67 / 10.0 (till 4th Sem)`
- **Algorithmic Solutions:** `750+ Problems`
- **Institution:** Birla Institute of Technology, Mesra (B.Tech in ECE, 2024–2028)
- **Leadership Office:** Joint Secretary, IETE Student Forum (2026–2027 tenure)

---

## 8. Anti-Patterns Explicitly Avoided

- ❌ Inter, Geist, Poppins, DM Sans, Plus Jakarta Sans
- ❌ Pure `#000000` on pure `#FFFFFF`
- ❌ Gradient text, glowing borders, glassmorphism, blurred background blobs
- ❌ Dark mode with dot matrix patterns or radial spotlights
- ❌ Centered heroes with pill badges
- ❌ Floating/lifting cards with drop shadows on hover (`scale()`)
- ❌ Sparkle icons, emoji bullets, or buzzword copy
