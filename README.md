# Amish Kumar Dubey | Premium Engineering Portfolio

Live Portfolio: [https://my-portfolio-97f92.web.app/](https://my-portfolio-97f92.web.app/)

A high-performance, visually stunning developer portfolio and engineering playground built using **Next.js**, **React**, and **Tailwind CSS v4**. This portfolio integrates live API data and a custom canvas simulation module to highlight full-stack capabilities, competitive coding achievements, and an Electronics & Communication Engineering (ECE) background.

---

## 🚀 Key Features

### 1. ECE Diagnostic Lab Sandbox
* An interactive HTML5 Canvas-based oscilloscope simulating electrical waveform behaviors.
* Controls to tweak **Frequency**, **Amplitude**, **Phase Shift**, and **Thermal Channel Noise**.
* Renders **Sine**, **Square**, **Triangle**, and **Sawtooth** signals, alongside **Signal Superposition** (wave interference).
* Live mathematical calculations for peak-to-peak voltage ($V_{pp}$), RMS voltage ($V_{rms}$), signal period ($T$), and frequency ($f$), alongside a dynamically rendered mathematical wave formula.

### 2. Cmd+K Spotlight Command Palette
* A keyboard-accessible glassmorphic dialog overlay triggered by `Cmd + K` or `Ctrl + K`.
* Features list filtering and arrow key keyboard navigation to:
  * Scroll cleanly to page sections (Home, About, Skills, CP, ECE Lab, Projects, Education, Contact).
  * Launch a canvas-confetti celebration.
  * Open/Download your resume PDF.

### 3. Dynamic Competitive Coding & Open Source Stats
* Performs browser client-side fetches to hydrate metrics dynamically (loading skeleton loaders are integrated during hydration):
  * **Codeforces:** Queries user info and status submissions to calculate live ratings, maximum ratings, current rank, and exact count of unique solved problems.
  * **LeetCode:** Fetches solved counts and easy/medium/hard breakdown statistics.
  * **GeeksforGeeks:** Fetches total solved count using the GFG stats card JSON mirror.
  * **GitHub Profile:** Pulls total public repositories count and sums up contributions across all years from the contributions proxy calendar.
* *Includes try-catch wrappers to gracefully fall back to accurate offline counts if API endpoints time out or hit rate limits.*

### 4. Interactive Projects Activity Grid
* Toggles between **"Featured Projects"** (curated stacks with slide-in detail modals) and **"GitHub Activity"** (direct repo cards fetched live from your GitHub profile displaying stars ⭐, forks 🍴, and languages).

---

## 🛠️ Technology Stack

* **Framework:** Next.js (App Router, Static HTML Export Mode)
* **Styling:** Tailwind CSS v4, Vanilla CSS variable custom overrides
* **Animation:** Framer Motion (page transitions, hover scaling, overlays)
* **Icons:** Lucide React
* **Effects:** Canvas Confetti

---

## 💻 Getting Started

### 1. Installation

Clone the repository and install dependencies:
```bash
git clone https://github.com/AMISH754/My-Portfolio.git
cd My-Portfolio
npm install
```

### 2. Run Locally (Development Server)

Start the local server with hot reloading:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Production Build & Export

Because the site uses `output: "export"` in [next.config.ts](file:///c:/Users/hp/Desktop/my/next.config.ts), compiling generates fully static HTML, CSS, and JS assets in the `out/` folder, ready for deployment to any static host (like Firebase Hosting, GitHub Pages, or Vercel):
```bash
npm run build
```

---

## 📁 File Structure Highlights

* [page.tsx](file:///c:/Users/hp/Desktop/my/src/app/page.tsx) - Main page layout.
* [ECESimulator.tsx](file:///c:/Users/hp/Desktop/my/src/components/ECESimulator.tsx) - ECE Oscilloscope canvas sandbox component.
* [CommandPalette.tsx](file:///c:/Users/hp/Desktop/my/src/components/CommandPalette.tsx) - Spotlight command dialog overlay.
* [CPSection.tsx](file:///c:/Users/hp/Desktop/my/src/components/CPSection.tsx) - Dynamic stats cards query (Codeforces, LeetCode, GFG, GitHub).
* [ProjectsSection.tsx](file:///c:/Users/hp/Desktop/my/src/components/ProjectsSection.tsx) - Curated showcase cards and dynamic GitHub repo fetches.
* [Navbar.tsx](file:///c:/Users/hp/Desktop/my/src/components/Navbar.tsx) - Header navigation containing the command search trigger.
* [globals.css](file:///c:/Users/hp/Desktop/my/src/app/globals.css) - Styling variables, mask definitions, and scrollbars.
