import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import ListLayout from '@/layouts/ListLayoutWithTags'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({
  title: 'Research',
  description:
    'Research papers and publications from Tonative, including work presented at NeurIPS 2025 and contributions to African language benchmarks and evaluation frameworks.',
  keywords: [
    'African language research publications',
    'NLP research papers Africa',
    'African AI research',
    'low-resource NLP papers',
    'African language benchmarks',
    'commonsense reasoning Africa',
    'Tonative research',
    'African language dataset papers',
  ],
})

export default async function BlogPage(props: { searchParams: Promise<{ page: string }> }) {
  const posts = allCoreContent(sortPosts(allBlogs))
  const pageNumber = 1
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber)
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}
