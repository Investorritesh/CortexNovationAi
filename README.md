# CortexNovation Ai — Enterprise Web Platform

> **"Turning Ideas Into Impact"**  
> *Build Smarter. Grow Faster.*  
> *"We don't just build solutions, we build long-term partnerships."*

An award-level, production-grade company website for **CortexNovation Ai**, engineered to compete with top-tier global tech brands (Vercel, Linear, Stripe, OpenAI).

---

## 🚀 Quick Setup & Local Development

### Prerequisites
- **Node.js**: v20+ or v22+
- **npm**: v10+

### Setup Commands
```bash
# 1. Clone repository
git clone https://github.com/cortexnovation/cortexnovation-ai.git
cd CortexNovationAi

# 2. Install dependencies
npm install

# 3. Launch development server with Turbopack
npm run dev

# 4. Open in browser
# Navigate to http://localhost:3000
```

### Production Build & Verification
```bash
# Verify TypeScript, linting, and compile production bundle
npm run build

# Run production server
npm run start
```

---

## 🎨 Design System & Visual Tokens

- **Brand Mood**: Futuristic, dark-first, intelligent, high-craft, trustworthy.
- **Palette**:
  - Deep Navy / Near-Black Background: `#050B1F` to `#0A1330`
  - Electric Blue: `#2D8CFF`
  - Cyan Glow: `#22D3EE`
  - Violet / Purple Accent: `#8B5CF6`
  - Headline Gradient: `linear-gradient(135deg, #2D8CFF 0%, #22D3EE 50%, #8B5CF6 100%)`
- **Typography**:
  - Headings: `Space Grotesk` (`next/font/google`)
  - Body: `Inter` (`next/font/google`)
- **Logo Mark**: Hexagonal "C" shield with blue-to-purple gradient, inner neural synaptic core, and wordmark **CortexNovation Ai** (the "Ai" in electric blue).
- **Glassmorphism**: Custom frosted panels (`backdrop-blur-xl`), glowing borders, and subtle film grain overlay.
- **Micro-Interactions**: Lenis momentum scrolling, custom reactive cursor with pointer detection, magnetic buttons, and celebratory confetti upon form submission.

---

## 🧩 Architectural Stack

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables Design Tokens
- **3D Graphics (WebGL)**: Three.js with 130+ cerebral neural nodes, glowing additive synapse lines, concentric rotating holographic platform, and mouse parallax/inertia
- **Smooth Scroll**: Lenis
- **Icons**: Lucide Icons + Custom SVG Brand Shields
- **Interactive Forms**: Multi-step validated client actions with celebration micro-interactions
- **SEO & Metadata**: Dynamic Sitemap (`sitemap.ts`), Robots (`robots.ts`), Open Graph, Twitter Card, and JSON-LD Organization schema

---

## 📂 Project Structure

```
CortexNovationAi/
├── public/                 # Static assets & icons
├── src/
│   ├── app/
│   │   ├── globals.css     # Design tokens, keyframes, glassmorphism
│   │   ├── layout.tsx      # Root layout, Space Grotesk / Inter fonts, JSON-LD, Lenis
│   │   ├── page.tsx        # Homepage assembling all 9 flagship sections
│   │   ├── solutions/      # Solutions overview & dynamic detail routes ([slug])
│   │   ├── products/       # Products showcase, interactive mockups, pricing
│   │   ├── research/       # Research & Insights hub & dynamic articles ([slug])
│   │   ├── projects/       # Filterable Case Studies grid & dynamic views ([slug])
│   │   ├── about/          # Company story, values, milestones, leadership team
│   │   ├── contact/        # Validated multi-step inquiry form with confetti
│   │   ├── sitemap.ts      # Dynamic sitemap generation
│   │   └── robots.ts       # Search engine crawler policies
│   ├── components/
│   │   ├── 3d/
│   │   │   └── NeuralBrainScene.tsx   # Interactive 3D WebGL Neural Brain
│   │   ├── home/
│   │   │   ├── Hero.tsx               # Confident headline, floating stats, 3D
│   │   │   ├── ServicesGrid.tsx       # 7 Services with cursor-following glow & 3D tilt
│   │   │   ├── NeuralArchitecture.tsx # 3D isometric exploded glass stack
│   │   │   ├── TechMarquee.tsx        # Infinite marquee of technologies
│   │   │   ├── IndustryTabs.tsx       # Tabbed industry use-cases
│   │   │   ├── ProcessTimeline.tsx    # 01-04 Discover > Build > Deploy > Grow
│   │   │   ├── WhyChooseUs.tsx        # Partnership promise & checklist
│   │   │   ├── FeaturedShowcase.tsx   # Top case studies & whitepapers
│   │   │   └── FinalCTA.tsx           # Aurora mountain scene with email capture
│   │   ├── layout/
│   │   │   ├── Navbar.tsx             # Sticky glass blur nav with scroll-shrink
│   │   │   ├── MegaMenu.tsx           # Animated dropdowns for Solutions & Products
│   │   │   ├── MobileNav.tsx          # Full-screen animated mobile menu
│   │   │   ├── ScrollProgress.tsx     # Progress bar under navbar
│   │   │   └── Footer.tsx             # Footer with sitemap & security notes
│   │   └── ui/
│   │       ├── Logo.tsx               # Hexagonal C mark & wordmark
│   │       ├── CustomCursor.tsx       # Smooth cursor with pointer detection
│   │       ├── SmoothScroll.tsx       # Lenis smooth scrolling provider
│   │       ├── Preloader.tsx          # SVG draw-in preloader with neural pulse
│   │       ├── MagneticButton.tsx     # Magnetic cursor follow button
│   │       └── VideoModal.tsx         # Interactive architectural demo modal
│   ├── cms/
│   │   └── schema.ts       # Headless CMS (Sanity / Contentful) typed schemas
│   ├── data/
│   │   ├── services.ts     # Complete definitions for all 7 primary services
│   │   ├── products.ts     # Flagship products (CortexFlow, NovationPulse, SynthexBI)
│   │   ├── projects.ts     # Verified enterprise case studies
│   │   ├── articles.ts     # Research whitepapers & technical articles
│   │   └── company.ts      # Mission, values, timeline, team, and stats
│   └── lib/
│       └── utils.ts        # Tailwind merge helper
```

---

## 🌐 Pages & Features Checklist

- [x] **Home**: Hero with 3D WebGL neural brain, floating stats, 7 services grid, 3D neural architecture stack, tech marquee, industry tabs, 01-04 timeline, why choose us, featured showcase, final aurora CTA.
- [x] **Solutions**: Overview page + individual dynamic service detail pages (`/solutions/[slug]`) with problem, approach, deliverables, tech stack, and FAQs.
- [x] **Products**: Showcase of *CortexFlow*, *NovationPulse*, and *SynthexBI* with interactive mockups, feature cards, and tiered pricing.
- [x] **Research & Insights**: Whitepapers hub with search, category filtering, reading time, tags, newsletter signup, and full article pages (`/research/[slug]`).
- [x] **Projects**: Filterable case-study grid (Fintech, HealthTech, Logistics, AI & Cloud) and comprehensive project detail pages (`/projects/[slug]`).
- [x] **About Us**: Company story, mission & vision, milestone timeline, global reach metrics, and leadership team cards.
- [x] **Contact**: Split layout with 4-hour response guarantee promise and 3-step validated form with confetti celebration animation.

---

## ⚡ Performance & Optimization Checklist

1. **3D WebGL Throttling**:
   - Device Pixel Ratio capped at `Math.min(window.devicePixelRatio, 2.0)` to eliminate GPU thermal throttling.
   - `IntersectionObserver` automatically halts `requestAnimationFrame` when the hero canvas scrolls out of viewport.
   - Non-blocking fallback for devices with `prefers-reduced-motion` or without WebGL.
2. **Next.js & Turbopack**:
   - Zero-layout-shift (CLS = 0) layout architecture.
   - Pre-rendered static pages for instant First Contentful Paint (<0.6s).
   - Component-level code splitting.
3. **Accessibility (WCAG AA)**:
   - High-contrast text compliance against dark backdrops.
   - Semantic HTML elements (`header`, `main`, `nav`, `section`, `article`, `footer`).
   - Touch detection disabling custom cursor automatically on mobile/touch screens.

---

## 🚢 Deployment Steps (Vercel)

1. Push code to your GitHub/GitLab repository:
   ```bash
   git add .
   git commit -m "feat: complete award-grade CortexNovation Ai web platform"
   git push origin main
   ```
2. Import the repository into **[Vercel](https://vercel.com)**.
3. Framework Preset: **Next.js**.
4. Root Directory: `./`.
5. Click **Deploy**. Vercel will build and distribute the edge-rendered application globally with sub-50ms latency.
