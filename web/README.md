# Digital Product Portfolio

This repository contains the source code for a premium digital product experience that replaces the traditional "developer portfolio". Designed with the philosophy of an Apple product launch, it optimizes for trust, emotional connection, and conversion.

## 🧠 Philosophy: The Master Direction

This is **not** a showcase of skills, a timeline of past jobs, or a generic template. It is an intentional, minimal, and unforgettable narrative built for recruiters, startup founders, and business owners.

Every pixel must earn its place. The experience is designed to take the visitor through a precise emotional sequence:
`Curiosity → Recognition → Hope → Trust → Admiration → Confidence → Commitment → Action`

## 🏗 Architecture: The 10-Part Narrative

The core layout (`app/page.tsx`) follows a strict sequence:

1. **HERO (`HeroProduct`)**: Captures attention immediately with an ambition-driven statement. No social clutter.
2. **THE PROBLEM (`TheProblem`)**: Creates tension by identifying the visitor's pain points before introducing the solution.
3. **MEET THE BUILDER (`MeetBuilder`)**: A minimal, highly focused introduction. Engineering philosophy over autobiography.
4. **FEATURED PRODUCTS (`FeaturedProducts`)**: Deep-dive case studies detailing the Problem, Decision, Process, Architecture, Impact, and Results.
5. **HOW I THINK (`HowIThink`)**: Focuses on core principles (Performance, Simplicity, Scalability) rather than listing tech logos.
6. **WORKING TOGETHER (`WorkingTogether`)**: A week-by-week timeline that replaces uncertainty with absolute confidence.
7. **ENGINEERING (`Engineering`)**: Maps technical expertise directly to business outcomes.
8. **PROOF (`Proof`)**: Hard evidence—metrics, impact, and success stories to eliminate perceived risk.
9. **PHILOSOPHY (`Philosophy`)**: Bold, high-contrast, minimal typography stating core beliefs.
10. **FINAL MOMENT (`FinalMoment`)**: All distractions fade away for a single, focused CTA.

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **UI & Styling**: [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP (GreenSock)](https://gsap.com/) for cinematic, high-performance scroll triggers.
- **Forms**: [Web3Forms](https://web3forms.com/) for serverless form submissions (`⌘+Enter` optimized).

## 🚀 Getting Started

### Prerequisites
- Node.js (v20+)
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio/web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env.local` file in the root of the `web` directory and add your Web3Forms access key:
   ```env
   NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚢 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).

1. Push your code to GitHub.
2. Import the project in Vercel.
3. Add the `NEXT_PUBLIC_WEB3FORMS_KEY` environment variable in your Vercel project settings.
4. Ensure your `metadataBase` in `src/app/layout.tsx` is updated to your production domain for proper OpenGraph (social sharing) image unfurling.
5. Deploy.

## 🎨 Design DNA
- **Apple**: Hero scaling and layout rhythm.
- **Linear**: Dark surfaces, border discipline (`border-white/10`), and keyboard-first interaction (`⌘+Enter`).
- **Stripe**: Elevation and high-contrast typography.

---
*Built with absolute obsession for detail.*
