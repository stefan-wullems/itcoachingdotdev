import { type Metadata } from 'next'

import { Container } from '@/components/Container'

import { NewsletterInput } from '@/components/Newsletter'

export const metadata: Metadata = {
  title: '% - Contact',
  description: 'Get in contact about the 45 Day "Get an FP Job" Program.',
}

export default function HeroLanding() {
  return (
    <Container className="mt-9">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          45 Days <span className="text-emerald-500">Get an FP Job</span>{' '}
          Program
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Awesome, I&rsquo;m glad to know you&rsquo;re committed. If you want to
          continue, just enter your email address and I reach out to you in
          order to schedule a quick zoom meeting to see if we&rsquo;re a match.
        </p>
        <NewsletterInput />
      </div>
    </Container>
  )
}
