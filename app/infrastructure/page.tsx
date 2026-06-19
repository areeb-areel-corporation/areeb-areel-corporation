'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Compass, PenTool, HardHat, Ruler, Building, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const disciplines = [
  {
    icon: Compass,
    title: 'Topographical Mapping',
    desc: 'Precision land surveying utilizing drone topography and satellite geospatial mapping to establish flawless foundational data before any concrete is poured.',
  },
  {
    icon: PenTool,
    title: 'Architectural Design',
    desc: 'Award-winning architectural modeling and BIM (Building Information Modeling) engineering. We design structural masterpieces optimized for stress, climate, and luxury.',
  },
  {
    icon: HardHat,
    title: 'Heavy Construction',
    desc: 'Execution at scale. Our fleet of heavy machinery and elite engineering corps bring complex blueprints to reality with uncompromising safety and speed.',
  }
];

export default function InfrastructurePage() {
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
      
      {/* --- HERO SECTION: Industrial Scale --- */}
      <section className="relative w-full h-[85vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Darkened Blueprint/Construction Background */}
        <div className="absolute inset-0 z-0 bg-[#050505]">
          <Image 
            src="/images/construction.png" // Use a heavy construction or crane image here
            alt="Heavy Infrastructure & Engineering"
            fill
            priority
            className="object-cover opacity-40 mix-blend-luminosity filter contrast-125"
          />
          {/* Engineering Grid Overlay */}
          <div 
            className="absolute inset-0 z-10 opacity-20 pointer-events-none"
            style={{ backgroundImage: 'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)', backgroundSize: '100px 100px' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-20" />
        </div>

        <div className="relative z-30 w-full max-w-[1600px] mx-auto px-6 md:px-10 mt-20">
          <motion.div 
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em] font-mono">
                Sys-Core: Engineering
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] mb-6 drop-shadow-2xl">
              Architecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
                The Impossible.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-brand-silver/70 text-lg md:text-xl leading-relaxed max-w-2xl">
              From microscopic topographical mapping to macroscopic structural erection. We provide end-to-end infrastructure solutions that reshape skylines and redefine structural integrity.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- THE 3 PILLARS OF ENGINEERING --- */}
      <section className="relative z-40 -mt-20 max-w-[1600px] mx-auto px-6 md:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {disciplines.map((item, idx) => (
            <div key={idx} className="bg-[#111111]/90 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
              {/* Hover Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 blur-3xl rounded-full group-hover:bg-[#D4AF37]/20 transition-colors duration-500" />
              
              <div className="w-14 h-14 rounded-xl bg-black border border-[#D4AF37]/30 flex items-center justify-center mb-8 shadow-inner">
                <item.icon className="w-6 h-6 text-[#D4AF37]" />
              </div>
              
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{item.title}</h3>
              <p className="text-brand-silver/60 text-sm leading-relaxed">{item.desc}</p>
              
              {/* Technical Bottom Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 group-hover:bg-[#D4AF37] transition-colors duration-500 origin-left" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* --- TECHNICAL SHOWCASE: Blueprint to Reality --- */}
      <section className="py-24 lg:py-40 max-w-[1600px] mx-auto px-6 md:px-10 overflow-hidden">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: The Visualizer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-[#050505] border border-[#D4AF37]/30 shadow-[0_0_50px_rgba(212,175,55,0.1)] group p-4 lg:p-8">
              
              {/* Inner screen effect */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#111] border border-white/5">
                <Image 
                  src="/images/housing-society.png" // Replace with an architectural render or wireframe image if you have one
                  alt="BIM Modeling"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Scanner Line Animation */}
                <motion.div 
                  animate={{ y: ["0%", "100%", "0%"] }}
                  transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                  className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]/50 shadow-[0_0_20px_#D4AF37] z-20"
                />
              </div>

              {/* Technical UI overlays */}
              <div className="absolute top-10 right-10 bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded text-[10px] text-[#D4AF37] font-mono tracking-widest hidden md:block">
                SYS.RENDER_ACTIVE
              </div>
            </div>
          </motion.div>

          {/* Right: The Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="w-14 h-14 rounded-xl bg-[#111] border border-[#D4AF37]/30 flex items-center justify-center">
              <Cpu className="w-7 h-7 text-[#D4AF37]" />
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                Next-Gen Structural <br/> Intelligence.
              </h2>
              <p className="text-brand-silver/70 text-lg leading-relaxed">
                Before ground is broken, every millimeter of our projects is digitally constructed and stress-tested. By leveraging AI-assisted mapping and advanced 3D architectural engineering, we eliminate structural errors and optimize material efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div className="flex items-start gap-4">
                <Ruler className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold mb-1">Precision Engineering</h4>
                  <p className="text-brand-silver/50 text-sm">Tolerance levels mapped to sub-millimeter accuracy.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Building className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-bold mb-1">Material Science</h4>
                  <p className="text-brand-silver/50 text-sm">AAA-grade industrial steel and concrete sourcing.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- INITIATION CTA --- */}
      <section className="relative py-24 lg:py-32 bg-[#111111] border-y border-white/5 overflow-hidden">
        {/* Subtle background machinery gears or gradient */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">
            Ready to break ground?
          </h3>
          <p className="text-brand-silver/60 mb-10 max-w-xl mx-auto text-lg">
            Consult with our master architects and chief engineers to blueprint your next mega-structure or commercial development.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/#corporate-inquiry" 
              className="w-full sm:w-auto relative overflow-hidden group bg-[#D4AF37] text-black font-bold px-10 py-5 rounded-md tracking-widest uppercase transition-all duration-500 text-sm flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
              <span className="relative z-10 flex items-center gap-2">
                Initiate Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}