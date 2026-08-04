"use client";

import React, { useState } from "react";
import PropellentNavbar from "@/components/PropellentNavbar";
import PropellentFooter from "@/components/PropellentFooter";
import BookingModal from "@/components/BookingModal";
import ScrollReveal from "@/components/ScrollReveal";
import { Bookmark, Lock, Check, Star, ShieldCheck, Clock } from "lucide-react";

export default function CertificationsPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  const certifications = [
    {
      title: "COPC Certified Training",
      status: "Completed",
      desc: "Customer Operations Performance Center (COPC) standards training completed. Our team is certified in high-performance contact center operations, quality management, and customer experience excellence — ensuring every client interaction meets global BPO benchmarks.",
      points: [
        "Contact center operations best practices",
        "Quality assurance & performance monitoring",
        "Customer experience (CX) excellence standards",
        "Process optimization & SLA management",
      ],
      icon: Bookmark,
    },
    {
      title: "GDPR Certified Training",
      status: "Completed",
      desc: "General Data Protection Regulation (GDPR) compliance training completed. Our team is fully certified in data protection, privacy handling, and cross-border data transfer protocols — critical for serving clients in the UK, EU, and global markets.",
      points: [
        "Data protection & privacy compliance",
        "Cross-border data transfer protocols",
        "Client data handling & secure storage",
        "Breach response & accountability frameworks",
      ],
      icon: Lock,
    },
  ];

  return (
    <main className="min-h-screen bg-[#F2F4F7] font-sans text-[#0A0C0D] selection:bg-[#08BEEA] selection:text-[#04143F]">
      {/* 1. Header Navigation matching exact website navbar */}
      <PropellentNavbar />

      {/* 2. Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-[#04143F] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal direction="up">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#082A78] rounded-full p-1 pr-4 border border-[#08BEEA]/30 shadow-sm">
                <span className="bg-[#08BEEA] text-[#04143F] font-extrabold text-xs px-3 py-1 rounded-full tracking-wide uppercase">
                  COMPLIANCE & TRAINING
                </span>
                <span className="text-xs font-bold text-white">
                  Global Standards Built-In
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                Certified Training <span className="text-[#08BEEA]">Done.</span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium pt-2">
                At Prime Connect EG, we hold our team to the highest global standards. Our staff has completed both COPC and GDPR certified training — so your client acquisition and data handling meet world-class compliance benchmarks from day one.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Certifications Grid Cards */}
      <section className="py-20 md:py-28 bg-[#F2F4F7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => {
              const IconComp = cert.icon;
              return (
                <ScrollReveal key={index} direction="up" delay={0.15 * index}>
                  <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-200/80 flex flex-col justify-between h-full">
                    <div>
                      {/* Card Header Row */}
                      <div className="flex items-center justify-between mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-[#075CE0]/10 flex items-center justify-center text-[#075CE0]">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className="flex items-center gap-1.5 px-3.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-full text-xs font-bold">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          {cert.status}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-2xl font-black text-[#04143F] mb-3 tracking-tight">
                        {cert.title}
                      </h3>
                      <p className="text-[#5F6C7C] text-sm leading-relaxed mb-6 font-medium">
                        {cert.desc}
                      </p>

                      {/* Bullet Points */}
                      <ul className="space-y-3 pt-4 border-t border-gray-100">
                        {cert.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5F6C7C] font-medium">
                            <span className="w-2 h-2 rounded-full bg-[#08BEEA] mt-1.5 shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Partner Review Section */}
      <section className="py-20 md:py-28 bg-[#04143F] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-12 space-y-2">
              <span className="text-[#08BEEA] font-bold text-xs uppercase tracking-widest block">
                PARTNER REVIEW
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                What Our Partners Say
              </h2>
            </div>

            {/* Testimonial Box */}
            <div className="bg-[#082A78]/70 backdrop-blur-md rounded-3xl p-8 sm:p-12 md:p-14 border border-[#075CE0]/30 shadow-xl relative">
              <div className="text-[#08BEEA] text-5xl font-serif leading-none font-bold mb-4 opacity-90 select-none">
                “
              </div>
              <p className="text-xl sm:text-2xl text-slate-100 italic leading-relaxed font-light mb-8">
                &quot;Partner review pending.&quot;
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#08BEEA]/20 border border-[#08BEEA]/40 text-[#08BEEA] font-bold text-sm flex items-center justify-center shrink-0">
                    PC
                  </div>
                  <div>
                    <p className="text-white font-bold text-base">Partner Review</p>
                    <p className="text-[#08BEEA] text-xs font-semibold">Pending Verification</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-amber-400 opacity-60">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Compliance You Can Trust CTA Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <div className="w-16 h-16 rounded-2xl bg-[#075CE0]/10 text-[#075CE0] flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#04143F] mb-4 tracking-tight">
              Compliance You Can Trust
            </h2>
            <p className="text-[#5F6C7C] text-base md:text-lg mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
              Our certified team is ready to handle your client acquisition with global compliance standards built in.
            </p>
            <button
              onClick={handleOpenBooking}
              className="px-8 py-4 rounded-full bg-[#075CE0] hover:bg-[#082A78] text-white font-bold text-base transition-all shadow-xl hover:scale-105 cursor-pointer inline-flex items-center gap-2"
            >
              Book a Free Discovery Call
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. Website Footer */}
      <PropellentFooter />
      <BookingModal isOpen={bookingModalOpen} onClose={handleCloseBooking} />
    </main>
  );
}
