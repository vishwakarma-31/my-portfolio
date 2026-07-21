import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Magnet from "./Magnet";

interface StorySegment {
  title: string;
  subtitle: string;
  text: string;
  align: "left" | "right";
}

const STORY_DATA: Record<string, StorySegment[]> = {
  companies: [
    {
      title: "Who I Am",
      subtitle: "A High-Craft 3D & Frontend Creator",
      text: "I'm Jack, a multidisciplinary designer and engineer specializing in production-grade 3D design systems and high-fidelity user experiences. I merge deep visual artistry with strict front-end performance.",
      align: "left", // character starts at Left, text on Right
    },
    {
      title: "How I Became This",
      subtitle: "Bridging the Gap Between Code and Canvas",
      text: "With over 5 years of industry experience, I started as a pure 3D modeler. Recognizing that standard static web views were holding back digital branding, I mastered React, TypeScript, and modern shaders to bring interactive spatial design directly to web platforms.",
      align: "right", // character moves to Right, text moves to Left
    },
    {
      title: "What I'm Capable Of",
      subtitle: "Dynamic Systems & WebGL Artistry",
      text: "I build robust, conversion-focused interactive tools. My stack includes advanced 3D modeling, high-quality lighting setups, photorealistic renders, and fluid keyframe animations that elevate ordinary layouts into immersive cinematic experiences.",
      align: "left", // character moves to Left, text moves to Right
    },
    {
      title: "Why I'm a Perfect Match",
      subtitle: "Engineering Meets Aesthetic Excellence",
      text: "I don't just deliver mockups. I deliver optimized, highly functional, responsive React architectures. I bridge your design and dev teams by operating as a single, ultra-productive pipeline who speaks both languages fluently.",
      align: "right", // character moves to Right, text moves to Left
    },
  ],
  freelancers: [
    {
      title: "Who I Am",
      subtitle: "Bespoke 3D & Digital Craftsperson",
      text: "I'm Jack, a freelance 3D designer focused on helping brands stand out and express their unique premium identities. I construct striking digital environments that attract attention and drive growth.",
      align: "left",
    },
    {
      title: "How I Became This",
      subtitle: "The Freedom to Craft Excellence",
      text: "After working with prominent studio teams, I transitioned to full-time independent contracting to offer high-velocity, high-craft creative services directly to bold, innovative founders around the world.",
      align: "right",
    },
    {
      title: "What I'm Capable Of",
      subtitle: "Tailored Visual Systems & Shaders",
      text: "From custom 3D products and mockups to high-energy motion graphics, I design identity systems that command authority. Every project is fully responsive and custom-optimized to look brilliant on any display.",
      align: "left",
    },
    {
      title: "Why I'm a Perfect Match",
      subtitle: "A Partnership Focused on Results",
      text: "I maintain a low project-concurrency rate. That means when you contract me, you get my undivided attention, fast turnarounds, direct iteration loops, and a premium product that immediately boosts your brand equity.",
      align: "right",
    },
  ],
  "local-businesses": [
    {
      title: "Who I Am",
      subtitle: "A Local Business Digital Partner",
      text: "I'm Jack, a web specialist who helps local premium cafes, fine dining restaurants, doctors, and clinics attract more customers through stunning, interactive online presences.",
      align: "left",
    },
    {
      title: "How I Became This",
      subtitle: "Rooted in Community Growth",
      text: "I realized local business websites were often slow, generic templates. I committed to bringing elite 3D graphics, smooth online ordering experiences, and precise booking layouts to the high streets, making neighborhood businesses feel world-class.",
      align: "right",
    },
    {
      title: "What I'm Capable Of",
      subtitle: "Conversion-Focused High Street Webs",
      text: "I craft elegant animated digital menus, interactive schedule planners for practitioners, immersive clinic maps, and local search optimized pages that drive reservation bookings and actual foot traffic directly to your door.",
      align: "left",
    },
    {
      title: "Why I'm a Perfect Match",
      subtitle: "Your High-ROI Growth Asset",
      text: "I focus strictly on customer conversion. I combine breathtaking aesthetic layouts with lightning-fast speeds and localized SEO. No jargon, no endless delays—just a beautiful tool that pays for itself in weeks.",
      align: "right",
    },
  ],
};

interface InteractiveCharacterProps {
  audience: "companies" | "freelancers" | "local-businesses";
}

interface StorySegmentProps {
  seg: StorySegment;
  idx: number;
  globalMouse: { x: number; y: number };
  key?: React.Key;
}

function StorySegment({ seg, idx, globalMouse }: StorySegmentProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of this specific text segment
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });

  // Sync text reveal: fades in as it arrives near center/upper-viewport, then stays visible or fades slightly
  const opacity = useTransform(
    smoothProgress,
    [0.2, 0.45, 0.75, 0.95],
    [0, 1, 1, 0.2]
  );

  // Sync text slide: slides in from its respective direction as the character aligns
  const x = useTransform(
    smoothProgress,
    [0.15, 0.45],
    [seg.align === "left" ? 60 : -60, 0]
  );

  return (
    <div
      ref={ref}
      className={`flex flex-row ${
        seg.align === "left" ? "flex-row-reverse" : "flex-row"
      } items-center justify-between gap-4 sm:gap-12 w-full min-h-[35vh] py-16`}
    >
      {/* Left/Right Text Content */}
      <motion.div
        style={{ opacity, x }}
        className="w-[50%] sm:w-[45%] flex flex-col justify-center text-left"
      >
        <div className="mb-2 flex items-center gap-2">
          <span className="text-[10px] sm:text-xs font-mono text-zinc-500 tracking-wider">
            STORY 0{idx + 1}
          </span>
          <span className="w-8 h-[1px] bg-zinc-800" />
        </div>
        
        <h3 className="text-xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white font-accent mb-2">
          {seg.title}
        </h3>
        
        <h4 className="text-[11px] sm:text-sm font-semibold tracking-wide text-indigo-400 uppercase mb-4">
          {seg.subtitle}
        </h4>

        <div className="relative">
          <p className="text-zinc-400 font-light text-xs sm:text-base leading-relaxed md:text-lg">
            {seg.text}
          </p>
          <div className="absolute top-0 -left-4 w-1 h-full bg-indigo-500/30 rounded-full" />
        </div>
      </motion.div>

      {/* Spacer to reserve space for the floating sticky character */}
      <div className="w-[50%] sm:w-[45%] shrink-0" />
    </div>
  );
}

export default function InteractiveCharacter({ audience }: InteractiveCharacterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const segments = STORY_DATA[audience] || STORY_DATA.companies;

  // Track scroll position of the About section to drive the character's horizontal path
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth scroll transitions
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 25 });

  // Map scroll progress to horizontal translation (character zig-zags smoothly with scroll progress)
  // Initially on Left, then slides Right, then Left, then Right to perfectly follow the active text segment
  const characterX = useTransform(
    smoothProgress,
    [0, 0.15, 0.28, 0.45, 0.58, 0.72, 0.82, 0.92, 1],
    ["-22vw", "-22vw", "22vw", "22vw", "-22vw", "-22vw", "22vw", "22vw", "22vw"]
  );

  // Slightly rotate the character dynamically depending on scroll direction and segment alignment
  const characterRotate = useTransform(
    smoothProgress,
    [0, 0.15, 0.28, 0.45, 0.58, 0.72, 0.82, 0.92, 1],
    [-6, -6, 6, 6, -6, -6, 6, 6, 6]
  );

  // Track normalized mouse coordinates globally for a smooth, viewport-wide responsive 3D look
  const [globalMouse, setGlobalMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      // Coordinates normalized relative to center of screen: [-1, 1]
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      
      // Multiply by maximum tilt degrees (e.g., 22deg max tilt for perfect 3D depth)
      setGlobalMouse({ x: x * 22, y: y * 22 });
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen py-24 px-4 sm:px-8 md:px-16 flex flex-col items-center justify-center overflow-hidden bg-[#0C0C0C]"
    >
      {/* Decorative 3D Images positioned in corners */}
      <motion.img
        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
        alt="Moon Icon"
        className="absolute top-[5%] left-[2%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-0 opacity-40 select-none"
        style={{
          y: useTransform(smoothProgress, [0, 1], [-40, 60]),
        }}
      />
      
      <motion.img
        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
        alt="3D object"
        className="absolute bottom-[8%] left-[3%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none z-0 opacity-40 select-none"
        style={{
          y: useTransform(smoothProgress, [0, 1], [60, -40]),
        }}
      />

      <motion.img
        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
        alt="Lego Icon"
        className="absolute top-[10%] right-[2%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none z-0 opacity-40 select-none"
        style={{
          y: useTransform(smoothProgress, [0, 1], [-60, 40]),
        }}
      />

      <motion.img
        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
        alt="3D group"
        className="absolute bottom-[5%] right-[2%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none z-0 opacity-40 select-none"
        style={{
          y: useTransform(smoothProgress, [0, 1], [40, -60]),
        }}
      />

      {/* Heading */}
      <div className="text-center mb-16 z-10">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tight hero-heading select-none font-accent">
          ABOUT ME
        </h2>
        <p className="text-sm tracking-widest text-zinc-500 uppercase mt-2 font-medium">
          A scroll-driven visual journey of craft
        </p>
      </div>

      <div className="w-full max-w-6xl relative flex flex-col gap-24 md:gap-32 z-10">
        
        {/* Scroll-tracked character overlay container for all screens */}
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="sticky top-[30vh] sm:top-[25vh] w-full flex justify-center">
            <motion.div
              style={{
                x: characterX,
                rotate: characterRotate,
              }}
              className="pointer-events-auto"
            >
              <img
                src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                alt="Jack -- 3D Portrait"
                style={{
                  transform: `perspective(1000px) rotateY(${globalMouse.x}deg) rotateX(${-globalMouse.y}deg)`,
                  transition: "transform 0.1s ease-out",
                }}
                className="w-[140px] sm:w-[220px] md:w-[280px] xl:w-[320px] h-auto object-contain select-none filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>

        {/* The story blocks using custom Scroll Segment to sync text reveals with character position */}
        {segments.map((seg, idx) => (
          <StorySegment
            key={idx}
            seg={seg}
            idx={idx}
            globalMouse={globalMouse}
          />
        ))}

      </div>

      {/* Aesthetic bottom text block */}
      <motion.div
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="w-full max-w-2xl text-center mt-32 px-4 z-10"
      >
        <p className="text-lg sm:text-xl font-light leading-relaxed text-zinc-300">
          "With more than five years of experience in design, I focus on branding, web design, and user experience. I truly enjoy working with partners who aim to stand out and present their best image."
        </p>
        <div className="mt-8 flex justify-center items-center gap-4">
          <div className="w-12 h-[1px] bg-zinc-800" />
          <span className="font-accent uppercase font-bold text-xs tracking-widest text-indigo-400">
            Let's build something incredible together!
          </span>
          <div className="w-12 h-[1px] bg-zinc-800" />
        </div>
      </motion.div>
    </div>
  );
}
