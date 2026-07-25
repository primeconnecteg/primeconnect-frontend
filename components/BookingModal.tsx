"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, CheckCircle2 } from "lucide-react";
import { saveLead } from "@/lib/leadStore";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<string>("Tomorrow, 3:00 PM GMT+3");
  const [step, setStep] = useState<"time" | "form" | "confirmed">("time");
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    company: "",
  });

  if (!isOpen) return null;

  const timeSlots = [
    "Tomorrow, 2:00 PM GMT+3",
    "Tomorrow, 3:00 PM GMT+3",
    "Tomorrow, 5:30 PM GMT+3",
    "Thursday, 11:00 AM GMT+3",
    "Thursday, 4:00 PM GMT+3",
  ];

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const payload = {
      name: bookingDetails.name,
      email: bookingDetails.email,
      company: bookingDetails.company || "Not specified",
      message: `Requested discovery call time slot: ${selectedDate}`,
    };

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      await fetch(`${apiUrl}/api/v1/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.warn("Could not connect to FastAPI backend for discovery call:", err);
    } finally {
      saveLead({
        ...payload,
        type: "Discovery Call",
      });

      setStep("confirmed");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#0a192f]/10 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#0a192f]/10">
          <div>
            <h3 className="text-lg font-bold text-[#0a192f]">Book a Discovery Call</h3>
            <p className="text-sm text-[#0a192f]/50">
              with Yousef Mattar — Prime Connect EG
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#0a192f]/40 hover:bg-[#0a192f]/5 hover:text-[#0a192f] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {step === "time" && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-[#0a192f] mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#F4821F]" />
                  <span>Select a Time Slot</span>
                </label>
                <div className="space-y-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedDate(slot)}
                      className={`w-full text-left p-3.5 rounded-xl border text-sm font-semibold transition-all flex items-center justify-between ${
                        selectedDate === slot
                          ? "border-[#F4821F] bg-orange-50 text-orange-950 shadow-sm"
                          : "border-slate-200 hover:border-slate-300 text-slate-700"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#F4821F]" />
                        {slot}
                      </span>
                      {selectedDate === slot && (
                        <CheckCircle2 className="w-5 h-5 text-[#F4821F]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setStep("form")}
                className="w-full py-4 rounded-xl bg-[#0a192f] hover:bg-[#F4821F] hover:text-[#0a192f] text-white font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Continue with Selected Slot</span>
              </button>
            </div>
          )}

          {step === "form" && (
            <form onSubmit={handleConfirm} className="space-y-4">
              <div className="p-3.5 rounded-xl bg-slate-100 text-xs font-semibold text-slate-700 flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-[#F4821F] shrink-0" />
                <span>Selected: {selectedDate}</span>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0a192f] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={bookingDetails.name}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#F4821F] focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0a192f] mb-1">
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={bookingDetails.email}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#F4821F] focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0a192f] mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  value={bookingDetails.company}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#F4821F] focus:outline-none text-sm"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep("time")}
                  className="w-1/3 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3 rounded-xl bg-[#F4821F] hover:bg-[#F69947] text-[#0a192f] font-bold text-sm shadow-md cursor-pointer"
                >
                  Confirm Meeting
                </button>
              </div>
            </form>
          )}

          {step === "confirmed" && (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-black text-[#0a192f]">Call Scheduled!</h4>
              <p className="text-sm text-slate-600">
                A calendar invitation for <strong className="text-slate-900">{selectedDate}</strong> has been prepared for <strong className="text-slate-900">{bookingDetails.email || "your email"}</strong>.
              </p>
              <button
                onClick={() => {
                  setStep("time");
                  onClose();
                }}
                className="w-full py-3 bg-[#0a192f] text-white font-bold text-sm rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
