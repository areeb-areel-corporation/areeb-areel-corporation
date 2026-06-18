'use client';

import { motion } from 'framer-motion';
import { Building2, Fuel, ShoppingCart, ArrowUpRight } from 'lucide-react';

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
  return (
    <section className="relative w-full bg-brand-black text-white pt-10 pb-32 overflow-visible">
      
      {/* --- FORCED LIGHTING FX: Hardcoded Hex Opacities for Guaranteed Rendering --- */}
      {/* Top light bleeding down */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-[#D4AF37]/20 via-[#D4AF37]/5 to-transparent pointer-events-none z-0 mix-blend-screen" />
      
      {/* Bottom light bleeding up */}
      <div className="absolute bottom-0 inset-x-0 h-[500px] bg-gradient-to-t from-[#D4AF37]/20 via-[#D4AF37]/5 to-transparent pointer-events-none z-0 mix-blend-screen" />
      
      {/* Main Container */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-10 relative">
          
          {/* --- LEFT SIDE: Locked / Sticky Title --- */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-40 h-fit pt-20 space-y-6 z-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">
                  The Conglomerate
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter">
                Operating at <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#AA8529]">
                  Massive Scale.
                </span>
              </h2>
              
              <p className="text-brand-silver/70 text-lg max-w-md leading-relaxed mt-6">
                Areeb & Areel Corporation is not just a company; it is an <span className="text-white font-semibold">integrated ecosystem</span>. Our three primary divisions work in flawless synergy to engineer progress.
              </p>

              <button className="hidden lg:flex items-center gap-3 mt-10 group text-sm font-bold uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors duration-300">
                View All Projects
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: Natural Scrolling Content --- */}
          <div className="w-full lg:w-6/12 pt-10 lg:pt-32 pb-20 space-y-32">
            {divisions.map((division, index) => {
              const Icon = division.icon;
              return (
                <motion.div 
                  key={division.id} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                  className="group relative pl-8 md:pl-12 border-l border-[#D4AF37]/20 hover:border-[#D4AF37] transition-colors duration-500"
                >
                  {/* Floating Number Identifier */}
                  <span className="absolute -top-10 -left-[18px] md:-left-[26px] text-5xl md:text-6xl font-black text-brand-black text-stroke-gold opacity-60 group-hover:opacity-100 transition-opacity duration-500 bg-brand-black py-4">
                    {division.id}
                  </span>

                  <div className="space-y-6 relative z-10">
                    {/* Icon container defaults to gold accent */}
                    <div className="w-14 h-14 rounded-xl bg-brand-black border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                      <Icon className="w-7 h-7 text-[#D4AF37]" />
                    </div>
                    
                    {/* Golden Heading */}
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
                      {division.title}
                    </h3>
                    
                    {/* Silver/White Paragraph */}
                    <p className="text-brand-silver/80 text-base md:text-lg leading-relaxed max-w-xl">
                      {division.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile CTA (Hidden on desktop) */}
          <button className="flex lg:hidden items-center gap-3 mt-10 group text-sm font-bold uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors duration-300">
            View All Projects
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>

        </div>
      </div>
    </section>
  );
}