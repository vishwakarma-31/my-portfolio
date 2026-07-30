"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { badgeVariants } from "@/components/ui/Badge";

export function HeroProduct() {
  const container = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(".hero-word",
      { opacity: 0, y: 32 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.1, ease: "power3.inOut", delay: 0.2 }
    )
    .to(subheadlineRef.current,
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.inOut" },
    "-=0.6"
    )
    .to(ctaRef.current,
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.inOut" },
    "-=0.8"
    );
  }, { scope: container });

  return (
    <section 
      ref={container}
      className="min-h-screen flex flex-col items-center justify-center bg-background-primary  text-text-primary  px-6 md:px-12 xl:px-24 py-24"
    >
      <div className="max-w-[1280px] w-full text-center flex flex-col items-center relative z-10">
        
        {/* Navigation & Availability (Minimal Apple/Linear DNA) */}
        <div className="absolute -top-16 left-0 right-0 flex justify-between items-center opacity-0 translate-y-4" ref={(el) => { if (el) { gsap.to(el, { opacity: 1, y: 0, duration: 1.2, ease: "power3.inOut", delay: 0.1 }) } }}>
          <div className="type-h4 tracking-tight font-display">AV.</div>
          <div className={badgeVariants({ variant: "default" })}>
            <div className="w-1.5 h-1.5 rounded-lg bg-accent-primary shadow-[0_0_8px_#96FF00] mr-2" />
            Available for new projects
          </div>
        </div>
        
        <div className="type-caption text-brand-primary uppercase tracking-[0.08em] mb-4 opacity-0 translate-y-4" ref={(el) => { if (el) { gsap.to(el, { opacity: 1, y: 0, duration: 1.2, ease: "power3.inOut", delay: 0.2 }) } }}>
          Product Architect
        </div>
        
        <h1 
          ref={headlineRef}
          className="type-display-xl tracking-[-0.04em] mb-6 flex flex-wrap justify-center gap-x-[0.25em]"
        >
          {["Great", "businesses", "deserve", "great", "software."].map((word, i) => (
            <span key={i} className="overflow-hidden">
              <span className="hero-word block opacity-0 translate-y-8">{word}</span>
            </span>
          ))}
        </h1>
        
        <p 
          ref={subheadlineRef}
          className="type-body-large text-text-secondary  max-w-[640px] mx-auto mb-10 opacity-0 translate-y-6"
        >
          I design and build software that turns complex problems into elegant, reliable solutions.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4 opacity-0 translate-y-6">
          <Link 
            href="#work"
            className={buttonVariants({ variant: "cta", size: "default" })}
          >
            View My Work
          </Link>
          <Link 
            href="/contact"
            className={buttonVariants({ variant: "ghost", size: "default" })}
          >
            Let's Build Together
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0" ref={(el) => { if (el) { gsap.to(el, { opacity: 0.5, duration: 1.2, ease: "power3.inOut", delay: 1.5 }); } }}>
          <div className="w-[1px] h-12 bg-gradient-to-b from-text-primary dark:from-text-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}
