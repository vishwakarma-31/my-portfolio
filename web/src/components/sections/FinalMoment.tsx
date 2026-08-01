"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

export function FinalMoment() {
  const container = useRef<HTMLElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    gsap.fromTo(".final-content",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: container });

  const playClickSound = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      // Muted, deep pop sound
      osc.type = 'sine';
      osc.frequency.setValueAtTime(150, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.1);
      
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
      // Silently fail if audio context is restricted
    }
  };

  const handlePointerDown = () => {
    playClickSound();
  };

  return (
    <section ref={container} className="dark py-48 flex items-center justify-center bg-[#111111] text-[#ffffff] px-6 md:px-12 xl:px-24">
      <div className="final-content opacity-0 max-w-[760px] text-center flex flex-col items-center">
        <h2 className="type-nike-manifesto mb-12">
          Ready to build?
        </h2>
        
        <p className="text-[16px] font-medium leading-[1.5] text-[#9e9ea0] mb-10 max-w-[600px]">
          Let's discuss your architecture, constraints, and how we can build something exceptional together.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link 
            href="mailto:hello@example.com"
            onPointerDown={handlePointerDown}
            className="inline-flex items-center justify-center bg-[#ffffff] text-[#111111] text-[24px] font-medium rounded-full px-[32px] h-[48px] transition-transform duration-150 active:scale-50 active:opacity-50"
          >
            Start a Project
          </Link>
          
          <Link href="https://github.com/vishwakarma-31" className="inline-flex items-center justify-center bg-[#39393b] text-[#ffffff] text-[16px] font-medium rounded-full px-[32px] h-[48px] transition-transform duration-150 active:scale-50 active:opacity-50">
            View GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
