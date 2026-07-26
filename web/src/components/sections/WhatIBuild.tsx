"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = [
  {
    title: "AI Applications",
    description: "Integrating large language models and machine learning pipelines into intuitive user interfaces.",
  },
  {
    title: "Business Platforms",
    description: "Architecting scalable, secure, and highly available systems for enterprise operations.",
  },
  {
    title: "Internal Tools",
    description: "Transforming fragmented workflows into cohesive, bespoke internal products.",
  },
];

export function WhatIBuild() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray(".reveal-item") as HTMLElement[];
    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-page-light text-text-light py-[120px] flex flex-col items-center justify-center">
      <div className="reveal-item flex flex-col items-center text-center px-6 max-w-4xl mb-24">
        <h2 className="text-[40px] md:text-[56px] font-extralight tracking-tight mb-4 leading-[1.07]">
          What I Build.
        </h2>
        <p className="text-[20px] md:text-[24px] text-text-secondary-light font-normal leading-[1.6] max-w-2xl">
          I craft digital experiences that combine robust engineering with intuitive design.
        </p>
      </div>

      <div className="w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="reveal-item group bg-white rounded-[8px] p-8 md:p-10 stripe-shadow border border-[#000000]/5 flex flex-col gap-4 cursor-pointer transition-all duration-250 ease-out hover:-translate-y-1 hover:shadow-[rgba(50,50,93,0.3)_0px_40px_60px_-20px,_rgba(0,0,0,0.3)_0px_20px_40px_-20px]"
          >
            <span className="text-[#635BFF] font-mono tracking-widest text-xs uppercase font-medium">0{index + 1}</span>
            <h3 className="text-2xl font-medium tracking-tight text-text-light group-hover:text-[#635BFF] transition-colors duration-200">
              {category.title}
            </h3>
            <p className="text-[17px] text-text-secondary-light font-light leading-[1.7]">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
