"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { saveLead } from "@/lib/leadStore";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const resetForm = () => {
    setSubmitted(false);
    setLoading(false);
    setErrorMsg("");
    setFormData({ name: "", company: "", email: "", message: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    if (formData.message.trim().length < 10) {
      setErrorMsg("Message must be at least 10 characters long.");
      setLoading(false);
      return;
    }

    const payload = {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      message: formData.message,
    };

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/api/v1/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.warn("Backend API response error:", errorData);
      }
    } catch (err) {
      console.warn("Could not connect to FastAPI backend:", err);
    } finally {
      // Always save to client lead store so dashboard displays it
      saveLead({
        ...payload,
        type: "Contact Form",
      });

      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, type: "spring", damping: 20 }}
          className="mb-16"
        >
          <p className="text-[#F4821F] font-semibold tracking-[0.15em] uppercase text-sm mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0a192f] leading-tight">
            Ready to <span className="text-[#F4821F]">Grow</span>?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, type: "spring", damping: 20 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0a192f]/5 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#0a192f]" />
              </div>
              <div>
                <p className="font-bold text-[#0a192f]">Business Email</p>
                <a href="mailto:info@primeconnecteg.com" className="text-[#F4821F] hover:underline">
                  info@primeconnecteg.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0a192f]/5 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#0a192f]" />
              </div>
              <div>
                <p className="font-bold text-[#0a192f]">Gmail</p>
                <a href="mailto:primeconnect.eg@gmail.com" className="text-[#F4821F] hover:underline">
                  primeconnect.eg@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0a192f]/5 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#0a192f]" />
              </div>
              <div>
                <p className="font-bold text-[#0a192f]">Location</p>
                <p className="text-[#0a192f]/60">Cairo, Egypt</p>
              </div>
            </div>

            {/* Leadership Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-[#0a192f]/5 border border-[#0a192f]/5 mt-8">
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#0a192f]/40 mb-4">
                Leadership Team
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#0a192f] rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                    AA
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#0a192f]">Adel Alaa</p>
                    <p className="text-xs text-[#0a192f]/50">CEO — Founder & Strategic Lead</p>
                    <a href="tel:+201020082678" className="flex items-center gap-1.5 text-xs text-[#F4821F] hover:underline mt-0.5">
                      <Phone className="w-3 h-3" />
                      <span>+20 10 2008 2678</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#0a192f] rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                    YK
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0a192f]">Yousef Kholy</p>
                    <p className="text-xs text-[#0a192f]/50">Co-Founder & Partner</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#F4821F] rounded-full flex items-center justify-center text-[#0a192f] text-xs font-bold shrink-0">
                    YM
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0a192f]">Yousef Mattar</p>
                    <p className="text-xs text-[#0a192f]/50">Business Development Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, type: "spring", damping: 20 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-[#0a192f]/10 border border-[#0a192f]/5"
          >
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0a192f]">Message Sent!</h3>
                <p className="text-[#0a192f]/60 text-sm">
                  We&apos;ll get back to you directly.
                </p>
                <button
                  onClick={resetForm}
                  className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl mt-4 cursor-pointer transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#0a192f] mb-2">
                    Your full name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F4821F] text-sm text-[#0a192f]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0a192f] mb-2">
                    Your company name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F4821F] text-sm text-[#0a192f]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0a192f] mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F4821F] text-sm text-[#0a192f]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0a192f] mb-2">
                    Tell us about your outsourcing needs...
                  </label>
                  <textarea
                    required
                    minLength={10}
                    rows={4}
                    placeholder="Tell us about your outsourcing needs... (min 10 characters)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F4821F] text-sm text-[#0a192f] resize-none"
                  />
                </div>

                {errorMsg && (
                  <p className="text-red-500 text-xs font-semibold bg-red-50 p-3 rounded-xl border border-red-200">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#0a192f] text-white font-bold text-lg rounded-xl hover:bg-[#F4821F] hover:text-[#0a192f] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
