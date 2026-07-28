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
      stagger: 0.15,
      ease: "power2.out",
      duration: 0.8,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-[#f5f5f7] text-[#1d1d1f] py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-24 flex flex-col items-start max-w-2xl">
          <h2 className="text-[40px] md:text-[56px] font-marketing font-light tracking-tight mb-4 leading-tight">
            The Process
          </h2>
          <p className="text-[18px] md:text-[20px] text-[rgba(0,0,0,0.55)] font-ui font-light">
            A systematic approach to delivering high-performance digital products from concept to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="max-w-xl">
            {stages.map((stage, index) => (
              <div key={index} className="process-card flex gap-6 md:gap-10 pb-12 relative opacity-0 translate-y-8">
                {/* Timeline Line */}
                {index !== stages.length - 1 && (
                  <div className="absolute left-[7px] md:left-[11px] top-6 bottom-0 w-[1px] bg-[rgba(0,0,0,0.1)]" />
                )}
                
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0 pt-1.5">
                  <div className="w-[15px] h-[15px] md:w-[23px] md:h-[23px] rounded-full border border-[rgba(0,0,0,0.15)] bg-[#f5f5f7] flex items-center justify-center">
                    <div className="w-[5px] h-[5px] md:w-[7px] md:h-[7px] rounded-full bg-[#1d1d1f]" />
                  </div>
                </div>
                
                {/* Timeline Content */}
                <div className="flex flex-col gap-2 pb-8">
                  <h3 className="text-[24px] md:text-[28px] font-marketing font-medium tracking-tight text-[#1d1d1f]">{stage.title}</h3>
                  <p className="text-[rgba(0,0,0,0.6)] leading-[1.6] font-ui font-light text-[16px] md:text-[18px]">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="hidden lg:block relative">
            <div className="sticky top-32 w-full h-[600px] rounded-[16px] overflow-hidden border border-[rgba(0,0,0,0.08)] bg-white stripe-shadow p-6 flex flex-col items-center justify-center">
              <img 
                src="/tracker.png" 
                alt="Process Tracker" 
                className="w-full h-full object-contain"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
