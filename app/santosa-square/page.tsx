import type { Metadata } from 'next';
import SantosaContent from './SantosaContent';

export const metadata: Metadata = {
  title: 'Sentosa Square Lahore | Commercial Shops & Offices',
  description:
    'Explore shops and corporate offices at Sentosa Square, a commercial development on Multan Road near Thokar Niaz Baig, Lahore.',
  keywords: [
    'Sentosa Square Lahore',
    'Commercial shops Lahore',
    'Corporate offices Lahore',
    'Commercial development Lahore',
    'Multan Road commercial property',
    'Thokar Niaz Baig commercial property',
  ],
  openGraph: {
    title: 'Sentosa Square Lahore | Commercial Shops & Offices',
    description:
      'Explore shops and corporate offices at Sentosa Square, a commercial development on Multan Road near Thokar Niaz Baig, Lahore.',
    url: 'https://www.areebareel.pk/santosa-square',
    type: 'website',
    images: [
      {
        url: 'https://www.areebareel.pk/images/sentosa-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Sentosa Square Lahore commercial shops and offices',
      },
    ],
  },
};

export default function SantosaSquarePage() {
  return <SantosaContent />;
}
