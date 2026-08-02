"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Benefits", href: "#features" },
    { label: "Product", href: "#solutions" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQs", href: "#metrics" },
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
        scrolled ? "bg-[var(--color-white)]/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.05)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[96px]">
          {/* Logo Branding */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-[36px] h-[36px] rounded-[10px] border-2 border-[var(--color-cobalt)] flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-[18px] h-[18px] border-[3px] border-[var(--color-cobalt)] rounded-sm rotate-12" />
            </div>
            <span className="text-[20px] font-semibold tracking-tight text-[var(--color-graphite)] font-heading">
              PrimeConnect
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-[32px]">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[16px] font-medium font-sans text-[var(--color-graphite)] hover:text-[var(--color-cobalt)] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenBooking}
              className="px-[20px] py-[12px] rounded-[8px] border border-[var(--color-cobalt)]/30 text-[var(--color-cobalt)] font-medium font-sans text-[16px] transition-all hover:border-[var(--color-cobalt)] hover:bg-[var(--color-cobalt)]/5 cursor-pointer shadow-sm"
            >
              Get Template
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[var(--color-graphite)] p-2 transition-colors"
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
            className="md:hidden bg-[var(--color-white)] border-b border-[var(--color-graphite)]/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-3 text-[16px] font-medium font-sans text-[var(--color-graphite)] hover:bg-[var(--color-off-white)] rounded-[8px] transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 px-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-[12px] border border-[var(--color-cobalt)]/30 text-[var(--color-cobalt)] font-medium font-sans rounded-[8px] text-center"
                >
                  Get Template
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
