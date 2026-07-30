"use client";

import React, { useRef } from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";

const technologies = [
  { tech: "React / Next.js", desc: "Enabled sub-second page loads and instantaneous interactive states, ensuring visitors never wait." },
  { tech: "Node.js", desc: "Handled 10,000+ concurrent connections without dropping requests, keeping systems online during traffic spikes." },
  { tech: "Docker", desc: "Eliminated deployment drift, allowing new features to ship 3x faster with zero environment issues." },
  { tech: "AWS / GCP", desc: "Architected infrastructure that scales automatically to demand, reducing cloud costs during off-peak hours." },
  { tech: "PostgreSQL", desc: "Structured relational data to guarantee ACID compliance and prevent data loss during network failures." },
  { tech: "TypeScript", desc: "Caught 95% of potential runtime bugs during compilation, resulting in virtually zero production hotfixes." }
];

export function Engineering() {
  const container = useRef<HTMLElement>(null);
  const graphHeights = [30, 45, 25, 60, 80, 50, 95, 75, 40, 85];

  return (
    <section ref={container} className="dark relative z-10 py-32 bg-background-primary text-text-primary px-6 md:px-12 xl:px-24 border-t border-border-subtle">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12">
          <h2 className="type-h1 tracking-tight mb-6">
            Engineering Precision
          </h2>
          <p className="type-body-large text-text-secondary max-w-[760px] leading-[1.7]">
            Beautiful interfaces are just the surface. What lies beneath determines if a product lives or dies in production. I build resilient, typed, and predictable architectures.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* React / Next.js */}
          <div className="tech-item rounded-md border border-border-subtle bg-background-primary overflow-hidden">
            <div className="h-[140px] bg-background-primary border-b border-border-subtle relative flex items-center justify-center overflow-hidden">
              {/* Fake UI component */}
              <div className="w-[180px] h-15 bg-background-tertiary rounded-md border border-border-strong flex items-center p-3 gap-3 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
                <div className="w-8 h-8 rounded-full bg-background-elevated/10" />
                <div className="flex flex-col gap-1.5 flex-1">
                  <div className="h-2 w-full bg-[#333] rounded-full" />
                  <div className="h-2 w-2/3 bg-[#333] rounded-full" />
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="type-body font-medium text-white mb-2">React / Next.js</div>
              <div className="type-caption text-text-secondary">
                Server Components, Suspense, and edge rendering for zero-latency interactions.
              </div>
            </div>
          </div>

          {/* Node.js */}
          <div className="tech-item rounded-md border border-border-subtle bg-background-primary overflow-hidden">
            <div className="h-[140px] bg-background-primary border-b border-border-subtle relative flex items-center justify-center overflow-hidden">
              {/* Traffic Graph */}
              <div className="flex items-end gap-1 h-15">
                {graphHeights.map((h, i) => (
                  <div key={i} className="w-3 bg-[#333] rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="p-8">
              <div className="type-body font-medium text-white mb-2">Node.js & Go</div>
              <div className="type-caption text-text-secondary">
                Microservices and monolithic architectures engineered for high concurrency and low memory footprints.
              </div>
            </div>
          </div>

          {/* PostgreSQL */}
          <div className="tech-item rounded-md border border-border-subtle bg-background-primary overflow-hidden">
            <div className="h-[140px] bg-background-primary border-b border-border-subtle relative flex items-center justify-center overflow-hidden">
              {/* DB Schema visual */}
              <div className="flex gap-4">
                <div className="w-[70px] h-[70px] rounded-md border border-white/20 bg-surface-hover flex items-center justify-center">
                  <div className="text-[10px] font-code text-white">Users</div>
                </div>
                <div className="flex flex-col justify-center gap-1">
                  <div className="w-6 h-[1px] bg-[#333]" />
                  <div className="w-6 h-[1px] bg-[#333]" />
                </div>
                <div className="w-[70px] h-[70px] rounded-md border border-border-strong bg-background-tertiary flex items-center justify-center">
                  <div className="text-[10px] font-code text-text-secondary">Orders</div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="type-body font-medium text-white mb-2">PostgreSQL</div>
              <div className="type-caption text-text-secondary">
                Strict relational data modeling, query optimization, and connection pooling for scale.
              </div>
            </div>
          </div>

          {/* TypeScript */}
          <div className="tech-item rounded-md border border-border-subtle bg-background-primary overflow-hidden">
            <div className="h-[140px] bg-background-primary border-b border-border-subtle relative flex items-center justify-center overflow-hidden p-6">
              {/* Code visual - Static */}
              <CodeBlock 
                className="w-full shadow-none border-none !p-0"
                code={`type Result<T> = 
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };`}
              />
            </div>
            <div className="p-8">
              <div className="type-body font-medium text-white mb-2">TypeScript</div>
              <div className="type-caption text-text-secondary">
                End-to-end type safety eliminating runtime errors before code is ever merged.
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
