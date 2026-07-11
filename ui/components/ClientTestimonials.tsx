'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: '01',
    sector: 'Residential Real Estate',
    attribution: 'Residential Client',
    context: 'Naseeb Homes Inquiry',
    quote:
      'The conversation stayed focused on practical family needs, from room planning to the information required before making a decision. That clarity made it easier to evaluate the right home option.',
  },
  {
    id: '02',
    sector: 'Commercial Real Estate',
    attribution: 'Commercial Client',
    context: 'Sentosa Square Inquiry',
    quote:
      'Sentosa Square was presented around business visibility, access and day-to-day usability. We appreciated being guided toward documented unit details and current commercial terms.',
  },
  {
    id: '03',
    sector: 'Design & Build',
    attribution: 'Architecture Client',
    context: 'Residential Design Project',
    quote:
      'Our requirements were translated into a clearer design direction with attention to layout, movement and buildability. The structured approach helped us understand what needed to happen next.',
  },
  {
    id: '04',
    sector: 'Corporate Advisory',
    attribution: 'Business Advisory Client',
    context: 'Pakistan-UAE Planning',
    quote:
      'The early market-entry discussion helped us organise our questions around business activity, setup routes and documentation before speaking with the relevant specialist advisers.',
  },
];

export default function ClientTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const activeTestimonial = testimonials[activeIndex];

  useEffect(() => {
    if (isPaused || reduceMotion) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [isPaused, reduceMotion]);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-y border-white/5 bg-[#080808] py-24 text-white lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-2/3 -translate-x-1/2 -translate-y-1/2 bg-[#D4AF37]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-12 bg-[#D4AF37]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                Client Perspectives
              </span>
            </div>
            <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-normal md:text-5xl lg:text-6xl">
              Built on clarity.{' '}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC] bg-clip-text text-transparent">
                Remembered for care.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm font-medium leading-relaxed text-zinc-400 md:text-base lg:text-right">
            Perspectives from clients exploring homes, commercial opportunities,
            design solutions and cross-border business planning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="overflow-hidden rounded-lg border border-white/10 bg-[#101010] shadow-[0_28px_80px_rgba(0,0,0,0.35)]"
        >
          <div className="grid min-h-[460px] lg:grid-cols-[minmax(0,1.55fr)_minmax(310px,0.65fr)]">
            <div className="relative flex min-h-[410px] flex-col justify-between overflow-hidden p-7 sm:p-10 lg:min-h-0 lg:p-14 xl:p-16">
              <Quote className="absolute right-6 top-6 h-28 w-28 text-[#D4AF37]/[0.06] sm:h-40 sm:w-40" />

              <AnimatePresence mode="wait">
                <motion.article
                  key={activeTestimonial.id}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -18 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  aria-live="polite"
                  className="relative z-10 flex h-full flex-col justify-between"
                >
                  <div>
                    <div className="mb-9 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-500 sm:text-xs">
                      <span className="font-mono text-[#D4AF37]">
                        {activeTestimonial.id}
                      </span>
                      <span className="h-px w-8 bg-white/15" />
                      <span>{activeTestimonial.sector}</span>
                    </div>
                    <blockquote className="max-w-4xl text-2xl font-semibold leading-[1.45] text-zinc-100 sm:text-3xl lg:text-4xl lg:leading-[1.35]">
                      &ldquo;{activeTestimonial.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className="mt-12 border-l-2 border-[#D4AF37] pl-5">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-white">
                      {activeTestimonial.attribution}
                    </p>
                    <p className="mt-1 text-xs font-medium text-zinc-500">
                      {activeTestimonial.context}
                    </p>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            <div className="flex flex-col border-t border-white/10 bg-[#0c0c0c] lg:border-l lg:border-t-0">
              <div className="flex-1">
                {testimonials.map((testimonial, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={testimonial.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Show ${testimonial.sector} testimonial`}
                      aria-pressed={isActive}
                      className="group relative flex w-full items-center gap-5 border-b border-white/[0.07] px-6 py-5 text-left transition-colors hover:bg-white/[0.025] sm:px-8 lg:py-6"
                    >
                      <span
                        className={`font-mono text-xs transition-colors ${
                          isActive ? 'text-[#D4AF37]' : 'text-zinc-600'
                        }`}
                      >
                        {testimonial.id}
                      </span>
                      <span
                        className={`text-xs font-bold uppercase tracking-[0.16em] transition-colors sm:text-sm ${
                          isActive ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'
                        }`}
                      >
                        {testimonial.sector}
                      </span>
                      <span
                        className={`absolute bottom-0 left-0 h-px bg-[#D4AF37] transition-all duration-500 ${
                          isActive ? 'w-full' : 'w-0'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between px-6 py-5 sm:px-8">
                <span className="font-mono text-xs text-zinc-600">
                  {String(activeIndex + 1).padStart(2, '0')} /{' '}
                  {String(testimonials.length).padStart(2, '0')}
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={showPrevious}
                    title="Previous testimonial"
                    aria-label="Previous testimonial"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    title="Next testimonial"
                    aria-label="Next testimonial"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] text-black transition-colors hover:bg-[#F1E5AC]"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
