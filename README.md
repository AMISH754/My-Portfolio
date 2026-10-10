# Amish Kumar Dubey · Engineering Portfolio

<div align="center">

[![Live Site](https://img.shields.io/badge/Live_Portfolio-Firebase_Hosting-E0115F?style=for-the-badge&logo=firebase&logoColor=white)](https://amish-kr-dubey.web.app/)
[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-FCD34D?style=for-the-badge)](LICENSE)

<br/>

**A high-performance, dark-mode developer portfolio and competitive programming dashboard**  
Engineered for **Amish Kumar Dubey** — Full-stack developer & competitive programmer at **BIT Mesra** (B.Tech ECE, 2024–2028 | CGPA 8.67/10.0).

[Explore Live Portfolio](https://amish-kr-dubey.web.app/) · [Report Issue](https://github.com/AMISH754/My-Portfolio/issues) · [View Resume](https://amish-kr-dubey.web.app/resume.pdf)

</div>

---

## 🌟 Key Features & Architectural Highlights

### 1. ⚡ Live Competitive Programming & GitHub Telemetry
Client-side real-time data fetching with resilience and graceful fallbacks:
- **Codeforces API:** Fetches current rating, maximum peak rating, rank title, and unique solved count.
- **LeetCode Telemetry:** Problem-solving statistics hydrated dynamically via `alfa-leetcode-api` (Total, Easy, Medium, Hard breakdown).
- **GeeksforGeeks & CodeChef:** Aggregate verified solved metrics across platforms (550+ algorithmic problems solved).
- **GitHub Profile Metrics:** Live public repository count, followers, stars, and open-source contributions.

### 2. 🛡️ Multi-Layer Protected Contact Terminal
Enterprise-grade anti-spam and verification pipeline securing form submissions:
- **Invisible Honeypot Trap (`_gotcha`):** Catches automated bots that fill hidden fields and silently deflects submissions.
- **Velocity Check:** Flags and rejects rapid submissions completed in under 2 seconds.
- **Session Rate Limiter:** Limits users to a maximum of 3 submissions per 10-minute sliding window via `sessionStorage`.
- **Input Sanitization:** Strips HTML/script tags and enforces strict character boundaries.
- **Interactive Copy:** One-click email copy button with instant visual feedback and tooltip state.

### 3. 🎯 Command Palette (`⌘K` / `Ctrl+K`)
Keyboard-driven modal navigation and micro-interactions:
- Instant navigation jumps (`About`, `Stack`, `Projects`, `Contests`, `Journey`, `Contact`).
- One-click resume viewing & downloading (`/resume.pdf`).
- Canvas-confetti celebration trigger for instant user delight.
- Full keyboard support (arrow keys, `Enter`, `Escape`).

### 4. 🎨 Kinetic Design & Dark Crimson Aesthetics
- **Animated Geometric Backdrop:** Custom mathematical SVG flower lattice with scroll-driven parallax offsets.
- **Floating Embers & Sparks:** Procedural particles with CSS keyframe physics and glowing purple/crimson radial gradients.
- **Frosted Glass Navbar:** Dynamic blur backdrop with real-time reading progress bar and responsive mobile navigation drawer.

### 5. 🛠️ Branded Tech Stack Showcase
Curated collection of 25+ technologies categorized into Languages, Frontend, Backend & Databases, and Tools & Platforms, featuring color-accurate inline SVG vector badges.

### 6. 🚀 High-Performance Static HTML Export
Configured with `output: "export"` in `next.config.ts`, generating serverless, blazing-fast static assets ready for deployment on Firebase Hosting, Cloudflare Pages, Vercel, or GitHub Pages.

---

## 💻 Featured Projects

| Project | Highlights | Tech Stack | Links |
|---|---|---|---|
| **NexJyoti Education Foundation** | High-performance SPA with staff management, public ID verification portal, dynamic digital card generation, and automated applicant emails. | React 18, Vite 5, Firebase Auth, Firestore, EmailJS | [Live Demo](https://nexjyoti.org/) · [GitHub](https://github.com/AMISH754) |
| **Heart Talk 💬** | Real-time messaging and media sharing platform with dynamic online presence indicators, direct Cloudinary uploads, and sleek dark UI. | React 18, Vite, Cloud Firestore, Cloudinary API, Firebase | [Live Demo](https://chat-app-59c85.web.app/) · [GitHub](https://github.com/AMISH754) |
| **VortexCast Weather 🌀** | Glassmorphic atmospheric dashboard with GPS location tracking, dynamic gradient transitions based on weather state, 24h & 5-day forecasts. | React 19, Vite 7, Tailwind CSS v4, Axios, OpenWeatherMap API | [Live Demo](https://weather-app-opal-eight-42.vercel.app/) · [GitHub](https://github.com/AMISH754) |

---

## 🏗️ Project Architecture

```text
my/
├── public/                 # Static assets, screenshots, resume PDF
│   ├── bookpulse.png       # Project preview
│   ├── hearttalk.png       # Chat application screenshot
│   ├── my photo.jpg        # Profile portrait
│   ├── nexjyoti.png        # NexJyoti portal screenshot
│   ├── resume.pdf          # Official resume
│   └── vortexcast.png      # Weather app dashboard
├── src/
│   ├── app/
│   │   ├── globals.css     # Design tokens, keyframe animations, typography
│   │   ├── layout.tsx      # Root layout, font definitions (Space Grotesk & JetBrains Mono)
│   │   └── page.tsx        # Single-page orchestrator with IntersectionObserver reveals
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky frosted header with scroll-progress & mobile drawer
│   │   ├── HeroSection.tsx       # Animated hero with SVG floral lattice & embers
│   │   ├── AboutSection.tsx      # Academic profile & engineering focus
│   │   ├── SkillsSection.tsx     # 25+ Tech skills with branded SVG icons
│   │   ├── ProjectsSection.tsx   # Curated showcase cards & deployment links
│   │   ├── CPSection.tsx         # Live Codeforces, LeetCode, GFG & GitHub telemetry
│   │   ├── JourneySection.tsx    # Academic & leadership timeline (BIT Mesra, IETE, VEC)
│   │   ├── ContactSection.tsx    # Spam-protected contact terminal with Formspree
│   │   ├── CommandPalette.tsx    # ⌘K Spotlight command modal
│   │   └── Footer.tsx            # Minimalist footer
│   └── lib/
│       └── utils.ts              # Core utilities (cn helper)
├── .firebaserc             # Firebase project mappings
├── firebase.json           # Firebase Hosting configuration
├── next.config.ts          # Next.js static export configuration
├── package.json            # Project dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

---

## 🛠️ Technology Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Static HTML Export) |
| **Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Design Tokens |
| **Typography** | Space Grotesk & JetBrains Mono via `next/font/google` |
| **Icons** | [Lucide React](https://lucide.dev/) + Handcrafted Inline SVG Vectors |
| **Micro-Interactions** | [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti), CSS Keyframe Particle Physics |
| **Contact Form** | [Formspree](https://formspree.io/) |
| **Hosting & CDN** | [Firebase Hosting](https://firebase.google.com/docs/hosting) |

---

## 💻 Getting Started Locally

### Prerequisites
- **Node.js**: `v18.x` or later (Node.js 20+ recommended)
- **Package Manager**: `npm` (v9+) or `yarn` / `pnpm`

### 1. Clone & Install Dependencies
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
Navigate to [http://localhost:3000](http://localhost:3000) to view the application with Hot Module Reloading.

### 4. Build Static Production Export
```bash
npm run build
```
This compiles and exports optimized static assets directly into the `out/` directory.

### 5. Deploy to Firebase Hosting
```bash
firebase deploy --only hosting
```

---

## 📬 Connect with Amish

- **Portfolio:** [amish-kr-dubey.web.app](https://amish-kr-dubey.web.app/) · [my-portfolio-97f92.web.app](https://my-portfolio-97f92.web.app/)
- **GitHub:** [@AMISH754](https://github.com/AMISH754)
- **LinkedIn:** [Amish Kumar Dubey](https://www.linkedin.com/in/amish-kumar-dubey-b28669279/)
- **Email:** [amishkumardubey@gmail.com](mailto:amishkumardubey@gmail.com)
- **Codeforces:** [Amish754](https://codeforces.com/profile/Amish754)
- **LeetCode:** [Amish_Dubey](https://leetcode.com/u/Amish_Dubey/)

---

## 📄 License

Distributed under the [MIT License](LICENSE). Designed and engineered with care by **Amish Kumar Dubey**.
