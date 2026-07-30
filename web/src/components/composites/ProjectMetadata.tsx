import React from "react";
import { Project } from "@/schemas/projects";

interface ProjectMetadataProps {
  metadata: Project["metadata"];
}

export function ProjectMetadata({ metadata }: ProjectMetadataProps) {
  return (
    <div className="w-full bg-background-tertiary border border-border-subtle rounded-md p-8 md:p-12 stripe-shadow">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
        
        <div className="flex flex-col gap-2">
          <h3 className="font-code text-[11px] uppercase tracking-widest text-brand-primary">Project Type</h3>
          <p className="text-[15px] font-ui font-medium text-white">{metadata.projectType}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-code text-[11px] uppercase tracking-widest text-brand-primary">Industry</h3>
          <p className="text-[15px] font-ui font-medium text-white">{metadata.industry}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-code text-[11px] uppercase tracking-widest text-brand-primary">Role</h3>
          <p className="text-[15px] font-ui font-medium text-white">{metadata.role}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-code text-[11px] uppercase tracking-widest text-brand-primary">Timeline</h3>
          <p className="text-[15px] font-ui font-medium text-white">{metadata.duration}</p>
        </div>

      </div>

      <div className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.05)]">
        <h3 className="font-code text-[11px] uppercase tracking-widest text-white/40 mb-4">Core Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {metadata.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1.5 rounded-sm bg-surface-hover border border-border-strong text-[12px] font-code text-white/70">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
