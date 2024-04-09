import Image from 'next/image'

import landscapeRocketCentered from './images/lanscaperocketcentered.png'
import { CountdownTimer } from './CountdownTimer'

const KEYWORDS = [
  'javascript mentorship', // 10 to 100
  'apply to web developer jobs', // 1k to 10k
  'promotion to senior', // 10 to 100
  'earn above the average web developer salary', // 100 to 1k
  'build web apps', // 100 to 1k
]

export function Hero({ countDownDate }: { countDownDate: Date }) {
  return (
    <div className="relative isolate h-full w-full">
      <div className="absolute inset-0 z-0">
        <Image
          className="h-full w-full object-cover"
          src={landscapeRocketCentered}
          alt="The Web Dev Rocket"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-synthwave-900 to-transparent"
          aria-hidden="true"
        ></div>
        <span className="opacity-10">
          <div
            className="hero-background-animate absolute inset-0 bg-gradient-to-r from-synthwave-900 via-synthwave-700 to-synthwave-600"
            aria-hidden="true"
          ></div>
        </span>
      </div>
      <div className="absolute left-0 top-0 w-full">
        <CountdownTimer countDownDate={countDownDate} />
      </div>
      <div className="flex overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-4xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full max-w-xl flex-col text-center lg:shrink-0 xl:max-w-4xl ">
              <h2 className="min-w-md mb-4 font-gothic text-2xl text-synthwave-300">
                AN COACHING AND MENTORSHIP PROGRAM TAILORED TO WEB DEVELOPERS
              </h2>
              <h1 className="min-w-md font-gothic text-6xl font-bold tracking-tight text-white sm:text-7xl">
                THE WEB DEV ROCKET
              </h1>
              <p className="min-w-md mt-8 font-gothic text-xl leading-8 text-gray-300 lg:max-w-none">
                JUST BUILD COOL STUFF
              </p>
              <ul className="min-w-md mt-60 font-gothic text-lg leading-8 text-white lg:max-w-none">
                {KEYWORDS.map((keyword) => (
                  <li
                    key={keyword}
                    className="mx-4 inline-block drop-shadow-[0_1.6px_1.6px_rgba(255,0,255,1)]"
                  >
                    {keyword}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
