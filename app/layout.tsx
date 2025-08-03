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
  title: 'Brian Wheeler✌️ - FullStack Developer',
  description:
    'Portfolio of Brian Wheeler, a FullStack Developer specializing in React and Node.js applications.',
  keywords: [
    'Brian Wheeler',
    'FullStack Developer',
    'Portfolio',
    'React',
    'Node.js',
    'JavaScript',
    'Web Development',
  ],
  authors: [{ name: 'Brian Wheeler', url: 'https://brianwheeler.dev' }],
  creator: 'Brian Wheeler',
  openGraph: {
    title: 'Brian Wheeler - FullStack Developer',
    description:
      'Portfolio of Brian Wheeler, a FullStack Developer specializing in React and Node.js applications.',
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
    title: 'Brian Wheeler - FullStack Developer',
    description:
      'Portfolio of Brian Wheeler, a FullStack Developer specializing in React and Node.js applications.',
    images: ['https://brianwheeler.dev/og-image.png'],
    creator: '@iwh_brianw',
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
