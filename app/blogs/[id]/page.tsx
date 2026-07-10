

import type { Metadata } from 'next';
import { blogDatabase } from '@/data/data';
import BlogReaderContent from './BlogReaderContent';

// ─────────────────────────────────────────────
// generateMetadata runs ONCE per article on the server.
// It gives Google a unique title, description & OG image
// for /blogs/1, /blogs/2, /blogs/3, /blogs/4 etc.
// ─────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = blogDatabase.find((b) => b.id === id);

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'This article could not be found.',
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    keywords: [article.tag, 'Areeb Areel Corp', 'Corporate News Pakistan'],
    openGraph: {
      title: `${article.title} | Areeb & Areel Corp`,
      description: article.excerpt,
      url: `https://www.areebareel.pk/blogs/${article.id}`,
      type: 'article',
      images: [
        {
          url: article.src,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

// ─────────────────────────────────────────────
// The page itself just renders the client component.
// All hooks (useParams, useScroll, motion etc.) stay
// inside BlogReaderContent.tsx where 'use client' lives.
// ─────────────────────────────────────────────
export default function BlogReaderPage() {
  return <BlogReaderContent />;
}