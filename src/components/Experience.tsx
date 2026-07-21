import React from "react";
import { motion } from "motion/react";
import { Calendar, Building, Award, CheckCircle } from "lucide-react";
import { ExperienceTimelineItem, AudienceType } from "../types";

interface ExperienceProps {
  audience: AudienceType;
}

const TIMELINE_DATA: Record<AudienceType, ExperienceTimelineItem[]> = {
  companies: [
    {
      period: "2024 - PRESENT",
      role: "Lead 3D Web Architect",
      company: "Velorah® Creative",
      description: "Directing the visual layout and code implementation of standard-setting WebGL pipelines, micro-interaction models, and asset rendering standards.",
      bullets: [
        "Optimized WebGL mesh compression reducing asset download payload by 45%.",
        "Pioneered component-based design tokens connecting Figma designs directly to React CSS variables.",
        "Collaborated in a 12-person engineering team to deploy 3D product customizers with zero regression issues."
      ],
      audienceType: "companies"
    },
    {
      period: "2022 - 2024",
      role: "Senior Front-End Developer",
      company: "Aura Creative Studio",
      description: "Implemented high-performance client-side Single Page Applications (SPAs) using React, Vite, and tailwind utilities.",
      bullets: [
        "Architected clean modular state stores reducing client re-renders and improving scrolling efficiency.",
        "Created a customized asset rendering preview tool used internally by 20+ design agencies.",
        "Implemented WCAG AA compliance across all public client sites, resolving typography contrast gaps."
      ],
      audienceType: "companies"
    }
  ],
  freelancers: [
    {
      period: "2023 - PRESENT",
      role: "Independent 3D Branding Consultant",
      company: "Jack3D Lab",
      description: "Advising and executing bespoke digital branding systems, product illustrations, and landing pages for VC-funded founders.",
      bullets: [
        "Delivered 12 complete premium brand packages under rigid 3-week deadlines.",
        "Generated an average 3.2x return on visual asset spend by upgrading static product images into 3D walkthroughs.",
        "Created an automated visual feedback pipeline shortening iteration review loops by 50%."
      ],
      audienceType: "freelancers"
    },
    {
      period: "2021 - 2023",
      role: "Freelance Motion Graphic Artist",
      company: "Motionsites Partner Network",
      description: "Collaborated directly with digital agencies to draft high-energy animation loops and WebGL-like kinetic typography.",
      bullets: [
        "Created 25+ dynamic web landing banners seen by over 10M end-users globally.",
        "Mastered keyframe ease calculations resulting in buttery-smooth 60fps animations.",
        "Integrated lightweight video loops keeping web load times below 1.5 seconds on mobile."
      ],
      audienceType: "freelancers"
    }
  ],
  "local-businesses": [
    {
      period: "2023 - PRESENT",
      role: "Local Business Digital Partner",
      company: "MainStreet Web Growth",
      description: "Providing turn-key high-converting website setups for local cafes, clinical practitioners, fine dining spots, and law firms.",
      bullets: [
        "Built interactive animated menu architectures for local bistros, boosting average order sizes by 15%.",
        "Set up localized reservation and schedule calendars, doubling bookings for neighborhood medical clinics.",
        "Optimized localized Google Maps listings alongside web structure, boosting high-intent local calls by 40%."
      ],
      audienceType: "local-businesses"
    },
    {
      period: "2020 - 2023",
      role: "Independent Webmaster",
      company: "Local Dental & Wellness Partners",
      description: "Designed responsive patient portals, click-to-dial mobile layouts, and custom 3D office illustrations.",
      bullets: [
        "Upgraded slow generic templates into modern visual landing screens with localized reviews.",
        "Designed patient appointment reminders reducing clinic appointment no-shows by 25%.",
        "Maintained zero-downtime hosting setups, keeping local directories fully responsive 24/7."
      ],
      audienceType: "local-businesses"
    }
  ]
};

export default function Experience({ audience }: ExperienceProps) {
  const items = TIMELINE_DATA[audience] || TIMELINE_DATA.companies;

  return (
    <section id="experience" className="bg-[#0C0C0C] text-white py-24 px-4 sm:px-8 md:px-16 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 select-none">
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase block mb-2">
            MY JOURNEY
          </span>
          <h2 className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-black uppercase hero-heading font-accent">
            EXPERIENCE
          </h2>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
            Relevance tailored to your target needs
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-32 pl-8 py-2">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative mb-16 last:mb-0 group"
            >
              {/* Timeline bubble indicator */}
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#0C0C0C] border-2 border-indigo-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
              </div>

              {/* Year Block (Positioned to the left of the timeline on desktop) */}
              <div className="hidden md:block absolute -left-40 top-1 text-right w-28">
                <span className="text-xs font-mono font-bold text-indigo-400 tracking-wider">
                  {item.period}
                </span>
              </div>

              {/* Main Content Card */}
              <div className="bg-zinc-950/40 border border-white/5 p-6 sm:p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden group-hover:border-white/10 transition-colors duration-300">
                {/* Year tag for mobile */}
                <div className="md:hidden inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-mono text-indigo-400 tracking-wider mb-3">
                  <Calendar className="w-3 h-3" />
                  {item.period}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-accent tracking-tight">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-1.5 text-zinc-400 font-medium text-sm mt-0.5">
                      <Building className="w-4 h-4 text-zinc-500" />
                      <span>{item.company}</span>
                    </div>
                  </div>
                </div>

                <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Sub-bullets list */}
                <ul className="space-y-3.5">
                  {item.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-indigo-500/80 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-light text-zinc-300 leading-normal">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Subtle highlight gradient border */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/10 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
