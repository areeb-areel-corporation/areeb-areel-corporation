'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  BookOpen,
  Calendar,
  ChevronLeft,
  Clock,
  ListChecks,
  Share2,
} from 'lucide-react';
import { blogDatabase } from '@/data/data';

export default function BlogReaderContent() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const article = blogDatabase.find((blog) => blog.id === id);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  });

  if (!article) {
    return (
      <main className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white px-6 text-center">
        <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em] mb-4">
          Blogs
        </p>
        <h1 className="text-4xl md:text-6xl font-black mb-6">Article Not Found</h1>
        <button
          onClick={() => router.push('/blogs')}
          className="inline-flex items-center gap-3 text-[#D4AF37] font-bold uppercase tracking-widest text-sm"
        >
          <ChevronLeft className="w-4 h-4" />
          Return to Blogs
        </button>
      </main>
    );
  }

  const sections = article.sections ?? [];

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden pb-24">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#D4AF37] origin-left z-[60]"
        style={{ scaleX }}
      />

      <section className="relative min-h-[78vh] flex items-end border-b border-white/10 overflow-hidden">
        <Image
          src={article.src}
          alt={article.title}
          fill
          priority
          className="object-cover opacity-35 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(212,175,55,0.18),transparent_38%)]" />

        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-10 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <Link
              href="/blogs"
              className="inline-flex items-center gap-3 text-zinc-400 hover:text-[#D4AF37] transition-colors text-xs font-bold uppercase tracking-[0.25em] mb-8"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Blogs
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-[0.25em] px-4 py-2 rounded-md">
                {article.tag}
              </span>
              <span className="inline-flex items-center gap-2 text-zinc-300 text-xs font-bold uppercase tracking-widest border border-white/10 bg-black/30 backdrop-blur-md px-4 py-2 rounded-md">
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                {article.date}
              </span>
              <span className="inline-flex items-center gap-2 text-zinc-300 text-xs font-bold uppercase tracking-widest border border-white/10 bg-black/30 backdrop-blur-md px-4 py-2 rounded-md">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl text-[#D4AF37] font-black tracking-tighter leading-[1.02] mb-8">
              {article.title}
            </h1>
            <p className="text-lg md:text-2xl text-zinc-300 leading-relaxed max-w-3xl">
              {article.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative max-w-[1500px] mx-auto px-6 md:px-10 mt-12 lg:mt-20">
        <div className="absolute top-20 right-0 w-[520px] h-[520px] bg-[#D4AF37]/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 relative z-10">
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-28 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="rounded-2xl border border-white/10 bg-[#111111]/80 backdrop-blur-xl p-6"
              >
                <div className="flex items-center gap-3 mb-5">
                  <BookOpen className="w-5 h-5 text-[#D4AF37]" />
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                    In This Article
                  </p>
                </div>
                <nav className="space-y-3">
                  {sections.map((section, index) => (
                    <a
                      key={section.heading}
                      href={`#section-${index + 1}`}
                      className="group flex gap-3 text-sm text-zinc-500 hover:text-white transition-colors"
                    >
                      <span className="font-mono text-[#D4AF37]/70 group-hover:text-[#D4AF37]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{section.heading}</span>
                    </a>
                  ))}
                </nav>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6"
              >
                <div className="flex items-center gap-3 text-[#D4AF37] mb-3">
                  <Share2 className="w-5 h-5" />
                  <p className="text-xs font-bold uppercase tracking-[0.25em]">
                    Corporate Insight
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Published by Areeb Areel Corporation for readers exploring practical
                  development, energy, retail and advisory decisions.
                </p>
              </motion.div>
            </div>
          </aside>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 xl:col-span-9"
          >
            <div className="rounded-[28px] border border-white/10 bg-[#0d0d0d]/90 shadow-[0_30px_80px_rgba(0,0,0,0.35)] overflow-hidden">
              <div className="p-6 md:p-10 lg:p-14">
                <div className="mb-12 border-l-2 border-[#D4AF37] pl-6">
                  <p className="text-xl md:text-2xl leading-relaxed text-white font-medium">
                    {article.excerpt}
                  </p>
                </div>

                <div className="space-y-14">
                  {sections.map((section, index) => (
                    <motion.section
                      id={`section-${index + 1}`}
                      key={section.heading}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="scroll-mt-28"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-6">
                        <span className="shrink-0 w-12 h-12 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-mono text-sm font-bold">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-[#D4AF37]">
                          {section.heading}
                        </h2>
                      </div>

                      <div className="space-y-5 text-zinc-300 text-base md:text-lg leading-relaxed">
                        {section.paragraphs.map((paragraph, paragraphIndex) => (
                          <p key={paragraphIndex}>{paragraph}</p>
                        ))}
                      </div>

                      {section.list && (
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {section.list.map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                            >
                              <ListChecks className="w-4 h-4 text-[#D4AF37] shrink-0" />
                              <span className="text-sm font-medium text-zinc-300">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.section>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 bg-[#111111] p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-2">
                    Continue Reading
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Explore more corporate insights from Areeb Areel Corporation.
                  </p>
                </div>
                <Link
                  href="/blogs"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37] px-6 py-4 text-sm font-bold uppercase tracking-widest text-black transition-transform duration-300 hover:-translate-y-1"
                >
                  View Blogs
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </main>
  );
}
