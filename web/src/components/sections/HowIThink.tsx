"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words = "I believe that code is just a tool. The real craft is in understanding human behavior and designing systems that feel inevitable. When we build products, we aren't just shipping features; we're crafting experiences that respect the user's time, attention, and intelligence. My approach bridges the gap between deep technical architecture and relentless product focus.".split(" ");

export function HowIThink() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 50%"]
  });

  return (
    <section className="w-full bg-[#000000] text-white">
      {/* How I Think Section - Scroll Reveal Effect */}
      <div 
        ref={containerRef}
        className="px-6 lg:px-12 max-w-[1400px] mx-auto min-h-[80vh] flex flex-col justify-center py-24 md:py-32"
      >
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3">
            <h2 className="text-[14px] font-code uppercase tracking-widest text-[#635BFF] sticky top-32">
              How I Think
            </h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-[32px] md:text-[48px] lg:text-[56px] font-marketing font-light leading-[1.2] tracking-tight flex flex-wrap gap-x-3 gap-y-2">
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
                
                return (
                  <motion.span key={i} style={{ opacity }}>
                    {word}
                  </motion.span>
                );
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Experience / Background */}
      <div className="px-6 lg:px-12 max-w-[1400px] mx-auto py-24 md:py-32 border-t border-[rgba(255,255,255,0.08)]">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3">
            <h2 className="text-[14px] font-code uppercase tracking-widest text-[#635BFF] mb-8">
              Background
            </h2>
          </div>
          <div className="md:w-2/3 flex flex-col md:flex-row gap-12">
            
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="text-[24px] font-marketing text-white tracking-tight">Full Stack Engineering</h3>
              <p className="text-[16px] text-white/60 font-ui font-light leading-[1.7]">
                Over the years, I&apos;ve specialized in building robust web applications from the database to the browser. I work primarily with React, Next.js, Node, and Python, always choosing the right tool for the specific problem at hand.
              </p>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <h3 className="text-[24px] font-marketing text-white tracking-tight">Design & Product</h3>
              <p className="text-[16px] text-white/60 font-ui font-light leading-[1.7]">
                I don&apos;t just write code; I design systems. Whether it&apos;s crafting a seamless user interface or architecting a scalable backend, I ensure every decision aligns with the ultimate business goal.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
