"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Cpu, Zap, ShieldCheck } from "lucide-react";

export default function WhyPrime() {
  const differentiators = [
    {
      icon: Layers,
      title: "Turnkey EPC Execution",
      desc: "Single point of contact managing everything from civil mounting gantries to optical OCR cameras and TOS software middleware."
    },
    {
      icon: Cpu,
      title: "Industrial-Grade Hardening",
      desc: "All hardware components are IP66/IP67 rated, marine-grade anti-corrosive coated, and rated for extreme environments."
    },
    {
      icon: Zap,
      title: "Native TOS & ERP Integration",
      desc: "Pre-built middleware connectors for Navis N4, COSMOS, CyberLogitec, SAP, and Oracle ERP systems with zero latency."
    },
    {
      icon: ShieldCheck,
      title: "Zero-Downtime Architecture",
      desc: "N+2 redundant power supplies, failover fiber loops, and hot-swappable optical sensor arrays for 99.99% continuity."
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#F2F4F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <span className="text-xs font-bold tracking-widest text-[#075CE0] uppercase bg-[#075CE0]/10 px-3 py-1.5 rounded-full">
            Enterprise Architecture
          </span>
          <h2 className="heading-section">
            Good-bye to traditional <br/>
            <span className="hand-underline">infrastructure hassle.</span>
          </h2>
          <p className="text-lg text-[#5F6C7C] max-w-2xl mx-auto">
            Say farewell to the complexities of the past and unlock a smoother path to successful port and facility integration. Welcome to a new era of engineering simplicity.
          </p>
        </div>

        {/* Core Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((diff, idx) => {
            const IconComp = diff.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#0A0C0D]/5 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col items-start gap-6 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F2F4F7] flex items-center justify-center text-[#0A0C0D] group-hover:bg-[#075CE0] group-hover:text-white transition-colors">
                  <IconComp className="w-6 h-6" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#0A0C0D] tracking-tight">
                    {diff.title}
                  </h3>
                  <p className="text-[14px] text-[#5F6C7C] leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
