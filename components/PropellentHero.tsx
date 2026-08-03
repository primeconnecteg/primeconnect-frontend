"use client";

import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function PropellentHero() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="hero-main" className="relative pt-8 pb-20 overflow-hidden bg-[#F2F4F7] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Prime Connect Headlines & Copy */}
          <div className="lg:col-span-7 space-y-6 relative z-10">
            
            <ScrollReveal direction="up" delay={0.1}>
              {/* Top Announcement Badge */}
              <div className="inline-flex items-center gap-2 bg-white rounded-full p-1 pr-4 border border-blue-200/80 shadow-sm">
                <span className="bg-[#08BEEA] text-[#04143F] font-extrabold text-xs px-3 py-1 rounded-full tracking-wide">
                  PRIME CONNECT EG
                </span>
                <span className="text-xs font-bold text-[#082A78] flex items-center gap-1">
                  Egypt&apos;s Premier BPO Growth Engine
                  <svg className="w-3.5 h-3.5 text-[#075CE0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7-7m7-7H3" />
                  </svg>
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              {/* Main Headline with Cobalt Blue Brush Underline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A0C0D] tracking-tight leading-[1.1]">
                <span className="text-[#082A78]">PRIME CONNECT EG</span>
                <br />
                <span className="relative inline-block">
                  We find the clients.
                  {/* Cobalt Brush Underline SVG */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-4 text-[#075CE0] z-0 overflow-visible"
                    viewBox="0 0 200 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 14C50 4 150 4 197 12C150 18 50 18 3 14Z"
                      fill="currentColor"
                      opacity="0.85"
                    />
                  </svg>
                </span>
                <br />
                <span className="text-[#075CE0]">We close the deal.</span>
                <br />
                We run the relationship.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              {/* Subheading Paragraph & Discovery Call CTA */}
              <p className="text-base sm:text-lg text-[#5F6C7C] max-w-xl font-medium leading-relaxed">
                Book a Free Discovery Call with <span className="font-bold text-[#082A78]">Yousef Mattar</span> to explore how we scale your BPO end-client pipeline.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              {/* Serving Regions Badges */}
              <div className="pt-2">
                <p className="text-xs font-bold text-[#082A78] uppercase tracking-wider mb-3">
                  Serving End-Clients In:
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {["USA", "UK", "Canada", "Australia", "GCC"].map((country) => (
                    <span
                      key={country}
                      className="bg-white text-[#04143F] text-xs font-bold px-3.5 py-1.5 rounded-full border border-gray-200 shadow-sm"
                    >
                      🇺🇸/🇬🇧 {country}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Book Discovery Call Form Card + Doodle Visuals */}
          <div id="book-call" className="lg:col-span-5 relative scroll-mt-28">
            <ScrollReveal direction="left" delay={0.3}>
              {/* Global Network Doodle Lines */}
              <svg
                className="absolute -top-12 -left-12 w-48 h-48 text-[#075CE0] pointer-events-none opacity-20"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="25" />
                <line x1="10" y1="50" x2="90" y2="50" />
                <line x1="50" y1="10" x2="50" y2="90" />
              </svg>

              {/* Main Form Card */}
              <div className="relative z-10 bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-200/80 propellent-hero-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#082A78] text-white flex items-center justify-center font-bold text-sm">
                    YM
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#04143F] tracking-tight">
                      Yousef Mattar
                    </h2>
                    <p className="text-xs text-[#5F6C7C] font-semibold">
                      Business Development Manager
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-[#082A78] tracking-tight">
                  Book a Free Discovery Call
                </h3>
                <p className="text-xs text-[#5F6C7C] mt-1 mb-6 leading-relaxed">
                  Schedule a 30-min strategy session to document your ideal target profile.
                </p>

                {submitted ? (
                  <div className="bg-blue-50 border border-blue-200 text-[#075CE0] rounded-2xl p-6 text-center font-bold text-sm">
                    🎉 Thank you! Yousef Mattar will contact you shortly.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#F2F4F7] border border-transparent focus:border-[#075CE0] focus:bg-white text-[#0A0C0D] text-sm rounded-xl px-4 py-3 outline-none transition-all placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Your company name"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-[#F2F4F7] border border-transparent focus:border-[#075CE0] focus:bg-white text-[#0A0C0D] text-sm rounded-xl px-4 py-3 outline-none transition-all placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Business Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#F2F4F7] border border-transparent focus:border-[#075CE0] focus:bg-white text-[#0A0C0D] text-sm rounded-xl px-4 py-3 outline-none transition-all placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your outsourcing needs... (optional)"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-[#F2F4F7] border border-transparent focus:border-[#075CE0] focus:bg-white text-[#0A0C0D] text-sm rounded-xl px-4 py-3 outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#075CE0] hover:bg-[#082A78] text-white font-bold text-sm rounded-xl py-3.5 transition-colors shadow-lg shadow-blue-600/25 active:scale-[0.99]"
                    >
                      Book Discovery Call
                    </button>
                    <p className="text-[11px] text-[#5F6C7C] text-center pt-2">
                      Powered by{" "}
                      <span className="font-bold text-[#082A78]">
                        All States Careers
                      </span>
                    </p>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Marquee Header */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-16 pt-8 border-t border-gray-300/60">
            <p className="text-center text-xs font-bold text-[#5F6C7C] uppercase tracking-wider mb-6">
              Connecting Outsourcing Companies across global markets:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 font-extrabold text-sm text-[#082A78]/80">
              <span>🇺🇸 UNITED STATES</span>
              <span>🇬🇧 UNITED KINGDOM</span>
              <span>🇨🇦 CANADA</span>
              <span>🇦🇺 AUSTRALIA</span>
              <span>🇦🇪 GCC REGION</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
