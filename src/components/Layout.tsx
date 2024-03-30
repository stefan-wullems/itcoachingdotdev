import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-synthwave-900 bg-gradient-to-br from-synthwave-300/10 via-synthwave-300 to-synthwave-300/10  ">
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-synthwave-300 dark:bg-synthwave-900 dark:ring-0" />
        </div>
      </div>
      <div className="relative flex w-full flex-col ">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string
  intro: string
  children?: React.ReactNode
}) {
  return (
    <Layout>
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
          <h1 className="font-d-din-bold text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-gray-100">
            {title}
          </h1>
          <p className="mt-6 text-base text-gray-600 dark:text-gray-400">
            {intro}
          </p>
        </header>
        {children && <div className="mt-16 sm:mt-20">{children}</div>}
      </Container>
    </Layout>
  )
}
