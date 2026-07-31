"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function ShopifyPitch() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      }
    });

    tl.fromTo(".shopify-reveal",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power2.out" }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-[#1a2e1a] text-[#f4f0eb] px-6 md:px-12 xl:px-24">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="shopify-reveal type-display-m font-bold tracking-tight mb-6 leading-[1.1]">
            Turn your complex requirements into a scalable reality.
          </h2>
          <p className="shopify-reveal type-body-large text-[#f4f0eb]/80 mb-8 max-w-[500px]">
            Whether you need a full-stack e-commerce engine or a highly concurrent internal tool, I bring enterprise-grade architecture to freelance agility. Let's scope your next big move.
          </p>

          <div className="shopify-reveal flex flex-col sm:flex-row items-center gap-4">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center bg-[#96FF00] text-[#1a2e1a] text-[18px] font-bold rounded-md px-[32px] h-[56px] shopify-hover active:scale-95 w-full sm:w-auto"
            >
              Hire Me For Your Project
            </Link>
          </div>
        </div>

        <div className="shopify-reveal bg-[#102010] rounded-xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#96FF00] opacity-5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <h3 className="type-h4 font-medium mb-6">Freelance Availability</h3>
          
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#96FF00]" />
              <span className="type-body text-[#f4f0eb]/90">Available for 10-20 hr/wk retainers</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#96FF00]" />
              <span className="type-body text-[#f4f0eb]/90">Architecture audits & rescue projects</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#96FF00]" />
              <span className="type-body text-[#f4f0eb]/90">Custom full-stack web applications</span>
            </li>
          </ul>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
            <span className="type-caption text-[#f4f0eb]/60">Currently accepting new clients</span>
            <span className="type-caption font-mono text-[#96FF00]">Booking Q3</span>
          </div>
        </div>
      </div>
    </section>
  );
}
