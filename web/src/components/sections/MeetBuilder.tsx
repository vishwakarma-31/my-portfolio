"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MeetBuilder() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".builder-content",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: container });

  return (
    <section 
      ref={container}
      className="py-32 bg-[#f5f5f7] dark:bg-[#000000] text-[#1d1d1f] dark:text-[#f5f5f7] px-6 flex justify-center"
    >
      <div className="builder-content opacity-0 max-w-[900px] w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Handcrafted Graphic Silhouette Frame */}
        <div className="aspect-[4/5] relative bg-[#09090b] rounded-2xl overflow-hidden border border-white/10 p-6 flex flex-col justify-between stripe-shadow group">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-code text-[#635BFF] tracking-wider uppercase">BUILDER PROFILE</span>
            <div className="w-2 h-2 rounded-full bg-[#96FF00] animate-pulse" />
          </div>
          
          <div className="my-auto flex flex-col items-center justify-center text-center py-10">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#635BFF] to-[#96FF00] p-[2px] mb-6 shadow-lg shadow-[#635BFF]/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-[#0d0d0d] flex items-center justify-center text-white font-marketing font-light text-2xl">
                AV
              </div>
            </div>
            <h3 className="text-white text-lg font-marketing font-medium mb-1">Aryan Vishwakarma</h3>
            <p className="text-[13px] font-ui text-[#8a8f98]">Product Engineer &amp; Architect</p>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-code text-[#8a8f98]">
            <span>LOC: INDIA</span>
            <span>EXP: 5+ YRS</span>
          </div>
        </div>
        
        <div>
          <h2 className="text-xs font-ui font-semibold uppercase tracking-[0.1em] text-[#635BFF] mb-8">
            The Builder
          </h2>
          <p className="text-[clamp(20px,2.5vw,28px)] font-marketing font-light leading-[1.6] tracking-[-0.01em]">
            I engineer software with discipline, speed, and focus. Writing code is straightforward—building products that people love and businesses trust requires engineering rigor and product empathy.
          </p>
        </div>
      </div>
    </section>
  );
}
