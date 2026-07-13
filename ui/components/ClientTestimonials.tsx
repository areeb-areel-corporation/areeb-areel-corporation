'use client';

import { useRef, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Quote } from 'lucide-react';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Mouse tracking for the premium golden border spotlight on hover
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

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-y border-white/5 bg-[#050505] py-20 text-white lg:py-24"
      ref={containerRef}
    >
      {/* ── Custom CSS for the Infinite Seamless Loop ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Background Architectural Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Central Golden Glow */}
      <div className="absolute left-1/2 top-1/2 h-[60vh] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[150px] pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-[1600px]">
        
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto mb-12 flex flex-col gap-4 px-6 md:px-10 lg:mb-16 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
                Client Experience
              </span>
            </div>
            <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Clients <span className="bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC] bg-clip-text text-transparent">Feedback.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm font-medium leading-relaxed text-zinc-400 lg:text-right">
            Insights from clients exploring homes, commercial opportunities,
            design solutions, and cross-border business planning.
          </p>
        </motion.div>

        {/* ── Endless Scrolling Marquee Container ── */}
        <div className="relative w-full overflow-hidden pb-12 pt-4">
          
          {/* The scrolling track (Pauses when the user hovers) */}
          <div className="flex w-max animate-scroll-left pause-on-hover hover:cursor-grab active:cursor-grabbing">
            
            {/* Set 1 of Cards */}
            <div className="flex gap-6 pr-6 pl-6 md:pl-10">
              {testimonials.map((testimonial, index) => (
                <div
                  key={`set1-${testimonial.id}`}
                  ref={(el) => { cardsRef.current[index] = el; }}
                  className="group relative w-[320px] shrink-0 rounded-[20px] bg-white/5 p-[1px] sm:w-[400px] lg:w-[450px] transition-transform duration-300 hover:-translate-y-2"
                >
                  {/* Spotlight Hover Glow */}
                  <div 
                    className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 rounded-[20px]"
                    style={{ background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(212, 175, 55, 1), transparent 40%)` }}
                  />

                  {/* Main Content Layer */}
                  <div className="relative flex h-full min-h-[380px] w-full flex-col justify-between overflow-hidden rounded-[19px] bg-[#111] p-8 z-10 sm:min-h-[420px] sm:p-10">
                    <Quote className="absolute right-6 top-6 h-24 w-24 text-[#D4AF37]/[0.05] transition-colors duration-500 group-hover:text-[#D4AF37]/[0.1]" />
                    <div>
                      <div className="mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400">
                        <span className="font-mono text-[#D4AF37]">{testimonial.id}</span>
                        <span className="h-px w-6 bg-white/15 transition-colors duration-500 group-hover:bg-[#D4AF37]/50" />
                        <span>{testimonial.sector}</span>
                      </div>
                      <blockquote className="relative z-10 text-base font-medium leading-[1.7] text-zinc-300 transition-colors duration-500 group-hover:text-white sm:text-lg">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                    </div>
                    <div className="mt-10 border-l-2 border-[#D4AF37]/40 pl-5 transition-colors duration-500 group-hover:border-[#D4AF37]">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#D4AF37]">
                        {testimonial.attribution}
                      </p>
                      <p className="mt-1.5 text-[11px] font-medium text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400">
                        {testimonial.context}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Set 2 of Cards (Exact duplicate to create the endless illusion) */}
            <div className="flex gap-6 pr-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={`set2-${testimonial.id}`}
                  ref={(el) => { cardsRef.current[index + testimonials.length] = el; }}
                  className="group relative w-[320px] shrink-0 rounded-[20px] bg-white/5 p-[1px] sm:w-[400px] lg:w-[450px] transition-transform duration-300 hover:-translate-y-2"
                >
                  {/* Spotlight Hover Glow */}
                  <div 
                    className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 rounded-[20px]"
                    style={{ background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(212, 175, 55, 1), transparent 40%)` }}
                  />

                  {/* Main Content Layer */}
                  <div className="relative flex h-full min-h-[380px] w-full flex-col justify-between overflow-hidden rounded-[19px] bg-[#111] p-8 z-10 sm:min-h-[420px] sm:p-10">
                    <Quote className="absolute right-6 top-6 h-24 w-24 text-[#D4AF37]/[0.05] transition-colors duration-500 group-hover:text-[#D4AF37]/[0.1]" />
                    <div>
                      <div className="mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400">
                        <span className="font-mono text-[#D4AF37]">{testimonial.id}</span>
                        <span className="h-px w-6 bg-white/15 transition-colors duration-500 group-hover:bg-[#D4AF37]/50" />
                        <span>{testimonial.sector}</span>
                      </div>
                      <blockquote className="relative z-10 text-base font-medium leading-[1.7] text-zinc-300 transition-colors duration-500 group-hover:text-white sm:text-lg">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                    </div>
                    <div className="mt-10 border-l-2 border-[#D4AF37]/40 pl-5 transition-colors duration-500 group-hover:border-[#D4AF37]">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#D4AF37]">
                        {testimonial.attribution}
                      </p>
                      <p className="mt-1.5 text-[11px] font-medium text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400">
                        {testimonial.context}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Fade edges to suggest more content off-screen */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-16 bg-gradient-to-r from-[#050505] to-transparent md:w-28 z-20" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-16 bg-gradient-to-l from-[#050505] to-transparent md:w-28 z-20" />
        </div>

      </div>
    </section>
  );
}