'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA ARRAYS ---
interface SliderImage {
  id: number;
  src: string;
  alt: string;
}

const sliderImages: SliderImage[] = [
  { id: 1, src: '/images/petrol pump.png', alt: 'Areeb & Areel Corporate Headquarters' },
  { id: 2, src: '/images/construction.png', alt: 'Areeb & Areel Energy Networks' },
  { id: 3, src: '/images/mart.png', alt: 'Areeb & Areel Mega Infrastructure Construction' },
  { id: 4, src: '/images/housing-society.png', alt: 'Areeb & Areel Premium Communities' },
];

const stats = [
  { id: 1, value: '15+', label: 'Years of Excellence' },
  { id: 2, value: '250+', label: 'Acres Developed' },
  { id: 3, value: '40+', label: 'Energy Hubs Live' },
];

// --- STAR NETWORK CLASS ---
class Star {
  x: number = 0;
  y: number = 0;
  originalX: number;
  originalY: number;
  size: number;
  shape: 'circle' | 'star';
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  connects: boolean;
  depth: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.originalX = Math.random() * canvasWidth;
    this.originalY = Math.random() * canvasHeight;
    this.depth = Math.random(); // Depth dictates how much parallax affects this specific star
    this.size = (Math.random() * 4 + 1) * this.depth; 
    this.shape = Math.random() > 0.5 ? 'circle' : 'star';
    this.speedX = (Math.random() - 0.5) * 0.8;
    this.speedY = (Math.random() - 0.5) * 0.8;
    this.rotation = 0;
    this.rotationSpeed = Math.random() * 0.002 + 0.001;
    this.connects = Math.random() < 0.35; 
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = '#D4AF37'; // Areeb & Areel Gold

    if (this.shape === 'circle') {
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    } else if (this.shape === 'star') {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        ctx.lineTo(0, -this.size);
        ctx.translate(0, -this.size);
        ctx.rotate((Math.PI * 2) / 10);
        ctx.lineTo(0, -this.size);
        ctx.translate(0, -this.size);
        ctx.rotate(-((Math.PI * 6) / 10));
      }
      ctx.lineTo(0, -this.size);
      ctx.restore();
    }

    ctx.closePath();
    ctx.fill();
  }
}

export default function AboutSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  // 1. Auto-play the image slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // 2. The Custom Interactive Network Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let cells: { [key: number]: { [key: number]: Star[] } } = {};

    // Configurations
    const MAX_DISTANCE = 90;
    const CELL_SIZE = MAX_DISTANCE;
    const MOUSE_RADIUS = 200;
    
    // Smooth Easing Variables for Parallax
    let currentMouseX = canvas.width / 2;
    let currentMouseY = canvas.height / 2;
    const PARALLAX_STRENGTH = 0.15; // Higher = more movement opposite to cursor

    // Resize handler
    const resizeCanvas = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      const density = window.innerWidth < 768 ? 0.0001 : 0.00025;
      const numberOfStars = Math.floor(canvas.width * canvas.height * density);
      stars = Array.from({ length: numberOfStars }, () => new Star(canvas.width, canvas.height));
      
      // Reset easing center
      currentMouseX = canvas.width / 2;
      currentMouseY = canvas.height / 2;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation Loop
    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cells = {};

      const mouse = mouseRef.current;

      // Calculate Target Mouse Position (Center of screen if mouse is not hovering)
      const targetMouseX = mouse.x !== null ? mouse.x : canvas.width / 2;
      const targetMouseY = mouse.y !== null ? mouse.y : canvas.height / 2;

      // Apply Easing (Lerp) to smoothly transition the network movement
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      // Calculate the global shift for the Inverse Parallax
      // If cursor goes left (smaller X), dx becomes positive (moves network right)
      const globalDx = (canvas.width / 2 - currentMouseX) * PARALLAX_STRENGTH;
      const globalDy = (canvas.height / 2 - currentMouseY) * PARALLAX_STRENGTH;

      // Update positions & draw stars
      stars.forEach((star) => {
        // Move base position
        star.originalX += star.speedX;
        star.originalY += star.speedY;

        // Bounce off walls
        if (star.originalX > canvas.width || star.originalX < 0) star.speedX *= -1;
        if (star.originalY > canvas.height || star.originalY < 0) star.speedY *= -1;

        if (star.shape === 'star') star.rotation += star.rotationSpeed;

        // Apply Inverse Parallax. Depth gives closer stars more movement.
        star.x = star.originalX + (globalDx * (1 - star.depth));
        star.y = star.originalY + (globalDy * (1 - star.depth));

        star.draw(ctx);

        // Map to Spatial Hash Grid
        const cellX = Math.floor(star.x / CELL_SIZE);
        const cellY = Math.floor(star.y / CELL_SIZE);
        
        if (!cells[cellX]) cells[cellX] = {};
        if (!cells[cellX][cellY]) cells[cellX][cellY] = [];
        cells[cellX][cellY].push(star);
      });

      // Draw Connections
      stars.forEach((star) => {
        const cellX = Math.floor(star.x / CELL_SIZE);
        const cellY = Math.floor(star.y / CELL_SIZE);

        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            const neighborX = cellX + i;
            const neighborY = cellY + j;

            if (cells[neighborX] && cells[neighborX][neighborY]) {
              cells[neighborX][neighborY].forEach((otherStar) => {
                if (star === otherStar) return;

                const dx = star.x - otherStar.x;
                const dy = star.y - otherStar.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                let actualMouseDistance = Infinity;
                if (mouse.x !== null && mouse.y !== null) {
                  const mDx = star.x - mouse.x;
                  const mDy = star.y - mouse.y;
                  actualMouseDistance = Math.sqrt(mDx * mDx + mDy * mDy);
                }

                if (distance < MAX_DISTANCE && (actualMouseDistance < MOUSE_RADIUS || (star.connects && otherStar.connects))) {
                  ctx.beginPath();
                  ctx.moveTo(star.x, star.y);
                  ctx.lineTo(otherStar.x, otherStar.y);
                  
                  let opacity = ((MAX_DISTANCE - distance) / MAX_DISTANCE) * 1.5;
                  if (opacity > 1) opacity = 1;

                  ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`; 
                  ctx.lineWidth = 1;
                  ctx.stroke();
                }
              });
            }
          }
        }
      });

      animationFrameId = requestAnimationFrame(animateStars);
    };

    animateStars();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // --- MOUSE TRACKING ---
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseLeave = () => {
    // Setting to null smoothly glides the parallax back to the center of the canvas
    mouseRef.current = { x: null, y: null };
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
      className="relative h-full min-h-[500px] lg:min-h-[700px] w-full rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a]"
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

      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent z-10 pointer-events-none" />

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
                  transition={{ duration: 4, ease: 'linear' }}
                  className="absolute inset-0 bg-[#D4AF37]"
                />
              )}
            </div>
          ))}
        </div>

        <div className="p-6 bg-[#111]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl relative overflow-hidden pointer-events-auto">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center space-y-1">
                <p className="text-2xl md:text-3xl font-black text-[#D4AF37] tracking-tight">{stat.value}</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-400 font-semibold">
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