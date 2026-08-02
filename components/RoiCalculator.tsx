"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, TrendingUp, Clock, ShieldCheck, Zap } from "lucide-react";

interface RoiCalculatorProps {
  onOpenBooking: () => void;
}

export default function RoiCalculator({ onOpenBooking }: RoiCalculatorProps) {
  const [dailyTrucks, setDailyTrucks] = useState<number>(450);
  const [manualMinPerTruck, setManualMinPerTruck] = useState<number>(4.5);
  const [gateLanes, setGateLanes] = useState<number>(6);

  // Automated time per truck with Prime Connect OCR is 0.75 min (45s)
  const autoMinPerTruck = 0.75;

  const currentManualHoursPerDay = (dailyTrucks * manualMinPerTruck) / 60;
  const autoHoursPerDay = (dailyTrucks * autoMinPerTruck) / 60;
  const hoursSavedPerDay = currentManualHoursPerDay - autoHoursPerDay;
  const hoursSavedPerYear = hoursSavedPerDay * 365;

  const throughputIncrease = Math.round(((manualMinPerTruck - autoMinPerTruck) / manualMinPerTruck) * 100);
  const estimatedAnnualCostSavings = Math.round(hoursSavedPerYear * 28); // Average port truck waiting overhead cost

  return (
    <section id="calculator" className="py-24 bg-[#04143F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Container Box */}
        <div className="bg-[#082A78]/30 border border-[#08BEEA]/30 rounded-3xl p-8 sm:p-12 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#075CE0]/20 blur-[130px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Calculator Inputs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082A78] border border-[#08BEEA]/30">
                <Calculator className="w-4 h-4 text-[#08BEEA]" />
                <span className="text-xs font-semibold text-[#08BEEA] uppercase tracking-wider">
                  Interactive Gate ROI Estimator
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
                Estimate Your Port <span className="gradient-text">Gate Throughput Gains</span>
              </h2>

              <p className="text-sm text-slate-300">
                Adjust the sliders below to calculate how Prime Connect's container OCR and automated gates transform your terminal efficiency.
              </p>

              {/* Slider 1: Daily Trucks */}
              <div className="space-y-2 bg-[#04143F]/80 p-4 rounded-xl border border-white/10">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-white uppercase">Daily Container Trucks</span>
                  <span className="font-mono font-bold text-[#08BEEA] text-sm">{dailyTrucks} Trucks/Day</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="50"
                  value={dailyTrucks}
                  onChange={(e) => setDailyTrucks(Number(e.target.value))}
                  className="w-full h-2 bg-[#082A78] rounded-lg appearance-none cursor-pointer accent-[#08BEEA]"
                />
              </div>

              {/* Slider 2: Manual Check Time */}
              <div className="space-y-2 bg-[#04143F]/80 p-4 rounded-xl border border-white/10">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-white uppercase">Manual Gate Check Time</span>
                  <span className="font-mono font-bold text-[#08BEEA] text-sm">{manualMinPerTruck} Minutes / Truck</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="10"
                  step="0.5"
                  value={manualMinPerTruck}
                  onChange={(e) => setManualMinPerTruck(Number(e.target.value))}
                  className="w-full h-2 bg-[#082A78] rounded-lg appearance-none cursor-pointer accent-[#08BEEA]"
                />
              </div>

              {/* Slider 3: Active Lanes */}
              <div className="space-y-2 bg-[#04143F]/80 p-4 rounded-xl border border-white/10">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-white uppercase">Active Port Gate Lanes</span>
                  <span className="font-mono font-bold text-[#08BEEA] text-sm">{gateLanes} Lanes</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="24"
                  step="2"
                  value={gateLanes}
                  onChange={(e) => setGateLanes(Number(e.target.value))}
                  className="w-full h-2 bg-[#082A78] rounded-lg appearance-none cursor-pointer accent-[#08BEEA]"
                />
              </div>
            </div>

            {/* Right: Calculated Metrics Result Card */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#075CE0] via-[#082A78] to-[#04143F] border border-[#08BEEA]/40 p-8 rounded-2xl shadow-2xl space-y-6">
              <span className="text-xs font-mono font-bold text-[#08BEEA] uppercase tracking-wider block">
                ESTIMATED ANNUAL IMPACT
              </span>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#04143F]/80 p-4 rounded-xl border border-white/10">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">Gate Turnover Speedup</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#08BEEA] font-heading mt-1 block">
                    +{throughputIncrease}%
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono mt-1 block">Sub-0.8s OCR Scan</span>
                </div>

                <div className="bg-[#04143F]/80 p-4 rounded-xl border border-white/10">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">Hours Saved / Year</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1 block">
                    {Math.round(hoursSavedPerYear).toLocaleString()} Hrs
                  </span>
                  <span className="text-[10px] text-slate-300 font-mono mt-1 block">Reduced Truck Idling</span>
                </div>
              </div>

              <div className="bg-[#04143F]/90 p-5 rounded-xl border border-[#08BEEA]/40 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-300 font-semibold block">Est. Annual Operations Value</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-heading gradient-text">
                    ${estimatedAnnualCostSavings.toLocaleString()}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#08BEEA]/20 flex items-center justify-center text-[#08BEEA]">
                  <Zap className="w-5 h-5" />
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#075CE0] to-[#08BEEA] text-white font-bold text-sm tracking-wide uppercase shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Custom Technical Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
