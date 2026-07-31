"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/Card";
import { Button, buttonVariants } from "@/components/ui/Button";
import { getHomepageData } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

const { industries } = getHomepageData();

export function Industries() {
  const container = useRef<HTMLElement>(null);
  const scrollTrack = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Horizontal scroll effect for industry cards
    const totalWidth = scrollTrack.current?.scrollWidth || 0;
    const viewportWidth = window.innerWidth;

    if (totalWidth > viewportWidth) {
      gsap.to(scrollTrack.current, {
        x: () => -(totalWidth - viewportWidth + 48), // 48px for padding
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=1500",
          scrub: 0.5,
          pin: true,
        }
      });
    }

    gsap.fromTo(".ind-card",
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
    <section ref={container} className="dark relative z-10 min-h-[100vh] py-32 bg-background-secondary text-text-primary overflow-hidden border-t border-border-subtle flex flex-col justify-center">

      <div className="px-6 md:px-12 xl:px-24 mb-12 max-w-[1280px] mx-auto w-full">
        <h2 className="type-h2 font-extralight text-text-primary tracking-[-0.01em] mb-6">
          Domain Agnostic
        </h2>
        <p className="type-body leading-relaxed max-w-[760px] text-text-secondary">
          The underlying problem-solving approach transfers perfectly across domains.
          I have built core infrastructure for heavily regulated and highly complex industries.
        </p>
      </div>

      <div className="w-full overflow-visible pl-6 md:pl-12 xl:pl-24">
        <div ref={scrollTrack} className="flex gap-8 w-max pb-12 pr-6 md:pr-12 xl:pr-24">
          {industries.map((ind, i) => (
            <Card
              key={i}
              variant="interactive"
              className="ind-card opacity-0 w-[300px] bg-surface-default border-border-subtle hover:bg-surface-hover flex flex-col shrink-0"
            >
              <CardContent className="p-8 flex flex-col h-full">
                {/* Abstract Visual Placeholder */}
                <div className="w-full h-[120px] mb-8 bg-background-elevated rounded-sm relative overflow-hidden flex items-center justify-center shrink-0">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-text-inverse to-transparent blur-[10px]" />
                  <span className="type-tiny text-text-muted uppercase tracking-[0.08em] z-10">{ind.name}</span>
                </div>

                <h3 className="type-body-large text-text-primary font-medium mb-6">
                  {ind.name}
                </h3>

                <div className="mb-4">
                  <div className="type-tiny text-text-secondary uppercase tracking-[0.08em] mb-1">Problem</div>
                  <div className="type-caption text-text-muted leading-[1.5]">{ind.prob}</div>
                </div>

                <div className="mt-auto">
                  <div className="type-tiny text-brand-primary uppercase tracking-[0.08em] mb-1">Solution</div>
                  <div className="type-caption text-text-primary leading-[1.5]">{ind.sol}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </section>
  );
}
