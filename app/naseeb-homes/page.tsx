// ✅ SERVER COMPONENT — SEO wrapper for Naseeb Homes page
import type { Metadata } from 'next';
import NaseebHomesContent from './NaseebHomesContent';

export const metadata: Metadata = {
  title: 'Naseeb Homes — Affordable Housing Society Lahore',
  description:
    'Naseeb Homes by Areeb & Areel Corporation — an affordable, community-centered residential housing society in Lahore, Pakistan. Secure investment, modern infrastructure, and a quality lifestyle.',
  keywords: [
    'Naseeb Homes',
    'Naseeb Homes Lahore',
    'Affordable housing Lahore',
    'Residential society Pakistan',
    'Housing scheme Lahore',
    'Areeb Areel housing',
    'New housing society Lahore 2026',
  ],
  openGraph: {
    title: 'Naseeb Homes — Affordable Housing Society | Areeb & Areel Corp',
    description:
      'Naseeb Homes — affordable, community-centered residential housing in Lahore by Areeb & Areel Corporation.',
    url: 'https://www.areebareel.pk/naseeb-homes',
    type: 'website',
    images: [
      {
        url: 'https://www.areebareel.pk/images/housing-society.png',
        width: 1200,
        height: 630,
        alt: 'Naseeb Homes Housing Society Lahore',
      },
    ],
  },
};

export default function NaseebHomesPage() {
  return <NaseebHomesContent />;
}