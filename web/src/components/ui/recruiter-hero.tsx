"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, Code2, Users, Target, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

const skills = [
  { icon: Code2, label: "Frontend Mastery", desc: "React, Next.js, Three.js" },
  { icon: Users, label: "Team Collaboration", desc: "Agile, Code Reviews" },
  { icon: Target, label: "Performance", desc: "Core Web Vitals 99+" },
  { icon: Rocket, label: "Delivery", desc: "On-time, within scope" },
];

export default function RecruiterHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".recruiter-fade", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
      
      gsap.from(".skill-card", {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.5,
        ease: "back.out(1.2)",
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-[#050505] flex items-center justify-center overflow-hidden py-24">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/20 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <div className="recruiter-fade inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-white/70 uppercase">Hire Top Talent</span>
          </div>
          
          <h1 className="recruiter-fade text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
              Excellence.
            </span>
          </h1>
          
          <p className="recruiter-fade text-lg text-white/50 max-w-xl font-light">
            A proven track record of architecting scalable applications, driving technical strategy, and delivering business value through code.
          </p>

          <div className="recruiter-fade pt-4">
            <Button className="h-14 px-8 text-base font-medium rounded-full bg-white text-black hover:bg-white/90">
              View Resume <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="flex-1 w-full" ref={cardsRef}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, i) => (
              <div 
                key={i} 
                className="skill-card p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{skill.label}</h3>
                <p className="text-sm text-white/50">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
