"use client";

import React, { useState } from "react";
<<<<<<< HEAD
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is there a performance guarantee for client acquisition?",
      a: "Yes! We guarantee at least 3 qualified, decision-maker-level conversations within your first 45 days — or we continue outreach at no additional cost until we achieve the target."
    },
    {
      q: "How quickly does multi-channel outreach begin?",
      a: "Outreach campaigns launch within 7 business days after strategy approval and ICP (Ideal Client Profile) documentation."
    },
    {
      q: "How does the CRM integration work?",
      a: "Every signed client is integrated from Day 1 into a dedicated CRM environment (Powered by All States Careers). We handle communication management, escalation protocols, and weekly reporting."
    },
    {
      q: "Which geographic markets do you target for BPO clients?",
      a: "We actively source end-clients across the USA, UK, Canada, Australia, and GCC countries (UAE, Saudi Arabia, Qatar, Kuwait)."
    },
    {
      q: "How do I claim a Launch Partner slot for 2026?",
      a: "We have only 5 Launch Partner slots available for February 2026. Book a 30-minute discovery call with Yousef Mattar or submit a meeting request on this page to lock in your slot."
    }
  ];

  return (
    <section id="faqs" className="py-24 bg-[#F2F4F7] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="px-3.5 py-1 rounded-full cyan-badge text-xs font-bold uppercase tracking-wider inline-block">
            FAQs
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#5F6C7C] font-heading">
            Still not convinced?
          </h3>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A0C0D] tracking-tight font-heading leading-tight">
            We've got the <span className="brand-underline text-[#075CE0]">answers</span>
          </h2>
        </div>

        {/* Framer Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="framer-card overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F2F4F7]/60 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-[#0A0C0D] font-heading">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${isOpen ? "bg-[#075CE0] text-white rotate-180" : "bg-[#F2F4F7] text-[#5F6C7C]"}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6 text-sm text-[#5F6C7C] font-sans leading-relaxed border-t border-[#0A0C0D]/10 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-xs font-semibold text-[#5F6C7C]">
            Still have questions? Contact us at{" "}
            <a href="mailto:info@primeconnecteg.com" className="text-[#075CE0] underline font-bold">
              info@primeconnecteg.com
            </a>
          </p>
        </div>
=======
import ScrollReveal from "./ScrollReveal";

export default function FaqSection() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && message) {
      setSent(true);
    }
  };

  const team = [
    {
      initials: "AA",
      name: "Adel Alaa",
      role: "CEO — Founder & Strategic Lead",
      phone: "+20 10 2008 2678",
    },
    {
      initials: "YK",
      name: "Yousef Kholy",
      role: "Co-Founder & Partner",
      phone: "",
    },
    {
      initials: "YM",
      name: "Yousef Mattar",
      role: "Business Development Manager",
      phone: "",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* Leadership Team Section */}
        <div className="space-y-12">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-block">
                <span className="bg-[#082A78] text-[#08BEEA] font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
                  LEADERSHIP TEAM
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#04143F] tracking-tight">
                Meet Our Executive Team
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <ScrollReveal key={idx} direction="up" delay={0.15 * idx}>
                <div className="bg-[#F2F4F7] rounded-3xl p-8 space-y-4 border border-gray-200/80 hover:border-[#075CE0] transition-all hover:shadow-lg h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#082A78] text-white flex items-center justify-center font-black text-lg shadow-md">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#04143F]">{member.name}</h3>
                    <p className="text-xs font-semibold text-[#075CE0] mt-0.5">{member.role}</p>
                    {member.phone && (
                      <p className="text-xs text-[#5F6C7C] font-mono mt-2">{member.phone}</p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Infrastructure Partner Verified Note */}
        <ScrollReveal direction="up">
          <div id="certifications" className="bg-[#082A78] text-white rounded-3xl p-8 text-center space-y-2 shadow-lg border border-blue-500/20 max-w-4xl mx-auto">
            <span className="text-xs font-extrabold text-[#08BEEA] uppercase tracking-widest block">
              INFRASTRUCTURE PARTNER — VERIFIED
            </span>
            <p className="text-base font-semibold text-gray-100">
              Powered by <span className="text-[#08BEEA] font-bold">All States Careers</span> — our official CRM infrastructure partner, activating upon our first signed client.
            </p>
          </div>
        </ScrollReveal>

        {/* Get In Touch Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal direction="left">
              <div>
                <span className="bg-[#082A78] text-[#08BEEA] font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
                  GET IN TOUCH
                </span>
                <h2 className="text-4xl font-black text-[#04143F] tracking-tight mt-3">
                  Ready to Grow?
                </h2>
                <p className="text-sm text-[#5F6C7C] mt-2 font-medium">
                  Reach out to our team directly or fill out the form to discuss your BPO expansion strategy.
                </p>
              </div>

              <div className="space-y-4 text-xs font-semibold text-[#04143F] mt-8">
                <div className="flex items-center gap-3 p-4 bg-[#F2F4F7] rounded-2xl">
                  <span className="text-lg">📧</span>
                  <div>
                    <p className="text-[#5F6C7C] text-[10px] uppercase font-bold">Business Email</p>
                    <a href="mailto:info@primeconnecteg.com" className="text-sm font-bold text-[#082A78] hover:underline">
                      info@primeconnecteg.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-[#F2F4F7] rounded-2xl">
                  <span className="text-lg">📩</span>
                  <div>
                    <p className="text-[#5F6C7C] text-[10px] uppercase font-bold">Gmail</p>
                    <a href="mailto:primeconnect.eg@gmail.com" className="text-sm font-bold text-[#082A78] hover:underline">
                      primeconnect.eg@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-[#F2F4F7] rounded-2xl">
                  <span className="text-lg">📍</span>
                  <div>
                    <p className="text-[#5F6C7C] text-[10px] uppercase font-bold">Headquarters</p>
                    <p className="text-sm font-bold text-[#082A78]">Cairo, Egypt</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right">
              <div className="bg-[#F2F4F7] rounded-3xl p-8 md:p-10 border border-gray-200/80 shadow-md">
                {sent ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-6 text-center font-bold text-sm">
                    🎉 Message sent successfully! Our team will respond within 24 hours.
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-[#04143F] mb-1 block">Your full name</label>
                        <input
                          type="text"
                          placeholder="Your full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-white border border-gray-200 focus:border-[#075CE0] text-[#0A0C0D] text-sm rounded-xl px-4 py-3 outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-[#04143F] mb-1 block">Your company name</label>
                        <input
                          type="text"
                          placeholder="Your company name"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="w-full bg-white border border-gray-200 focus:border-[#075CE0] text-[#0A0C0D] text-sm rounded-xl px-4 py-3 outline-none"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#04143F] mb-1 block">Business Email</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white border border-gray-200 focus:border-[#075CE0] text-[#0A0C0D] text-sm rounded-xl px-4 py-3 outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#04143F] mb-1 block">Your outsourcing needs</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your outsourcing needs..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-white border border-gray-200 focus:border-[#075CE0] text-[#0A0C0D] text-sm rounded-xl px-4 py-3 outline-none"
                        required
                        minLength={10}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#075CE0] hover:bg-[#082A78] text-white font-bold text-sm rounded-xl py-3.5 transition-colors shadow-md active:scale-95"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>

>>>>>>> main
      </div>
    </section>
  );
}
<<<<<<< HEAD

=======
>>>>>>> main
