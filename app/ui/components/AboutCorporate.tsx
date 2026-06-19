'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface SliderImage {
  id: number;
  src: string;
  alt: string;
}

const sliderImages: SliderImage[] = [
  { id: 1, src: '/images/petrol pump.png', alt: 'Areeb & Areel Corporate Headquarters' },
  { id: 2, src: '/images/construction.png', alt: 'Areeb & Areel Energy Networks' },
  { id: 4, src: '/images/mart.png', alt: 'Areeb & Areel Mega Infrastructure Construction' },
  { id: 3, src: '/images/housing-society.png', alt: 'Areeb & Areel Premium Communities' },
];

const stats = [
  { id: 1, value: '15+', label: 'Years of Excellence' },
  { id: 2, value: '250+', label: 'Acres Developed' },
  { id: 3, value: '40+', label: 'Energy Hubs Live' },
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  radius: number;
  phase: number; 
}

export default function AboutSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // --- UPDATED LOGIC: 60 for mobile (width < 768px), 200 for larger screens ---
    const particleCount = window.innerWidth < 768 ? 60 : 300; 
    
    const connectionDistance = 120; 
    const repulsionRadius = 180; 

    const resizeCanvas = () => {
      if (canvas && containerRef.current) {
        canvas.width = containerRef.current.offsetWidth;
        canvas.height = containerRef.current.offsetHeight;
      }
    };
    
    resizeCanvas();
    const sizeTimeout = setTimeout(resizeCanvas, 100);
    window.addEventListener('resize', resizeCanvas);

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const vx = (Math.random() - 0.5) * 1.5; 
        const vy = (Math.random() - 0.5) * 1.5; 
        particles.push({
          x: Math.random() * (canvas.width || 800),
          y: Math.random() * (canvas.height || 600),
          vx: vx,
          vy: vy,
          baseVx: vx,
          baseVy: vy,
          radius: Math.random() * 1.5 + 1.0, 
          phase: Math.random() * Math.PI * 2, 
        });
      }
    };
    initParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;

      particles.forEach((p) => {
        if (mouse) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < repulsionRadius) {
            const force = (repulsionRadius - distance) / repulsionRadius;
            const angle = Math.atan2(dy, dx);
            
            const targetVx = p.baseVx + Math.cos(angle) * force * 18.0; 
            const targetVy = p.baseVy + Math.sin(angle) * force * 18.0;

            p.vx += (targetVx - p.vx) * 0.45; 
            p.vy += (targetVy - p.vy) * 0.45; 
          } else {
            p.vx += (p.baseVx - p.vx) * 0.2; 
            p.vy += (p.baseVy - p.vy) * 0.2; 
          }
        } else {
          p.vx += (p.baseVx - p.vx) * 0.2;
          p.vy += (p.baseVy - p.vy) * 0.2;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) { p.x = 0; p.baseVx *= -1; p.vx *= -1; }
        if (p.x > canvas.width) { p.x = canvas.width; p.baseVx *= -1; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.baseVy *= -1; p.vy *= -1; }
        if (p.y > canvas.height) { p.y = canvas.height; p.baseVy *= -1; p.vy *= -1; }

        p.phase += 0.05; 
        const pulseAlpha = Math.sin(p.phase) * 0.5 + 0.5; 
        const haloRadius = p.radius * 3 + (pulseAlpha * 2.5);

        ctx.beginPath();
        ctx.arc(p.x, p.y, haloRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${0.05 + pulseAlpha * 0.15})`; 
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'; 
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const pi = particles[i];
          const pj = particles[j];

          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.5; 
            ctx.beginPath();
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`; 
            ctx.lineWidth = 1.5; 
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearTimeout(sizeTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = null;
  };

  const slideVariants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { 
      opacity: 0.55, 
      scale: 1, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as number[] } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.98,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as number[] } 
    }
  };

  return (
    <motion.div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative h-full min-h-[500px] lg:min-h-[700px] w-full rounded-2xl overflow-hidden border border-white/5 bg-brand-black"
    >
      <div className="absolute inset-0 z-0 w-full h-full">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            variants={slideVariants as any}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <Image 
              src={sliderImages[currentIndex].src} 
              alt={sliderImages[currentIndex].alt}
              fill
              priority
              className="object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-20 pointer-events-none mix-blend-screen"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-brand-black/20 z-10 pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 space-y-6 z-30 pointer-events-none">
        <div className="flex items-center gap-3 px-2 pointer-events-auto">
          {sliderImages.map((_, idx) => (
            <div 
              key={idx} 
              onClick={() => setCurrentIndex(idx)}
              className="h-[2px] cursor-pointer bg-white/20 relative transition-all duration-300"
              style={{ width: currentIndex === idx ? '40px' : '16px' }}
            >
              {currentIndex === idx && (
                <motion.div 
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 3, ease: 'linear' }}
                  className="absolute inset-0 bg-brand-gold"
                />
              )}
            </div>
          ))}
        </div>

        <div className="p-6 bg-brand-slate/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl relative overflow-hidden pointer-events-auto">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center space-y-1">
                <p className="text-2xl md:text-3xl font-black text-brand-gold tracking-tight">{stat.value}</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-brand-silver font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}