"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Why Egypt", href: "#why-egypt" },
    { label: "Process", href: "#process" },
    { label: "Guarantee", href: "#guarantee" },
    { label: "Leadership", href: "#leadership" },
    { label: "FAQs", href: "#faqs" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F2F4F7]/95 backdrop-blur-md border-b border-[#0A0C0D]/10 py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Branding */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#082A78] flex items-center justify-center text-white font-black text-xl shadow-md shadow-[#082A78]/20 group-hover:scale-105 transition-transform">
              P
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#0A0C0D] font-heading leading-tight">
                Prime<span className="text-[#075CE0]">Connect</span>
              </span>
              <span className="text-[10px] uppercase font-bold text-[#5F6C7C] tracking-wider">
                Egypt BPO Growth
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-semibold text-[#0A0C0D] hover:text-[#075CE0] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full bg-[#075CE0] text-white font-semibold text-sm hover:bg-[#082A78] transition-all shadow-md shadow-[#075CE0]/25 hover:shadow-lg cursor-pointer flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#08BEEA]" />
              <span>Book a Discovery Call</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#0A0C0D] p-2 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FFFFFF] border-b border-[#0A0C0D]/10 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-2.5 text-base font-medium text-[#0A0C0D] hover:bg-[#F2F4F7] rounded-xl transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 px-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-full bg-[#075CE0] text-white font-semibold text-center shadow-md shadow-[#075CE0]/25"
                >
                  Book a Discovery Call
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


