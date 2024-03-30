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
            Incomplete work
          </p>
          <h2 className="font-gothic text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Do you work hard but still struggle with these things:
          </h2>
          <ul className="mt-6 list-inside list-disc font-d-din text-lg leading-8 text-gray-300">
            <li>Difficulty finding a good high paying job</li>
            <li>Not being paid your worth from current employers</li>
            <li>
              Lack of opportunities to take on more responsibility or get
              promoted{' '}
            </li>
            <li>Little to show for your work</li>
          </ul>
          <p className="mt-6 font-d-din text-lg leading-8 text-gray-300">
            Hard work pays off, but it‘s possible to work hard in very
            inefficient ways. Often I see driven developers, including my
            younger self, work hard but make one mistake that will cause much of
            their work to be in vain.{' '}
            <strong className="font-d-din-bold">
              Under the spell of excitement, they start project after project,
              rarely finishing one.
            </strong>
            <br />
            <br />
            Not only do{' '}
            <strong className="font-d-din-bold">
              we miss out on much important experience
            </strong>
            , it also becomes{' '}
            <strong className="font-d-din-bold">
              difficult to prove our skill and work ethic in moments it really
              matters
            </strong>{' '}
            (e.g. applying for a job, or your boss is trying to convince his
            boss that you are a good candidate for a promotion)
            <br />
            <br />I designed the{' '}
            <strong className="font-d-din-bold">Web Dev Rocket</strong> to help
            driven individuals like you sidestep this problem and{' '}
            <strong className="font-d-din-bold">
              ensure your hard work is rewarding
            </strong>
            . We‘ll finish awesome projects and we‘ll make them presentable too.
          </p>
          <CTAButton theme="synthwave-300" />
        </div>
      </div>
    </div>
  )
}
