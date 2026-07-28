"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function TheProblem() {
  const container = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    const texts = gsap.utils.toArray('.problem-text');
    
    texts.forEach((text: any, i) => {
      gsap.fromTo(text,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, { scope: container });

  return (
    <section 
      ref={container}
      className="py-[30vh] flex flex-col items-center bg-[#f5f5f7] dark:bg-[#000000] text-[#1d1d1f] dark:text-[#f5f5f7] px-6"
    >
      <div className="max-w-[800px] w-full text-center flex flex-col gap-[15vh]">
        <h2 className="problem-text opacity-0 text-[clamp(32px,5vw,64px)] font-marketing font-light leading-[1.2] tracking-[-0.02em]">
          Most software fails long before launch.
        </h2>
        
        <h2 className="problem-text opacity-0 text-[clamp(32px,5vw,64px)] font-marketing font-light leading-[1.2] tracking-[-0.02em] text-black/40 dark:text-white/40">
          Not because of bad code.
        </h2>
        
        <h2 className="problem-text opacity-0 text-[clamp(32px,5vw,64px)] font-marketing font-light leading-[1.2] tracking-[-0.02em] text-black/60 dark:text-white/60">
          Because the wrong things were built.
        </h2>
        
        <h2 className="problem-text opacity-0 text-[clamp(40px,6vw,72px)] font-marketing font-medium leading-[1.2] tracking-[-0.03em]">
          I solve that first.
        </h2>
      </div>
    </section>
  );
}
