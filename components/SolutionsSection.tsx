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
      badge: "Core Service",
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
      title: "CRM Integration & Operations",
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
      badge: "Zero Risk",
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
    <section id="services" className="py-24 bg-[#F3F3F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-lime-400/20 text-slate-900 text-xs font-bold uppercase tracking-wider border border-lime-500/30 inline-block">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
            The Dual-Engine <span className="purple-underline text-purple-600">Strategy</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Say goodbye to client acquisition hassles. Two integrated engines take your BPO firm from searching for clients to managing thriving partnerships.
          </p>
        </div>

        {/* Framer Top 3 Lime Green Bento Cards */}
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
                className="lime-card p-8 flex flex-col justify-between relative overflow-hidden group shadow-lg"
              >
                <div>
                  {/* Circular Icon Header */}
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 text-[#B4F600] flex items-center justify-center mb-6 shadow-md">
                    <IconComp className="w-7 h-7" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800 opacity-80 block mb-2">
                    {service.badge}
                  </span>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight font-heading">
                    {service.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-800 leading-relaxed mb-6">
                    {service.tagline}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-slate-900/10">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs font-semibold text-slate-900">
                        <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3 px-4 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 text-[#B4F600]" />
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

