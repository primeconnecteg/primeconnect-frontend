"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scan, Server, Camera, Layers, X, ArrowRight } from "lucide-react";

interface SolutionsSectionProps {
  onOpenBooking: () => void;
}

export default function SolutionsSection({ onOpenBooking }: SolutionsSectionProps) {
  const [activeSpecModal, setActiveSpecModal] = useState<any | null>(null);

  const solutions = [
    {
      id: "smart-ports",
      title: "Smart Port Container OCR",
      subtitle: "Automated Gate Integration",
      icon: Scan,
      image: "/images/port_hero.png",
      description: "Industrial-grade optical container OCR gantries, high-speed License Plate Recognition (LPR), automated barrier gates, and seamless Terminal Operating System (TOS) integration."
    },
    {
      id: "it-infrastructure",
      title: "Enterprise IT & Fiber",
      subtitle: "High-Density Data Centers",
      icon: Layers,
      image: "/images/data_center.png",
      description: "Turnkey enterprise networking solutions including single-mode fiber optic rings, Cat6A structured cabling, Cisco core routing, and Tier-III cooling."
    },
    {
      id: "cctv-security",
      title: "CCTV & Video Analytics",
      subtitle: "AI SOC Operations",
      icon: Camera,
      image: "/images/cctv_soc.png",
      description: "High-definition thermal and optical security cameras, AI video analytics for perimeter intrusion detection, and central SOC video walls."
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#075CE0] uppercase bg-[#075CE0]/10 px-3 py-1.5 rounded-full">
              SOLUTIONS
            </span>
            <h2 className="heading-section">
              Unlock your full potential with our <br/>
              <span className="hand-underline">cutting-edge systems.</span>
            </h2>
          </div>
        </div>

        {/* Solutions Grid - Bento Box Style Light Theme */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((sol) => {
            const IconComponent = sol.icon;
            return (
              <div
                key={sol.id}
                className="group relative rounded-3xl bg-[#F2F4F7] overflow-hidden flex flex-col transition-shadow hover:shadow-xl hover:shadow-[#082A78]/5"
              >
                {/* Content */}
                <div className="p-8 space-y-4 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#0A0C0D] mb-6 shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A0C0D] tracking-tight">
                    {sol.title}
                  </h3>
                  <p className="text-[15px] text-[#5F6C7C] leading-relaxed">
                    {sol.description}
                  </p>
                </div>

                {/* Bottom Image Banner */}
                <div className="mx-4 mb-4 relative h-56 rounded-2xl overflow-hidden bg-white shadow-inner">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <button 
                    onClick={() => setActiveSpecModal(sol)}
                    className="absolute bottom-4 right-4 z-20 px-4 py-2 rounded-full bg-white text-[#0A0C0D] font-semibold text-xs flex items-center gap-1 shadow-lg hover:scale-105 transition-transform cursor-pointer"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Very Minimal Spec Modal */}
      <AnimatePresence>
        {activeSpecModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0A0C0D]/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[2rem] p-8 max-w-lg w-full relative shadow-2xl"
            >
              <button
                onClick={() => setActiveSpecModal(null)}
                className="absolute top-6 right-6 text-[#5F6C7C] hover:text-[#0A0C0D] transition-colors bg-[#F2F4F7] p-2 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-12 h-12 rounded-xl bg-[#F2F4F7] flex items-center justify-center text-[#075CE0] mb-6">
                {React.createElement(activeSpecModal.icon, { className: "w-6 h-6" })}
              </div>
              <h3 className="text-3xl font-bold text-[#0A0C0D] mb-3 tracking-tight">
                {activeSpecModal.title}
              </h3>
              <p className="text-[#5F6C7C] text-base mb-8 leading-relaxed">
                {activeSpecModal.description}
              </p>
              
              <button
                onClick={() => {
                  setActiveSpecModal(null);
                  onOpenBooking();
                }}
                className="w-full py-4 rounded-xl bg-[#075CE0] text-white font-semibold transition-transform hover:scale-[1.02] shadow-lg shadow-[#075CE0]/20"
              >
                Request Technical Specs
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
