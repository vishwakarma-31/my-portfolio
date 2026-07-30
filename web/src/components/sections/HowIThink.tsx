"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    title: "Why simplicity matters.",
    desc: "Complexity scales exponentially. Every new feature, abstraction, and dependency adds cognitive load. I ruthlessly eliminate the unnecessary so that the necessary can speak."
  },
  {
    title: "Why performance matters.",
    desc: "Speed is a feature. If software feels sluggish, trust evaporates. I design architectures that respect the user's time and device resources."
  },
  {
    title: "Why maintainability matters.",
    desc: "Code is read ten times more than it is written. Writing clever code is easy; writing clear, predictable code requires discipline. I optimize for the next engineer."
  }
];

export function HowIThink() {
  const container = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useGSAP(() => {
    gsap.fromTo(".principle-container",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="dark py-48 bg-background-elevated text-text-primary px-6 md:px-12 xl:px-24 border-t border-border-subtle">
      <div className="max-w-[760px] mx-auto principle-container opacity-0">
        <h2 className="type-caption uppercase tracking-[0.08em] text-brand-primary mb-16">
          Engineering Philosophy
        </h2>
        
        <div className="flex flex-col gap-6">
          {principles.map((p, i) => {
            const isActive = activeIndex === i;
            return (
              <div 
                key={i} 
                className={`flex flex-col border-l-2 pl-6 linear-hover cursor-pointer ${isActive ? "border-brand-primary" : "border-border-subtle hover:border-text-secondary"}`}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
              >
                <h3 className={`type-h3 tracking-tight linear-hover ${isActive ? "text-text-primary" : "text-text-secondary"}`}>
                  {p.title}
                </h3>
                
                <div 
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isActive ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="type-body-large text-text-secondary leading-relaxed max-w-[640px]">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
