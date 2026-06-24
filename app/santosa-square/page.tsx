// ✅ SERVER COMPONENT — SEO wrapper for Sentosa Square page
import type { Metadata } from 'next';
import SantosaContent from './SantosaContent';

export const metadata: Metadata = {
  title: 'Sentosa Square — Ultra-Luxury Commercial Hub Lahore',
  description:
    'Sentosa Square by Areeb & Areel Corporation — Lahore\'s most premium commercial development featuring hydraulic capsule lifts, rooftop food court, 24/7 security, and world-class business spaces.',
  keywords: [
    'Sentosa Square Lahore',
    'Sentosa Square commercial plaza',
    'Luxury commercial real estate Lahore',
    'Commercial plaza Lahore',
    'Office space Lahore',
    'Areeb Areel Sentosa Square',
    'Premium commercial property Pakistan',
    'Business hub Lahore 2026',
  ],
  openGraph: {
    title: 'Sentosa Square — Ultra-Luxury Commercial Hub | Areeb & Areel Corp',
    description:
      'Sentosa Square — Lahore\'s most premium commercial development with capsule lifts, rooftop dining, and 24/7 security by Areeb & Areel Corp.',
    url: 'https://www.areebareel.pk/santosa-square',
    type: 'website',
    images: [
      {
        url: 'https://www.areebareel.pk/images/sentosa-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Sentosa Square Luxury Commercial Plaza Lahore',
      },
    ],
  },
};

export default function SantosaSquarePage() {
  return <SantosaContent />;
}