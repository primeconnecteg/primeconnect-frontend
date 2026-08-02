"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyPrime from "@/components/WhyPrime";
import SolutionsSection from "@/components/SolutionsSection";
import AboutPrime from "@/components/AboutPrime";
import TestimonialsSection from "@/components/TestimonialsSection";
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
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-white selection:text-black">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* Intro text / Features */}
      <WhyPrime />

      {/* Core Solutions Bento Grid */}
      <SolutionsSection onOpenBooking={handleOpenBooking} />

      {/* Big Metrics */}
      <AboutPrime />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Large CTA Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Booking Modal */}
      <BookingModal isOpen={bookingModalOpen} onClose={handleCloseBooking} />
    </main>
  );
}
