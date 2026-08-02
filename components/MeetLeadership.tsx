"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Mail, Phone, ArrowRight, UserCheck } from "lucide-react";

interface LeadershipProps {
  onOpenBooking: () => void;
}

export default function MeetLeadership({ onOpenBooking }: LeadershipProps) {
  const leaders = [
    {
      name: "Adel Alaa",
      role: "CEO — Founder & Strategic Lead",
      phone: "+20 10 2008 2678",
      initials: "AA",
      color: "bg-[#04143F] text-white"
    },
    {
      name: "Yousef Kholy",
      role: "Co-Founder & Partner",
      phone: null,
      initials: "YK",
      color: "bg-[#082A78] text-white"
    },
    {
      name: "Yousef Mattar",
      role: "Business Development Manager",
      phone: null,
      initials: "YM",
      color: "bg-[#075CE0] text-white"
    }
  ];

  return (
    <section id="leadership" className="py-24 bg-[#F2F4F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1 rounded-full cyan-badge text-xs font-bold uppercase tracking-wider inline-block">
            Your Point of Contact
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A0C0D] tracking-tight font-heading leading-tight">
            Meet <span className="brand-underline text-[#075CE0]">Yousef Mattar</span> & Leadership
          </h2>
          <p className="text-base sm:text-lg text-[#5F6C7C] font-sans leading-relaxed">
            Yousef leads client outreach and acquisition operations, turning cold prospects into signed partnerships. Book a discovery call directly with him.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Featured Card for Yousef Mattar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 framer-card p-8 sm:p-12 border-[#0A0C0D]/10 shadow-xl relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-3xl bg-[#075CE0] text-white font-black text-2xl flex items-center justify-center shadow-lg shadow-[#075CE0]/30 shrink-0">
                YM
              </div>
              <div>
                <span className="text-xs font-bold text-[#082A78] uppercase tracking-wider bg-[#08BEEA]/15 px-3 py-1 rounded-full border border-[#08BEEA]/30">
                  Primary Contact
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0C0D] font-heading mt-2">
                  Yousef Mattar
                </h3>
                <p className="text-sm font-semibold text-[#5F6C7C]">
                  Business Development Manager — Prime Connect EG
                </p>
              </div>
            </div>

            <p className="text-base text-[#0A0C0D] leading-relaxed mb-8">
              "Yousef is your first point of contact at Prime Connect EG. He manages multi-channel outreach strategies, decision-maker engagement, and initial client onboarding. Schedule a 30-minute discovery call to evaluate your BPO expansion roadmap."
            </p>

            <div className="space-y-3">
              <button
                onClick={onOpenBooking}
                className="w-full py-4 px-6 rounded-2xl bg-[#075CE0] text-white font-bold text-base hover:bg-[#082A78] transition-all shadow-lg shadow-[#075CE0]/30 flex items-center justify-center gap-3 cursor-pointer hover:scale-[1.01]"
              >
                <Calendar className="w-5 h-5 text-[#08BEEA]" />
                <span>📅 Book a Quick Meeting with Yousef</span>
                <ArrowRight className="w-4 h-4 ml-auto text-[#08BEEA]" />
              </button>

              <a
                href="mailto:info@primeconnecteg.com?subject=Discovery%20Call%20Request"
                className="w-full py-3 px-6 rounded-2xl border border-[#0A0C0D]/10 text-[#0A0C0D] font-semibold text-sm hover:bg-[#F2F4F7] transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#075CE0]" />
                <span>Or email: info@primeconnecteg.com</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Leadership Team Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#5F6C7C] mb-4">
                Executive Leadership & Strategy
              </h4>
              <div className="space-y-4">
                {leaders.map((leader, i) => (
                  <div
                    key={i}
                    className="framer-card p-5 flex items-center gap-4 hover:border-[#075CE0]/30 transition-all"
                  >
                    <div className={`w-12 h-12 rounded-2xl ${leader.color} flex items-center justify-center text-sm font-bold shrink-0 shadow-sm`}>
                      {leader.initials}
                    </div>
                    <div className="flex-1">
                      <h5 className="text-base font-bold text-[#0A0C0D] font-heading">
                        {leader.name}
                      </h5>
                      <p className="text-xs text-[#5F6C7C] font-semibold">
                        {leader.role}
                      </p>
                      {leader.phone && (
                        <a
                          href={`tel:${leader.phone.replace(/\s+/g, "")}`}
                          className="text-xs text-[#075CE0] font-bold hover:underline inline-flex items-center gap-1 mt-1"
                        >
                          <Phone className="w-3 h-3" />
                          <span>{leader.phone}</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Infrastructure Partner Badge */}
            <div className="p-6 rounded-3xl bg-[#04143F] text-white space-y-2 border border-[#075CE0]/30 shadow-md">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#08BEEA]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#08BEEA]">
                  Infrastructure Partner
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                <span className="text-white font-bold">Powered by All States Careers</span> — official CRM infrastructure partner activating upon your first signed client.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

