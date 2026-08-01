# Portfolio Design Documentation

This document tracks the core design philosophy, structural decisions, styling patterns, and architectural layout applied to the portfolio project. 

## 1. Editorial Philosophy & Core Directives
The portfolio is governed by a strict standard of honesty and conciseness, codified during its rebuilding phase:
1. **Real Content or Empty**: Nothing ships unless it is true. Placeholders and fabricated metrics are prohibited. Sections without real content remain visibly and honestly empty until real data is supplied.
2. **Earned Real Estate**: Every section must present a distinct idea. Redundancy is noise, and noise destroys trust.
3. **Defensibility**: Every claim, metric, and sentence must be capable of surviving a direct interview question. 
4. **The Three Audiences**: The architecture serves three distinct visitors simultaneously: Recruiters (resume, clear status), Freelance Clients (case studies, process), and Local Businesses (plain-language CTAs, WhatsApp contact).

## 2. Project Overview & Architecture
- **Goal**: Create a product-led, highly curated developer portfolio focused on problem-solving narratives, engineering decisions, and rigorous authenticity.
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4 with highly specific CSS variables for robust theming.
- **Animation**: GSAP (ScrollTrigger, quickTo), Framer Motion (layout transitions).

## 3. Design DNA & Brand Guidelines
The portfolio strictly borrows design language from top tech brands, mapping specific aesthetics to functional outcomes:
- **Apple**: Hero sections, cinematic horizontal scrolling, massive intent-driven typography (`type-apple-headline`).
- **Stripe**: Metadata, role definitions, and trust metrics. Precise, multi-layered shadows (`stripe-shadow`), and the `#635BFF` accent color.
- **Linear**: Deep dark surfaces (`#000000` base, `#0d0d0d` cards), ultra-thin borders (`rgba(255,255,255,0.08)`), keyboard shortcut hints, and a muted, technical aesthetic.
- **Nike**: Manifesto and philosophy sections. Extreme bold typography, uppercase, monochrome contrast (no subtle grays).
- **Shopify**: "Hire Me" / CTAs. Action-oriented green (`#96FF00`), hover scaling (`shopify-hover`), optimized for conversion.
- **Vercel**: Code blocks, tech stacks, and structural layout. Strict radii, Geist Mono font.

## 4. Site Structure & Layout
### Pages
1. **Home Page (`/page.tsx`)**: Rebalanced and reduced for maximum impact. Flow: `HeroProduct` → `SelectedWork` → `Manifesto` → `HowIThink` (Engineering Principles) → `FeaturedProducts` (AI Interview Assistant) → `LocalBusinessPitch` → `FAQ` → `FinalMoment`.
2. **Project Archive (`/work/page.tsx`)**: A dynamic grid layout using framer-motion and semantic dark-mode tokens. Allows users to filter projects by categories (AI, Security, Web Applications).
3. **Case Study Template (`/work/[slug]/page.tsx`)**: The dedicated problem-solving deep dive. Structure: The Challenge → The Context → Research & Planning → Architecture → Engineering Decisions → The Results → Lessons Learned.
4. **Contact Page (`/contact/page.tsx`)**: Dedicated outreach flow integrating Web3Forms and Linear's precise input styling.

## 5. Color Palette & Token System
The UI relies heavily on a semantic token system mapped in `globals.css` inside the `.dark` class, creating a robust, deep dark mode setup.
- **Backgrounds**: 
  - `--background-primary`: `#000000` (Apple/Nike/Linear default)
  - `--background-secondary`: `#0d0d0d` (Cards and elevated sections)
  - `--background-tertiary`: `#111111` (Deep accents)
  - `--background-elevated`: `#1a1a1a` (Hover states)
- **Text**: 
  - `--text-primary`: `#f5f5f7` (Primary legibility)
  - `--text-secondary`: `rgba(255, 255, 255, 0.55)` (Muted descriptions)
- **Accents**: 
  - `--brand-primary`: `#635BFF` (Stripe Blurple for tech links/categories)
  - `--accent-primary`: `#96FF00` (Shopify Green for primary CTAs)
- **Borders**: 
  - `--border-subtle`: `rgba(255, 255, 255, 0.08)`
  - `--border-strong`: `rgba(255, 255, 255, 0.15)`

## 6. Typography System
- **Marketing/Headings**: `font-marketing` (Inter) for fluid, Apple-style headers.
- **UI/Body**: `font-ui` (Inter) for clean, highly legible interface text.
- **Display**: `font-display` (Barlow Condensed) used for heavy, Nike-style manifesto text.
- **Code**: `font-code` (Geist Mono) for tech stacks and data metrics.

## 7. Custom Interactions
- **Custom Cursor**: A global, mix-blend-mode tracking cursor that natively renders at 48x48px (scaled down to 33% via GSAP) and expands seamlessly over any clickable target (`a`, `button`, `input`, `.cursor-pointer`).
- **Smooth Scrolling**: Implemented globally to ensure GSAP scroll-triggers feel cinematic and precise.
