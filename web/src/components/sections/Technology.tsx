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
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
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
    <section ref={containerRef} className="w-full bg-[#000000] text-[#f5f5f7] py-32 relative overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-24 flex flex-col items-start max-w-2xl">
          <h2 className="text-[40px] md:text-[56px] font-marketing font-light tracking-tight mb-4 leading-tight">
            Technology
          </h2>
          <p className="text-[18px] md:text-[20px] text-[rgba(255,255,255,0.55)] font-ui font-light">
            My core stack for building robust, scalable digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 border-t border-[rgba(255,255,255,0.08)] pt-16">
          {Object.entries(technologies).map(([category, skills]) => (
            <div key={category} className="tech-col flex flex-col gap-6 opacity-0">
              <h3 className="text-[13px] font-code text-[rgba(255,255,255,0.4)] uppercase tracking-[0.1em]">
                {category}
              </h3>
              <ul className="flex flex-col gap-4">
                {skills.map((skill) => (
                  <li 
                    key={skill} 
                    className="text-[18px] font-ui font-medium tracking-tight text-white hover:text-[#635BFF] transition-colors duration-200 cursor-default"
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
