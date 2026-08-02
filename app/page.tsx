"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SolutionsSection from "@/components/SolutionsSection";
import WhyPrime from "@/components/WhyPrime";
import BusinessProcess from "@/components/BusinessProcess";
import PerformanceGuarantee from "@/components/PerformanceGuarantee";
import LaunchPartnerProgram from "@/components/LaunchPartnerProgram";
import MeetLeadership from "@/components/MeetLeadership";
import FaqSection from "@/components/FaqSection";
import BottomCta from "@/components/BottomCta";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#F2F4F7] text-[#0A0C0D] font-sans overflow-x-hidden selection:bg-[#075CE0] selection:text-white">
      {/* Top Sticky Navigation */}

      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Section */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* Primary Dual-Engine Services */}
      <SolutionsSection onOpenBooking={handleOpenBooking} />

      {/* Why Egypt / Why Prime Connect Bento Grid */}
      <WhyPrime />

      {/* 6-Step Pipeline Process */}
      <BusinessProcess />

      {/* Performance Guarantee & Metrics */}
      <PerformanceGuarantee onOpenBooking={handleOpenBooking} />

      {/* Launch Partner Program Perks */}
      <LaunchPartnerProgram onOpenBooking={handleOpenBooking} />

      {/* Meet Leadership & Yousef Mattar Booking */}
      <MeetLeadership onOpenBooking={handleOpenBooking} />

      {/* Interactive FAQ Accordion */}
      <FaqSection />

      {/* Split Bottom Lime Green Banner */}
      <BottomCta onOpenBooking={handleOpenBooking} />

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal isOpen={bookingModalOpen} onClose={handleCloseBooking} />
    </main>
  );
}

