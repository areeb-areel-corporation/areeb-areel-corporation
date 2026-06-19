'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Home, TreePine, Shield, Map, ArrowRight, Building2, Droplets } from 'lucide-react';
import Link from 'next/link';

export default function HousingSocietyPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#D4AF37] selection:text-black">
      
      {/* --- HERO SECTION: Architectural Grandeur --- */}
      <section className="relative w-full h-[85vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Slow Zoom Animation */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Using your existing housing society image */}
          <Image 
            src="/images/housing-society.png" 
            alt="AAA Developments Premium Community"
            fill
            priority
            className="object-cover"
          />
          {/* Subtle gradient to ensure text readability without hiding the image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 to-transparent z-10" />
        </motion.div>

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-10 flex flex-col justify-end h-full pb-32">
          <motion.div 
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">
                AAA Developments
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] mb-6 drop-shadow-2xl">
              Master-Planned <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
                Communities.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-brand-silver/90 text-lg md:text-xl leading-relaxed max-w-2xl font-medium drop-shadow-md">
              Redefining luxury urban living. We engineer expansive, self-sustaining residential ecosystems that blend avant-garde architecture with pristine natural landscapes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- FLOATING AMENITIES GRID --- */}
      <section className="relative z-30 -mt-24 max-w-[1600px] mx-auto px-6 md:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { icon: Shield, title: "Gated Security", desc: "Military-grade access control & 24/7 AI surveillance." },
            { icon: TreePine, title: "Eco-Centric Layout", desc: "Over 40% dedicated green spaces and botanical parks." },
            { icon: Droplets, title: "Self-Sustaining Grid", desc: "Independent water filtration and solar-ready infrastructure." }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#111111]/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] group hover:border-[#D4AF37]/50 transition-colors duration-500">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30 mb-6 group-hover:bg-[#D4AF37] transition-colors duration-500">
                <item.icon className="w-5 h-5 text-[#D4AF37] group-hover:text-black transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-brand-silver/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* --- THE SHOWCASE: RESIDENTIAL VS COMMERCIAL --- */}
      <section className="py-24 lg:py-40 max-w-[1600px] mx-auto px-6 md:px-10 overflow-hidden">
        
        {/* Project 1: Ultra-Luxury Villas */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32 lg:mb-48">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="w-14 h-14 rounded-xl bg-[#111] border border-[#D4AF37]/30 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.15)]">
              <Home className="w-7 h-7 text-[#D4AF37]" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                Bespoke Residential <br/> Estates.
              </h2>
              <p className="text-brand-silver/70 text-lg leading-relaxed">
                Our signature villas are masterpieces of modern design. Featuring expansive floor plans, floor-to-ceiling smart glass, and private infinity pools. Every home is oriented to maximize natural light while ensuring absolute privacy.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div>
                <span className="text-brand-silver/40 text-xs font-bold uppercase tracking-widest block mb-1">Plot Sizes</span>
                <span className="text-white font-semibold">1 to 4 Kanal Estates</span>
              </div>
              <div>
                <span className="text-brand-silver/40 text-xs font-bold uppercase tracking-widest block mb-1">Architecture</span>
                <span className="text-white font-semibold">Contemporary Spanish & Minimalist</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Highly visible, architectural framing */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-[0_0_50px_rgba(212,175,55,0.1)] group bg-[#111]">
              <Image 
                src="/images/housing-society.png" // Replace with specific Villa image
                alt="Luxury Villa"
                fill
                className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] pointer-events-none" />
              
              {/* Glass Tag */}
              <div className="absolute top-6 right-6 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                  Phase 1 Selling Now
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project 2: Commercial Boulevard (Reverse Layout) */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/20 shadow-2xl group bg-[#111]">
              <Image 
                src="/images/construction.png" // Replace with Commercial area image
                alt="Commercial Boulevard"
                fill
                className="object-cover transition-transform duration-[1500ms] group-hover:scale-105 filter saturate-[0.85]"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] pointer-events-none" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#D4AF37]/10 blur-3xl rounded-full z-[-1]" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="w-14 h-14 rounded-xl bg-[#111] border border-[#D4AF37]/30 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.15)]">
              <Building2 className="w-7 h-7 text-[#D4AF37]" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                The Corporate <br/> Boulevard.
              </h2>
              <p className="text-brand-silver/70 text-lg leading-relaxed">
                A thriving economic nucleus integrated directly into the master plan. The Boulevard features high-rise corporate suites, premium retail outlets, and fine dining—ensuring residents have access to global commodities without leaving the gates.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div>
                <span className="text-brand-silver/40 text-xs font-bold uppercase tracking-widest block mb-1">Retail Spaces</span>
                <span className="text-white font-semibold">Double-Height Showrooms</span>
              </div>
              <div>
                <span className="text-brand-silver/40 text-xs font-bold uppercase tracking-widest block mb-1">Corporate</span>
                <span className="text-white font-semibold">Grade-A Office Floors</span>
              </div>
            </div>
          </motion.div>
        </div>

      </section>

      {/* --- MASTER PLAN EXPLORATION CTA --- */}
      <section className="relative py-32 bg-[#111111] border-t border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D4AF37]/5 blur-[200px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30 mb-8">
            <Map className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            Secure Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
              Legacy.
            </span>
          </h3>
          <p className="text-brand-silver/60 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            Phase 1 inventory is strictly limited. Connect with our real estate advisory board to view the interactive master plan and discuss investment acquisitions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/#corporate-inquiry" 
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
          </div>
        </div>
      </section>

    </main>
  );
}