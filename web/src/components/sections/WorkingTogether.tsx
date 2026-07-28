"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { week: "Week One", title: "Understand the business.", desc: "We map the exact problem space, define constraints, and align on what success actually looks like. No code is written until the destination is clear." },
  { week: "Week Two", title: "Prototype.", desc: "Rapid validation. I build high-fidelity interactive prototypes to test assumptions before committing to an architecture." },
  { week: "Week Three", title: "Build.", desc: "Engineering execution. Clean architecture, rigorous testing, and daily transparent updates on progress." },
  { week: "Launch", title: "Deploy and scale.", desc: "Zero-downtime deployment. I monitor the rollout, ensuring the infrastructure handles real-world usage gracefully." },
  { week: "Support", title: "Iterate and maintain.", desc: "Software is never 'done'. I provide ongoing support, resolving edge cases and scaling the system as your business grows." }
];

export function WorkingTogether() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".step-card",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-[#1a1a1a] text-white px-6 border-y border-white/[0.08]">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[clamp(28px,3vw,40px)] font-ui font-medium tracking-[-0.02em] mb-24 text-center">
          What Working Together Feels Like
        </h2>
        
        <div className="flex flex-col relative">
          
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="step-card opacity-0 group relative flex flex-col md:flex-row items-start md:items-center rounded-md p-4 md:p-6 linear-hover hover:bg-white/[0.04]"
            >
              <div className="w-full md:w-[140px] shrink-0 mb-2 md:mb-0">
                <span className="text-[12px] font-ui font-medium uppercase tracking-widest text-[#8a8f98] group-hover:text-white transition-colors duration-200">
                  {step.week}
                </span>
              </div>
              
              <div className="flex-1">
                <h3 className="text-[15px] font-ui font-medium text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-[14px] font-ui text-[#8a8f98] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
