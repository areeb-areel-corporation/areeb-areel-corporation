import type { Metadata } from 'next';
import AboutContent from './AboutContent';
import SignatureDevelopments from '@/ui/components/SignatureDevelopments';
import AboutCorporateSection from '@/ui/components/CorporateDivisions';
import StrategicScale from '@/ui/components/StrategicScale';
import CTA from './CTA';
import ClientTestimonials from '@/ui/components/ClientTestimonials';

export const metadata: Metadata = {
  title: 'About Areeb & Areel Corporation | Our Businesses and Vision',
  description:
    'Learn about Areeb & Areel Corporation, its real estate, architecture, construction, energy and advisory divisions, and its approach to responsible growth.',
  keywords: [
    'Areeb Areel Corporation',
    'Real estate development Lahore',
    'Architecture Lahore',
    'Construction services Lahore',
    'Energy services Pakistan',
    'Pakistan UAE business advisory',
  ],
  alternates: {
    canonical: 'https://www.areebareel.pk/about-us',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'About Areeb & Areel Corporation',
    description:
      'Learn about Areeb & Areel Corporation, its real estate, architecture, construction, energy and advisory divisions, and its approach to responsible growth.',
    url: 'https://www.areebareel.pk/about-us',
    type: 'website',
    images: [
      {
        url: 'https://www.areebareel.pk/images/AREEB AREEL LOGO BADGE.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

const page = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Areeb & Areel Corporation',
    url: 'https://www.areebareel.pk/about-us',
    description:
      'Areeb & Areel Corporation is a diversified business group creating practical value across real estate development, architecture, construction, energy services and corporate advisory.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Areeb & Areel Corporation',
      url: 'https://www.areebareel.pk',
      sameAs: [
        'https://www.linkedin.com/company/areeb-areel-corporation/',
        'https://www.facebook.com/areebareelcorp/',
        'https://www.instagram.com/areebareelfillingstation',
      ],
    },
  };

  return (
    <>
      <AboutContent />
      <SignatureDevelopments />
      <ClientTestimonials />
      <AboutCorporateSection />
      <StrategicScale />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CTA />
    </>
  );
};

export default page;
