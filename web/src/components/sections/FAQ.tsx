"use client";

import React, { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getHomepageData } from "@/lib/content";
import { Accordion } from "@/components/ui/Accordion";

const { faqs } = getHomepageData();

export function FAQ() {
  const container = useRef<HTMLElement>(null);

  useScrollReveal(container, ".faq-item", { stagger: 0.08, start: "top 80%" });

  return (
    <section ref={container} className="dark py-32 bg-[#000000] text-text-primary px-6 md:px-12 xl:px-24 border-t border-[#0d0d0d]">
      <div className="max-w-[760px] mx-auto">
        <h2 className="type-h4 tracking-tight mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="faq-item opacity-0">
          <Accordion 
            items={faqs.map((faq, i) => ({
              id: `faq-${i}`,
              title: faq.q,
              content: faq.a
            }))}
          />
        </div>
      </div>
    </section>
  );
}
