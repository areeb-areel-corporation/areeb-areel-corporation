'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

// Streamlined, high-priority links only
const coreDivisions = [
  { name: 'Housing Society', href: '/housing-society' },
  { name: 'Infrastructure & Engineering', href: '/infrastructure' },
  { name: 'Petrol Pump Station', href: '/petrol-station' }, // Linked to your new page
];

const corporateLinks = [
  { name: 'Corporate Blogs', href: '#' },
  { name: 'Headquarters Location', href: '#' },
];

export default function CorporateFooter() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <footer className="relative w-full bg-[#050505] text-white pt-24 lg:pt-32 pb-8 overflow-hidden border-t border-white/5">
      
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#D4AF37]/5 blur-[200px] rounded-[100%] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-32">
          
          {/* --- LEFT: Minimalist Branding & Contact --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/3"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">
                Areeb & Areel
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">
              Building The <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">Benchmark.</span>
            </h3>
            
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-4 group cursor-pointer w-fit">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span className="text-brand-silver/60 group-hover:text-white transition-colors">Lahore, Punjab, Pakistan</span>
              </a>
              <a href="mailto:executive@areebareel.com" className="flex items-center gap-4 group cursor-pointer w-fit">
                <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span className="text-brand-silver/60 group-hover:text-white transition-colors">executive@areebareel.com</span>
              </a>
            </div>
          </motion.div>

          {/* --- RIGHT: The Giant Navigation Links --- */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full lg:w-2/3 flex flex-col sm:flex-row justify-end gap-16 lg:gap-32"
          >
            {/* Core Operations Column */}
            <div className="flex flex-col">
              <h4 className="text-brand-silver/40 text-xs font-bold uppercase tracking-[0.3em] mb-8">
                Core Divisions
              </h4>
              <ul className="space-y-6">
                {coreDivisions.map((link, idx) => (
                  <motion.li key={idx} variants={itemVariants as any}>
                    <Link 
                      href={link.href} 
                      className="group flex items-center text-brand-silver/80 hover:text-[#D4AF37] transition-colors duration-300 text-lg md:text-xl font-bold tracking-wide w-fit"
                    >
                      <span className="relative overflow-hidden">
                        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                          {link.name}
                        </span>
                        <span className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
                          {link.name}
                        </span>
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Corporate Column */}
            <div className="flex flex-col">
              <h4 className="text-brand-silver/40 text-xs font-bold uppercase tracking-[0.3em] mb-8">
                Corporate
              </h4>
              <ul className="space-y-6">
                {corporateLinks.map((link, idx) => (
                  <motion.li key={idx} variants={itemVariants as any}>
                    <Link 
                      href={link.href} 
                      className="group flex items-center text-brand-silver/80 hover:text-[#D4AF37] transition-colors duration-300 text-lg md:text-xl font-bold tracking-wide w-fit"
                    >
                      <span className="relative overflow-hidden">
                        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                          {link.name}
                        </span>
                        <span className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
                          {link.name}
                        </span>
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

        {/* --- BOTTOM SECTION: Copyright & Socials --- */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6 relative z-20">
          <p className="text-brand-silver/40 text-[10px] md:text-xs tracking-widest uppercase text-center md:text-left">
            © {new Date().getFullYear()} Areeb & Areel Corporation. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-brand-silver/60 hover:text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300">
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-brand-silver/60 hover:text-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300">
              <FaTwitter className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* --- WATERMARK --- */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-[-5%] left-0 w-full flex justify-center pointer-events-none select-none z-0 overflow-hidden"
      >
        <span className="text-[9vw] font-black tracking-tighter text-white whitespace-nowrap leading-none">
          AREEB AREEL CORP
        </span>
      </motion.div>

    </footer>
  );
}