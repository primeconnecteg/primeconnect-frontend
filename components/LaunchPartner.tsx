"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, UserCheck, Database, FileText, Lock } from "lucide-react";

interface LaunchPartnerProps {
  onOpenBooking: () => void;
}

export default function LaunchPartner({ onOpenBooking }: LaunchPartnerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    { icon: Users, text: "Dedicated outreach team assigned to your account" },
    { icon: UserCheck, text: "Direct CEO access for strategic guidance" },
    { icon: Database, text: "Full CRM setup from day one" },
    { icon: FileText, text: "Weekly progress reports with full transparency" },
    { icon: Lock, text: "Locked-in launch rate for 12 months" },
  ];

  const handleScrollToYousef = () => {
    const el = document.querySelector("#yousef");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      onOpenBooking();
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#0a192f] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, type: "spring", damping: 20 }}
          className="text-center mb-16"
        >
          <p className="text-[#F4821F] font-semibold tracking-[0.15em] uppercase text-sm mb-3">
            Limited Availability
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Launch Partner Program
          </h2>
          <p className="breathe text-[#F4821F] text-xl md:text-2xl font-bold mt-6">
            Only 5 Launch Partner slots available — February 2026
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {items.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-[#F4821F]/30 transition-colors duration-300 flex flex-col items-center justify-center"
              >
                <IconComp className="w-8 h-8 text-[#F4821F] mx-auto mb-4" />
                <p className="text-white/80 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button
            onClick={handleScrollToYousef}
            className="px-10 py-4 bg-[#F4821F] text-[#0a192f] font-bold text-lg rounded-full hover:bg-[#F69947] transition-all duration-300 hover:scale-105 sonar-pulse shadow-lg shadow-[#F4821F]/30 cursor-pointer"
          >
            Claim Your Launch Partner Spot
          </button>
        </motion.div>
      </div>
    </section>
  );
}
