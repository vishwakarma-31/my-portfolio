"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CodeBlock } from "@/components/ui/CodeBlock";

export function ProductDemoWindow() {
  const [activeTab, setActiveTab] = useState<"interface" | "architecture">("interface");

  return (
    <div className="w-full h-auto rounded-[18px] bg-background-primary border border-border-subtle overflow-hidden flex flex-col transition-all duration-[250ms] ease-out hover:-translate-y-1 stripe-shadow">
      <div className="px-6 py-4 flex items-center justify-between bg-surface-default border-b border-border-subtle">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[12px] text-text-secondary">ai.interview.dashboard</span>
        </div>

        <div 
          role="tablist" 
          aria-label="Product views"
          className="flex bg-border-subtle p-1 rounded-sm gap-2"
        >
          <Button
            role="tab"
            aria-selected={activeTab === 'interface'}
            aria-controls="tabpanel-interface"
            id="tab-interface"
            size="sm"
            variant={activeTab === 'interface' ? 'secondary' : 'ghost'}
            onClick={() => setActiveTab("interface")}
          >
            Live View
          </Button>
          <Button
            role="tab"
            aria-selected={activeTab === 'architecture'}
            aria-controls="tabpanel-architecture"
            id="tab-architecture"
            size="sm"
            variant={activeTab === 'architecture' ? 'secondary' : 'ghost'}
            onClick={() => setActiveTab("architecture")}
          >
            Architecture
          </Button>
        </div>
      </div>

      {/* Window Content */}
      <div 
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        tabIndex={0}
        className="p-8 md:p-12 min-h-[380px] flex flex-col justify-center bg-background-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-b-[18px]"
      >
        {activeTab === "interface" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-subtle p-6 rounded-md border border-border-subtle flex flex-col justify-between">
              <div>
                <div className="type-tiny text-accent-primary mb-2 tracking-wide uppercase">Real-Time Audio</div>
                <div className="type-h4 text-text-primary tracking-tight">Active Stream</div>
              </div>
              <div className="mt-6 type-tiny text-text-secondary">WebRTC Latency: 42ms</div>
            </div>
            <div className="bg-[rgba(255,255,255,0.02)] p-6 rounded-md border border-border-subtle flex flex-col justify-between">
              <div>
                <div className="type-tiny text-brand-primary mb-2 tracking-wide uppercase">NLP Engine</div>
                <div className="type-h4 text-text-primary tracking-tight">Processing</div>
              </div>
              <div className="mt-6 type-tiny text-text-secondary">Context Window: 8k tokens</div>
            </div>
            <div className="bg-[rgba(255,255,255,0.02)] p-6 rounded-md border border-border-subtle flex flex-col justify-between">
              <div>
                <div className="type-tiny text-amber-400 mb-2 tracking-wide uppercase">Bias Detection</div>
                <div className="type-h4 text-text-primary tracking-tight">0.92 Confidence</div>
              </div>
              <div className="mt-6 type-tiny text-text-secondary">Fairness constraints met</div>
            </div>
          </div>
        ) : (
          <CodeBlock
            code={`const interviewPipeline = createWebRTCStream({
  audioSource: "BrowserMicrophone",
  processingEngine: "PythonFastAPI",
  model: "Whisper-v3",
  analyzer: "LangChainAgents"
});`}
          />
        )}
      </div>
    </div>
  );
}
