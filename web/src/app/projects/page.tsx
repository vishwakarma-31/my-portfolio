"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "AI", "Automation", "Business Growth", "Dashboards", "Web Applications"];

const allProjects = [
  {
    title: "Cropify",
    description: "AI-powered crop recommendation system using machine learning to analyze soil conditions, climate data, and environmental factors.",
    category: "AI",
    slug: "cropify-ml",
    image: "/projects/Cropify.png"
  },
  {
    title: "Telegram Trading Bot",
    description: "Automated trading bot integrated with Telegram for real-time market analysis, signal alerts, and trade execution.",
    category: "Automation",
    slug: "trading-bot",
    image: "/projects/Trading_Bot.png"
  },
  {
    title: "AI Interview",
    description: "Intelligent interview platform automating candidate screening using NLP and Computer Vision for proctoring.",
    category: "AI",
    slug: "ai-interview",
    image: "/projects/AI_Interview.png"
  },
  {
    title: "Jarvis",
    description: "A sophisticated AI virtual assistant capable of natural conversation, task automation, and system control via a modern web UI.",
    category: "Web Applications",
    slug: "jarvis",
    image: "/projects/Jarvis.png"
  }
];

export default function ProjectsArchive() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-page-dark text-text-dark pt-32 pb-24 px-6 lg:px-12 selection:bg-brand-primary selection:text-white">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-16">
          <h1 className="text-[48px] md:text-[64px] font-marketing font-light tracking-tight mb-6 leading-tight">
            Project Archive
          </h1>
          <p className="text-[20px] text-text-secondary-dark font-ui font-light max-w-2xl">
            A comprehensive collection of problems solved through software engineering, design, and product thinking.
          </p>
        </header>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-[14px] font-ui transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-background-elevated text-black font-medium' 
                  : 'bg-[rgba(255,255,255,0.05)] text-text-secondary-dark hover:bg-[rgba(255,255,255,0.1)] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid (Dynamic Frame Layout inspired) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col bg-background-secondary border border-border-subtle rounded-md overflow-hidden hover:border-[rgba(255,255,255,0.2)] transition-colors duration-300 stripe-shadow"
              >
                <div className="w-full aspect-[4/3] relative overflow-hidden bg-background-tertiary">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-brand-primary font-ui text-[12px] font-medium tracking-wide uppercase mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-[24px] font-marketing font-light text-white mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-[15px] font-ui text-text-secondary-dark leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="mt-8">
                    <Link href={`/projects/${project.slug}`}>
                      <button className="text-[14px] font-ui text-white font-medium hover:text-brand-primary transition-colors flex items-center gap-2">
                        View Project
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="py-32 text-center">
            <p className="text-[18px] text-text-secondary-dark font-ui">No projects found in this category.</p>
          </div>
        )}
      </div>
    </main>
  );
}
