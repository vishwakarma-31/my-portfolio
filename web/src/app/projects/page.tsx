"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Demo data - in a real app this would come from a CMS or data file
const allProjects = [
  {
    id: 'cropify-ml',
    title: 'Cropify',
    category: 'Machine Learning',
    description: 'AI-powered crop recommendation system using machine learning to analyze soil conditions, climate data, and environmental factors.',
    slug: 'cropify-ml',
    image: '/projects/Cropify.png'
  },
  {
    id: 'trading-bot',
    title: 'Telegram Trading Bot',
    category: 'Full Stack',
    description: 'Automated trading bot integrated with Telegram for real-time market analysis, signal alerts, and trade execution management.',
    slug: 'trading-bot',
    image: '/projects/Trading_Bot.png'
  },
  {
    id: 'ai-interview',
    title: 'AI-Based Interview System',
    category: 'Machine Learning',
    description: 'Intelligent interview platform that automates candidate screening using NLP for verbal analysis and Computer Vision for proctoring.',
    slug: 'ai-interview',
    image: '/projects/AI_Interview.png'
  },
  {
    id: 'jarvis',
    title: 'Jarvis',
    category: 'Web',
    description: 'A sophisticated AI virtual assistant capable of natural conversation, task automation, and system control, accessed via a modern web interface.',
    slug: 'jarvis',
    image: '/projects/Jarvis.png'
  }
];

const categories = ["All", "Machine Learning", "Full Stack", "Web"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = allProjects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="min-h-screen w-full bg-[#0d0d0d] flex flex-col px-6 lg:px-12 py-32 selection:bg-[#635BFF] selection:text-white">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[48px] md:text-[64px] font-marketing font-extralight tracking-tight text-white"
          >
            Archive.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[20px] text-white/50 font-ui font-light max-w-2xl leading-[1.6]"
          >
            A comprehensive index of selected works, experiments, and open-source contributions.
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-[14px] font-ui transition-all duration-300 ease-out border ${
                activeCategory === category 
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                  : "bg-transparent text-white/60 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                key={project.id}
              >
                <Link href={`/projects/${project.slug}`} className="block h-full group">
                  <div className="w-full h-[400px] bg-[#111111] rounded-[12px] border border-white/[0.04] p-8 flex flex-col justify-between hover:bg-[#151515] hover:border-white/[0.1] transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1 stripe-shadow">
                    
                    {/* Background Image */}
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500" 
                    />

                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/80 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="flex flex-col gap-4 relative z-10 h-full justify-between">
                      <div className="flex justify-between items-start">
                        <span className="text-[11px] font-code text-[#635BFF] tracking-widest uppercase bg-[#635BFF]/10 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                        <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                      
                      <div className="mt-8">
                        <h3 className="text-[24px] font-medium tracking-tight text-white/90 mb-3 group-hover:text-white transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-[15px] font-ui text-white/50 leading-[1.6]">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="w-full py-32 flex justify-center items-center">
            <p className="text-white/40 font-ui">No projects found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
