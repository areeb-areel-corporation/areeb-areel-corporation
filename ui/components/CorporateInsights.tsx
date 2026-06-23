'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Clock, Lock, X } from "lucide-react";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    tag: "Real Estate",
    date: "June 18, 2026",
    title: "Pioneering the Future of Ultra-Luxury Urban Living in Lahore",
    excerpt:
      "How AAA Developments is utilizing AI and sustainable engineering to redefine the residential skyline.",
    src: "/images/housing-society.png",
  },
  {
    id: 2,
    tag: "Energy Infrastructure",
    date: "May 24, 2026",
    title: "The Shift to Smart Hubs: Upgrading the National Transit Network",
    excerpt:
      "Areeb & Areel Corporation announces the expansion of AAA-standard petroleum stations across key logistical routes.",
    src: "/images/petrol pump.png",
  },
  {
    id: 3,
    tag: "Retail Operations",
    date: "April 10, 2026",
    title: "Integrating Premium Retail with Daily Commutes",
    excerpt:
      "The strategic vision behind the Express Smart Mart expansion and how it maximizes consumer convenience.",
    src: "/images/mart.png",
  },
];

export default function CorporateInsights() {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (showNotification) {
      timeout = setTimeout(() => {
        setShowNotification(false);
      }, 4000);
    }
    return () => clearTimeout(timeout);
  }, [showNotification]);

  const triggerComingSoon = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowNotification(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as number[] },
    },
  };

  return (
    <section
      id="blogs"
      className="relative w-full bg-[#050505] text-white py-24 lg:py-32 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 blur-[200px] rounded-[100%] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">
                Newsroom
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter">
              Corporate{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
                Blogs.
              </span>
            </h2>
          </div>

          <button
            onClick={triggerComingSoon}
            className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors duration-300 w-fit"
          >
            View Publication
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover:text-white transition-colors" />
            </div>
          </button>
        </div>

        {/* --- PREMIUM BLOG CARDS GRID --- */}
        <motion.div
          variants={containerVariants as any}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={itemVariants as any}
              // Link wrapper (or div if triggering the toast)
              onClick={triggerComingSoon}
              className="group cursor-pointer flex flex-col bg-[#121212] border border-white/5 rounded-[20px] p-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_20px_50px_-15px_rgba(212,175,55,0.15)] relative overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/11] rounded-xl overflow-hidden mb-6 bg-[#1a1a1a]">
                <Image
                  src={blog.src}
                  alt={blog.title}
                  fill
                  priority
                  className="object-cover filter grayscale opacity-70 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-md transition-colors duration-500 group-hover:border-[#D4AF37]/30">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white transition-colors duration-500 group-hover:text-[#D4AF37]">
                    {blog.tag}
                  </span>
                </div>
              </div>

              {/* Meta Data */}
              <div className="flex items-center gap-2 text-zinc-500 text-[11px] font-bold uppercase tracking-widest mb-3 transition-colors duration-500 group-hover:text-zinc-400">
                <Clock className="w-3.5 h-3.5" />
                <span>{blog.date}</span>
              </div>

              {/* Title & Excerpt */}
              <h3 className="text-xl md:text-2xl font-bold leading-snug mb-3 text-white transition-colors duration-500 group-hover:text-[#D4AF37]">
                {blog.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow transition-colors duration-500 group-hover:text-zinc-300">
                {blog.excerpt}
              </p>

              {/* The "Read Article" Premium Button Container */}
              <div
                className="mt-auto w-full flex items-center justify-between px-6 py-4 rounded-xl border border-white/5 bg-[#181818] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37]"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-white transition-colors duration-500 group-hover:text-black">
                  Read Article
                </span>
                <ArrowUpRight className="w-4 h-4 text-white transition-all duration-500 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- THE "COMING SOON" SIDE TOAST --- */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed bottom-10 right-6 md:right-10 z-50 flex items-start gap-4 bg-[#111111]/90 backdrop-blur-xl border border-[#D4AF37]/30 p-5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] max-w-[320px]"
          >
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0 border border-[#D4AF37]/20">
              <Lock className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="text-white font-bold tracking-wide text-sm mb-1">
                Feature Locked
              </h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                The Corporate Newsroom is currently under development. This
                feature will be available in the next system update.
              </p>
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 4, ease: "linear" }}
              className="absolute bottom-0 left-0 h-[2px] bg-[#D4AF37]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}