'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';


function AnimatedCounter({ from, to, duration = 2, suffix = '' }: { from: number, to: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const updateCounter = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function for smooth deceleration (easeOutExpo)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        const currentCount = Math.floor(easeProgress * (to - from) + from);
        setCount(currentCount);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCounter);
        }
      };

      animationFrame = requestAnimationFrame(updateCounter);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [from, to, duration, isInView]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const stats = [
  { id: 1, value: 15, suffix: '+', label: 'Years of Excellence' },
  { id: 2, value: 250, suffix: '+', label: 'Acres Developed' },
  { id: 3, value: 40, suffix: '+', label: 'Energy Hubs Live' },
  { id: 4, value: 5, suffix: 'B+', prefix: 'AED ', label: 'International Reach' }, // Dubai touch
];

export default function StrategicScale() {
  const marqueeText = "BUILDING DREAMS • SHAPING SPACES • FEULING FUTURE  • CONSTRUCTION • ";
  
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white py-24 lg:py-32 overflow-hidden border-y border-white/5">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 blur-[150px] rounded-[100%] pointer-events-none" />

      {/* --- STATS GRID --- */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10 mb-20 lg:mb-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left relative before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-[#D4AF37]/50 before:to-transparent lg:pl-8"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#D4AF37] tracking-tighter mb-2 flex items-center">
                {stat.prefix && <span className="text-2xl lg:text-3xl mr-1 opacity-80">{stat.prefix}</span>}
                <AnimatedCounter from={0} to={stat.value} duration={2.5} suffix={stat.suffix} />
              </h3>
              <p className="text-brand-silver/60 text-sm md:text-base font-semibold uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

   
      <div className="relative w-full flex overflow-hidden whitespace-nowrap bg-[#111111] py-8 lg:py-12 border-y border-[#D4AF37]/20 scale-105 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }} // Move from 0 to exactly half its width
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 50, // Adjust this to change scrolling speed
          }}
        >
          {/* We render the text 4 times to ensure it never runs out of screen space on ultra-wide monitors */}
          {[...Array(4)].map((_, i) => (
            <span 
              key={i} 
              className="text-6xl md:text-8xl lg:text-9xl font-black mx-4 tracking-tighter text-transparent text-stroke-gold opacity-80 hover:opacity-100 transition-opacity duration-500 cursor-default"
            >
              {marqueeText}
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  );
}