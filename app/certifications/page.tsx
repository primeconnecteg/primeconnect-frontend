"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Award, Lock, CheckCircle2, Star, Quote, ShieldCheck } from "lucide-react";

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
      icon: Award,
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
    <main className="min-h-screen bg-white font-sans selection:bg-[#F4821F] selection:text-[#0a192f]">
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 1. Certifications Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 bg-[#0a192f] text-white overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          <line x1="0%" y1="100%" x2="100%" y2="30%" stroke="#F4821F" strokeWidth="1" strokeOpacity="0.15" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="text-[#F4821F] font-semibold tracking-[0.15em] uppercase text-sm mb-4">
              Compliance & Training
            </p>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Certified Training <br />
              <span className="text-[#F4821F]">Done.</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              At Prime Connect EG, we hold our team to the highest global standards. Our staff has completed both COPC and GDPR certified training — so your client acquisition and data handling meet world-class compliance benchmarks from day one.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Certifications Cards */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => {
              const IconComp = cert.icon;
              return (
                <div
                  key={index}
                  className="bg-[#0a192f] text-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-[#0a192f]/20 border border-white/10"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-[#F4821F]/10 rounded-xl flex items-center justify-center">
                      <IconComp className="w-7 h-7 text-[#F4821F]" />
                    </div>
                    <span className="flex items-center gap-2 px-4 py-2 bg-green-950/60 border border-green-500/30 text-green-400 rounded-full text-sm font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      {cert.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {cert.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    {cert.desc}
                  </p>
                  <div className="space-y-3">
                    {cert.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-3 text-sm text-white/80">
                        <div className="w-1.5 h-1.5 bg-[#F4821F] rounded-full shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Partner Review Section */}
      <section className="py-24 md:py-32 bg-[#0a192f] text-white relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="#F4821F" strokeWidth="0.5" strokeOpacity="0.1" />
        </svg>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <p className="text-[#F4821F] font-semibold tracking-[0.15em] uppercase text-sm mb-3">
              Partner Review
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              What Our Partners Say
            </h2>
          </div>

          <div className="relative bg-gradient-to-br from-[#1e3a5f] to-[#0a192f] rounded-3xl p-10 md:p-14 border border-white/10">
            <Quote className="w-12 h-12 text-[#F4821F]/30 absolute top-8 left-8" />
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light italic mb-8">
                &quot;Working with Prime Connect EG has been an amazing experience. Their client hunting is effortless and precise — they make finding and closing new clients look easy. Their professional, fast-paced approach delivered results quicker than we expected. A truly reliable growth partner.&quot;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-14 h-14 bg-[#F4821F] rounded-full flex items-center justify-center shrink-0">
                  <span className="text-[#0a192f] font-black text-lg">OB</span>
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-lg">Omar Badawi</p>
                  <p className="text-[#F4821F] text-sm font-medium">CEO, Allstate Careers</p>
                </div>
                <div className="ml-auto flex gap-1 text-[#F4821F]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F4821F] text-[#F4821F]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Compliance You Can Trust CTA Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="w-12 h-12 text-[#F4821F] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-black text-[#0a192f] mb-4">
            Compliance You Can Trust
          </h2>
          <p className="text-[#0a192f]/60 text-lg mb-8 max-w-2xl mx-auto">
            Our certified team is ready to handle your client acquisition with global compliance standards built in.
          </p>
          <button
            onClick={handleOpenBooking}
            className="px-8 py-4 bg-[#F4821F] text-[#0a192f] font-bold text-lg rounded-full hover:bg-[#F69947] transition-all duration-300 hover:scale-105 sonar-pulse shadow-lg shadow-[#F4821F]/30 cursor-pointer"
          >
            Book a Free Discovery Call
          </button>
        </div>
      </section>

      <Footer />
      <BookingModal isOpen={bookingModalOpen} onClose={handleCloseBooking} />
    </main>
  );
}
