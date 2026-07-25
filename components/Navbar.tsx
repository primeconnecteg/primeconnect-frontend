"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "What We Do", href: "#what-we-do" },
    { label: "Why Egypt", href: "#why-egypt" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Our Guarantee", href: "#guarantee" },
    { label: "Certifications", href: "/certifications" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/" + href;
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0a192f]/95 backdrop-blur-md ${
        scrolled
          ? "shadow-2xl shadow-[#0a192f]/80 py-2 border-b border-white/5"
          : "py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-14 md:h-16" : "h-22 md:h-26"
          }`}
        >
          {/* Dynamic Shrink-on-Scroll Brand Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-2 shrink-0 text-left cursor-pointer focus:outline-none"
          >
            <img
              src="/logo.png"
              alt="Prime Connect EG"
              className={`w-auto object-contain transition-all duration-500 drop-shadow-md ${
                scrolled
                  ? "h-11 md:h-13 lg:h-14"
                  : "h-20 md:h-24 lg:h-28"
              }`}
            />
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-white/80 hover:text-[#F4821F] transition-colors duration-300 tracking-wide cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={onOpenBooking}
              className={`bg-[#F4821F] text-[#0a192f] font-bold rounded-full hover:bg-[#F69947] transition-all duration-300 hover:scale-105 sonar-pulse cursor-pointer shadow-md shadow-[#F4821F]/20 ${
                scrolled
                  ? "px-5 py-2 text-xs md:text-sm"
                  : "px-7 py-3 text-sm md:text-base"
              }`}
            >
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-[#0a192f]/98 backdrop-blur-xl border-t border-white/10 px-6 py-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-white/80 hover:text-[#F4821F] font-medium py-2 transition-colors border-b border-white/5"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="mt-2 px-6 py-3 bg-[#F4821F] text-[#0a192f] font-bold rounded-full text-center"
          >
            Book a Call
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
