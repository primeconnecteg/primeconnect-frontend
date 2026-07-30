"use client";

import React, { useMemo, useState } from "react";
import { Calendar, CheckCircle2, Loader2, X } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import {
  toMeetingRequestApiPayload,
  formatSelectedDate,
  startOfToday,
  type MeetingRequestFieldErrors,
  type MeetingRequestFormValues,
  validateMeetingRequestForm,
} from "@/lib/meetingRequest";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const INITIAL_FORM_VALUES: MeetingRequestFormValues = {
  fullName: "",
  companyName: "",
  businessEmail: "",
  comment: "",
};

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [step, setStep] = useState<"date" | "form" | "success">("date");
  const [formValues, setFormValues] = useState<MeetingRequestFormValues>(INITIAL_FORM_VALUES);
  const [fieldErrors, setFieldErrors] = useState<MeetingRequestFieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const today = useMemo(() => startOfToday(), []);
  const calendarEnd = useMemo(
    () => new Date(today.getFullYear() + 2, 11, 31),
    [today]
  );
  const commentLength = formValues.comment.length;
  const isFormValid = Object.keys(
    validateMeetingRequestForm({ ...formValues, meetingDate: selectedDate })
  ).length === 0;

  if (!isOpen) return null;

  const resetBookingState = () => {
    setSelectedDate(undefined);
    setStep("date");
    setFormValues(INITIAL_FORM_VALUES);
    setFieldErrors({});
    setServerError(null);
    setIsSubmitting(false);
  };

  const handleClose = () => {
    resetBookingState();
    onClose();
  };

  const handleDateContinue = () => {
    setFieldErrors({});
    setServerError(null);
    setStep("form");
  };

  const handleFieldChange = <K extends keyof MeetingRequestFormValues>(
    field: K,
    value: MeetingRequestFormValues[K]
  ) => {
    setFormValues((current) => ({ ...current, [field]: value }));
    setFieldErrors((current) => ({ ...current, [field]: undefined }));
    setServerError(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateMeetingRequestForm({ ...formValues, meetingDate: selectedDate });
    setFieldErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    if (!selectedDate) {
      setFieldErrors((current) => ({ ...current, meetingDate: "Please select a date." }));
      return;
    }

    setIsSubmitting(true);
    setServerError(null);

    try {
      const payload = toMeetingRequestApiPayload({ ...formValues, meetingDate: selectedDate });

      console.log("[BookingModal] Submitting payload:", payload);

      const response = await fetch("/api/v1/meeting-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseData = (await response.json().catch(() => null)) as
        | { detail?: string; error?: string; message?: string; errors?: MeetingRequestFieldErrors }
        | null;

      console.log(`[BookingModal] HTTP Status: ${response.status}`);
      console.log("[BookingModal] Response Body:", responseData);

      if (!response.ok) {
        // Extract the exact backend message — never replace with a generic fallback
        const backendMessage =
          responseData?.detail ||
          responseData?.message ||
          responseData?.error ||
          `Request failed (HTTP ${response.status})`;

        if (responseData?.errors && typeof responseData.errors === "object") {
          setFieldErrors(responseData.errors);
        }

        setServerError(backendMessage);
        return;
      }

      setStep("success");
      setFieldErrors({});
      setServerError(null);
    } catch (error: any) {
      const errMsg = error?.message || String(error);
      console.error("[BookingModal] Submission exception:", error);
      setServerError(errMsg || "Failed to connect to server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#0a192f]/10 text-slate-900"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#0a192f]/10">
          <div>
            <h3 className="text-lg font-bold text-[#0a192f]">Book a Discovery Call</h3>
            <p className="text-sm text-[#0a192f]/50">with Yousef Mattar — Prime Connect EG</p>
          </div>
          <button
            onClick={handleClose}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#0a192f]/40 hover:bg-[#0a192f]/5 hover:text-[#0a192f] transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {step === "date" && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-[#0a192f] mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#F4821F]" />
                  <span>Select a Date</span>
                </label>

                <div className="w-full rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm flex justify-center">
                  <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={{ before: today }}
                    defaultMonth={today}
                    startMonth={today}
                    endMonth={calendarEnd}
                    showOutsideDays={false}
                    captionLayout="label"
                    className="w-full max-w-sm"
                    classNames={{
                      root: "w-full relative",
                      months: "w-full",
                      month: "w-full flex flex-col gap-y-4",
                      month_caption: "flex w-full items-center justify-center pt-1",
                      caption_label:
                        "text-center text-base sm:text-lg font-bold text-[#0a192f] tracking-[0.02em]",
                      nav: "absolute top-0 left-0 w-full flex justify-between z-10 pointer-events-none",
                      button_previous:
                        "pointer-events-auto h-8 w-8 sm:h-9 sm:w-9 rounded-full border border-slate-200 bg-white text-[#0a192f] shadow-sm transition-colors hover:bg-[#F4821F] hover:text-white hover:border-[#F4821F] hover:shadow-md flex items-center justify-center",
                      button_next:
                        "pointer-events-auto h-8 w-8 sm:h-9 sm:w-9 rounded-full border border-slate-200 bg-white text-[#0a192f] shadow-sm transition-colors hover:bg-[#F4821F] hover:text-white hover:border-[#F4821F] hover:shadow-md flex items-center justify-center",
                      chevron: "h-4 w-4 fill-current",
                      month_grid: "w-full border-collapse",
                      weekdays: "w-full",
                      weekday:
                        "text-center text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.14em] text-[#0a192f]/45 pb-2",
                      weeks: "w-full",
                      week: "w-full",
                      day: "text-center",
                      day_button:
                        "mx-auto flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-transparent text-sm font-medium text-[#0a192f] transition-all duration-200 hover:bg-[#F4821F]/10 hover:text-[#0a192f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4821F] focus-visible:ring-offset-2 focus-visible:ring-offset-white cursor-pointer",
                    }}
                    modifiersClassNames={{
                      today: "[&>button]:!border-[#F4821F] [&>button]:!font-semibold [&>button]:!text-[#0a192f]",
                      selected:
                        "[&>button]:!border-0 [&>button]:!bg-[#F4821F] [&>button]:!text-white [&>button]:!shadow-md [&>button]:shadow-[#F4821F]/25 [&>button]:rounded-full",
                      disabled:
                        "cursor-not-allowed text-slate-300 opacity-45 hover:bg-transparent hover:text-slate-300",
                      outside: "text-slate-200 opacity-35",
                    }}
                  />
                </div>
              </div>

              <button
                disabled={!selectedDate}
                onClick={handleDateContinue}
                className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${
                  selectedDate
                    ? "bg-[#0a192f] hover:bg-[#F4821F] hover:text-[#0a192f] text-white cursor-pointer shadow-md"
                    : "bg-slate-300 text-slate-500 cursor-not-allowed"
                }`}
              >
                Continue
              </button>
            </div>
          )}

          {step === "form" && selectedDate && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3.5 rounded-xl bg-slate-100 text-xs font-semibold text-slate-700 flex items-start gap-2 mb-4">
                <Calendar className="w-4 h-4 text-[#F4821F] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#0a192f]">Selected Date:</p>
                  <p className="text-sm text-slate-700">{formatSelectedDate(selectedDate)}</p>
                </div>
              </div>

              {serverError && (
                <div
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                  role="alert"
                >
                  {serverError}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-[#0a192f] mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  minLength={3}
                  placeholder="Your Full Name"
                  value={formValues.fullName}
                  disabled={isSubmitting}
                  onChange={(event) => handleFieldChange("fullName", event.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#F4821F] focus:outline-none text-sm disabled:bg-slate-100 disabled:text-slate-500"
                />
                {fieldErrors.fullName && <p className="mt-1 text-xs text-red-600">{fieldErrors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0a192f] mb-1">Company Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Company Name"
                  value={formValues.companyName}
                  disabled={isSubmitting}
                  onChange={(event) => handleFieldChange("companyName", event.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#F4821F] focus:outline-none text-sm disabled:bg-slate-100 disabled:text-slate-500"
                />
                {fieldErrors.companyName && (
                  <p className="mt-1 text-xs text-red-600">{fieldErrors.companyName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0a192f] mb-1">Business Email *</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formValues.businessEmail}
                  disabled={isSubmitting}
                  onChange={(event) => handleFieldChange("businessEmail", event.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#F4821F] focus:outline-none text-sm disabled:bg-slate-100 disabled:text-slate-500"
                />
                {fieldErrors.businessEmail && (
                  <p className="mt-1 text-xs text-red-600">{fieldErrors.businessEmail}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0a192f] mb-1">Message / Details (Min 1000 characters) *</label>
                <textarea
                  required
                  minLength={1000}
                  placeholder="Share any context that would help us prepare for the call..."
                  value={formValues.comment}
                  disabled={isSubmitting}
                  maxLength={5000}
                  rows={5}
                  onChange={(event) => handleFieldChange("comment", event.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#F4821F] focus:outline-none text-sm resize-none disabled:bg-slate-100 disabled:text-slate-500"
                />
                <div className="mt-1 flex items-center justify-between gap-3 text-xs text-slate-500 font-bold">
                  <span>
                    {fieldErrors.comment && <span className="text-red-600">{fieldErrors.comment}</span>}
                  </span>
                  <span className={commentLength < 1000 ? "text-red-500" : "text-emerald-500"}>{commentLength} / 1000 min chars</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep("date")}
                  disabled={isSubmitting}
                  className="w-1/3 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  className="w-2/3 py-3 rounded-xl bg-[#F4821F] hover:bg-[#F69947] text-[#0a192f] font-bold text-sm shadow-md cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 flex items-center justify-center gap-2"
                >
                  {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                  <span>{isSubmitting ? "Submitting..." : "Request Discovery Call"}</span>
                </button>
              </div>
            </form>
          )}

          {step === "success" && (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-3">
                <h4 className="text-2xl font-black text-[#0a192f]">Thank you!</h4>
                <p className="text-sm text-slate-600">
                  Your discovery call request has been received successfully.
                </p>
                <p className="text-sm text-slate-600">
                  Our team will review your request and contact you shortly.
                </p>
              </div>

              <button
                onClick={handleClose}
                className="w-full py-3 bg-[#0a192f] text-white font-bold text-sm rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Back to Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
