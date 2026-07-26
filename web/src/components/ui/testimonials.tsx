"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sarah Jenkins",
    role: "Recruiter @ TechCorp",
    content: "Absolutely blown away by the technical depth and attention to detail. A rare talent who understands both systems and user experience.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Michael Chen",
    role: "Founder @ StartupX",
    content: "Delivered our MVP ahead of schedule with flawless execution. The best freelance partner we've ever worked with.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=michael"
  },
  {
    name: "Emma Watson",
    role: "Owner @ Local Cafe",
    content: "Transformed our local business presence online. We saw a 300% increase in online reservations within the first month!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=emma"
  }
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-[#020202] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
            What They Say
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-light">
            Feedback from recruiters, startup founders, and local business owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              key={idx}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-white/80 text-lg mb-8 leading-relaxed font-light">
                "{review.content}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <Avatar className="w-12 h-12 border border-white/10">
                  <AvatarImage src={review.avatar} />
                  <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-white font-medium">{review.name}</h4>
                  <p className="text-white/40 text-sm">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
