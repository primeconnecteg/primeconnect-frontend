"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Calendar, ShieldCheck } from "lucide-react";

import DateTimePickerModal from "./DateTimePickerModal";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [pickerOpen, setPickerOpen] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    if (!preferredDate) {
      setErrorMsg("Please select a preferred meeting date.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/v1/meeting-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: name,
          companyName: company,
          businessEmail: email,
          meetingDate: preferredDate,
          comment: ""
        })
      });

      const data = await res.json().catch(() => null);

      if (res.ok) {
        setSubmitted(true);
      } else if (res.status === 409) {
        setErrorMsg("A pending meeting request already exists for this email and date.");
      } else {
        const msg = data?.message || data?.detail || data?.error || "Failed to submit meeting request. Please try again.";
        setErrorMsg(typeof msg === "string" ? msg : JSON.stringify(msg));
      }
    } catch (err: any) {
      setErrorMsg("Network error connecting to server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#04143F]/60 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative border border-[#0A0C0D]/10"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-[#5F6C7C] hover:text-[#0A0C0D] transition-colors bg-[#F2F4F7] hover:bg-slate-200 p-2 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-[#075CE0]/15 text-[#075CE0] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9 text-[#075CE0]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A0C0D] font-heading mb-2">
                  Discovery Call Confirmed!
                </h3>
                <p className="text-sm font-medium text-[#5F6C7C] mb-6 leading-relaxed">
                  Yousef Mattar (Business Development Manager) will reach out shortly to finalize your 30-minute consultation.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full py-3.5 rounded-full bg-[#075CE0] text-white font-bold text-sm shadow-md shadow-[#075CE0]/30 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div className="py-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#075CE0] cyan-badge px-3 py-1 rounded-full mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book a Discovery Call</span>
                </div>

                <h3 className="text-2xl font-bold text-[#0A0C0D] font-heading mb-1">
                  Schedule Time with Yousef Mattar
                </h3>
                <p className="text-xs text-[#5F6C7C] mb-6 leading-relaxed font-sans">
                  30-minute discovery call to discuss your offshore BPO client acquisition & CRM integration goals.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0A0C0D] mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F2F4F7] border border-transparent text-[#0A0C0D] text-sm placeholder:text-[#5F6C7C] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#075CE0] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0A0C0D] mb-1">Company Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Company name"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F2F4F7] border border-transparent text-[#0A0C0D] text-sm placeholder:text-[#5F6C7C] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#075CE0] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0A0C0D] mb-1">Business Email</label>
                    <input
                      type="email"
                      required
                      placeholder="your@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F2F4F7] border border-transparent text-[#0A0C0D] text-sm placeholder:text-[#5F6C7C] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#075CE0] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0A0C0D] mb-1">Preferred Date</label>
                    <div className="relative flex items-center">
                      <input
                        type="text"
                        readOnly
                        onClick={() => setPickerOpen(true)}
                        placeholder="Click to select Date..."
                        value={preferredDate}
                        className="w-full px-4 py-3 pr-10 rounded-xl bg-[#F2F4F7] border border-transparent text-[#0A0C0D] text-sm placeholder:text-[#5F6C7C] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#075CE0] transition-all cursor-pointer select-none font-medium"
                      />
                      <button
                        type="button"
                        onClick={() => setPickerOpen(true)}
                        className="absolute right-3 text-[#075CE0] hover:text-[#082A78] transition-colors p-1 cursor-pointer"
                        title="Open Calendar"
                      >
                        <Calendar className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl leading-relaxed">
                      ⚠️ {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-2 py-3.5 rounded-full bg-[#075CE0] text-white font-bold text-sm shadow-lg shadow-[#075CE0]/30 hover:bg-[#082A78] transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? "Confirming..." : "Confirm Discovery Call"}
                  </button>

                  <p className="text-[11px] text-[#5F6C7C] text-center font-semibold flex items-center justify-center gap-1 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#075CE0]" />
                    <span>Backed by 45-Day Performance Guarantee</span>
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </AnimatePresence>

      <DateTimePickerModal
        isOpen={pickerOpen}
        onClose={() => setPickerOpen(false)}
        onSelect={(dateTimeStr) => setPreferredDate(dateTimeStr)}
        initialValue={preferredDate}
      />
    </>
  );
}


