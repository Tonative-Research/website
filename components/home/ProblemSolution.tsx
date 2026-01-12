export default function ProblemSolution() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Problem */}
          <div>
            <h2 className="text-primary-900 mb-6 text-3xl font-bold">The Challenge</h2>
            <div className="space-y-5">
              {[
                'Most AI models cannot understand African languages due to insufficient training data, leaving many communities behind.',
                'Scaling AI across African languages is nearly impossible without access to trained native speakers and data quality validation tools.',
                'Businesses lose customers and revenue in multilingual markets, yet most voice translation apps prioritize only major global languages.',
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm leading-relaxed text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div className="border-primary-600 border-l-4 pl-8">
            <h2 className="text-primary-900 mb-6 text-3xl font-bold">How we Help</h2>
            <div className="space-y-5">
              {[
                'Dataset Marketplace: Browse open-source datasets or purchase premium African language collections',
                'Custom Dataset Curation: Commission bespoke African speech and text datasets for your specific AI training or evaluation needs.',
                'Trained Linguist Network: Hire vetted, trained African language experts for translation, annotation, and validation projects.',
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm leading-relaxed text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
