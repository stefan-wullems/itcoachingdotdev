import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: 'Tech Career Coach - Stefan Wullems',
  description:
    'I’m Stefan, an Online Tech Career Coach who helps Web Developers reach career goals.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  openGraph: {
    title: 'Tech Career Coach - Stefan Wullems',
    description:
      'I’m Stefan, an Online Tech Career Coach who helps Web Developers reach career goals.',
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/home-og-linkedin.png`,
        width: 2400,
        height: 1254,
        alt: 'Tech Career Coach - Stefan Wullems',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
