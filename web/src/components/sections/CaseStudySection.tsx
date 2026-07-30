import React from "react";
import { cn } from "@/lib/utils";

interface CaseStudySectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  isTechnical?: boolean; // If true, renders slightly differently (Vercel style)
}

export function CaseStudySection({ title, children, className, isTechnical = false }: CaseStudySectionProps) {
  return (
    <div className={cn("flex flex-col gap-6 w-full max-w-[800px] mx-auto", className)}>
      <h2 className={cn(
      "text-[32px] font-medium tracking-tight",
        isTechnical ? "font-code text-text-primary" : "font-marketing text-white"
      )}>
        {title}
      </h2>
      <div className="text-white/70 font-ui font-light text-[16px] leading-[1.8] space-y-6">
        {children}
      </div>
    </div>
  );
}
