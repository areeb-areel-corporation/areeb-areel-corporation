'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import { 
  Building2, 
  Car, 
  UserCheck, 
  MoonStar, 
  ArrowUpDown, 
  Coffee, 
  Cctv, 
  Droplets, 
  PhoneCall,
  MapPin,
  Globe,
 
} from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';


// --- AMENITIES DATA ---
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

// --- GALLERY IMAGES (For Section 2) ---
const galleryImages: string[] = [
  '/images/sentosa-1.jpg',
  '/images/sentosa-2.jpg', 
  '/images/sentosa-3.jpg', 
  '/images/sentosa-4.jpg',
  '/images/sentosa-5.jpg', 
];

export default function SentosaSquarePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Mouse tracking for Amenity Card Borders
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // State for gallery slider & buttons
  const [activeGalleryImage, setActiveGalleryImage] = useState<number>(0);
  const [hoveredButton, setHoveredButton] = useState<'left' | 'right' | null>(null);

  // Gallery Auto-Slider Logic (Hero no longer needs this due to video)
  useEffect(() => {
    const galleryTimer = setInterval(() => {
      setActiveGalleryImage((prev) => (prev + 1) % galleryImages.length);
    }, 3500);
    return () => clearInterval(galleryTimer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slideInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37] selection:text-black overflow-hidden pb-20">
      
      {/* --- 1. CINEMATIC 3D VIDEO HERO SECTION --- */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[800px] flex items-center justify-center overflow-hidden py-24 md:py-32">
        
        {/* 3D Video Background */}
        <div className="absolute inset-0 z-0 bg-[#050505] overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline // Critical for iOS auto-play
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            {/* UPDATE THIS PATH TO YOUR ACTUAL VIDEO FILE */}
            <source src="/videos/sentosa-3d.mp4" type="video/mp4" />
          </video>
          
          {/* Gradient Overlays to make text pop */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/40 to-[#050505] z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto w-full flex flex-col items-center justify-center mt-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="flex flex-col items-center justify-center gap-4 mb-6"
          >
            <div className="w-[90px] h-[90px] md:w-[130px] md:h-[130px] relative mb-2">
              <Image 
                src="/images/Asset 1.png" 
                alt="Areeb Areel Corp Logo" 
                fill 
                priority
                className="object-contain filter drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]" 
              />
            </div>
            <div className="flex items-center gap-3 w-full justify-center">
              <div className="w-10 sm:w-16 h-[1px] bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.4em] text-center">
                A Project of Areeb Areel Corp.
              </span>
              <div className="w-10 sm:w-16 h-[1px] bg-[#D4AF37] hidden sm:block" />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.1 }} 
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1] mb-6 text-white drop-shadow-2xl"
          >
            SENTOSA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
              SQUARE.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-medium px-4 drop-shadow-md"
          >
            The Gateway to Tomorrow's Business Success. <br className="hidden md:block" />
            <span className="font-bold text-white">Built for Business. Designed for Growth.</span>
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
            <Link
              href="#amenities"
              onClick={() => scrollToSection("amenities")}
              onMouseEnter={() => setHoveredButton("left")}
              onMouseLeave={() => setHoveredButton(null)}
              className={`cursor-pointer w-full sm:w-auto relative overflow-hidden font-bold px-8 py-4 rounded-md tracking-wider uppercase transition-all duration-500 text-xs sm:text-sm backdrop-blur-sm flex items-center justify-center gap-2 border ${
                hoveredButton === "right"
                  ? "border-white/20 bg-white/5 shadow-none"
                  : "border-[#D4AF37] bg-transparent shadow-lg shadow-[#D4AF37]/20"
              }`}
            >
              <div
                className={`absolute inset-0 bg-[#D4AF37] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0 ${
                  hoveredButton === "right" ? "-translate-x-full" : "translate-x-0"
                }`}
              />
              <span
                className={`relative z-10 transition-colors duration-500 whitespace-nowrap ${
                  hoveredButton === "right" ? "text-white" : "text-black"
                }`}
              >
                Explore Amenities
              </span>
            </Link>

            <Link
              href="#contact"
              onClick={() => scrollToSection("contact")}
              onMouseEnter={() => setHoveredButton("right")}
              onMouseLeave={() => setHoveredButton(null)}
              className="cursor-pointer w-full sm:w-auto relative overflow-hidden group border border-white/20 bg-white/10 font-bold px-8 py-4 rounded-md tracking-wider uppercase transition-all duration-500 text-xs sm:text-sm backdrop-blur-md flex items-center justify-center"
            >
              <div
                className={`absolute inset-0 bg-[#D4AF37] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0 ${
                  hoveredButton === "right" ? "translate-x-0" : "-translate-x-full"
                }`}
              />
              <span
                className={`relative z-10 transition-colors duration-500 whitespace-nowrap ${
                  hoveredButton === "right" ? "text-black" : "text-white"
                }`}
              >
                Book Your Space
              </span>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* --- 2. VISION & ARCHITECTURE (Kept Gallery Slider Here) --- */}
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

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={slideInUp} className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] xl:h-[500px] xl:aspect-auto rounded-2xl overflow-hidden border border-white/10 bg-[#111] shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeGalleryImage} 
                  initial={{ opacity: 0, scale: 1.05 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0 }} 
                  transition={{ duration: 0.8 }} 
                  className="absolute inset-0"
                >
                  <Image 
                    src={galleryImages[activeGalleryImage]} 
                    alt="Sentosa Square Concept" 
                    fill 
                    className="object-cover" 
                  />
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {galleryImages.map((_, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setActiveGalleryImage(idx)}
                    className={`w-10 h-1.5 rounded-full transition-all duration-500 ${activeGalleryImage === idx ? 'bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.8)]' : 'bg-white/20 hover:bg-white/50'}`}
                    aria-label={`Go to slide ${idx + 1}`}
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

          <motion.div 
            ref={containerRef} 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-50px" }} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {amenities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx} 
                  variants={slideInUp}
                  ref={(el) => { cardsRef.current[idx] = el; }}
                  className="group relative rounded-2xl bg-white/5 p-[1px] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 cursor-default"
                >
                  {/* 1. THE BORDER GLOW (Spotlight Layer - Runs underneath) */}
                  <div 
                    className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 rounded-2xl"
                    style={{ background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(212, 175, 55, 1), transparent 40%)` }}
                  />

                  {/* 2. SOLID CONTENT MASK (Blocks the inner glow, only reveals the 1px border) */}
                  <div className="relative h-full w-full bg-[#111111] rounded-[15px] p-8 flex flex-col z-10 overflow-hidden">
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 group-hover:scale-110 shadow-lg group-hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                        <Icon className="w-7 h-7 text-zinc-400 transition-colors duration-500 group-hover:text-[#D4AF37]" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-500 group-hover:text-[#D4AF37]">
                        {item.title}
                      </h3>
                      <p className="text-zinc-500 text-sm leading-relaxed transition-colors duration-500 group-hover:text-zinc-300">
                        {item.desc}
                      </p>
                    </div>

                  </div>
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
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 p-10 md:p-16 lg:p-20 flex flex-col items-center text-center">
            
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white">
              Ready to Secure Your Space?
            </h2>
            <p className="text-zinc-400 text-lg mb-12 max-w-2xl">
              Prime commercial real estate moves fast. Contact our sales executives today to book your shop or corporate office at Sentosa Square before availability runs out.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
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

            <div className="mt-12 pt-8 border-t border-white/10 w-full max-w-3xl flex flex-col md:flex-row items-center justify-between gap-6">
              
              <div className="flex items-center gap-3">
                <Image src="/images/Asset 1.png" alt="Areeb Areel Corp Logo" width={30} height={30} className="object-contain opacity-50" />
                <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">A Project of Areeb Areel Corp.</span>
              </div>

              {/* BRANDED SOCIAL MEDIA LINKS */}
              <div className="flex items-center gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300" aria-label="Facebook">
                  <FaFacebook className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent transition-all duration-300" aria-label="Instagram">
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-all duration-300" aria-label="YouTube">
                  <FaYoutube className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300" aria-label="LinkedIn">
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
              </div>

              <a href="https://www.sentosasquare.pk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors font-bold tracking-wider text-sm md:text-base">
                <Globe className="w-5 h-5" /> www.sentosasquare.pk
              </a>

            </div>

          </div>
        </motion.div>
      </section>

    </main>
  );
}