"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/Badge";
import { CodeBlock } from "@/components/ui/CodeBlock";

gsap.registerPlugin(ScrollTrigger);

export function FeaturedProducts() {
  const container = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<"interface" | "architecture">("interface");

  useGSAP(() => {
    const projects = gsap.utils.toArray('.product-section');
    projects.forEach((proj) => {
      const el = proj as HTMLElement;
      gsap.fromTo(el, 
        { opacity: 0, y: 30 },
        {
          opacity: 1, 
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: container });

  return (
    <section id="work" ref={container} className="py-32 bg-background-primary  text-text-primary  px-6 md:px-12 xl:px-24">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Project 1 */}
        <div className="product-section opacity-0 mb-[10vh]">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
            
            {/* Content Left (Order 2 on Mobile, 1 on Desktop) */}
            <div className="order-2 lg:order-1">
              <div className="mb-12">
                <Badge variant="primary" className="mb-4">Flagship Project</Badge>
                <h2 className="type-display-l tracking-[-0.03em] mb-4">
                  Nova
                </h2>
                <p className="type-body-large text-text-secondary  max-w-[70ch]">
                  Incident resolution interface for high-scale engineering teams.
                </p>
              </div>
            </div>

            {/* Visual Right (Order 1 on Mobile, 2 on Desktop) */}
            <div className="order-1 lg:order-2 w-full">
              {/* Crafted Interactive Showcase Frame */}
              <div className="bg-background-secondary rounded-md overflow-hidden border border-border-subtle transition-all duration-[250ms] hover:scale-[1.01] hover:stripe-shadow">
                {/* Window Chrome Header */}
                <div className="px-6 py-4 border-b border-border-subtle flex items-center justify-between bg-background-secondary">
                  <div className="flex items-center gap-2">
                    <span className="font-code text-[12px] text-text-secondary">nova.internal.dashboard</span>
                  </div>
                  
                  <div className="flex bg-[rgba(255,255,255,0.05)] p-1 rounded-sm gap-4">
                <button 
                  onClick={() => setActiveTab("interface")}
                  className={`px-3 py-1.5 type-caption transition-all duration-150 rounded-[3px] ${activeTab === 'interface' ? 'bg-background-elevated text-black font-semibold' : 'text-text-secondary hover:text-white font-normal'}`}
                >
                  Live View
                </button>
                <button 
                  onClick={() => setActiveTab("architecture")}
                  className={`px-3 py-1.5 type-caption transition-all duration-150 rounded-[3px] ${activeTab === 'architecture' ? 'bg-background-elevated text-black font-semibold' : 'text-text-secondary hover:text-white font-normal'}`}
                >
                  Architecture
                </button>
              </div>
            </div>

            {/* Window Content */}
            <div className="p-8 md:p-12 min-h-[380px] flex flex-col justify-center bg-radial from-background-tertiary to-background-primary">
              {activeTab === "interface" ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[rgba(255,255,255,0.02)] p-6 rounded-md border border-border-subtle flex flex-col justify-between">
                    <div>
                      <div className="type-tiny text-accent-primary mb-2 tracking-wide uppercase">System Status</div>
                      <div className="type-h4 text-text-inverse tracking-tight">100% Operational</div>
                    </div>
                    <div className="mt-6 type-tiny text-text-secondary">Latency: 14ms</div>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.02)] p-6 rounded-md border border-border-subtle flex flex-col justify-between">
                    <div>
                      <div className="type-tiny text-brand-primary mb-2 tracking-wide uppercase">MTTR Impact</div>
                      <div className="type-h4 text-text-inverse tracking-tight">45% Reduction</div>
                    </div>
                    <div className="mt-6 type-tiny text-text-secondary">Avg: 8.2 mins</div>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.02)] p-6 rounded-md border border-border-subtle flex flex-col justify-between">
                    <div>
                      <div className="type-tiny text-amber-400 mb-2 tracking-wide uppercase">Active Traces</div>
                      <div className="type-h4 text-text-inverse tracking-tight">12.4k req/sec</div>
                    </div>
                    <div className="mt-6 type-tiny text-text-secondary">Zero packet loss</div>
                  </div>
                </div>
              ) : (
                <CodeBlock 
                  code={`const incidentPipeline = createEventStream({
  ingestion: "KafkaCluster",
  realtimeProcessor: "GoRoutinePool",
  storage: "ClickHouseTimeSeries",
  frontendSync: "WebSocketSubscribers"
});`}
                />
              )}
            </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="type-tiny text-brand-primary uppercase tracking-[0.08em] mb-4">Product</h3>
              <p className="type-body text-black/70 dark:text-white/70 max-w-[40ch]">
                Teams lost time jumping between tools during outages. Designed a single unified real-time dashboard prioritizing critical telemetry.
              </p>
            </div>
            <div>
              <h3 className="type-tiny text-brand-primary uppercase tracking-[0.08em] mb-4">Engineering</h3>
              <p className="type-body text-black/70 dark:text-white/70 max-w-[40ch]">
                Aggregated metrics instantly using a highly available Go pool and ClickHouse time-series datastore to guarantee sub-20ms latency.
              </p>
            </div>
            <div>
              <h3 className="type-tiny text-brand-primary uppercase tracking-[0.08em] mb-4">Business</h3>
              <p className="type-body text-black/70 dark:text-white/70 max-w-[40ch]">
                Reduced MTTR by 45% and adopted by over 50 enterprise engineering teams in 90 days, saving millions in downtime.
              </p>
            </div>
          </div>
          
          {/* Minimal Tech Stack & CTAs */}
          <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div className="flex flex-wrap items-center gap-4">
              <Badge variant="default">React</Badge>
              <Badge variant="default">Go</Badge>
              <Badge variant="default">ClickHouse</Badge>
              <Badge variant="default">WebSockets</Badge>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#" className="type-caption font-medium text-black hover:text-accent-primary dark:text-white dark:hover:text-accent-primary transition-colors flex items-center gap-2">
                View Live Demo <span className="opacity-50">&nearr;</span>
              </a>
              <div className="w-[1px] h-4 bg-border-strong" />
              <a href="#" className="type-caption text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white transition-colors flex items-center gap-2">
                Explore Repository <span className="opacity-50">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-24 border-t border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.05)] pt-12">
            <h3 className="type-caption text-text-muted uppercase tracking-[0.08em] mb-8">Execution Timeline</h3>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative">
              <div className="hidden md:block absolute top-[50%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#635BFF]/30 to-transparent -z-10" />
              
              <div className="bg-background-primary  md:pr-4">
                <div className="type-caption text-black dark:text-white mb-1 font-semibold">Architecture</div>
                <div className="type-tiny text-brand-primary">Month 1</div>
              </div>
              <div className="bg-background-primary  md:px-4">
                <div className="type-caption text-black dark:text-white mb-1 font-semibold">Core Pipeline</div>
                <div className="type-tiny text-brand-primary">Month 2</div>
              </div>
              <div className="bg-background-primary  md:px-4">
                <div className="type-caption text-black dark:text-white mb-1 font-semibold">Interface & Alpha</div>
                <div className="type-tiny text-brand-primary">Month 3</div>
              </div>
              <div className="bg-background-primary  md:pl-4">
                <div className="type-caption text-black dark:text-white mb-1 font-semibold">Global Rollout</div>
                <div className="type-tiny text-brand-primary">Month 4</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
