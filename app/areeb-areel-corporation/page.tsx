import type { Metadata } from 'next';
import ArchitectureContent from './ArchitectureContent';

export const metadata: Metadata = {
  title: 'Architecture, Interior Design & Construction in Lahore',
  description:
    'Explore architectural drawings, floor plans, 3D visualization, interior design and turnkey construction services from Areeb & Areel Corporation.',
  keywords: [
    'Architecture Lahore',
    'Interior design Lahore',
    'Construction services Lahore',
    'Architectural drawings Lahore',
    '3D visualization Lahore',
    'Areeb Areel architecture',
  ],
  openGraph: {
    title: 'Architecture, Interior Design & Construction in Lahore',
    description:
      'Explore architectural drawings, floor plans, 3D visualization, interior design and turnkey construction services from Areeb & Areel Corporation.',
    url: 'https://www.areebareel.pk/architecture',
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

export default function ArchitecturePage() {
  return <ArchitectureContent />;
}
