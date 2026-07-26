"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [hoveredField, setHoveredField] = useState<string | null>(null);

  const inputClasses = "w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[6px] px-4 py-3 text-[14px] text-white placeholder-white/30 focus:outline-none focus:border-[#635BFF] transition-all duration-150 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] font-ui";

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
              Let's build something.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[15px] font-ui text-white/60 leading-[1.6]"
            >
              Whether you're looking to redefine an industry or just need some architectural advice, I'm always open to discussing new projects and opportunities.
            </motion.p>
          </div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div 
              className="relative flex flex-col gap-2"
              onMouseEnter={() => setHoveredField('name')}
              onMouseLeave={() => setHoveredField(null)}
            >
              <label className="text-[13px] font-ui text-white/80 tracking-[0.01em]">Name</label>
              <input type="text" placeholder="Jane Doe" className={inputClasses} />
              
              {/* Linear-style hint */}
              <div className={`absolute top-0 right-0 flex items-center justify-center px-1.5 h-[18px] rounded-[3px] bg-[rgba(255,255,255,0.08)] text-[11px] font-code text-white/40 transition-opacity duration-150 ${hoveredField === 'name' ? 'opacity-100' : 'opacity-0'}`}>
                N
              </div>
            </div>

            <div 
              className="relative flex flex-col gap-2"
              onMouseEnter={() => setHoveredField('email')}
              onMouseLeave={() => setHoveredField(null)}
            >
              <label className="text-[13px] font-ui text-white/80 tracking-[0.01em]">Email</label>
              <input type="email" placeholder="jane@example.com" className={inputClasses} />
              <div className={`absolute top-0 right-0 flex items-center justify-center px-1.5 h-[18px] rounded-[3px] bg-[rgba(255,255,255,0.08)] text-[11px] font-code text-white/40 transition-opacity duration-150 ${hoveredField === 'email' ? 'opacity-100' : 'opacity-0'}`}>
                E
              </div>
            </div>

            <div 
              className="relative flex flex-col gap-2"
              onMouseEnter={() => setHoveredField('message')}
              onMouseLeave={() => setHoveredField(null)}
            >
              <label className="text-[13px] font-ui text-white/80 tracking-[0.01em]">Message</label>
              <textarea placeholder="Tell me about your project..." rows={5} className={`${inputClasses} resize-none`} />
              <div className={`absolute top-0 right-0 flex items-center justify-center px-1.5 h-[18px] rounded-[3px] bg-[rgba(255,255,255,0.08)] text-[11px] font-code text-white/40 transition-opacity duration-150 ${hoveredField === 'message' ? 'opacity-100' : 'opacity-0'}`}>
                M
              </div>
            </div>

            {/* Shopify CTA */}
            <div className="pt-4 flex items-center justify-between">
              <span className="text-[12px] text-white/40 font-code">Press ⌘ + Enter</span>
              <button 
                type="submit"
                className="bg-[#96FF00] text-black font-bold text-[15px] px-8 py-3 rounded-[4px] shopify-hover font-ui tracking-tight"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
