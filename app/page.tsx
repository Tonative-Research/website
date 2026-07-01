import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import Main from './Main'

export const metadata = genPageMetadata({
  title: 'Tonative',
  description:
    'Tonative is an African AI data company. We build expert-curated language datasets and domain-specific training data that help AI models work accurately across African languages and contexts.',
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
