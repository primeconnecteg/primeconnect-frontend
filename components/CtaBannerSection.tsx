"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function CtaBannerSection() {
  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Banner Card Container */}
        <ScrollReveal direction="up">
          <div className="bg-[#082A78] text-white rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch shadow-2xl border border-blue-500/20">
            
            {/* Left Column */}
            <div className="lg:col-span-6 p-10 md:p-16 flex flex-col justify-between space-y-10 min-h-[380px]">
              <div className="space-y-4">
                <span className="bg-[#08BEEA] text-[#04143F] font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
                  PRIME CONNECT EG
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                  Scale your BPO into a new era,
                  <br />
                  start now.
                </h2>
              </div>

              <div>
                <a
                  href="#book-call"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-[#08BEEA] hover:bg-[#075CE0] text-[#04143F] hover:text-white font-extrabold text-sm rounded-full transition-all duration-200 shadow-lg active:scale-95"
                >
                  Book a Call with Yousef
                </a>
              </div>
            </div>

            {/* Right Column: Visual Image */}
            <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-full">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="BPO business development team working together"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
