'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Fuel, ShoppingBag, MapPin, Clock, CheckCircle2 } from 'lucide-react';

// Data for the two states of the flagship location
const stationData = {
  pump: {
    id: 'pump',
    title: 'Premium Fueling Station',
    subtitle: 'High-Efficiency Transit Hub',
    description: 'Engineered for the modern commuter. Our flagship station features high-speed, calibrated dispensers, premium fuel grades, and a meticulously maintained environment to get you back on the road safely and swiftly.',
    image: '/images/petrol pump.png',
    features: ['High-Speed Dispensers', 'Premium Fuel Grades', '24/7 Illumination & Security', 'Attendant Service'],
    icon: Fuel,
  },
  mart: {
    id: 'mart',
    title: 'Express Smart Mart',
    subtitle: 'Integrated Convenience',
    description: 'More than just a pit stop. Built directly into our fueling hub, the Smart Mart offers a curated retail experience featuring daily essentials, fresh refreshments, and premium snacks for your journey.',
    image: '/images/mart.png',
    features: ['Freshly Brewed Coffee', 'Everyday Grocery Essentials', 'Automotive Care Supplies', 'Cold Beverages & Snacks'],
    icon: ShoppingBag,
  }
};

export default function FlagshipStation() {
  const [activeTab, setActiveTab] = useState<'pump' | 'mart'>('pump');
  const currentData = stationData[activeTab];

  return (
    <section className="relative w-full bg-brand-black py-24 lg:py-32 overflow-hidden border-t border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* --- SECTION HEADER & TOGGLE --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em]">
                Retail Operations
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6">
              Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC]">Location.</span>
            </h2>
            
            {/* Location & Hours Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand-silver/80">
              <div className="flex items-center gap-2 bg-[#111] border border-white/10 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                Lahore, Pakistan
              </div>
              <div className="flex items-center gap-2 bg-[#111] border border-white/10 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                Open 24/7
              </div>
            </div>
          </div>

          {/* Premium Animated Toggle */}
          <div className="flex items-center bg-[#111] border border-white/10 rounded-full p-1.5 shrink-0 relative shadow-xl">
            {['pump', 'mart'].map((tab) => {
              const isActive = activeTab === tab;
              const Icon = stationData[tab as 'pump' | 'mart'].icon;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as 'pump' | 'mart')}
                  className={`relative flex items-center gap-2 px-6 md:px-8 py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest transition-colors duration-300 z-10 ${
                    isActive ? 'text-brand-black' : 'text-brand-silver/60 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab === 'pump' ? 'Fuel Station' : 'Smart Mart'}
                  
                  {/* The Sliding Gold Background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#F1E5AC] rounded-full -z-10 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* --- INTERACTIVE SHOWCASE DISPLAY --- */}
        <div className="relative w-full h-[600px] lg:h-[700px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#0a0a0a]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Massive Background Image */}
              <Image
                src={currentData.image}
                alt={currentData.title}
                fill
                priority
                className="object-cover opacity-60 mix-blend-screen"
              />
              
              {/* Heavy Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />

              {/* Content Block */}
              <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16 lg:p-24 max-w-3xl">
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h4 className="text-[#D4AF37] text-sm font-bold uppercase tracking-[0.2em] mb-4">
                    {currentData.subtitle}
                  </h4>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
                    {currentData.title}
                  </h3>
                  <p className="text-brand-silver/80 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
                    {currentData.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentData.features.map((feature, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                        className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                        <span className="text-white text-sm font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}