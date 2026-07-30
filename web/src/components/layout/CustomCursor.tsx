"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide default cursor globally on html/body to ensure it applies everywhere
    document.documentElement.style.cursor = 'none';

    // Set up GSAP quickTo for ultra-smooth 60fps tracking
    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.15, ease: "power3" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.15, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    // Make it expand slightly on clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        gsap.to(cursorRef.current, { scale: 3, duration: 0.2, ease: "power2.out" });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        gsap.to(cursorRef.current, { scale: 1, duration: 0.2, ease: "power2.out" });
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
      className="fixed top-0 left-0 w-4 h-4 bg-background-elevated rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
      style={{ willChange: 'transform' }}
    />
  );
}
