import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  y?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  ease?: string;
}

export function useScrollReveal(
  container: RefObject<HTMLElement | null>,
  selector: string,
  options: ScrollRevealOptions = {}
) {
  useGSAP(() => {
    if (!container.current) return;
    
    gsap.fromTo(selector,
      { opacity: 0, y: options.y ?? 30 },
      {
        opacity: 1,
        y: 0,
        duration: options.duration ?? 0.7,
        stagger: options.stagger ?? 0.08,
        ease: options.ease ?? "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: options.start ?? "top 80%",
        }
      }
    );
  }, { scope: container });
}
