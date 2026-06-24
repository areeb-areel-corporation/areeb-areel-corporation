// app/sitemap.ts
// This auto-generates https://www.areebareel.pk/sitemap.xml
// Submit this URL in Google Search Console to get all pages indexed fast.

import type { MetadataRoute } from 'next';
import { blogDatabase } from '@/data/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.areebareel.pk';

  // All static pages — ordered by priority
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      priority: 1.0,
      changeFrequency: 'monthly',
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blogs`,
      priority: 0.9,
      changeFrequency: 'weekly',
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/santosa-square`,
      priority: 0.85,
      changeFrequency: 'monthly',
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/naseeb-homes`,
      priority: 0.85,
      changeFrequency: 'monthly',
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/filling-station`,
      priority: 0.8,
      changeFrequency: 'monthly',
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/architecture`,
      priority: 0.8,
      changeFrequency: 'monthly',
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.7,
      changeFrequency: 'yearly',
      lastModified: new Date(),
    },
  ];

  // Dynamic blog article pages — auto-generated from blogDatabase
  // Add a new entry to data.ts and it automatically appears in the sitemap
  const blogPages: MetadataRoute.Sitemap = blogDatabase.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.id}`,
    priority: 0.75,
    changeFrequency: 'never' as const,
    lastModified: new Date(blog.date),
  }));

  return [...staticPages, ...blogPages];
}
