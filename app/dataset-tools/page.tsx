import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Datasets & Tools' })

export default function DatasetsTools() {
  return (
    <main className="flex-1 py-10">
      {/* Header Section */}
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-text-light dark:text-text-dark text-4xl leading-tight font-black tracking-[-0.033em]">
            Our Datasets and AI Tools
          </p>
          <p className="text-subtext-light dark:text-subtext-dark text-base leading-normal font-normal">
            Explore our curated datasets and leverage our AI-powered tools to advance language
            technology.
          </p>
        </div>
      </div>

      {/* Datasets Section */}
      <section className="py-8">
        <h2 className="text-text-light dark:text-text-dark px-4 pt-5 pb-3 text-[22px] leading-tight font-bold tracking-[-0.015em]">
          Available Datasets
        </h2>

        {/* Filter Buttons */}
        <div className="flex gap-3 overflow-x-auto p-3">
          <button className="bg-primary/20 dark:bg-primary/30 flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg px-4">
            <p className="text-primary text-sm leading-normal font-medium dark:text-white">All</p>
          </button>
          {['Open-Sourced', 'Request for Access', 'Community-Validated'].map((label) => (
            <button
              key={label}
              className="bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg border px-4 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <p className="text-text-light dark:text-text-dark text-sm leading-normal font-medium">
                {label}
              </p>
            </button>
          ))}
        </div>

        {/* Dataset Table */}
        <div className="@container px-4 py-3">
          <div className="border-border-light dark:border-border-dark dark:bg-background-dark flex overflow-hidden rounded-lg border bg-white">
            <table className="flex-1">
              <thead>
                <tr className="dark:bg-background-dark bg-white">
                  {['Dataset Name', 'Access', 'Validation Status', 'Size', 'Language', ''].map(
                    (head, index) => (
                      <th
                        key={index}
                        className="text-text-light dark:text-text-dark px-4 py-3 text-left text-sm leading-normal font-medium"
                      >
                        {head}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Swahili Corpus',
                    access: { label: 'Open-Sourced', color: 'bg-green-100 text-green-800' },
                    validation: 'Peer-Reviewed',
                    size: '10 GB',
                    language: 'Swahili',
                    action: { label: 'Download', href: '#' },
                  },
                  {
                    name: 'Cherokee Lexicon',
                    access: {
                      label: 'Request for Access',
                      color: 'bg-yellow-100 text-yellow-800',
                    },
                    validation: 'Community-Validated',
                    size: '500 MB',
                    language: 'Cherokee',
                    action: { label: 'Learn More', href: '#' },
                  },
                  {
                    name: 'Quechua Speech Data',
                    access: { label: 'Open-Sourced', color: 'bg-green-100 text-green-800' },
                    validation: 'Community-Validated',
                    size: '2 GB',
                    language: 'Quechua',
                    action: { label: 'Download', href: '#' },
                  },
                ].map((dataset, i) => (
                  <tr key={i} className="border-t-border-light dark:border-t-border-dark border-t">
                    <td className="text-text-light dark:text-text-dark h-[72px] px-4 py-2 text-sm leading-normal font-normal">
                      {dataset.name}
                    </td>
                    <td className="h-[72px] px-4 py-2">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${dataset.access.color}`}
                      >
                        {dataset.access.label}
                      </span>
                    </td>
                    <td className="text-subtext-light dark:text-subtext-dark h-[72px] px-4 py-2 text-sm leading-normal font-normal">
                      {dataset.validation}
                    </td>
                    <td className="text-subtext-light dark:text-subtext-dark h-[72px] px-4 py-2 text-sm leading-normal font-normal">
                      {dataset.size}
                    </td>
                    <td className="text-subtext-light dark:text-subtext-dark h-[72px] px-4 py-2 text-sm leading-normal font-normal">
                      {dataset.language}
                    </td>
                    <td className="text-primary dark:text-primary-light h-[72px] px-4 py-2 text-sm leading-normal font-bold tracking-[0.015em]">
                      <a href={dataset.action.href}>{dataset.action.label}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="py-8">
        <h2 className="text-text-light dark:text-text-dark px-4 pt-5 pb-5 text-[22px] leading-tight font-bold tracking-[-0.015em]">
          AI-Powered Language Tools
        </h2>
        <div className="grid grid-cols-1 gap-6 p-4">
          <div className="dark:bg-background-dark border-border-light dark:border-border-dark flex flex-col items-start justify-between gap-6 rounded-xl border bg-white p-6 transition-shadow duration-300 hover:shadow-lg sm:flex-row sm:items-center">
            <div className="flex-1">
              <h3 className="text-text-light dark:text-text-dark text-lg font-bold">
                Language Data Translation Validation Tool
              </h3>
              <p className="text-subtext-light dark:text-subtext-dark mt-2">
                Leverage our AI to validate the accuracy and cultural appropriateness of your
                translated language data.
              </p>
            </div>
            <a
              className="bg-primary flex h-10 max-w-[480px] min-w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 text-sm leading-normal font-bold tracking-[0.015em] whitespace-nowrap text-white"
              href="http://validation.tonative.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Access Validation Tool</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="px-4 py-8 text-center">
        <p className="text-subtext-light dark:text-subtext-dark">
          For technical inquiries or data access requests, please contact us at{' '}
          <a
            className="text-primary dark:text-primary-light font-medium"
            href="mailto:services@tonative.org"
          >
            services@tonative.org
          </a>
          .
        </p>
      </section>
    </main>
  )
}
