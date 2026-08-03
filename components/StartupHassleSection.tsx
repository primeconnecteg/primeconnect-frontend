"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

function ServiceIcon({ title }: { title: string }) {
  if (title.includes("Acquisition")) {
    return (
      <svg className="w-6 h-6 text-[#08BEEA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    );
  }
  if (title.includes("CRM")) {
    return (
      <svg className="w-6 h-6 text-[#08BEEA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  return (
    <svg className="w-6 h-6 text-[#08BEEA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function StartupHassleSection() {
  return (
    <section id="what-we-do" className="py-24 bg-white relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-block">
              <span className="bg-[#082A78] text-[#08BEEA] font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#04143F] tracking-tight leading-tight">
              The Dual-Engine Strategy
            </h2>
            <p className="text-[#5F6C7C] text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
              Two integrated services that take your BPO company from searching for clients to managing thriving partnerships.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Strategy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: BPO Client Acquisition */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="bg-[#082A78] text-white rounded-3xl p-8 flex flex-col justify-between min-h-[380px] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full">
              <div className="w-12 h-12 rounded-full bg-[#04143F] flex items-center justify-center mb-8 border border-[#08BEEA]/30">
                <ServiceIcon title="Acquisition" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white tracking-tight leading-snug">
                  BPO Client Acquisition
                </h3>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-normal">
                  We identify, research, approach, and close new end-clients on behalf of offshore outsourcing companies. Multi-channel outreach via LinkedIn, email, and direct campaigns.
                </p>
                <ul className="text-xs text-[#08BEEA] space-y-1.5 font-semibold pt-2">
                  <li className="flex items-center gap-2">✓ Targeted lead identification & research</li>
                  <li className="flex items-center gap-2">✓ LinkedIn & email outreach campaigns</li>
                  <li className="flex items-center gap-2">✓ Decision-maker engagement & closing</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: CRM Integration & Management */}
          <ScrollReveal direction="up" delay={0.25}>
            <div className="bg-[#075CE0] text-white rounded-3xl p-8 flex flex-col justify-between min-h-[380px] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full">
              <div className="w-12 h-12 rounded-full bg-[#04143F] flex items-center justify-center mb-8 border border-white/20">
                <ServiceIcon title="CRM" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white tracking-tight leading-snug">
                  CRM Integration & Management
                </h3>
                <p className="text-xs md:text-sm text-gray-100 leading-relaxed font-normal">
                  Every signed client enters a structured CRM from day one. Communication management, escalation handling, weekly reporting.
                </p>
                <p className="text-[11px] font-bold text-[#08BEEA] uppercase tracking-wider">
                  Powered by All States Careers
                </p>
                <ul className="text-xs text-white space-y-1.5 font-semibold pt-1">
                  <li className="flex items-center gap-2">✓ Structured client onboarding</li>
                  <li className="flex items-center gap-2">✓ Escalation handling & resolution</li>
                  <li className="flex items-center gap-2">✓ Weekly performance reporting</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Performance Guarantee */}
          <ScrollReveal direction="up" delay={0.4}>
            <div className="bg-[#04143F] text-white rounded-3xl p-8 flex flex-col justify-between min-h-[380px] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-500/20 h-full">
              <div className="w-12 h-12 rounded-full bg-[#082A78] flex items-center justify-center mb-8 border border-[#08BEEA]/40">
                <ServiceIcon title="Guarantee" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white tracking-tight leading-snug">
                  Performance Guarantee
                </h3>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-normal">
                  We commit to delivering at least 3 qualified, decision-maker-level conversations within your first 45 days — or we continue at no additional cost until we do.
                </p>
                <ul className="text-xs text-[#08BEEA] space-y-1.5 font-semibold pt-2">
                  <li className="flex items-center gap-2">✓ 45-day guaranteed milestone</li>
                  <li className="flex items-center gap-2">✓ Qualified decision-makers only</li>
                  <li className="flex items-center gap-2">✓ Zero risk growth commitment</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
