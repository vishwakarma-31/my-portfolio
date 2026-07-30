"use client";

import React, { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Philosophy() {
  const container = useRef<HTMLElement>(null);

  useScrollReveal(container, ".philosophy-line", { y: 10, start: "top 70%" });

  return (
    <section ref={container} className="py-48 bg-[#0a0a0a] text-white px-6 md:px-12 xl:px-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center">
        <h2 className="philosophy-line opacity-0 font-display font-black text-[clamp(64px,14vw,180px)] leading-[0.85] tracking-[0.03em] uppercase mb-8">
          I DON&apos;T CHASE TRENDS.
        </h2>
        <h2 className="philosophy-line opacity-0 font-display font-black text-[clamp(64px,14vw,180px)] leading-[0.85] tracking-[0.03em] uppercase mb-8">
          I SOLVE PROBLEMS.
        </h2>
        <h2 className="philosophy-line opacity-0 font-display font-black text-[clamp(64px,14vw,180px)] leading-[0.85] tracking-[0.03em] uppercase text-white/20">
          I BUILD PRODUCTS THAT LAST.
        </h2>
      </div>
    </section>
  );
}
