"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Fuel,
  ShoppingBag,
  Wrench,
  Coffee,
  CheckCircle2,
  TrendingDown,
  Navigation,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

// --- DATA ARRAYS ---
// 5 Images for the Hero Slider
const heroImages = [
  "/images/filling-station.jpg",
  "/images/filling-station1.jpg",
  "/images/mart.jpg",
  "/images/mart1.jpg",
  "/images/tyre-shop.jpg",
];

// 5 Images for each Section Slider
const sectionData = {
  fillingStation: [
    "/images/filling-station.jpg",
    "/images/filling-station1.jpg",
    "/images/filling-station2.jpg",
    "/images/fillingstation3.jpg",
    "/images/filling-station5.jpeg",
  ],
  mart: [
    "/images/mart.jpg",
    "/images/mart1.jpeg",
    "/images/mart2.jpeg",
   
  ],
  subway: [
    "/images/subway.jpeg",
    "/images/subway-2.jpeg",
  ],
  tyre: [
    "/images/tyre-shop.jpg",
    "/images/tyre-shop-1.jpeg",
    "/images/tyre-shop-2.jpeg",
    "/images/tyre-shop-3.jpeg",
  ],
};

const navLinks = [
  { id: "station", name: "Filling Station", icon: Fuel },
  { id: "mart", name: "Express Mart", icon: ShoppingBag },
  { id: "subway", name: "Food & Refreshments", icon: Coffee },
  { id: "tyres", name: "Tyre & Service", icon: Wrench },
  { id: "location", name: "Location", icon: Navigation },
];

// --- REUSABLE MINI SLIDER COMPONENT ---
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
              e.currentTarget.src = "/images/petrol pump.png";
            }}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-[#D4AF37]/50 transition-colors duration-500 pointer-events-none" />
    </div>
  );
};

export default function FillingStationPage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [currentDate, setCurrentDate] = useState("");

  // 1. Hero Auto-Slider Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // 2. Fetch Client-Side Date for Fuel Prices
  useEffect(() => {
    const dateOptions: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setCurrentDate(new Date().toLocaleDateString("en-US", dateOptions));
  }, []);

  // Smooth Scroll Function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37] selection:text-black overflow-clip pb-20">
      {/* --- FLOATING RIGHT NAVIGATION (Elevator Menu) --- */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4">
        {navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="group flex items-center justify-end gap-4"
            >
              <span className="opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] bg-black/80 px-3 py-1.5 rounded-md backdrop-blur-md border border-[#D4AF37]/30">
                {link.name}
              </span>
              <div className="w-12 h-12 rounded-full bg-[#111]/80 backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 group-hover:scale-110 shadow-xl">
                <Icon className="w-5 h-5 text-zinc-400 group-hover:text-[#D4AF37] transition-colors" />
              </div>
            </button>
          );
        })}
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Dynamic Auto-Slider Background */}
        <div className="absolute inset-0 z-0 bg-[#050505]">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[heroIndex]}
                alt="Areeb Areel Facility"
                fill
                priority
                className="object-cover opacity-50 grayscale transition-all duration-[2000ms]"
                onError={(e) => {
                  e.currentTarget.src = "/images/petrol pump.png";
                }} // Fallback
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/40 to-[#050505] z-10" />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-22 h-22 md:w-35 md:h-35 relative">
              <Image
                src="/images/Asset 1.png"
                alt="Areeb & Areel Badge"
                fill
                priority
                className="object-contain filter drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              />
            </div>
          </motion.div>

          {/* Reduced Text Size for Hero Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-6"
          >
            Areeb Areel <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
              Hub Station.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-silver/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-medium"
          >
            A convenient travel destination combining fuel, retail, food, prayer facilities and essential vehicle support in one customer-focused location. Designed for local commuters, families and professional drivers, the station helps customers refuel, refresh and continue their journey with greater convenience.
          </motion.p>
        </div>
      </section>

      {/* Main Content Wrapper - Standardized to max-w-[1600px] px-6 md:px-10 to match Location section */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 space-y-32 lg:space-y-48 mt-24">
        {/* --- 1. FILLING STATION & PRICES --- */}
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
                Fuel Service & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
                  Precision.
                </span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Our fuel operations are focused on calibrated dispensing, responsible handling, efficient service and a cleaner customer experience. Fuel quality and quantity claims should be supported by operational controls, inspection records and applicable regulatory standards.
              </p>

              {/* Live Price Board Card */}
              <div className="mt-8 bg-[#111111]/80 border border-white/5 p-6 rounded-2xl group hover:border-[#D4AF37] hover:bg-[#111111] transition-all duration-500 hover:shadow-[0_15px_40px_rgba(212,175,55,0.1)]">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5 group-hover:border-[#D4AF37]/30 transition-colors">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors">
                    Current Fuel Rates
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1.5 rounded-md">
                    Last Updated: {currentDate || "Loading..."  }
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-4 group-hover:border-[#D4AF37]/40 transition-colors">
                    <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1 group-hover:text-[#D4AF37] transition-colors">
                      Premier / Petrol
                    </p>
                    <p className="text-2xl font-black text-white group-hover:text-[#D4AF37] transition-colors">
                      Rs. 297.53
                      <span className="text-xs font-normal text-zinc-500">
                        / Ltr
                      </span>
                    </p>
                    <div className="flex items-center gap-1 text-green-500 mt-2 text-[10px] font-bold uppercase">
                      <TrendingDown className="w-3 h-3" /> Last Updated: {currentDate || "Loading..."}
                    </div>
                  </div>
                  <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-4 group-hover:border-[#D4AF37]/40 transition-colors">
                    <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1 group-hover:text-[#D4AF37] transition-colors">
                      High Speed Diesel
                    </p>
                    <p className="text-2xl font-black text-white group-hover:text-[#D4AF37] transition-colors">
                      Rs.  309.50
                      <span className="text-xs font-normal text-zinc-500">
                        / Ltr
                      </span>
                    </p>
                    <div className="flex items-center gap-1 text-green-500 mt-2 text-[10px] font-bold uppercase">
                      <TrendingDown className="w-3 h-3" /> Last Updated: {currentDate || "Loading..."}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- 2. EXPRESS MART --- */}
        <section id="mart" className="scroll-mt-32">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft as any}
              className="w-full lg:w-1/2 space-y-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-[1px] bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">
                  Retail
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Express <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
                  Smart Mart.
                </span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Access snacks, cold beverages and everyday travel essentials without making an additional stop. The air-conditioned mart is designed to serve customers throughout station operating hours with quick, convenient retail service.
              </p>

              <ul className="space-y-4 pt-6">
                {[
                  "Snacks, beverages and travel essentials",
                  "Maintained customer washroom facilities",
                  "Convenient access to the prayer area",
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

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight as any}
              className="w-full lg:w-1/2"
            >
              <MiniSlider images={sectionData.mart} />
            </motion.div>
          </div>
        </section>

        {/* --- 3. SUBWAY & DINING --- */}
        <section id="subway" className="scroll-mt-32">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft as any}
              className="w-full lg:w-1/2"
            >
              <MiniSlider images={sectionData.subway} />
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
                  Dining
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Food & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
                  Refreshments.
                </span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Pause for a quick meal, fresh beverage or takeaway option before continuing your journey. Display the name and branding of Subway or another food partner only after confirming a current authorised franchise or operating agreement.
              </p>

              <ul className="space-y-4 pt-6">
                {[
                  "Freshly prepared food and beverages",
                  "Comfortable customer seating",
                  "Takeaway and quick-service options",
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

        {/* --- 4. TYRE SHOP & SERVICE --- */}
        <section id="tyres" className="scroll-mt-32">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft as any}
              className="w-full lg:w-1/2 space-y-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-[1px] bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">
                  Maintenance
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Tyre Shop & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
                  Auto Service.
                </span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Access essential support for common vehicle needs while travelling. Service availability may vary, so customers should confirm individual facilities directly at the station.
              </p>

              <ul className="space-y-4 pt-6">
                {[
                  "Tyre-pressure checks and puncture repair",
                  "Oil-change and basic maintenance support",
                  "Vehicle inspection by available service staff",
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

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight as any}
              className="w-full lg:w-1/2"
            >
              <MiniSlider images={sectionData.tyre} />
            </motion.div>
          </div>
        </section>
      </div>

     <section
        id="location"
        className="relative w-full py-24 lg:py-32 bg-[#050505] border-t border-white/5 mt-32"
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={slideInLeft as any}
              className="w-full lg:w-4/12 space-y-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-[1px] bg-[#D4AF37]" />
                  <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">
                    Visit Us Today
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
                  Find Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
                    Location.
                  </span>
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Conveniently positioned to serve local commuters and long-distance travellers. Stop for fuel, refreshments, prayer facilities, washrooms and essential vehicle support.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 py-6 border-y border-white/10">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2">
                    Location
                  </p>
                  <p className="font-bold text-white hover:text-[#D4AF37] text-sm tracking-wide">
                    Multan Road, Thokar Niaz Baig, 
                    
                    Lahore, Punjab, Pakistan
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-2">
                    Status
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <p className="font-bold text-white hover:text-[#D4AF37] text-sm tracking-wide">
                    24/7 Operational
                    </p>
                  </div>
                </div>
                  <div className="space-y-6">
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="border-t border-white/5 pt-6 flex flex-col items-start"
                    >
                      <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-4">
                        Connect With Us
                      </p>
                      <div className="flex items-center gap-4 sm:gap-6">
                        {[
                          { 
                            icon: FaFacebook, 
                            href: "https://www.facebook.com/AreebAreelFillingStation/", 
                            name: "Facebook",
                            hoverBg: "hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10 hover:shadow-[0_10px_20px_-10px_rgba(24,119,242,0.4)]",
                            hoverText: "group-hover:text-[#1877F2]" 
                          },
                          { 
                            icon: FaInstagram, 
                            href: "https://www.instagram.com/areebareelfillingstation", 
                            name: "Instagram",
                            hoverBg: "hover:border-[#E1306C]/50 hover:bg-[#E1306C]/10 hover:shadow-[0_10px_20px_-10px_rgba(225,48,108,0.4)]",
                            hoverText: "group-hover:text-[#E1306C]"
                          },
                          { 
                            icon: FaYoutube, 
                            href: "https://www.youtube.com/@areebareelfillingstation", 
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

 
              </div>
            </motion.div>

            {/* Standard White Road Map Embed */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full lg:w-8/12"
            >
              <div className="relative w-full aspect-video lg:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6806.007795684005!2d74.22843443816046!3d31.46907894789628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919021a4b07b85d%3A0xd5513d51e1de1ac2!2sTotal%20-%20Areeb%20Areel%20Filling%20Station!5e0!3m2!1sen!2s!4v1782285725400!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
     
    </main>
  );
}
