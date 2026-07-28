"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Philosophy() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".philosophy-line",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-[20vh] bg-white text-black dark:bg-black dark:text-white px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        <h2 className="philosophy-line opacity-0 text-[clamp(64px,12vw,180px)] font-display font-black uppercase leading-[0.85] tracking-[0.02em] mb-8">
          I DON'T CHASE TRENDS.
        </h2>
        <h2 className="philosophy-line opacity-0 text-[clamp(64px,12vw,180px)] font-display font-black uppercase leading-[0.85] tracking-[0.02em] mb-8">
          I SOLVE PROBLEMS.
        </h2>
        <h2 className="philosophy-line opacity-0 text-[clamp(64px,12vw,180px)] font-display font-black uppercase leading-[0.85] tracking-[0.02em] text-black/20 dark:text-white/20">
          I BUILD PRODUCTS THAT LAST.
        </h2>
      </div>
    </section>
  );
}
