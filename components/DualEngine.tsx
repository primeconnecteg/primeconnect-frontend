"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Database } from "lucide-react";

export default function DualEngine() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="what-we-do" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, type: "spring", damping: 20 }}
          className="mb-16"
        >
          <p className="text-[#F4821F] font-semibold tracking-[0.15em] uppercase text-sm mb-3">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a192f] leading-tight mb-4">
            The Dual-Engine <br />
            <span className="text-[#F4821F]">Strategy</span>
          </h2>
          <p className="text-[#0a192f]/60 text-lg max-w-2xl">
            Two integrated services that take your BPO company from searching for clients to managing thriving partnerships.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: BPO Client Acquisition */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, type: "spring", damping: 20 }}
            className="group bg-[#0a192f] rounded-2xl p-8 md:p-10 h-full hover:scale-[1.02] transition-transform duration-500 shadow-xl shadow-[#0a192f]/20 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-[#F4821F]/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#F4821F]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                BPO Client Acquisition
              </h3>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                We identify, research, approach, and close new end-clients on behalf of offshore outsourcing companies. Multi-channel outreach via LinkedIn, email, and direct campaigns.
              </p>
              <div className="space-y-3 text-sm text-white/50">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#F4821F] rounded-full" />
                  <span>Targeted lead identification & research</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#F4821F] rounded-full" />
                  <span>LinkedIn & email outreach campaigns</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#F4821F] rounded-full" />
                  <span>Decision-maker engagement & closing</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: CRM Integration & Management */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, type: "spring", damping: 20 }}
            className="group bg-white border-2 border-[#0a192f]/10 rounded-2xl p-8 md:p-10 h-full hover:scale-[1.02] transition-transform duration-500 shadow-xl shadow-[#0a192f]/5 hover:border-[#F4821F]/30 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 bg-[#0a192f]/5 rounded-xl flex items-center justify-center mb-6">
                <Database className="w-7 h-7 text-[#0a192f]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a192f] mb-4">
                CRM Integration & Management
              </h3>
              <p className="text-[#0a192f]/60 text-base leading-relaxed mb-4">
                Every signed client enters a structured CRM from day one. Communication management, escalation handling, weekly reporting.
              </p>
              <p className="text-xs text-[#F4821F] font-semibold tracking-wider uppercase mb-6">
                Powered by All States Careers
              </p>
              <div className="space-y-3 text-sm text-[#0a192f]/60">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#0a192f] rounded-full" />
                  <span>Structured client onboarding from day one</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#0a192f] rounded-full" />
                  <span>Escalation handling & issue resolution</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#0a192f] rounded-full" />
                  <span>Weekly performance reporting</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
