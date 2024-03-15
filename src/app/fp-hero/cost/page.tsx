import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Container } from '@/components/Container'
import { CheckIcon } from '@heroicons/react/20/solid'

export const metadata: Metadata = {
  title: 'Thank you',
  description: 'Thanks for expressing interest, I will reach out ASAP.',
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
          <h2 className="text-xl font-medium text-zinc-800 dark:text-zinc-300">
            Hands-On <span className="text-emerald-500">Get Good</span> Training
            Package
          </h2>
        </p>
        <ul className="mt-6 list-none space-y-4 pl-6 text-base text-zinc-600 dark:text-zinc-400">
          <li className="flex">
            <div>
              <CheckIcon className="mr-2 inline-block h-5 w-5 text-emerald-500" />
            </div>
            <div>
              Learn a Functional Programming Language of your choice from a
              Senior FP Developer
              <ul className="mt-2 list-disc space-y-2 pl-2">
                <li>FP Language quiz: Which language matches you best?</li>
                <li>
                  Weekly one-on-one tutoring on a functional programming
                  language of your choice (purity, monads, composition & more).
                </li>
              </ul>
            </div>
          </li>
          <li className="flex">
            <div>
              <CheckIcon className="mr-2 inline-block h-5 w-5 text-emerald-500" />
            </div>
            <div>
              Build a non-trivial portfolio project.
              <ul className="mt-2 list-disc space-y-2 pl-2">
                <li>Weekly pair programming session with me.</li>
                <li>
                  Weekly accountability check-ins to keep you moving forward.
                </li>
                <li>Unlimited email support.</li>
              </ul>
            </div>
          </li>

          <li className="flex">
            <div>
              <CheckIcon className="mr-2 inline-block h-5 w-5 text-emerald-500" />
            </div>
            <div>Get access to a curated list of high value FP resources.</div>
          </li>
        </ul>
        <p className="mt-6 pl-4 text-base text-zinc-600 dark:text-zinc-400">
          Subtotal <span className="dark:text-zinc-200">€2200</span>
        </p>

        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          <h2 className="text-xl font-medium text-zinc-800 dark:text-zinc-300">
            Risk-Free <span className="text-emerald-500">Get Hired</span> Job
            Hunting Service
          </h2>
        </p>
        <ul className="mt-6 list-none  pl-6 text-base text-zinc-600 dark:text-zinc-400">
          <li className="flex">
            <div>
              <CheckIcon className="mr-2 inline-block h-5 w-5 text-emerald-500" />
            </div>
            <div>
              I will write a resume for you that will pique the interest of
              prospective employers
            </div>
          </li>
          <li className="flex">
            <div>
              <CheckIcon className="mr-2 inline-block h-5 w-5 text-emerald-500" />
            </div>
            <div>
              I will build an awesome portfolio webpage where you can showcase
              your side projects and publish blogposts.
            </div>
          </li>
          <li className="flex">
            <div>
              <CheckIcon className="mr-2 inline-block h-5 w-5 text-emerald-500" />
            </div>
            <div>
              I will apply to jobs in your name based on your preference
              (including cover letter, custom tailored to you and the role we're
              applying for)
            </div>
          </li>
          <li className="flex">
            <div>
              <CheckIcon className="mr-2 inline-block h-5 w-5 text-emerald-500" />
            </div>
            <div>
              I will help you prepare for your interviews in order to maximize
              chances of success
            </div>
          </li>
        </ul>
        <p className="mt-6 pl-4 text-base text-zinc-600 dark:text-zinc-400">
          Subtotal{' '}
          <span className="dark:text-zinc-200">
            €250/month for 12 months* **
          </span>
          <br />
        </p>
        <p className="mt-6 pl-4 text-base text-zinc-600 dark:text-zinc-400">
          Total <span className="line-through dark:text-zinc-200">€2200</span>{' '}
          <span className="dark:text-zinc-200">€1200</span> +{' '}
          <span className="dark:text-zinc-200">
            €250/month for 12 months* **
          </span>
        </p>
        <p className="pt-6 dark:text-zinc-500">
          <span className="pl-4 dark:text-zinc-500">
            *Only pay after you get the job + no fix, no cost guarantee
          </span>
          <br />
          <span className="pl-4 dark:text-zinc-500">
            **Just FYI, recruiters usually take a 15-25% commission
          </span>
        </p>
      </div>
    </Container>
  )
}
