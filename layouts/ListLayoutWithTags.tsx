'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const segments = pathname.split('/')
  const lastSegment = segments[segments.length - 1]
  const basePath = pathname
    .replace(/^\//, '') // Remove leading slash
    .replace(/\/page\/\d+\/?$/, '') // Remove any trailing /page
    .replace(/\/$/, '') // Remove trailing slash
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <>
      <div>
        <div className="pt-6 pb-6">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            {title}
          </h1>
        </div>
        <body className="bg-background-light dark:bg-background-dark font-body text-text-light dark:text-text-dark">
          <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <div className="flex h-full flex-col">
              {/* Header */}
              <header className="flex items-center justify-between border-b border-gray-200 px-4 py-3 whitespace-nowrap md:px-10 lg:px-20 xl:px-40 dark:border-gray-700">
                <div className="text-primary flex items-center gap-4 dark:text-white">
                  <div className="size-6">
                    <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
                    </svg>
                  </div>
                  <h2 className="font-display text-primary text-xl font-bold tracking-tight dark:text-white">
                    Tonative
                  </h2>
                </div>

                <div className="hidden flex-1 justify-end gap-8 md:flex">
                  <div className="flex items-center gap-9">
                    <Link
                      href="/home"
                      className="hover:text-accent dark:hover:text-accent text-sm font-medium"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="hover:text-accent dark:hover:text-accent text-sm font-medium"
                    >
                      About
                    </Link>
                    <Link href="/research" className="text-accent text-sm font-medium">
                      Research
                    </Link>
                    <Link
                      href="/contact"
                      className="hover:text-accent dark:hover:text-accent text-sm font-medium"
                    >
                      Contact
                    </Link>
                  </div>

                  <button className="bg-primary hover:bg-opacity-90 flex h-10 items-center justify-center rounded-lg px-4 text-sm font-bold text-white">
                    <span className="truncate">Get a demo</span>
                  </button>
                </div>

                <button className="rounded-lg p-2 hover:bg-gray-100 md:hidden dark:hover:bg-gray-800">
                  <span className="material-symbols-outlined">menu</span>
                </button>
              </header>

              {/* Main */}
              <main className="flex-1 px-4 py-8 md:py-12">
                {/* Page heading */}
                <div className="mb-8 flex flex-wrap justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <p className="font-display text-primary text-4xl font-bold tracking-tight dark:text-white">
                      Research &amp; Insights
                    </p>
                    <p className="text-subtle-light dark:text-subtle-dark text-base font-normal">
                      Explore our latest publications and articles on language technology and
                      cultural AI.
                    </p>
                  </div>
                </div>

                {/* Filters */}
                <div className="mb-8 flex flex-wrap gap-3 border-b border-gray-200 p-3 dark:border-gray-700">
                  {[
                    { label: 'Filter by Topic', active: true },
                    { label: 'Filter by Author', active: false },
                    { label: 'Sort by Date', active: false },
                  ].map(({ label, active }) => (
                    <button
                      key={label}
                      className={`group flex h-9 items-center gap-2 rounded-full px-4 ${
                        active
                          ? 'bg-primary/10 dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 text-primary dark:text-white'
                          : 'text-text-light dark:text-text-dark bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
                      }`}
                    >
                      <p className="text-sm font-medium">{label}</p>
                      <span className="material-symbols-outlined text-base">expand_more</span>
                    </button>
                  ))}
                </div>

                {/* Articles grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {[
                    {
                      tag: 'NLP',
                      title: 'The Phonological Nuances of [Language Name] in Modern AI',
                      author: 'Dr. Anya Sharma',
                      date: 'June 15, 2024',
                      desc: 'This paper explores the challenges and breakthroughs in accurately representing the tonal qualities of indigenous languages within machine learning models...',
                      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALKO9M3hwJjweHOK2ykrAh_vHT3LE0rWrIFWMjTrn4slodHz5ZvRcjBSvdIB0hcI0MLSTeU9NQ7tOXsGtV7MZfegXNuyehpYbDE18r4WhdRZFbdqciT8W-wUdDkExxTHCSmIdjuOiwG_EeEwYczWAkVKG0UWBXKPczXw4AuBTX1YKfEqWSgeKnB6E3u2eFTAD_c1BZkb00Ea-RvCl7Dtc4dkMIicgLweFowHLa45znlexNoK8mNCywyuLjmAgYkX4w5OYQlOOrNvA',
                    },
                    {
                      tag: 'Enterprise Solutions',
                      title: 'Computational Linguistics and Enterprise Solutions',
                      author: 'Dr. Ben Carter',
                      date: 'May 20, 2024',
                      desc: 'Discover how computational linguistics is revolutionizing enterprise-level communication and data analysis.',
                      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADeRJ9SUKevrzfqtMWcSWS1Gcjq0DHQG-id62QGwE-66S_-GGWf2BJkBlpDUXJwAu0fw07N8t5atdVZruXm6bzdxoDVgAeIQX8V4igjrX1gtWiBqFVCcH7DhILkNjX5OLgXc_B-m6E2Y1y64vAe2JMTB3dd_s1fWj8HfUWXFuWSI5VbFrNe1oIZaAKrC4u-3WwZC4BzRbi1i-OS81mM3NdI0nB9-WaNo3E4wVekMqIUA2pFMr_RnLfDA46ZEcYGDYDMuo-D4b654U',
                    },
                  ].map(({ tag, title, author, date, desc, img }) => (
                    <div
                      key={title}
                      className="dark:bg-background-dark flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
                    >
                      <div
                        className="aspect-video w-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${img})` }}
                        aria-label={title}
                      />
                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex flex-1 flex-col gap-2">
                          <p className="text-subtle-light dark:text-subtle-dark text-xs font-medium tracking-wider uppercase">
                            {tag}
                          </p>
                          <h3 className="font-display text-primary text-xl leading-tight font-bold dark:text-white">
                            {title}
                          </h3>
                          <p className="text-subtle-light dark:text-subtle-dark text-sm leading-relaxed font-normal">
                            By {author} | Published on {date}
                          </p>
                          <p className="mt-2 flex-1 text-sm leading-relaxed">{desc}</p>
                        </div>
                        <Link
                          href="/read-full-paper"
                          className="group text-accent mt-4 inline-flex w-fit items-center gap-2 text-sm font-bold"
                        >
                          <span>Read Full Paper</span>
                          <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">
                            arrow_forward
                          </span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex justify-center">
                  <nav className="flex items-center gap-4">
                    <button
                      className="rounded-full p-2 hover:bg-gray-200 disabled:opacity-50 dark:hover:bg-gray-700"
                      disabled
                    >
                      <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <Link
                      href="/1"
                      className="bg-primary rounded-lg px-4 py-2 text-sm font-bold text-white"
                    >
                      1
                    </Link>
                    <Link
                      href="/2"
                      className="rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      2
                    </Link>
                    <Link
                      href="/3"
                      className="rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      3
                    </Link>
                    <span className="px-2 py-2 text-sm font-medium">...</span>
                    <Link
                      href="8"
                      className="rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      8
                    </Link>
                    <button className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                      <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                  </nav>
                </div>
              </main>

              {/* Footer */}
              <footer className="mt-12 border-t border-gray-200 px-4 py-8 dark:border-gray-700">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
                  <div className="flex items-center gap-2">
                    <div className="text-primary size-5 dark:text-white">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
                      </svg>
                    </div>
                    <p className="text-subtle-light dark:text-subtle-dark text-sm">
                      © 2024 Tonative. All rights reserved.
                    </p>
                  </div>
                  <div className="text-subtle-light dark:text-subtle-dark flex gap-6">
                    <Link
                      href="/privacy-policy"
                      className="hover:text-accent dark:hover:text-accent"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="/terms-of-service"
                      className="hover:text-accent dark:hover:text-accent"
                    >
                      Terms of Service
                    </Link>
                    <Link href="/contact" className="hover:text-accent dark:hover:text-accent">
                      Contact
                    </Link>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </body>
        <div className="flex sm:space-x-24">
          <div className="hidden h-full max-h-screen max-w-[280px] min-w-[280px] flex-wrap overflow-auto rounded-sm bg-gray-50 pt-5 shadow-md sm:flex dark:bg-gray-900/70 dark:shadow-gray-800/40">
            <div className="px-6 py-4">
              {pathname.startsWith('/blog') ? (
                <h3 className="text-primary-500 font-bold uppercase">All Posts</h3>
              ) : (
                <Link
                  href={`/blog`}
                  className="hover:text-primary-500 dark:hover:text-primary-500 font-bold text-gray-700 uppercase dark:text-gray-300"
                >
                  All Posts
                </Link>
              )}
              <ul>
                {sortedTags.map((t) => {
                  return (
                    <li key={t} className="my-3">
                      {decodeURI(pathname.split('/tags/')[1]) === slug(t) ? (
                        <h3 className="text-primary-500 inline px-3 py-2 text-sm font-bold uppercase">
                          {`${t} (${tagCounts[t]})`}
                        </h3>
                      ) : (
                        <Link
                          href={`/tags/${slug(t)}`}
                          className="hover:text-primary-500 dark:hover:text-primary-500 px-3 py-2 text-sm font-medium text-gray-500 uppercase dark:text-gray-300"
                          aria-label={`View posts tagged ${t}`}
                        >
                          {`${t} (${tagCounts[t]})`}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div>
            <ul>
              {displayPosts.map((post) => {
                const { path, date, title, summary, tags } = post
                return (
                  <li key={path} className="py-5">
                    <article className="flex flex-col space-y-2 xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                          <time dateTime={date} suppressHydrationWarning>
                            {formatDate(date, siteMetadata.locale)}
                          </time>
                        </dd>
                      </dl>
                      <div className="space-y-3">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link href={`/${path}`} className="text-gray-900 dark:text-gray-100">
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                    </article>
                  </li>
                )
              })}
            </ul>
            {pagination && pagination.totalPages > 1 && (
              <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
