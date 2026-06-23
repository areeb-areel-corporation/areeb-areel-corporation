'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Building2, Shield, Zap, Cpu, Landmark, Briefcase, Hexagon } from 'lucide-react';

const partners = [
  { id: "01", name: "Atlas Heavy Industries", category: "Construction", icon: Building2 },
  { id: "02", name: "Nexus Global Transit", category: "Logistics", icon: Globe },
  { id: "03", name: "Aegis Security Tech", category: "Cyber Systems", icon: Shield },
  { id: "04", name: "Volt Energy Networks", category: "Power & Fuel", icon: Zap },
  { id: "05", name: "Quantum Computing", category: "AI Analytics", icon: Cpu },
  { id: "06", name: "Meridian Financial", category: "Capital Banking", icon: Landmark },
  { id: "07", name: "Crown Real Estate", category: "Property Management", icon: Briefcase },
  { id: "08", name: "Equinox Materials", category: "Sustainable Resources", icon: Hexagon },
];

export default function StrategicAlliances() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // --- THE SPOTLIGHT ENGINE ---
  // This tracks the mouse and applies coordinates to CSS variables on each card
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Pass the mouse position into CSS variables for the gradient mask
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section 
      id="partners" 
      className="relative w-full bg-[#050505] py-24 lg:py-32 overflow-hidden border-t border-white/5"
    >
      {/* Background Architectural Grid Lines */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Subtle Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center mb-16 lg:mb-24"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">
              Global Network
            </span>
            <div className="w-12 h-[1px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6">
            Strategic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
              Alliances.
            </span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl leading-relaxed">
            Partnered with industry-leading pioneers across construction, energy, and digital infrastructure to engineer the future of global enterprise.
          </p>
        </motion.div>

        {/* --- SPOTLIGHT GRID --- */}
        <motion.div
          ref={containerRef}
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 group"
        >
          {partners.map((partner, index) => {
            const Icon = partner.icon;

            return (
              <motion.div
                key={partner.id}
                variants={cardVariants}
                // Attach ref to each card for the mouse tracking engine
                ref={(el) => { cardsRef.current[index] = el; }}
                className="relative overflow-hidden rounded-2xl bg-[#111] border border-white/5 transition-all duration-300 md:hover:-translate-y-1 cursor-default"
              >
                {/* 1. THE BORDER GLOW (Spotlight Layer)
                  This creates the golden border that follows the mouse 
                */}
                <div 
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(212, 175, 55, 0.4), transparent 40%)`
                  }}
                />

                {/* 2. THE INNER CONTENT GLOW
                  This creates the subtle golden wash inside the card under the mouse
                */}
                <div 
                  className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 z-0"
                  style={{
                    background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(212, 175, 55, 0.08), transparent 40%)`
                  }}
                />

                {/* 3. THE ACTUAL CONTENT 
                  The margin (m-[1px]) allows the border glow to shine through the edges
                */}
                <div className="relative h-full bg-[#111] m-[1px] rounded-[15px] p-6 md:p-8 flex flex-col items-center justify-center text-center z-10 transition-colors duration-500 hover:bg-transparent">
                  
                  {/* Partner Icon */}
                  <div className="w-16 h-16 rounded-full bg-[#0a0a0a] border border-white/5 flex items-center justify-center mb-6 shadow-xl transition-all duration-500 group-hover:border-[#D4AF37]/30 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                    <Icon className="w-8 h-8 text-zinc-500 transition-colors duration-500 group-hover:text-[#D4AF37]" />
                  </div>

                  {/* Partner Details */}
                  <h3 className="text-white font-bold text-lg tracking-wide mb-2 transition-colors duration-500 group-hover:text-[#D4AF37]">
                    {partner.name}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 transition-colors duration-500 group-hover:text-zinc-400">
                    {partner.category}
                  </span>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}