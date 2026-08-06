"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    // Hide the loading screen after the animation sequence finishes
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isMounted) return null;

  // Custom bezier easing for a sleek, premium feel
  const premiumEasing = [0.22, 1, 0.36, 1];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.8, ease: premiumEasing }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#FFFFFF]"
        >
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Container (Locked to exact 3200x1152 aspect ratio) */}
            <div className="relative w-64 h-[92px] md:w-[320px] md:h-[115px]">
              {/* Icon Layer (Half from left) */}
              <motion.div
                initial={{ opacity: 0, x: -40, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: premiumEasing }}
                className="absolute inset-0"
                style={{ clipPath: "inset(0 64% 0 0)" }}
              >
                <Image src="/Prime_Connect_Horizontal_Lockup_Transparent_3200.png" alt="Prime Connect Icon" fill sizes="(max-width: 768px) 256px, 320px" className="object-contain" priority />
              </motion.div>

              {/* PRIME Text Layer (Half from right) */}
              <motion.div
                initial={{ opacity: 0, x: 40, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.2, delay: 0.15, ease: premiumEasing }}
                className="absolute inset-0"
                style={{ clipPath: "inset(0 0 54% 36%)" }}
              >
                <Image src="/Prime_Connect_Horizontal_Lockup_Transparent_3200.png" alt="Prime" fill sizes="(max-width: 768px) 256px, 320px" className="object-contain" priority />
              </motion.div>

              {/* CONNECT Text Layer (From right, delayed for word-by-word effect) */}
              <motion.div
                initial={{ opacity: 0, x: 40, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.2, delay: 0.4, ease: premiumEasing }}
                className="absolute inset-0"
                style={{ clipPath: "inset(46% 0 0 36%)" }}
              >
                <Image src="/Prime_Connect_Horizontal_Lockup_Transparent_3200.png" alt="Connect" fill sizes="(max-width: 768px) 256px, 320px" className="object-contain" priority />
              </motion.div>
            </div>

          {/* Bold Cyan Line Underneath Entire Logo */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.7, ease: premiumEasing }}
            className="h-[3px] bg-gradient-to-r from-[#08BEEA] to-[#075CE0] mt-4 origin-center w-full max-w-[200px] md:max-w-[260px] rounded-full"
          />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
