// ✅ SERVER COMPONENT — SEO wrapper for Contact page
import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Areeb & Areel Corporation. Our executive team in Lahore is ready to connect for luxury real estate, architecture, energy infrastructure, and global consulting inquiries.',
  keywords: [
    'Contact Areeb Areel Corp',
    'Areeb Areel Lahore office',
    'Real estate inquiry Lahore',
    'Corporate consulting Pakistan',
    'Luxury property inquiry Pakistan',
  ],
  openGraph: {
    title: 'Contact Areeb & Areel Corporation',
    description:
      'Connect with our executive team in Lahore for real estate, architecture, energy, and consulting inquiries.',
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