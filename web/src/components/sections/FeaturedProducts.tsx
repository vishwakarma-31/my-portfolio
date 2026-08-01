"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProductDemoWindow } from "@/components/composites/ProductDemoWindow";
import { ProductFeatureList } from "@/components/composites/ProductFeatureList";

gsap.registerPlugin(ScrollTrigger);

export function FeaturedProducts() {
  const container = useRef<HTMLElement>(null);

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
    <section id="work" ref={container} className="bg-background-primary text-text-primary">
      <div className="w-full">

        {/* Project 1 - Apple Tile */}
        <div className="product-section opacity-0 w-full py-[80px] px-6 md:px-12 xl:px-24 bg-background-elevated text-text-primary">

          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

            {/* Content Left */}
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <div className="mb-12">
                <div className="text-brand-primary text-[14px] font-semibold tracking-[-0.224px] uppercase mb-4">Flagship Project</div>
                <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[0px] mb-4">
                  AI Interview System
                </h2>
                <p className="text-[28px] font-normal leading-[1.14] tracking-[0.196px] max-w-[70ch]">
                  Automated candidate screening with real-time speech analysis and bias detection.
                </p>
              </div>
            </div>

            {/* Visual Right */}
            <div className="order-1 lg:order-2 w-full">
              <ProductDemoWindow />
            </div>
          </div>

          <ProductFeatureList />
        </div>

      </div>
    </section>
  );
}
