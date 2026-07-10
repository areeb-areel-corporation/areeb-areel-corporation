'use client';

import { useParams, useRouter } from 'next/navigation';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Clock, Calendar, Share2} from 'lucide-react';
import { blogDatabase } from '@/data/data';

export default function BlogReaderContent() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const article = blogDatabase.find((b) => b.id === id);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // If someone types an invalid ID in the URL, show a 404 state
  if (!article) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <button onClick={() => router.push('/blogs')} className="text-[#D4AF37] underline tracking-widest uppercase text-sm font-bold">Return to Newsroom</button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden pb-32">
      
      {/* 1. Reading Progress Bar (Fixed to Top) */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#D4AF37] origin-left z-50" 
        style={{ scaleX }} 
      />

      <div className="relative w-full h-[60vh] lg:h-[70vh] flex items-center justify-center border-b border-white/10">
        <Image 
          src={article.src} 
          alt={article.title} 
          fill 
          className="object-cover opacity-40" 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-transparent" />

        <div className="relative z-10 max-w-[1200px] w-full px-6 flex flex-col items-center text-center mt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-md">
              {article.tag}
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] max-w-5xl mb-8">
            {article.title}
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex items-center gap-6 text-zinc-400 text-xs md:text-sm font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#D4AF37]" /> {article.date}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D4AF37]" /> {article.readTime}</span>
          </motion.div>
        </div>
      </div>

      {/* 3. MAIN ARTICLE CONTENT */}
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
        
        {/* Left Side: Sticky Navigation & Sharing */}
        <div className="lg:col-span-3 hidden lg:block relative">
          <div className="sticky top-32 flex flex-col gap-10">
            <Link href="/blogs" className="group flex items-center gap-3 text-zinc-500 hover:text-[#D4AF37] transition-colors w-fit">
              <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-[#D4AF37] transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">Back to Hub</span>
            </Link>

            <div className="flex flex-col gap-4">
              <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">Share Article</span>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#D4AF37] hover:text-black transition-all"><FaLinkedin className="w-4 h-4" /></button>
                <button className="w-10 h-10 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#D4AF37] hover:text-black transition-all"><FaTwitter className="w-4 h-4" /></button>
                <button className="w-10 h-10 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#D4AF37] hover:text-black transition-all"><Share2 className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Reading Typography */}
        <motion.article 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-8 prose prose-invert prose-lg max-w-none text-zinc-300 leading-relaxed"
        >
          {/* Mobile Back Button */}
          <Link href="/blogs" className="flex lg:hidden items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-10">
            <ChevronLeft className="w-4 h-4" /> Back to Hub
          </Link>

          <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-10">
            <span className="float-left text-7xl font-black text-[#D4AF37] leading-[0.8] mr-4 mt-2">H</span>
            {article.excerpt} This reflects our commitment to practical planning, responsible execution and long-term value for families, travellers, businesses and communities.
          </p>

          <p className="mb-6">
            At Areeb & Areel Corporation, our approach begins with understanding genuine needs. Whether we are planning residential spaces, operating travel facilities, supporting retail services or coordinating advisory work, the objective is to create solutions that remain useful beyond the first impression.
          </p>

          {/* Premium Blockquote styling */}
          <blockquote className="my-12 py-6 pl-8 border-l-4 border-[#D4AF37] bg-gradient-to-r from-[#D4AF37]/10 to-transparent italic text-xl text-white font-medium">
            &quot;Responsible progress begins with clarity, discipline and work that creates lasting value.&quot;
            <footer className="text-sm text-[#D4AF37] font-bold uppercase tracking-widest mt-4 not-italic">— Board of Directors</footer>
          </blockquote>

          <h3 className="text-3xl font-bold text-white mt-12 mb-6">The Next Phase of Development</h3>
          <p className="mb-6">
            Looking ahead, the corporation continues to strengthen its connected divisions across real estate, architecture, construction, energy services, retail operations and business advisory.
          </p>
          <p>
            We remain dedicated to clear communication, structural integrity, responsible operations and practical quality. The benchmark we build is measured by usefulness, trust and the value created for people who rely on our work.
          </p>

        </motion.article>
      </div>
    </main>
  );
}
