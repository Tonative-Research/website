import * as Flags from 'country-flag-icons/react/3x2'

export default function OurCoverage() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 sm:px-8">
        
        <div className="space-y-10">
          {/* Languages */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-gray-900">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'English', 'French', 'Lingala', 'Luo', 'Kikuyu', 'Maasai',
                'Swahili', 'Chichewa', 'Efik', 'Fula', 'Hausa', 'Ibibio',
                'Igbo', 'Kanuri', 'Nigerian Pidgin', 'Yoruba', 'Kinyarwanda',
                'Luganda', 'Lusoga',
              ].map((lang) => (
                <span
                  key={lang}
                  className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Domains */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-gray-900">Domains</h3>
            <div className="flex flex-wrap gap-2">
              {['Healthcare', 'Banking & Finance', 'Agriculture', 'Civic Tech', 'Education'].map(
                (domain) => (
                  <span
                    key={domain}
                    className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800"
                  >
                    {domain}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Countries with Flags */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-gray-900">Countries</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'DR Congo', Flag: Flags.CD },
                { name: 'Kenya',    Flag: Flags.KE },
                { name: 'Malawi',   Flag: Flags.MW },
                { name: 'Nigeria',  Flag: Flags.NG },
                { name: 'Rwanda',   Flag: Flags.RW },
                { name: 'Uganda',   Flag: Flags.UG },
              ].map(({ name, Flag }) => (
                <span
                  key={name}
                  className="flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-800"
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