"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Proof() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".proof-stat",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-background-primary  text-text-primary  px-6 md:px-12 xl:px-24">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="type-caption font-extralight uppercase tracking-[0.08em] text-brand-primary mb-2">
            Proven Scale
          </h2>
          <p className="type-h2 font-normal text-black dark:text-white max-w-[600px] leading-[1.7]">
            Engineering infrastructure that withstands real-world traffic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          
          <div className="proof-stat opacity-0 p-8 rounded-md bg-background-elevated stripe-shadow text-center transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:stripe-shadow border border-transparent ">
            <div className="type-display-l tracking-tight mb-2 text-brand-primary">40+</div>
            <div className="type-body-small text-text-secondary ">Projects Shipped</div>
          </div>

          <div className="proof-stat opacity-0 p-8 rounded-md bg-background-elevated stripe-shadow text-center transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:stripe-shadow border border-transparent ">
            <div className="type-display-l tracking-tight mb-2 text-brand-primary">12</div>
            <div className="type-body-small text-text-secondary ">Enterprise Clients</div>
          </div>

          <div className="proof-stat opacity-0 p-8 rounded-md bg-background-elevated stripe-shadow text-center transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:stripe-shadow border border-transparent ">
            <div className="type-display-l tracking-tight mb-2 text-brand-primary">0</div>
            <div className="type-body-small text-text-secondary ">Missed Deadlines</div>
          </div>

        </div>

        {/* Achievement / Certification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 relative z-10">
          <div className="p-8 rounded-md bg-background-elevated  border border-border-subtle  flex flex-col items-center justify-center text-center">
             <div className="type-tiny text-brand-primary uppercase tracking-[0.08em] mb-1">AWS Certified</div>
             <div className="type-caption text-black dark:text-white">Solutions Architect</div>
          </div>
          <div className="p-8 rounded-md bg-background-elevated  border border-border-subtle  flex flex-col items-center justify-center text-center">
             <div className="type-tiny text-brand-primary uppercase tracking-[0.08em] mb-1">Awarded</div>
             <div className="type-caption text-black dark:text-white">Awwwards SOTD</div>
          </div>
          <div className="p-8 rounded-md bg-background-elevated  border border-border-subtle  flex flex-col items-center justify-center text-center">
             <div className="type-tiny text-brand-primary uppercase tracking-[0.08em] mb-1">Featured</div>
             <div className="type-caption text-black dark:text-white">Next.js Showcase</div>
          </div>
          <div className="p-8 rounded-md bg-background-elevated  border border-border-subtle  flex flex-col items-center justify-center text-center">
             <div className="type-tiny text-brand-primary uppercase tracking-[0.08em] mb-1">Security</div>
             <div className="type-caption text-black dark:text-white">SOC2 Compliant Apps</div>
          </div>
        </div>

        {/* Client Logos Strip */}
        <div className="mt-20 pt-12 border-t border-border-subtle ">
          <p className="text-center type-tiny text-black/40 dark:text-white/40 uppercase tracking-[0.08em] mb-8">
            Trusted by engineering teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 dark:opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Abstract Text-based Logos */}
            <div className="type-h4 tracking-tighter text-black dark:text-white">AcmeCorp</div>
            <div className="type-h4 tracking-wide text-black dark:text-white">VERTEX</div>
            <div className="type-h4 italic text-black dark:text-white">Lumina</div>
            <div className="type-h4 font-mono text-black dark:text-white">&lt;Stack/&gt;</div>
            <div className="type-h4 uppercase tracking-[0.08em] text-black dark:text-white">Nexus</div>
          </div>
        </div>
      </div>
    </section>
  );
}
