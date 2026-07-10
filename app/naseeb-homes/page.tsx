import type { Metadata } from 'next';
import NaseebHomesContent from './NaseebHomesContent';

export const metadata: Metadata = {
  title: 'Naseeb Homes Lahore | 3.5 & 5 Marla Family Homes',
  description:
    'Explore contemporary 3.5 and 5 Marla homes at Naseeb Homes, designed for practical family living with modern layouts and structured payment options.',
  keywords: [
    'Naseeb Homes',
    'Naseeb Homes Lahore',
    '3.5 Marla homes Lahore',
    '5 Marla homes Lahore',
    'Family homes Lahore',
    'Areeb Areel housing',
  ],
  openGraph: {
    title: 'Naseeb Homes Lahore | 3.5 & 5 Marla Family Homes',
    description:
      'Explore contemporary 3.5 and 5 Marla homes at Naseeb Homes, designed for practical family living with modern layouts and structured payment options.',
    url: 'https://www.areebareel.pk/naseeb-homes',
    type: 'website',
    images: [
      {
        url: 'https://www.areebareel.pk/images/housing-society.png',
        width: 1200,
        height: 630,
        alt: 'Naseeb Homes Lahore',
      },
    ],
  },
};

export default function NaseebHomesPage() {
  return <NaseebHomesContent />;
}
