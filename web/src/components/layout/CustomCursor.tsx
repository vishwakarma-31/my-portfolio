"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide default cursor globally on html/body to ensure it applies everywhere
    document.documentElement.style.cursor = 'none';

    // Base state: center the origin and scale it down to 1/3rd (16px visual)
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50, scale: 0.3333 });

    // Set up GSAP quickTo for ultra-smooth 60fps tracking
    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.15, ease: "power3" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.15, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const isClickable = (target: HTMLElement | null) => {
      if (!target) return false;
      return !!target.closest('a, button, input, textarea, select, [role="button"], [role="link"], .cursor-pointer, [tabindex]:not([tabindex="-1"])');
    };

    // Make it expand smoothly to native size (scale: 1 = 48px) on clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isClickable(target)) {
        gsap.to(cursorRef.current, { scale: 1, duration: 0.2, ease: "power2.out" });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isClickable(target)) {
        gsap.to(cursorRef.current, { scale: 0.3333, duration: 0.2, ease: "power2.out" });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.documentElement.style.cursor = 'auto';
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      // Start large (48px) and scale down via GSAP to prevent pixelation on zoom
      className="fixed top-0 left-0 w-12 h-12 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{ willChange: 'transform' }}
    />
  );
}
