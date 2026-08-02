"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/v1/meeting-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, company })
      }).catch(() => {});
    } catch (err) {}

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0A0C0D]/40 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white border border-[#0A0C0D]/10 rounded-[2rem] p-8 max-w-md w-full shadow-2xl relative"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-[#5F6C7C] hover:text-[#0A0C0D] transition-colors bg-[#F2F4F7] hover:bg-[#E2E8F0] p-2 rounded-full cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-[#E5F7FD] text-[#08BEEA] flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A0C0D] mb-3 tracking-tight">
                Request Sent
              </h3>
              <p className="text-[15px] font-medium text-[#5F6C7C] mb-8 leading-relaxed">
                Thank you for your interest. Our team will contact you shortly to schedule your consultation.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-4 rounded-xl bg-[#075CE0] text-white font-bold text-[15px] transition-transform hover:scale-[1.02] shadow-lg shadow-[#075CE0]/20"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div className="py-2">
              <h3 className="text-2xl font-bold text-[#0A0C0D] mb-2 tracking-tight">
                Secure your spot now
              </h3>
              <p className="text-[15px] font-medium text-[#5F6C7C] mb-8">
                Be the first to know when the product launches and other not-to-miss updates.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl bg-[#F2F4F7] border border-transparent text-[#0A0C0D] text-[15px] font-medium placeholder:text-[#5F6C7C] focus:outline-none focus:bg-white focus:border-[#075CE0] focus:ring-1 focus:ring-[#075CE0] transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl bg-[#F2F4F7] border border-transparent text-[#0A0C0D] text-[15px] font-medium placeholder:text-[#5F6C7C] focus:outline-none focus:bg-white focus:border-[#075CE0] focus:ring-1 focus:ring-[#075CE0] transition-colors"
                />
                <input
                  type="text"
                  required
                  placeholder="Company name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl bg-[#F2F4F7] border border-transparent text-[#0A0C0D] text-[15px] font-medium placeholder:text-[#5F6C7C] focus:outline-none focus:bg-white focus:border-[#075CE0] focus:ring-1 focus:ring-[#075CE0] transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 py-4 rounded-xl bg-[#075CE0] text-white font-bold text-[15px] transition-transform hover:scale-[1.02] hover:bg-[#082A78] disabled:opacity-50 shadow-lg shadow-[#075CE0]/20"
                >
                  {loading ? "Sending..." : "Join the Waitlist"}
                </button>
                <p className="text-[11px] font-medium text-[#5F6C7C] text-center pt-2">
                  By subscribing, you agree with our <a href="#" className="underline hover:text-[#0A0C0D]">Terms of License</a>
                </p>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
