// ✅ SERVER COMPONENT — SEO wrapper for Filling Station / Energy Division page
import type { Metadata } from 'next';
import FillingStationContent from './FillingStationContent';

export const metadata: Metadata = {
  title: 'AAA Energy Transit — Filling Station & Smart Mart Lahore',
  description:
    'Areeb & Areel Corporation\'s AAA Energy Transit Division — premium CNG/petrol filling stations, Express Smart Mart convenience stores, and professional tyre & auto services on Multan Road, Lahore.',
  keywords: [
    'Filling station Lahore',
    'Petrol pump Lahore Multan Road',
    'CNG station Lahore',
    'AAA filling station',
    'Areeb Areel filling station',
    'Smart Mart Lahore',
    'Tyre shop Lahore',
    'Auto service Lahore',
    'Energy transit Pakistan',
    'Fuel station Thokar Niaz Baig',
  ],
  openGraph: {
    title: 'AAA Energy Transit — Filling Station | Areeb & Areel Corp',
    description:
      'Premium filling station, Smart Mart, and auto services on Multan Road Lahore by Areeb & Areel Corporation.',
    url: 'https://www.areebareel.pk/filling-station',
    type: 'website',
    images: [
      {
        url: 'https://www.areebareel.pk/images/filling-station.jpg',
        width: 1200,
        height: 630,
        alt: 'AAA Filling Station Lahore',
      },
    ],
  },
};

export default function FillingStationPage() {
  return <FillingStationContent />;
}
