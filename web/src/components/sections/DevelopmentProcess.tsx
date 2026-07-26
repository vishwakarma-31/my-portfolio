"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const stages = [
  {
    title: "Discovery",
    description: "Understanding business goals, user needs, and technical constraints.",
  },
  {
    title: "Research",
    description: "Analyzing competitors, market trends, and identifying opportunities.",
  },
  {
    title: "Design",
    description: "Creating wireframes, interactive prototypes, and scalable design systems.",
  },
  {
    title: "Development",
    description: "Writing clean, modular, and performant code using modern tech stacks.",
  },
  {
    title: "Testing",
    description: "Ensuring cross-browser compatibility, accessibility, and robust performance.",
  },
  {
    title: "Deployment",
    description: "Setting up CI/CD pipelines and launching to production environments safely.",
  },
  {
    title: "Support",
    description: "Monitoring performance, resolving issues, and iterating based on analytics.",
  }
];

export function DevelopmentProcess() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to(".process-card", {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-background text-foreground py-40 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-32 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 leading-tight">
            The Process
          </h2>
          <p className="text-xl md:text-2xl text-foreground/50 font-light max-w-2xl mx-auto">
            A systematic approach to delivering high-performance digital products from concept to scale.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {stages.map((stage, index) => (
            <div key={index} className="process-card flex gap-8 md:gap-12 pb-12 relative opacity-0 translate-y-8">
              {/* Timeline Line */}
              {index !== stages.length - 1 && (
                <div className="absolute left-[11px] md:left-[15px] top-8 bottom-0 w-[1px] bg-border" />
              )}
              
              {/* Timeline Dot */}
              <div className="relative z-10 flex-shrink-0 pt-1.5">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-border bg-background flex items-center justify-center">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-foreground/50" />
                </div>
              </div>
              
              {/* Timeline Content */}
              <div className="flex flex-col gap-3 pb-8">
                <h3 className="text-2xl font-semibold tracking-tight">{stage.title}</h3>
                <p className="text-foreground/60 leading-relaxed font-light text-lg">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
