import siteMetadata from 'data/siteMetadata'

type ContactUsProps = {
  heading?: string
  message?: string
  email?: string
  mailUrl?: string
}

export default function ContactUs({
  heading = 'Contact Us',
  message = 'Have a question or want to get started? Reach out to our team.',
  email = siteMetadata.email,
  mailUrl,
}: ContactUsProps) {
  const finalMailUrl = mailUrl || `mailto:${email}`

  return (
    <div className="p-4 py-16 text-center">
      <h2 className="text-2xl leading-tight font-bold tracking-[-0.015em] dark:text-white">
        {heading}
      </h2>

      <p className="mt-2 text-base leading-normal font-normal text-gray-500 dark:text-gray-400">
        {message}
      </p>

      <a
        className="text-primary-500 dark:text-primary-400 mt-4 inline-block text-lg font-medium hover:underline"
        href={finalMailUrl}
      >
        {email}
      </a>
    </div>
  )
}
