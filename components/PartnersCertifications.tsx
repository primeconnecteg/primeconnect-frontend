"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, CheckCircle2, Cpu, FileCheck } from "lucide-react";

export default function PartnersCertifications() {
  const partners = [
    { name: "Cisco Systems", cat: "Enterprise Networking & Security" },
    { name: "Honeywell", cat: "Industrial Control & Automation" },
    { name: "Siemens", cat: "PLC & SCADA Automation" },
    { name: "Hikvision", cat: "CCTV & Video Surveillance" },
    { name: "Schneider Electric", cat: "Data Center UPS & Power" },
    { name: "Bosch Security", cat: "Thermal Cameras & Access Control" },
    { name: "Axis Communications", cat: "IP Cameras & Optical OCR" },
    { name: "Zebra Technologies", cat: "Industrial Scanners & RFID" },
    { name: "Dahua Technology", cat: "LPR & AI Video Analytics" },
    { name: "Dell Technologies", cat: "Server Data Center Racks" }
  ];

  const certifications = [
    {
      code: "ISO 9001:2015",
      title: "Quality Management Systems",
      desc: "Certified turn-key engineering design, hardware procurement, and installation quality management standards."
    },
    {
      code: "ISO 27001",
      title: "Information Security Management",
      desc: "Rigorous data security protocols for smart port TOS integration, customer databases, and enterprise network nodes."
    },
    {
      code: "ISO 45001",
      title: "Occupational Health & Safety",
      desc: "Highest industrial safety standards enforced across port crane installations, high-voltage cabling, and site civil works."
    },
    {
      code: "Tier-III Certified",
      title: "Data Center Infrastructure Partner",
      desc: "Validated compliance with Tier-III concurrent maintainability for enterprise server rooms and mission-critical nodes."
    }
  ];

  return (
    <section id="partners" className="py-20 bg-[#04143F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082A78]/80 border border-[#08BEEA]/30 backdrop-blur-md">
            <Cpu className="w-4 h-4 text-[#08BEEA]" />
            <span className="text-xs font-semibold text-[#08BEEA] uppercase tracking-wider">
              Technology Ecosystem & Standards
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Global Tech Partners & <span className="gradient-text">ISO Certifications</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            We partner with the world's leading hardware manufacturers and maintain international ISO engineering certifications.
          </p>
        </div>

        {/* Continuous Animated Marquee of Technology Partners */}
        <div className="relative w-full overflow-hidden py-4 mb-16 bg-[#082A78]/20 border-y border-white/10 backdrop-blur-md">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#04143F] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#04143F] to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-8 whitespace-nowrap animate-marquee">
            {[...partners, ...partners].map((p, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#082A78]/60 border border-white/10 backdrop-blur-md shrink-0 hover:border-[#08BEEA]/50 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#08BEEA]" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white font-heading">{p.name}</span>
                  <span className="text-[10px] text-slate-400 font-mono">{p.cat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ISO Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((c, i) => (
            <div
              key={i}
              className="bg-[#082A78]/30 border border-white/10 hover:border-[#08BEEA]/40 rounded-2xl p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#075CE0]/30 border border-[#08BEEA]/30 flex items-center justify-center text-[#08BEEA]">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#08BEEA] bg-[#04143F] px-2.5 py-1 rounded border border-[#08BEEA]/30">
                    VERIFIED
                  </span>
                </div>

                <div>
                  <span className="text-lg font-bold text-white font-heading block">{c.code}</span>
                  <span className="text-xs font-semibold text-[#08BEEA] block mt-0.5">{c.title}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {c.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Compliant Execution</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
