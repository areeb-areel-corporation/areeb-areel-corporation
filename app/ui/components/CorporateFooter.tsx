'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Globe } from 'lucide-react';
import { FaLinkedin, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

// --- NAVIGATION DATA ---
const coreDivisions = [
  { name: 'Naseeb Homes', href: '/naseeb-homes' }, 
  { name: 'Filling Station', href: '/filling-station' },
  { name: 'Architecture & Build', href: '/architecture' },
];

const corporateLinks = [
  { name: 'About The Legacy', href: '/#about-corporation' },
  { name: 'Dubai Consulting', href: '/#contact' },
  { name: 'Enquiries', href: '/#contact' },
  { name: 'Blogs', href: '/#blogs' },
];

// --- SOCIAL MEDIA DATA ---
const socialLinks = [
  { 
    name: 'LinkedIn', 
    icon: FaLinkedin, 
    href: 'https://linkedin.com', 
    // Official LinkedIn Blue
    hoverClass: 'hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white' 
  },
  { 
    name: 'Facebook', 
    icon: FaFacebookF, 
    href: 'https://facebook.com', 
    // Official Facebook Blue
    hoverClass: 'hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white' 
  },
  { 
    name: 'Instagram', 
    icon: FaInstagram, 
    href: 'https://instagram.com', 
    // Official Instagram Gradient
    hoverClass: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:border-transparent hover:text-white' 
  },
  { 
    name: 'YouTube', 
    icon: FaYoutube, 
    href: 'https://youtube.com', 
    // Official YouTube Red
    hoverClass: 'hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white' 
  },
];

export default function CorporateFooter() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <footer className="relative w-full bg-[#050505] text-white pt-20 pb-6 overflow-hidden border-t border-white/5">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 blur-[200px] rounded-[100%] pointer-events-none z-0" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* --- THE CARD GRID UI --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16"
        >
          
          {/* 1. LEFT CARD: Branding & Contact (Takes up more space) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col bg-[#111111]/40 border border-white/5 p-8 md:p-10 rounded-[24px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-[#D4AF37] hover:bg-[#111111]/80 hover:shadow-[0_20px_50px_-15px_rgba(212,175,55,0.15)]"
          >
            {/* Corporate Logo Placeholder */}
            <div className="mb-8 flex items-center gap-4">
              <div className="relative w-14 h-14 bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden flex items-center justify-center">
                {/* Replace src with your actual logo path */}
                <Image 
                  src="/images/Asset 1.png" 
                  alt="Areeb & Areel Logo" 
                  width={40} 
                  height={40} 
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.3em] block mb-1">
                  Areeb & Areel Corp.
                </span>
                <h3 className="text-2xl font-black tracking-tighter leading-none text-white">
                  Building The Benchmark.
                </h3>
              </div>
            </div>
            
            {/* Contact Details */}
            <div className="space-y-5 mt-auto">
              <a href="#" className="flex items-center gap-4 group cursor-pointer w-fit">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <span className="text-zinc-400 group-hover:text-white transition-colors text-sm">Lahore, Punjab, Pakistan</span>
              </a>
              <a href="#" className="flex items-center gap-4 group cursor-pointer w-fit">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 transition-all duration-300">
                  <Globe className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <span className="text-zinc-400 group-hover:text-white transition-colors text-sm">Invox Business Center, Dubai</span>
              </a>
              <a href="mailto:contact@areebareel.com" className="flex items-center gap-4 group cursor-pointer w-fit">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 transition-all duration-300">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <span className="text-zinc-400 group-hover:text-[#D4AF37] transition-colors text-sm font-bold tracking-wide">contact@areebareel.com</span>
              </a>
            </div>
          </motion.div>

          {/* 2. MIDDLE CARD: Core Divisions */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-4 flex flex-col bg-[#111111]/40 border border-white/5 p-8 md:p-10 rounded-[24px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-[#D4AF37] hover:bg-[#111111]/80 hover:shadow-[0_20px_50px_-15px_rgba(212,175,55,0.15)]"
          >
            <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-zinc-700" />
              Core Divisions
            </h4>
            <ul className="space-y-6 mt-auto">
              {coreDivisions.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center text-zinc-300 hover:text-[#D4AF37] transition-colors duration-300 text-lg font-bold tracking-wide w-fit"
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
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 3. RIGHT CARD: Corporate Links */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-3 flex flex-col bg-[#111111]/40 border border-white/5 p-8 md:p-10 rounded-[24px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-[#D4AF37] hover:bg-[#111111]/80 hover:shadow-[0_20px_50px_-15px_rgba(212,175,55,0.15)]"
          >
            <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-zinc-700" />
              Corporate
            </h4>
            <ul className="space-y-6 mt-auto">
              {corporateLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center text-zinc-300 hover:text-[#D4AF37] transition-colors duration-300 text-lg font-bold tracking-wide w-fit"
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
                </li>
              ))}
            </ul>
          </motion.div>

        </motion.div>

        {/* --- BOTTOM SECTION: Copyright & Socials --- */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between pt-6 border-t border-white/10 gap-6 relative z-20">
          
          <p className="text-zinc-500 text-[10px] md:text-xs tracking-widest uppercase text-center md:text-left">
            © {new Date().getFullYear()} Areeb & Areel Corporation. All Rights Reserved.
          </p>
          
          {/* Dynamic Brand-Specific Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a 
                  key={social.name}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  // The base state is dark and minimal. The hover state triggers the specific brand colors.
                  className={`w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 bg-white/5 transition-all duration-300 ${social.hoverClass}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </footer>
  );
}