"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="relative z-10 flex flex-col gap-4 items-center justify-center h-full text-center py-20">
        <h3 className="text-3xl font-bold">Message Sent!</h3>
        <p className="text-foreground/50 text-lg">Thanks for reaching out. I'll get back to you soon.</p>
        <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-8 rounded-full h-12 px-8">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form className="relative z-10 flex flex-col gap-8" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label className="font-mono text-xs tracking-widest uppercase text-foreground/40 pl-4">Name</label>
        <input 
          type="text" 
          name="name"
          required
          placeholder="What should I call you?" 
          className="w-full bg-background border border-border rounded-2xl px-6 py-4 text-lg outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-foreground/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-mono text-xs tracking-widest uppercase text-foreground/40 pl-4">Email</label>
        <input 
          type="email" 
          name="email"
          required
          placeholder="Where can I reach you?" 
          className="w-full bg-background border border-border rounded-2xl px-6 py-4 text-lg outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-foreground/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-mono text-xs tracking-widest uppercase text-foreground/40 pl-4">Message</label>
        <textarea 
          name="message"
          required
          placeholder="Tell me about your project..." 
          rows={4}
          className="w-full bg-background border border-border rounded-2xl px-6 py-4 text-lg outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-foreground/20 resize-none"
        />
      </div>
      
      {isError && (
        <p className="text-red-500 text-sm text-center font-medium">Something went wrong. Please check your API key and try again.</p>
      )}

      <Button disabled={isSubmitting} type="submit" className="w-full h-16 mt-4 text-lg rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all cursor-pointer disabled:opacity-50">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
