import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ExternalLink, Globe } from "lucide-react";
import { Project, AudienceType } from "../types";

interface ProjectCardsProps {
  audience: AudienceType;
}

const PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    title: "Nextlevel Studio",
    category: "Client Project",
    number: "01",
    liveUrl: "https://nextlevel.studio",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    },
    audienceAdaptation: {
      companies: "Designed using custom WebGL shaders and optimized asset packages. Perfect for companies looking to incorporate interactive branding without compromising web latency and runtime performance.",
      freelancers: "A high-ticket studio branding asset that demonstrates my capability to deliver cutting-edge interactive elements, leading to a 3x premium contract rate.",
      "local-businesses": "High-impact visual canvas showing how localized services can establish instant authority and rise far above standard city competitors."
    }
  },
  {
    id: "proj-2",
    title: "Aura Brand Identity",
    category: "Personal Concept",
    number: "02",
    liveUrl: "https://aura.design",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
    },
    audienceAdaptation: {
      companies: "Strict, scalable brand framework utilizing cohesive typography tokens. Built to demonstrate deep respect for corporate visual systems and brand guidelines.",
      freelancers: "A bespoke, photorealistic 3D environment system that demonstrates complete creative ownership, showing freelance partners what premium layout looks like.",
      "local-businesses": "Perfect proof of concept demonstrating how custom 3D photography can elevate a local cafe or clinic to represent luxury and professional trust."
    }
  },
  {
    id: "proj-3",
    title: "Solaris Digital",
    category: "Client Project",
    number: "03",
    liveUrl: "https://solaris.digital",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
    },
    audienceAdaptation: {
      companies: "Full-stack React web portal with complex state parameters. Solves difficult data layouts beautifully while keeping load speeds fast and responsive.",
      freelancers: "An interactive project that shows a complete creative pipeline: from high-poly modeling, down-sampling, material design, and custom React coding.",
      "local-businesses": "An elegant, interactive layout with integrated scheduling maps. Designed to demonstrate how appointment-based clinics can double reservations overnight."
    }
  }
];

interface SingleCardProps {
  project: Project;
  index: number;
  total: number;
  audience: AudienceType;
  key?: React.Key | any;
}

function ProjectCard({ project, index, total, audience }: SingleCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside this single project slot
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Calculate scaling down factor as we scroll past this card
  // Cards later in the stack should overlap nicely
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (total - 1 - index) * 0.04]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  // Position offset (index * 28px) specified in the design guide
  const topOffset = index * 28;

  return (
    <div
      ref={containerRef}
      className="sticky h-[80vh] sm:h-[85vh] w-full flex justify-center items-center py-6"
      style={{
        top: `${topOffset + 96}px`, // Adjusted for navbar height
      }}
    >
      <motion.div
        style={{
          scale,
          opacity,
          transformOrigin: "top center",
        }}
        className="w-full max-w-5xl rounded-[32px] sm:rounded-[48px] md:rounded-[60px] border-2 border-[#D7E2EA]/25 bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
      >
        {/* Top Row */}
        <div className="flex flex-row justify-between items-center mb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-[8vw] sm:text-[6vw] md:text-[3.5vw] font-black font-accent leading-none text-[#D7E2EA] select-none">
              {project.number}
            </span>
            <div>
              <span className="text-[10px] tracking-widest font-mono text-zinc-500 uppercase block">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white font-accent">
                {project.title}
              </h3>
            </div>
          </div>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.preventDefault()} // Keep iframe safe
            className="flex items-center gap-1.5 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full border border-[#D7E2EA] text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors duration-300"
          >
            <span>Live Project</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Dynamic Focus Explainer */}
        <div className="mb-4 p-3 bg-zinc-950/60 border-l border-zinc-700 rounded-r-lg max-w-4xl">
          <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
            <span className="font-semibold text-zinc-200">Relevance:</span> {project.audienceAdaptation[audience]}
          </p>
        </div>

        {/* Bottom Row - Two Column Image Grid */}
        <div className="grid grid-cols-10 gap-3 sm:gap-4 md:gap-5 flex-1 min-h-0 overflow-hidden mt-2">
          {/* Left Column (40% width) - 2 stacked images */}
          <div className="col-span-10 md:col-span-4 flex flex-col gap-3 sm:gap-4 justify-between h-full min-h-0">
            <div className="flex-1 rounded-[24px] sm:rounded-[36px] md:rounded-[40px] overflow-hidden border border-white/5 bg-zinc-900 relative">
              <img
                src={project.images.col1_1}
                alt={`${project.title} detailed view`}
                className="absolute inset-0 w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-[1.2] rounded-[24px] sm:rounded-[36px] md:rounded-[40px] overflow-hidden border border-white/5 bg-zinc-900 relative hidden sm:block">
              <img
                src={project.images.col1_2}
                alt={`${project.title} screen close-up`}
                className="absolute inset-0 w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column (60% width) - 1 tall image */}
          <div className="col-span-10 md:col-span-6 rounded-[24px] sm:rounded-[36px] md:rounded-[40px] overflow-hidden border border-white/5 bg-zinc-900 relative h-full min-h-[180px] sm:min-h-[260px]">
            <img
              src={project.images.col2}
              alt={`${project.title} layout representation`}
              className="absolute inset-0 w-full h-full object-cover filter brightness-95 hover:scale-102 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectCards({ audience }: ProjectCardsProps) {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] text-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-12 md:-mt-16 pt-24 pb-32 px-4 sm:px-6 relative z-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16 select-none">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-indigo-400 block mb-2">
            SELECTED WORK
          </span>
          <h2 className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-black uppercase tracking-tight hero-heading font-accent">
            PROJECTS
          </h2>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
            Scroll to stack the cards
          </p>
        </div>

        {/* Stackable Cards Wrapper */}
        <div className="flex flex-col relative">
          {PROJECTS_DATA.map((proj, idx) => (
            <ProjectCard
              key={proj.id}
              project={proj}
              index={idx}
              total={PROJECTS_DATA.length}
              audience={audience}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
