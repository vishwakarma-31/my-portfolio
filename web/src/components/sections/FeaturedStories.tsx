"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "Cropify",
    description: "AI-powered crop recommendation system using machine learning to analyze soil conditions, climate data, and environmental factors.",
    metadata: "Machine Learning & Full Stack",
    slug: "cropify-ml",
    image: "/projects/Cropify.png"
  },
  {
    title: "Telegram Trading Bot",
    description: "Automated trading bot integrated with Telegram for real-time market analysis, signal alerts, and trade execution.",
    metadata: "Python & Algo Trading",
    slug: "trading-bot",
    image: "/projects/Trading_Bot.png"
  },
  {
    title: "AI Interview",
    description: "Intelligent interview platform automating candidate screening using NLP and Computer Vision for proctoring.",
    metadata: "GenAI & Computer Vision",
    slug: "ai-interview",
    image: "/projects/AI_Interview.png"
  },
  {
    title: "Jarvis",
    description: "A sophisticated AI virtual assistant capable of natural conversation, task automation, and system control via a modern web UI.",
    metadata: "React, 3D & Speech AI",
    slug: "jarvis",
    image: "/projects/Jarvis.png"
  }
];

export function FeaturedStories() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate dynamic width and transform percentage based on the number of projects.
  // E.g., for 4 projects: transforms from 0% to -75% across a 400vw container.
  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    ["0%", `-${100 * (projects.length - 1) / projects.length}%`]
  );

  return (
    <section className="w-full bg-[#000000] text-text-dark py-[120px]">
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-20">
        <h2 className="text-[40px] md:text-[56px] font-marketing font-light tracking-tight mb-4 leading-[1.07]">
          Selected Work
        </h2>
      </div>

      {/* Framer Motion Pin Wrapper */}
      <div ref={containerRef} style={{ height: `${projects.length * 100}vh` }} className="relative w-full">
        <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }} className="flex flex-col justify-center">
          
          <motion.div 
            style={{ x, display: "flex", width: `${projects.length * 100}vw` }}
          >
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="w-screen h-[70vh] lg:h-[80vh] px-6 lg:px-12 flex-shrink-0 flex flex-col justify-center"
              >
                <div className="w-full h-full relative group rounded-[12px] overflow-hidden bg-[#0d0d0d] flex items-center justify-center">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 100vw"
                    className="absolute inset-0 object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-16 text-left">
                    <h3 className="text-[32px] lg:text-[48px] font-marketing font-light tracking-[-0.02em] text-white leading-tight mb-4">
                      {project.title}
                    </h3>
                    <p className="text-[16px] lg:text-[20px] text-white/70 font-ui font-light max-w-2xl mb-8">
                      {project.description}
                    </p>
                    <div>
                      <Link href={`/projects/${project.slug}`} aria-label={`Explore story for ${project.title}`}>
                        <button className="px-8 py-3 bg-[#635BFF] text-white rounded-full font-ui text-[14px] font-medium hover:bg-[#524BCC] transition-colors duration-200">
                          Explore Story
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-20 flex justify-center">
        <Link href="/projects" aria-label="View all projects in the archive">
          <button className="px-12 py-5 bg-white text-black rounded-full font-ui text-[16px] font-medium hover:bg-[#635BFF] hover:text-white transition-colors duration-300">
            View All Projects
          </button>
        </Link>
      </div>
    </section>
  );
}
