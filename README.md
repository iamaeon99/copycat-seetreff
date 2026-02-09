# 🐱 CopyCat: Seetreff Erlenbach

> **KI-generierter Neubau von [seetreff.ch](https://seetreff.ch) — erstellt mit dem ÆON CopyCat Skill**

[![Deploy](https://img.shields.io/badge/Vercel-deployed-black?logo=vercel)](https://copycat-seetreff.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Next.js 16](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)

---

## About

This project is a **CopyCat demo** — the original [seetreff.ch](https://seetreff.ch) (a pizza & balkan restaurant in Erlenbach ZH) was automatically analyzed, cloned, and rebuilt from scratch using **ÆON's CopyCat pipeline** powered by local LLMs.

The rebuild is fully modern: Next.js 16, React 19, Tailwind CSS 4, TypeScript — with dark mode, mobile-first responsive design, and a side-by-side comparison page.

## Key Features

- 🍕 **5 Seiten** — Home, Pizza, Snacks, Getränke, Lageplan
- 🔄 **Compare-Seite** — Original vs. Rebuild side-by-side
- 🌙 **Dark Mode** — System-aware theme toggle
- 📱 **Mobile-first** — Responsive design throughout
- ⚡ **Next.js 16** + React 19 + Tailwind CSS 4 + TypeScript

---

## CopyCat Pipeline

```mermaid
flowchart LR
    A[🌐 URL] --> B[🔍 Recon]
    B --> C[📸 Screenshots]
    C --> D[📊 Lighthouse]
    D --> E[🎨 Assets]
    E --> F[📋 Spec]
    F --> G[🤖 Build · LLM]
    G --> H[👁️ Visual Diff]
    H --> I[🔒 Security]
    I --> J[🚀 Deploy]

    style A fill:#f59e0b,color:#000
    style G fill:#8b5cf6,color:#fff
    style J fill:#10b981,color:#fff
```

## Component Architecture

```mermaid
graph TD
    Layout[layout.tsx] --> Header[Header]
    Layout --> Footer[Footer]
    Layout --> TP[ThemeProvider]
    TP --> TT[ThemeToggle]

    Layout --> P1[Home]
    Layout --> P2[Pizza]
    Layout --> P3[Snacks]
    Layout --> P4[Getränke]
    Layout --> P5[Lageplan]
    Layout --> P6[Compare]

    P2 --> MT[MenuTable]
    P3 --> MT
    P4 --> MT
    P1 --> PH[PageHeader]

    style Layout fill:#0070f3,color:#fff
    style TP fill:#8b5cf6,color:#fff
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Styling | Tailwind CSS 4 |
| Language | TypeScript 5 |
| Deployment | Vercel |
| Pipeline | ÆON CopyCat (local LLMs) |

## Getting Started

```bash
git clone https://github.com/iamaeon99/copycat-seetreff.git
cd copycat-seetreff
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + Tailwind
│   ├── pizza/page.tsx      # Pizza menu
│   ├── snacks/page.tsx     # Snacks menu
│   ├── getraenke/page.tsx  # Drinks menu
│   ├── lageplan/page.tsx   # Location / map
│   └── compare/page.tsx    # Original vs Rebuild
└── components/
    ├── layout/
    │   ├── Header.tsx
    │   ├── Footer.tsx
    │   ├── ThemeProvider.tsx
    │   └── ThemeToggle.tsx
    └── ui/
        ├── PageHeader.tsx
        └── MenuTable.tsx
```

## CopyCat Pipeline Results

| Metric | Score |
|--------|-------|
| Lighthouse Performance | 98/100 |
| Lighthouse Accessibility | 100/100 |
| Visual Diff Match | ~92% |
| Security Audit | ✅ Pass |
| Bundle Size | < 100 KB (First Load) |

## Original vs Rebuild

| Aspect | seetreff.ch | CopyCat Rebuild |
|--------|------------|-----------------|
| Framework | Static HTML | Next.js 16 |
| Dark Mode | ❌ | ✅ |
| Mobile | Partial | Full responsive |
| Performance | ~65 | ~98 |
| TypeScript | ❌ | ✅ |
| Accessibility | Limited | WCAG 2.1 AA |

## Deployment

Deployed automatically to **Vercel**:

```bash
npx vercel --prod
```

Live: [copycat-seetreff.vercel.app](https://copycat-seetreff.vercel.app)

## License

[MIT](./LICENSE) © 2026 Marcel Rapold

---

<p align="center"><strong>Built by ÆON · CopyCat Pipeline</strong></p>
