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

// Particle Interface for Canvas Engine
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  radius: number;
}

export default function AboutSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  // Canvas Animation Engine References
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);

  // Auto-slide effect every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // --- NATIVE INTERACTIVE PARTICLE NETWORK ENGINE ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 75; // Balanced for premium density and 60fps execution
    const connectionDistance = 110; // Max distance for network line drawing
    const repulsionRadius = 140; // The threshold area for "cursor phobia"

    // Resize canvas perfectly to fit container constraints
    const resizeCanvas = () => {
      if (canvas && containerRef.current) {
        canvas.width = containerRef.current.offsetWidth;
        canvas.height = containerRef.current.offsetHeight;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Instantiate unique particles with subtle base trajectories
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const vx = (Math.random() - 0.5) * 0.4;
        const vy = (Math.random() - 0.5) * 0.4;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: vx,
          vy: vy,
          baseVx: vx,
          baseVy: vy,
          radius: Math.random() * 1.5 + 1,
        });
      }
    };
    initParticles();

    // The Infinite Animation Render Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;

      // Update & Render Node Positions
      particles.forEach((p) => {
        // Real-time Vector Distance Computations for Repulsion Physics
        if (mouse) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < repulsionRadius) {
            const force = (repulsionRadius - distance) / repulsionRadius;
            // Calculate direction angles
            const angle = Math.atan2(dy, dx);
            // Elastic outward thrust acceleration
            const targetVx = p.baseVx + Math.cos(angle) * force * 1.8;
            const targetVy = p.baseVy + Math.sin(angle) * force * 1.8;

            p.vx += (targetVx - p.vx) * 0.1;
            p.vy += (targetVy - p.vy) * 0.1;
          } else {
            // Smoothly ease back to signature floating speed when cursor departs
            p.vx += (p.baseVx - p.vx) * 0.04;
            p.vy += (p.baseVy - p.vy) * 0.04;
          }
        } else {
          p.vx += (p.baseVx - p.vx) * 0.04;
          p.vy += (p.baseVy - p.vy) * 0.04;
        }

        // Apply velocities to coordinates
        p.x += p.vx;
        p.y += p.vy;

        // Container Edge Collisions Handling
        if (p.x < 0 || p.x > canvas.width) p.baseVx *= -1; p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.baseVy *= -1; p.vy *= -1;

        // Draw Dot Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
        ctx.fill();
      });

      // Double-nested spatial index pairing to map connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const pi = particles[i];
          const pj = particles[j];

          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            // Dynamic transparency calculations based on node proximity
            const alpha = (1 - dist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
            // Luxury corporate metallic gold styling accent lines
            ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Clean memory contexts on layout shifts
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Track cursor offsets relative to the main layout bounding box
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

  // Elite structural slide+fade animation variants
  const slideVariants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { 
      opacity: 0.6, // Keeps the premium dark theme background integration
      scale: 1, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.98,
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } 
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
      {/* --- PREMIUM ANIMATED IMAGES --- */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          variants={slideVariants}
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

      {/* --- HIGH-PERFORMANCE NATIVE INTERACTIVE CANVAS LAYER --- */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
      />

      {/* Luxury Vignette Shader Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-brand-black/10 pointer-events-none" />

      {/* --- FLOATING CONTROLS & STATS PANEL --- */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 space-y-6 z-20">
        
        {/* Minimal Progress Micro-Indicators */}
        <div className="flex items-center gap-3 px-2">
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
                  transition={{ duration: 5, ease: 'linear' }}
                  className="absolute inset-0 bg-brand-gold"
                />
              )}
            </div>
          ))}
        </div>

        {/* Floating Glassmorphic Stats Board */}
        <div className="p-6 bg-brand-slate/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl relative overflow-hidden">
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