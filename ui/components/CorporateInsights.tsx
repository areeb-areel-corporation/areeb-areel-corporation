'use client';

import { useRef, useEffect } from 'react';
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";
import { blogDatabase } from "@/data/data";

export default function CorporateInsights() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Mouse tracking engine
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="blogs" className="relative w-full bg-[#050505] text-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 blur-[200px] rounded-[100%] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">Newsroom</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter">
              Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">Blogs.</span>
            </h2>
          </div>

          <Link href="/blogs" className="relative overflow-hidden group inline-flex items-center gap-3 px-8 py-4 border border-[#D4AF37]/30 bg-[#111] rounded-full text-sm font-bold uppercase tracking-widest text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37]">
            <div className="absolute inset-0 bg-[#D4AF37] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
            <span className="relative z-10 text-[#D4AF37] group-hover:text-black transition-colors duration-500 flex items-center gap-3">
              View Publication
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        {/* --- GRID --- */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogDatabase.slice(0, 3).map((blog, idx) => (
            <motion.div
              key={blog.id}
              variants={itemVariants}
              ref={(el) => { cardsRef.current[idx] = el; }}
              className="group relative flex flex-col rounded-[20px] bg-white/5 p-[1px] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 cursor-default"
            >
              {/* Spotlight Layer */}
              <div 
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 rounded-[20px]"
                style={{ background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(212, 175, 55, 1), transparent 40%)` }}
              />

              {/* Inner Content Layer */}
              <div className="relative flex flex-col h-full bg-[#121212] rounded-[19px] p-5 z-10 overflow-hidden">
                <div className="relative w-full aspect-[16/11] rounded-xl overflow-hidden mb-6 bg-[#1a1a1a]">
                  <Image src={blog.src} alt={blog.title} fill className="object-cover filter grayscale opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100" />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-md">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white">{blog.tag}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-zinc-500 text-[11px] font-bold uppercase tracking-widest mb-3">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{blog.date}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold leading-snug mb-3 text-white group-hover:text-[#D4AF37] transition-colors duration-500">
                  {blog.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow transition-colors duration-500 group-hover:text-zinc-300">
                  {blog.excerpt}
                </p>

                <Link
                  href={`/blogs/${blog.id}`}
                  className="mt-auto w-full flex items-center justify-between px-6 py-4 rounded-xl border border-white/5 bg-[#181818] transition-all duration-500 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37]"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-black">Read Article</span>
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}