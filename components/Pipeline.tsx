"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Pipeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      num: "01",
      title: "Discovery Call",
      desc: "30-min discovery call — your target profile documented and strategy aligned.",
      phase: "acquisition",
    },
    {
      num: "02",
      title: "Strategy Build",
      desc: "Custom outreach strategy built specifically for your market and ideal client profile.",
      phase: "acquisition",
    },
    {
      num: "03",
      title: "Outreach Begins",
      desc: "Multi-channel outreach begins within 7 business days of strategy approval.",
      phase: "acquisition",
    },
    {
      num: "04",
      title: "Qualified Prospects",
      desc: "Qualified, decision-maker-level prospects presented within 30 days.",
      phase: "integration",
    },
    {
      num: "05",
      title: "CRM Handoff",
      desc: "Signed clients transferred to your CRM environment immediately — structured and ready.",
      phase: "integration",
    },
    {
      num: "06",
      title: "Review & Scale",
      desc: "Monthly review calls to refine strategy, optimize targeting, and scale results.",
      phase: "integration",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#0a192f] text-white relative overflow-hidden">
      {/* Background Graphic Image */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <img
          src="https://media.base44.com/images/public/6a3c9e0bbe44e670a2fbd924/eb4cf7b7d_generated_3182ef40.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, type: "spring", damping: 20 }}
          className="mb-16"
        >
          <p className="text-[#F4821F] font-semibold tracking-[0.15em] uppercase text-sm mb-3">
            The Process
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            From Discovery to <br />
            <span className="text-[#F4821F]">Signed Clients</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl">
            A transparent, 6-step pipeline that takes you from initial conversation to a growing, managed client base.
          </p>
        </motion.div>

        <div className="max-w-2xl space-y-0">
          {steps.map((step, e) => {
            const isAcquisition = step.phase === "acquisition";
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: 80 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: e * 0.1, type: "spring", damping: 20 }}
                className="relative flex gap-6 md:gap-8"
              >
                <div className="flex flex-col items-center shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: e * 0.1 + 0.2 }}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm z-10 ${
                      isAcquisition
                        ? "bg-[#F4821F] text-[#0a192f]"
                        : "bg-[#0a192f] border border-white/20 text-white"
                    }`}
                  >
                    {step.num}
                  </motion.div>
                  {e < 5 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : {}}
                      transition={{ duration: 0.6, delay: e * 0.1 + 0.3 }}
                      className="w-0.5 flex-1 origin-top bg-gradient-to-b from-[#F4821F]/40 to-white/20 min-h-[40px]"
                    />
                  )}
                </div>

                <div className={`pb-12 ${e === 5 ? "pb-0" : ""}`}>
                  <p
                    className={`text-xs font-bold tracking-[0.15em] uppercase mb-2 ${
                      isAcquisition ? "text-[#F4821F]" : "text-white/40"
                    }`}
                  >
                    {isAcquisition ? "Acquisition Phase" : "Integration Phase"}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed max-w-md">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
