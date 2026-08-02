"use client";

import React from "react";
import { Newspaper, ArrowRight, Clock, Tag } from "lucide-react";

export default function NewsSection() {
  const articles = [
    {
      title: "Accelerating Container Gate Throughput with Next-Gen Optical OCR",
      tag: "Port Automation",
      date: "February 2026",
      readTime: "5 min read",
      snippet:
        "How optical container OCR gantries integrated directly with Navis N4 TOS are eliminating truck queues and boosting port efficiency across Suez Canal terminals."
    },
    {
      title: "Designing Zero-Downtime Enterprise Fiber Optic Rings in Extreme Environments",
      tag: "IT Infrastructure",
      date: "January 2026",
      readTime: "7 min read",
      snippet:
        "A technical deep dive into single-mode fiber optic backbone redundancy, OTDR testing standards, and industrial surge protection for port cranes."
    },
    {
      title: "AI Video Analytics in Modern Security Operations Centers (SOC)",
      tag: "CCTV & Security",
      date: "January 2026",
      readTime: "6 min read",
      snippet:
        "Replacing passive CCTV monitoring with proactive thermal perimeter intrusion detection, automated object tracking, and instant alerts."
    }
  ];

  return (
    <section className="py-24 bg-[#04143F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082A78]/80 border border-[#08BEEA]/30 backdrop-blur-md">
            <Newspaper className="w-4 h-4 text-[#08BEEA]" />
            <span className="text-xs font-semibold text-[#08BEEA] uppercase tracking-wider">
              Technical Insights & Papers
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Enterprise <span className="gradient-text">Technology Whitepapers</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Read engineering insights from Prime Connect EG's system integration specialists.
          </p>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <div
              key={idx}
              className="bg-[#082A78]/30 border border-white/10 hover:border-[#08BEEA]/50 rounded-2xl p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#08BEEA] bg-[#04143F] px-2.5 py-1 rounded border border-[#08BEEA]/30 uppercase">
                    {art.tag}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {art.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-heading hover:text-[#08BEEA] transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {art.snippet}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#08BEEA] font-semibold cursor-pointer group">
                <span>Read Whitepaper</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
