"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Home,
  Shield,
  MapPin,
  ArrowRight,
  Building2,
  Wallet,
  PlayCircle,
} from "lucide-react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

export default function NaseebHomesPage() {
 
  // --- HORIZONTAL SLIDING ANIMATIONS ---
  const slideInLeft = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 80 },
    show: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#D4AF37] selection:text-black overflow-clip">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[85vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/housing-society.png" // Replace with a Naseeb Homes hero image
            alt="Naseeb Homes Community"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/50 to-transparent z-10" />
        </div>

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-10 flex flex-col justify-end h-full pb-32">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div
              variants={slideInLeft as any}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[1px] bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">
                A Project by Areeb Areel Corp.
              </span>
            </motion.div>

            <motion.h1
              variants={slideInLeft as any}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] mb-6 drop-shadow-2xl"
            >
              Naseeb Homes. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
                Building Your Dreams.
              </span>
            </motion.h1>

            <motion.p
              variants={slideInLeft as any}
              className="text-brand-silver/90 text-lg md:text-xl leading-relaxed max-w-2xl font-medium drop-shadow-md"
            >
              Experience a residential environment created around the needs of modern families. Naseeb Homes offers thoughtfully planned 3.5 and 5 Marla residences combining contemporary architecture, comfortable layouts and a stronger sense of community.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- FLOATING AMENITIES GRID --- */}
      <section className="relative z-30 -mt-24 max-w-[1600px] mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Shield,
              title: "Family-Focused Environment",
              desc: "Planning shaped around privacy, comfort, everyday routines and community life.",
            },
            {
              icon: Home,
              title: "Contemporary Architecture",
              desc: "Modern exterior elevations and practical two- and three-bedroom layout options.",
            },
            {
              icon: Wallet,
              title: "Structured Payment Options",
              desc: "Ownership options designed to make the buying journey clearer through verified project documentation.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={slideInLeft as any}
              className="bg-[#111111]/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] group hover:border-[#D4AF37]/50 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30 mb-6 group-hover:bg-[#D4AF37] transition-colors duration-500">
                <item.icon className="w-5 h-5 text-[#D4AF37] group-hover:text-black transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-brand-silver/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- REEL / VIDEO SHOWCASE SECTION --- */}
      <section className="py-24 lg:py-32 max-w-[1600px] mx-auto px-6 md:px-10 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 bg-[#111111]/40 border border-white/5 rounded-[2rem] p-8 lg:p-16 relative shadow-2xl">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none z-0" />

          {/* Left Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft as any}
            className="w-full lg:w-1/2 relative z-10"
          >
            <div className="w-14 h-14 rounded-xl bg-[#0a0a0a] border border-[#D4AF37]/30 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.15)] mb-8">
              <PlayCircle className="w-7 h-7 text-[#D4AF37]" />
            </div>
            <h2 className="text-4xl md:text-5xl  text-[#D4AF37] font-black tracking-tight mb-6 leading-tight">
              Experience The <br />
              <span className="text-transparent  bg-clip-text bg-gradient-to-r from-white to-brand-silver/50">
                Naseeb Lifestyle.
              </span>
            </h2>
            <p className="text-brand-silver/70 text-lg leading-relaxed mb-8">
              Take a digital tour of the architecture, layouts and residential vision behind Naseeb Homes. Explore how efficient space planning, modern exterior design and family-oriented interiors come together to create a comfortable everyday environment.
            </p>
            
            <div className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-[#D4AF37]">
              <span className="w-8 h-[2px] bg-[#D4AF37]" />
              Watch The Reel
            </div>
          </motion.div>

          {/* Right Video Reel Player */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight as any}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10"
          >
            {/* Reel Frame (9:16 Aspect Ratio) */}
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[9/16] rounded-[2.5rem] overflow-hidden border-[6px] border-[#1a1a1a] shadow-[0_0_50px_rgba(212,175,55,0.2)] bg-black">
              {/* Note: autoPlay without muted is used, but browsers may enforce manual play if sound is enabled */}
              <video 
                src="/videos/naseeb-homes.mp4" 
                autoPlay 
                controls 
                loop 
                playsInline
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
              
              {/* Optional: Glossy screen reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- THE SHOWCASE: RESIDENTIAL OPTIONS --- */}
      <section className="pb-24 pt-10 lg:pb-40 max-w-[1600px] mx-auto px-6 md:px-10 overflow-hidden">
        
        {/* Project 1: The Homes */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32 lg:mb-48">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft as any}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="w-14 h-14 rounded-xl bg-[#111] border border-[#D4AF37]/30 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.15)]">
              <Building2 className="w-7 h-7 text-[#D4AF37]" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                Premium 3.5 & 5 <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">Marla Homes.</span>
              </h2>
              <p className="text-brand-silver/70 text-lg leading-relaxed">
                Designed for families who value both appearance and everyday functionality. Choose from thoughtfully organised two- and three-bedroom layouts with practical living spaces, contemporary facades and room arrangements created around family requirements.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div>
                <span className="text-brand-silver/40 text-xs font-bold uppercase tracking-widest block mb-1">
                  Plot Sizes
                </span>
                <span className="text-white font-semibold">
                  3.5 & 5 Marla Options
                </span>
              </div>
              <div>
                <span className="text-brand-silver/40 text-xs font-bold uppercase tracking-widest block mb-1">
                  Layouts
                </span>
                <span className="text-white font-semibold">
                  Two- and Three-Bedroom Designs
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight as any}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-[0_0_50px_rgba(212,175,55,0.1)] group bg-[#111]">
              <Image
                src="/images/housing-society.png" // Replace with Naseeb Homes exterior image
                alt="Naseeb Homes Exterior"
                fill
                className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] pointer-events-none" />

              {/* Glass Tag */}
              <div className="absolute top-6 right-6 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                  Booking Status: Contact the Authorised Sales Team
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project 2: Financials & Lifestyle (Reverse Layout) */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft as any}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/20 shadow-2xl group bg-[#111]">
              <Image
                src="/images/construction.png" // Replace with interior or community image
                alt="Naseeb Homes Community"
                fill
                className="object-cover transition-transform duration-[1500ms] group-hover:scale-105 filter saturate-[0.85]"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] pointer-events-none" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#D4AF37]/10 blur-3xl rounded-full z-[-1]" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight as any}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="w-14 h-14 rounded-xl bg-[#111] border border-[#D4AF37]/30 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.15)]">
              <MapPin className="w-7 h-7 text-[#D4AF37]" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                Accessible & <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">Secure Living.</span>
              </h2>
              <p className="text-brand-silver/70 text-lg leading-relaxed">
                Naseeb Homes is envisioned as a residential community where families can enjoy comfort, privacy and a more organised living environment. Structured ownership options are designed to make the buying journey clearer. All prices, percentages, payment schedules, construction specifications and possession terms must be confirmed through the latest signed documentation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div>
                <span className="text-brand-silver/40 text-xs font-bold uppercase tracking-widest block mb-1">
                  Latest Pricing
                </span>
                <span className="text-white font-semibold text-lg text-[#D4AF37]">
                  Confirm with Sales Team
                </span>
              </div>
              <div>
                <span className="text-brand-silver/40 text-xs font-bold uppercase tracking-widest block mb-1">
                  Payment Schedule
                </span>
                <span className="text-white font-semibold">
                  Confirm from Signed Documents
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-brand-silver/40 text-xs font-bold uppercase tracking-widest block mb-1">
                  Possession Terms
                </span>
                <span className="text-white font-semibold">
                  Confirm from Latest Documentation
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- MASTER PLAN EXPLORATION CTA --- */}
   <section className="relative py-32 bg-[#111111] border-t border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D4AF37]/5 blur-[200px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 mx-auto rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30 mb-8"
          >
            <Home className="w-6 h-6 text-[#D4AF37]" />
          </motion.div>
          
          <motion.h3 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white"
          >
            Secure Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
              Future Home.
            </span>
          </motion.h3>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Explore available 3.5 and 5 Marla options and receive the latest floor plans, specifications, pricing and payment information from the authorised project team.
          </motion.p>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto relative overflow-hidden group bg-[#D4AF37] text-black font-bold px-10 py-5 rounded-lg tracking-widest uppercase transition-all duration-500 text-sm flex items-center justify-center gap-3 active:scale-95 shadow-[0_0_40px_rgba(212,175,55,0.3)]"
            >
              <div className="absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
              <span className="relative z-10 flex items-center gap-2">
                Inquire Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/"
              className="w-full sm:w-auto group flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors duration-300"
            >
              Return to Home
              <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:text-white transition-colors" />
              </div>
            </Link>
          </motion.div>

          {/* --- SOCIAL MEDIA LINKS WITH BRAND COLORS --- */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-10 border-t border-white/5 flex flex-col items-center"
          >
            <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-6">
              Connect With Us
            </p>
            <div className="flex items-center justify-center gap-4 sm:gap-6">
              {[
                { 
                  icon: FaFacebook, 
                  href: "#", 
                  name: "Facebook",
                  hoverBg: "hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 hover:shadow-[0_10px_20px_-10px_rgba(24,119,242,0.4)]",
                  hoverText: "group-hover:text-[#1877F2]" 
                },
                { 
                  icon: FaInstagram, 
                  href: "#", 
                  name: "Instagram",
                  hoverBg: "hover:border-[#E1306C]/50 hover:bg-[#E1306C]/10 hover:shadow-[0_10px_20px_-10px_rgba(225,48,108,0.4)]",
                  hoverText: "group-hover:text-[#E1306C]"
                },
                { 
                  icon: FaLinkedin, 
                  href: "#", 
                  name: "LinkedIn",
                  hoverBg: "hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 hover:shadow-[0_10px_20px_-10px_rgba(10,102,194,0.4)]",
                  hoverText: "group-hover:text-[#0A66C2]"
                },
                { 
                  icon: FaYoutube, 
                  href: "#", 
                  name: "YouTube",
                  hoverBg: "hover:border-[#FF0000]/50 hover:bg-[#FF0000]/10 hover:shadow-[0_10px_20px_-10px_rgba(255,0,0,0.4)]",
                  hoverText: "group-hover:text-[#FF0000]"
                },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`group relative w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-1 ${social.hoverBg}`}
                  >
                    <Icon className={`w-5 h-5 text-zinc-500 transition-colors duration-300 ${social.hoverText}`} />
                  </a>
                );
              })}
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
