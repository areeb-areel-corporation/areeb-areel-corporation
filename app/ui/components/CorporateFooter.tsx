'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const footerLinks = [
  {
    title: 'The Divisions',
    links: [
      { name: 'AAA Developments', href: '#' },
      { name: 'Total Parco Hubs', href: '#' },
      { name: 'Express Smart Mart', href: '#' },
      { name: 'Infrastructure & Engineering', href: '#' },
    ],
  },
  {
    title: 'Corporate',
    links: [
      { name: 'Board of Directors', href: '#' },
      { name: 'Investor Relations', href: '#' },
      { name: 'Global Careers', href: '#' },
      { name: 'Corporate Social Responsibility', href: '#' },
    ],
  },
  {
    title: 'Legal & Privacy',
    links: [
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Architecture', href: '#' },
      { name: 'Compliance & Ethics', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  },
];

export default function CorporateFooter() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <footer className="relative w-full bg-[#050505] text-white pt-24 lg:pt-32 pb-8 overflow-hidden border-t border-white/5">
      
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#D4AF37]/5 blur-[200px] rounded-[100%] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* --- TOP SECTION: Newsletter & Branding --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-5/12"
          >
            <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
              AREEB & AREEL <span className="text-[#D4AF37]">CORP.</span>
            </h3>
            <p className="text-brand-silver/60 text-base leading-relaxed max-w-sm mb-8">
              Architecting the future of regional infrastructure, premium real estate, and transit energy networks.
            </p>
            
            {/* Minimalist Newsletter Input */}
            <div className="relative group max-w-md">
              <input 
                type="email" 
                placeholder="Subscribe to Investor Updates"
                className="w-full bg-transparent border-b border-white/20 py-4 pr-12 text-white focus:outline-none focus:border-[#D4AF37] transition-colors text-sm"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-brand-silver/50 group-hover:text-[#D4AF37] transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-4/12 space-y-6"
          >
            <div className="flex items-start gap-4 group cursor-pointer">
              <MapPin className="w-5 h-5 text-[#D4AF37] mt-1 shrink-0" />
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-brand-silver mb-1">Global HQ</p>
                <p className="text-brand-silver/60 group-hover:text-white transition-colors">Areeb & Areel Tower, Corporate District<br/>Lahore, Punjab, Pakistan</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer mt-4">
              <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <p className="text-brand-silver/60 group-hover:text-white transition-colors">executive@areebareel.com</p>
            </div>
          </motion.div>
        </div>

        {/* --- MIDDLE SECTION: Link Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-24"
        >
          {footerLinks.map((column, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex flex-col">
              <h4 className="text-white text-sm font-bold uppercase tracking-[0.2em] mb-8">
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a 
                      href={link.href} 
                      className="group flex items-center text-brand-silver/60 hover:text-[#D4AF37] transition-colors duration-300 text-sm md:text-base w-fit"
                    >
                      <span className="relative overflow-hidden">
                        <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                          {link.name}
                        </span>
                        <span className="absolute inset-0 block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                          {link.name}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* --- BOTTOM SECTION: Copyright & Socials --- */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6">
          <p className="text-brand-silver/40 text-xs tracking-widest uppercase text-center md:text-left">
            © {new Date().getFullYear()} Areeb & Areel Corporation. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-brand-silver/60 hover:text-brand-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300">
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-brand-silver/60 hover:text-brand-black hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300">
              <FaTwitter className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* --- MASSIVE BACKGROUND WATERMARK --- */}
      {/* This renders behind the content and creates a massive luxury architectural feel */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-[-10%] left-0 w-full flex justify-center pointer-events-none select-none z-0 overflow-hidden"
      >
        <span className="text-[15vw] font-black tracking-tighter text-white whitespace-nowrap leading-none">
          AREEB & AREEL
        </span>
      </motion.div>

    </footer>
  );
}