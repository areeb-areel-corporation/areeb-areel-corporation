'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
        }}
        className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/10 p-10 md:p-20 rounded-[30px] relative overflow-hidden group hover:border-[#D4AF37]/30 transition-colors duration-500"
      >
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4AF37]/10 blur-[100px] rounded-full pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />

        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 relative z-10">
          Partner With Excellence.
        </h2>
        <p className="text-zinc-400 text-sm md:text-base mb-10 max-w-xl mx-auto relative z-10">
          Ready to secure a space at Sentosa Square or require corporate consultancy? Connect with our executive team today.
        </p>

        <Link
          href="/contact"
          className="relative z-10 inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4AF37] text-white font-bold uppercase tracking-widest text-xs sm:text-sm rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
        >
          Initiate Dialogue
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
