import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import Main from './Main'

export const metadata = genPageMetadata({
  title: 'Tonative',
  description:
    'Tonative trains African data curators, creates custom language datasets, and builds AI tools to include African languages in the future of artificial intelligence.',
  keywords: [
    'African language datasets',
    'AI data curation Africa',
    'NLP African languages',
    'African language AI',
    'low-resource language data',
    'African NLP datasets',
    'data curator Africa',
    'language dataset marketplace',
    'inclusive AI Africa',
  ],
})

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
