"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Calendar, ShieldCheck, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [formData, setFormData] = useState({ name: "", company: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#F3F3F6]">
      {/* Hand-drawn decorative background doodle graphic */}
      <div className="absolute top-20 right-10 opacity-30 hidden lg:block pointer-events-none z-0">
        <svg width="320" height="320" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 20L100 80M100 180L100 120M20 100L80 100M180 100L120 100M43 43L85 85M157 157L115 115M157 43L115 85M43 157L85 115"
            stroke="#7C3AED"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Launch Partner Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 p-1.5 pr-4 rounded-full bg-lime-400/20 border border-lime-500/30"
            >
              <span className="px-3 py-1 rounded-full bg-[#B4F600] text-slate-900 text-xs font-bold uppercase tracking-wider">
                Updates
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 flex items-center gap-1">
                Only 5 Launch Partner Slots Left for 2026 <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
              </span>
            </motion.div>

            {/* Main Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08] font-heading"
            >
              Egypt's Premier <br />
              <span className="purple-underline text-purple-600">BPO Growth</span> <br />
              Engine.
            </motion.h1>

            {/* Core Value Proposition Lines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-1 text-lg sm:text-xl font-medium text-slate-700 font-sans"
            >
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                <span>We find the clients.</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                <span>We close the deal.</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                <span>We run the relationship.</span>
              </p>
            </motion.div>

            {/* Social Proof & Target Markets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <div className="w-9 h-9 rounded-full bg-purple-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-xs">
                    YM
                  </div>
                  <div className="w-9 h-9 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-xs">
                    AA
                  </div>
                  <div className="w-9 h-9 rounded-full bg-lime-500 border-2 border-white flex items-center justify-center text-slate-900 text-xs font-bold shadow-xs">
                    YK
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500 font-medium">Verified Offshore Growth Partners</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating CTA Card */}
          <div className="lg:col-span-5 relative z-20 flex justify-center lg:justify-end w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-slate-200/80 relative"
            >
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Discovery Meeting</span>
                </div>
                <h3 className="text-2xl font-bold font-heading text-slate-900 tracking-tight">
                  Book a Call with Yousef Mattar
                </h3>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Business Development Manager at Prime Connect EG. Get custom outreach strategy & client acquisition roadmap.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-8 bg-purple-50 rounded-2xl border border-purple-200">
                  <CheckCircle2 className="w-10 h-10 text-purple-600 mx-auto mb-2" />
                  <p className="text-slate-900 font-bold text-lg">Meeting Request Received!</p>
                  <p className="text-xs text-slate-600 mt-1 max-w-xs mx-auto">
                    Yousef Mattar will confirm your 30-minute discovery call within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-600 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-600 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Business email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-600 transition-all"
                    />
                  </div>

                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="w-full py-3.5 rounded-2xl bg-purple-600 text-white font-bold text-base transition-all hover:bg-purple-700 shadow-lg shadow-purple-600/30 hover:shadow-xl hover:shadow-purple-600/40 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Select Date & Time</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center font-medium flex items-center justify-center gap-1 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
                    <span>Includes 45-Day Performance Guarantee</span>
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>

        {/* Global Target Markets Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-10 border-t border-slate-200/60"
        >
          <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            Connecting Offshore Talent with High-Growth Markets:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">
            {["USA 🇺🇸", "UK 🇬🇧", "Canada 🇨🇦", "Australia 🇦🇺", "GCC Countries 🇦🇪 🇸🇦 🇶🇦"].map((region) => (
              <span
                key={region}
                className="px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs hover:border-purple-300 transition-all"
              >
                {region}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

