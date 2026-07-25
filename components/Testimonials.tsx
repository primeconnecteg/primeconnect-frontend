"use client";

import React from "react";
import { Quote, Star, Building, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Partner Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a192f] leading-tight mb-6">
            What Our Partners Say
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Trusted by global BPO leaders and outsourcing providers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-2xl relative">
            <Quote className="w-12 h-12 text-orange-500/30 mb-6" />
            
            <div className="flex items-center gap-1 text-amber-400 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-slate-800 font-medium leading-relaxed mb-8 italic">
              &quot;Working with Prime Connect EG has been an amazing experience. Their client hunting is effortless and precise — they make finding and closing new clients look easy. Their professional, fast-paced approach delivered results quicker than we expected. A truly reliable growth partner.&quot;
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
              <div>
                <h4 className="text-lg font-bold text-[#0a192f]">CEO & Founder</h4>
                <p className="text-sm font-semibold text-orange-600">All State Careers</p>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Infrastructure Partner — Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
