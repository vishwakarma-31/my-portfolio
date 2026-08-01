"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    title: "Predictable execution over heroic sprints.",
    desc: "I prefer boring, predictable delivery over chaotic heroics. A well-architected system shouldn't require midnight debugging. I prioritize strict typing, comprehensive testing, and clear boundaries."
  },
  {
    title: "Code is read ten times more than it is written.",
    desc: "Clever code is a liability. I optimize for the next engineer who has to maintain the system, which means readable syntax, intuitive folder structures, and leaving clear context in PRs."
  },
  {
    title: "Protect the user's attention.",
    desc: "Software should respect the user's time. I aggressively remove latency, layout shifts, and unnecessary clicks. Every micro-interaction is designed to feel instantaneous and intentional."
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
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                aria-controls={`accordion-content-${i}`}
                id={`accordion-header-${i}`}
                className={`flex flex-col border-l pl-6 linear-hover cursor-pointer outline-none focus-visible:border-brand-primary ${isActive ? "border-brand-primary" : "border-border-subtle hover:border-text-secondary"}`}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveIndex(i);
                  }
                }}
              >
                <h3 className={`text-[13px] font-normal tracking-tight linear-hover ${isActive ? "text-text-primary" : "text-text-secondary"}`}>
                  {p.title}
                </h3>

                <div
                  id={`accordion-content-${i}`}
                  role="region"
                  aria-labelledby={`accordion-header-${i}`}
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isActive ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[13px] text-text-secondary leading-relaxed max-w-[640px]">
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
