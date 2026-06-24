'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Car, 
  UserCheck, 
  MoonStar, // For Prayer Area
  ArrowUpDown, // For Hydraulic Lifts
  Coffee, // For Rooftop Food Court
  Cctv, // For Security
  Droplets, // For Washrooms
  PhoneCall,
  MapPin,
  Globe
} from 'lucide-react';

// --- AMENITIES DATA (Extracted from your promotional designs) ---
const amenities = [
  { icon: Building2, title: 'Secure Business Zone', desc: 'A dedicated, professional environment built for corporate growth.' },
  { icon: Car, title: 'Spacious Parking', desc: 'Ample, hassle-free parking space for business owners and clients.' },
  { icon: UserCheck, title: 'Dynamic Reception', desc: 'A grand, welcoming reception area that leaves a lasting first impression.' },
  { icon: MoonStar, title: 'Prayer Area', desc: 'A peaceful, designated space for daily prayers and reflection.' },
  { icon: ArrowUpDown, title: 'Hydraulic Capsule Lifts', desc: 'State-of-the-art vertical transit offering panoramic views.' },
  { icon: Coffee, title: 'Rooftop Food Court', desc: 'Premium dining and cafes right at the top of your workspace.' },
  { icon: Cctv, title: '24/7 Security & Surveillance', desc: 'Round-the-clock monitoring to ensure absolute safety for your assets.' },
  { icon: Droplets, title: 'Public Washrooms', desc: 'Highly maintained, hygienic, and accessible restroom facilities.' },
];

// --- GALLERY IMAGES ---
// NOTE: Rename your uploaded files to these names and put them in the /public/images/ folder
const galleryImages = [
  '/images/sentosa-1.jpg', // The day view
  '/images/sentosa-2.jpg', // The blueprint view
  '/images/sentosa-3.jpg', // The evening view
  '/images/sentosa-4.jpg', // The door opening view
];

export default function SentosaSquarePage() {
  const [activeImage, setActiveImage] = useState(0);

  // --- ANIMATION VARIANTS ---
  const slideInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37] selection:text-black overflow-hidden pb-20">
      
      {/* --- 1. CINEMATIC HERO SECTION --- */}
      <section className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center border-b border-white/5">
        
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/sentosa-5.jpg" // Main hero image
            alt="Sentosa Square Facade"
            fill
            priority
            className="object-cover filter brightness-[0.4] contrast-125 hover:scale-105 transition-transform duration-[2000ms] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10" />
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto mt-20">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="flex flex-col items-center justify-center gap-4 mb-8">
            <div className="w-16 h-[1px] bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs md:text-sm font-bold uppercase tracking-[0.4em]">
              A Project of Areeb Areel Corp.
            </span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-6 text-white drop-shadow-2xl">
            SENTOSA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F1E5AC] to-[#D4AF37]">
              SQUARE.
            </span>
          </motion.h1>
          
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="text-zinc-300 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto mb-10 font-light tracking-wide">
            The Gateway to Tomorrow's Business Success. <br className="hidden md:block" />
            <span className="font-bold text-white">Built for Business. Designed for Growth.</span>
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#contact" className="px-8 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-sm rounded-md hover:bg-white transition-colors duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              Book Your Shop Now
            </a>
            <a href="#amenities" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-md hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-300">
              Explore Amenities
            </a>
          </motion.div>
        </div>
      </section>

      {/* --- 2. VISION & ARCHITECTURE --- */}
      <section className="py-24 lg:py-32 max-w-[1600px] mx-auto px-6 md:px-10 relative">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none z-0" />
        
        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={slideInUp} className="w-full lg:w-1/2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[1px] bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">Invest In Your Future</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1]">
              Build Your Business <br/> Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">Growth Begins.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Sentosa Square is not just a commercial building; it is a meticulously engineered ecosystem designed to elevate your brand. Strategically located at the heart of Lahore’s commercial transit routes, we offer unparalleled visibility and foot traffic for retail shops and corporate offices.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Experience a blend of modern aesthetics, structural brilliance, and executive-tier facilities that set the standard for modern commerce in Pakistan.
            </p>
          </motion.div>

          {/* Interactive Blueprint/Image Toggle */}
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={slideInUp} className="w-full lg:w-1/2">
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-[#111] group">
              <AnimatePresence mode="wait">
                <motion.div key={activeImage} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} className="absolute inset-0">
                  <Image src={galleryImages[activeImage]} alt="Sentosa Square Concept" fill className="object-cover" />
                </motion.div>
              </AnimatePresence>
              
              {/* Image Controls */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {galleryImages.map((_, idx) => (
                  <button 
                    key={idx} onClick={() => setActiveImage(idx)}
                    className={`w-12 h-1.5 rounded-full transition-all duration-500 ${activeImage === idx ? 'bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.8)]' : 'bg-white/20 hover:bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. ELEVATED AMENITIES GRID --- */}
      <section id="amenities" className="py-24 lg:py-32 bg-[#080808] border-y border-white/5 relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={slideInUp} className="text-center mb-16 lg:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6">
              Elevated Amenities for <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">Elevated Businesses.</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Every square foot of Sentosa Square is optimized for your operational success and your clients' ultimate comfort.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx} 
                  variants={slideInUp}
                  className="group relative bg-[#111111]/60 border border-white/5 rounded-2xl p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:bg-[#151515] hover:border-[#D4AF37] hover:shadow-[0_20px_50px_-15px_rgba(212,175,55,0.15)] flex flex-col"
                >
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 group-hover:scale-110">
                    <Icon className="w-7 h-7 text-zinc-400 transition-colors duration-500 group-hover:text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-500 group-hover:text-[#D4AF37]">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed transition-colors duration-500 group-hover:text-zinc-300">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* --- 4. BOOKING & CONTACT BANNER --- */}
      <section id="contact" className="pt-24 lg:pt-32 max-w-[1200px] mx-auto px-6">
        <motion.div 
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={slideInUp}
          className="relative rounded-[30px] overflow-hidden border border-[#D4AF37]/30 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] shadow-[0_30px_60px_-15px_rgba(212,175,55,0.2)]"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 p-10 md:p-16 lg:p-20 flex flex-col items-center text-center">
            
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white">
              Ready to Secure Your Space?
            </h2>
            <p className="text-zinc-400 text-lg mb-12 max-w-2xl">
              Prime commercial real estate moves fast. Contact our sales executives today to book your shop or corporate office at Sentosa Square before availability runs out.
            </p>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
              
              {/* Phone Contacts */}
              <div className="bg-[#050505]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 group hover:border-[#D4AF37] transition-all duration-300">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <PhoneCall className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-sm font-bold uppercase tracking-widest text-[#D4AF37]">Book Your Shop Now</span>
                </div>
                <div className="space-y-2">
                  <a href="tel:03003003003" className="block text-2xl md:text-3xl font-black text-white hover:text-[#D4AF37] transition-colors">0300 3003003</a>
                  <a href="tel:03001300300" className="block text-2xl md:text-3xl font-black text-white hover:text-[#D4AF37] transition-colors">0300 1300300</a>
                </div>
              </div>

              {/* Physical Location */}
              <div className="bg-[#050505]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 group hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-sm font-bold uppercase tracking-widest text-[#D4AF37]">Project Address</span>
                </div>
                <p className="text-base font-medium text-white group-hover:text-[#D4AF37] transition-colors leading-relaxed">
                  13-KM Multan Rd, N-5 Amarkot,<br />
                  54000, Thokar Niaz Baig,<br />
                  Lahore, Pakistan
                </p>
              </div>

            </div>

            {/* Website Link */}
            <div className="mt-12 pt-8 border-t border-white/10 w-full max-w-3xl flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Image src="/images/Asset 1.png" alt="Areeb Areel Corp Logo" width={30} height={30} className="object-contain opacity-50" />
                <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">A Project of Areeb Areel Corp.</span>
              </div>
              <a href="https://www.sentosasquare.pk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors font-bold tracking-wider">
                <Globe className="w-5 h-5" /> www.sentosasquare.pk
              </a>
            </div>

          </div>
        </motion.div>
      </section>

    </main>
  );
}