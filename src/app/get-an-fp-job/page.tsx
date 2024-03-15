import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: '45 Days "Get an FP Job" Program',
  description: 'Thanks for expressing interest, I will reach out ASAP.',
}

export default function HeroLanding() {
  return (
    <Container className="mt-9">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          45 Days {`"Get an FP Job"`} Program
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Functional Programming is known for its ability to reduce complexity
          and increase productivity. It introduces a better way of thinking
          about programming that can be applied to any language.
          <br />
          <br />
          In functional programming, you keep data immutable, and push side
          effects to the edges of your system, effectively making your code
          pure. Unlike normal code, pure code can be reasoned about
          mathematically so we can start applying algebraic thinking to solve
          problems. It also rules out entire classes of bugs and guarantees
          certain invariants (In other words, there are certain problems that
          just cannot happen, ever!)
          <br />
          <br />
          With just few powerful mathematical concepts can be used and reused to
          solve many many problems, all while keeping our code declarative and
          easy to understand. But this just scratches the surface of functional
          programming...
          <br />
          <br />
          <a
            href="/get-an-fp-job/get-hired"
            className="mt-10 text-emerald-500 hover:underline"
          >
            Interesting, tell me more &rarr;
          </a>
        </p>
      </div>
    </Container>
  )
}
