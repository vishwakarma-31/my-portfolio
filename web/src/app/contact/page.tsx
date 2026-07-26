"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [hoveredField, setHoveredField] = useState<string | null>(null);

  const inputClasses = "w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[6px] px-4 py-3 text-[14px] text-white placeholder-white/30 focus:outline-none focus:border-[#635BFF] transition-all duration-150 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] font-ui";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // Replace with actual key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="w-full flex flex-col min-h-screen bg-[#0d0d0d] text-[#8a8f98] selection:bg-[#96FF00] selection:text-black">
        <section className="w-full min-h-screen flex items-center justify-center px-6 lg:px-12 py-32">
          <div className="max-w-[600px] w-full flex flex-col gap-8 text-center items-center">
            <div className="w-16 h-16 rounded-full bg-[#96FF00]/20 flex items-center justify-center text-[#96FF00]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            </div>
            <h1 className="text-white text-[32px] md:text-[40px] font-marketing font-light tracking-tight">Message Sent.</h1>
            <p className="text-[15px] font-ui text-white/60 leading-[1.6]">
              I&apos;ve received your message and will be in touch shortly.
            </p>
            <button 
              onClick={() => setStatus("idle")}
              className="bg-transparent border border-white/20 text-white hover:border-white font-medium text-[15px] px-8 py-3 rounded-[4px] font-ui transition-colors mt-4"
            >
              Send Another
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col min-h-screen bg-[#0d0d0d] text-[#8a8f98] selection:bg-[#96FF00] selection:text-black">
      
      {/* Contact Section */}
      <section className="w-full min-h-screen flex items-center justify-center px-6 lg:px-12 py-32">
        <div className="max-w-[600px] w-full flex flex-col gap-12">
          
          <div className="flex flex-col gap-4">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white text-[32px] md:text-[40px] font-marketing font-light tracking-tight"
            >
              Let&apos;s build something.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[15px] font-ui text-white/60 leading-[1.6]"
            >
              Whether you&apos;re looking to redefine an industry or just need some architectural advice, I&apos;m always open to discussing new projects and opportunities.
            </motion.p>
          </div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
            onSubmit={handleSubmit}
          >
            <div 
              className="relative flex flex-col gap-2"
              onMouseEnter={() => setHoveredField('name')}
              onMouseLeave={() => setHoveredField(null)}
            >
              <label htmlFor="name" className="text-[13px] font-ui text-white/80 tracking-[0.01em]">Name</label>
              <input type="text" id="name" name="name" required placeholder="Jane Doe" className={inputClasses} />
              
              {/* Linear-style hint */}
              <div className={`absolute top-[32px] right-3 flex items-center justify-center px-1.5 h-[18px] rounded-[3px] bg-[rgba(255,255,255,0.08)] text-[11px] font-code text-white/40 transition-opacity duration-150 pointer-events-none ${hoveredField === 'name' ? 'opacity-100' : 'opacity-0'}`}>
                N
              </div>
            </div>

            <div 
              className="relative flex flex-col gap-2"
              onMouseEnter={() => setHoveredField('email')}
              onMouseLeave={() => setHoveredField(null)}
            >
              <label htmlFor="email" className="text-[13px] font-ui text-white/80 tracking-[0.01em]">Email</label>
              <input type="email" id="email" name="email" required placeholder="jane@example.com" className={inputClasses} />
              <div className={`absolute top-[32px] right-3 flex items-center justify-center px-1.5 h-[18px] rounded-[3px] bg-[rgba(255,255,255,0.08)] text-[11px] font-code text-white/40 transition-opacity duration-150 pointer-events-none ${hoveredField === 'email' ? 'opacity-100' : 'opacity-0'}`}>
                E
              </div>
            </div>

            <div 
              className="relative flex flex-col gap-2"
              onMouseEnter={() => setHoveredField('message')}
              onMouseLeave={() => setHoveredField(null)}
            >
              <label htmlFor="message" className="text-[13px] font-ui text-white/80 tracking-[0.01em]">Message</label>
              <textarea id="message" name="message" required placeholder="Tell me about your project..." rows={5} className={`${inputClasses} resize-none`} />
              <div className={`absolute top-[32px] right-3 flex items-center justify-center px-1.5 h-[18px] rounded-[3px] bg-[rgba(255,255,255,0.08)] text-[11px] font-code text-white/40 transition-opacity duration-150 pointer-events-none ${hoveredField === 'message' ? 'opacity-100' : 'opacity-0'}`}>
                M
              </div>
            </div>
            
            {status === "error" && (
              <p className="text-red-400 font-ui text-[14px]">Something went wrong. Please try again later.</p>
            )}

            {/* Shopify CTA */}
            <div className="pt-4 flex items-center justify-between">
              <span className="text-[12px] text-white/40 font-code">Press ⌘ + Enter</span>
              <button 
                type="submit"
                disabled={status === "submitting"}
                className="bg-[#96FF00] text-black font-bold text-[15px] px-8 py-3 rounded-[4px] shopify-hover font-ui tracking-tight disabled:opacity-50 flex items-center justify-center min-w-[150px]"
              >
                {status === "submitting" ? (
                  <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
