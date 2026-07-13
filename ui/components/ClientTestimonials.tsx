'use client';

import { useRef, useEffect } from 'react';
import { motion, Variants, useAnimation } from 'framer-motion';
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

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

  // Optional: Auto-scroll effect (paused on hover)
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let isPaused = false;
    let scrollPos = 0;
    const speed = 0.5;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPos += speed;
        // Reset scroll when reaching the end of original content (simplified continuous scroll logic)
        if (scrollPos >= scrollContainer.scrollWidth / 2) {
            scrollPos = 0;
        }
        scrollContainer.scrollLeft = scrollPos;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Uncomment the line below to enable continuous auto-scrolling
    // animationFrameId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const staggerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    hover: { y: -5, transition: { duration: 0.3, ease: 'easeOut' } }
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-y border-white/5 bg-[#050505] py-20 text-white lg:py-24"
      ref={containerRef}
    >
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

        {/* Horizontal Scrolling Cards Container */}
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="relative w-full"
        >
          {/* Using a flex container with overflow-x-auto allows horizontal scrolling.
            hide-scrollbar hides the ugly default scrollbar on most browsers.
          */}
          <div 
            ref={scrollContainerRef}
            className="flex w-full gap-6 overflow-x-auto px-6 pb-12 pt-4 md:px-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={cardVariants}
                whileHover="hover"
                ref={(el) => { cardsRef.current[index] = el; }}
                style={{ scrollSnapAlign: 'start' }}
                // Fixed width ensures cards don't shrink when scrolling
                className="group relative w-[320px] shrink-0 rounded-[20px] bg-white/5 p-[1px] cursor-default sm:w-[400px] lg:w-[450px]"
              >
                {/* 1. CARD BORDER GLOW (Spotlight Layer that tracks the mouse over the card) */}
                <div 
                  className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 rounded-[20px]"
                  style={{ background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(212, 175, 55, 1), transparent 40%)` }}
                />

                {/* 2. MAIN CONTENT LAYER (Solid background #111 masks the card's center) */}
                <div className="relative flex h-full min-h-[380px] w-full flex-col justify-between overflow-hidden rounded-[19px] bg-[#111] p-8 z-10 sm:min-h-[420px] sm:p-10">
                  
                  {/* Faded Quote Icon in background */}
                  <Quote className="absolute right-6 top-6 h-24 w-24 text-[#D4AF37]/[0.05] transition-colors duration-500 group-hover:text-[#D4AF37]/[0.1]" />

                  <div>
                    {/* Sector & ID Header */}
                    <div className="mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400">
                      <span className="font-mono text-[#D4AF37]">
                        {testimonial.id}
                      </span>
                      <span className="h-px w-6 bg-white/15 transition-colors duration-500 group-hover:bg-[#D4AF37]/50" />
                      <span>{testimonial.sector}</span>
                    </div>
                    
                    {/* Quote Text - Font weight reduced to font-medium/normal instead of bold/semibold */}
                    <blockquote className="relative z-10 text-base font-medium leading-[1.7] text-zinc-300 transition-colors duration-500 group-hover:text-white sm:text-lg">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  </div>

                  {/* Client Attribution Footer */}
                  <div className="mt-10 border-l-2 border-[#D4AF37]/40 pl-5 transition-colors duration-500 group-hover:border-[#D4AF37]">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#D4AF37]">
                      {testimonial.attribution}
                    </p>
                    <p className="mt-1.5 text-[11px] font-medium text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400">
                      {testimonial.context}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Fade edges to suggest more content (Optional, looks premium on desktop) */}
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-24 bg-gradient-to-l from-[#050505] to-transparent md:w-32 lg:w-48" />
        </motion.div>

      </div>
    </section>
  );
}