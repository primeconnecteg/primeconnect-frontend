"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";

interface PerformanceGuaranteeProps {
  onOpenBooking: () => void;
}

export default function PerformanceGuarantee({ onOpenBooking }: PerformanceGuaranteeProps) {
  const metrics = [
    { value: "30–40%", label: "Direct Cost Savings" },
    { value: "3+", label: "Decision-Maker Conversations" },
    { value: "45 Days", label: "Performance Deadline" },
    { value: "5 Slots", label: "Launch Partner Program 2026" },
  ];

  return (
    <section id="guarantee" className="py-24 bg-[#F2F4F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="framer-card p-8 text-center flex flex-col items-center justify-center"
            >
              <span className="text-4xl sm:text-5xl font-black text-[#075CE0] font-heading tracking-tight">
                {m.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#5F6C7C] mt-2">
                {m.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Highlighted Guarantee Banner in Brand Gradient */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="brand-card p-10 md:p-14 relative overflow-hidden shadow-2xl"
        >
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#04143F] text-[#08BEEA] text-xs font-bold uppercase tracking-wider border border-[#08BEEA]/30">
              <ShieldCheck className="w-4 h-4 text-[#08BEEA]" />
              <span>Performance Guarantee</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading leading-snug">
              "We commit to delivering at least <span className="underline decoration-[#08BEEA] decoration-4">3 qualified, decision-maker-level conversations</span> within your first 45 days — or we continue at no additional cost until we do."
            </h2>

            <p className="text-sm sm:text-base font-medium text-slate-200 max-w-2xl mx-auto">
              Our confidence stems from a data-driven outreach engine combined with deep BPO domain expertise. You pay for results, not promises.
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-full bg-[#08BEEA] text-[#04143F] font-bold text-base hover:bg-white transition-all shadow-lg hover:scale-105 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Claim Your Guaranteed Growth Slot</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

