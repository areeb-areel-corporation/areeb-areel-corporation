import type { Metadata } from 'next';
import ArchitectureContent from './ArchitectureContent';

export const metadata: Metadata = {
  title: 'Architecture & Design Division',
  description:
    'Areeb & Areel Corporation offers world-class architectural drawings, 3D visualizations, premium interior design, and turnkey construction services in Lahore, Pakistan.',
  keywords: [
    'Architecture firm Lahore',
    'Interior Design Lahore',
    'Turnkey Construction Pakistan',
    'Architectural drawings Pakistan',
    '3D visualization Lahore',
    'Areeb Areel Architecture',
  ],
  openGraph: {
    title: 'Architecture & Design Division | Areeb & Areel Corp',
    description:
      'From architectural drawings to premium interiors and turnkey construction — Areeb & Areel Corp builds legacies in Lahore.',
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
