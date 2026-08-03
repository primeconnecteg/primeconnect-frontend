"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function CuttingEdgeFeatures() {
  return (
    <section id="why-egypt" className="py-24 bg-[#F2F4F7] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Advantage Pill & Section Title */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-block">
              <span className="bg-[#082A78] text-[#08BEEA] font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
                THE ADVANTAGE
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#04143F] tracking-tight leading-tight">
              Why Egypt?
              <br />
              Why Prime Connect?
            </h2>
            <p className="text-[#5F6C7C] text-base md:text-lg leading-relaxed font-medium">
              Our base in Egypt gives your company a decisive edge: a highly educated, English-fluent talent pool, cost structures that outperform Western alternatives, and a geographic position that bridges time zones within a single working day.
            </p>
          </div>
        </ScrollReveal>

        {/* 2 Big Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Feature Card: 30-40% Cost Savings */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="bg-white rounded-3xl p-8 md:p-10 flex flex-col justify-between space-y-8 border border-gray-200/80 shadow-lg h-full">
              
              {/* Visual Graphic Display */}
              <div className="flex flex-col gap-4 w-full md:relative md:h-72 md:flex-row md:gap-0 items-center justify-center pt-2 md:pt-4">
                
                {/* Floating Stat Card 1 */}
                <div className="w-full md:w-64 bg-[#04143F] text-white rounded-2xl p-5 md:p-6 shadow-2xl border border-blue-400/20 md:absolute md:left-4 md:top-4 z-10">
                  <span className="text-xs font-bold text-[#08BEEA] uppercase tracking-wider block">
                    COST ADVANTAGE
                  </span>
                  <span className="text-3xl md:text-4xl font-black text-white block mt-1">30-40%</span>
                  <span className="text-xs text-gray-300 font-medium block mt-1">
                    Savings vs US/UK equivalent services
                  </span>
                </div>

                {/* Floating Stat Card 2 */}
                <div className="w-full md:w-60 bg-[#082A78] text-white rounded-2xl p-5 shadow-xl border border-blue-300/20 md:absolute md:right-4 md:bottom-4 z-0">
                  <span className="text-xs font-bold text-[#08BEEA] uppercase tracking-wider block">
                    TALENT QUALITY
                  </span>
                  <span className="text-xl font-extrabold text-white block mt-1">English-Fluent</span>
                  <span className="text-xs text-gray-200 font-normal block mt-1">
                    University-educated workforce
                  </span>
                </div>

              </div>

              {/* Card Content Below Graphic */}
              <div className="space-y-2 pt-4">
                <h3 className="text-2xl font-bold text-[#082A78] tracking-tight">
                  Decisive Cost & Talent Scale
                </h3>
                <p className="text-sm text-[#5F6C7C] leading-relaxed">
                  Access a high-performing English-speaking business development force operating at a fraction of Western overhead costs.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Feature Card: Time Zone & Communication */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className="bg-white rounded-3xl p-8 md:p-10 flex flex-col justify-between space-y-8 border border-gray-200/80 shadow-lg h-full">
              
              {/* Visual Graphic Display */}
              <div className="flex flex-col gap-4 w-full md:relative md:h-72 md:flex-row md:gap-0 items-center justify-center pt-2 md:pt-4">
                
                {/* Floating Time Zone Card */}
                <div className="w-full md:w-64 bg-[#075CE0] text-white rounded-2xl p-5 shadow-xl border border-white/20 md:absolute md:left-4 md:top-2 z-0">
                  <span className="text-xs font-bold text-[#08BEEA] uppercase tracking-wider block">
                    GEOGRAPHIC BRIDGE
                  </span>
                  <span className="text-3xl font-black text-white block mt-1">UTC+3</span>
                  <span className="text-xs text-gray-100 font-medium block mt-1">
                    Bridges GCC & US East Coast working hours
                  </span>
                </div>

                {/* Front Floating Accent Card */}
                <div className="w-full md:w-64 bg-white rounded-2xl p-5 shadow-2xl border border-gray-200 md:absolute md:right-4 md:bottom-2 z-10 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#08BEEA] flex items-center justify-center text-[#04143F] font-bold text-xs">
                      ✓
                    </div>
                    <span className="text-xs font-bold text-[#082A78]">Neutral Accent</span>
                  </div>
                  <p className="text-xs text-[#5F6C7C] font-medium leading-normal">
                    Professional communication style tailored for US, UK, and GCC corporate clients.
                  </p>
                </div>

              </div>

              {/* Card Content Below Graphic */}
              <div className="space-y-2 pt-4">
                <h3 className="text-2xl font-bold text-[#082A78] tracking-tight">
                  Seamless Time Zone Alignment
                </h3>
                <p className="text-sm text-[#5F6C7C] leading-relaxed">
                  Connect with decision-makers seamlessly across North American, European, and Middle Eastern business hours.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
