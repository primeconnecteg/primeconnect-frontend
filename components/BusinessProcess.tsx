"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall, Compass, Send, Users, Database, TrendingUp, CheckCircle2 } from "lucide-react";

export default function BusinessProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      phase: "Acquisition Phase",
      title: "Discovery Call",
      icon: PhoneCall,
      desc: "30-minute discovery call — your target profile is documented, ideal client persona created, and campaign strategy aligned."
    },
    {
      num: "02",
      phase: "Acquisition Phase",
      title: "Strategy Build",
      icon: Compass,
      desc: "Custom outreach strategy built specifically for your market, target geography (USA, UK, Canada, Australia, GCC), and service offering."
    },
    {
      num: "03",
      phase: "Acquisition Phase",
      title: "Outreach Begins",
      icon: Send,
      desc: "Multi-channel outreach begins within 7 business days of strategy approval, engaging decision-makers via LinkedIn and direct email."
    },
    {
      num: "04",
      phase: "Integration Phase",
      title: "Qualified Prospects",
      icon: Users,
      desc: "Qualified, decision-maker level conversations presented within 30 to 45 days for your team to meet and close."
    },
    {
      num: "05",
      phase: "Integration Phase",
      title: "CRM Handoff",
      icon: Database,
      desc: "Signed clients transferred to your CRM environment immediately — structured, organized, and ready for operations (Powered by All States Careers)."
    },
    {
      num: "06",
      phase: "Integration Phase",
      title: "Review & Scale",
      icon: TrendingUp,
      desc: "Monthly review calls to refine strategy, optimize outreach performance, increase volume, and scale your client base."
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#F3F3F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider border border-purple-200 inline-block">
            The Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
            From Discovery to <span className="purple-underline text-purple-600">Signed Clients</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            A transparent, 6-step pipeline taking you from initial conversation to a growing, managed client portfolio.
          </p>
        </div>

        {/* Pipeline Step Tabs (Framer Style) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                activeStep === idx
                  ? "bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-600/30 scale-[1.02]"
                  : "bg-white border-slate-200 text-slate-700 hover:border-purple-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-bold font-mono ${activeStep === idx ? "text-purple-200" : "text-purple-600"}`}>
                  STEP {s.num}
                </span>
                {activeStep === idx && <span className="w-2 h-2 rounded-full bg-[#B4F600] animate-pulse" />}
              </div>
              <span className="text-xs font-bold font-heading truncate mt-3">
                {s.title}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Step Display Card */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="framer-card p-8 md:p-12 border-slate-200/90 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-600/30">
                  {React.createElement(steps[activeStep].icon, { className: "w-8 h-8" })}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                    {steps[activeStep].phase} — STEP {steps[activeStep].num}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-heading mt-2">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    disabled={activeStep === 0}
                    className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold disabled:opacity-40 cursor-pointer transition-colors"
                  >
                    ← Previous Step
                  </button>
                  <button
                    onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                    disabled={activeStep === steps.length - 1}
                    className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold disabled:opacity-40 cursor-pointer transition-colors shadow-md"
                  >
                    Next Step →
                  </button>
                </div>
                <span className="text-xs font-medium text-slate-400">
                  Step {activeStep + 1} of 6 in Pipeline
                </span>
              </div>
            </div>

            {/* Stage Guarantee Checklist */}
            <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                Standard Operational Protocols
              </span>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>Target profile alignment & verification</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>Verified decision-maker contact discovery</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>Structured CRM handoff via All States Careers</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <span>Backstop with 45-Day Performance Guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

