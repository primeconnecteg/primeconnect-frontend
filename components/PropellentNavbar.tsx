"use client";

import React, { useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PropellentNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "What We Do", href: "/#what-we-do" },
    { label: "Why Egypt", href: "/#why-egypt" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Our Guarantee", href: "/#guarantee" },
    { label: "Certifications", href: "/certifications" },
    { label: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") || href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "").replace("#", "");
      const isMobile = mobileMenuOpen;

      setMobileMenuOpen(false);

      const doScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: "smooth",
          });
        }
      };

      if (isMobile) {
        // Defer scroll until after mobile menu drawer collapse animation settles DOM layout
        setTimeout(doScroll, 180);
      } else {
        doScroll();
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F2F4F7]/95 backdrop-blur-md border-b border-gray-200/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center group cursor-pointer"
        >
          <img
            src="/prime-connect-logo.png"
            alt="Prime Connect EG Logo"
            className="h-9 sm:h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-102"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-semibold text-[#5F6C7C] hover:text-[#082A78] transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right CTA Button & Mobile Burger Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <a
              href="/#hero-main"
              onClick={(e) => handleNavClick(e, "/#hero-main")}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-white bg-[#075CE0] hover:bg-[#082A78] rounded-full shadow-md shadow-blue-600/20 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Burger Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#04143F] hover:text-[#075CE0] hover:bg-gray-200/50 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#04143F]" />
            ) : (
              <Menu className="w-6 h-6 text-[#04143F]" />
            )}
          </button>
        </div>
      </div>

      {/* Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="lg:hidden bg-white border-b border-gray-200/80 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-5 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-2.5 px-4 text-sm font-semibold text-[#04143F] hover:text-[#075CE0] hover:bg-[#F2F4F7] rounded-xl transition-all cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-gray-100">
                <a
                  href="/#hero-main"
                  onClick={(e) => handleNavClick(e, "/#hero-main")}
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 text-sm font-bold text-white bg-[#075CE0] hover:bg-[#082A78] rounded-full shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#08BEEA]" />
                  <span>Book a Call</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
