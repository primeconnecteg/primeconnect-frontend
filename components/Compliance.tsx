"use client";

import React from "react";
import { Award, Lock, CheckCircle2 } from "lucide-react";

export default function Compliance() {
  const certifications = [
    {
      title: "COPC Certified Training",
      status: "Completed",
      desc: "Customer Operations Performance Center (COPC) standards training completed. Our team is certified in high-performance contact center operations, quality management, and customer experience excellence — ensuring every client interaction meets global BPO benchmarks.",
      points: [
        "Contact center operations best practices",
        "Quality assurance & performance monitoring",
        "Customer experience (CX) excellence standards",
        "Process optimization & SLA management",
      ],
      icon: Award,
    },
    {
      title: "GDPR Certified Training",
      status: "Completed",
      desc: "General Data Protection Regulation (GDPR) compliance training completed. Our team is fully certified in data protection, privacy handling, and cross-border data transfer protocols — critical for serving clients in the UK, EU, and global markets.",
      points: [
        "Data protection & privacy compliance",
        "Cross-border data transfer protocols",
        "Client data handling & secure storage",
        "Breach response & accountability frameworks",
      ],
      icon: Lock,
    },
  ];

  return (
    <section id="compliance" className="py-24 md:py-32 bg-[#0a192f] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange-500 font-semibold tracking-[0.15em] uppercase text-sm mb-3">
            Certifications & Training
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Compliance You Can Trust
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => {
            const IconComp = cert.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-[#0a192f]/10 border border-[#0a192f]/5 text-slate-900"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 bg-[#0a192f]/5 rounded-xl flex items-center justify-center">
                    <IconComp className="w-7 h-7 text-[#0a192f]" />
                  </div>
                  <span className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    {cert.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#0a192f] mb-4">
                  {cert.title}
                </h3>
                <p className="text-[#0a192f]/60 leading-relaxed mb-6">
                  {cert.desc}
                </p>
                <div className="space-y-3">
                  {cert.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-3 text-sm text-[#0a192f]/80">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
