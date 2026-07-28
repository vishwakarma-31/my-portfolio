"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen bg-gradient-to-b from-[#f5f5f7] to-[#ffffff] text-text-light flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="flex flex-col items-center text-center z-10 px-6 max-w-5xl"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-marketing font-light tracking-[-0.04em] leading-[1.05]"
          style={{ fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 300 }}
        >
          I build software that turns ideas into products people actually use.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mt-8 text-[20px] md:text-[24px] text-text-secondary-light font-ui font-light leading-[1.6] max-w-2xl"
        >
          From AI platforms to business systems, I design software that solves real problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-12"
        >
          <a href="/projects" aria-label="Explore my featured stories and work" className="inline-flex items-center justify-center px-8 py-4 bg-text-light text-white rounded-full font-ui text-sm font-medium hover:bg-black transition-colors duration-200">
            Explore My Work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
