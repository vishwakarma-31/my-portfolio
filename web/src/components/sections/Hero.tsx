"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const renderScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[120vh] bg-gradient-to-b from-[#f5f5f7] to-[#ffffff] text-text-light flex flex-col items-center pt-[20vh] overflow-hidden"
    >
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="flex flex-col items-center text-center z-10 px-6"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-light tracking-[-0.04em] max-w-5xl leading-[1.05]"
          style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
        >
          Engineering Digital Excellence.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mt-6 text-[24px] md:text-[28px] text-text-secondary-light font-light leading-[1.3] max-w-2xl"
        >
          Crafting premium web experiences and architecting scalable systems.
        </motion.p>
      </motion.div>

      {/* Placeholder for 3D Product Render - resting on surface */}
      <motion.div 
        style={{ scale: renderScale }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 w-[90%] md:w-[70%] max-w-[900px] h-[50vh] bg-[#f5f5f7] rounded-t-[24px] shadow-[0_-4px_40px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center border-t border-x border-[#000000]/5"
      >
        <span className="text-text-secondary-light/40 text-sm tracking-widest uppercase mb-4">Interactive Canvas</span>
      </motion.div>
    </section>
  );
}
