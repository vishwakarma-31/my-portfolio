"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function HireMe() {
  return (
    <section className="w-full bg-[#1a2e1a] text-white py-[160px] px-6 lg:px-12 flex flex-col items-center">
      <div className="max-w-[1200px] w-full text-center flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-marketing font-extralight tracking-tight leading-[1.1]"
          style={{ fontSize: "clamp(48px, 6vw, 84px)" }}
        >
          Ready to scale your next big idea?
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-24 mb-20 text-left"
        >
          {/* Stat Card 1 */}
          <div className="bg-[#0d0d0d] border border-[rgba(255,255,255,0.08)] rounded-[8px] p-8 flex flex-col gap-2">
            <span className="font-marketing text-[48px] font-light text-white leading-none">12+</span>
            <span className="font-ui text-[15px] text-white/60">Enterprise Clients</span>
          </div>
          
          {/* Stat Card 2 */}
          <div className="bg-[#0d0d0d] border border-[rgba(255,255,255,0.08)] rounded-[8px] p-8 flex flex-col gap-2">
            <span className="font-marketing text-[48px] font-light text-white leading-none">₹4L+</span>
            <span className="font-ui text-[15px] text-white/60">Value Delivered</span>
          </div>
          
          {/* Stat Card 3 */}
          <div className="bg-[#0d0d0d] border border-[rgba(255,255,255,0.08)] rounded-[8px] p-8 flex flex-col gap-2">
            <span className="font-marketing text-[48px] font-light text-white leading-none">100%</span>
            <span className="font-ui text-[15px] text-white/60">Project Success Rate</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/contact">
            <button className="bg-[#96FF00] text-black font-bold text-[17px] px-10 py-5 rounded-[4px] shopify-hover font-ui">
              Let&apos;s Work Together
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
