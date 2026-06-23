'use client';

import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';
import CorporateInquiry from '../ui/components/CorporateInquiry';



export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] relative overflow-hidden flex flex-col items-center pt-24 pb-20">
      
      {/* --- BACKGROUND ATMOSPHERE --- */}
      {/* Architectural Grid */}
      
      <div 
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at top, black 20%, transparent 80%)'
        }}
      />
      {/* Central Gold Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#D4AF37]/10 blur-[150px] rounded-[100%] pointer-events-none z-0" />


      {/* --- THE COOL HERO HEADER --- */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-10 flex flex-col items-center text-center mt-12 mb-16">
        
        {/* Live Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 backdrop-blur-md mb-8"
        >
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
          </div>
          <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
            <Globe2 className="w-3 h-3" /> HQ: Lahore — Systems Online
          </span>
        </motion.div>

        {/* Main Typography */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-none"
        >
          Initiate <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
            Dialogue.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-zinc-400 text-base md:text-lg max-w-2xl font-medium leading-relaxed"
        >
          Whether you are exploring global consulting infrastructure, large-scale real estate development, or high-tier energy networks, our executive team is ready to connect.
        </motion.p>
      </div>

      {/* --- YOUR COMPONENT GOES HERE --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full"
      >
        {/* Just uncomment the line below and make sure the import at the top matches your file name! */}
        
        <CorporateInquiry />
        
      </motion.div>

    </main>
  );
}