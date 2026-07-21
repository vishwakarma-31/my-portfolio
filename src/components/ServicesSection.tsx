import React from "react";
import { motion } from "motion/react";
import { ServiceItem, AudienceType } from "../types";

interface ServicesSectionProps {
  audience: AudienceType;
}

const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "3D Modeling",
    description: "Creation of detailed objects, characters, or environments tailored to specific client needs.",
    audienceFocus: {
      companies: "Optimized mesh creation, low/high-poly asset pipelines, strict topology for WebGL engines, and interactive AR-ready models.",
      freelancers: "Bespoke high-end digital models, custom product mocks, and iconic characters that give your brand immediate visual authority.",
      "local-businesses": "High-fidelity digital replicas of your real-world products, medical devices, or restaurant dishes for high-impact interactive menus."
    }
  },
  {
    number: "02",
    title: "Rendering",
    description: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials.",
    audienceFocus: {
      companies: "Automated batch rendering pipelines, studio-grade lighting systems, and materials calibrated for flawless dark/light presentation.",
      freelancers: "Cinematic, jaw-dropping visual renders that stand out in crowded portfolios, sales pitch decks, and social campaigns.",
      "local-businesses": "Perfect lighting and photoreal look-books for food, drinks, clinics, or rooms that build instant trust with local customers."
    }
  },
  {
    number: "03",
    title: "Motion Design",
    description: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.",
    audienceFocus: {
      companies: "Systematic UI animation systems, modular component micro-interactions, and high-frequency Lottie animations for fast web assets.",
      freelancers: "High-energy promo videos, product walkthroughs, and kinetic typography that clearly explain and pitch your service value.",
      "local-businesses": "Delightful restaurant menu transitions, social stories, and subtle scrolling visual cues that capture and hold buyer attention."
    }
  },
  {
    number: "04",
    title: "Branding",
    description: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear presence.",
    audienceFocus: {
      companies: "Comprehensive design tokens, typographic scales, strict style guides, and design-system compatible layouts for scalable codebases.",
      freelancers: "Unforgettable, bold personal brands, customized media kits, and visual assets tailored to land you high-ticket clients.",
      "local-businesses": "Professional storefront logos, matching menu themes, brand stationery, and cohesive colors that turn first-time visitors into regulars."
    }
  },
  {
    number: "05",
    title: "Web Design",
    description: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
    audienceFocus: {
      companies: "Strict React architecture, custom Tailwind systems, modular TypeScript code, and components engineered for responsive fluidity.",
      freelancers: "High-impact single-page conversion funnels, custom booking schedulers, and rich visual portfolios built to close contracts.",
      "local-businesses": "Fast local-SEO websites, restaurant table reservations, clinic appointment booking forms, and click-to-call mobile features."
    }
  }
];

export default function ServicesSection({ audience }: ServicesSectionProps) {
  return (
    <section
      id="services"
      className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 relative z-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20 md:mb-28">
          <span className="text-xs font-mono font-bold tracking-widest uppercase opacity-40 block mb-3 text-zinc-900">
            WHAT WE OFFER
          </span>
          <h2 className="text-[11vw] sm:text-[12vw] md:text-[9vw] font-black uppercase leading-none tracking-tight text-[#0C0C0C] font-accent">
            SERVICES
          </h2>
        </div>

        {/* Services List */}
        <div className="flex flex-col border-t border-zinc-950/15">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col md:flex-row md:items-start justify-between py-8 sm:py-10 md:py-12 border-b border-zinc-950/15 group relative overflow-hidden"
            >
              {/* Left Column: Number */}
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <span className="text-[12vw] sm:text-[10vw] md:text-[5vw] font-black leading-none text-[#0C0C0C] font-accent select-none opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                  {srv.number}
                </span>
              </div>

              {/* Right Column: Title + Description Stacked */}
              <div className="md:ml-12 flex-grow flex flex-col justify-start">
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold uppercase text-lg sm:text-xl md:text-2xl text-zinc-900 tracking-tight font-accent">
                    {srv.title}
                  </h3>
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 scale-0 group-hover:scale-100 transition-transform duration-300" />
                </div>
                
                {/* General Service description */}
                <p className="text-zinc-700 font-light text-sm sm:text-base leading-relaxed mt-2 max-w-2xl">
                  {srv.description}
                </p>

                {/* Adaptive audience emphasis */}
                <div className="mt-4 p-3.5 bg-zinc-50 border-l-2 border-indigo-500 rounded-r-lg max-w-2xl">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-600 block mb-1 uppercase">
                    Focus for {audience === "local-businesses" ? "Local Brands" : audience === "companies" ? "Engineering Teams" : "Freelance Clients"}
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-zinc-800 leading-snug">
                    {srv.audienceFocus[audience]}
                  </p>
                </div>
              </div>

              {/* Hover highlight background */}
              <div className="absolute inset-0 bg-indigo-50/10 -z-10 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
