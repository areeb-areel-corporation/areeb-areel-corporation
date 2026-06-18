'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, Fuel, ShoppingCart, ArrowUpRight } from 'lucide-react';

// Data for the business sectors
const divisions = [
  {
    id: '01',
    title: 'Master-Planned Communities',
    icon: Building2,
    description: 'We architect the future of luxury living. From avant-garde residential skyscrapers to expansive, secure, and fully integrated housing societies, our real estate developments set the benchmark for modern regional infrastructure.',
  },
  {
    id: '02',
    title: 'Energy Hub Networks',
    icon: Fuel,
    description: 'Powering the nation’s transit. Our high-capacity, AAA-standard petroleum and energy stations are strategically developed to provide unmatched operational efficiency, fueling the logistics and daily commutes of thousands.',
  },
  {
    id: '03',
    title: 'Integrated Smart Marts',
    icon: ShoppingCart,
    description: 'Redefining convenience. Built directly into our energy hubs, our premium retail marts offer seamless, high-end shopping experiences, ensuring that our customers have access to top-tier commodities around the clock.',
  },
];

export default function CorporateDivisions() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Track the scroll progress strictly within this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // PARALLAX MATH: 
  // Map the scroll progress (0 to 1) to vertical pixel movements.
  // The left title will slowly drift down (+50px), while the right text aggressively slides up (-150px)
  const leftTitleY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rightContentY = useTransform(scrollYProgress, [0, 1], [100, -150]);
  
  // Background ambient glow parallax
  const glowY = useTransform(scrollYProgress, [0, 1], [-100, 200]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-brand-black text-white py-24 md:py-40 overflow-hidden"
    >
      {/* Moving Ambient Gold Glow */}
      <motion.div 
        style={{ y: glowY }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 blur-[150px] rounded-full pointer-events-none" 
      />

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-10">
          
          {/* --- LEFT SIDE: Sticky / Slow Parallax Title --- */}
          <motion.div 
            style={{ y: leftTitleY }}
            className="w-full lg:w-5/12 lg:sticky lg:top-40 space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-[1px] bg-brand-gold" />
              <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.3em]">
                The Conglomerate
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter">
              Operating at <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-silver to-brand-silver/50">
                Massive Scale.
              </span>
            </h2>
            
            <p className="text-brand-silver/60 text-lg max-w-md leading-relaxed mt-6">
              Areeb & Areel Corporation is not just a company; it is an ecosystem. Our three primary divisions work in flawless synergy to engineer progress.
            </p>

            <button className="hidden lg:flex items-center gap-3 mt-10 group text-sm font-bold uppercase tracking-widest text-brand-gold hover:text-white transition-colors duration-300">
              View All Projects
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* --- RIGHT SIDE: Fast Parallax Scrolling Content --- */}
          <motion.div 
            style={{ y: rightContentY }}
            className="w-full lg:w-6/12 space-y-12 md:space-y-24 pt-10 lg:pt-32"
          >
            {divisions.map((division, index) => {
              const Icon = division.icon;
              return (
                <div 
                  key={division.id} 
                  className="group relative pl-8 md:pl-12 border-l border-white/10 hover:border-brand-gold transition-colors duration-500"
                >
                  {/* Floating Number Identifier */}
                  <span className="absolute top-0 -left-[18px] md:-left-[26px] text-4xl md:text-5xl font-black text-brand-black text-stroke-gold opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                    {division.id}
                  </span>

                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 transition-all duration-500">
                      <Icon className="w-6 h-6 text-brand-silver group-hover:text-brand-gold transition-colors duration-500" />
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                      {division.title}
                    </h3>
                    
                    <p className="text-brand-silver/70 text-base md:text-lg leading-relaxed max-w-xl">
                      {division.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Mobile CTA (Hidden on desktop) */}
          <button className="flex lg:hidden items-center gap-3 mt-10 group text-sm font-bold uppercase tracking-widest text-brand-gold hover:text-white transition-colors duration-300">
            View All Projects
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>

        </div>
      </div>
    </section>
  );
}