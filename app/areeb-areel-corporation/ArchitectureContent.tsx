"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Compass,
  Sofa,
  HardHat,
  ArrowRight,
  CheckCircle2,
  Layers,
} from "lucide-react";
import Link from "next/link";

const coreServices = [
  {
    icon: Compass,
    title: "Architecture & Design",
    desc: "From early concepts to detailed technical information, we plan spaces around your site, requirements, budget and long-term use. Our services include floor plans, elevations, sections, architectural drawings and realistic 3D visualization.",
  },
  {
    icon: Sofa,
    title: "Interior Design",
    desc: "We create interior environments that balance appearance with comfort, movement, storage, lighting and everyday functionality. Solutions are tailored for residences, offices, shops and commercial spaces.",
  },
  {
    icon: HardHat,
    title: "Turnkey Construction",
    desc: "Our construction service connects approved design, procurement coordination, site execution, finishing and project handover through one structured process.",
    /*
    desc: "Beyond building—we create legacies. From initial project management and execution to post-delivery maintenance, we handle the complete lifecycle.",
    */
  },
];

const technicalDetails = [
  "Architectural Drawings & 3D Visualization",
  "Architectural Site & Floor Plans",
  "Building & Wall Sections",
  "Door & Window Details",
  "Roof Plans & Opening Schedules",
  "MEP & Structural Coordination",
  "Material & Fabrication Specifications"
];

export default function ArchitecturePage() {
 

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
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#D4AF37] selection:text-black">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[85vh] min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-[#050505]">
          <Image
            src="/images/construction.png" 
            alt="Architecture and Design"
            fill
            priority
            className="object-cover opacity-50 mix-blend-luminosity filter contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-20" />
        </div>

        <div className="relative z-30 w-full max-w-[1600px] mx-auto px-6 md:px-10 mt-20">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer as any}
            className="max-w-4xl"
          >
            <motion.div variants={slideInLeft as any} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em] font-mono">
                Areeb & Areel Corporation
              </span>
            </motion.div>

            <motion.h1 variants={slideInLeft as any} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] mb-6 drop-shadow-2xl">
              One Company. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
                Multiple Solutions.
              </span>
            </motion.h1>

            <motion.p variants={slideInLeft as any} className="text-brand-silver/80 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mb-8">
              Design. Develop. Deliver. <br className="hidden md:block"/>
              Turning ideas into practical, distinctive and buildable spaces.
            </motion.p>
            
            <motion.div variants={slideInLeft as any} className="flex items-center gap-4 text-[#D4AF37] text-sm md:text-base font-bold uppercase tracking-widest">
              <span>Architecture</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
              <span>Interior Design</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
              <span>Construction</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- THE 3 SERVICES --- */}
      <section className="relative z-40 -mt-20 max-w-[1600px] mx-auto px-6 md:px-10 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreServices.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={idx % 2 === 0 ? slideInLeft as any : slideInRight as any} 
              className="bg-[#111111]/90 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] group hover:border-[#D4AF37]/50 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 blur-3xl rounded-full group-hover:bg-[#D4AF37]/20 transition-colors duration-500" />
              <div className="w-14 h-14 rounded-xl bg-black border border-[#D4AF37]/30 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <item.icon className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
                {item.title}
              </h3>
              <p className="text-brand-silver/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- TECHNICAL SHOWCASE: The Checklist --- */}
      <section className="py-24 lg:py-40 max-w-[1600px] mx-auto px-6 md:px-10 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Image Visualizer */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={slideInLeft as any}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#050505] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group p-2">
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-[#111]">
                <Image
                  src="/images/housing-society.png" 
                  alt="Architecture Services"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-[#D4AF37]/50 flex items-center justify-center shrink-0">
                    <Layers className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Full-Service Design</p>
                    <p className="text-brand-silver/50 text-xs">Concept to Execution</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Service List */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={slideInRight as any}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em] mb-4">Architecture Services</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                Architecture that blends <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
                  Beauty & Function.
                </span>
              </h2>
              <p className="text-brand-silver/70 text-lg leading-relaxed">
                Successful architecture should do more than create a visual impression. It should respond to the site, support the people using it and provide clear information for accurate construction. Our team develops coordinated architectural and technical packages for residential, commercial and mixed-use projects.
              </p>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              {technicalDetails.map((detail, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <span className="text-brand-silver/90 font-medium text-sm md:text-base group-hover:text-white transition-colors">
                    {detail}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- INITIATION CTA --- */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-24 lg:py-32 bg-[#111111] border-y border-white/5 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">
            Ready to build your vision?
          </h3>
          <p className="text-brand-silver/60 mb-10 max-w-xl mx-auto text-lg">
            Tell us about your site, project type, design requirements and expected budget. Our team will help define the next practical step-from initial planning to full project execution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="w-full sm:w-auto relative overflow-hidden group bg-[#D4AF37] text-black font-bold px-10 py-5 rounded-lg tracking-widest uppercase transition-all duration-500 text-sm flex items-center justify-center gap-3 active:scale-95 shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)]"
            >
              <div className="absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
              <span className="relative z-10 flex items-center gap-2">
                Initiate Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
