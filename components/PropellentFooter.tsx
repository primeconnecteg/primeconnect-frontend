"use client";

import React from "react";

export default function PropellentFooter() {
  return (
    <footer className="bg-[#04143F] text-white py-12 border-t border-blue-900/60">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center group">
            <img
              src="/prime-connect-logo-white.png"
              alt="Prime Connect EG White Logo"
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </a>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-300 font-semibold">
            <a href="#what-we-do" className="hover:text-[#08BEEA] transition-colors">What We Do</a>
            <a href="#why-egypt" className="hover:text-[#08BEEA] transition-colors">Why Egypt</a>
            <a href="#how-it-works" className="hover:text-[#08BEEA] transition-colors">How It Works</a>
            <a href="#guarantee" className="hover:text-[#08BEEA] transition-colors">Our Guarantee</a>
            <a href="/certifications" className="hover:text-[#08BEEA] transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-[#08BEEA] transition-colors">Contact</a>
          </div>

        </div>

        <div className="border-t border-blue-900/40 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 font-medium gap-4 text-center">
          <p>
            Prime Connect EG © 2026 · Cairo, Egypt ·{" "}
            <a href="mailto:info@primeconnecteg.com" className="text-gray-300 hover:text-white underline">
              info@primeconnecteg.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
