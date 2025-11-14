import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'

import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'
import localFont from 'next/font/local'

// Header text
const cirka = localFont({
  src: [
    {
      path: '../public/static/fonts/Cirka-Light.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/static/fonts/Cirka-Variable.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/static/fonts/Cirka-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-cirka',
})

// MULISH — Body font (all weights)
const mulish = localFont({
  src: [
    { path: '../public/static/fonts/Mulish-ExtraLight.ttf', weight: '200', style: 'normal' },
    { path: '../public/static/fonts/Mulish-Light.ttf', weight: '300', style: 'normal' },
    { path: '../public/static/fonts/Mulish-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/static/fonts/Mulish-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../public/static/fonts/Mulish-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../public/static/fonts/Mulish-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../public/static/fonts/Mulish-ExtraBold.ttf', weight: '800', style: 'normal' },

    // Italics
    { path: '../public/static/fonts/Mulish-LightItalic.ttf', weight: '300', style: 'italic' },
    { path: '../public/static/fonts/Mulish-Italic.ttf', weight: '400', style: 'italic' },
    { path: '../public/static/fonts/Mulish-MediumItalic.ttf', weight: '500', style: 'italic' },
    { path: '../public/static/fonts/Mulish-SemiBoldItalic.ttf', weight: '600', style: 'italic' },
    { path: '../public/static/fonts/Mulish-BoldItalic.ttf', weight: '700', style: 'italic' },
    { path: '../public/static/fonts/Mulish-BlackItalic.ttf', weight: '900', style: 'italic' },
  ],
  variable: '--font-mulish',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.BASE_PATH || ''

  return (
    <html
      lang={siteMetadata.language}
      className={`${cirka.variable} ${mulish.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${basePath}/static/favicons/favicon-32x32.jpg`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${basePath}/static/favicons/favicon-32x32.jpg`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${basePath}/static/favicons/favicon-16x16.png`}
      />
      <link rel="manifest" href={`${basePath}/static/favicons/site.webmanifest`} />
      <link
        rel="mask-icon"
        href={`${basePath}/static/favicons/safari-pinned-tab.svg`}
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
      <body className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
        <ThemeProviders>
          <Header />
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
          <SectionContainer>
            <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
              <main>{children}</main>
            </SearchProvider>
          </SectionContainer>
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  )
}
