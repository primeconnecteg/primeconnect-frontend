"use client";

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
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
      return (
            <main className="min-h-screen bg-[#F2F4F7] text-[#0A0C0D] font-sans selection:bg-[#08BEEA] selection:text-[#04143F]">
                  {/* Loading Screen Overlay */}
                  <LoadingScreen />
                  
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

                  {/* 7. FAQs Section */}
                  <FaqSection />

                  {/* 8. Large Call To Action Banner ("Shot your startup into a new era, start now.") */}
                  <CtaBannerSection />

                  {/* 9. Footer */}
                  <PropellentFooter />
            </main>
      );
}

