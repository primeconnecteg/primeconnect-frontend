"use client";

import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const dynamicPhrases = [
    { text: "We find the clients.", delay: 0.3 },
    { text: "We close the deal.", delay: 0.7 },
    { text: "We run the relationship.", delay: 1.1 },
  ];

  const handleScrollToYousef = () => {
    const el = document.querySelector("#yousef");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      onOpenBooking();
    }
  };

  const handleLearnMore = () => {
    const el = document.querySelector("#what-we-do");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const servingRegions = ["USA", "UK", "Canada", "Australia", "GCC"];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a192f] text-white pt-44 md:pt-52 lg:pt-56 pb-20 md:pb-28">
      {/* Background Network Graphic Image */}
      <div className="absolute inset-0 bg-[#0a192f]">
        <img
          src="https://media.base44.com/images/public/6a3c9e0bbe44e670a2fbd924/c60ca56b5_generated_d880987d.png"
          alt="Global network visualization"
          className="w-full h-full object-cover opacity-30 mix-blend-lighten"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/60 via-[#0a192f]/40 to-[#0a192f]" />
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
        <motion.line
          x1="0%"
          y1="100%"
          x2="100%"
          y2="30%"
          stroke="#F4821F"
          strokeWidth="1"
          strokeOpacity="0.15"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        <motion.line
          x1="20%"
          y1="100%"
          x2="80%"
          y2="0%"
          stroke="#F4821F"
          strokeWidth="1"
          strokeOpacity="0.1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, ease: "easeOut", delay: 0.5 }}
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#F4821F] font-semibold tracking-[0.2em] uppercase text-sm md:text-base mb-6"
          >
            Egypt&apos;s Premier BPO Growth Engine
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-8"
          >
            PRIME
            <br />
            <span className="text-[#F4821F]">CONNECT</span>
            <span className="text-white/40 font-light ml-3">EG</span>
          </motion.h1>

          {/* 3 Text Paragraphs */}
          <div className="flex flex-col gap-1 mb-12">
            {dynamicPhrases.map((e) => (
              <motion.p
                key={e.text}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: e.delay, type: "spring", damping: 20 }}
                className="text-lg sm:text-xl md:text-2xl text-white/90 font-light tracking-wide"
              >
                {e.text}
              </motion.p>
            ))}
          </div>

          {/* 2 CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={handleScrollToYousef}
              className="px-8 py-4 bg-[#F4821F] text-[#0a192f] font-bold text-lg rounded-full hover:bg-[#F69947] transition-all duration-300 hover:scale-105 sonar-pulse shadow-lg shadow-[#F4821F]/30 cursor-pointer"
            >
              Book a Free Discovery Call with Yousef Mattar
            </button>
            <button
              onClick={handleLearnMore}
              className="px-8 py-4 bg-white/10 text-white font-semibold text-lg rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              Learn More
            </button>
          </motion.div>

          {/* Serving Region Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="mt-16 flex items-center gap-6 text-white/40 text-sm flex-wrap"
          >
            <span>Serving</span>
            <div className="flex gap-3 text-white/60 font-medium flex-wrap">
              {servingRegions.map((region) => (
                <span
                  key={region}
                  className="px-3.5 py-1 border border-white/10 rounded-full text-xs font-semibold hover:border-[#F4821F]/40 hover:text-white transition-colors"
                >
                  {region}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Bouncing Icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 bg-[#F4821F] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
