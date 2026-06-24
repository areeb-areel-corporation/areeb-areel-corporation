'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { Ruler, Quote } from 'lucide-react';
import { teamData } from '@/data/data';


export default function CorporateTeam() {
  const containerRef = useRef<HTMLElement>(null);

  // Background glow parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [-100, 150]);

  const fadeUpContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  };

  const fadeUpItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section ref={containerRef} className="relative w-full bg-[#0a0a0a] text-white py-24 lg:py-32 overflow-hidden selection:bg-[#D4AF37] selection:text-black">
      
      {/* Background Glow */}
      <motion.div 
        style={{ y: glowY }}
        className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none z-0" 
      />

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* --- HEADER BLOCK --- */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20 lg:mb-28">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-[0.3em]">
                Sys-Core: Leadership
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-tight">
              Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">Team</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-base md:text-lg lg:text-right max-w-sm leading-relaxed font-medium">
            Architects of regional infrastructure and energy transit, driving progression through decisive executive strategy.
          </p>
        </div>

        <motion.div 
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-24 lg:mb-32"
        >
          {teamData.ceos.map((ceo) => (
            <motion.div
              key={ceo.id}
              variants={fadeUpItem as any}
              className="bg-[#111111]/80 backdrop-blur-xl border border-white/5 p-8 lg:p-10 rounded-[2rem] shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-8 hover:border-[#D4AF37]/30 transition-colors duration-500 group"
            >
              {/* Left: Small, Round Image with floating animation */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-white/10 shrink-0 shadow-[0_0_30px_rgba(0,0,0,0.5)] z-10 group-hover:border-[#D4AF37] transition-colors duration-500"
              >
                <Image
                  src={ceo.src}
                  alt={ceo.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              {/* Right: Details, Message, Social */}
              <div className="flex-1 space-y-5 text-center md:text-left relative">
                <div>
                  <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                    {ceo.role}
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-black text-white tracking-tight">
                    {ceo.name}
                  </h3>
                </div>

                <div className="relative pt-5 mt-5 border-t border-white/5 group-hover:border-[#D4AF37]/20 transition-colors duration-500">
                  <Quote className="absolute top-4 left-0 md:-left-2 w-7 transition-transform duration-500   h-7 group-hover:text-[#D4AF37] text-[#D4AF37]/10" />
                  <p className="text-brand-silver/80 text-sm lg:text-base leading-relaxed pl-8 md:pl-6 italic font-medium">
                    "{ceo.message}"
                  </p>
                </div>

                <div className="flex justify-center md:justify-end pt-3">
                  <a 
                    href={ceo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-silver/50 hover:text-[#D4AF37] transition-colors"
                  >
                    Connect on LinkedIn
                    <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center bg-black/50 text-brand-silver/60 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                      <FaLinkedin className="w-4 h-4" />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

   
        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-16 border-t border-white/10"
        >
          <div className="flex items-center gap-4 mb-16">
            <Ruler className="w-5 h-5 text-[#D4AF37]/50" />
            <h4 className="text-brand-silver/40 text-sm font-bold uppercase tracking-[0.3em]">
              Executive Operations Directorate
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {teamData.executives.map((member) => (
              <motion.div key={member.id} variants={fadeUpItem as any} className="flex flex-col group h-32 justify-between border-l border-white/10 pl-6 cursor-pointer hover:border-[#D4AF37]/50 transition-colors duration-500">
                <div className="space-y-2">
                  <p className="text-brand-silver/50 text-xs font-semibold uppercase tracking-[0.2em]">
                    {member.role}
                  </p>
                  
                  {/* Executive Name with Rolling Text Hover effect */}
                  <h5 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                    <span className="relative overflow-hidden inline-block">
                      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                        {member.name}
                      </span>
                      <span className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-[#D4AF37]">
                        {member.name}
                      </span>
                    </span>
                  </h5>
                </div>

                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-[#D4AF37] font-mono tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-white"
                >
                  [ CONNECT ]
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}