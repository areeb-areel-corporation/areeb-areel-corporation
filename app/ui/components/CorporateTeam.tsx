'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

const team = [
  {
    id: 1,
    name: 'Areeb Tahir',
    role: 'Chief Executive Officer | Founder',
    src: '/images/Areeb-Tahir.jpg', // Save images as portrait (3:4 aspect ratio suggested)
    linkedin: '/https://www.linkedin.com/in/areeb-tahir-866088253/',
  },
  {
    id: 2,
    name: 'Areel Tahir',
    role: 'CEO | Owner',
    src: '/images/Areel-Tahir.jpg',
    linkedin: '/https://www.linkedin.com/in/areeltahir/',
  },
  {
    id: 3,
    name: 'Kashif',
    role: 'Chief Human Resources Officer',
    src: '/team/chro-1.png',
    linkedin: '#',
  },
  {
    id: 4,
    name: 'Unknown',
    role: 'Head of Marketing & Strategy',
    src: '/team/marketing-1.png',
    linkedin: '#',
  },
  {
    id: 5,
    name: 'Unknown',
    role: 'Director, AAA Developments',
    src: '/team/realestate-head.png',
    linkedin: '#',
  },
  {
    id: 6,
    name: 'Unknown',
    role: 'Head of Retail & Supply Chain',
    src: '/team/retail-head.png',
    linkedin: '#',
  },
];

export default function CorporateTeam() {
  // Stagger animation configuration for entry
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as number[] } },
  };

  return (
    <section className="relative w-full bg-brand-black text-white py-24 lg:py-32 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10 mb-16 lg:mb-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">
                Human Capital
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter">
              Executive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">Leadership.</span>
            </h2>
          </div>
          <p className="text-brand-silver/60 text-base md:text-lg max-w-md lg:text-right leading-relaxed">
            Meet the architects of progression driving Areeb & Areel Corporation towards unprecedented global infrastructure benchmarks.
          </p>
        </div>
      </div>

      {/* --- LEADERSHIP GRID --- */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <motion.div 
          variants={containerVariants as any}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants as any}
              className="relative group overflow-hidden rounded-2xl aspect-[3/4] bg-[#111] border border-white/5 cursor-pointer shadow-xl"
            >
              {/* Leader Portrait */}
              <Image
                src={member.src}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />

              {/* Dynamic Hover Shader Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500 ease-out z-10" />
              
              {/* Bottom Decorative Gold Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20 origin-left" />

              {/* --- CONTENT BLOCK (Revealed on Hover) --- */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex flex-col justify-end h-full">
                
                {/* designation slides up */}
                <p className="text-[#D4AF37] text-xs md:text-sm font-semibold uppercase tracking-[0.2em] transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 ease-out">
                  {member.role}
                </p>
                
                {/* Name */}
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mt-2 mb-4 group-hover:text-stroke-gold-thin transition-colors duration-500">
                  {member.name}
                </h3>
                
                {/* LinkedIn Icon */}
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-brand-black/50 backdrop-blur-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 ease-out hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
                >
                  <FaLinkedin className="w-5 h-5 text-brand-silver group-hover:text-[#D4AF37] transition-colors" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}