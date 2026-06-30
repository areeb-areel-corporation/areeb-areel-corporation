'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Fuel,
  Briefcase
} from 'lucide-react';


// --- DATA: CORPORATE DIVISIONS ---
const divisions = [
  { id: "div-01", name: "Real Estate Development", desc: "Pioneering ultra-luxury commercial and residential spaces like Sentosa Square and Naseeb Homes.", icon: Building2 },
  { id: "div-02", name: "Energy Transit", desc: "Operating high-efficiency, 24/7 Areeb Areel Filling Stations ensuring pure fuel and premium service.", icon: Fuel },
  { id: "div-03", name: "Corporate Consulting", desc: "Providing elite strategic advisory and business scaling solutions across Lahore and Dubai.", icon: Briefcase },
];
// --- HERO BACKGROUND IMAGES ---
const heroBackgrounds = [
  '/images/petrol pump.png',
  '/images/mart.jpg',
  '/images/sentosa-5.jpg'
];

export default function AboutUsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [bgIndex, setBgIndex] = useState(0);

  // Background Image Auto-Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Mouse tracking for the spotlight border effect
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

  // --- ANIMATION VARIANTS ---
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37] selection:text-black overflow-hidden pb-20">
      
      {/* --- 1. REFINED CENTERED HERO SECTION --- */}
      <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={bgIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className="absolute inset-0"
            >
              <Image 
                src={heroBackgrounds[bgIndex]} 
                alt="Corporate Background"
                fill
                priority
                className="object-cover opacity-30 grayscale mix-blend-overlay transition-transform duration-[5000ms] ease-out hover:scale-110"
              />
            </motion.div>
          </AnimatePresence>
          {/* Deep Vignette Mask */}
          {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_80%)] z-10" /> */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/40 to-[#050505] z-10" /> */}
        </div>

        {/* Central Content */}
        <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center justify-center w-full">
          
          {/* Glowing Centered Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} 
            className="relative w-24 h-24 sm:w-32 sm:h-32 mb-8 md:mb-10"
          >
            <div className="absolute inset-0 bg-[#D4AF37]/20 blur-[40px] rounded-full" />
            <Image 
              src="/images/Asset 1.png" 
              alt="Areeb Areel Corp Logo" 
              fill 
              priority
              className="object-contain drop-shadow-[0_0_25px_rgba(212,175,55,0.4)] relative z-10"
            />
          </motion.div>

          {/* Subtitle Badge */}
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="flex items-center gap-4 w-full justify-center mb-6">
            <div className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[#D4AF37] text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-center">
              Who We Are
            </span>
            <div className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </motion.div>

          {/* Smaller, Elegant Typography */}
          <motion.h1 initial="hidden" animate="show" variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-6 text-center">
            Building The <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F1E5AC] to-[#D4AF37]">
              Benchmark.
            </span>
          </motion.h1>

          <motion.p initial="hidden" animate="show" variants={fadeUp} className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium text-center px-4">
            Areeb & Areel Corporation is a dynamic conglomerate driving innovation across real estate development, energy transit, and strategic corporate consulting. We don’t just participate in industries; we redefine their standards.
          </motion.p>
        </div>
      </section>
   
      {/* --- 3. OUR DIVISIONS (SPOTLIGHT CARDS) --- */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-16 md:mb-24 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
              Our Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">Pillars</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
              Diversified excellence across the sectors that power modern infrastructure.
            </p>
          </motion.div>

          <motion.div ref={containerRef} variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {divisions.map((div, index) => {
              const Icon = div.icon;
              return (
                <motion.div
                  key={div.id}
                  variants={fadeUp}
                  ref={(el) => { cardsRef.current[index] = el; }}
                  className="group relative rounded-2xl bg-white/5 p-[1px] transition-transform duration-300 hover:-translate-y-2 cursor-default"
                >
                  {/* Spotlight Border */}
                  <div 
                    className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 rounded-2xl"
                    style={{ background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(212, 175, 55, 1), transparent 40%)` }}
                  />
                  
                  {/* Inner Content */}
                  <div className="relative h-full w-full bg-[#0a0a0a] rounded-[15px] p-8 md:p-10 flex flex-col items-start z-10 overflow-hidden">
                    <div 
                      className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 z-0"
                      style={{ background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(212, 175, 55, 0.05), transparent 40%)` }}
                    />
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-[#111] border border-white/5 flex items-center justify-center mb-8 transition-colors duration-500 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10">
                        <Icon className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{div.name}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{div.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

    </main>
  );
}