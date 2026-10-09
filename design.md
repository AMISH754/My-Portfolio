# Design System & Technical Architecture · Amish Kumar Dubey Portfolio

## 1. Aesthetic Vision: "Dark Crimson & Technical Precision"

The portfolio embodies a **high-performance, cyber-minimalist dark aesthetic** inspired by modern developer terminals, competitive programming dashboards, and premium developer tools. It balances technical rigor with vibrant Ruby/Crimson accents and micro-animations.

---

## 2. Color Palette & Design Tokens

A curated dark palette optimized for contrast, readability, and visual impact:

| Token | Value | Role & Usage |
|---|---|---|
| `--bg-base` | `#000000` | Pure deep black background for infinite depth |
| `--bg-surface` | `rgba(255, 255, 255, 0.03)` | Subtle card fills and container surfaces |
| `--bg-frosted` | `rgba(5, 5, 8, 0.92)` | Sticky navbar and modal backdrop with `backdrop-filter: blur(16px)` |
| `--ruby` | `#e0115f` | Primary brand accent — active states, primary CTA buttons, highlight badges |
| `--ruby-l` | `#f2477f` | Hover glow, gradients, secondary highlights, active indicator dots |
| `--ink` | `#f3f3f6` | Primary high-contrast text |
| `--mute` | `#8f8f9c` | Secondary descriptions, captions, timestamps |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | Hairline dividers, card outlines, subtle grid rules |
| `--border-accent` | `rgba(224, 17, 95, 0.35)` | Interactive focus states and hover borders |

---

## 3. Typography System

Typography pairs modern geometric display font with an engineered monospace typeface via Google Fonts (`next/font/google`):

- **Display & Body Font:** `Space Grotesk` (`--font-space`, subsets: `latin`)
  - Confident, clean, geometric letterforms.
  - Headings: `font-bold` to `font-medium`, tight tracking (`-0.02em` to `-0.03em`).
  - Fluid typography scaling via CSS `clamp()` for cross-device fluidity.
- **Monospace Font:** `JetBrains Mono` (`--font-jetbrains`, subsets: `latin`)
  - Used for numbers, code tags, section labels (`01 / about`, `06 / contact`), telemetry stats, and badges.
  - Crisp ligatures and technical aesthetic.

---

## 4. UI Components & Layout Hierarchy

### Layout Cadence
1. **`Navbar` (Sticky / Frosted):**
   - Live scroll-progress bar (`scaleX(scrollProgress)`).
   - Brand title `Amish Kumar Dubey` (clean, unadorned).
   - Navigation links with hover underlines.
   - Keyboard shortcut trigger `⌘K` for Spotlight Command Palette.
   - Responsive mobile drawer with backdrop blur.
2. **`HeroSection`:**
   - Impactful title, live availability status beacon, quick bio.
   - Direct CTA buttons: *Explore Projects*, *Get in Touch*, and resume links.
3. **`AboutSection`:**
   - Personal introduction, BIT Mesra background, engineering philosophy.
4. **`SkillsSection`:**
   - 25+ technology stack items organized into categorized domains:
     - Languages (C++, C, Python, JavaScript, TypeScript, SQL)
     - Frontend (React, Next.js, Tailwind CSS, HTML5, CSS3, Redux)
     - Backend & Databases (Node.js, Express, MongoDB, PostgreSQL, REST APIs)
     - Tools & Platforms (Git, GitHub, Docker, Postman, Linux, Vercel, Firebase)
   - Every skill features an authentic, branded inline SVG vector icon.
5. **`ProjectsSection`:**
   - Curated showcase cards with tech stack tags, live demo links, and GitHub links.
   - Tab switch to explore live repositories directly from GitHub.
6. **`CPSection` (Competitive Programming Telemetry):**
   - Real-time client-side stats fetched via live public APIs:
     - **Codeforces:** Current rating, peak rating, rank title, solved problem tally.
     - **LeetCode:** Solved count breakdown (Total, Easy, Medium, Hard) via `alfa-leetcode-api`.
     - **GeeksforGeeks & GitHub:** Global metrics, repository counts, contribution tally.
   - Fallback offline data ensures 100% uptime even if third-party endpoints rate-limit.
7. **`JourneySection`:**
   - Chronological engineering milestone ledger detailing academic milestones (BIT Mesra), leadership (Joint Secretary @ IETE Student Forum), and technical development.
8. **`ContactSection`:**
   - Direct outreach portal with interactive copy-to-clipboard email card.
   - Multi-layer bot defense and Formspree integration.
9. **`CommandPalette` (`⌘K` Spotlight):**
   - Keyboard-driven modal search with instant section jumps, social links, resume download, and confetti celebration triggers.
10. **`Footer`:**
    - Minimalist closing signature, copyright, and navigation links.

---

## 5. Security & Defensive Architecture (Contact Form)

The contact transmission channel employs a 5-tier defensive pipeline:

1. **Invisible Honeypot Trap (`_gotcha`):**
   - Offscreen input hidden with `left: -9999px` and `aria-hidden="true"`.
   - Automated spam bots auto-fill all visible inputs; if detected, the submission is silently intercepted with a faux success response.
2. **Velocity & Timing Check:**
   - Computes elapsed time from component mount (`Date.now() - formLoadTime`).
   - Submissions submitted in `< 2000ms` (automated bot scripts) are flagged and rejected.
3. **Session Sliding Rate Limiter:**
   - Restricts users to maximum **3 submissions per 10-minute window** in `sessionStorage` to prevent DoS flooding and protect Formspree quotas.
4. **Input Sanitization & Boundary Validation:**
   - Strips malicious HTML tags and script characters (`<`, `>`, quotes).
   - Strict input length caps: Name (100 chars), Email (254 chars), Message (2000 chars).
   - Strict RFC email regex validation.
5. **Formspree Integration:**
   - Reliable serverless dispatch to `formspree.io` with clean error handling and user feedback.

---

## 6. Performance & Build Architecture

- **Static Export Mode:** Configured with `output: "export"` in `next.config.ts`, generating zero-server dependency static HTML/CSS/JS deployable on Firebase Hosting, Vercel, or GitHub Pages.
- **Zero Hydration Mismatch:** Clean SSR/client lifecycle synchronization with `suppressHydrationWarning` on root document tags.
- **Zero Dead Code:** Pure, tree-shaken dependency bundle with all unused components removed.
