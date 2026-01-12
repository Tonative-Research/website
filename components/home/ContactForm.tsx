'use client'
import React from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = React.useState({
    interest: '',
    name: '',
    email: '',
    organization: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [error, setError] = React.useState('')

  const interestOptions = [
    'Request Custom Dataset',
    'Book Volang Demo',
    'Hire Trained Linguists',
    'Partnership/Collaboration',
    'General Inquiry',
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    const SCRIPT_URL = process.env.BASE_PATH || ''

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      // Since we're using no-cors, we won't get a readable response
      // We'll assume success if no error is thrown
      setIsSuccess(true)
      setFormData({
        interest: '',
        name: '',
        email: '',
        organization: '',
        message: '',
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.')
      console.error('Submission error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2
              className="text-primary-900 mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-header)' }}
            >
              Let's{' '}
              <span className="text-accent-600 relative inline-block">
                <span className="relative z-10">Connect</span>
                <span className="bg-accent-200 absolute bottom-2 left-0 -z-0 h-3 w-full"></span>
              </span>
            </h2>
            <p
              className="mx-auto max-w-2xl text-lg text-gray-700"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Have questions about our datasets, linguist services, or partnership opportunities?
              We'd love to hear from you.
            </p>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 lg:p-12">
            {isSuccess ? (
              <div className="py-12 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3
                  className="text-primary-900 mb-2 text-2xl font-bold"
                  style={{ fontFamily: 'var(--font-header)' }}
                >
                  Message Sent!
                </h3>
                <p className="text-gray-700" style={{ fontFamily: 'var(--font-body)' }}>
                  We'll get back to you within 24-48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Interest Dropdown */}
                <div>
                  <label
                    htmlFor="interest"
                    className="text-primary-900 mb-2 block text-sm font-bold"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    What are you interested in? *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="focus:border-primary-500 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-colors focus:outline-none"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <option value="">Select an option...</option>
                    {interestOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-primary-900 mb-2 block text-sm font-bold"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="focus:border-primary-500 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-colors focus:outline-none"
                    style={{ fontFamily: 'var(--font-body)' }}
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-primary-900 mb-2 block text-sm font-bold"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="focus:border-primary-500 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-colors focus:outline-none"
                    style={{ fontFamily: 'var(--font-body)' }}
                    placeholder="Eg. name@mail.com"
                  />
                </div>

                {/* Organization */}
                <div>
                  <label
                    htmlFor="organization"
                    className="text-primary-900 mb-2 block text-sm font-bold"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Organization (optional)
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="focus:border-primary-500 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-colors focus:outline-none"
                    style={{ fontFamily: 'var(--font-body)' }}
                    placeholder="Your Company"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-primary-900 mb-2 block text-sm font-bold"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="focus:border-primary-500 w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 transition-colors focus:outline-none"
                    style={{ fontFamily: 'var(--font-body)' }}
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
                    <p className="text-sm text-red-700" style={{ fontFamily: 'var(--font-body)' }}>
                      {error}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent-600 hover:bg-accent-700 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-8 py-3 font-bold text-white transition-colors disabled:bg-gray-400"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border border-white border-t-transparent"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
