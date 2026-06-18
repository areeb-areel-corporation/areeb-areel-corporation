import AboutCorporate from './ui/components/AboutCorporate';
import Hero from './ui/components/Hero';
import CorporateDivisions from './ui/components/CorporateDivisions';
import SignatureDevelopments from './ui/components/SignatureDevelopments';
import ContactForm from './ui/components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black selection:bg-brand-gold selection:text-brand-black">
     
      <Hero />  
      <CorporateDivisions />
      <AboutCorporate />
      <SignatureDevelopments />
      <ContactFormgit  />
      
    </main>
  );
}   