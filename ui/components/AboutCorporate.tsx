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
  { id: 1, value: '[XX]+', label: 'Years of Combined Experience' },
  { id: 2, value: '[XX]+', label: 'Projects or Acres Developed' },
  { id: 3, value: '[XX]+', label: 'Clients or Service Touchpoints' },
];

// --- GRID NODE LOGIC ---
class GridNode {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;

  constructor(x: number, y: number) {
    this.baseX = x;
    this.baseY = y;
    this.x = x;
    this.y = y;
    this.targetX = x;
    this.targetY = y;
  }

  update(mouseX: number | null, mouseY: number | null, radius: number) {
    if (mouseX !== null && mouseY !== null) {
      const dx = this.baseX - mouseX;
      const dy = this.baseY - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // If within the distortion radius, bend the grid outward (Fisheye effect)
      if (dist < radius) {
        // Force calculation: stronger closer to the center
        const force = Math.pow((radius - dist) / radius, 1.5); 
        const pushDistance = 60 * force; // Maximum pixel distortion
        
        // Prevent division by zero
        const angle = Math.atan2(dy, dx);
        
        this.targetX = this.baseX + Math.cos(angle) * pushDistance;
        this.targetY = this.baseY + Math.sin(angle) * pushDistance;
      } else {
        this.targetX = this.baseX;
        this.targetY = this.baseY;
      }
    } else {
      this.targetX = this.baseX;
      this.targetY = this.baseY;
    }

    // Smooth Lerping for buttery, fluid snapping
    this.x += (this.targetX - this.x) * 0.15;
    this.y += (this.targetY - this.y) * 0.15;
  }
}

export default function AboutSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  // Auto-play the image slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // --- THE ARCHITECTURAL FISHEYE GRID ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: GridNode[] = [];
    
    // Configuration
    const SPACING = window.innerWidth < 768 ? 40 : 50; // Grid square size
    const DISTORTION_RADIUS = 250; // Size of the fisheye lens
    let cols = 0;
    let rows = 0;

    const resizeCanvas = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      
      // Calculate how many columns and rows are needed to cover the screen
      cols = Math.ceil(canvas.width / SPACING) + 2; 
      rows = Math.ceil(canvas.height / SPACING) + 2;

      nodes = [];
      // Generate the strict mathematical grid
      for (let y = -1; y < rows; y++) {
        for (let x = -1; x < cols; x++) {
          nodes.push(new GridNode(x * SPACING, y * SPACING));
        }
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animateGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;

      // 1. Update all node positions based on mouse proximity
      nodes.forEach(node => node.update(mouse.x, mouse.y, DISTORTION_RADIUS));

      // 2. Draw Horizontal Grid Lines
      ctx.lineWidth = 1;
      for (let y = 0; y < rows + 1; y++) {
        ctx.beginPath();
        for (let x = 0; x < cols + 1; x++) {
          const node = nodes[y * (cols + 1) + x];
          if (!node) continue;
          
          if (x === 0) {
            ctx.moveTo(node.x, node.y);
          } else {
            ctx.lineTo(node.x, node.y);
          }
        }
        // Base faint gold stroke
        ctx.strokeStyle = `rgba(212, 175, 55, 0.25)`;
        ctx.stroke();
      }

      // 3. Draw Vertical Grid Lines
      for (let x = 0; x < cols + 1; x++) {
        ctx.beginPath();
        for (let y = 0; y < rows + 1; y++) {
          const node = nodes[y * (cols + 1) + x];
          if (!node) continue;

          if (y === 0) {
            ctx.moveTo(node.x, node.y);
          } else {
            ctx.lineTo(node.x, node.y);
          }
        }
        ctx.strokeStyle = `rgba(212, 175, 55, 0.25)`;
        ctx.stroke();
      }

      // 4. Draw the Glowing Intersections (The Magnetic Highlight)
      if (mouse.x !== null && mouse.y !== null) {
        nodes.forEach(node => {
          const dx = node.baseX - mouse.x!;
          const dy = node.baseY - mouse.y!;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // If the intersection is near the mouse, illuminate it
          if (dist < DISTORTION_RADIUS) {
            const glowIntensity = Math.pow((DISTORTION_RADIUS - dist) / DISTORTION_RADIUS, 2);
            
            ctx.beginPath();
            ctx.arc(node.x, node.y, 2 + glowIntensity * 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(212, 175, 55, ${glowIntensity * 0.8})`;
            ctx.fill();
          }
        });
      }

      animationFrameId = requestAnimationFrame(animateGrid);
    };

    animateGrid();

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
    // Gracefully snaps the grid back to perfect mathematical alignment
    mouseRef.current = { x: null, y: null };
  };

  const slideVariants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { 
      opacity: 0.45, 
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
      
      {/* 1. Image Slider at the back */}
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

      {/* 2. The Interactive Fisheye Blueprint Canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-10 pointer-events-none mix-blend-screen"
      />

      {/* 3. Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent z-20 pointer-events-none" />

      {/* 4. UI Elements */}
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
                  transition={{ duration: 4.5, ease: 'linear' }}
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
