"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

export function HeroProduct() {
  const container = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(headlineRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.2 }
    )
    .fromTo(subheadlineRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.8"
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.8"
    );
  }, { scope: container });

  return (
    <section 
      ref={container}
      className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f7] dark:bg-[#000000] text-[#1d1d1f] dark:text-[#f5f5f7] px-6 py-24"
    >
      <div className="max-w-[1000px] w-full text-center flex flex-col items-center">
        <h1 
          ref={headlineRef}
          className="text-[clamp(48px,8vw,96px)] font-marketing font-light leading-[1.1] tracking-[-0.04em] mb-6 opacity-0"
        >
          Great businesses deserve great software.
        </h1>
        
        <p 
          ref={subheadlineRef}
          className="text-[clamp(18px,2vw,24px)] font-marketing font-normal text-black/55 dark:text-white/55 max-w-[600px] mb-12 opacity-0"
        >
          I design and build software that turns complex problems into elegant, reliable solutions.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-6 opacity-0">
          <Link 
            href="/contact"
            className="px-8 py-4 rounded-full bg-[#1d1d1f] dark:bg-[#f5f5f7] text-[#f5f5f7] dark:text-[#1d1d1f] font-ui font-medium text-[15px] hover:scale-[1.02] transition-transform duration-300"
          >
            Start Your Project
          </Link>
          <Link 
            href="#work"
            className="px-8 py-4 rounded-full bg-transparent text-[#1d1d1f] dark:text-[#f5f5f7] font-ui font-medium text-[15px] hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-300"
          >
            Explore My Work
          </Link>
        </div>
      </div>
    </section>
  );
}
