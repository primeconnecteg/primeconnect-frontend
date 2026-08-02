"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Compass,
  Cpu,
  Wrench,
  Layers,
  CheckCircle2,
  Headphones,
  ArrowRight,
  ChevronRight
} from "lucide-react";

export default function BusinessProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Consultation & Site Survey",
      subtitle: "Discovery & Operational Assessment",
      icon: FileText,
      desc: "Our senior integration engineers conduct comprehensive on-site surveys, evaluating truck traffic flow, existing gate mechanics, lighting conditions, network backbone topology, and TOS software interfaces."
    },
    {
      num: "02",
      title: "Feasibility & Architecture Planning",
      subtitle: "Blueprint & Specs",
      icon: Compass,
      desc: "We engineer precise CAD blueprints, camera optical line-of-sight calculations, electrical load distributions, optical fiber ring topologies, and high-level software API integration schemas."
    },
    {
      num: "03",
      title: "Engineering & Procurement",
      subtitle: "Industrial Sourcing",
      icon: Cpu,
      desc: "Procurement of industrial-grade OCR cameras, pulse illuminators, heavy-duty barrier arms, server racks, and PLC control cabinets from verified partners (Cisco, Siemens, Honeywell, Hikvision)."
    },
    {
      num: "04",
      title: "On-Site Installation & Mounting",
      subtitle: "Civil & Hardware Assembly",
      icon: Wrench,
      desc: "Our field engineering teams execute civil mounting gantries, trenching, fiber optic fusion splicing, IP camera calibration, and electrical cabinet wiring with strict ISO 45001 safety standards."
    },
    {
      num: "05",
      title: "TOS & ERP Middleware Integration",
      subtitle: "Hardware-to-Software Sync",
      icon: Layers,
      desc: "Deployment of Prime Connect's high-speed OCR/LPR middleware, configuring direct API endpoints with Navis N4, COSMOS, SAP, or custom port terminal databases with sub-second latency."
    },
    {
      num: "06",
      title: "Stress Testing & Commissioning",
      subtitle: "Validation & Calibration",
      icon: CheckCircle2,
      desc: "Rigorous 72-hour continuous live traffic testing, optical camera calibration under extreme night glare/rain conditions, and end-to-end failover validation prior to final handover."
    },
    {
      num: "07",
      title: "24/7 SLA Support & Maintenance",
      subtitle: "Lifecycle Operational SLA",
      icon: Headphones,
      desc: "Continuous remote node telemetry monitoring, scheduled preventative maintenance visits, emergency spare parts inventory, and guaranteed 4-hour on-site engineering response."
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#04143F] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082A78]/80 border border-[#08BEEA]/30 backdrop-blur-md">
            <Compass className="w-4 h-4 text-[#08BEEA]" />
            <span className="text-xs font-semibold text-[#08BEEA] uppercase tracking-wider">
              Turnkey Delivery Methodology
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
            Our End-to-End <span className="gradient-text">Engineering Lifecycle</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A structured, 7-stage execution process ensuring seamless integration, zero operational disruption, and guaranteed performance.
          </p>
        </div>

        {/* Step Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-12">
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                activeStep === idx
                  ? "bg-gradient-to-br from-[#075CE0] to-[#082A78] border-[#08BEEA] text-white shadow-lg shadow-[#075CE0]/30"
                  : "bg-[#082A78]/30 hover:bg-[#082A78]/60 border-white/10 text-slate-400"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold">{s.num}</span>
                {activeStep === idx && <span className="w-2 h-2 rounded-full bg-[#08BEEA] animate-pulse" />}
              </div>
              <span className="text-xs font-bold font-heading truncate mt-2 text-white">
                {s.title.split(" ")[0]} {s.title.split(" ")[1]}
              </span>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Display Card */}
        <div className="bg-[#082A78]/40 border border-white/15 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#08BEEA]/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Stage Details */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#075CE0] to-[#08BEEA] border border-white/20 flex items-center justify-center text-white shadow-lg">
                  {React.createElement(steps[activeStep].icon, { className: "w-7 h-7" })}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#08BEEA] bg-[#04143F] px-2.5 py-0.5 rounded border border-[#08BEEA]/30">
                      PHASE {steps[activeStep].num} OF 07
                    </span>
                    <span className="text-xs font-semibold text-slate-300">
                      {steps[activeStep].subtitle}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-base text-slate-200 leading-relaxed font-normal">
                {steps[activeStep].desc}
              </p>

              {/* Stage Progress Connector Bar */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    disabled={activeStep === 0}
                    className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-semibold disabled:opacity-30 cursor-pointer"
                  >
                    Previous Phase
                  </button>

                  <button
                    onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                    disabled={activeStep === steps.length - 1}
                    className="px-4 py-2 rounded-lg bg-[#075CE0] hover:bg-[#08BEEA] text-white text-xs font-semibold disabled:opacity-30 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Next Phase</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                  System Integration Guarantee Enabled
                </span>
              </div>
            </div>

            {/* Right Stage Summary Checklist */}
            <div className="lg:col-span-4 bg-[#04143F]/80 p-6 rounded-2xl border border-white/10 space-y-4">
              <span className="text-xs font-bold text-[#08BEEA] uppercase tracking-wider block">
                Deliverables & Quality Checks
              </span>

              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#08BEEA] shrink-0 mt-0.5" />
                  <span>ISO 9001 quality compliance documentation</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#08BEEA] shrink-0 mt-0.5" />
                  <span>Sub-second TOS API sync verification</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#08BEEA] shrink-0 mt-0.5" />
                  <span>Fluke OTDR certified optical fiber test report</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#08BEEA] shrink-0 mt-0.5" />
                  <span>Comprehensive user & operator training manuals</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
