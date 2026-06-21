'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Fuel, 
  ShoppingBag, 
  ShieldCheck, 
  Clock, 
  Droplet, 
  Wrench,
  CheckCircle2
} from 'lucide-react';
import PetrolStation from '../ui/components/PetrolStation'; // Keeping your custom component

export default function FillingStationPage() {
  // --- HORIZONTAL SLIDING ANIMATIONS ---
  const slideInLeft = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 80 },
    show: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#D4AF37] selection:text-black overflow-clip">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/petrol pump.png" // Replace with actual wide shot of the filling station
            alt="Areeb Areel Filling Station"
            fill
            priority
            className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/50 to-[#0a0a0a] z-10" />
        </div>

        <motion.div 
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-20"
        >
          <motion.div variants={slideInLeft as any} className="flex items-center justify-center gap-3 mb-6">
            {/* Crisp Logo Overlay from public folder */}
                   <div className="w-32 h-32 md:w-40 md:h-40 relative animate-fade-in">
                     <Image 
                       src="/images/AREEB AREEL LOGO-01.png" 
                       alt="Areeb & Areel Badge"
                       fill
                       priority
                       className="object-contain filter drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                     />
                   </div>
          </motion.div>
          
          <motion.h1 variants={slideInLeft as any} className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-6">
            Areeb Areel <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
              Filling Station.
            </span>
          </motion.h1>
          
          <motion.p variants={slideInLeft as any} className="text-brand-silver/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
            Your trusted stop for 100% pure fuel, accurate measurements, and complete travel convenience. Open 24/7 for you and your vehicle.
          </motion.p>
        </motion.div>
      </section>

      {/* Keeping your custom 3D/Map component if you have one */}
      <PetrolStation />

      {/* --- QUICK DETAILS BAR --- */}
      <section className="relative z-30 -mt-16 max-w-[1400px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111111]/90 backdrop-blur-xl border border-[#D4AF37]/20 p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10"
        >
          <div className="flex items-center gap-4 md:justify-center">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-brand-silver/50 font-bold mb-1">Our Commitment</p>
              <p className="font-medium text-white">Accurate Measurement & Quality</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 md:justify-center pt-6 md:pt-0">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
              <Clock className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-brand-silver/50 font-bold mb-1">Operating Hours</p>
              <p className="font-medium text-white">24/7 Continuous Service</p>
            </div>
          </div>

          <div className="flex items-center gap-4 md:justify-center pt-6 md:pt-0">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-brand-silver/50 font-bold mb-1">Security</p>
              <p className="font-medium text-white">Safe & Monitored Environment</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- THE SHOWCASE: REAL SERVICES --- */}
      <section className="py-24 lg:py-40 max-w-[1600px] mx-auto px-6 overflow-hidden">
        
        {/* Feature 1: Pure Fuel & Accurate Measurement */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32 lg:mb-48">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft as any}
            className="w-full lg:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[#D4AF37] mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-10" />
            <Image 
              src="/images/petrol pump.png" // Replace with photo of fuel pumps/oil tankers
              alt="Quality Fuel Filling"
              fill
              className="object-cover transition-transform duration-[1000ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 border border-white/10 rounded-2xl z-20 pointer-events-none" />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight as any}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="w-14 h-14 rounded-xl bg-[#111] border border-[#D4AF37]/30 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <Fuel className="w-7 h-7 text-[#D4AF37]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Guaranteed Quality & <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">Accurate Fueling.</span>
            </h2>
            <p className="text-brand-silver/70 text-lg leading-relaxed">
              We believe in honesty and quality. When you fill up at Areeb Areel Filling Station, we guarantee 100% accurate measurements and pure, uncontaminated fuel to keep your engine running smoothly.
            </p>
            <ul className="space-y-3 pt-4 border-t border-white/10">
              {['High-Speed Diesel', 'Premier Motor Gasoline', 'Strict Measurement Checks'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-base font-medium text-brand-silver group">
                  <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Feature 2: Complete Facilities (Reverse Layout) */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft as any}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="w-14 h-14 rounded-xl bg-[#111] border border-[#D4AF37]/30 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <Wrench className="w-7 h-7 text-[#D4AF37]" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black  tracking-tight">
              Everything You Need <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">In One Stop.</span>
            </h2>
            <p className="text-brand-silver/70 text-lg leading-relaxed">
              Take a break, pray, grab a snack, or get your vehicle serviced. We have built a complete travel stop so you and your family can refresh safely while your car gets the care it needs.
            </p>
            <ul className="space-y-3 pt-4 border-t border-white/10">
              <li className="flex items-center gap-3 text-base font-medium text-brand-silver">
                <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
                Mosque & Tuck Shop
              </li>
              <li className="flex items-center gap-3 text-base font-medium text-brand-silver">
                <Droplet className="w-5 h-5 text-[#D4AF37]" />
                Professional Oil Change
              </li>
              <li className="flex items-center gap-3 text-base font-medium text-brand-silver">
                <Wrench className="w-5 h-5 text-[#D4AF37]" />
                Service Station & Tyre Shop
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight as any}
            className="w-full lg:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[#D4AF37] mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-10" />
            <Image 
              src="/images/mart.png" // Replace with image of Tuck Shop / Facilities
              alt="Facilities & Tuck Shop"
              fill
              className="object-cover transition-transform duration-[1000ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 border border-white/10 rounded-2xl z-20 pointer-events-none" />
          </motion.div>
        </div>

      </section>

      {/* --- LOCATION MAP --- */}
      <section className="relative w-full py-24 lg:py-32 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[200px] rounded-full pointer-events-none" />

        <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

            {/* --- LEFT COLUMN: Typography & Information --- */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={slideInLeft as any}
              className="w-full lg:w-5/12 space-y-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-[1px] bg-[#D4AF37]" />
                  <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">
                    Visit Us Today
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6">
                  Find Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">Location.</span>
                </h2>
                <p className="text-brand-silver/70 text-lg leading-relaxed">
                  Conveniently located to serve local commuters and long-haul transport. Stop by anytime for guaranteed pure fuel and a well-deserved rest.
                </p>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-2 gap-6 py-6 border-y border-white/10">
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand-silver/50 font-bold mb-2">Location</p>
                  <p className="font-medium text-white text-sm">Lahore, Punjab<br/>Pakistan</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand-silver/50 font-bold mb-2">Status</p>
                  <div className="flex items-center gap-2 mt-1">
                    {/* Pulsing Active Indicator */}
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <p className="font-medium text-white text-sm">Open Now / 24 Hrs</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* --- RIGHT COLUMN: The Interactive Map UI --- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateX: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full lg:w-7/12 relative perspective-[1000px]"
            >
              <div className="relative w-full aspect-square md:aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-[#111] shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
                <div className="absolute top-0 left-0 w-full h-10 bg-[#111] border-b border-white/10 flex items-center px-4 gap-2 z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]/60" />
                  <span className="ml-4 text-[10px] text-brand-silver/40 font-mono tracking-widest uppercase">
                    GPS Satellite Link
                  </span>
                </div>

                <div className="absolute top-10 left-0 w-full h-[calc(100%-40px)] z-10 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.5883845708563!2d74.2313173113149!3d31.468623349589187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919021a4b07b85d%3A0xd5513d51e1de1ac2!2sTotal%20-%20Areeb%20Areel%20Filling%20Station!5e1!3m2!1sen!2s!4v1781891608139!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full filter saturate-[0.8] contrast-[1.05] transition-all duration-500 group-hover:saturate-100"
                  />
                </div>
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] pointer-events-none z-30" />
              </div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-black blur-2xl z-0" />
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}