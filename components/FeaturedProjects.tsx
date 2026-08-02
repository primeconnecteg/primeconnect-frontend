"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  CheckCircle2,
  Building,
  Shield,
  Layers,
  ArrowRight,
  TrendingUp,
  X,
  FileText
} from "lucide-react";

interface FeaturedProjectsProps {
  onOpenBooking: () => void;
}

export default function FeaturedProjects({ onOpenBooking }: FeaturedProjectsProps) {
  const [activeModalProject, setActiveModalProject] = useState<any | null>(null);

  const projects = [
    {
      id: "sokhna-ocr",
      title: "Sokhna Container Terminal Gate Automation",
      category: "Smart Ports & OCR",
      client: "Suez Canal Maritime Terminal Operator",
      image: "/images/port_hero.png",
      technologies: ["Container OCR", "LPR Cameras", "Navis N4 TOS API", "Driver Kiosks", "Industrial PLC"],
      challenge:
        "Truck queue bottlenecks exceeding 45 minutes at terminal entry gates caused by manual container code transcription, human entry errors, and disconnected TOS systems.",
      solution:
        "Deployed a turnkey 12-lane gate automation system with overhead optical container OCR gantries, high-speed LPR cameras, self-service touchscreen kiosks, and real-time Navis N4 TOS middleware integration.",
      outcome:
        "Gate processing time plummeted by 72% (from 4.5 minutes to under 0.75 minutes per container), achieving 99.98% OCR accuracy and zero gate congestion.",
      metrics: [
        { label: "Gate Speedup", val: "72% Reduction" },
        { label: "OCR Accuracy", val: "99.98%" },
        { label: "Lanes Automated", val: "12 Gate Lanes" }
      ]
    },
    {
      id: "expressway-lpr",
      title: "National Highway High-Speed LPR Network",
      category: "Transport & LPR",
      client: "Expressway & Toll Road Authority",
      image: "/images/lpr_gate.png",
      technologies: ["High-Speed LPR", "Pulsed IR Cameras", "Fiber Backbone", "Central Database Sync"],
      challenge:
        "Vehicle license plate scanning at speeds exceeding 120 km/h under varying weather and night lighting conditions for automated toll collecting.",
      solution:
        "Engineered an array of ultra-high-speed LPR cameras equipped with pulsed infrared illuminators connected via redundant fiber optic rings to a central data center.",
      outcome:
        "Processes over 1,200,000 vehicle scans daily with a 99.8% capture accuracy rate, enabling seamless automated tolling and instantaneous security alerts.",
      metrics: [
        { label: "Daily Scans", val: "1.2M Vehicles" },
        { label: "Scan Velocity", val: "120+ km/h" },
        { label: "Capture Rate", val: "99.8%" }
      ]
    },
    {
      id: "datacenter-banking",
      title: "Enterprise Tier-III Data Center Infrastructure",
      category: "IT Infrastructure",
      client: "Commercial Enterprise & Financial Hub",
      image: "/images/data_center.png",
      technologies: ["Tier-III Server Room", "APC/Schneider UPS", "Precision Cooling", "FM200 Fire System"],
      challenge:
        "Modernizing a legacy server room into an industrial-grade, zero-downtime private cloud infrastructure capable of supporting 200+ high-density server racks.",
      solution:
        "Delivered a turnkey Tier-III compliant server room featuring N+2 modular UPS power redundancy, precision CRAC cooling, FM200 clean-agent fire suppression, and Cat6A/OS2 fiber trunks.",
      outcome:
        "Achieved 100% continuous uptime across 3+ years of round-the-clock enterprise operation with energy PUE reduced to 1.38.",
      metrics: [
        { label: "SLA Uptime", val: "100.0%" },
        { label: "Racks Housed", val: "200+ Racks" },
        { label: "Compliance", val: "Tier-III Certified" }
      ]
    },
    {
      id: "maritime-soc",
      title: "Port Said Maritime Command & Security SOC",
      category: "CCTV & Security",
      client: "Maritime Port Authority Security Division",
      image: "/images/cctv_soc.png",
      technologies: ["300+ Thermal/Optical Cameras", "AI Perimeter Breach", "Milestone VMS", "4K Video Wall"],
      challenge:
        "Protecting a 15km coastal port perimeter against unauthorized night entry, vessel collisions, and cargo yard security threats.",
      solution:
        "Installed 300+ long-range thermal and optical PTZ cameras with AI perimeter intrusion analytics linked to a central 16-display video wall command room.",
      outcome:
        "Reduced security response time from 15 minutes to under 3 seconds, eliminating perimeter security breaches across the facility.",
      metrics: [
        { label: "Cameras Active", val: "300+ Thermal/4K" },
        { label: "Response Speed", val: "<3 Seconds" },
        { label: "Perimeter Range", val: "15 km Coastline" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#04143F] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082A78]/80 border border-[#08BEEA]/30 backdrop-blur-md">
            <Building className="w-4 h-4 text-[#08BEEA]" />
            <span className="text-xs font-semibold text-[#08BEEA] uppercase tracking-wider">
              Featured Case Studies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Proven Results in <span className="gradient-text">Major Deployments</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Explore how Prime Connect EG transforms port operations, high-speed highway networks, and enterprise data centers through turnkey engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="group rounded-2xl bg-[#082A78]/30 border border-white/10 hover:border-[#08BEEA]/50 backdrop-blur-xl transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-xl"
            >
              {/* Top Banner Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04143F] via-[#04143F]/50 to-transparent" />
                
                <span className="absolute top-4 left-4 text-xs font-mono font-bold text-white bg-[#075CE0] px-3 py-1 rounded-lg backdrop-blur-md">
                  {proj.category}
                </span>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
                  <span className="bg-[#04143F]/80 px-2.5 py-1 rounded font-semibold border border-white/10">
                    Client: {proj.client}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white font-heading group-hover:text-[#08BEEA] transition-colors">
                    {proj.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    <strong className="text-white">Solution Overview: </strong>{proj.solution}
                  </p>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2">
                  {proj.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono text-[#08BEEA] bg-[#082A78] px-2.5 py-1 rounded border border-[#08BEEA]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Metrics Banner */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10">
                  {proj.metrics.map((m, idx) => (
                    <div key={idx} className="bg-[#082A78]/50 p-2.5 rounded-lg border border-white/10 text-center">
                      <span className="text-[10px] text-slate-400 block uppercase font-medium">{m.label}</span>
                      <span className="text-xs font-bold text-white font-mono">{m.val}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action */}
                <div className="pt-2">
                  <button
                    onClick={() => setActiveModalProject(proj)}
                    className="w-full py-3 rounded-xl bg-[#075CE0]/80 hover:bg-[#075CE0] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Complete Case Study</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#04143F]/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#04143F] border border-white/20 rounded-2xl p-6 sm:p-8 max-w-3xl w-full shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#08BEEA] uppercase">
                  ENTERPRISE CASE STUDY
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs text-slate-300">Client: {activeModalProject.client}</p>
              </div>

              <div className="space-y-4">
                <div className="bg-[#082A78]/30 p-4 rounded-xl border border-white/10 space-y-2">
                  <h4 className="text-xs font-bold text-[#08BEEA] uppercase tracking-wider">
                    The Operational Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeModalProject.challenge}
                  </p>
                </div>

                <div className="bg-[#082A78]/30 p-4 rounded-xl border border-white/10 space-y-2">
                  <h4 className="text-xs font-bold text-[#08BEEA] uppercase tracking-wider">
                    Prime Connect Engineering Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeModalProject.solution}
                  </p>
                </div>

                <div className="bg-[#082A78]/30 p-4 rounded-xl border border-white/10 space-y-2">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Measured Outcome & Business Impact
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeModalProject.outcome}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {activeModalProject.metrics.map((m: any, i: number) => (
                  <div key={i} className="bg-[#075CE0]/30 p-3 rounded-xl border border-white/10 text-center">
                    <span className="text-[10px] text-slate-300 uppercase block font-medium">{m.label}</span>
                    <span className="text-sm font-bold text-white font-mono mt-0.5 block">{m.val}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setActiveModalProject(null);
                    onOpenBooking();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#075CE0] to-[#08BEEA] text-white text-xs font-bold shadow-lg cursor-pointer"
                >
                  Request Similar Project Proposal
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
