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
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NaseebHomesPage() {
  const pathname = usePathname();
  const router = useRouter();

  // The universal contact routing function
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push("/#contact");
    }
  };

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
                Areeb & Areel Corp Presents
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
              Experience modern architecture in a secure, gated community. Premium 3.5 and 5 Marla homes available with accessible 12-month installment plans.
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
              title: "24/7 Security",
              desc: "Fully gated community with active surveillance and personnel.",
            },
            {
              icon: Home,
              title: "Modern Architecture",
              desc: "Contemporary 2 & 3 bedroom layouts with premium finishes.",
            },
            {
              icon: Wallet,
              title: "Flexible Financing",
              desc: "12-month installment plans starting with just 10% booking.",
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

      {/* --- THE SHOWCASE: RESIDENTIAL OPTIONS --- */}
      <section className="py-24 lg:py-40 max-w-[1600px] mx-auto px-6 md:px-10 overflow-hidden">
        
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
                Premium 3.5 & 5 <br /> Marla Estates.
              </h2>
              <p className="text-brand-silver/70 text-lg leading-relaxed">
                Designed for modern families. Choose between our beautifully crafted 2 and 3-bedroom layouts. Every home in Naseeb Homes features contemporary facades, spacious interiors, and is built to the highest structural standards.
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
                  2 & 3 Bedroom Designs
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
                  Booking Open Now
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
                Accessible & <br /> Secure Living.
              </h2>
              <p className="text-brand-silver/70 text-lg leading-relaxed">
                Naseeb Homes is situated in a prime location, providing your family with the ultimate peace of mind. We believe luxury should be accessible, which is why we offer highly transparent, resident-friendly financial structuring.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div>
                <span className="text-brand-silver/40 text-xs font-bold uppercase tracking-widest block mb-1">
                  Initial Booking
                </span>
                <span className="text-white font-semibold text-lg text-[#D4AF37]">
                  10% Down
                </span>
              </div>
              <div>
                <span className="text-brand-silver/40 text-xs font-bold uppercase tracking-widest block mb-1">
                  Installment Plan
                </span>
                <span className="text-white font-semibold">
                  1% Monthly (12 Months)
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-brand-silver/40 text-xs font-bold uppercase tracking-widest block mb-1">
                  Possession
                </span>
                <span className="text-white font-semibold">
                  Handover at 5%
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
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter"
          >
            Secure Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">
              Dream Home.
            </span>
          </motion.h3>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-silver/60 mb-12 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Don't miss the opportunity to join our exclusive community. Connect with our advisory team today to reserve your 3.5 or 5 Marla home with just a 10% booking.
          </motion.p>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button
              onClick={handleContactClick}
              className="w-full sm:w-auto relative overflow-hidden group bg-[#D4AF37] text-black font-bold px-10 py-5 rounded-lg tracking-widest uppercase transition-all duration-500 text-sm flex items-center justify-center gap-3 active:scale-95 shadow-[0_0_40px_rgba(212,175,55,0.3)]"
            >
              <div className="absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
              <span className="relative z-10 flex items-center gap-2">
                Inquire Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <Link
              href="/"
              className="w-full sm:w-auto group flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-white transition-colors duration-300"
            >
              Return to Corporate
              <div className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:text-white transition-colors" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}