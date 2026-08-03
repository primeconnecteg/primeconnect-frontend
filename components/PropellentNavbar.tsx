"use client";

import React from "react";

export default function PropellentNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#F2F4F7]/90 backdrop-blur-md border-b border-gray-200/60 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center group">
          <img
            src="/prime-connect-logo.png"
            alt="Prime Connect EG Logo"
            className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-102"
          />
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          <a
            href="#what-we-do"
            className="text-xs font-semibold text-[#5F6C7C] hover:text-[#082A78] transition-colors"
          >
            What We Do
          </a>
          <a
            href="#why-egypt"
            className="text-xs font-semibold text-[#5F6C7C] hover:text-[#082A78] transition-colors"
          >
            Why Egypt
          </a>
          <a
            href="#how-it-works"
            className="text-xs font-semibold text-[#5F6C7C] hover:text-[#082A78] transition-colors"
          >
            How It Works
          </a>
          <a
            href="#guarantee"
            className="text-xs font-semibold text-[#5F6C7C] hover:text-[#082A78] transition-colors"
          >
            Our Guarantee
          </a>
          <a
            href="/certifications"
            className="text-xs font-semibold text-[#5F6C7C] hover:text-[#082A78] transition-colors"
          >
            Certifications
          </a>
          <a
            href="#contact"
            className="text-xs font-semibold text-[#5F6C7C] hover:text-[#082A78] transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right CTA Button */}
        <div>
          <a
            href="#book-call"
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-white bg-[#075CE0] hover:bg-[#082A78] rounded-full shadow-md shadow-blue-600/20 transition-all duration-200 active:scale-95"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
}
