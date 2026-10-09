# Amish Kumar Dubey · Engineering Portfolio

[![Live Site](https://img.shields.io/badge/Live_Portfolio-Firebase_Hosting-E0115F?style=for-the-badge&logo=firebase&logoColor=white)](https://my-portfolio-97f92.web.app/)
[![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A high-performance, dark-mode developer portfolio and competitive programming dashboard built for **Amish Kumar Dubey** — Full-stack developer and competitive programmer at **BIT Mesra** (B.Tech ECE, 2024–2028).

---

## 🌟 Key Highlights

### 1. ⚡ Live Competitive Programming & GitHub Telemetry
Real-time stats dynamically fetched on the client side with graceful fallback handling:
- **Codeforces:** Current rating, max peak rating, rank title, and unique solved count via official Codeforces API.
- **LeetCode:** Live problem-solving counts (Total, Easy, Medium, Hard) hydrated from `alfa-leetcode-api`.
- **GeeksforGeeks:** Aggregate verified solved problem metrics.
- **GitHub Profile:** Live public repository count and open-source contribution calendar metrics.

### 2. 🛡️ Multi-Layer Protected Contact Terminal
Enterprise-grade defense mechanisms against spam bots and malicious flooding:
- **Invisible Honeypot Trap (`_gotcha`):** Catches automated bots that auto-fill hidden input fields and silently deflects them.
- **Velocity Check:** Flags and rejects rapid submissions completed in under 2 seconds.
- **Session Rate Limiter:** Enforces a maximum of 3 submissions per 10-minute sliding window via `sessionStorage`.
- **Input Sanitization:** Strips HTML/script tags and enforces strict character limits.
- **Interactive Copy:** One-click email copy button with instant visual feedback.

### 3. 🎯 Command Palette (`⌘K` / `Ctrl+K`)
Keyboard-driven modal navigation featuring:
- Instant section jumping (About, Stack, Projects, Contests, Journey, Contact).
- One-click resume viewing & download.
- Interactive canvas-confetti celebration.
- Keyboard navigation with arrow keys and `Enter`.

### 4. 🛠️ Branded Tech Stack Showcase
25+ technologies categorized into Languages, Frontend, Backend & Databases, and Tools & Platforms, featuring crisp, color-accurate inline SVG branded vector icons.

### 5. 🚀 High-Performance Static HTML Export
Configured with `output: "export"` in `next.config.ts`, generating blazing-fast, serverless-ready static assets compatible with Firebase Hosting, GitHub Pages, Vercel, and Cloudflare Pages.

---

## 🏗️ Project Architecture

```
my/
├── public/                 # Static assets, icons, resume PDF
├── src/
│   ├── app/
│   │   ├── globals.css     # Design tokens, keyframe animations, typography
│   │   ├── layout.tsx      # Root layout, Space Grotesk & JetBrains Mono fonts
│   │   └── page.tsx        # Single-page application orchestrator
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky frosted header with scroll-progress & mobile drawer
│   │   ├── HeroSection.tsx       # Hero showcase with CTA and quick stats
│   │   ├── AboutSection.tsx      # Personal background and engineering focus
│   │   ├── SkillsSection.tsx     # 25+ Tech skills with branded SVG icons
│   │   ├── ProjectsSection.tsx   # Curated showcase cards & live GitHub repos
│   │   ├── CPSection.tsx         # Live Codeforces, LeetCode, GFG & GitHub telemetry
│   │   ├── JourneySection.tsx    # Chronological academic & leadership timeline
│   │   ├── ContactSection.tsx    # Spam-protected contact form with Formspree
│   │   ├── CommandPalette.tsx    # ⌘K Spotlight command modal
│   │   └── Footer.tsx            # Minimalist footer
│   └── lib/
│       └── utils.ts              # Core utilities (cn helper)
├── design.md               # Design system & technical specification
├── next.config.ts          # Next.js static export configuration
└── package.json            # Project dependencies and build scripts
```

---

## 🛠️ Technology Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js (App Router, Static Export) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 + Custom Vanilla CSS Variables |
| **Typography** | Space Grotesk & JetBrains Mono via `next/font/google` |
| **Icons** | Lucide React + Custom Inline SVGs |
| **Micro-Interactions** | Canvas Confetti, CSS Keyframe Animations |
| **Form Service** | Formspree |
| **Deployment** | Firebase Hosting |

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js 18.x or later
- npm or yarn

### 1. Clone & Install
```bash
git clone https://github.com/AMISH754/My-Portfolio.git
cd My-Portfolio
npm install
```

### 2. Configure Environment Variables
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_FORMSPREE_URL=https://formspree.io/f/xzdqnbel
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```
This generates the optimized static bundle in the `out/` directory, ready to deploy.

---

## 📄 License & Attribution

Designed and engineered with care by **Amish Kumar Dubey**. Open-sourced under the [MIT License](LICENSE).
