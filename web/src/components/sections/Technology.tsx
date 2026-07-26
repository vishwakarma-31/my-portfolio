"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const technologies = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Three.js / WebGL",
  ],
  Backend: [
    "Node.js",
    "Express",
    "PostgreSQL",
    "Redis",
    "GraphQL",
    "Prisma ORM",
  ],
  Cloud: [
    "AWS",
    "Vercel",
    "Docker",
    "CI/CD Pipelines",
    "Serverless Functions",
    "Cloudflare",
  ],
  Tools: [
    "Git & GitHub",
    "Figma",
    "VS Code",
    "Jest / Playwright",
    "Linear",
    "Notion",
  ],
};

export function Technology() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cols = gsap.utils.toArray(".tech-col") as HTMLElement[];
    
    cols.forEach((col, i) => {
      gsap.fromTo(
        col,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-background text-foreground py-40 border-t border-border relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-32">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 leading-tight">
            Technology
          </h2>
          <p className="text-xl md:text-2xl text-foreground/50 font-light max-w-2xl">
            My core stack for building robust, scalable digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          {Object.entries(technologies).map(([category, skills]) => (
            <div key={category} className="tech-col flex flex-col gap-8 opacity-0">
              <h3 className="text-sm font-mono tracking-widest text-foreground/40 uppercase">
                {category}
              </h3>
              <ul className="flex flex-col gap-5">
                {skills.map((skill) => (
                  <li 
                    key={skill} 
                    className="text-xl font-medium tracking-tight text-foreground/80 hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
