"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-32 bg-white relative border-t border-[#0A0C0D]/5">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        <h2 className="heading-display mb-10">
          Shoot your infrastructure <br/> into a new era, <span className="hand-underline">start now.</span>
        </h2>

        {submitted ? (
          <div className="bg-[#F2F4F7] border border-[#0A0C0D]/10 p-8 rounded-[2rem] max-w-md w-full animate-in fade-in zoom-in duration-300 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#075CE0] text-white flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0A0C0D] mb-2">Request Received</h3>
            <p className="text-[#5F6C7C] font-medium text-sm">
              Our engineering team will contact you shortly at {email}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-md relative flex items-center group">
            <input
              type="email"
              required
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-6 pr-32 py-4 rounded-xl bg-[#F2F4F7] border border-transparent text-[#0A0C0D] text-[15px] placeholder:text-[#5F6C7C] font-medium focus:outline-none focus:bg-white focus:border-[#075CE0] focus:ring-1 focus:ring-[#075CE0] transition-all shadow-inner"
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-2 top-2 bottom-2 px-6 rounded-xl bg-[#075CE0] text-white font-bold text-sm transition-all hover:bg-[#082A78] hover:scale-[1.02] active:scale-95 disabled:opacity-50 shadow-md shadow-[#075CE0]/20"
            >
              {loading ? "Sending..." : "Get started"}
            </button>
          </form>
        )}

      </div>
    </section>
  );
}
