"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Prime Connect EG transformed our container terminal gate operations. Their optical OCR system achieved 99.98% accuracy from day one, reducing truck queue bottlenecks by over 70% during peak shipping hours.",
      author: "Eng. Mahmoud Hassan",
      role: "Terminal Operations Director, Suez Logistics"
    },
    {
      quote: "The Tier-III data center engineered by Prime Connect is exceptional. Zero downtime across 3 years of operation, flawless fiber optic cabling, and 24/7 technical field support whenever needed.",
      author: "Tarek Abdel-Rahman",
      role: "Chief Infrastructure Architect, Regional Bank"
    },
    {
      quote: "Their team integrated 300+ thermal cameras and AI perimeter analytics seamlessly into our central Security Operations Center. Incident response time dropped to under 3 seconds.",
      author: "Col. Sameh El-Sayed",
      role: "Head of Maritime Security, Port Command"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#F2F4F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <h2 className="heading-section">
              Real stories.<br/> <span className="hand-underline">Don’t take our word for it.</span>
            </h2>
          </div>
          <button
            className="w-full md:w-auto px-8 py-3.5 rounded-xl bg-white border border-[#0A0C0D]/10 text-[#0A0C0D] font-semibold text-[15px] transition-all hover:bg-[#F2F4F7] hover:border-[#0A0C0D]/20 flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Read all stories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Minimal Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#0A0C0D]/5 rounded-3xl p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-[17px] text-[#0A0C0D] font-medium leading-relaxed mb-10">
                "{t.quote}"
              </p>
              
              <div>
                <span className="block font-bold text-[#0A0C0D] text-[15px]">
                  {t.author}
                </span>
                <span className="block text-[#5F6C7C] font-medium text-sm mt-1">
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
