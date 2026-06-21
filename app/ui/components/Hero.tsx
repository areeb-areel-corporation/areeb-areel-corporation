'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';

export default function Hero(): JSX.Element {
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const leftIn: Variants = {
    hidden: { opacity: 0, x: -80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const rightIn: Variants = {
    hidden: { opacity: 0, x: 80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const centerIn: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const scrollToSection = (id: string): void => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-brand-black flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40 select-none pointer-events-none"
      >
        <source src="/videos/areeb-areel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/80 z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-20 max-w-5xl mx-auto text-center px-4 flex flex-col items-center space-y-8"
      >
        <motion.div
          variants={centerIn}
          className="w-32 h-32 md:w-40 md:h-40 relative"
        >
          <Image
            src="/images/AREEB AREEL LOGO-01.png"
            alt="Areeb & Areel Badge"
            fill
            priority
            className="object-contain filter drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          />
        </motion.div>

        <div className="space-y-4">
          <motion.h1
            variants={leftIn}
            className="text-4xl md:text-7xl font-black uppercase tracking-wider text-white"
          >
            AREEB & AREEL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-200 to-brand-gold">
              CORPORATION
            </span>
          </motion.h1>

          <motion.p
            variants={rightIn}
            className="text-brand-silver/80 text-sm md:text-lg max-w-5xl mx-auto tracking-widest uppercase font-medium"
          >
            Building Dreams • Shaping Spaces • Fueling Future
          </motion.p>
        </div>

        <motion.div
          variants={centerIn}
          className="flex flex-col sm:flex-row gap-4 pt-4"
        >
          <button
            type="button"
            onClick={() => scrollToSection('corporate-divisions')}
            className="cursor-pointer group text-brand-black font-bold px-8 py-4 rounded-md tracking-wider uppercase bg-[#D4AF37] transition-all shadow-lg shadow-[#D4AF37]/20 text-sm flex items-center justify-center gap-2"
          >
            Explore Sectors
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="cursor-pointer relative overflow-hidden group border border-white/20 bg-white/5 font-bold px-8 py-4 rounded-md tracking-wider uppercase transition-all duration-500 text-sm backdrop-blur-sm flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-[#D4AF37] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
            <span className="relative z-10 text-white group-hover:text-brand-black transition-colors duration-500">
              Initiate Dialogue
            </span>
          </button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent" />
      </div>
    </section>
  );
}