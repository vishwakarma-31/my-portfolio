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
    // Only apply horizontal scroll pinning on desktop
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const sections = gsap.utils.toArray(".project-card") as HTMLElement[];
      const totalWidth = scrollRef.current?.scrollWidth || 0;
      const viewportWidth = window.innerWidth;
      
      gsap.to(sections, {
        x: () => -(totalWidth - viewportWidth + 100), // padding offset
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + (totalWidth),
        }
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-page-dark text-text-dark py-[120px] overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-20 text-center flex flex-col items-center">
        <h2 className="text-[40px] md:text-[56px] font-extralight tracking-tight mb-4 leading-[1.07]">
          Featured Stories.
        </h2>
        <p className="text-[20px] md:text-[24px] text-text-secondary-dark font-light leading-[1.6] max-w-3xl">
          A selection of recent projects that showcase my approach to engineering, design, and problem solving.
        </p>
      </div>

      {/* GSAP Pin Wrapper */}
      <div ref={wrapperRef} className="w-full relative lg:h-screen lg:flex lg:flex-col lg:justify-center">
        
        {/* Horizontal Scrolling Showcase */}
        <div className="w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 lg:overflow-visible lg:pb-0">
          <div ref={scrollRef} className="flex px-6 lg:px-12 gap-4 lg:gap-6 w-max h-full items-center">
            {projects.map((project, index) => {
              const [isHovered, setIsHovered] = React.useState(false);
              return (
                <div 
                  key={index} 
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="project-card h-full flex flex-col gap-6 shrink-0 group cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{
                    width: isHovered 
                      ? "clamp(400px, 60vw, 500px)" 
                      : "clamp(200px, 40vw, 350px)",
                  }}
                >
                  <div className="w-full h-[50vh] min-h-[300px] bg-[#0d0d0d] rounded-[8px] border border-[rgba(255,255,255,0.08)] flex items-center justify-center overflow-hidden relative stripe-shadow transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                  </div>
                  
                  <div className="flex flex-col justify-between gap-4 px-2 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                       style={{ opacity: isHovered ? 1 : 0.6 }}>
                    <div className="space-y-2">
                      <h3 className="text-[28px] font-medium tracking-tight group-hover:text-[#635BFF] transition-colors duration-200 whitespace-nowrap overflow-hidden text-ellipsis">{project.title}</h3>
                      <p className="text-[15px] text-text-secondary-dark font-light leading-[1.7] line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-4 shrink-0">
                      <Link href={`/projects/${project.slug}`}>
                        <button className="bg-transparent border border-[rgba(255,255,255,0.08)] hover:border-[#635BFF] hover:text-[#635BFF] text-text-dark px-6 py-2 rounded-[4px] text-[13px] font-ui transition-colors whitespace-nowrap">
                          View Project
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-20 flex justify-center">
        <Link href="/projects">
          <button className="bg-white text-black px-8 py-4 rounded-[4px] text-[15px] font-ui hover:bg-[#635BFF] hover:text-white transition-colors duration-200">
            View All Projects
          </button>
        </Link>
      </div>
    </section>
  );
}
