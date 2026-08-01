"use client";

import React, { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2 } from "lucide-react";
import { getHomepageData } from "@/lib/content";

const { differentiators } = getHomepageData();

export function WhyChooseMe() {
  const container = useRef<HTMLElement>(null);

  useScrollReveal(container, ".diff-card", { stagger: 0.15, start: "top 75%", duration: 0.8 });

  return (
    <section ref={container} className="py-32 bg-[#0d0d0d] text-white px-6 md:px-12 xl:px-24">
      <div className="max-w-[1280px] mx-auto">
        
        <div className="mb-12">
          <h2 className="type-h1 font-extralight text-white tracking-tight mb-6">
            Why Businesses Choose Me
          </h2>
          <p className="type-body-large text-white/60 max-w-[760px] leading-[1.7]">
            The difference between a developer and a product architect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((diff, i) => (
            <div 
              key={i} 
              className="diff-card opacity-0 group relative p-8 rounded-md bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.04)] hover:stripe-shadow transition-all duration-[300ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-surface-hover flex items-center justify-center mb-6 text-brand-primary">
                {i === 0 && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
                {i === 1 && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
                {i === 2 && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>}
              </div>
              <h3 className="type-h4 text-white mb-3 tracking-tight">
                {diff.title}
              </h3>
              <p className="type-body font-light text-white/60 leading-[1.7]">
                {diff.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
