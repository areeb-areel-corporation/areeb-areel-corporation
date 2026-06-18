import AboutCorporate from './ui/components/AboutCorporate';
import Hero from './ui/components/Hero';
import CorporateDivisions from './ui/components/CorporateDivisions';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black selection:bg-brand-gold selection:text-brand-black">
     
      <Hero />  
      <CorporateDivisions />
      <AboutCorporate />
      
    </main>
  );
}   