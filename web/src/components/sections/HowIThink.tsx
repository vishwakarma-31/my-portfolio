import React from "react";

const thoughts = [
  {
    title: "Start with the problem, not the tool",
    description: "Technology is a means to an end. I focus on understanding the core business or user problem before selecting the appropriate stack or architectural pattern.",
  },
  {
    title: "Systems over symptoms",
    description: "Instead of patching isolated issues, I look for systemic patterns. Building robust, reusable systems prevents technical debt and accelerates future development.",
  },
  {
    title: "Design is how it works",
    description: "Aesthetics and functionality are not separate domains. A truly great digital product requires engineering that respects design intent, and design that understands engineering constraints.",
  },
  {
    title: "Simplicity is hard work",
    description: "Complex code is easy to write; simple code is difficult. I strive for minimalism in architecture, eliminating unnecessary layers to ensure long-term maintainability.",
  },
];

export function HowIThink() {
  return (
    <section className="w-full bg-background text-foreground py-40 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
        <div className="lg:col-span-5">
          <div className="sticky top-32">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-8 leading-tight">
              How I Think
            </h2>
            <p className="text-xl md:text-2xl text-foreground/50 font-light leading-relaxed max-w-md">
              My philosophy on engineering, design, and building products that stand the test of time.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-16 lg:gap-24">
          {thoughts.map((thought, index) => (
            <div key={index} className="flex flex-col gap-6 group">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-accent transition-colors">
                {thought.title}
              </h3>
              <p className="text-lg md:text-xl text-foreground/60 leading-relaxed font-light max-w-2xl">
                {thought.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
