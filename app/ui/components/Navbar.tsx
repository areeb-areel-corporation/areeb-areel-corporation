'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence, Variants, MotionValue } from 'framer-motion';
import { Menu, X, ChevronRight, Fuel, Building2, ShoppingCart, LucideIcon } from 'lucide-react';

// Define the shape of our navigation links
interface NavLink {
  name: string;
  href: string;
  icon: LucideIcon | null;
}

const navLinks: NavLink[] = [
  { name: 'Infrastructure', href: '/infrastructure', icon: Building2 },
  { name: 'Energy Networks', href: '/energy-marts', icon: Fuel },
  { name: 'Retail Marts', href: '/energy-marts#marts', icon: ShoppingCart },
  { name: 'About Corporate', href: '/about', icon: null },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { scrollY } = useScroll();

  // 1. Framer Motion Scroll Transformations with Explicit Typing
  const backgroundColor: MotionValue<string> = useTransform(
    scrollY,
    [0, 100],
    ['rgba(13, 13, 13, 0)', 'rgba(13, 13, 13, 0.95)']
  );
  
  const backdropBlur: MotionValue<string> = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(12px)']
  );

  const headerHeight: MotionValue<string> = useTransform(scrollY, [0, 100], ['100px', '80px']);
  const logoScale: MotionValue<number> = useTransform(scrollY, [0, 100], [1, 0.8]);

  // Typed entrance animation variants for nav links
  const linkVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <motion.header
      style={{ backgroundColor, backdropBlur, height: headerHeight }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/5 flex items-center transition-all duration-300 ease-in-out"
    >
      <div className="max-w-[1600px] w-full mx-auto px-4 md:px-10 flex items-center justify-between">
        
        {/* --- LEFT: Logo Section --- */}
        <Link href="/" className="flex items-center gap-3 group relative z-50">
          <motion.div style={{ scale: logoScale }} className="relative w-12 h-12 md:w-14 md:h-14">
            <Image 
              src="/images/AREEB AREEL LOGO BADGE.png"
              alt="Areeb & Areel Logo"
              fill
              priority
              className="object-contain filter drop-shadow-[0_0_10px_rgba(212,175,55,0.2)]"
            />
          </motion.div>
          <motion.div 
            style={{ scale: logoScale }}
            className="flex flex-col transform origin-left"
          >
            <span className="text-xl md:text-2xl font-black text-white tracking-widest leading-tight">
              AREEB & AREEL
            </span>
            <span className="text-[10px] md:text-xs font-medium text-brand-gold tracking-[0.3em] uppercase">
              Corporation
            </span>
          </motion.div>
        </Link>

        {/* --- CENTER: Desktop Navigation --- */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
            >
              <Link 
                href={link.href} 
                className="relative text-sm uppercase tracking-widest font-semibold px-5 py-2 text-brand-silver/90 hover:text-white transition-colors duration-300 group overflow-hidden"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* --- RIGHT: CTA & Mobile Toggle --- */}
        <div className="flex items-center gap-4 relative z-50">
          <Link href="/contact" className="hidden sm:block group">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-brand-gold text-brand-black font-bold px-7 py-3 rounded-md tracking-wider uppercase text-xs hover:brightness-110 transition shadow-lg shadow-brand-gold/10 flex items-center gap-2"
            >
              Contact Portal
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-brand-gold transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* --- Mobile Fullscreen Menu --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-brand-black z-40 pt-28 px-6 pb-10 flex flex-col justify-between border-t border-white/5 lg:hidden"
          >
            <div className="space-y-6">
              {navLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link 
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-4 bg-brand-slate border border-white/5 rounded-xl group hover:border-brand-gold/30 transition"
                    >
                      <div className="flex items-center gap-4">
                        {Icon && <Icon className="w-6 h-6 text-brand-gold" />}
                        <span className="text-lg font-bold uppercase tracking-wider text-brand-silver group-hover:text-white transition">
                          {link.name}
                        </span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-brand-gold group-hover:translate-x-1 transition" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-auto space-y-4 pt-10 border-t border-white/5">
                <p className="text-xs text-brand-silver/50 tracking-widest uppercase text-center">Areeb & Areel Corp • Lahore, Punjab</p>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full">
                    <button className="w-full bg-brand-gold text-brand-black font-bold py-4 rounded-xl tracking-wider uppercase hover:brightness-110 transition shadow-lg shadow-brand-gold/10 flex items-center justify-center gap-2">
                        Get Corporate Inquiry
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}