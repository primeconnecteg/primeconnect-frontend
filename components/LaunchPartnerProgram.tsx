"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, UserCheck, Database, FileText, Lock, Sparkles, ArrowRight } from "lucide-react";

interface LaunchPartnerProps {
  onOpenBooking: () => void;
}

export default function LaunchPartnerProgram({ onOpenBooking }: LaunchPartnerProps) {
  const perks = [
    {
      icon: Users,
      title: "Dedicated Outreach Team",
      desc: "Full-time dedicated outbound sales representatives and researchers assigned to your account."
    },
    {
      icon: UserCheck,
      title: "Direct CEO Access",
      desc: "Direct strategic guidance and quarterly reviews with CEO Adel Alaa and co-founders."
    },
    {
      icon: Database,
      title: "Full CRM Setup from Day 1",
      desc: "Instant activation of All States Careers CRM environment for structured client pipeline management."
    },
    {
      icon: FileText,
      title: "Weekly Progress Reports",
      desc: "Transparent weekly analytics detailing leads contacted, response rates, and scheduled meetings."
    },
    {
      icon: Lock,
      title: "Locked-In Launch Rate",
      desc: "Lock in preferential early-partner pricing for a full 12-month contract period."
    },
    {
      icon: Sparkles,
      title: "Priority Lead Pipeline",
      desc: "First-tier access to high-intent decision-maker databases across US, UK, and GCC markets."
    }
  ];

  return (
    <section className="py-24 bg-[#F3F3F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider border border-purple-200 inline-block">
            Limited Availability — February 2026
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
            Launch Partner <span className="purple-underline text-purple-600">Program</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Only 5 Launch Partner slots available. Receive VIP onboarding, dedicated account teams, and locked-in rates.
          </p>
        </div>

        {/* 6 Grid items styled like Framer "And more is coming" section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perks.map((perk, idx) => {
            const IconComp = perk.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="framer-card p-8 flex items-start gap-5 hover:border-purple-300 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-[#B4F600] flex items-center justify-center shrink-0 shadow-md">
                  <IconComp className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    {perk.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {perk.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center mt-12">
          <button
            onClick={onOpenBooking}
            className="px-8 py-4 rounded-full bg-purple-600 text-white font-bold text-base hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/30 hover:scale-105 cursor-pointer inline-flex items-center gap-2"
          >
            <span>Claim 1 of 5 Launch Partner Slots</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
