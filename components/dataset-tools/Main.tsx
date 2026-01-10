'use client'
import { useState } from 'react'
import ContactUs from 'components/ContactUs'
import siteMetadata from 'data/siteMetadata'

export default function DatasetToolsMain() {
  const [activeFilter, setActiveFilter] = useState('All')

  const datasets = [
    {
      name: 'Swahili Dataset',
      access: {
        label: 'Request for Access',
        color: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
      },
      validation: 'Peer-Reviewed',
      size: '10 GB',
      language: 'Swahili',
      action: { label: 'Download', href: '#' },
    },
    {
      name: 'Igbo Dataset',
      access: {
        label: 'Request for Access',
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
      },
      validation: 'Community-Validated',
      size: '500 MB',
      language: 'Igbo',
      action: { label: 'Learn More', href: '#' },
    },
    {
      name: 'Hausa Dataset',
      access: {
        label: 'Request for Access',
        color: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
      },
      validation: 'Community-Validated',
      size: '2 GB',
      language: 'Hausa',
      action: { label: 'Download', href: '#' },
    },
    {
      name: 'Luo Dataset',
      access: {
        label: 'Request for Access',
        color: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
      },
      validation: 'Community-Validated',
      size: '500 MB',
      language: 'Luo',
      action: { label: 'Learn More', href: '#' },
    },
  ]

  const filters = ['All', 'Open-Sourced', 'Request for Access', 'Community-Validated']

  return (
    <main className="flex-1 bg-gray-50 py-10 dark:bg-gray-900">
      {/* Header Section */}
      <div className="mx-auto mb-8 max-w-7xl px-4">
        <h1 className="mb-3 text-4xl leading-tight font-black tracking-[-0.033em] text-gray-900 md:text-5xl dark:text-white">
          Our Datasets and AI Tools
        </h1>
        <p className="max-w-3xl text-base leading-normal font-normal text-gray-600 dark:text-gray-400">
          Build better language models with expertly curated datasets and enterprise-grade AI tools.
          Access expertly curated African language datasets and AI-powered tools to build more
          accurate, inclusive language technology
        </p>
      </div>

      {/* Datasets Section */}
      <section className="mx-auto mb-12 max-w-7xl px-4">
        <h2 className="mb-4 text-2xl leading-tight font-bold tracking-[-0.015em] text-gray-900 dark:text-white">
          Available Datasets
        </h2>

        {/* Filter Buttons */}
        <div className="mb-6 flex gap-3 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex h-9 shrink-0 items-center justify-center rounded-lg px-4 text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-primary-700 dark:bg-primary-600 text-white'
                  : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Dataset Table */}
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-300">
                    Dataset Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-300">
                    Access
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-300">
                    Validation Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-300">
                    Size
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-300">
                    Language
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-300">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {datasets.map((dataset, i) => (
                  <tr key={i} className="dark:hover:bg-gray-750 transition-colors hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {dataset.name}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${dataset.access.color}`}
                      >
                        {dataset.access.label}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {dataset.validation}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {dataset.size}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {dataset.language}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <a
                        href={dataset.action.href}
                        className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-semibold hover:underline"
                      >
                        {/* {dataset.action.label} */}
                        Coming soon
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="mx-auto mb-12 max-w-7xl px-4">
        <h2 className="mb-6 text-2xl leading-tight font-bold tracking-[-0.015em] text-gray-900 dark:text-white">
          AI-Powered Language Tools
        </h2>
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex-1">
              <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                Language Data Translation Validation Tool
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Automatically validate translation accuracy and cultural appropriateness at scale.
              </p>
            </div>
            <a
              href={siteMetadata.validationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 rounded-lg px-6 py-2.5 text-sm font-semibold whitespace-nowrap text-white transition-colors"
            >
              Access Custom Language Tools
            </a>
          </div>
        </div>
      </section>

      <ContactUs heading="For technical inquiries or data access requests, please contact us at" />
    </main>
  )
}
