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

    gsap.to(".hero-nav", { opacity: 1, y: 0, duration: 1.2, ease: "power3.inOut", delay: 0.1 });
    gsap.to(".hero-role", { opacity: 1, y: 0, duration: 1.2, ease: "power3.inOut", delay: 0.2 });
    gsap.to(".hero-line", { opacity: 0.5, duration: 1.2, ease: "power3.inOut", delay: 1.5 });
  }, { scope: container });

  return (
    <section 
      ref={container}
      className="dark min-h-screen flex flex-col items-center justify-center bg-background-elevated text-text-primary px-6 md:px-12 xl:px-24 py-24"
    >
      <div className="max-w-[1280px] w-full text-center flex flex-col items-center relative z-10">

        {/* Navigation & Availability (Minimal Apple/Linear DNA) */}
        <div className="hero-nav absolute -top-16 left-0 right-0 flex justify-between items-center opacity-0 translate-y-4">
          <div className="text-[17px] font-semibold tracking-[-0.374px]">AV.</div>
          <div className="inline-flex items-center rounded-full px-3 py-1 text-[12px] font-medium leading-[1.5] bg-surface-default text-text-primary">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mr-2" />
            Available for new projects
          </div>
        </div>

        <div className="hero-role text-[14px] font-semibold tracking-[-0.224px] uppercase mb-4 opacity-0 translate-y-4 text-text-secondary">
          Product Architect
        </div>

        <h1
          ref={headlineRef}
          className="type-apple-headline mb-6 flex flex-wrap justify-center gap-x-[0.25em]"
        >
          {["Great", "businesses", "deserve", "great", "software."].map((word, i) => (
            <span key={i} className="overflow-hidden">
              <span className="hero-word block opacity-0 translate-y-8">{word}</span>
            </span>
          ))}
        </h1>

        <p 
          ref={subheadlineRef}
          className="text-[17px] md:text-[24px] font-light leading-[1.5] text-text-secondary max-w-[640px] mx-auto mb-10 opacity-0 translate-y-6"
        >
          I design and build software that turns complex problems into elegant, reliable solutions.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4 opacity-0 translate-y-6">
          <Link 
            href="#work"
            className={buttonVariants({ variant: "default" })}
          >
            View My Work
          </Link>
          <Link 
            href="/contact"
            className={buttonVariants({ variant: "secondary" })}
          >
            Let's Build Together
          </Link>
        </div>

        <div className="hero-line absolute -bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0">
          <div className="w-[1px] h-12 bg-gradient-to-b from-text-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}
