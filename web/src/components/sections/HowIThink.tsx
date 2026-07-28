"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const lines = [
  { text: "Empathy", reverse: false },
  { text: "Purpose", reverse: false },
  { text: "Clarity", reverse: true },
  { text: "Craftsmanship", reverse: true },
  { text: "Impact", reverse: false },
];

export function HowIThink() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xRight = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section className="w-full bg-[#000000] text-white overflow-hidden py-24 md:py-32">
      <div className="px-6 lg:px-12 max-w-[1400px] mx-auto mb-12 md:mb-24">
        <h2 className="text-[14px] font-code uppercase tracking-widest text-[#635BFF]">
          How I Think
        </h2>
      </div>

      <div 
        ref={containerRef}
        className="w-full flex flex-col justify-center min-h-[40vh] mb-24 md:mb-32"
      >
        {lines.map((line, i) => (
          <motion.div 
            key={i}
            style={{ x: line.reverse ? xLeft : xRight }}
            className={`whitespace-nowrap text-[12vw] md:text-[9vw] font-marketing font-bold leading-[1.1] tracking-tight ${i % 2 === 0 ? 'text-[#635BFF]' : 'text-white'}`}
          >
            {[...Array(12)].map((_, j) => (
              <span key={j} className="mr-8 md:mr-16 uppercase">
                {line.text}.
              </span>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Experience / Background */}
      <div className="px-6 lg:px-12 max-w-[1400px] mx-auto py-24 md:py-32 border-t border-[rgba(255,255,255,0.08)] bg-black relative z-40">
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
