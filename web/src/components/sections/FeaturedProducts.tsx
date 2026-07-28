"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function FeaturedProducts() {
  const container = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<"interface" | "architecture">("interface");

  useGSAP(() => {
    const projects = gsap.utils.toArray('.product-section');
    projects.forEach((proj: any) => {
      gsap.fromTo(proj, 
        { opacity: 0, y: 40 },
        {
          opacity: 1, 
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: proj,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: container });

  return (
    <section id="work" ref={container} className="py-32 bg-[#f5f5f7] dark:bg-[#000000] text-[#1d1d1f] dark:text-[#f5f5f7]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Project 1 */}
        <div className="product-section opacity-0 mb-[10vh]">
          <div className="text-center mb-16">
            <h2 className="text-[clamp(40px,5vw,72px)] font-marketing font-light tracking-[-0.03em] mb-4">
              Nova
            </h2>
            <p className="text-[clamp(18px,2vw,24px)] font-marketing font-light text-black/55 dark:text-white/55">
              Incident resolution interface for high-scale engineering teams.
            </p>
          </div>

          {/* Crafted Interactive Showcase Frame */}
          <div className="bg-[#09090b] rounded-2xl stripe-shadow overflow-hidden border border-white/10 mb-24 transition-all duration-300">
            {/* Window Chrome Header */}
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/40">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-4 font-code text-[12px] text-white/40">nova.internal.dashboard</span>
              </div>
              
              <div className="flex bg-white/5 p-1 rounded-md">
                <button 
                  onClick={() => setActiveTab("interface")}
                  className={`px-3 py-1 text-[12px] font-ui rounded ${activeTab === 'interface' ? 'bg-[#635BFF] text-white' : 'text-white/60 hover:text-white'}`}
                >
                  Live View
                </button>
                <button 
                  onClick={() => setActiveTab("architecture")}
                  className={`px-3 py-1 text-[12px] font-ui rounded ${activeTab === 'architecture' ? 'bg-[#635BFF] text-white' : 'text-white/60 hover:text-white'}`}
                >
                  Architecture
                </button>
              </div>
            </div>

            {/* Window Content */}
            <div className="p-8 md:p-12 min-h-[380px] flex flex-col justify-center bg-radial from-[#18181b] to-[#09090b]">
              {activeTab === "interface" ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/5 p-5 rounded-lg border border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-code text-[#96FF00] mb-2">SYSTEM STATUS</div>
                      <div className="text-xl font-marketing text-white font-medium">100% Operational</div>
                    </div>
                    <div className="mt-4 text-[12px] font-code text-white/40">Latency: 14ms</div>
                  </div>
                  <div className="bg-white/5 p-5 rounded-lg border border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-code text-[#635BFF] mb-2">MTTR IMPACT</div>
                      <div className="text-xl font-marketing text-white font-medium">45% Reduction</div>
                    </div>
                    <div className="mt-4 text-[12px] font-code text-white/40">Avg: 8.2 mins</div>
                  </div>
                  <div className="bg-white/5 p-5 rounded-lg border border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-code text-amber-400 mb-2">ACTIVE TRACES</div>
                      <div className="text-xl font-marketing text-white font-medium">12.4k req/sec</div>
                    </div>
                    <div className="mt-4 text-[12px] font-code text-white/40">Zero packet loss</div>
                  </div>
                </div>
              ) : (
                <div className="font-code text-[13px] text-[#a0a0a0] leading-relaxed bg-black/60 p-6 rounded-lg border border-white/5">
                  <span className="text-[#635BFF]">const</span> incidentPipeline = <span className="text-[#96FF00]">createEventStream</span>({`{\n`}
                  &nbsp;&nbsp;ingestion: <span className="text-amber-300">&quot;KafkaCluster&quot;</span>,{`\n`}
                  &nbsp;&nbsp;realtimeProcessor: <span className="text-amber-300">&quot;GoRoutinePool&quot;</span>,{`\n`}
                  &nbsp;&nbsp;storage: <span className="text-amber-300">&quot;ClickHouseTimeSeries&quot;</span>,{`\n`}
                  &nbsp;&nbsp;frontendSync: <span className="text-amber-300">&quot;WebSocketSubscribers&quot;</span>{`\n`}
                  {`}`});
                </div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1000px] mx-auto">
            <div>
              <h3 className="text-xs font-ui font-semibold text-[#635BFF] uppercase tracking-widest mb-4">The Problem</h3>
              <p className="font-marketing font-light text-[17px] leading-relaxed text-black/70 dark:text-white/70">
                Teams lost time jumping between logging services, alerting tools, and runbooks during outages.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-ui font-semibold text-[#635BFF] uppercase tracking-widest mb-4">The Decision</h3>
              <p className="font-marketing font-light text-[17px] leading-relaxed text-black/70 dark:text-white/70">
                A single unified real-time dashboard aggregating telemetry and incident runbooks instantly.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-ui font-semibold text-[#635BFF] uppercase tracking-widest mb-4">The Impact</h3>
              <p className="font-marketing font-light text-[17px] leading-relaxed text-black/70 dark:text-white/70">
                Reduced MTTR by 45%. Adopted by over 50 enterprise engineering teams in 90 days.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
