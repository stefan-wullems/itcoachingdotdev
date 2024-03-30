import { CheckIcon, PlusIcon } from '@heroicons/react/20/solid'

import withMaki from '@/images/with-maki.jpg'

export function Bonuses() {
  return (
    <div className=" bg-gradient-to-b from-synthwave-900 from-10% via-synthwave-500/30 to-synthwave-900 to-90% py-16 sm:py-24">
      <div className="mx-auto flex max-w-7xl justify-center px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <p className="font-gothic text-2xl font-semibold leading-7 text-synthwave-500">
            Free extras
          </p>
          <h2 className="font-gothic text-4xl font-bold tracking-tight text-white sm:text-6xl">
            What else do you get?
          </h2>
          <div className="mt-6">
            <div className="rounded-xl bg-gradient-to-br from-synthwave-500 to-synthwave-900 to-20% p-6 shadow-md shadow-synthwave-500">
              <h3 className="text-center font-gothic text-2xl font-bold tracking-tight text-white sm:text-2xl">
                The Comprehensive “Portfolio Management” Bundle
              </h3>
              <ul className="mt-6 list-inside list-none font-d-din text-lg leading-8 text-gray-300">
                <li className="flex">
                  <CheckIcon className="mr-2 h-6 w-6 text-emerald-500" />{' '}
                  <div className="inline-block">
                    Quick Portfolio Domain Name checklist
                  </div>
                </li>
                <li className="flex">
                  <CheckIcon className="mr-2 h-6 w-6 text-emerald-500" />{' '}
                  <div className="inline-block">
                    The 60 Min Brand Questionnaire for Quick Design and Content
                    Drafting
                  </div>
                </li>
                <li className="flex">
                  <CheckIcon className="mr-2 h-6 w-6 text-emerald-500" />{' '}
                  <div className="inline-block">
                    Complete Handover Session at the end of coaching where I
                    explain how to tweak and extend your portfolio.
                  </div>
                </li>
                <li className="flex">
                  <CheckIcon className="mr-2 h-6 w-6 text-emerald-500" />{' '}
                  <div className="inline-block">
                    I Guarantee a coming soon page will be up within 24 hours of
                    receiving your domain name
                  </div>
                </li>
                <li className="flex">
                  <CheckIcon className="mr-2 h-6 w-6 text-emerald-500" />{' '}
                  <div className="inline-block">
                    I Guarantee the first draft of your portfolio page will be
                    up within a week of receiving the Brand Questionnaire
                  </div>
                </li>
              </ul>
            </div>
            <div className="my-10 flex justify-center">
              <PlusIcon className="h-12 w-12 text-synthwave-500" />
            </div>
            <ul className="list-inside list-none font-d-din text-lg leading-8 text-gray-300">
              <li className="flex">
                <CheckIcon className="mr-2 h-6 w-6 text-emerald-500" />{' '}
                <div className="inline-block">
                  On-demand Advice and Motivation on Slack (12h/7 days a week
                  guarantee)
                </div>
              </li>
              <li className="flex">
                <CheckIcon className="mr-2 h-6 w-6 text-emerald-500" />{' '}
                <div className="inline-block">
                  10% discount on AI resume optimization tool
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
