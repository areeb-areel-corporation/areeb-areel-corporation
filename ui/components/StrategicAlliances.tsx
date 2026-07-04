'use client';

import { useRef, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
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

  // Mouse tracking for the premium border spotlight
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

  // --- SECTION ANIMATIONS ---
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const gridVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    hover: { y: -5, transition: { duration: 0.3, ease: "easeOut" } }
  };

  // --- THE COMBINED COMBAT ANIMATIONS ---

  // 1. The Levitation Wrapper (Moves the whole icon group up and down continuously)
  const wrapperVariants: Variants = {
    hidden: { y: 0 },
    show: { y: 0 },
    hover: {
      y: [0, -8, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  };

  // 2. The Expanding Radar Ring (Pulses continuously outward)
  const rippleVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    show: { scale: 0.8, opacity: 0 },
    hover: {
      scale: [1, 2.2],
      opacity: [0.6, 0],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeOut" }
    }
  };

  // 3. The Main Icon Background (Glows gold and slightly scales up)
  const iconBgVariants: Variants = {
    hidden: { scale: 1, borderColor: "rgba(255,255,255,0.05)", boxShadow: "0px 0px 0px rgba(212,175,55,0)" },
    show: { scale: 1, borderColor: "rgba(255,255,255,0.05)", boxShadow: "0px 0px 0px rgba(212,175,55,0)" },
    hover: { 
      scale: 1.1, 
      borderColor: "rgba(212,175,55,0.5)", 
      boxShadow: "0px 0px 25px rgba(212,175,55,0.3)",
      transition: { duration: 0.4 }
    }
  };

  // 4. The Icon Itself (Snaps 360 degrees and turns gold)
  const iconVariants: Variants = {
    hidden: { rotate: 0, scale: 1, color: "#71717a" }, // text-zinc-500
    show: { rotate: 0, scale: 1, color: "#71717a" },
    hover: { 
      rotate: [0, -25, 360], 
      scale: [1, 0.8, 1.15], 
      color: "#D4AF37",
      transition: { duration: 0.7, ease: "easeInOut" }
    }
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
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20 lg:mb-28"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-[0.3em]">
                Global Network
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-tight">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">Alliances.</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-base md:text-lg lg:text-right max-w-sm leading-relaxed font-medium">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 "
        >
          {partners.map((partner, index) => {
            const Icon = partner.icon;

            return (
              <motion.div
                key={partner.id}
                variants={cardVariants}
                whileHover="hover" // Broadcasts hover to ALL child elements inside this card
                ref={(el) => { cardsRef.current[index] = el; }}
                className="group relative rounded-2xl bg-white/5 p-[1px] cursor-default"
              >
                {/* 1. THE BORDER GLOW (Spotlight Layer that tracks the mouse) */}
                <div 
                  className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 rounded-2xl"
                  style={{ background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(212, 175, 55, 1), transparent 40%)` }}
                />

                {/* 2. THE CONTENT LAYER (Solid background masks the center, leaving only the 1px spotlight border) */}
                <div className="relative h-full w-full bg-[#111] rounded-[15px] p-6 md:p-8 flex flex-col items-center justify-center text-center z-10 overflow-hidden">
                  
                  <div className="relative z-10 flex flex-col items-center">
                    
                    {/* --- COMBINED ANIMATION WRAPPER --- */}
                    <motion.div 
                      variants={wrapperVariants} // Controls the up and down levitation
                      className="relative w-16 h-16 flex items-center justify-center mb-6"
                    >
                      
                      {/* Radar Ping */}
                      <motion.div 
                        variants={rippleVariants} 
                        className="absolute inset-0 rounded-full border-2 border-[#D4AF37] z-0"
                      />

                      {/* Main Background Circle */}
                      <motion.div 
                        variants={iconBgVariants} 
                        className="absolute inset-0 rounded-full bg-[#0a0a0a] border border-white/5 z-10"
                      />

                      {/* The 360 Spin Icon */}
                      <motion.div variants={iconVariants} className="relative z-20">
                        <Icon className="w-7 h-7" />
                      </motion.div>

                    </motion.div>

                    {/* Partner Details */}
                    <h3 className="text-white font-bold text-lg tracking-wide mb-2 transition-colors duration-500 group-hover:text-[#D4AF37]">
                      {partner.name}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 transition-colors duration-500 group-hover:text-zinc-400">
                      {partner.category}
                    </span>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}