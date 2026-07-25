"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Calendar, ArrowRight, ShieldCheck } from "lucide-react";

interface TeamProps {
  onOpenBooking: () => void;
}

export default function Team({ onOpenBooking }: TeamProps) {
  const refYousef = useRef(null);
  const isInViewYousef = useInView(refYousef, { once: true, margin: "-100px" });

  const refInfra = useRef(null);
  const isInViewInfra = useInView(refInfra, { once: true, margin: "-80px" });

  return (
    <>
      {/* Yousef Mattar Section */}
      <section id="yousef" className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={refYousef}
            initial={{ opacity: 0, x: 80 }}
            animate={isInViewYousef ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, type: "spring", damping: 20 }}
          >
            <p className="text-[#F4821F] font-semibold tracking-[0.15em] uppercase text-sm mb-3">
              Your Point of Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0a192f] leading-tight mb-16">
              Meet <span className="text-[#F4821F]">Yousef Mattar</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInViewYousef ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <div className="relative">
                <div className="w-72 h-80 md:w-80 md:h-96 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] to-[#0f2b48] rounded-3xl transform rotate-3" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F4821F]/80 to-[#F4821F] rounded-3xl transform -rotate-3" />
                  <div className="absolute inset-2 bg-gradient-to-br from-[#0a192f] to-[#0a192f]/90 rounded-2xl flex flex-col items-center justify-center text-center p-8">
                    <div className="w-24 h-24 bg-[#F4821F]/20 rounded-full flex items-center justify-center mb-6">
                      <span className="text-4xl font-black text-[#F4821F]">YM</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Yousef Mattar</h3>
                    <p className="text-[#F4821F] font-medium mt-2">Business Development Manager</p>
                    <p className="text-white/40 text-sm mt-1">Prime Connect EG</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={isInViewYousef ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, type: "spring", damping: 20 }}
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-[#0a192f]/10 border border-[#0a192f]/5">
                <p className="text-[#0a192f]/70 text-lg leading-relaxed mb-8">
                  Yousef is your first point of contact at Prime Connect EG. He leads our client outreach and acquisition operations, turning cold prospects into signed partnerships. Book a call directly with him to explore how we can grow your client base.
                </p>

                <button
                  onClick={onOpenBooking}
                  className="group flex items-center justify-center gap-3 w-full py-5 md:py-6 bg-[#F4821F] text-[#0a192f] font-black text-lg md:text-xl rounded-2xl hover:bg-[#F69947] transition-all duration-300 hover:scale-105 sonar-pulse shadow-xl shadow-[#F4821F]/30 mb-4 cursor-pointer"
                >
                  <Calendar className="w-6 h-6" />
                  <span>📅 Book a Quick Meeting with Yousef</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="mailto:info@primeconnecteg.com?subject=Discovery%20Call%20Request"
                  className="flex items-center justify-center gap-2 w-full py-3 border-2 border-[#0a192f]/10 text-[#0a192f] font-medium rounded-xl hover:border-[#F4821F]/30 hover:text-[#F4821F] transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span>Or email: info@primeconnecteg.com</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infrastructure Partner — Verified */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={refInfra}
            initial={{ opacity: 0, y: 30 }}
            animate={isInViewInfra ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="border border-[#0a192f]/10 rounded-2xl p-8 md:p-10 font-mono"
          >
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-5 h-5 text-[#F4821F]" />
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#0a192f]/40">
                Infrastructure Partner — Verified
              </p>
            </div>
            <p className="text-[#0a192f] text-lg">
              <span className="font-bold">Powered by All States Careers</span>
              <span className="text-[#0a192f]/50">
                {" "}— our official CRM infrastructure partner, activating upon our first signed client.
              </span>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
