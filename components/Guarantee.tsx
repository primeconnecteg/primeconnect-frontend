"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function Guarantee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="guarantee" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, type: "spring", damping: 20 }}
          className="relative bg-gradient-to-br from-[#F4821F] to-[#D97013] rounded-3xl p-10 md:p-16 overflow-hidden shadow-2xl shadow-[#F4821F]/20"
        >
          <div className="relative flex flex-col md:flex-row items-start gap-8">
            <div className="w-16 h-16 bg-[#0a192f]/20 rounded-2xl flex items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8 text-[#0a192f]" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0a192f] mb-6 leading-tight">
                Our Performance Guarantee
              </h2>
              <p className="text-xl md:text-2xl text-[#0a192f]/90 font-medium leading-relaxed">
                &quot;We commit to delivering at least{" "}
                <span className="font-black text-[#0a192f]">
                  3 qualified, decision-maker-level conversations
                </span>{" "}
                within your first 45 days — or we continue at no additional cost until we do.&quot;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
