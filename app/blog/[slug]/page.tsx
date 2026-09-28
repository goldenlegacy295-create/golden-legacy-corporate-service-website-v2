import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-data';
import BlogPostClient from '@/components/blog/BlogPostClient';

// This is required for static export
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Golden Legacy',
    };
  }
  
  const siteUrl = 'https://www.goldenlegacy.ae';
  const url = `${siteUrl}/blog/${post.slug}`;
  const keywords = post.keywords || ['Business Setup', 'Dubai', 'UAE'];
  
  return {
    title: post.title,
    description: post.excerpt,
    keywords: keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: url,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author || 'Golden Legacy'],
      images: [
        {
          url: `${siteUrl}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`${siteUrl}${post.image}`],
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  // Adding JSON-LD structured data for the article
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: `https://www.goldenlegacy.ae${post.image}`,
    author: {
      '@type': 'Organization',
      name: post.author || 'Golden Legacy',
      url: 'https://www.goldenlegacy.ae'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Golden Legacy Corporate Services',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.goldenlegacy.ae/logo.png'
      }
    },
    datePublished: new Date(post.date).toISOString(),
    description: post.excerpt
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostClient post={post} />
    </>
  );
}
