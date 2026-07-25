"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DollarSign, GraduationCap, Clock, MessageSquare } from "lucide-react";

export default function WhyEgypt() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: DollarSign,
      stat: "30-40%",
      label: "Cost Savings",
      desc: "vs US/UK equivalent services",
    },
    {
      icon: GraduationCap,
      stat: "English-Fluent",
      label: "Talent Pool",
      desc: "University-educated workforce",
    },
    {
      icon: Clock,
      stat: "UTC+3",
      label: "Time Zone Bridge",
      desc: "Bridges GCC & US East Coast hours",
    },
    {
      icon: MessageSquare,
      stat: "Neutral Accent",
      label: "Communication",
      desc: "Professional communication style",
    },
  ];

  return (
    <section id="why-egypt" className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, type: "spring", damping: 20 }}
          >
            <p className="text-[#F4821F] font-semibold tracking-[0.15em] uppercase text-sm mb-3">
              The Advantage
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0a192f] leading-tight mb-6">
              Why Egypt? <br />
              Why <span className="text-[#F4821F]">Prime Connect</span>?
            </h2>
            <p className="text-[#0a192f]/60 text-lg leading-relaxed mb-10">
              Our base in Egypt gives your company a decisive edge: a highly educated, English-fluent talent pool, cost structures that outperform Western alternatives, and a geographic position that bridges time zones within a single working day.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((item, i) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="bg-white rounded-xl p-5 shadow-lg shadow-[#0a192f]/5 border border-[#0a192f]/5 hover:border-[#F4821F]/20 transition-colors duration-300"
                  >
                    <IconComp className="w-6 h-6 text-[#F4821F] mb-3" />
                    <p className="text-2xl font-black text-[#0a192f]">{item.stat}</p>
                    <p className="text-sm font-semibold text-[#0a192f] mt-1">{item.label}</p>
                    <p className="text-xs text-[#0a192f]/50 mt-1">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F4821F]/20 to-[#0a192f]/20 rounded-3xl blur-3xl" />
              <img
                src="https://media.base44.com/images/public/6a3c9e0bbe44e670a2fbd924/cc6763bc7_generated_6581d8a0.png"
                alt="Modern Egyptian architectural visualization"
                className="relative rounded-3xl w-full max-w-md shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
