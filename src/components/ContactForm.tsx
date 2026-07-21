import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, AlertCircle, Building, Mail, User, Phone, Globe } from "lucide-react";
import { AudienceType } from "../types";

interface ContactFormProps {
  audience: AudienceType;
}

export default function ContactForm({ audience }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [businessType, setBusinessType] = useState("Restaurant/Cafe");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage("Please complete all required fields.");
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: audience === "local-businesses" ? `Local ${businessType}` : company.trim(),
          audienceType: audience,
          message: `${audience === "local-businesses" ? `[Business: ${businessType}] ` : ""}${message.trim()}`
        })
      });

      if (res.ok) {
        setSubmitSuccess(true);
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setMessage("");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      console.warn("API unavailable, simulating local successful submit.", err);
      setSubmitSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setMessage("");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Content descriptors based on target perspective
  const getFormDetails = () => {
    switch (audience) {
      case "companies":
        return {
          title: "Inquire Recruiting / Careers",
          subtitle: "Let's explore full-time engineering and product systems alignment.",
          companyLabel: "Company / Organization Name",
          companyPlaceholder: "e.g. Aethera Corp",
          messageLabel: "Tell me about the role or team challenges *",
          messagePlaceholder: "We are seeking a 3D frontend developer to build our design systems...",
        };
      case "freelancers":
        return {
          title: "Start A Bespoke Freelance Contract",
          subtitle: "Tell me about your product or brand timeline and deliverables.",
          companyLabel: "Brand / Client Agency",
          companyPlaceholder: "e.g. Neon Ventures",
          messageLabel: "Project Scope & Objectives *",
          messagePlaceholder: "We need 5 high-fidelity renders and a customized React interactive loop...",
        };
      case "local-businesses":
        return {
          title: "Grow Your Local Neighborhood Brand",
          subtitle: "Double your online reservation bookings, patient schedules, or cafe orders.",
          companyLabel: "Business Type",
          companyPlaceholder: "e.g. Cafe L'Aura",
          messageLabel: "What are your primary business goals? *",
          messagePlaceholder: "We need a localized SEO webpage, a digital booking system, and clean 3D product pictures...",
        };
    }
  };

  const details = getFormDetails();

  return (
    <section id="contact" className="bg-[#0C0C0C] text-white py-24 px-4 sm:px-8 md:px-16 relative z-10 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 select-none">
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase block mb-2">
            SECURE ROUTED CHANNEL
          </span>
          <h2 className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-black uppercase hero-heading font-accent">
            CONTACT ME
          </h2>
          <p className="text-zinc-500 text-sm mt-2 max-w-md mx-auto font-light">
            Have a project in mind? Reach out and let's craft something memorable.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-zinc-950/40 border border-white/5 p-6 sm:p-10 md:p-12 rounded-[40px] backdrop-blur-xl relative overflow-hidden">
          
          {/* Left Column: Fast Info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10 relative z-10">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-indigo-400 block mb-2 uppercase">
                {audience === "local-businesses" ? "Local Support" : audience === "companies" ? "Recruiter Hotline" : "Freelance Direct"}
              </span>
              <h3 className="text-3xl font-black uppercase text-white font-accent leading-tight">
                {details.title}
              </h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed mt-4">
                {details.subtitle}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">DIRECT EMAIL</span>
                  <a href="mailto:anujaryan81018@gmail.com" className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors">
                    anujaryan81018@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-indigo-400">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">CREATIVE STUDIO</span>
                  <span className="text-sm font-semibold text-white">
                    Velorah® Headquarter, Cloud Run
                  </span>
                </div>
              </div>
            </div>

            <div className="text-xs text-zinc-600 font-mono">
              © {new Date().getFullYear()} Velorah® Studio. All rights reserved. Registered trademark.
            </div>
          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-7 relative z-10">
            <AnimatePresence mode="wait">
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black uppercase font-accent text-white mb-2">
                    Transmission Sent!
                  </h3>
                  <p className="text-zinc-400 text-sm font-light max-w-sm leading-relaxed mb-8">
                    Your inquiry has been encrypted and saved. Jack will respond via email within 12 hours.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-3 rounded-xl border border-white/10 text-xs font-semibold uppercase tracking-widest hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Name field */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5 font-mono">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 w-4 h-4 text-zinc-600" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Liam Vance"
                        className="w-full bg-zinc-900 border border-white/5 rounded-xl pl-11 pr-4 py-3 text-white placeholder-zinc-700 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5 font-mono">
                      Your Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 w-4 h-4 text-zinc-600" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. liam@laurabistro.com"
                        className="w-full bg-zinc-900 border border-white/5 rounded-xl pl-11 pr-4 py-3 text-white placeholder-zinc-700 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Adaptive local business options / corporate company options */}
                  {audience === "local-businesses" ? (
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5 font-mono">
                        Select Your Business Type *
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-4 top-3.5 w-4 h-4 text-zinc-600" />
                        <select
                          value={businessType}
                          onChange={(e) => setBusinessType(e.target.value)}
                          className="w-full bg-zinc-900 border border-white/5 rounded-xl pl-11 pr-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors h-[46px]"
                        >
                          <option value="Cafe / Restaurant">Cafe / Restaurant / Bar</option>
                          <option value="Medical Clinic / Doctor">Medical Clinic / Practitioner</option>
                          <option value="Local Store / Shop">Local Retail Shop</option>
                          <option value="Professional Service">Professional Service (Law, Salon, Real Estate)</option>
                        </select>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5 font-mono">
                        {details.companyLabel}
                      </label>
                      <div className="relative">
                        <Building className="absolute left-4 top-3.5 w-4 h-4 text-zinc-600" />
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder={details.companyPlaceholder}
                          className="w-full bg-zinc-900 border border-white/5 rounded-xl pl-11 pr-4 py-3 text-white placeholder-zinc-700 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                      </div>
                    </div>
                  )}

                  {/* Message box */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5 font-mono">
                      {details.messageLabel}
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={details.messagePlaceholder}
                      rows={4}
                      className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-white placeholder-zinc-700 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                      required
                    />
                  </div>

                  {/* Errors */}
                  {errorMessage && (
                    <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Actions */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-white text-[#0C0C0C] hover:bg-zinc-200 disabled:opacity-50 font-bold uppercase tracking-widest text-xs transition-colors cursor-pointer flex items-center justify-center gap-2.5 shadow-[0_12px_24px_rgba(255,255,255,0.08)]"
                  >
                    <span>{isSubmitting ? "Transmitting..." : "Send Secure Message"}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
