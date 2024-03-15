import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Container } from '@/components/Container'
import { CheckIcon } from '@heroicons/react/20/solid'

export const metadata: Metadata = {
  title: '% - Get Skilled',
  description: 'How the Get an FP job program will help you get skilled.',
}

export default function HeroLanding() {
  return (
    <Container className="mt-9">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          45 Days {`"Get an FP Job"`} Program
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          You might not always need the experience you think you need. I was
          hired for an Elm job even though my first Elm project was part of the
          interview process, and I was hired as a Rust developer without having
          ever written a single line of Rust. When companies hire for an
          uncommon technology, they expect to hire people that still need to
          learn.
          <br />
          <br />
          That doesn't mean that experience won't help a bunch. Because the
          relatively low supply of these jobs, you will have competition. If you
          are the only one with proven experience, you'll have a leg up on your
          competition. Makes sense right?
          <br />
          <br />I can help you with this too:
        </p>
        <ul className="mt-6 list-none  pl-6 text-base text-zinc-600 dark:text-zinc-400">
          <li className="flex">
            <div>
              <CheckIcon className="mr-2 inline-block h-5 w-5 text-emerald-500" />
            </div>
            <div>
              Weekly one-on-one tutoring on a functional programming language of
              your choice.
            </div>
          </li>
          <li className="flex">
            <div>
              <CheckIcon className="mr-2 inline-block h-5 w-5 text-emerald-500" />
            </div>
            <div>
              Weekly pair programming session with me on a non-trivial portfolio
              project.
            </div>
          </li>
          <li className="flex">
            <div>
              <CheckIcon className="mr-2 inline-block h-5 w-5 text-emerald-500" />
            </div>
            <div>Get access to a curated list of high value FP resources.</div>
          </li>
        </ul>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          <a href="/fp-hero/cost" className="text-emerald-500 hover:underline">
            Allright, I'm interested! But what will it cost? &rarr;
          </a>
        </p>
      </div>
    </Container>
  )
}
