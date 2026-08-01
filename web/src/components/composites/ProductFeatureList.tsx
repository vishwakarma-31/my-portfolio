"use client";

import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";

export function ProductFeatureList() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div>
          <h3 className="text-[17px] font-semibold tracking-[-0.374px] mb-2 text-text-primary">Problem</h3>
          <p className="text-[17px] font-light leading-[1.7] tracking-[-0.374px] text-text-secondary max-w-[40ch]">
            Ad hoc interviews introduce bias and inconsistency. The goal was to build a structured, automated candidate screening platform ensuring uniform evaluation.
          </p>
        </div>
        <div>
          <h3 className="text-[17px] font-semibold tracking-[-0.374px] mb-2 text-text-primary">Engineering</h3>
          <p className="text-[17px] font-light leading-[1.7] tracking-[-0.374px] text-text-secondary max-w-[40ch]">
            Implemented a secure JWT access/refresh flow with Redis caching for sessions, and Socket.IO for real-time state sync during webcam and speech-recognition workflows.
          </p>
        </div>
        <div>
          <h3 className="text-[17px] font-semibold tracking-[-0.374px] mb-2 text-text-primary">Architecture</h3>
          <p className="text-[17px] font-light leading-[1.7] tracking-[-0.374px] text-text-secondary max-w-[40ch]">
            Designed an asynchronous pipeline connecting the Node.js backend to the OpenAI API for candidate response analysis, complete with strict GDPR consent handling.
          </p>
        </div>
      </div>

      {/* Minimal Tech Stack & CTAs */}
      <div className="max-w-[1440px] mx-auto mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pb-12">
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-[14px] text-text-secondary bg-background-primary px-3 py-1 rounded-full">React</span>
          <span className="text-[14px] text-text-secondary bg-background-primary px-3 py-1 rounded-full">Node.js</span>
          <span className="text-[14px] text-text-secondary bg-background-primary px-3 py-1 rounded-full">MongoDB</span>
          <span className="text-[14px] text-text-secondary bg-background-primary px-3 py-1 rounded-full">Redis</span>
          <span className="text-[14px] text-text-secondary bg-background-primary px-3 py-1 rounded-full">OpenAI</span>
          <span className="text-[14px] text-text-secondary bg-background-primary px-3 py-1 rounded-full">WebSockets</span>
        </div>

        <div className="flex items-center gap-4">
          <Link href="#" className={buttonVariants({ variant: "default" })}>
            View Live Demo
          </Link>
          <Link href="#" className={buttonVariants({ variant: "link" })}>
            Explore Repository <span className="ml-1">&rarr;</span>
          </Link>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-[1440px] mx-auto mt-24 border-t border-border-subtle pt-12">
        <h3 className="text-[14px] font-semibold tracking-[-0.224px] text-text-secondary uppercase mb-8">Execution Timeline</h3>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative">
          <div className="hidden md:block absolute top-[50%] left-0 w-full h-[1px] bg-border-subtle -z-10" />

          <div className="bg-background-elevated md:pr-4">
            <div className="text-[14px] text-text-primary mb-1 font-semibold">Architecture</div>
            <div className="text-[12px] text-brand-primary">Month 1</div>
          </div>
          <div className="bg-background-elevated md:px-4">
            <div className="text-[14px] text-text-primary mb-1 font-semibold">Core Pipeline</div>
            <div className="text-[12px] text-brand-primary">Month 2</div>
          </div>
          <div className="bg-background-elevated md:px-4">
            <div className="text-[14px] text-text-primary mb-1 font-semibold">Interface & Alpha</div>
            <div className="text-[12px] text-brand-primary">Month 3</div>
          </div>
          <div className="bg-background-elevated md:pl-4">
            <div className="text-[14px] text-text-primary mb-1 font-semibold">Global Rollout</div>
            <div className="text-[12px] text-brand-primary">Month 4</div>
          </div>
        </div>
      </div>
    </>
  );
}
