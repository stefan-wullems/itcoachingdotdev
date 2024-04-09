import { CTAButton } from './CTAButton'

export function Motivation() {
  return (
    <div className=" relative isolate overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" aria-hidden="true"></div>
      </div>
      <div className="relative mx-auto flex max-w-7xl justify-center px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <p className="font-gothic text-2xl font-semibold leading-7 text-synthwave-300">
            Just build cool stuff
          </p>
          <h2 className="font-gothic text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Do you want your skills to skyrocket?
          </h2>
          <p className="mt-6 font-d-din text-lg leading-8 text-gray-300">
            Getting started or ramping up your career in tech requires you to be
            skilled, but building skill isn‘t easy. I see many people make the
            following mistakes:
          </p>
          <ul className="mt-6 list-inside list-disc font-d-din text-lg leading-8 text-gray-300">
            <li>Spending too much time on LeetCode</li>
            <li>Being stuck in course hell</li>
            <li>Studying tools rather than building things</li>
            <li>
              Working on meta problems like typing-speed and editor
              configuration
            </li>
          </ul>
          <p className="mt-6 font-d-din text-lg leading-8 text-gray-300">
            In the end, the best way to get better at building is by building
            stuff. But if you have never built something start-to-end by
            yourself, it can be quite a daunting task. What do you build? What
            tools to use? Where to start? How to organize the project? How do I
            stay motivated? When am I even done? Where do I get the time? On and
            on and on.
            <br />
            <br />
            The Web Dev Rocket is a coaching and mentorship program aimed to
            help you solve these problems. You‘ll not only build projects,
            you‘ll learn more quickly as you solve real world problems, and at
            the end you can share your work and your experiences to meet new
            people or impress potential employers. That‘s the power of just
            building cool stuff. It pays dividends in multiple areas of your
            career!
          </p>
          <CTAButton theme="synthwave-300" />
        </div>
      </div>
    </div>
  )
}
