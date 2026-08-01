"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "RBAC Authorization Platform",
    category: "Security",
    desc: "Role-based access control system for enterprise applications.",
    tech: ["Node.js", "Redis", "PostgreSQL"],
    metric: "Distributed Architecture",
    slug: "rbac-auth",
  },
  {
    name: "Real-Time Dark Pattern Detector",
    category: "Browser Extension",
    desc: "Detects and flags manipulative UX patterns on e-commerce sites in real-time.",
    tech: ["TypeScript", "Python (FastAPI)", "Scikit-Learn"],
    metric: "Real-Time Analysis",
    slug: "dark-pattern-detector",
  },
  {
    name: "Cropify",
    category: "AgriTech",
    desc: "Machine learning platform for crop disease prediction and yield optimization.",
    tech: ["React", "Flask", "TensorFlow"],
    metric: "Predictive Modeling",
    slug: "cropify-ml",
  }
];

export function SelectedWork() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".selected-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-background-primary  text-text-primary  px-6 md:px-12 xl:px-24 border-t border-border-subtle ">
      <div className="max-w-[1280px] mx-auto">
        
        <div className="mb-12">
          <h2 className="type-h1 font-extralight tracking-tight mb-2">
            Selected Work
          </h2>
          <p className="type-body-large font-normal text-text-secondary  max-w-[760px] leading-[1.7]">
            Proven architectures across distinct problem spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Card 
              key={i} 
              variant="interactive"
              className="selected-card opacity-0 overflow-hidden group flex flex-col"
            >
              {/* Abstract Visual (Image Replacement) */}
              <div className="h-[200px] bg-background-tertiary relative overflow-hidden flex items-center justify-center shrink-0">
                <div className={`absolute inset-0 bg-brand-primary opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-[30px] scale-150 rounded-full`} />
                <div className="relative z-10 w-16 h-16 rounded-lg bg-surface-hover border border-border-strong backdrop-blur-md shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ease-out">
                  <span className="type-h4 text-white/50">{project.name.charAt(0)}</span>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="type-tiny text-brand-primary uppercase tracking-[0.08em]">{project.category}</span>
                  <span className="type-tiny text-black/40 dark:text-white/40">{project.metric}</span>
                </div>
                
                <h3 className="type-h3 text-black dark:text-white mb-2 tracking-tight">
                  {project.name}
                </h3>
                
                <p className="type-body font-light text-text-secondary  mb-8 flex-grow leading-[1.7]">
                  {project.desc}
                </p>
                
                <Link href={`/work/${project.slug}`} className="mt-auto flex items-center gap-2 type-caption text-black dark:text-white group/btn">
                  View Case Study 
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1">&rarr;</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
