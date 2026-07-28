"use client";

import React, { useRef } from "react";
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

  useGSAP(() => {
    gsap.fromTo(".principle-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-[#f5f5f7] dark:bg-[#000000] text-[#1d1d1f] dark:text-[#f5f5f7] px-6">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-[clamp(32px,4vw,56px)] font-marketing font-light tracking-[-0.03em] mb-24 opacity-0 principle-item">
          How I make engineering decisions.
        </h2>
        
        <div className="flex flex-col gap-16">
          {principles.map((p, i) => (
            <div key={i} className="principle-item opacity-0 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-16 items-start">
              <h3 className="text-[20px] font-marketing font-normal">
                {p.title}
              </h3>
              <p className="text-[17px] font-marketing font-light text-black/60 dark:text-white/60 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
