import { CTAButton } from './CTAButton'

export function CTA() {
  return (
    <div className="relative isolate mx-10 mt-10 overflow-hidden rounded-3xl border  border-synthwave-300 py-12 shadow-md  shadow-synthwave-300 sm:py-16">
      <div className="absolute inset-0 z-0">
        <div
          className=" absolute inset-0 bg-gradient-to-tl from-synthwave-300 to-synthwave-900 to-30%"
          aria-hidden="true"
        ></div>
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 lg:px-8">
        <div className="max-w-2xl lg:mx-0">
          <p className="mt-6 font-d-din text-lg leading-8 text-gray-200">
            Still unsure? Book a free, no strings attached discovery call in
            less than 30 seconds. We‘ll can explore your goals and see how well
            we fit. I‘m looking forward to meeting you!
          </p>
        </div>
        <div>
          <CTAButton theme="synthwave-300" />
        </div>
      </div>
    </div>
  )
}
