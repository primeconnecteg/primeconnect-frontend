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
      color: "bg-slate-900 text-white"
    },
    {
      name: "Yousef Kholy",
      role: "Co-Founder & Partner",
      phone: null,
      initials: "YK",
      color: "bg-purple-600 text-white"
    },
    {
      name: "Yousef Mattar",
      role: "Business Development Manager",
      phone: null,
      initials: "YM",
      color: "bg-[#B4F600] text-slate-900"
    }
  ];

  return (
    <section id="leadership" className="py-24 bg-[#F3F3F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider border border-purple-200 inline-block">
            Your Point of Contact
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
            Meet <span className="purple-underline text-purple-600">Yousef Mattar</span> & Leadership
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Yousef leads client outreach and acquisition operations, turning cold prospects into signed partnerships. Book a discovery call directly with him.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Featured Card for Yousef Mattar (Framer Testimonial Style) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 framer-card p-8 sm:p-12 border-slate-200 shadow-xl relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-3xl bg-purple-600 text-white font-black text-2xl flex items-center justify-center shadow-lg shadow-purple-600/30 shrink-0">
                YM
              </div>
              <div>
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider bg-purple-50 px-3 py-1 rounded-full">
                  Primary Contact
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
                  Yousef Mattar
                </h3>
                <p className="text-sm font-semibold text-slate-500">
                  Business Development Manager — Prime Connect EG
                </p>
              </div>
            </div>

            <p className="text-base text-slate-700 leading-relaxed mb-8">
              "Yousef is your first point of contact at Prime Connect EG. He manages multi-channel outreach strategies, decision-maker engagement, and initial client onboarding. Schedule a 30-minute discovery call to evaluate your BPO expansion roadmap."
            </p>

            <div className="space-y-3">
              <button
                onClick={onOpenBooking}
                className="w-full py-4 px-6 rounded-2xl bg-purple-600 text-white font-bold text-base hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-3 cursor-pointer hover:scale-[1.01]"
              >
                <Calendar className="w-5 h-5" />
                <span>📅 Book a Quick Meeting with Yousef</span>
                <ArrowRight className="w-4 h-4 ml-auto" />
              </button>

              <a
                href="mailto:info@primeconnecteg.com?subject=Discovery%20Call%20Request"
                className="w-full py-3 px-6 rounded-2xl border border-slate-200 text-slate-800 font-semibold text-sm hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-purple-600" />
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
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Executive Leadership & Strategy
              </h4>
              <div className="space-y-4">
                {leaders.map((leader, i) => (
                  <div
                    key={i}
                    className="framer-card p-5 flex items-center gap-4 hover:border-purple-200 transition-all"
                  >
                    <div className={`w-12 h-12 rounded-2xl ${leader.color} flex items-center justify-center text-sm font-bold shrink-0 shadow-sm`}>
                      {leader.initials}
                    </div>
                    <div className="flex-1">
                      <h5 className="text-base font-bold text-slate-900 font-heading">
                        {leader.name}
                      </h5>
                      <p className="text-xs text-slate-500 font-medium">
                        {leader.role}
                      </p>
                      {leader.phone && (
                        <a
                          href={`tel:${leader.phone.replace(/\s+/g, "")}`}
                          className="text-xs text-purple-600 font-semibold hover:underline inline-flex items-center gap-1 mt-1"
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

            {/* Verification Partner Badge */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-2 border border-slate-800">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#B4F600]" />
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
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
