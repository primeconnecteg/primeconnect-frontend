"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Calendar as CalendarIcon, Check } from "lucide-react";

interface DateTimePickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (dateTimeStr: string) => void;
  initialValue?: string;
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface CalendarCell {
  day: number;
  dateObj: Date;
  isPast: boolean;
  isToday: boolean;
  isSelected: boolean;
}

export default function DateTimePickerModal({
  isOpen,
  onClose,
  onSelect,
}: DateTimePickerModalProps) {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [currentMonthDate, setCurrentMonthDate] = useState<Date>(() => new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  if (!isOpen) return null;

  const currentYear = currentMonthDate.getFullYear();
  const currentMonth = currentMonthDate.getMonth();

  // Navigation handlers
  const canGoPrevMonth =
    currentYear > today.getFullYear() ||
    (currentYear === today.getFullYear() && currentMonth > today.getMonth());

  const handlePrevMonth = () => {
    if (!canGoPrevMonth) return;
    setCurrentMonthDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonthDate(new Date(currentYear, currentMonth + 1, 1));
  };

  // Calendar Grid calculations
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const calendarCells: (CalendarCell | null)[] = [];
  // Empty slots before 1st of month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarCells.push(null);
  }
  // Days of month
  for (let day = 1; day <= daysInMonth; day++) {
    const dateObj = new Date(currentYear, currentMonth, day);
    dateObj.setHours(0, 0, 0, 0);
    const isPast = dateObj < today;
    const isToday = dateObj.getTime() === today.getTime();
    const isSelected = selectedDate !== null && dateObj.getTime() === selectedDate.getTime();

    calendarCells.push({
      day,
      dateObj,
      isPast,
      isToday,
      isSelected,
    });
  }

  const handleSelectDay = (cell: CalendarCell | null) => {
    if (!cell || cell.isPast) return;
    setSelectedDate(cell.dateObj);
  };

  const handleConfirm = () => {
    if (!selectedDate) return;

    const formattedDate = selectedDate.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    onSelect(formattedDate);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-[#04143F]/70 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative border border-[#0A0C0D]/10 my-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-2xl bg-[#075CE0]/10 text-[#075CE0] flex items-center justify-center">
                <CalendarIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0A0C0D] font-heading">
                  Select Preferred Date
                </h3>
                <p className="text-xs text-[#5F6C7C]">
                  Choose any available date
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-[#5F6C7C] hover:text-[#0A0C0D] transition-colors bg-[#F2F4F7] hover:bg-slate-200 p-2 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Calendar Section */}
          <div className="mb-6">
            {/* Month & Year Navigation Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-base font-bold text-[#0A0C0D] font-heading">
                {MONTH_NAMES[currentMonth]} {currentYear}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrevMonth}
                  disabled={!canGoPrevMonth}
                  className={`p-2 rounded-xl transition-all ${
                    canGoPrevMonth
                      ? "hover:bg-[#F2F4F7] text-[#0A0C0D] cursor-pointer"
                      : "opacity-30 cursor-not-allowed text-slate-400"
                  }`}
                  title="Previous Month"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextMonth}
                  className="p-2 rounded-xl hover:bg-[#F2F4F7] text-[#0A0C0D] transition-all cursor-pointer"
                  title="Next Month"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Weekdays Header */}
            <div className="grid grid-cols-7 text-center text-xs font-semibold text-[#5F6C7C] mb-2">
              {WEEKDAYS.map((wd) => (
                <div key={wd} className="py-1">
                  {wd}
                </div>
              ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-1">
              {calendarCells.map((cell, idx) => {
                if (!cell) {
                  return <div key={`empty-${idx}`} className="h-10 sm:h-11" />;
                }

                return (
                  <button
                    key={`day-${cell.day}`}
                    disabled={cell.isPast}
                    onClick={() => handleSelectDay(cell)}
                    className={`h-10 sm:h-11 rounded-xl font-medium text-sm transition-all flex flex-col items-center justify-center relative cursor-pointer ${
                      cell.isPast
                        ? "text-slate-300 bg-slate-50/50 cursor-not-allowed opacity-50"
                        : cell.isSelected
                        ? "bg-[#075CE0] text-white font-bold shadow-md shadow-[#075CE0]/30 scale-105"
                        : "hover:bg-[#075CE0]/15 hover:text-[#075CE0] text-[#0A0C0D] bg-[#F2F4F7]/60"
                    }`}
                  >
                    <span>{cell.day}</span>
                    {cell.isToday && !cell.isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#075CE0] absolute bottom-1" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer Selection Summary & Submit */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-[#5F6C7C] text-center sm:text-left w-full sm:w-auto">
              {selectedDate ? (
                <div className="flex items-center gap-1.5 text-[#075CE0] font-semibold">
                  <Check className="w-4 h-4 text-[#075CE0]" />
                  <span>
                    {selectedDate.toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              ) : (
                <span>No date selected</span>
              )}
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl bg-[#F2F4F7] text-[#0A0C0D] text-xs font-bold hover:bg-slate-200 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={!selectedDate}
                onClick={handleConfirm}
                className="w-1/2 sm:w-auto px-6 py-2.5 rounded-xl bg-[#075CE0] text-white text-xs font-bold shadow-lg shadow-[#075CE0]/30 hover:bg-[#082A78] transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                Confirm Date
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

