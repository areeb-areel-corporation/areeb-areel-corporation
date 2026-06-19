'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Fuel, ShoppingBag, Coffee, ShieldCheck, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function PetrolStationPage() {
  // Animation presets for clean, staggered reveals
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#D4AF37] selection:text-black">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Hero Background Image (Replace with your best wide shot of the station) */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/petrol pump.png" // User your actual image path here
            alt="Areeb & Areel Flagship Station"
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
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">
              Flagship Transit Hub
            </span>
            <div className="w-8 h-[1px] bg-[#D4AF37]" />
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-6">
            AAA Standard <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
              Station & Smart Mart.
            </span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-brand-silver/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            More than a refuelling stop. A masterfully engineered transit oasis providing premium grade fuels and high-end retail convenience 24 hours a day.
          </motion.p>
        </motion.div>
      </section>

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
              <MapPin className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-brand-silver/50 font-bold mb-1">Location</p>
              <p className="font-medium text-white">Prime Transit Route, Lahore</p>
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
              <p className="font-medium text-white">Active Surveillance & Guards</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- THE SHOWCASE: ALTERNATING BLOCKS --- */}
      <section className="py-24 lg:py-40 max-w-[1600px] mx-auto px-6 overflow-hidden">
        
        {/* Feature 1: The Petrol Pump */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-32 lg:mb-48">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[#D4AF37] mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-10" />
            <Image 
              src="/images/petrol pump.png" // Replace with Petrol Pump Image
              alt="Premium Fuel Station"
              fill
              className="object-cover transition-transform duration-[1000ms] group-hover:scale-105"
            />
            {/* Architectural Border */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl z-20 pointer-events-none" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="w-14 h-14 rounded-xl bg-[#111] border border-[#D4AF37]/30 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <Fuel className="w-7 h-7 text-[#D4AF37]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              High-Performance <br/> Fuel Dispensing.
            </h2>
            <p className="text-brand-silver/70 text-lg leading-relaxed">
              Engineered for efficiency and safety. Our pumps deliver AAA-standard refined fuels using state-of-the-art metered dispensing technology. Designed to accommodate everything from luxury vehicles to heavy-duty logistics transit smoothly and securely.
            </p>
            <ul className="space-y-3 pt-4 border-t border-white/10">
              {['Premium High-Octane & Diesel', 'Digital Precision Metering', 'Spacious Canopy & Multi-lane Layout'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-brand-silver">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Feature 2: The Smart Mart (Reverse Layout) */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="w-14 h-14 rounded-xl bg-[#111] border border-[#D4AF37]/30 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <ShoppingBag className="w-7 h-7 text-[#D4AF37]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Express Smart Mart <br/> Integration.
            </h2>
            <p className="text-brand-silver/70 text-lg leading-relaxed">
              We transformed the standard pit-stop into a premium retail experience. The integrated Smart Mart offers a curated selection of top-tier commodities, fresh coffee, and travel essentials, providing unmatched convenience while you refuel.
            </p>
            <ul className="space-y-3 pt-4 border-t border-white/10">
              {['Fresh Artisan Coffee & Bakery', 'Curated Travel Essentials', 'Immaculate Washroom Facilities'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-brand-silver">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[#D4AF37] mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-10" />
            <Image 
              src="/images/mart.png" // Replace with Inside Mart Image
              alt="Express Smart Mart"
              fill
              className="object-cover transition-transform duration-[1000ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 border border-white/10 rounded-2xl z-20 pointer-events-none" />
          </motion.div>
        </div>

      </section>
{/* --- FLAGSHIP LOCATION SHOWCASE (REDESIGNED) --- */}
      <section className="relative w-full py-24 lg:py-32 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
        {/* Background glow specifically behind the map area */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[200px] rounded-full pointer-events-none" />

        <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

            {/* --- LEFT COLUMN: Typography & Information --- */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-5/12 space-y-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-[1px] bg-[#D4AF37]" />
                  <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">
                    Strategic Anchor
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6">
                  Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">Location.</span>
                </h2>
                <p className="text-brand-silver/70 text-lg leading-relaxed">
                  Situated on a prime transit artery. Our premier facility is fully operational 24/7, offering high-grade fueling and premium retail access without compromise.
                </p>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-2 gap-6 py-6 border-y border-white/10">
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand-silver/50 font-bold mb-2">Coordinates</p>
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
                    <p className="font-medium text-white text-sm">Active / 24 Hours</p>
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
              {/* Architectural Frame around the map */}
              <div className="relative w-full aspect-square md:aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-[#111] shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">

                {/* Top Bar for a realistic "Digital Terminal" look */}
                <div className="absolute top-0 left-0 w-full h-10 bg-[#111] border-b border-white/10 flex items-center px-4 gap-2 z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]/60" />
                  <span className="ml-4 text-[10px] text-brand-silver/40 font-mono tracking-widest uppercase">
                    GPS Satellite Link
                  </span>
                </div>

                {/* The Google Map - Perfectly visible, just slightly desaturated to fit the dark theme */}
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

                {/* Subtle vignette shadow to blend the edges */}
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] pointer-events-none z-30" />
              </div>
              
              {/* Decorative base shadow beneath the 3D frame */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-black blur-2xl z-0" />
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}