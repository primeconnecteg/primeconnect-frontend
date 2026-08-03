"use client";

<<<<<<< HEAD
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
=======
import React from "react";
import InteractiveCoverHero from "@/components/InteractiveCoverHero";
import PropellentNavbar from "@/components/PropellentNavbar";
import PropellentHero from "@/components/PropellentHero";
import StartupHassleSection from "@/components/StartupHassleSection";
import CuttingEdgeFeatures from "@/components/CuttingEdgeFeatures";
import BentoAndGridSection from "@/components/BentoAndGridSection";
import MetricsAndTestimonials from "@/components/MetricsAndTestimonials";
import FaqSection from "@/components/FaqSection";
import CtaBannerSection from "@/components/CtaBannerSection";
import PropellentFooter from "@/components/PropellentFooter";
>>>>>>> main

export default function Home() {
  return (
<<<<<<< HEAD
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
=======
    <main className="min-h-screen bg-[#F2F4F7] text-[#0A0C0D] font-sans selection:bg-[#08BEEA] selection:text-[#04143F]">
      {/* 0. Interactive Sky Gradient Cover Hero (New Start Section) */}
      <InteractiveCoverHero />

      {/* 1. Header Navigation */}
      <PropellentNavbar />

      {/* 2. Hero Section */}
      <PropellentHero />

      {/* 3. Startup Hassle Section with 3 Lime Cards */}
      <StartupHassleSection />

      {/* 4. Cutting Edge Features Section */}
      <CuttingEdgeFeatures />

      {/* 5. Bento Grid & "And More is Coming" Grid */}
      <BentoAndGridSection />

      {/* 6. Metrics & Testimonials Section */}
      <MetricsAndTestimonials />
>>>>>>> main

      {/* 7. FAQs Section */}
      <FaqSection />

<<<<<<< HEAD
      {/* Interactive Booking Modal */}
      <BookingModal isOpen={bookingModalOpen} onClose={handleCloseBooking} />
=======
      {/* 8. Large Call To Action Banner ("Shot your startup into a new era, start now.") */}
      <CtaBannerSection />

      {/* 9. Footer */}
      <PropellentFooter />
>>>>>>> main
    </main>
  );
}

