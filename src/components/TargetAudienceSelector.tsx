import React from "react";
import { motion } from "motion/react";
import { Briefcase, Zap, Store, Users, FileCode, Landmark } from "lucide-react";
import { AudienceType } from "../types";

interface TargetAudienceSelectorProps {
  currentAudience: AudienceType;
  onChangeAudience: (type: AudienceType) => void;
}

export default function TargetAudienceSelector({
  currentAudience,
  onChangeAudience,
}: TargetAudienceSelectorProps) {
  const options = [
    {
      id: "companies" as AudienceType,
      label: "Companies",
      description: "Recruiters & Teams",
      icon: Briefcase,
      accent: "from-[#BBCCD7] to-[#646973]",
      bullet: "Full-Time Roles",
    },
    {
      id: "freelancers" as AudienceType,
      label: "Freelance",
      description: "Creators & Brands",
      icon: Zap,
      accent: "from-[#B600A8] to-[#7621B0]",
      bullet: "Bespoke Contracts",
    },
    {
      id: "local-businesses" as AudienceType,
      label: "Local Business",
      description: "Cafes, Clinics & Bars",
      icon: Store,
      accent: "from-[#BE4C00] to-[#E2803B]",
      bullet: "Web & SEO Growth",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6" id="target-selector-root">
      <div className="text-center mb-6">
        <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-zinc-500 block mb-1">
          Tailor Your Experience
        </span>
        <h2 className="text-sm font-medium text-zinc-300">
          Viewing portfolio as a:{" "}
          <span className="text-white capitalize font-semibold underline decoration-indigo-500/50 decoration-2 underline-offset-4">
            {currentAudience === "local-businesses" ? "Local Business Owner" : currentAudience === "companies" ? "Recruiting Company" : "Freelance Client"}
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-1.5 rounded-2xl bg-zinc-950/80 border border-white/5 backdrop-blur-xl relative shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        {options.map((opt) => {
          const Icon = opt.icon;
          const isActive = currentAudience === opt.id;

          return (
            <button
              key={opt.id}
              onClick={() => onChangeAudience(opt.id)}
              className="relative flex items-center gap-3.5 px-5 py-4 rounded-xl text-left transition-all duration-300 cursor-pointer overflow-hidden group outline-none"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              {isActive && (
                <motion.div
                  layoutId="audience-active-bg"
                  className="absolute inset-0 bg-white/[0.03] border border-white/10 rounded-xl"
                  transition={{ type: "spring", stiffness: 180, damping: 20 }}
                />
              )}
              
              <div
                className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-white text-zinc-950 scale-105"
                    : "bg-zinc-900 text-zinc-400 group-hover:bg-zinc-850 group-hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>

              <div className="relative z-10 flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`font-semibold tracking-tight text-sm transition-colors duration-300 ${
                      isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                    }`}
                  >
                    {opt.label}
                  </span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                  )}
                </div>
                <p className="text-xs text-zinc-500 truncate group-hover:text-zinc-400 transition-colors">
                  {opt.description}
                </p>
              </div>

              {/* Decorative indicator lines */}
              <div
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${opt.accent} transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-1/3"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
