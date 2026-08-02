"use client";

import React from "react";

export default function AboutPrime() {
  const metrics = [
    {
      value: "500K+",
      label: "Containers processed",
      sub: "Daily optical scanning"
    },
    {
      value: "150+",
      label: "Enterprise projects",
      sub: "Successfully deployed"
    },
    {
      value: "99.9%",
      label: "System uptime SLA",
      sub: "Zero downtime architecture"
    }
  ];

  return (
    <section id="metrics" className="py-24 bg-white relative border-y border-[#0A0C0D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <span className="text-xs font-bold tracking-widest text-[#075CE0] uppercase bg-[#075CE0]/10 px-3 py-1.5 rounded-full">
            METRICS
          </span>
          <h2 className="heading-display">
            You can bet on our <br/>
            <span className="hand-underline">reliability.</span>
          </h2>
          <p className="text-lg text-[#5F6C7C] max-w-2xl mx-auto">
            Our mission is to engineer zero-downtime, intelligent digital infrastructure for maritime ports, container terminals, and enterprise industrial facilities across Egypt and the region.
          </p>
        </div>

        {/* Minimal Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-[#0A0C0D]/10">
          {metrics.map((m, idx) => (
            <div key={idx} className={`space-y-3 ${idx > 0 ? "pt-8 md:pt-0 md:pl-12" : ""}`}>
              <h3 className="text-5xl lg:text-7xl font-bold text-[#0A0C0D] tracking-tighter">
                {m.value}
              </h3>
              <div>
                <p className="text-lg font-bold text-[#0A0C0D]">{m.label}</p>
                <p className="text-[#5F6C7C] font-medium mt-1">{m.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
