"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function MeetBuilder() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".builder-content",
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: container });

  return (
    <section 
      ref={container}
      className="dark py-32 bg-background-primary text-text-primary px-6 md:px-12 xl:px-24 flex justify-center border-t border-border-subtle"
    >
      <div className="builder-content opacity-0 max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-12 lg:gap-24 items-center">
        
        {/* Linear-style Precision Avatar Container */}
        <div className="relative aspect-square md:aspect-[3/4] rounded-lg bg-background-elevated border border-border-subtle overflow-hidden group flex flex-col justify-end p-6 transition-all duration-[400ms] hover:border-border-subtle0 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          {/* Portrait Image */}
          <Image 
            src="/images/builder_portrait.png" 
            alt="Aryan Vishwakarma" 
            fill 
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover object-center scale-105 opacity-60 mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-700" 
          />
          {/* Subtle noise and gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[rgba(255,255,255,0.05)] via-transparent to-[rgba(0,0,0,0.9)] pointer-events-none" />
          
          <div className="absolute top-6 left-6 type-caption text-white tracking-[0.08em] uppercase font-display z-10">Profile</div>

          <div className="relative z-10">
            <h3 className="text-white type-body-large font-medium tracking-tight mb-1">Aryan Vishwakarma</h3>
            <p className="type-caption text-text-secondary mb-4">Product Engineer &amp; Architect</p>
            
            <div className="pt-4 border-t border-border-subtle flex items-center justify-between type-tiny font-code text-text-muted">
              <span>LOC: INDIA</span>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="font-display font-black text-[clamp(64px,14vw,180px)] leading-[0.85] tracking-[0.03em] uppercase mb-6">
            The Builder
          </h2>
          
          <div className="flex flex-col gap-8 type-body-large text-text-primary leading-[1.6]">
            {/* Intro */}
            <p>
              I am a product engineer and architect. I build software with the rigor it deserves, ensuring predictable execution and transparent communication.
            </p>
            
            {/* Timeline Removed */}
            
            {/* Core Values */}
            <ul className="list-disc pl-5 type-body">
              <li>Absolute ownership of the outcome.</li>
              <li>Simplicity over cleverness.</li>
              <li>Respect for the user's time and device.</li>
            </ul>
            
            {/* Current Focus */}
            <p className="type-caption text-text-secondary">
              <strong className="text-white font-medium">Current Focus:</strong> Building high-frequency data applications and exploring edge-compute architectures.
            </p>
          </div>
          <div className="flex gap-4">
            {/* Availability moved to Hero */}
          </div>
        </div>
      </div>
    </section>
  );
}
