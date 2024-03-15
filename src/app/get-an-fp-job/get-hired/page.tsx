import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Container } from '@/components/Container'
import { CheckIcon } from '@heroicons/react/20/solid'

export const metadata: Metadata = {
  title: '% - Get Hired',
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
          With all these benefits, its strange that functional programming isn't
          more popular, which means that getting a job in functional programming
          is a bit more difficult than jobs in more industry standard languages.
          <br />
          <br />
          It isn't impossible though. I personally have been hired as a
          functional programmer at two different companies. I know what it takes
          to succeed and I can help you get there too.
          <br />
          <br />
          I'll let you decide what programming language you'd like to work with
          and I'll:
        </p>
        <ul className="mt-6 list-none  pl-6 text-base text-zinc-600 dark:text-zinc-400">
          <li className="flex">
            <div>
              <CheckIcon className="mr-2 inline-block h-5 w-5 text-emerald-500" />
            </div>
            <div>
              Write a resume for you that will pique the interest of prospective
              employers
            </div>
          </li>
          <li className="flex">
            <div>
              <CheckIcon className="mr-2 inline-block h-5 w-5 text-emerald-500" />
            </div>
            <div>
              Build an awesome looking portfolio webpage where you can show off
              your side projects and publish blogposts.
            </div>
          </li>
          <li className="flex">
            <div>
              <CheckIcon className="mr-2 inline-block h-5 w-5 text-emerald-500" />
            </div>
            <div>
              Apply to jobs for you based on your preference (including cover
              letter, custom tailored to you and the role we're applying for)
            </div>
          </li>
          <li className="flex">
            <div>
              <CheckIcon className="mr-2 inline-block h-5 w-5 text-emerald-500" />
            </div>
            <div>
              Help you prepare for your interviews in order to maximize chances
              of success
            </div>
          </li>
        </ul>
        <p>
          <br />
          <a
            href="/fp-hero/get-skilled"
            className="text-emerald-500 hover:underline"
          >
            That's cool, but I need experience right? &rarr;
          </a>
        </p>
      </div>
    </Container>
  )
}
