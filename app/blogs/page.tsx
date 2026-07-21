// ✅ SERVER COMPONENT — No "use client" here
// This file handles SEO metadata. Google reads this.
// The actual UI/animations live in BlogsContent.tsx (which has 'use client')

import type { Metadata } from 'next';
import BlogsContent from './BlogsContent';

export const metadata: Metadata = {
  title: 'Corporate Newsroom',
  description:
    'Official publications, market insights, and corporate updates from Areeb Areel Corporation across real estate, architecture, construction, energy services and business advisory.',
  keywords: [
    'Areeb Areel Blog',
    'Real Estate News Pakistan',
    'Luxury Real Estate Lahore',
    'Corporate Announcements',
    'Sentosa Square News',
  ],
  openGraph: {
    title: 'Corporate Newsroom | Areeb Areel Corp',
    description:
      'Market insights, real estate updates, and corporate updates from Areeb Areel Corporation.',
    url: 'https://www.areebareel.pk/blogs',
    type: 'website',
  },
};

export default function BlogsPage() {
  // This server component renders BlogsContent on the SERVER first.
  // Google crawls the fully rendered HTML.
  // Then the browser loads JS and all animations/interactions activate.
  return <BlogsContent />;
}
