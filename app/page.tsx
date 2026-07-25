"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DualEngine from "@/components/DualEngine";
import WhyEgypt from "@/components/WhyEgypt";
import Pipeline from "@/components/Pipeline";
import Guarantee from "@/components/Guarantee";
import LaunchPartner from "@/components/LaunchPartner";
import Team from "@/components/Team";
import ContactSection from "@/components/ContactSection";
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
    <main className="min-h-screen bg-white selection:bg-orange-500 selection:text-slate-950 font-sans">
      {/* 1. Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 2. Hero Section */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* 3. Our Services: Dual-Engine Strategy */}
      <DualEngine />

      {/* 4. The Advantage: Why Egypt? */}
      <WhyEgypt />

      {/* 5. The Process: From Discovery to Signed Clients */}
      <Pipeline />

      {/* 6. Our Performance Guarantee */}
      <Guarantee />

      {/* 7. Launch Partner Program */}
      <LaunchPartner onOpenBooking={handleOpenBooking} />

      {/* 8. Your Point of Contact: Meet Yousef Mattar & Infrastructure Partner */}
      <Team onOpenBooking={handleOpenBooking} />

      {/* 9. Get In Touch: Ready to Grow? */}
      <ContactSection />

      {/* 10. Footer */}
      <Footer />

      {/* 11. Discovery Booking Modal */}
      <BookingModal isOpen={bookingModalOpen} onClose={handleCloseBooking} />
    </main>
  );
}
