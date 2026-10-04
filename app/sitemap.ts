import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/research/${post.slug}`,
      lastModified: post.lastmod || post.date,
      changeFrequency: 'monthly' as const, // Fixed with 'as const'
    }))

  const routes = ['', 'research', 'projects', 'tags'].map((route) => ({
    url: `${siteUrl}${route.startsWith('/') ? '' : '/'}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily' as const, // Fixed with 'as const'
  }))

  return [...routes, ...blogRoutes]
}
