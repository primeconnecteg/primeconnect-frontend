"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Database, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

interface SolutionsSectionProps {
  onOpenBooking: () => void;
}

export default function SolutionsSection({ onOpenBooking }: SolutionsSectionProps) {
  const primaryServices = [
    {
      id: "client-acquisition",
      title: "BPO Client Acquisition",
      badge: "Core Growth Engine",
      icon: Target,
      tagline: "We identify, research, approach, and close end-clients for offshore BPO companies.",
      features: [
        "Multi-channel outreach via LinkedIn & Email",
        "Targeted lead identification & research",
        "Decision-maker level engagement & closing"
      ]
    },
    {
      id: "crm-management",
      title: "CRM Operations & Onboarding",
      badge: "Powered by All States Careers",
      icon: Database,
      tagline: "Structured onboarding, communication management, escalation handling, and weekly reporting.",
      features: [
        "Structured client onboarding from Day 1",
        "Dedicated CRM environment setup",
        "Weekly performance & progress reports"
      ]
    },
    {
      id: "guaranteed-growth",
      title: "Performance Guaranteed",
      badge: "Zero Financial Risk",
      icon: ShieldCheck,
      tagline: "At least 3 qualified, decision-maker conversations within 45 days or we work free.",
      features: [
        "Verified decision-maker meetings only",
        "45-Day performance deadline",
        "No additional cost until target met"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#F2F4F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1 rounded-full cyan-badge text-xs font-bold uppercase tracking-wider inline-block">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A0C0D] tracking-tight font-heading leading-tight">
            The Dual-Engine <span className="brand-underline text-[#075CE0]">Strategy</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5F6C7C] font-sans leading-relaxed">
            Say goodbye to client acquisition hassles. Two integrated engines take your BPO firm from searching for clients to managing thriving partnerships.
          </p>
        </div>

        {/* Framer Style Bento Cards in Deep Navy & Prime Blue */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {primaryServices.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#04143F] text-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group shadow-xl border border-[#075CE0]/30 hover:border-[#08BEEA]/50 transition-all hover:scale-[1.01]"
              >
                <div>
                  {/* Circular Icon Header */}
                  <div className="w-14 h-14 rounded-2xl bg-[#082A78] text-[#08BEEA] flex items-center justify-center mb-6 shadow-md border border-[#075CE0]/40">
                    <IconComp className="w-7 h-7" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#08BEEA] block mb-2 font-mono">
                    {service.badge}
                  </span>

                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight font-heading">
                    {service.title}
                  </h3>

                  <p className="text-sm font-normal text-slate-300 leading-relaxed mb-6">
                    {service.tagline}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-white/10">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs font-semibold text-white">
                        <CheckCircle2 className="w-4 h-4 text-[#08BEEA] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#075CE0] hover:bg-[#082A78] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 text-[#08BEEA]" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


