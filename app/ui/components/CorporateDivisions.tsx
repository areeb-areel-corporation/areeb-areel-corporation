'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Fuel, Globe, ArrowRight } from 'lucide-react';

const pillars = [
  {
    id: '01',
    title: 'Real Estate & Architecture',
    icon: Building2,
    description: 'Shaping regional landscapes through high-end construction and master-planned communities. From the accessible luxury of Naseeb Homes to premier high-rise living spaces, we design modern structures built to stand for generations.',
  },
  {
    id: '02',
    title: 'Energy & Transit Networks',
    icon: Fuel,
    description: 'Powering critical logistics and daily transport operations with absolute precision. Our flagship Areeb Areel filling stations operate around the clock, guaranteeing 100% accurate measurements, pure fuel grades, and complete family facilities.',
  },
  {
    id: '03',
    title: 'International Business Consulting',
    icon: Globe,
    description: 'Bridging local enterprise with global markets. Operating from our executive corporate spaces in Dubai, UAE, we deliver seamless company incorporation, mainland setup, golden visa structures, and elite financial consulting.',
  },
];

export default function AboutCorporateSection() {
  // Track which pillar is currently resting in the viewport center
  const [activePillar, setActivePillar] = useState('01');

  return (
    <section id="about-corporation" className="relative w-full bg-[#0a0a0a] text-white overflow-visible">
      
      {/* Cinematic Lighting Atmosphere */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/0 to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 inset-x-0 h-[600px] bg-gradient-to-t from-[#D4AF37]/5 via-[#D4AF37]/0 to-transparent pointer-events-none z-0" />
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24">
          
          {/* --- LEFT COLUMN: True Locked Pinned Viewport Container --- */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center z-20">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="py-12 lg:py-0"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">
                  The Corporate Legacy
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter mb-8">
                Shaping Value. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
                  Driving Progress.
                </span>
              </h2>
              
              <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
                Areeb & Areel Corporation operates as a highly coordinated ecosystem. Across real estate development, energy logistics, and cross-border commercial consulting, our structural foundation is built on absolute transparency and operational trust.
              </p>

              <div className="pt-6">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-3 px-6 py-3 border border-[#D4AF37]/30 bg-[#111] rounded-full text-sm font-bold uppercase tracking-widest text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-300 group"
                >
                  Partner With Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: Natural Scrolling Content Area --- */}
          <div className="w-full lg:w-6/12 space-y-[35vh] pt-[25vh] pb-[35vh]">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = activePillar === pillar.id;

              return (
                <motion.div 
                  key={pillar.id} 
                  initial={{ opacity: 0.2 }}
                  whileInView={{ opacity: 1 }}
                  // Strictly monitors the exact mathematical center row of the display viewport
                  viewport={{ once: false, margin: "-48% 0px -48% 0px" }}
                  onViewportEnter={() => setActivePillar(pillar.id)}
                  transition={{ duration: 0.6 }}
                  className={`relative pl-8 md:pl-16 border-l transition-all duration-500 ease-out ${
                    isActive ? 'border-[#D4AF37]' : 'border-zinc-800'
                  }`}
                >
                  {/* Pinned Numeric Axis Badge */}
                  <span className={`absolute top-0 -left-[14px] md:-left-[18px] text-xs font-mono font-bold px-2 py-0.5 bg-[#0a0a0a] border rounded transition-all duration-500 ease-out ${
                    isActive 
                      ? 'border-[#D4AF37] text-[#D4AF37] scale-105 shadow-[0_0_15px_rgba(212,175,55,0.2)]' 
                      : 'border-zinc-800 text-zinc-500 scale-100'
                  }`}>
                    {pillar.id}
                  </span>

                  <div className="space-y-4">
                    {/* Architectural Asset Housing Box */}
                    <div className={`w-14 h-14 rounded-xl border flex items-center justify-center transition-all duration-500 ease-out shadow-xl ${
                      isActive 
                        ? 'border-[#D4AF37]/50 bg-[#D4AF37]/10 shadow-[0_0_25px_rgba(212,175,55,0.15)]' 
                        : 'border-zinc-800 bg-[#111]'
                    }`}>
                      <Icon className={`w-6 h-6 transition-colors duration-500 ease-out ${
                        isActive ? 'text-[#D4AF37]' : 'text-zinc-500'
                      }`} />
                    </div>
                    
                    {/* Dynamic Title Gradient Shift */}
                    <h3 className={`text-2xl md:text-3xl font-bold tracking-tight transition-all duration-500 ease-out pt-2 ${
                      isActive 
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]' 
                        : 'text-white'
                    }`}>
                      {pillar.title}
                    </h3>
                    
                    {/* Body Text Contrast Step-Down */}
                    <p className={`text-base md:text-lg leading-relaxed max-w-xl font-normal transition-all duration-500 ease-out ${
                      isActive ? 'text-zinc-200' : 'text-zinc-500'
                    }`}>
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}