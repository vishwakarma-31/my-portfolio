"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "AI", "Security", "Web Applications"];

const allProjects = [
  {
    title: "Cropify",
    description: "AI-powered crop recommendation system using machine learning to analyze soil conditions, climate data, and environmental factors.",
    category: "AI",
    slug: "cropify-ml",
    image: "/projects/Cropify.png"
  },
  {
    title: "RBAC Authorization Platform",
    description: "Role-based access control system for enterprise applications.",
    category: "Security",
    slug: "rbac-auth",
    image: "/projects/rbac.png"
  },
  {
    title: "AI Interview",
    description: "Intelligent interview platform automating candidate screening using NLP and Computer Vision for proctoring.",
    category: "AI",
    slug: "ai-interview",
    image: "/projects/AI_Interview.png"
  },
  {
    title: "Real-Time Dark Pattern Detector",
    description: "Detects and flags manipulative UX patterns on e-commerce sites in real-time.",
    category: "Web Applications",
    slug: "dark-pattern-detector",
    image: "/projects/dark-pattern.png"
  }
];

export default function ProjectsArchive() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <main className="dark min-h-screen bg-background-primary text-text-primary pt-32 pb-24 px-6 lg:px-12 selection:bg-brand-primary selection:text-white">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-16">
          <h1 className="type-apple-headline mb-6 text-white">
            Project Archive
          </h1>
          <p className="type-body-large text-text-secondary max-w-2xl">
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
                  ? 'bg-background-elevated text-text-primary font-medium border border-border-strong' 
                  : 'bg-transparent text-text-secondary border border-border-subtle hover:bg-surface-hover hover:text-text-primary'
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
                className="group relative flex flex-col bg-background-secondary border border-border-subtle rounded-xl overflow-hidden hover:border-border-strong transition-colors duration-300 stripe-shadow"
              >
                <div className="w-full aspect-[4/3] relative overflow-hidden bg-background-tertiary">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-secondary to-transparent opacity-50" />
                </div>
                <div className="p-8 flex flex-col flex-grow bg-background-secondary">
                  <span className="text-brand-primary type-tiny uppercase mb-4">
                    {project.category}
                  </span>
                  <h3 className="type-h3 text-text-primary mb-3">
                    {project.title}
                  </h3>
                  <p className="type-body text-text-secondary flex-grow">
                    {project.description}
                  </p>
                  <div className="mt-8">
                    <Link href={`/work/${project.slug}`}>
                      <button className="type-caption text-text-primary font-medium hover:text-brand-primary linear-hover flex items-center gap-2 group/btn">
                        View Project
                        <span className="transition-transform duration-300 group-hover/btn:translate-x-1">&rarr;</span>
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
            <p className="type-body text-text-secondary">No projects found in this category.</p>
          </div>
        )}
      </div>
    </main>
  );
}
