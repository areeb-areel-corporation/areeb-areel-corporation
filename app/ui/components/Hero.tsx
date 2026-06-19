'use client';
import Image from 'next/image';
import { useComingSoon } from '../context/ComingSoonContext';

export default function Hero() {
  const { showComingSoon } = useComingSoon();
  return (
    <section className="relative w-full h-screen overflow-hidden bg-brand-black flex items-center justify-center">
      
      {/* 1. The Background Video Element */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40 select-none pointer-events-none"
      >
        <source src="/vedios/areeb-areel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 2. Premium Vignette Overlay (Darkens edges to look professional) */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/80 z-10" />

      {/* 3. The Interactive Content Layer */}
      <div className="relative z-20 max-w-5xl mx-auto text-center px-4 flex flex-col items-center space-y-8">
        
        {/* Crisp Logo Overlay from public folder */}
        <div className="w-32 h-32 md:w-40 md:h-40 relative animate-fade-in">
          <Image 
            src="/images/AREEB AREEL LOGO-01.png" 
            alt="Areeb & Areel Badge"
            fill
            priority
            className="object-contain filter drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          />
        </div>

        {/* Corporate Typography */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-wider text-white">
            AREEB & AREEL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-200 to-brand-gold">
              CORPORATION
            </span>
          </h1>
          <p className="text-brand-silver/80 text-sm md:text-lg max-w-5xl mx-auto tracking-widest uppercase font-medium">
   Housing Society • Infrastructure • Energy Networks • Retail Marts
</p>
        </div>

        {/* Call to Actions */}
       <div className="flex flex-col sm:flex-row gap-4 pt-4">
  {/* Primary Action: Scroll to Divisions */}
  <button 
    onClick={() => {
      const target = document.getElementById('corporate-divisions');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }} 
    className="cursor-pointer group text-brand-black font-bold px-8 py-4 rounded-md tracking-wider uppercase bg-[#D4AF37] transition-allshadow-lg shadow-[#D4AF37]/20 text-sm flex items-center justify-center gap-2"
  >
    Explore Sectors
  </button>

 <button 
  onClick={() => {
    const target = document.getElementById('contact');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }} 
  className="cursor-pointer relative overflow-hidden group border border-white/20 bg-white/5 font-bold px-8 py-4 rounded-md tracking-wider uppercase transition-all duration-500 text-sm backdrop-blur-sm flex items-center justify-center"
>
  <div className="absolute inset-0 bg-[#D4AF37] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
  
  <span className="relative z-10 text-white group-hover:text-brand-black transition-colors duration-500">
    Initiate Dialogue
  </span>
</button>
</div>

      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent" />
      </div>

    </section>
  );
}