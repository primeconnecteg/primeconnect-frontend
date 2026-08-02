"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

interface BottomCtaProps {
  onOpenBooking: () => void;
}

export default function BottomCta({ onOpenBooking }: BottomCtaProps) {
  return (
    <section className="py-16 bg-[#F2F4F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl border border-[#075CE0]/30"
        >
          {/* Left Column: Cobalt to Prime Blue Banner */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#075CE0] to-[#082A78] p-10 sm:p-16 flex flex-col justify-between space-y-8 text-white">
            <div className="space-y-4">
              <span className="px-3.5 py-1 rounded-full bg-[#04143F] text-[#08BEEA] text-xs font-bold uppercase tracking-wider inline-block border border-[#08BEEA]/30">
                Start Today
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight leading-tight">
                Shoot your BPO growth into a new era, start now.
              </h2>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-full bg-[#08BEEA] text-[#04143F] font-bold text-base hover:bg-white transition-all shadow-xl hover:scale-105 cursor-pointer flex items-center gap-3"
              >
                <PhoneCall className="w-5 h-5 text-[#04143F]" />
                <span>Book a Discovery Call</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Deep Navy Operational Graphic */}
          <div className="lg:col-span-6 bg-[#04143F] relative min-h-[300px] flex items-center justify-center p-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#082A78]/80 to-[#04143F]/95 z-10" />
            <img
              src="https://media.base44.com/images/public/6a3c9e0bbe44e670a2fbd924/c60ca56b5_generated_d880987d.png"
              alt="Prime Connect Global Operations"
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
            />
            <div className="relative z-20 text-center space-y-3 p-6 bg-[#04143F]/80 backdrop-blur-md rounded-2xl border border-[#075CE0]/30 max-w-sm">
              <span className="text-2xl font-black text-[#08BEEA] font-heading">
                Prime Connect EG
              </span>
              <p className="text-xs text-slate-300">
                Cairo, Egypt · Connecting Elite Talent with Global Markets
              </p>
              <p className="text-[10px] uppercase tracking-widest text-[#08BEEA] font-mono">
                5 Launch Partner Slots Remaining
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

