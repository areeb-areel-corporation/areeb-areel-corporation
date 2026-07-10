import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Areeb & Areel Corporation',
  description:
    'Contact Areeb & Areel Corporation for real estate, architecture, construction, energy services and Pakistan-UAE business advisory enquiries.',
  keywords: [
    'Contact Areeb Areel Corp',
    'Areeb Areel Lahore office',
    'Real estate inquiry Lahore',
    'Architecture services Lahore',
    'Pakistan UAE business advisory',
  ],
  openGraph: {
    title: 'Contact Areeb & Areel Corporation',
    description:
      'Contact Areeb & Areel Corporation for real estate, architecture, construction, energy services and Pakistan-UAE business advisory enquiries.',
    url: 'https://www.areebareel.pk/contact',
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

export default function ContactPage() {
  return <ContactContent />;
}
