'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Target, ShieldCheck, Globe } from 'lucide-react'; // Ensure lucide-react is installed

const stats = [
  { id: 1, value: '15+', label: 'Years of Excellence' },
  { id: 2, value: '250+', label: 'Acres Developed' },
  { id: 3, value: '40+', label: 'Energy Hubs Live' },
];

const features = [
  { icon: Globe, title: 'Regional Scale', desc: 'Transforming landscapes across Punjab.' },
  { icon: Target, title: 'Precision Engineering', desc: 'Flawless execution from blueprint to reality.' },
  { icon: ShieldCheck, title: 'Legacy of Trust', desc: 'Decades of secure, high-yield investments.' },
];

export default function AboutCorporate() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative w-full bg-brand-black py-24 lg:py-36 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* --- LEFT: Corporate Typography & Copy --- */}
          <div className="space-y-10">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-[1px] bg-brand-gold" />
                <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.3em]">
                  Corporate Legacy
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                Architecting the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-600">
                  Future of Pakistan
                </span>
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-brand-silver/70 text-lg leading-relaxed max-w-xl">
              Areeb & Areel Corporation stands at the vanguard of industrial, retail, and residential development. By merging architectural brilliance with massive operational scale, we engineer ecosystems that redefine luxury living and commercial utility.
            </motion.p>

            {/* Micro Features */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="space-y-2">
                    <Icon className="w-6 h-6 text-brand-gold" />
                    <h4 className="text-white text-sm font-bold tracking-wider uppercase">{feature.title}</h4>
                    <p className="text-brand-silver/50 text-xs leading-relaxed">{feature.desc}</p>
                  </div>
                );
              })}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-6">
              <button className="group flex items-center gap-4 bg-transparent border border-brand-gold/30 text-white px-8 py-4 rounded-md uppercase tracking-widest text-xs font-bold hover:bg-brand-gold hover:text-brand-black transition-all duration-300">
                Read Full Manifesto
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>

          {/* --- RIGHT: Abstract Corporate Visual & Stats --- */}
          <motion.div variants={imageVariants} className="relative h-full min-h-[500px] lg:min-h-[700px] w-full rounded-2xl overflow-hidden border border-white/5">
            {/* DEVELOPER NOTE: Replace '/about-corporate.jpg' with a high-res image of a 
              sleek building, a corporate boardroom, or abstract architectural lines. 
            */}
            <Image 
              src="/images/petrol pump.png" 
              alt="Areeb & Areel Operations"
              fill
              className="object-cover opacity-60 filter grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />

            {/* Floating Stats Panel */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
              <div className="grid grid-cols-3 gap-4 p-6 bg-brand-slate/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl">
                {stats.map((stat) => (
                  <div key={stat.id} className="text-center space-y-1">
                    <p className="text-2xl md:text-3xl font-black text-brand-gold">{stat.value}</p>
                    <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-brand-silver font-semibold">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}