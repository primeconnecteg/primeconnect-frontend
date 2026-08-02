"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

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
    <section id="faqs" className="py-24 bg-[#F3F3F6] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-lime-400/20 text-slate-900 text-xs font-bold uppercase tracking-wider border border-lime-500/30 inline-block">
            FAQs
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-400 font-heading">
            Still not convinced?
          </h3>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
            We've got the <span className="purple-underline text-purple-600">answers</span>
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
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 font-heading">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${isOpen ? "bg-purple-600 text-white rotate-180" : "bg-slate-100 text-slate-600"}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6 text-sm text-slate-600 font-sans leading-relaxed border-t border-slate-100 pt-4"
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
          <p className="text-xs font-semibold text-slate-500">
            Still have questions? Contact us at{" "}
            <a href="mailto:info@primeconnecteg.com" className="text-purple-600 underline font-bold">
              info@primeconnecteg.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
