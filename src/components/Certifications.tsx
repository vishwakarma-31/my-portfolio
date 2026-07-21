import React from "react";
import { motion } from "motion/react";
import { Award, ShieldCheck, ExternalLink, Calendar } from "lucide-react";
import { CertificationItem } from "../types";

const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Advanced WebGL & Three.js Journey",
    issuer: "Bruno Simon / ThreeJS",
    date: "2025",
    credentialUrl: "https://threejs-journey.com",
    iconName: "3d"
  },
  {
    id: "cert-2",
    title: "Certified 3D Professional Artist",
    issuer: "Blender Foundation Guild",
    date: "2024",
    credentialUrl: "https://blender.org",
    iconName: "render"
  },
  {
    id: "cert-3",
    title: "Google Professional UX Architect",
    issuer: "Google Career Certificates",
    date: "2024",
    credentialUrl: "https://coursera.org",
    iconName: "ux"
  },
  {
    id: "cert-4",
    title: "Advanced React Frontend Architect",
    issuer: "Meta Blueprint & Vercel",
    date: "2023",
    credentialUrl: "https://nextjs.org",
    iconName: "react"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-[#0C0C0C] text-white py-24 px-4 sm:px-8 md:px-16 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 select-none">
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase block mb-2">
            CREDIBILITY & VERIFICATION
          </span>
          <h2 className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-black uppercase hero-heading font-accent">
            CERTIFICATIONS
          </h2>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
            Verified professional credentials and course badges
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative rounded-2xl border border-white/5 bg-zinc-950/40 p-6 md:p-8 backdrop-blur-sm overflow-hidden flex flex-col justify-between hover:border-white/15 transition-all duration-300"
            >
              {/* Top Row: Icon badge & verification marker */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform duration-300">
                  <Award className="w-6 h-6" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-semibold text-emerald-400 tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>VERIFIED</span>
                </div>
              </div>

              {/* Main Info */}
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 block uppercase mb-1">
                  {cert.issuer}
                </span>
                <h3 className="text-lg sm:text-xl font-bold uppercase text-white font-accent tracking-tight leading-snug group-hover:text-indigo-300 transition-colors duration-300">
                  {cert.title}
                </h3>
              </div>

              {/* Bottom Row: Date & Link */}
              <div className="flex items-center justify-between mt-8 pt-4 border-t border-zinc-900">
                <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>ISSUED {cert.date}</span>
                </div>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.preventDefault()} // Keeps frame sandboxed
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                >
                  <span>Verify Credentials</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Decorative dynamic ambient glow inside the card corner */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/15 group-hover:scale-120 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
