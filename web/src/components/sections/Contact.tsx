import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";

export function Contact() {
  return (
    <section className="w-full bg-background text-foreground py-40 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
        
        {/* Left Col - Typography & Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Let's build <br/> something <span className="text-foreground/40 italic font-normal">extraordinary.</span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/50 font-light max-w-md mb-12">
              Whether you need an immersive web experience or a scalable platform, I'm here to help.
            </p>
          </div>
          
          <div className="flex flex-col gap-6 mt-12 md:mt-0">
            <a href="mailto:hello@example.com" aria-label="Email me at hello@example.com" className="group flex items-center gap-4 text-2xl md:text-3xl font-light hover:text-accent transition-colors w-fit">
              hello@example.com
              <ArrowUpRight className="w-8 h-8 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
            </a>
            
            <div className="flex gap-8 pt-8 border-t border-border mt-4">
              <a href="https://twitter.com/yourhandle" aria-label="Visit my Twitter profile" className="font-mono text-sm tracking-widest uppercase text-foreground/40 hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com/in/yourhandle" aria-label="Visit my LinkedIn profile" className="font-mono text-sm tracking-widest uppercase text-foreground/40 hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/yourhandle" aria-label="Visit my GitHub profile" className="font-mono text-sm tracking-widest uppercase text-foreground/40 hover:text-foreground transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Right Col - Form */}
        <div className="bg-muted/10 border border-border rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
