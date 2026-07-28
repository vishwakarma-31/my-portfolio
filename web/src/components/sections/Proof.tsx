"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Proof() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".proof-stat",
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-[#f5f5f7] dark:bg-[#000000] text-[#1d1d1f] dark:text-[#f5f5f7] px-6">
      <div className="max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="proof-stat opacity-0 p-8 rounded-2xl bg-white dark:bg-[#111] stripe-shadow border border-black/5 dark:border-white/5 text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="text-[clamp(40px,5vw,64px)] font-marketing font-light tracking-tight mb-2">40+</div>
            <div className="text-[15px] font-ui text-black/60 dark:text-white/60">Projects Shipped</div>
          </div>
          <div className="proof-stat opacity-0 p-8 rounded-2xl bg-white dark:bg-[#111] stripe-shadow border border-black/5 dark:border-white/5 text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="text-[clamp(40px,5vw,64px)] font-marketing font-light tracking-tight mb-2">12</div>
            <div className="text-[15px] font-ui text-black/60 dark:text-white/60">Enterprise Clients</div>
          </div>
          <div className="proof-stat opacity-0 p-8 rounded-2xl bg-white dark:bg-[#111] stripe-shadow border border-black/5 dark:border-white/5 text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="text-[clamp(40px,5vw,64px)] font-marketing font-light tracking-tight mb-2">0</div>
            <div className="text-[15px] font-ui text-black/60 dark:text-white/60">Missed Deadlines</div>
          </div>
        </div>
      </div>
    </section>
  );
}
