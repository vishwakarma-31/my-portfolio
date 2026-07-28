"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  { tech: "React / Next.js", desc: "Creating interfaces people actually enjoy using." },
  { tech: "Node.js", desc: "Building reliable, scalable backend systems." },
  { tech: "Docker", desc: "Ensuring identical deployments across all environments." },
  { tech: "AWS / GCP", desc: "Delivering scalable, fault-tolerant infrastructure." },
  { tech: "PostgreSQL", desc: "Designing robust, relational data architectures." },
  { tech: "TypeScript", desc: "Enforcing type safety and self-documenting codebases." }
];

export function Engineering() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(".tech-item",
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-[#0d0d0d] text-[#f5f5f7] px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="mb-20">
          <h2 className="text-[24px] font-ui font-medium tracking-tight mb-4">
            Engineering
          </h2>
          <p className="text-[15px] font-ui text-[#8a8f98] max-w-[500px] leading-relaxed">
            Technology is never the goal. Technology is simply the mechanism to support the required outcome.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {technologies.map((t, i) => (
            <div key={i} className="tech-item opacity-0 p-6 rounded-[8px] border border-white/[0.08] bg-black/50">
              <div className="font-code text-[13px] text-[#635BFF] mb-3">
                {t.tech}
              </div>
              <div className="font-ui text-[14px] leading-relaxed text-[#a0a0a0]">
                {t.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
