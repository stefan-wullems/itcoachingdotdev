import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'

export default function NotFound() {
  return (
    <Layout>
      <Container className="flex h-full items-center pt-16 sm:pt-32">
        <div className="flex flex-col items-center">
          <p className="text-base font-semibold text-gray-400 dark:text-gray-500">
            404
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-gray-100">
            Page not found
          </h1>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <Button href="/" variant="secondary" className="mt-4">
            Go back home
          </Button>
        </div>
      </Container>
    </Layout>
  )
}
