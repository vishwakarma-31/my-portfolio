"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "TechNova Inc.",
    duration: "2022 — Present",
    description: "Leading the frontend architecture for a high-traffic SaaS platform. Introduced a scalable design system, migrated the core application to Next.js App Router, and improved Core Web Vitals by 40%.",
  },
  {
    role: "Creative Developer",
    company: "Studio Digital",
    duration: "2019 — 2022",
    description: "Built award-winning interactive web experiences using React, Three.js, and GSAP. Collaborated closely with world-class designers to push the boundaries of browser capabilities.",
  },
  {
    role: "Full Stack Developer",
    company: "Startup Co",
    duration: "2017 — 2019",
    description: "Developed and maintained full-stack web applications using the MERN stack. Engineered resilient API endpoints and integrated third-party payment systems.",
  },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray(".exp-item") as HTMLElement[];
    
    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-background text-foreground py-40 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 leading-tight">
              Experience
            </h2>
            <p className="text-xl md:text-2xl text-foreground/50 font-light">
              My professional journey.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="exp-item flex flex-col gap-4 p-8 -mx-8 rounded-3xl hover:bg-muted/30 transition-colors duration-500 group opacity-0"
            >
              <span className="font-mono text-sm tracking-widest text-foreground/40 uppercase group-hover:text-accent transition-colors">
                {exp.duration}
              </span>
              <h3 className="text-3xl font-semibold tracking-tight group-hover:text-accent transition-colors">
                {exp.role} <span className="text-foreground/30 font-normal italic">at {exp.company}</span>
              </h3>
              <p className="text-lg text-foreground/60 leading-relaxed font-light mt-2 max-w-2xl group-hover:text-foreground/80 transition-colors">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
