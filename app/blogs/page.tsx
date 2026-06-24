'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Clock, BookOpen } from 'lucide-react';
import { blogDatabase } from '@/data/data';


export default function BlogsPage() {
  const featuredBlog = blogDatabase[0];
  const remainingBlogs = blogDatabase.slice(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-24 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4AF37]/10 blur-[200px] rounded-[100%] pointer-events-none z-0" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* --- PAGE HEADER --- */}
        <div className="mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">Official Publications</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">Newsroom.</span>
          </motion.h1>
        </div>

        {/* --- FEATURED ARTICLE (Spans full width on large screens) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <Link href={`/blogs/${featuredBlog.id}`} className="group relative block w-full h-[500px] lg:h-[600px] rounded-[30px] overflow-hidden border border-white/10 bg-[#111]">
            <Image src={featuredBlog.src} alt={featuredBlog.title} fill className="object-cover opacity-60 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col justify-end">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md">Featured</span>
                <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 border border-[#D4AF37]/30 rounded-md backdrop-blur-sm bg-black/30">{featuredBlog.tag}</span>
                <div className="flex items-center gap-2 text-zinc-300 text-xs font-bold uppercase tracking-widest ml-auto md:ml-0">
                  <Clock className="w-4 h-4 text-[#D4AF37]" /> {featuredBlog.date}
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 group-hover:text-[#D4AF37] transition-colors duration-500 max-w-4xl">{featuredBlog.title}</h2>
              <p className="text-zinc-400 text-base md:text-xl max-w-2xl mb-6 line-clamp-2">{featuredBlog.excerpt}</p>
              
              <div className="flex items-center gap-3 text-white text-sm font-bold uppercase tracking-widest group-hover:text-[#D4AF37] transition-colors duration-300">
                Read Full Feature <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* --- GRID ARTICLES --- */}
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingBlogs.map((blog) => (
            <motion.div key={blog.id} variants={itemVariants as any}>
              <Link href={`/blogs/${blog.id}`} className="group flex flex-col h-full bg-[#111111]/40 border border-white/5 rounded-[24px] p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37] hover:bg-[#111111]/80 hover:shadow-[0_20px_50px_-15px_rgba(212,175,55,0.15)] overflow-hidden">
                
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-[#1a1a1a]">
                  <Image src={blog.src} alt={blog.title} fill className="object-cover filter grayscale opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100" />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-md transition-colors duration-500 group-hover:border-[#D4AF37]/40">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white transition-colors duration-500 group-hover:text-[#D4AF37]">{blog.tag}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-zinc-500 text-[11px] font-bold uppercase tracking-widest mb-4 group-hover:text-zinc-400">
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{blog.date}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" />{blog.readTime}</span>
                </div>

                <h3 className="text-xl font-bold leading-snug mb-3 text-white transition-colors duration-500 group-hover:text-[#D4AF37] line-clamp-2">{blog.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">{blog.excerpt}</p>

                <div className="mt-auto w-full flex items-center justify-between px-6 py-4 rounded-xl border border-white/5 bg-[#181818] transition-all duration-500 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37]">
                  <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-black transition-colors duration-500">Read Article</span>
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </main>
  );
}