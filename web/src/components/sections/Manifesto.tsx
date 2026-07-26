"use client";

import React from "react";
import { motion } from "framer-motion";

export function Manifesto() {
  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col justify-center px-6 lg:px-12 py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black uppercase leading-[0.85] tracking-[0.02em] break-words"
          style={{ fontSize: "clamp(64px, 14vw, 180px)" }}
        >
          CODE IS
          <br />
          NOTHING
          <br />
          WITHOUT
          <br />
          PURPOSE.
        </motion.h2>
      </div>
    </section>
  );
}
