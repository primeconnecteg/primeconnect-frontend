"use client";

import React from "react";
import { motion } from "framer-motion";
import { DollarSign, GraduationCap, Clock, MessageSquare, Database } from "lucide-react";

export default function WhyPrime() {
  return (
    <section id="why-egypt" className="py-24 bg-[#F2F4F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1 rounded-full cyan-badge text-xs font-bold uppercase tracking-wider inline-block">
            The Advantage
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A0C0D] tracking-tight font-heading leading-tight">
            Why Egypt? Why <span className="brand-underline text-[#075CE0]">Prime Connect</span>?
          </h2>
          <p className="text-base sm:text-lg text-[#5F6C7C] font-sans leading-relaxed">
            Our base in Egypt gives your company a decisive edge: an educated, English-fluent talent pool, cost structures that outperform Western alternatives, and a geographic position bridging global time zones.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Cost Savings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="framer-card p-8 md:col-span-2 flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#075CE0]/10 text-[#075CE0] flex items-center justify-center mb-6">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <span className="text-4xl sm:text-5xl font-black text-[#0A0C0D] font-heading tracking-tight">
                30–40%
              </span>
              <h3 className="text-xl font-bold text-[#0A0C0D] mt-2 mb-1">
                Direct Cost Savings
              </h3>
              <p className="text-sm text-[#5F6C7C] leading-relaxed">
                Outperform US/UK equivalent sales and client acquisition expenses while maintaining top-tier operational quality.
              </p>
            </div>
          </motion.div>

          {/* Card 2: English Talent Pool */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="framer-card p-8 flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#08BEEA]/15 text-[#082A78] flex items-center justify-center mb-6">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0A0C0D] mb-2">
                English-Fluent Talent
              </h3>
              <p className="text-xs text-[#5F6C7C] leading-relaxed">
                University-educated workforce with high proficiency in technical, sales, and customer operations.
              </p>
            </div>
          </motion.div>

          {/* Card 3: UTC+3 Time Zone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="framer-card p-8 flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#075CE0]/10 text-[#075CE0] flex items-center justify-center mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-black text-[#0A0C0D] font-heading">
                UTC+3 Time Zone
              </span>
              <h3 className="text-base font-bold text-[#0A0C0D] mt-1 mb-1">
                Strategic Bridge
              </h3>
              <p className="text-xs text-[#5F6C7C] leading-relaxed">
                Operate within single-day overlapping hours for both GCC and US East Coast business operations.
              </p>
            </div>
          </motion.div>

          {/* Card 4: CRM Dashboard & Infrastructure Mockup (Large Deep Navy Spanning Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="framer-card p-8 md:col-span-2 lg:col-span-3 flex flex-col justify-between bg-[#04143F] text-white relative overflow-hidden shadow-xl"
          >
            <div className="flex items-center justify-between mb-6 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#075CE0] flex items-center justify-center text-white font-bold">
                  <Database className="w-5 h-5 text-[#08BEEA]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">CRM Infrastructure Active</h3>
                  <p className="text-xs text-[#08BEEA]">Powered by All States Careers</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#08BEEA]/20 text-[#08BEEA] text-xs font-semibold">
                Live Onboarding
              </span>
            </div>

            {/* Mock Code & Metrics Widget */}
            <div className="bg-[#082A78] rounded-2xl p-4 font-mono text-xs text-white border border-[#075CE0]/30 space-y-2 mb-6 z-10">
              <div className="flex items-center justify-between text-slate-300 pb-2 border-b border-white/10">
                <span>// Pipeline Status: Active</span>
                <span className="text-[#08BEEA]">All States Integration</span>
              </div>
              <p className="text-[#08BEEA]">✓ Prospect Qualification Engine: Active</p>
              <p className="text-white">➜ Client Onboarding: Transferring to Dedicated CRM</p>
              <p className="text-slate-300">➜ Weekly Analytics & Escalation Handling: Enabled</p>
            </div>

            <p className="text-xs text-slate-300 z-10">
              Every signed client enters a structured CRM from Day 1 with dedicated weekly reporting and issue resolution protocols.
            </p>
          </motion.div>

          {/* Card 5: Neutral Accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="framer-card p-8 flex flex-col justify-between"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#075CE0]/10 text-[#075CE0] flex items-center justify-center mb-6">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0A0C0D] mb-1">
                Neutral Accent
              </h3>
              <p className="text-xs text-[#5F6C7C] leading-relaxed">
                Clear, professional communication tailored for Western and GCC executive decision-makers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


