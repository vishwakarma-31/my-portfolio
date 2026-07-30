"use client";

import React, { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getHomepageData } from "@/lib/content";
import { Card, CardContent } from "@/components/ui/Card";
import { Quote } from "lucide-react";

const { testimonials } = getHomepageData();

export function Testimonials() {
  const container = useRef<HTMLElement>(null);

  useScrollReveal(container, ".testimonial-card", { stagger: 0.12, start: "top 75%" });

  return (
    <section ref={container} className="py-32 bg-background-primary  text-text-primary  px-6 md:px-12 xl:px-24">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, i) => (
            <Card 
              key={i} 
              variant="interactive"
              className="testimonial-card opacity-0 flex flex-col h-full"
            >
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  {/* Company Logo Placeholder */}
                  <div className="type-caption uppercase tracking-[0.08em] font-semibold text-black/40 dark:text-white/40">
                    {test.company}
                  </div>
                  <div className="text-brand-primary text-4xl font-serif leading-none opacity-50">&ldquo;</div>
                </div>
                
                <p className="type-body-large font-light text-text-primary leading-[1.7] mb-8 flex-grow">
                  {test.quote}
                </p>
                
                <div className="pt-6 border-t border-border-subtle  mb-6">
                  <div className="type-tiny uppercase tracking-[0.08em] text-brand-primary mb-1">Outcome</div>
                  <div className="type-caption text-text-secondary ">
                    {test.outcome}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  {/* Client Photo Placeholder */}
                  <div className="w-10 h-10 rounded-full bg-black/10 /10 flex items-center justify-center type-caption font-semibold text-black/50 ">
                    {test.author.charAt(0)}
                  </div>
                  <div>
                    <div className="type-body font-normal text-text-primary">
                      {test.author}
                    </div>
                    <div className="type-caption text-black/50 ">
                      {test.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
