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


export default function StrategicScale({ variant = "glance" }: { variant?: "glance" | "verified" }) {
  const brandMarqueeText = "BUILDING DREAMS • SHAPING SPACES • FUELING THE FUTURE • DESIGNING WITH PURPOSE • ";
  
  return (
    <section className="relative w-full bg-[#0a0a0a] text-white py-24 lg:py-32 overflow-hidden border-y border-white/5">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 blur-[150px] rounded-[100%] pointer-events-none" />
   
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
              {brandMarqueeText}
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  );
}

