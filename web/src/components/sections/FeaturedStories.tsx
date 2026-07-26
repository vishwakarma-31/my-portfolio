"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const sections = gsap.utils.toArray(".project-chapter") as HTMLElement[];
      const totalWidth = scrollRef.current?.scrollWidth || 0;
      const viewportWidth = window.innerWidth;
      
      gsap.to(sections, {
        x: () => -(totalWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + totalWidth,
        }
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-[#000000] text-text-dark py-[120px] overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-20">
        <h2 className="text-[40px] md:text-[56px] font-marketing font-light tracking-tight mb-4 leading-[1.07]">
          Selected Work
        </h2>
      </div>

      {/* GSAP Pin Wrapper */}
      <div ref={wrapperRef} className="w-full relative lg:h-screen lg:flex lg:flex-col lg:justify-center overflow-hidden">
        
        {/* Horizontal Scrolling Showcase */}
        <div className="w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 lg:overflow-visible lg:pb-0">
          <div ref={scrollRef} className="flex h-full w-max">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="project-chapter w-screen h-[70vh] lg:h-[80vh] px-6 lg:px-12 flex-shrink-0 flex flex-col justify-center snap-center"
              >
                <div className="w-full h-full relative group rounded-[12px] overflow-hidden bg-[#0d0d0d] flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 ease-out" 
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
                      <Link href={`/projects/${project.slug}`}>
                        <button className="px-8 py-3 bg-[#635BFF] text-white rounded-full font-ui text-[14px] font-medium hover:bg-[#524BCC] transition-colors duration-200">
                          Explore Story
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-20 flex justify-center">
        <Link href="/projects">
          <button className="px-12 py-5 bg-white text-black rounded-full font-ui text-[16px] font-medium hover:bg-[#635BFF] hover:text-white transition-colors duration-300">
            View All Projects
          </button>
        </Link>
      </div>
    </section>
  );
}
