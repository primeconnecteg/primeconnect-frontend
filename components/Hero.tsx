"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-[180px] md:pb-24 overflow-hidden bg-[var(--color-off-white)]">
      
      {/* Hand-drawn decorative background scribble behind the card */}
      <div className="absolute top-[10%] right-[5%] opacity-[0.4] hidden lg:block pointer-events-none z-0">
        <svg width="400" height="400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20L100 80M100 180L100 120M20 100L80 100M180 100L120 100M43 43L85 85M157 157L115 115M157 43L115 85M43 157L85 115M30 60L70 80M170 140L130 120M60 170L80 130" stroke="var(--color-graphite)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-[24px]">
            
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-[6px] py-[6px] rounded-full mb-[8px]"
              style={{ backgroundColor: 'rgba(8, 190, 234, 0.15)' }} /* Light cyan tint */
            >
              <span className="px-[12px] py-[4px] rounded-full bg-[var(--color-cyan)] text-[12px] font-semibold text-[var(--color-deep-navy)] font-sans tracking-[0.01em]">
                Updates
              </span>
              <span className="text-[14px] font-medium text-[var(--color-graphite)] font-sans pr-[12px] flex items-center gap-1">
                We secured 3M Series B round <ArrowRight className="w-[14px] h-[14px] text-[var(--color-steel)]" />
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-display"
            >
              Ease your <span className="hand-drawn-underline text-[var(--color-graphite)]">mind</span> <br/>
              on business <br/>
              operations.
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-paragraph max-w-[480px]"
            >
              From intuitive task management to advanced data analytics, our software equips you with the tools you need to thrive in today's competitive business landscape.
            </motion.p>

            {/* Avatar Stars (Social Proof) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 mt-2"
            >
              <div className="flex -space-x-[12px]">
                <div className="w-[36px] h-[36px] rounded-full bg-[var(--color-prime-blue)] border-2 border-[var(--color-off-white)] flex items-center justify-center text-white text-[10px] font-bold shadow-sm z-30">
                  <img src="https://i.pravatar.cc/100?img=1" alt="Avatar" className="w-full h-full rounded-full object-cover" />
                </div>
                <div className="w-[36px] h-[36px] rounded-full bg-[var(--color-deep-navy)] border-2 border-[var(--color-off-white)] flex items-center justify-center text-white text-[10px] font-bold shadow-sm z-20">
                  <img src="https://i.pravatar.cc/100?img=2" alt="Avatar" className="w-full h-full rounded-full object-cover" />
                </div>
                <div className="w-[36px] h-[36px] rounded-full bg-[var(--color-cobalt)] border-2 border-[var(--color-off-white)] flex items-center justify-center text-white text-[10px] font-bold shadow-sm z-10">
                  <img src="https://i.pravatar.cc/100?img=3" alt="Avatar" className="w-full h-full rounded-full object-cover" />
                </div>
                <div className="w-[36px] h-[36px] rounded-full bg-[var(--color-cyan)] border-2 border-[var(--color-off-white)] flex items-center justify-center text-white text-[10px] font-bold shadow-sm z-0">
                  <img src="https://i.pravatar.cc/100?img=4" alt="Avatar" className="w-full h-full rounded-full object-cover" />
                </div>
              </div>
              <div className="flex items-center gap-[4px]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-[18px] h-[18px] fill-[#F5A623] text-[#F5A623]" />
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: CTA Form Card */}
          <div className="lg:col-span-5 relative z-30 flex justify-center lg:justify-end w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full max-w-[420px] bg-[var(--color-white)] rounded-[24px] framer-card-shadow px-[32px] py-[40px]"
            >
              <div className="text-center mb-[24px]">
                <h3 className="text-[24px] font-medium font-heading text-[var(--color-graphite)] mb-[12px] tracking-tight">
                  Secure your spot now
                </h3>
                <p className="text-[14px] text-[var(--color-steel)] font-sans leading-[1.5]">
                  Be the first to know when the product launches and other not-to-miss updates.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-6">
                  <p className="text-[var(--color-graphite)] font-bold text-[18px]">Waitlist joined!</p>
                  <p className="text-[14px] text-[var(--color-steel)] mt-2">We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-[16px]">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-[16px] py-[14px] rounded-[8px] bg-[var(--color-off-white)] border border-transparent text-[var(--color-graphite)] text-[15px] font-sans placeholder:text-[var(--color-steel)] focus:outline-none focus:bg-[var(--color-white)] focus:border-[var(--color-cobalt)] transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-[16px] py-[14px] rounded-[8px] bg-[var(--color-off-white)] border border-transparent text-[var(--color-graphite)] text-[15px] font-sans placeholder:text-[var(--color-steel)] focus:outline-none focus:bg-[var(--color-white)] focus:border-[var(--color-cobalt)] transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-[15px] rounded-[8px] bg-[var(--color-cobalt)] text-[var(--color-white)] font-semibold text-[16px] font-sans transition-colors hover:bg-[var(--color-prime-blue)] disabled:opacity-50 mt-[8px]"
                  >
                    {loading ? "Joining..." : "Join the Waitlist"}
                  </button>
                  <p className="text-[12px] text-[var(--color-steel)] text-center pt-[8px] font-sans">
                    By subscribing, you agree with our <a href="#" className="underline hover:text-[var(--color-graphite)]">Terms of License</a>
                  </p>
                </form>
              )}
            </motion.div>
          </div>

        </div>

        {/* Client Logos Strip (Join other tech leaders) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-[120px]"
        >
          <p className="text-center text-[16px] font-medium font-sans text-[var(--color-steel)] mb-[40px]">
            Join other tech leaders:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-[60px] opacity-[0.4] grayscale">
            <span className="text-[24px] font-bold font-serif text-[var(--color-graphite)]">amazon</span>
            <span className="text-[24px] font-bold font-sans tracking-tighter text-[var(--color-graphite)]">todoist</span>
            <span className="text-[24px] font-bold italic text-[var(--color-graphite)]">Framer</span>
            <span className="text-[24px] font-bold text-[var(--color-graphite)]">splice</span>
            <span className="text-[24px] font-bold font-sans text-[var(--color-graphite)]">OpenAI</span>
            <span className="text-[22px] font-medium tracking-[0.3em] uppercase text-[var(--color-graphite)]">TESLA</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
