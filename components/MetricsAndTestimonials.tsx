"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function MetricsAndTestimonials() {
  return (
    <section id="guarantee" className="py-24 bg-[#F2F4F7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        
        {/* Performance Guarantee Banner */}
        <ScrollReveal direction="up">
          <div className="bg-[#04143F] text-white rounded-3xl p-8 md:p-12 shadow-2xl relative border border-blue-500/20">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-block">
                <span className="bg-[#08BEEA] text-[#04143F] font-extrabold text-xs px-4 py-1 rounded-full uppercase tracking-wider">
                  OUR GUARANTEE
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                Our Performance Guarantee
              </h2>
              <blockquote className="text-lg md:text-2xl text-blue-100 font-medium italic leading-relaxed">
                &ldquo;We commit to delivering at least 3 qualified, decision-maker-level conversations within your first 45 days — or we continue at no additional cost until we do.&rdquo;
              </blockquote>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
