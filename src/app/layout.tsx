import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import Script from 'next/script'

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
      <body className="flex h-full">
        <Providers>
          <div className="w-full">{children}</div>
        </Providers>
      </body>
      <Script id="hotjar">
        {`
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3927183,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>`}
      </Script>
    </html>
  )
}
