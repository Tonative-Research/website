'use client'
import { useState } from 'react'
import ContactUs from 'components/ContactUs'
import siteMetadata from 'data/siteMetadata'

export default function DatasetToolsMain() {
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const datasets = [
    {
      name: 'XNLI',
      description: 'Cross-lingual natural language inference for reasoning tasks',
      curationMethod: 'Adapted',
      recordsCurated: '31,500',
      languages: 'Igbo, Kinyarwanda, Kikuyu, Luo, Yoruba, Hausa, Nigerian Pidgin',
      dataType: 'Non-Parallel Text',
      validation: 'Human QA',
      access: 'Public',
      tags: ['Public', 'Text', 'Human QA'],
      action: {
        label: 'Direct Access',
        href: 'https://huggingface.co/datasets/Tonative/Extended-XNLI',
      },
      curationYear: '2025',
    },
    {
      name: 'KKD Parallel Corpora',
      description: 'Kiswahilli-African language parallel text for machine translation',
      curationMethod: 'Adapted',
      recordsCurated: '29,231',
      languages: "Kiswahili ↔ English, Kidaw'ida, Kalenjin and Dholuo",
      dataType: 'Parallel Text - MT',
      validation: 'Human QA',
      access: 'Public',
      tags: ['Public', 'Text', 'Parallel', 'Human QA'],
      action: {
        label: 'Direct Access',
        href: 'https://huggingface.co/datasets/Tonative/Extended-KKD',
      },
      curationYear: '2025',
    },
    {
      name: 'MRL-Benchmark',
      description: 'Commonsense reasoning benchmarking dataset for LLMs',
      curationMethod: 'Collaborated',
      recordsCurated: '400',
      languages: 'Nigerian Pidgin, Yoruba',
      dataType: 'Non-Parallel Text',
      validation: 'Human QA',
      access: 'Public',
      tags: ['Public', 'Text', 'Human QA'],
      action: {
        label: 'Direct Access',
        href: 'https://huggingface.co/datasets/mrlbenchmarks/global-piqa-nonparallel',
      },
      curationYear: '2025',
    },
    // {
    //   name: 'Tonative Speech Dataset',
    //   description: 'Speech recognition corpus with native speaker validation',
    //   curationMethod: 'Self Curated',
    //   recordsCurated: '470,000',
    //   languages: 'Luo, Igbo,... and 9+ languages',
    //   languagesExtendable: true,
    //   dataType: 'Speech + Transcript',
    //   validation: 'AI Validated + Human QA',
    //   access: 'Commercial',
    //   tags: ['Commercial', 'Speech', 'AI-Validated', 'Human QA'],
    //   action: { label: 'Request Access', href: '#' },
    //   curationYear: '',
    // },
  ]

  const filters = ['Public', 'Commercial', 'Text', 'Speech', 'Parallel', 'Human QA', 'AI-Validated']

  const toggleFilter = (filter) => {
    setActiveFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    )
  }

  const filteredDatasets =
    activeFilters.length === 0
      ? datasets
      : datasets.filter((dataset) => activeFilters.every((filter) => dataset.tags.includes(filter)))

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

        {/* Filter Checkboxes */}
        <div className="mb-6 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <label
              key={filter}
              className="flex h-9 shrink-0 cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 text-sm font-medium transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <input
                type="checkbox"
                checked={activeFilters.includes(filter)}
                onChange={() => toggleFilter(filter)}
                className="text-primary-600 focus:ring-primary-500 h-4 w-4 rounded border-gray-300 focus:ring-2 dark:border-gray-600 dark:bg-gray-700"
              />
              <span>{filter}</span>
            </label>
          ))}
        </div>

        {/* Active Filters Display */}
        {activeFilters.length > 0 && (
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">Active filters:</span>
            {activeFilters.map((filter) => (
              <span
                key={filter}
                className="bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 inline-flex items-center gap-1 rounded-full px-3 py-1"
              >
                {filter}
                <button
                  onClick={() => toggleFilter(filter)}
                  className="hover:text-primary-900 dark:hover:text-primary-100 ml-1"
                >
                  ×
                </button>
              </span>
            ))}
            <button
              onClick={() => setActiveFilters([])}
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 ml-2"
            >
              Clear all
            </button>
          </div>
        )}

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
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-300">
                    Curation Method
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-300">
                    Records Curated
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-300">
                    Languages
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-300">
                    Data Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-300">
                    Validation
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-300">
                    Access
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-300">
                    Action
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-700 uppercase dark:text-gray-300">
                    Curation Year
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredDatasets.length === 0 ? (
                  <tr>
                    <td
                      colSpan={10}
                      className="px-6 py-8 text-center text-sm text-gray-500 dark:text-gray-400"
                    >
                      No datasets match the selected filters.
                    </td>
                  </tr>
                ) : (
                  filteredDatasets.map((dataset, i) => (
                    <tr
                      key={i}
                      className="dark:hover:bg-gray-750 transition-colors hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                        {dataset.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                        {dataset.description}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                        {dataset.curationMethod}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                        {dataset.recordsCurated}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                        {dataset.languages}
                        {/* {dataset.languagesExtendable && (
                          <span className="text-primary-600 dark:text-primary-400 ml-2 text-xs">
                            [📋 Request extension to other languages]
                          </span>
                        )} */}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                        {dataset.dataType}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                        {dataset.validation}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
                            dataset.access === 'Public'
                              ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                              : 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
                          }`}
                        >
                          {dataset.access}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <a
                          href={dataset.action.href}
                          target="_blank"
                          className="text-primary-500 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-semibold underline"
                        >
                          {dataset.action.label}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                        {dataset.curationYear}
                      </td>
                    </tr>
                  ))
                )}
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
              href={`mailto:${siteMetadata.cynthiaEmail}`}
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
