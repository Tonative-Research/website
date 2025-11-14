'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
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
  const basePath = pathname
    .replace(/^\//, '')
    .replace(/\/page\/\d+\/?$/, '')
    .replace(/\/$/, '')
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages)
      }
    }
    return pages
  }

  return (
    <div className="mt-12 flex justify-center">
      <nav className="flex items-center gap-2">
        <button
          onClick={() =>
            prevPage &&
            (window.location.href =
              currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`)
          }
          disabled={!prevPage}
          className="rounded-full p-2 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-gray-700"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {getPageNumbers().map((page, index) =>
          typeof page === 'number' ? (
            <Link
              key={index}
              href={page === 1 ? `/${basePath}/` : `/${basePath}/page/${page}`}
              className={`rounded-lg px-4 py-2 text-sm font-bold transition-colors ${
                page === currentPage
                  ? 'bg-primary-700 dark:bg-primary-600 text-white'
                  : 'text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {page}
            </Link>
          ) : (
            <span key={index} className="px-2 py-2 text-sm font-medium text-gray-500">
              {page}
            </span>
          )
        )}

        <button
          onClick={() =>
            nextPage && (window.location.href = `/${basePath}/page/${currentPage + 1}`)
          }
          disabled={!nextPage}
          className="rounded-full p-2 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-gray-700"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
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
  const [showTopicFilter, setShowTopicFilter] = useState(false)
  const [showAuthorFilter, setShowAuthorFilter] = useState(false)
  const [showSortFilter, setShowSortFilter] = useState(false)

  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <main className="flex-1 bg-gray-50 px-4 py-8 md:py-12 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-8 flex flex-wrap justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h1>
            <p className="text-base font-normal text-gray-600 dark:text-gray-400">
              Explore our latest publications and articles on language technology and cultural AI.
            </p>
          </div>
        </div>
        <div className="mb-8 border-b border-gray-200 pb-6"></div>

        {/* Filter Buttons */}
        {/* <div className="mb-8 flex flex-wrap gap-3 border-b border-gray-200 pb-6 dark:border-gray-700">
          <button
            onClick={() => setShowTopicFilter(!showTopicFilter)}
            className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary-700/10 px-4 transition-colors hover:bg-primary-700/20 dark:bg-primary-600/20 dark:hover:bg-primary-600/30"
          >
            <p className="text-sm font-medium text-primary-700 dark:text-primary-400">Filter by Topic</p>
            <svg
              className="h-4 w-4 text-primary-700 dark:text-primary-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => setShowAuthorFilter(!showAuthorFilter)}
            className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-200 px-4 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter by Author</p>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => setShowSortFilter(!showSortFilter)}
            className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-200 px-4 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Sort by Date</p>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div> */}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {displayPosts.map((post) => {
            const { path, date, title, summary, tags, images } = post
            const imageUrl =
              images?.[0] || 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=600'

            return (
              <article
                key={path}
                className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800"
              >
                {/* Image */}
                <Link href={`/${path}`} className="block">
                  <div
                    className="aspect-video w-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${imageUrl}')` }}
                  />
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-1 flex-col gap-2">
                    {/* Tags */}
                    {tags && tags.length > 0 && (
                      <p className="text-primary-600 dark:text-primary-400 text-xs font-medium tracking-wider uppercase">
                        {tags[0]}
                      </p>
                    )}

                    {/* Title */}
                    <Link href={`/${path}`} className="block">
                      <h3 className="font-display hover:text-primary-600 dark:hover:text-primary-400 text-xl leading-tight font-bold text-gray-900 transition-colors dark:text-white">
                        {title}
                      </h3>
                    </Link>

                    {/* Date */}
                    <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                      Published on {formatDate(date, siteMetadata.locale)}
                    </p>

                    {/* Summary */}
                    <p className="mt-2 flex-1 text-sm leading-relaxed font-normal text-gray-700 dark:text-gray-300">
                      {summary}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/${path}`}
                    className="group text-primary-600 dark:text-primary-400 mt-4 inline-flex w-fit items-center gap-2 text-sm leading-normal font-bold"
                  >
                    <span>Read More</span>
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        {/* Pagination */}
        {pagination && pagination.totalPages > 1 && (
          <Pagination totalPages={pagination.totalPages} currentPage={pagination.currentPage} />
        )}
      </div>
    </main>
  )
}
