"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Anchor,
  Truck,
  Building2,
  Factory,
  ShieldAlert,
  Navigation,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    {
      title: "Maritime Ports & Terminals",
      subtitle: "Container Terminals & Seaports",
      icon: Anchor,
      image: "/images/port_hero.png",
      stats: "500k+ Containers Scanned",
      desc: "Container OCR gantries, gate automation, weighbridges, and seamless TOS synchronization for container shipping ports.",
      highlights: ["Gate Automation", "Container OCR", "TOS Navis Integration"]
    },
    {
      title: "Logistics & Inland Freight Hubs",
      subtitle: "Dry Ports & Distribution Hubs",
      icon: Truck,
      image: "/images/lpr_gate.png",
      stats: "70% Faster Gate Turnover",
      desc: "License plate recognition, driver self-service kiosks, and automated barrier control for freight yards and bonded warehouses.",
      highlights: ["LPR Cameras", "Driver Kiosks", "Yard Management"]
    },
    {
      title: "Government & Critical Infrastructure",
      subtitle: "Defense & Strategic Facilities",
      icon: ShieldAlert,
      image: "/images/cctv_soc.png",
      stats: "24/7 Threat Protection",
      desc: "High-security perimeter intrusion detection, thermal CCTV analytics, biometrics, and centralized command and control rooms.",
      highlights: ["Thermal CCTV", "Perimeter Breach AI", "Command SOC"]
    },
    {
      title: "Industrial Manufacturing Complexes",
      subtitle: "Factories & Processing Plants",
      icon: Factory,
      image: "/images/data_center.png",
      stats: "Zero Unplanned Downtime",
      desc: "Industrial fiber optic backbones, SCADA PLC integration, high-density server rooms, and plant security access control.",
      highlights: ["SCADA Systems", "Industrial Fiber", "Biometric Access"]
    },
    {
      title: "Transportation & Toll Highways",
      subtitle: "Expressways & Bridge Tolls",
      icon: Navigation,
      image: "/images/lpr_gate.png",
      stats: "120 km/h LPR Capture",
      desc: "High-speed highway LPR camera networks, automated toll lane barriers, and central vehicle tracking databases.",
      highlights: ["High-Speed LPR", "Toll Automation", "Speed Enforcement"]
    },
    {
      title: "Enterprise Commercial Infrastructure",
      subtitle: "Corporate Towers & Campus HQ",
      icon: Building2,
      image: "/images/data_center.png",
      stats: "100 Gbps Core Networks",
      desc: "Tier-III server room construction, structured cabling, smart building automation, and visitor access turnstiles.",
      highlights: ["Tier-III Data Centers", "Structured Cabling", "Smart Access"]
    }
  ];

  return (
    <section id="industries" className="py-24 bg-[#04143F] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082A78]/80 border border-[#08BEEA]/30 backdrop-blur-md">
            <Building2 className="w-4 h-4 text-[#08BEEA]" />
            <span className="text-xs font-semibold text-[#08BEEA] uppercase tracking-wider">
              Industries Served
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Engineering Tailored to <span className="gradient-text">Critical Sectors</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            We deliver specialized hardware, software, and system integration tailored to the stringent operational needs of maritime, industrial, and government sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => {
            const IconComponent = ind.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-[#082A78]/30 border border-white/10 hover:border-[#08BEEA]/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col justify-between"
              >
                {/* Background Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04143F] via-[#04143F]/60 to-transparent" />
                  
                  {/* Top Stats Tag */}
                  <span className="absolute top-4 right-4 text-xs font-mono font-bold text-[#08BEEA] bg-[#04143F]/90 px-3 py-1 rounded-lg border border-[#08BEEA]/30 backdrop-blur-md shadow-lg">
                    {ind.stats}
                  </span>

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-[#075CE0] to-[#082A78] border border-[#08BEEA]/40 flex items-center justify-center text-white shadow-xl">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-[#08BEEA] uppercase tracking-wider block">
                      {ind.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#08BEEA] transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                    {ind.highlights.map((item, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold text-slate-200 bg-[#082A78]/70 px-2.5 py-1 rounded-md border border-white/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
