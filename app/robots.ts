// app/robots.ts
// This auto-generates https://www.areebareel.pk/robots.txt
// Tells Google what to crawl and where the sitemap is.

import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],  // Don't waste Google crawl budget on API routes
      },
    ],
    sitemap: 'https://www.areebareel.pk/sitemap.xml',
  };
}
