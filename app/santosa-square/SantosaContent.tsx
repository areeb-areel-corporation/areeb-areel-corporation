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
  CheckCircle2,
  Cctv, 
  Droplets, 
  PhoneCall,
  MapPin,
  Globe,
 
} from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

// --- AMENITIES DATA ---
const amenities = [
  { icon: Building2, title: 'Professional Business Environment', desc: 'A dedicated commercial setting designed for retail, office and service-based operations.' },
  { icon: Car, title: 'Planned Parking', desc: 'Accessible parking provisions for business owners, employees, customers and visitors.' },
  { icon: UserCheck, title: 'Welcoming Reception', desc: 'A professionally designed arrival area that helps businesses create a stronger first impression.' },
  { icon: MoonStar, title: 'Prayer Area', desc: 'A peaceful, designated space for daily prayers and reflection.' },
  { icon: ArrowUpDown, title: 'Modern Elevator Access', desc: 'Convenient vertical movement between commercial floors. Use hydraulic capsule lifts only when confirmed in final technical specifications.' },
  { icon: Coffee, title: 'Rooftop Food & Leisure Area', desc: 'A planned rooftop environment for food, refreshments and customer interaction, subject to final project specifications.' },
  { icon: Cctv, title: 'Security & Surveillance', desc: 'Monitoring and access provisions intended to support safer commercial operations.' },
  { icon: Droplets, title: 'Maintained Public Facilities', desc: 'Accessible shared washrooms planned for regular maintenance and customer convenience.' },
];

// --- GALLERY IMAGES (For Section 2) ---
const galleryImages: string[] = [
  '/images/Plaza 2.png',
  '/images/Plaza 3.png',
  '/images/Plaza 8.png',

];
const galleryImages1: string[] = [
 '/images/Plaza 1.png',
  '/images/Plaza 2.png',
  '/images/Plaza 3.png',
  

];

// --- VIDEO CLIP CONFIG ---
// Only the first CLIP_END_SECONDS of the source video should ever play.
// When playback reaches this point, we jump back to 0 and keep playing —
// so it behaves like a seamless short loop instead of the full-length video.
const CLIP_END_SECONDS = 22;

export default function SentosaSquarePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Refs for BOTH video instances (hero background + lower showcase section)
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const featureVideoRef = useRef<HTMLVideoElement>(null);

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

  // --- ENFORCE 22-SECOND CLIP LOOP ONLY FOR THE HERO BACKGROUND VIDEO ---
  useEffect(() => {
    const heroVideo = heroVideoRef.current;
    if (!heroVideo) return;

    const handleTimeUpdate = () => {
      if (heroVideo.currentTime >= CLIP_END_SECONDS) {
        heroVideo.currentTime = 0;
        heroVideo.play().catch(() => {});
      }
    };

    const handleLoadedMetadata = () => {
      if (heroVideo.currentTime >= CLIP_END_SECONDS) {
        heroVideo.currentTime = 0;
      }
    };

    heroVideo.addEventListener('timeupdate', handleTimeUpdate);
    heroVideo.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      heroVideo.removeEventListener('timeupdate', handleTimeUpdate);
      heroVideo.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  // State for gallery slider & buttons
  const [activeGalleryImage, setActiveGalleryImage] = useState<number>(0);
   const [activeGalleryImage1, setActiveGalleryImage1] = useState<number>(0);
  const [hoveredButton, setHoveredButton] = useState<'left' | 'right' | null>(null);

  // Gallery Auto-Slider Logic (Hero no longer needs this due to video)
  useEffect(() => {
    const galleryTimer = setInterval(() => {
      setActiveGalleryImage((prev) => (prev + 1) % galleryImages.length);
    }, 3500);
    return () => clearInterval(galleryTimer);
  }, []);
  useEffect(() => {
    const galleryTimer = setInterval(() => {
      setActiveGalleryImage1((prev) => (prev + 1) % galleryImages1.length);
    }, 3500);
    return () => clearInterval(galleryTimer);
  }, []);

  const slideInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const slideInLeft = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };
const MiniSlider = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group border border-white/5 shadow-2xl bg-[#111]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt="Facility Preview"
            fill
            className="object-cover filter grayscale-[30%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            // Fallback placeholder logic for missing images during dev
            onError={(e) => {
              e.currentTarget.src = "/images/Plaza 2.png"; // Fallback image
            }}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-[#D4AF37]/50 transition-colors duration-500 pointer-events-none" />
    </div>
  );
};
const sectionData = {
  fillingStation: [
  '/images/Plaza 2.png',
  '/images/Plaza 3.png',
  '/images/Plaza 8.png',
  ],
};


  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };
;
const features = [
    {
      id: "01",
      title: "Street presence",
      description: "A clear frontage designed to showcase a business to passing visitors."
    },
    {
      id: "02",
      title: "Customer arrival",
      description: "A legible entry and retail presentation concept."
    },
    {
      id: "03",
      title: "Adaptable setting",
      description: "Illustrative fit-out appropriate to fashion, lifestyle or convenience retail."
    }
  ];
  const features1 = [
    {
      id: "01",
      title: "Upper perspective",
      description: "A mezzanine overlooking the main retail level in this illustrative arrangement."
    },
    {
      id: "02",
      title: "Connected circulation",
      description: "An internal staircase is shown as one possible access approach."
    },
    {
      id: "03",
      title: "Flexible occupancy",
      description: "Optional office, display or support use subject to final approvals."
    }
  ];
    const features2 = [
    {
      id: "01",
      title: "Elevated frontage",
      description: "A premium glazed upper-level visual character."
    },
    {
      id: "02",
      title: "Business versatility",
      description: "A conceptual showroom, professional or lifestyle arrangement."
    },
    {
      id: "03",
      title: "Independent planning",
      description: "Final access, circulation and separability remain to be verified."
    }
  ];
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37] selection:text-black overflow-hidden pb-20">
      
   

  <section className="relative w-full h-[85vh] min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-[#050505]">
          <Image
            src="/images/Plaza 2.png"
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
                Areeb Areel Corporation
              </span>
            </motion.div>

            <motion.h1 variants={slideInLeft as any} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] mb-6 drop-shadow-2xl">
              Sentosa  <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
               Business Hub.
              </span>
            </motion.h1>

            <motion.p variants={slideInLeft as any} className="text-brand-silver/80 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl mb-8">
              Strategically positioned commercial plots with a design language built for contemporary businesses.
            </motion.p>
            
            <motion.div variants={slideInLeft as any} className="flex items-center gap-4 text-[#D4AF37] text-sm md:text-base font-bold uppercase tracking-widest">
              <span>MULTAN ROAD</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
              <span> THOKAR NIAZ BAIG </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
              <span>LAHORE</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 space-y-32 lg:space-y-48 mt-24">

         <section id="station" className="scroll-mt-32">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={slideInLeft as any}
                    className="w-full lg:w-1/2"
                  >
                    <MiniSlider images={sectionData.fillingStation} />
                  </motion.div>
      
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={slideInRight as any}
                    className="w-full lg:w-1/2 space-y-6"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-[1px] bg-[#D4AF37]" />
                      <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">
                        Core Service
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                      A considered place  <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
                        for commerce.
                      </span>
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                      Sentosa Business Hub is presented as a commercial destination with a defined master layout, a road-connected setting and adaptable retail opportunities.
                    </p>
      
                   <ul className="space-y-4 pt-6">
                      {[
                        "27 NUMBERED COMMERCIAL PLOTS with flexible layouts and sizes for retail, office and service-based businesses.",
                        "15 FT ROADS MARKED ON MASTER PLAN for easy access and circulation within the commercial hub.",
                        "3 Proposed Level Concepts for retail, office and service-based businesses, subject to final project specifications.",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-4 group p-4 rounded-xl border border-white/5 bg-[#111] hover:border-[#D4AF37] hover:bg-[#1a1a1a] transition-all duration-500"
                        >
                          <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] transition-colors duration-500">
                            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] group-hover:text-black transition-colors" />
                          </div>
                          <span className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </section>
              
              </div>

<section className="py-24 lg:py-32 max-w-[1600px] mx-auto px-6 md:px-10 relative">
  <motion.div 
    initial="hidden" 
    whileInView="show" 
    viewport={{ once: true, margin: "-100px" }} 
    variants={slideInUp} 
    className="w-full"
  >
    {/* Yahan grid layout laga diya hai taake aik line mein 3 images aayen */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {galleryImages1.map((imgSrc, idx) => (
        <div 
          key={idx}
          className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-[#111] shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
        >
          <div className="relative w-full h-auto">
            <Image 
              src={imgSrc} 
              alt={`Sentosa Business Hub Concept ${idx + 1}`} 
              width={800} 
              height={600} 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
</section>


      {/* Map  */}
      <section className="py-16 md:py-24 max-w-[1600px] mx-auto px-6 md:px-10 bg-[#fbf9f4]  text-[#111] font-sans rounded-3xl border border-white/5">
      <motion.div 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={slideInUp}
        className="w-full space-y-8"
      >
        {/* Top Header Bar */}

        {/* Section Title Heading */}
        <div className="space-y-2 pt-2">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-[#c5a25d] uppercase">
            02 / APPROVED REFERENCE
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-slate-900">
            One master plan. Twenty-seven plots.
          </h2>
        </div>

        {/* Main Grid Layout: Left Map Card & Right Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Master Plan Map Card with White Background & Rounded Corners */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-[24px] border border-slate-200/60 shadow-sm">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-50">
              <Image
                src="/images/map.png" 
                alt="Sentosa Business Hub Master Plan"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Side: Information Content */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Master Layout Reference Text */}
            <div className="space-y-3">
              <h3 className="text-xs md:text-sm font-semibold tracking-widest text-[#c5a25d] uppercase">
                MASTER LAYOUT REFERENCE
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-light">
                Use the dated 09 October 2026 master layout as the governing reference for site organisation, plot numbers, road annotations and main-gate approach.
              </p>
            </div>

            <hr className="border-slate-200" />

            {/* Numbered Plots Block */}
            <div className="flex items-baseline gap-6">
              <span className="text-6xl md:text-7xl  font-medium ">
                27
              </span>
              <div className="space-y-1">
                <h4 className="text-base font-semibold text-slate-900">Numbered plots</h4>
                <p className="text-sm text-slate-600 font-light">
                  Plots 01 through 27 appear on the supplied diagram.
                </p>
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Color Groups Section */}
            <div className="space-y-4">
              <h3 className="text-xs md:text-sm font-semibold tracking-widest text-[#c5a25d] uppercase">
                COLOR GROUPS AS SHOWN
              </h3>
              
              {/* Color Badges Grid */}
              <div className="grid grid-cols-3 gap-4 pt-1">
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-[4px] bg-[#e6cb32] inline-block shadow-sm"></span>
                  <span className="text-sm font-medium text-slate-800">01-05</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-[4px] bg-[#1b8a4f] inline-block shadow-sm"></span>
                  <span className="text-sm font-medium text-slate-800">06-16</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-[4px] bg-[#b3955e] inline-block shadow-sm"></span>
                  <span className="text-sm font-medium text-slate-800">17-27</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed font-light pt-1">
                The colors identify visual groups in the plan; they do not establish availability, zoning or pricing categories.
              </p>
            </div>


          </div>
        </div>

      </motion.div>
    </section>
      {/* --- 3. VISION & ARCHITECTURE (Gallery moved below) --- */}
      <section className="py-24 lg:py-32 max-w-[1600px] mx-auto px-6 md:px-10 relative">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none z-0" />
        
        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={slideInUp} className="w-full lg:w-1/2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[1px] bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">Invest In Your Future</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1]">
             A NEW COMMERCIAL  <br/> COMMERCIAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">PERSPECTIVE.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
             Sentosa Business Hub is a contemporary commercial development created for retailers, service providers, professionals and growing businesses.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Located on Multan Road near Thokar Niaz Baig, Lahore, the project combines commercial visibility, practical access and professionally planned facilities. Whether you are opening a customer-facing shop or establishing an office, Sentosa Business Hub offers an address designed to support your business presence.
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
                    alt="Sentosa Business Hub Concept" 
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
{/* payments section  */}
     <section className="py-16 md:py-24 max-w-[1600px] mx-auto px-6 md:px-10 bg-[#fbf9f4] text-[#111]  rounded-3xl border border-white/5">
      <motion.div 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={slideInUp}
        className="w-full space-y-12"
      >
        {/* Header Section */}
        <div className="space-y-2">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-[#c5a25d] uppercase">
          COMMERCIAL OFFERING
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-slate-900">
            Simple numbers. Clear conditions.
          </h2>
        </div>

        {/* Dark Stats Card Grid */}
        <div className="bg-[#0b1926] text-white rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 shadow-xl border border-white/5">
          {/* Item 1 */}
          <div className="flex flex-col justify-between space-y-4 md:pr-8 md:border-r md:border-slate-800">
            <p className="text-xs font-semibold tracking-wider text-[#c5a25d] uppercase">
              PER MARLA
            </p>
            <h3 className="text-3xl lg:text-4xl font-serif tracking-tight text-white">
              PKR 2 CRORE
            </h3>
            <p className="text-sm text-slate-400 font-light">
              Advertised base selling rate
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col justify-between space-y-4 md:px-8 md:border-r md:border-slate-800">
            <p className="text-xs font-semibold tracking-wider text-[#c5a25d] uppercase">
              DOWN PAYMENT
            </p>
            <h3 className="text-3xl lg:text-4xl font-serif tracking-tight text-white">
              50%
            </h3>
            <p className="text-sm text-slate-400 font-light">
              As shown in payment creative
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col justify-between space-y-4 md:pl-8">
            <p className="text-xs font-semibold tracking-wider text-[#c5a25d] uppercase">
              PAYMENT PLAN
            </p>
            <h3 className="text-3xl lg:text-4xl font-serif tracking-tight text-white">
              1 YEAR
            </h3>
            <p className="text-sm text-slate-400 font-light">
              Schedule to be supplied
            </p>
          </div>
        </div>

        {/* Additional Source Details Section */}
        <div className="space-y-6 pt-4">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-[#c5a25d] uppercase">
            ADDITIONAL SOURCE DETAILS
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* White Card 1 - Added rounded-[20px] */}
            <div className="bg-white p-8 rounded-[20px] border border-slate-100 shadow-sm text-slate-700 leading-relaxed text-sm md:text-base">
              225 sq. ft. per marla appears on the payment poster. The proposal offers 1, 2 and 5 marla units; the poster also lists 4 marla. Publish a consistent size list only after developer approval.
            </div>

            {/* White Card 2 - Added rounded-[20px] */}
            <div className="bg-white p-8 rounded-[20px] border border-slate-100 shadow-sm text-slate-700 leading-relaxed text-sm md:text-base">
              Commercial due diligence: Unit-wise dimensions, booking amount, balance schedule, possession date, taxes, transfer charges and applicable approvals must be obtained from the developer before placing fixed details online.
            </div>
          </div>
        </div>
      </motion.div>
    </section>
{/* --- 4. Ground floor --- */}
<section className="py-16 md:py-24 max-w-[1600px] mx-auto px-6 md:px-10  text-white font-sans">
      <motion.div 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={slideInUp}
        className="w-full space-y-8"
      >
        {/* Top Header Bar */}

        {/* Section Heading */}
        <div className="space-y-2 pt-2">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-[#c5a25d] uppercase">
           LEVEL CONCEPT 01
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight">
            Ground floor <span className="font-light text-slate-400">/</span> storefront
          </h2>
        </div>

        {/* Hero Concept Image Box */}
        <div className="rounded-xl overflow-hidden border border-white/10 ">
          <div className="relative w-full h-[320px] sm:h-[450px] md:h-[550px] lg:h-[600px]">
            <Image
              src="/images/Plazaground.png" // آپ اپنی امیج کا پاتھ یہاں تبدیل کر سکتے ہیں
              alt="Ground Floor Storefront Concept"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Sub-caption Bar */}
          <div className=" px-6 py-3 text-xs md:text-sm font-semibold tracking-wider text-[#c5a25d] uppercase">
            GROUND FLOOR / STREET-LEVEL COMMERCIAL CONCEPT
          </div>
        </div>

        {/* 3 Grid Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {features.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#0c1e2d] p-6 md:p-8 rounded-[20px] border border-white/5 shadow-md space-y-4"
            >
              <span className="text-sm font-semibold text-[#c5a25d] block">
                {item.id}
              </span>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
{/* --- 4. Mezzanine  floor --- */}
<section className="py-16 md:py-24 max-w-[1600px] mx-auto px-6 md:px-10  text-white font-sans">
      <motion.div 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={slideInUp}
        className="w-full space-y-8"
      >
        {/* Top Header Bar */}

        {/* Section Heading */}
        <div className="space-y-2 pt-2">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-[#c5a25d] uppercase">
           LEVEL CONCEPT 02
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight">
            Mezzanine /  <span className="font-light text-slate-400">/</span> additional utility
          </h2>
        </div>

        {/* Hero Concept Image Box */}
        <div className="rounded-xl overflow-hidden border border-white/10 ">
          <div className="relative w-full h-[320px] sm:h-[450px] md:h-[550px] lg:h-[600px]">
            <Image
              src="/images/Mezzanineplaza.png" // آپ اپنی امیج کا پاتھ یہاں تبدیل کر سکتے ہیں
              alt="Ground Floor Storefront Concept"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Sub-caption Bar */}
          <div className=" px-6 py-3 text-xs md:text-sm font-semibold tracking-wider text-[#c5a25d] uppercase">
            MEZZANINE  /  CONCEPTUAL DOUBLE-HEIGHT RETAIL VIEW
          </div>
        </div>

        {/* 3 Grid Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {features1.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#0c1e2d] p-6 md:p-8 rounded-[20px] border border-white/5 shadow-md space-y-4"
            >
              <span className="text-sm font-semibold text-[#c5a25d] block">
                {item.id}
              </span>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
    {/* --- 4. First  floor --- */}
<section className="py-16 md:py-24 max-w-[1600px] mx-auto px-6 md:px-10  text-white font-sans">
      <motion.div 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={slideInUp}
        className="w-full space-y-8"
      >
        {/* Top Header Bar */}

        {/* Section Heading */}
        <div className="space-y-2 pt-2">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-[#c5a25d] uppercase">
           LEVEL CONCEPT 03
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight">
           First floor /   <span className="font-light text-slate-400">/</span> Commercial Potential
          </h2>
        </div>

        {/* Hero Concept Image Box */}
        <div className="rounded-xl overflow-hidden border border-white/10 ">
          <div className="relative w-full h-[320px] sm:h-[450px] md:h-[550px] lg:h-[600px]">
            <Image
              src="/images/firstplaza.png" // آپ اپنی امیج کا پاتھ یہاں تبدیل کر سکتے ہیں
              alt="Ground Floor Storefront Concept"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Sub-caption Bar */}
          <div className=" px-6 py-3 text-xs md:text-sm font-semibold tracking-wider text-[#c5a25d] uppercase">
            FIRST FLOOR  /  PREMIUM UPPER-LEVEL INTERIOR CONCEPT
          </div>
        </div>

        {/* 3 Grid Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {features2.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#0c1e2d] p-6 md:p-8 rounded-[20px] border border-white/5 shadow-md space-y-4"
            >
              <span className="text-sm font-semibold text-[#c5a25d] block">
                {item.id}
              </span>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
      {/* --- 4. ELEVATED AMENITIES GRID --- */}
      
      <section id="amenities" className="py-24 lg:py-32 bg-[#080808] border-y border-white/5 relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={slideInUp} className="text-center mb-16 lg:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6">
              Amenities for <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">Better Business Experiences.</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Every shared facility is planned to improve access, convenience and the daily experience of business owners, employees and visitors.
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
      {/* --- 5. BOOKING & CONTACT BANNER --- */}
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
              Contact the authorised sales team for current shop and office availability, unit dimensions, floor plans, pricing and payment information. All commercial terms should be confirmed through the latest signed and dated project documentation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
              <div className="bg-[#050505]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 group hover:border-[#D4AF37] transition-all duration-300">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <PhoneCall className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-sm font-bold uppercase tracking-widest text-[#D4AF37]">Book Your Shop or Office</span>
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
                  13-KM Multan Road, N-5 Amarkot<br />
                  Near Thokar Niaz Baig<br />
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
                <a href="https://www.facebook.com/sentosasquareofficial/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all duration-300" aria-label="Facebook">
                  <FaFacebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/sentosasquare" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent transition-all duration-300" aria-label="Instagram">
                  <FaInstagram className="w-4 h-4" />
                </a>
              </div>

              <a href="https://www.areebareel.pk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors font-bold tracking-wider text-sm md:text-base">
                <Globe className="w-5 h-5" /> www.areebareel.pk
              </a>

            </div>

          </div>
        </motion.div>
      </section>

    </main>
  );
}

