"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";

gsap.registerPlugin(ScrollTrigger);

// Uncomment and fill with real data when available
// const testimonials = [
//   {
//     quote: "Real client quote here.",
//     author: "Client Name",
//     role: "Client Business"
//   }
// ];
const testimonials: any[] = [];

export function LocalBusinessPitch() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      }
    });

    tl.fromTo(".local-reveal",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power2.out" }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-[#0d0d0d] text-white px-6 md:px-12 xl:px-24 border-t border-[#1a1a1a]">
      <div className="max-w-[1280px] mx-auto text-center">
        
        <div className="local-reveal inline-block px-4 py-1.5 rounded-full bg-[#1a1a1a] border border-[#333] text-[13px] font-semibold text-white tracking-wide mb-6">
          📍 LOCAL TO KANPUR, INDIA
        </div>

        <h2 className="local-reveal type-apple-headline mb-6 text-white">
          Websites that actually work for your business.
        </h2>
        
        <p className="local-reveal type-body-large text-white/60 max-w-[640px] mx-auto mb-16 leading-[1.5]">
          You don't need technical jargon. You need more bookings, less manual paperwork, and a professional online presence that brings in customers while you sleep.
        </p>

        {/* TODO: Uncomment when real testimonials are available
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 text-left">
          {testimonials.map((t, i) => (
            <div key={i} className="local-reveal bg-[#1a1a1a] border border-[#333] p-8 rounded-lg relative">
              <div className="text-[#96FF00] text-4xl font-serif absolute top-4 left-6 opacity-30">"</div>
              <p className="type-body font-light text-white/80 mb-6 relative z-10 leading-[1.6]">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center text-white/50 type-h4">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="type-caption font-semibold text-white">{t.author}</div>
                  <div className="type-tiny text-white/50">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
          <Card variant="default" className="local-reveal bg-[#1a1a1a] border-[#333] shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-black rounded-xl shadow-sm flex items-center justify-center mb-6 text-2xl border border-[#333]">
                📈
              </div>
              <h3 className="type-h4 font-semibold text-white mb-3">Get More Customers</h3>
              <p className="type-body text-white/60">
                I build fast, mobile-friendly websites designed specifically to turn your visitors into paying clients.
              </p>
            </CardContent>
          </Card>

          <Card variant="default" className="local-reveal bg-[#1a1a1a] border-[#333] shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-black rounded-xl shadow-sm flex items-center justify-center mb-6 text-2xl border border-[#333]">
                ⚡️
              </div>
              <h3 className="type-h4 font-semibold text-white mb-3">Save Hours of Time</h3>
              <p className="type-body text-white/60">
                Stop dealing with manual scheduling and WhatsApp orders. Let an automated system handle it for you.
              </p>
            </CardContent>
          </Card>

          <Card variant="default" className="local-reveal bg-[#1a1a1a] border-[#333] shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-black rounded-xl shadow-sm flex items-center justify-center mb-6 text-2xl border border-[#333]">
                🤝
              </div>
              <h3 className="type-h4 font-semibold text-white mb-3">Local Support</h3>
              <p className="type-body text-white/60">
                I'm based right here in Kanpur. No disappearing freelancers, no timezone issues. Just reliable support.
              </p>
            </CardContent>
          </Card>
        </div>



        <div className="local-reveal">
          <Link 
            href="https://wa.me/910000000000"
            target="_blank"
            className="inline-flex items-center justify-center bg-[#96FF00] text-black text-[17px] font-bold rounded-[4px] px-8 py-4 shopify-hover shadow-lg"
          >
            Chat with me on WhatsApp
          </Link>
          <p className="mt-4 text-[13px] text-white/60">
            Free consultation. No technical knowledge required.
          </p>
        </div>

      </div>
    </section>
  );
}
