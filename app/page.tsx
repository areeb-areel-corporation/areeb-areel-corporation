import AboutCorporate from './ui/components/AboutCorporate';
import Hero from './ui/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black selection:bg-brand-gold selection:text-brand-black">
     
      <Hero />
      
      <AboutCorporate />
      
    </main>
  );
}