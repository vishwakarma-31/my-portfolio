"use client";

import React, { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getHomepageData } from "@/lib/content";
import { Card, CardContent } from "@/components/ui/Card";

const { capabilities } = getHomepageData();

export function WhatIBuild() {
  const container = useRef<HTMLElement>(null);

  useScrollReveal(container, ".cap-card", { stagger: 0.12, start: "top 75%" });

  return (
    <section ref={container} className="dark relative z-10 py-32 bg-background-primary text-text-primary px-6 md:px-12 xl:px-24">
      <div className="max-w-[1280px] mx-auto">
        
        <div className="mb-12">
          <h2 className="type-h1 text-white tracking-tight mb-6">
            What I Build
          </h2>
          <p className="type-body-large text-text-secondary max-w-[760px] leading-[1.7]">
            I don't just write code. I build specific products that solve specific business problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap, i) => (
            <Card 
              key={i} 
              variant="interactive"
              className="cap-card opacity-0 bg-background-elevated border-border-subtle hover:bg-background-tertiary hover:border-border-strong flex flex-col"
            >
              <CardContent className="p-8 flex flex-col h-full">
                {/* Minimalist Abstract Icon */}
                <div className="w-8 h-8 rounded-sm bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] mb-6 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-brand-primary" />
                </div>
                
                <h3 className="type-h3 text-white mb-3">
                  {cap.title}
                </h3>
                
                <p className="type-body-small text-text-secondary mb-8 min-h-[66px]">
                  {cap.desc}
                </p>
                
                <div className="mt-auto type-tiny text-brand-primary uppercase tracking-[0.08em]">
                  Outcome: {cap.outcome}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
