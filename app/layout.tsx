import type { Metadata } from 'next'
import {
  Geist,
  Geist_Mono,
  Raleway,
  Roboto_Condensed,
  Oswald,
  Poppins,
  Montserrat,
} from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Script from 'next/script'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
})

const roboto = Roboto_Condensed({
  variable: '--font-roboto-condensed',
  subsets: ['latin'],
})

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Brian Wheeler | Freelance Full-Stack Developer Los Angeles',
  description:
    'Los Angeles-based freelance full-stack developer specializing in React, Next.js, and modern web applications. Available for hire on UI/UX projects.',
  keywords: [
    'Brian Wheeler',
    'Full-Stack Developer',
    'Freelance Developer',
    'Los Angeles Developer',
    'React Developer',
    'Next.js',
    'JavaScript',
    'UI/UX Designer',
    'Web Development',
    'Hire Developer',
  ],
  authors: [{ name: 'Brian Wheeler', url: 'https://brianwheeler.dev' }],
  creator: 'Brian Wheeler',
  openGraph: {
    title: 'Brian Wheeler | Freelance Full-Stack Developer',
    description:
      'Los Angeles-based freelance full-stack developer specializing in React, Next.js, and modern web applications. Available for hire on UI/UX projects.',
    url: 'https://brianwheeler.dev',
    siteName: 'Brian Wheeler Portfolio',
    images: [
      {
        url: 'https://brianwheeler.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Brian Wheeler Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brian Wheeler | Freelance Full-Stack Developer',
    description:
      'Los Angeles-based freelance full-stack developer specializing in React, Next.js, and modern web applications. Available for hire on UI/UX projects.',
    images: ['https://brianwheeler.dev/og-image.png'],
    creator: '@iwh_brianw',
  },
  alternates: {
    canonical: 'https://brianwheeler.dev',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://brianwheeler.dev'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="schema-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Person',
                  '@id': 'https://brianwheeler.dev/#brian',
                  name: 'Brian Wheeler',
                  jobTitle: 'Freelance Full-Stack Developer',
                  description:
                    'Los Angeles-based freelance full-stack developer specializing in React, Next.js, and modern web applications.',
                  knowsAbout: [
                    'React',
                    'Next.js',
                    'JavaScript',
                    'TypeScript',
                    'UI/UX Design',
                    'Web Development',
                  ],
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Los Angeles',
                    addressRegion: 'CA',
                    addressCountry: 'US',
                  },
                  url: 'https://brianwheeler.dev',
                  sameAs: [
                    'https://github.com/iwh-brianw',
                    'https://linkedin.com/in/brianwheelerdev',
                    'https://twitter.com/iwh_brianw',
                  ],
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://brianwheeler.dev/#website',
                  url: 'https://brianwheeler.dev',
                  name: 'Brian Wheeler | Freelance Full-Stack Developer',
                  description:
                    'Los Angeles-based freelance full-stack developer specializing in React, Next.js, and modern web applications.',
                  publisher: { '@id': 'https://brianwheeler.dev/#brian' },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} ${roboto.variable} ${oswald.variable} ${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <Nav />
        {/* <Image
            src={'/laskyline.jpg'}
            alt="City skyline at night"
            width={1920}
            height={1080}
            className="fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-90"
            priority
          /> */}
        {children}
      </body>
    </html>
  )
}
