"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function FinalMoment() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".final-content",
      { opacity: 0, scale: 0.98 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="min-h-[80vh] flex items-center justify-center bg-[#0d0d0d] text-white px-6">
      <div className="final-content opacity-0 max-w-[800px] text-center flex flex-col items-center">
        <h2 className="text-[clamp(48px,6vw,80px)] font-marketing font-thin leading-[1.1] tracking-[-0.03em] mb-12">
          The next product people remember could be yours.
        </h2>
        
        <Link 
          href="/contact"
          className="px-10 py-5 rounded-[4px] bg-[#96FF00] text-black font-ui font-bold text-[16px] shopify-hover"
        >
          Start Your Project
        </Link>
      </div>
    </section>
  );
}
