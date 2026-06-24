"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  MotionValue,
} from "framer-motion";
import {
  Menu,
  X,
  ChevronRight,
  Fuel,
  Building2,
  Home,
  LucideIcon,
  FileSpreadsheet,
} from "lucide-react";
import { socialLinks } from "@/data/data";

interface NavLink {
  name: string;
  href: string;
  icon: LucideIcon | null;
}

const navLinks: NavLink[] = [
  { name: "Filling Station", href: "/filling-station", icon: Fuel },
  { name: "Naseeb Homes", href: "/naseeb-homes", icon: Home },
  { name: "Architecture", href: "/architecture", icon: Building2 },
  {name : "Santosa Square" , href: "/santosa-square", icon: Building2},
  {name : "Blogs" , href: "/blogs", icon: FileSpreadsheet},

];



export default function Navbar() {
  const MotionLink = motion.create(Link);


  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const { scrollY } = useScroll();

  const backgroundColor: MotionValue<string> = useTransform(
    scrollY,
    [0, 100],
    ["rgba(13, 13, 13, 0)", "rgba(13, 13, 13, 0.95)"],
  );

  const backdropBlur: MotionValue<string> = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"],
  );

  const headerHeight: MotionValue<string> = useTransform(
    scrollY,
    [0, 100],
    ["70px", "70px"],
  );
  const logoScale: MotionValue<number> = useTransform(
    scrollY,
    [0, 100],
    [1, 0.8],
  );

  return (
    <>
      {/* --- MAIN HEADER BAR --- */}
      <motion.header
        style={{
          backgroundColor,
          backdropFilter: backdropBlur,
          height: headerHeight,
        }}
        className="fixed top-0 left-0 w-full z-50 border-b border-white/5 flex items-center transition-all duration-300 ease-in-out"
      >
        <div className="max-w-[1600px] w-full mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo Brand Layout */}
          <Link
            href="/"
            className="flex items-center gap-3 group relative z-50"
          >
            <motion.div
              style={{ scale: logoScale }}
              className="relative w-20 h-20 md:w-18 md:h-18"
            >
              <Image
                src="/images/AREEB AREEL LOGO BADGE.png"
                alt="Areeb & Areel Logo"
                fill
                priority
                className="object-contain filter drop-shadow-[0_0_10px_rgba(212,175,55,0.2)]"
              />
            </motion.div>
          </Link>

          {/* Action Call Controls */}
          <div className="flex items-center gap-6">
           <MotionLink
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:inline-flex items-center justify-center gap-2 group bg-[#D4AF37] text-black font-bold px-7 py-3 rounded-md tracking-wider uppercase text-xs hover:brightness-110 transition shadow-[0_0_20px_rgba(212,175,55,0.15)]"
            >
              <span className="leading-none text-white">Contact Portal</span>
              <ChevronRight className="text-white w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
            </MotionLink>
            {/* Premium Hamburger Toggle */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 text-white hover:text-brand-gold transition-colors inline-flex items-center justify-center gap-2 group"
              aria-label="Open Navigation Drawer"
            >
              <Menu className="group-hover:text-yellow-200 cursor-pointer w-7 h-7 shrink-0" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* --- PUSH SIDEBAR SYSTEM --- */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Dark Blur Ambient Screen Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 pointer-events-auto"
            />

            {/* Sidebar Content Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="fixed inset-y-0 right-0 w-full sm:w-[480px] h-screen bg-brand-black/95 border-l border-white/5 z-50 px-6 md:px-12 py-3 flex flex-col justify-between backdrop-blur-xl shadow-2xl"
            >
              {/* Sidebar Header Panel */}
              <div className="flex items-center justify-between border-b border-white/5 pb-6">
                <div className="flex items-center gap-3">
                  <div className="relative w-15 h-15">
                    <Image
                      src="/images/AREEB AREEL LOGO BADGE.png"
                      alt="Areeb & Areel"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white tracking-widest leading-none">
                      AREEB AREEL
                    </span>
                    <span className="text-[9px] text-yellow-200 uppercase tracking-wider">
                      CORPORATION
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 text-brand-silver/60 hover:text-white border border-white/10 rounded-full hover:border-brand-gold/40 transition-all duration-300"
                  aria-label="Close Menu"
                >
                  <X className="hover:text-yellow-200 cursor-pointer w-5 h-5" />
                </button>
              </div>

              {/* Navigation Link Stack */}
              <nav className="flex flex-col space-y-4 my-auto">
                <p className="text-[10px] text-brand-gold uppercase tracking-[0.3em] font-semibold mb-2">
                  Corporate Directory
                </p>
                {navLinks.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + i * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setSidebarOpen(false)}
                        className="  flex items-center justify-between py-4 border-b border-white/[0.03] group transition-colors duration-300"
                      >
                        <div className="flex items-center gap-4">
                          {Icon && (
                            <Icon className="group-hover:text-yellow-200 w-5 h-5 text-brand-gold opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                          )}
                          <span className="group-hover:text-yellow-200  text-xl font-bold uppercase tracking-widest text-brand-silver group-hover:text-white transition-colors">
                            {link.name}
                          </span>
                        </div>
                        <ChevronRight className="group-hover:text-yellow-200 w-5 h-5 text-neutral-600 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Sidebar Footer & Socials Section */}
              <div className="border-t border-white/5 pt-8 space-y-6">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-yellow-200">
                    Headquarter
                  </p>
                  <p className="text-xs text-brand-silver/60 tracking-wide leading-relaxed">
                    Areeb & Areel Tower, Corporate Block,
                    <br />
                    Lahore, Punjab, Pakistan
                  </p>
                </div>
                
                {/* Styled Vector Social Grid */}
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => {
                    // Extract and capitalize the component reference
                    const SocialIcon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-brand-silver/80 ${social.hoverClass} transition-all duration-300`}
                      >
                        {/* Render it safely here as a standard JSX tag */}
                        <SocialIcon className="hover:text-yellow-200 w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
