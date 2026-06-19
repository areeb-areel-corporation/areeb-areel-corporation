import AboutCorporate from './ui/components/AboutCorporate';
import Hero from './ui/components/Hero';
import CorporateDivisions from './ui/components/CorporateDivisions';
import SignatureDevelopments from './ui/components/SignatureDevelopments';
import CorporateInquiry from './ui/components/CorporateInquiry';
import StrategicScale from './ui/components/StrategicScale';
import CorporateTeam from './ui/components/CorporateTeam';
import CorporateInsights from './ui/components/CorporateInsights';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black selection:bg-brand-gold selection:text-brand-black">
     
      <Hero />  
      <CorporateDivisions />
      <AboutCorporate />
      <SignatureDevelopments />
      <StrategicScale />
      <CorporateTeam />
      <CorporateInsights />
      <CorporateInquiry  />
      
    </main>
  );
}   