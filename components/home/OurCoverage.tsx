import * as Flags from 'country-flag-icons/react/3x2'

export default function OurCoverage() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-10">
        <h2
          className="text-primary-900 mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl"
          style={{ fontFamily: 'var(--font-header)' }}
        >
          Our{' '}
          <span className="text-accent-600 relative inline-block">
            <span className="relative z-10">Coverage</span>
            <span className="bg-accent-200 absolute bottom-2 left-0 -z-0 h-3 w-full"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Languages */}
          <div>
            <p
              className="mb-5 text-xs font-semibold tracking-widest text-gray-400 uppercase"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Languages
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                'English',
                'French',
                'Lingala',
                'Luo',
                'Kikuyu',
                'Maasai',
                'Swahili',
                'Chichewa',
                'Efik',
                'Fula',
                'Hausa',
                'Ibibio',
                'Igbo',
                'Kanuri',
                'Nigerian Pidgin',
                'Yoruba',
                'Kinyarwanda',
                'Luganda',
                'Lusoga',
              ].map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-sm text-gray-700"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Domains */}
          <div>
            <p
              className="mb-5 text-xs font-semibold tracking-widest text-gray-400 uppercase"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Domains
            </p>
            <div className="flex flex-wrap gap-2">
              {['Healthcare', 'Banking & Finance', 'Agriculture', 'Civic Tech', 'Education'].map(
                (domain) => (
                  <span
                    key={domain}
                    className="rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-sm text-gray-700"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {domain}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Countries */}
          <div>
            <p
              className="mb-5 text-xs font-semibold tracking-widest text-gray-400 uppercase"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Countries
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'DR Congo', Flag: Flags.CD },
                { name: 'Kenya', Flag: Flags.KE },
                { name: 'Malawi', Flag: Flags.MW },
                { name: 'Nigeria', Flag: Flags.NG },
                { name: 'Rwanda', Flag: Flags.RW },
                { name: 'Uganda', Flag: Flags.UG },
              ].map(({ name, Flag }) => (
                <span
                  key={name}
                  className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-sm text-gray-700"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <Flag title={name} className="h-4 w-auto rounded-sm" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
