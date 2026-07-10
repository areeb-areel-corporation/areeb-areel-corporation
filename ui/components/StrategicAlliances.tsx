'use client';

import { useRef, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Globe, Building2, Shield, Zap, Landmark, Briefcase, Hexagon } from 'lucide-react';

const partners = [
  { id: "01", name: "Residential Development", category: "Family-oriented communities and homes designed around comfort, usability and long-term value.", icon: Building2 },
  { id: "02", name: "Commercial Real Estate", category: "Business spaces created to support visibility, accessibility and professional growth.", icon: Landmark },
  { id: "03", name: "Architecture", category: "Site planning, floor plans, elevations, technical drawings and architectural visualization.", icon: Shield },
  { id: "04", name: "Interior Design", category: "Functional interior environments shaped around the way people live, work and interact.", icon: Hexagon },
  { id: "05", name: "Construction", category: "Coordinated project execution from approved drawings and specifications to finishing and handover.", icon: Building2 },
  { id: "06", name: "Energy Services", category: "Fuel and travel facilities focused on convenience, responsible operations and customer experience.", icon: Zap },
  { id: "07", name: "Retail Operations", category: "Express retail, food and everyday services integrated into high-traffic customer locations.", icon: Briefcase },
  { id: "08", name: "Corporate Advisory", category: "Initial planning and professional coordination for businesses exploring Pakistan-UAE opportunities.", icon: Globe },
];

export default function StrategicAlliances() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Mouse tracking ONLY for the main Card's premium border spotlight
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
                Our Operating Ecosystem
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-tight">
              Connected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">Capabilities.</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-base md:text-lg lg:text-right max-w-sm leading-relaxed font-medium">
            Our divisions bring together the expertise required to plan, develop, build and operate customer-focused projects.
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
                whileHover="hover" // Broadcasts hover state to the child animations
                ref={(el) => { cardsRef.current[index] = el; }}
                className="group relative rounded-2xl bg-white/5 p-[1px] cursor-default"
              >
                {/* 1. CARD BORDER GLOW (Spotlight Layer that tracks the mouse over the card) */}
                <div 
                  className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 rounded-2xl"
                  style={{ background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(212, 175, 55, 1), transparent 40%)` }}
                />

                {/* 2. MAIN CONTENT LAYER (Solid background #111 masks the card's center) */}
                <div className="relative h-full w-full bg-[#111] rounded-[15px] p-6 md:p-8 flex flex-col items-center justify-center text-center z-10 overflow-hidden">
                  
                  <div className="relative z-10 flex flex-col items-center">
                    
                 {/* --- SPINNING BORDER ICON WRAPPER --- */}
<div className="relative w-16 h-16 rounded-full mb-6 flex items-center justify-center bg-transparent transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
  
  {/* The Spinning Conic Gradient — opacity now controlled purely by CSS group-hover,
      so it fully disappears the instant the card is not hovered */}
  <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
    <motion.div
      className="absolute w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{
        background: `conic-gradient(from 0deg, transparent 0%, transparent 60%, #D4AF37 100%)`
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    />
  </div>

  {/* Inner Solid Background EXACTLY matches the card's #111 bg. 
      This makes it 100% invisible when resting. */}
  <div className="absolute inset-[1px] bg-[#111] rounded-full flex items-center justify-center z-10">
    <Icon className="w-7 h-7 text-zinc-500 transition-colors duration-500 group-hover:text-[#D4AF37]" />
  </div>

</div>

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
