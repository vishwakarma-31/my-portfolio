# Portfolio Documentation (tracker.md)

This document tracks everything we have built, the technologies used, styling patterns, animations, and design DNA applied to the portfolio project.

## 1. Project Overview & Architecture
- **Goal**: Create a product-led, book-style developer portfolio focusing on problem-solving narratives rather than a generic grid of skills.
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4, Vanilla CSS for specifics
- **Animation**: GSAP (ScrollTrigger), Framer Motion
- **Hosting**: Vercel (planned)

## 2. Design DNA & Brand Guidelines
The portfolio strictly borrows design language from top tech brands, mapped to specific feelings:
- **Apple**: Used for Hero sections, page-flip transitions, and cinematic horizontal scrolling. Massive type, emotional intent-driven messaging.
- **Stripe**: Used for metadata, role definitions, tech stacks, and trust metrics. Features crisp borders, multi-layered shadows (`stripe-shadow`), and #635BFF accent color.
- **Linear**: Used for the Navigation and content layouts. Dark surface (#000000 or #0d0d0d), precise UI styling, keyboard shortcut hints (⌘ + Enter).
- **Nike**: Used for the Manifesto. Uppercase, extreme bold typography (Geist or Inter Black), monochrome contrast, no subtle grays.
- **Shopify**: Used for the "Hire Me" / Call to Action sections. Action-oriented green button (#96FF00), high-conversion focus.
- **Vercel**: Used for code blocks and technology layouts. Strict 4px border radius, Geist Mono font, #0d0d0d backgrounds.

## 3. What We Have Built
### Pages & Routing
1. **Home Page (`/page.tsx`)**: Reorganized the core user journey: `Hero` → `Manifesto` → `HowIThink` (About Data) → `FeaturedStories` → `DevelopmentProcess` → `Technology` → `HireMe`.
2. **Project Archive (`/projects/page.tsx`)**: Developed a dynamic frame layout to list all past projects. Users can filter by categories (AI, Web Apps, Automation, etc.) dynamically without full page reloads, using `framer-motion` layout animations.
3. **Project Template (`/projects/[slug]/page.tsx`)**: Created the dedicated page template for case studies following the specific storytelling structure: The Problem → Research & Planning → Architecture → Development & Challenges → Results. Includes Vercel-styled code blocks.
4. **Contact Page (`/contact/page.tsx`)**: Developed the contact flow linked from the Shopify CTA button. Includes actual API integration using Web3Forms, maintaining Linear's sleek input styling.

### Key Components & Animations
- **Hero**: Uses Apple's layout.
- **Manifesto**: Huge "CODE IS NOTHING WITHOUT PURPOSE." (Nike style).
- **How I Think**: Integrated into the homepage, introducing the developer's background, incorporating a scroll-driven text reveal animation (CodePen jh3y style) built with Framer Motion `useScroll` and `useTransform`.
- **Featured Stories**: Uses GSAP `ScrollTrigger` pinning to create a horizontal cinematic scroll effect, turning each project into a full-viewport chapter.
- **Development Process**: Uses Linear/Apple DNA. Alternating grid with a process timeline on the left and a sticky tracker image (`tracker.png`) on the right. Reveals steps using GSAP stagger.
- **Technology**: Uses Vercel's stark contrast layout, mapping out the core stack with Geist Mono typography.
- **Hire Me**: Features Shopify-style conversion metrics and a prominent `#96FF00` "Let's Work Together" button routing to the contact page.

## 4. Color Palette
- **Backgrounds**: `#000000` (Apple/Nike/Linear default), `#0d0d0d` (cards), `#111111` (accents), `#f5f5f7` (light sections).
- **Text**: `#ffffff`, `#f5f5f7`, `#8a8f98` (Linear gray), `rgba(255,255,255,0.6)` (muted text).
- **Accents**: 
  - `#635BFF` (Stripe Blurple) for technical links and category labels.
  - `#96FF00` (Shopify Green) for primary CTAs.
- **Borders**: `rgba(255,255,255,0.08)` or `rgba(255,255,255,0.05)` for precise structural lines.

## 5. Typography
- **Headings (Marketing)**: `font-marketing` (mapped to Inter/Geist/Outfit) - extralight to medium weights, tight tracking (`tracking-tight` or `tracking-[-0.02em]`).
- **Body (UI)**: `font-ui` - highly legible, slightly relaxed leading (`leading-[1.6]`).
- **Code/Labels**: `font-code` - uppercase, widely tracked (`tracking-widest`) for small labels and metadata.
- **Display**: `font-display` - used for the Nike manifesto (ultra-black, uppercase).

## 6. Functional Integrations
- **Web3Forms**: Integrated into the Contact Page (`/contact/page.tsx`). Validates user input and asynchronously sends messages directly to the configured email without needing a custom backend server. Includes loading, success, and error UI states.
