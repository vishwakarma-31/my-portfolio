"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { getHomepageData } from "@/lib/content";

const { steps } = getHomepageData();

export function WorkingTogether() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Reveal cards
    gsap.fromTo(".step-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
        }
      }
    );

    // Animate progress line
    gsap.to(".timeline-progress", {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top 50%",
        end: "bottom 80%",
        scrub: true,
      }
    });

    // Light up nodes
    const nodes = gsap.utils.toArray('.inner-glow');
    nodes.forEach((node) => {
      gsap.to(node as HTMLElement, {
        opacity: 1,
        duration: 0.2,
        scrollTrigger: {
          trigger: (node as HTMLElement).closest('.step-card'),
          start: "top 60%",
          toggleActions: "play none none reverse"
        }
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-[#0d0d0d] text-white px-6 md:px-12 xl:px-24 border-y border-[#333]">
      <div className="max-w-[760px] mx-auto">
        <h2 className="type-display-m font-extralight tracking-[-0.02em] mb-12">
          What Working Together Feels Like
        </h2>
        
        <div className="relative pl-8 md:pl-12">
          {/* Vertical Progress Line */}
          <div className="absolute left-[7px] md:left-[15px] top-4 bottom-12 w-[1px] bg-white/10">
            <div className="timeline-progress w-full bg-brand-primary origin-top scale-y-0" style={{ height: '100%' }} />
          </div>

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className="step-card opacity-0 group relative flex flex-col items-start pt-2"
              >
                {/* Glowing Node */}
                <div className="timeline-node absolute -left-[29px] md:-left-[37px] top-3 w-4 h-4 rounded-full border border-white/20 bg-[#0a0a0a] flex items-center justify-center transition-all duration-300 z-10">
                  <div className="inner-glow w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 transition-opacity duration-300 shadow-[0_0_10px_#635BFF]" />
                </div>
                
                <div className="mb-2">
                  <span className="type-tiny text-brand-primary tracking-[0.08em] uppercase">
                    {step.week}
                  </span>
                </div>
                
                <div>
                  <h3 className="type-h4 font-medium text-white mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="type-body text-white/60 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
