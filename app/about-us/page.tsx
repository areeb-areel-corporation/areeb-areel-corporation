import type { Metadata } from 'next';
import AboutContent from './AboutContent';
import SignatureDevelopments from '@/ui/components/SignatureDevelopments';
import AboutCorporateSection from '@/ui/components/CorporateDivisions';
import StrategicScale from '@/ui/components/StrategicScale';
import CTA from './CTA';

export const metadata: Metadata = {
  title: 'About Areeb & Areel Corporation | Luxury Real Estate, Energy & Consulting',
  description:
    'Discover Areeb & Areel Corporation’s legacy in ultra-luxury real estate, energy transit, architecture, and strategic consulting across Lahore and Dubai.',
  keywords: [
    'Areeb Areel Corporation',
    'Luxury real estate Lahore',
    'Energy transit Pakistan',
    'Corporate consulting Pakistan',
    'Sentosa Square Lahore',
    'Naseeb Homes Lahore',
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
      'Areeb & Areel Corporation builds benchmark-setting developments, energy infrastructure, and strategic advisory services in Pakistan and the UAE.',
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
      'Areeb & Areel Corporation is a diversified conglomerate focused on ultra-luxury real estate, energy transit, and strategic corporate consulting.',
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

export default page