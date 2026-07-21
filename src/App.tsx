import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Laptop, 
  SlidersHorizontal,
  Volume2,
  VolumeX,
  RefreshCw,
  Monitor,
  CheckCircle,
  Menu,
  X
} from "lucide-react";

// Types
import { AudienceType } from "./types";

// Sub-components
import TargetAudienceSelector from "./components/TargetAudienceSelector";
import InteractiveCharacter from "./components/InteractiveCharacter";
import MarqueeSection from "./components/MarqueeSection";
import Experience from "./components/Experience";
import ServicesSection from "./components/ServicesSection";
import ProjectCards from "./components/ProjectCards";
import Certifications from "./components/Certifications";
import ReviewSection from "./components/ReviewSection";
import ContactForm from "./components/ContactForm";

export default function App() {
  const [audience, setAudience] = useState<AudienceType>("freelancers");
  const [isZoomed, setIsZoomed] = useState(false);
  const [showYellowOverlay, setShowYellowOverlay] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const portfolioStartRef = useRef<HTMLDivElement>(null);

  // Cinematic Zoom & Yellow Transition Animation
  const handleBeginJourney = () => {
    setIsZoomed(true);
    
    // Smoothly fade in the golden yellow screen as scale approaches peak
    setTimeout(() => {
      setShowYellowOverlay(true);
    }, 700);

    // Swap to the About Me portfolio view instantly while screen is yellow
    setTimeout(() => {
      portfolioStartRef.current?.scrollIntoView({ behavior: "auto", block: "start" });
    }, 1300);

    // Gracefully fade out the yellow screen to reveal the space
    setTimeout(() => {
      setShowYellowOverlay(false);
    }, 1800);
  };

  // Keep active tab synced on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos < 400) {
        setActiveTab("home");
      } else if (scrollPos < 1200) {
        setActiveTab("about");
      } else if (scrollPos < 2200) {
        setActiveTab("experience");
      } else if (scrollPos < 3400) {
        setActiveTab("projects");
      } else {
        setActiveTab("contact");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsVideoMuted(videoRef.current.muted);
    }
  };

  // Quick navigation scroll-helper
  const scrollToId = (id: string) => {
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-[#0C0C0C] text-[#D7E2EA] font-sans overflow-x-hidden min-h-screen relative selection:bg-indigo-500 selection:text-white">
      
      {/* =================================================================== */}
      {/* 1. CINEMATIC HERO SCREEN (Phase 1)                                  */}
      {/* =================================================================== */}
      <div id="top" className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden z-20">
        
        {/* Fullscreen Video Background */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#001726]">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Glassmorphic Navigation Bar */}
        <header className="relative z-10 w-full">
          <div className="flex flex-row items-center justify-between px-8 py-6 max-w-7xl mx-auto">
            {/* Logo */}
            <div 
              onClick={() => scrollToId("top")}
              className="text-3xl tracking-tight text-white cursor-pointer select-none"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Velorah<sup className="text-xs">®</sup>
            </div>

            {/* Navigation links (hidden on mobile, md:flex) */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToId("top")}
                className={`text-sm tracking-wide transition-colors ${
                  activeTab === "home" ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToId("projects")}
                className="text-sm tracking-wide text-zinc-400 hover:text-white transition-colors"
              >
                Studio
              </button>
              <button
                onClick={() => scrollToId("about")}
                className="text-sm tracking-wide text-zinc-400 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToId("experience")}
                className="text-sm tracking-wide text-zinc-400 hover:text-white transition-colors"
              >
                Journal
              </button>
              <button
                onClick={() => scrollToId("contact")}
                className="text-sm tracking-wide text-zinc-400 hover:text-white transition-colors"
              >
                Reach Us
              </button>
            </nav>

            {/* Mute and CTA button */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleMute}
                className="p-2.5 rounded-full border border-white/10 hover:bg-white/5 transition-colors cursor-pointer text-white/80"
                title={isVideoMuted ? "Unmute video" : "Mute video"}
              >
                {isVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <button
                onClick={handleBeginJourney}
                className="liquid-glass rounded-full px-6 py-2.5 text-sm text-white hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-md"
              >
                Begin Journey
              </button>

              {/* Mobile Menu Icon */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 md:hidden text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-20 left-0 w-full bg-zinc-950/95 border-b border-white/10 p-6 z-50 backdrop-blur-2xl md:hidden flex flex-col gap-4 text-center shadow-xl"
              >
                <button onClick={() => { setMobileMenuOpen(false); scrollToId("top"); }} className="text-sm font-semibold uppercase tracking-wider py-2">Home</button>
                <button onClick={() => { setMobileMenuOpen(false); scrollToId("projects"); }} className="text-sm font-semibold uppercase tracking-wider py-2">Studio</button>
                <button onClick={() => { setMobileMenuOpen(false); scrollToId("about"); }} className="text-sm font-semibold uppercase tracking-wider py-2">About</button>
                <button onClick={() => { setMobileMenuOpen(false); scrollToId("experience"); }} className="text-sm font-semibold uppercase tracking-wider py-2">Journal</button>
                <button onClick={() => { setMobileMenuOpen(false); scrollToId("contact"); }} className="text-sm font-semibold uppercase tracking-wider py-2">Reach Us</button>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section Content */}
        <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 py-[90px] flex-grow max-w-7xl mx-auto w-full select-none">
          <h1
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-white animate-fade-rise"
          >
            Where <em className="not-italic text-zinc-400">dreams</em> rise <br />
            <em className="not-italic text-zinc-400">through the silence.</em>
          </h1>

          <p
            className="text-zinc-400 text-base sm:text-lg max-w-2xl mt-8 leading-relaxed font-light animate-fade-rise-delay"
          >
            We're designing tools for deep thinkers, bold creators, and quiet rebels.
            Amid the chaos, we build digital spaces for sharp focus and inspired work.
          </p>

          <button
            onClick={handleBeginJourney}
            className="liquid-glass rounded-full px-14 py-5 text-base text-white mt-12 hover:scale-[1.03] cursor-pointer animate-fade-rise-delay-2"
          >
            Begin Journey
          </button>
        </main>

        {/* Bottom bar padding to center vertically */}
        <div className="relative z-10 w-full py-4 text-center text-xs text-zinc-600 font-mono">
          {/* Minimalist status tag */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <span>ACTIVE CREATIVE STREAM</span>
          </div>
        </div>
      </div>

      {/* Cinematic Fullscreen Yellow Transition Overlay */}
      <AnimatePresence>
        {showYellowOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-amber-400 z-[9999] flex items-center justify-center pointer-events-none"
          >
            <div className="w-24 h-24 rounded-full border-4 border-black/10 border-t-black/80 animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================================== */}
      {/* 2. PORTFOLIO DEEP DIVE (Phase 2)                                    */}
      {/* =================================================================== */}
      <div 
        ref={portfolioStartRef} 
        id="target-selector"
        className="relative min-h-screen bg-[#0C0C0C] z-30 pt-20"
      >
        {/* 3. ABOUT ME / STORY SECTION */}
        <div id="about">
          <InteractiveCharacter audience={audience} />
        </div>

        {/* 4. MARQUEE SECTION */}
        <MarqueeSection />

        {/* 5. EXPERIENCE SECTION */}
        <div id="experience">
          <Experience audience={audience} />
        </div>

        {/* 6. SERVICES SECTION */}
        <ServicesSection audience={audience} />

        {/* 7. PROJECTS SECTION */}
        <div id="projects">
          <ProjectCards audience={audience} />
        </div>

        {/* 8. CERTIFICATIONS SECTION */}
        <div id="certifications">
          <Certifications />
        </div>

        {/* 9. REVIEWS SECTION */}
        <div id="reviews">
          <ReviewSection currentAudience={audience} />
        </div>

        {/* 10. CONTACT FORM SECTION */}
        <div id="contact">
          <ContactForm audience={audience} />
        </div>

        {/* Optional Audience Personalization Panel (Moved to bottom) */}
        <div className="py-12 border-t border-b border-zinc-900 bg-zinc-950/50">
          <TargetAudienceSelector 
            currentAudience={audience} 
            onChangeAudience={(newAud) => setAudience(newAud)} 
          />
        </div>

        {/* Footer */}
        <footer className="bg-black py-12 px-6 text-center text-xs text-zinc-600 border-t border-zinc-950 font-mono select-none">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-white font-accent font-black tracking-tight text-lg">Velorah®</span>
              <span className="text-zinc-700">|</span>
              <span>JACK -- 3D CREATOR</span>
            </div>
            <div className="flex items-center gap-6">
              <button onClick={() => scrollToId("target-selector")} className="hover:text-white transition-colors">SELECTOR</button>
              <button onClick={() => scrollToId("about")} className="hover:text-white transition-colors">ABOUT</button>
              <button onClick={() => scrollToId("experience")} className="hover:text-white transition-colors">TIMELINE</button>
              <button onClick={() => scrollToId("projects")} className="hover:text-white transition-colors">STATIONS</button>
              <button onClick={() => scrollToId("contact")} className="hover:text-white transition-colors">REACH OUT</button>
            </div>
            <div>
              ENGINEERED & PERSISTED IN CLOUD RUN CONTAINER
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
