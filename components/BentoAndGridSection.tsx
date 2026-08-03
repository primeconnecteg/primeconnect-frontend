"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function BentoAndGridSection() {
  const steps = [
    {
      num: "01",
      phase: "Acquisition Phase",
      title: "Discovery Call",
      desc: "30-min discovery call — your target profile documented and strategy aligned.",
    },
    {
      num: "02",
      phase: "Acquisition Phase",
      title: "Strategy Build",
      desc: "Custom outreach strategy built specifically for your market and ideal client profile.",
    },
    {
      num: "03",
      phase: "Acquisition Phase",
      title: "Outreach Begins",
      desc: "Multi-channel outreach begins within 7 business days of strategy approval.",
    },
    {
      num: "04",
      phase: "Integration Phase",
      title: "Qualified Prospects",
      desc: "Qualified, decision-maker-level prospects presented within 30 days.",
    },
    {
      num: "05",
      phase: "Integration Phase",
      title: "CRM Handoff",
      desc: "Signed clients transferred to your CRM environment immediately — structured and ready.",
    },
    {
      num: "06",
      phase: "Integration Phase",
      title: "Review & Scale",
      desc: "Monthly review calls to refine strategy, optimize targeting, and scale results.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        
        {/* Top Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-block">
              <span className="bg-[#082A78] text-[#08BEEA] font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
                THE PROCESS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#04143F] tracking-tight">
              From Discovery to Signed Clients
            </h2>
            <p className="text-[#5F6C7C] text-base md:text-lg leading-relaxed font-medium">
              A transparent, 6-step pipeline that takes you from initial conversation to a growing, managed client base.
            </p>
          </div>
        </ScrollReveal>

        {/* 6-Step Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <ScrollReveal key={step.num} direction="up" delay={0.1 * (idx % 3)}>
              <div className="bg-[#F2F4F7] rounded-3xl p-8 flex flex-col justify-between space-y-6 border border-gray-200/70 hover:border-[#075CE0] transition-all hover:shadow-xl group h-full">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-2xl bg-[#082A78] text-[#08BEEA] font-black text-lg flex items-center justify-center shadow-md">
                    {step.num}
                  </span>
                  <span className="text-[11px] font-bold text-[#075CE0] uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-blue-200">
                    {step.phase}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#04143F] group-hover:text-[#075CE0] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#5F6C7C] leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
