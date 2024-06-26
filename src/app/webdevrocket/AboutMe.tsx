import Image from 'next/image'
import { CTAButton } from './CTAButton'

import withMaki from '@/images/with-maki.jpg'

export function AboutMe() {
  return (
    <div className="p-6">
      <div className="overflow-hidden rounded-xl border  border-synthwave-500 bg-gradient-to-br from-synthwave-900 from-70% to-synthwave-500 py-4 sm:py-4">
        <div className=" mx-auto flex max-w-7xl flex-col items-center px-6 lg:px-8  xl:flex-row">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="font-gothic text-2xl font-semibold leading-7 text-synthwave-500">
              Meet Stefan
            </p>
            <h2 className="font-gothic text-4xl font-bold tracking-tight text-white sm:text-6xl">
              I’m passionate about supporting passionate people.
            </h2>
            <p className="mt-6 font-d-din text-lg leading-8 text-gray-300">
              I’m Stefan Wullems, an IT career coach who helps Web Developers
              like you progress in their careers. I have 7 years of experience
              as a software developer, and I’m an expert in{' '}
              <strong className="font-d-din-bold">TypeScript</strong> and{' '}
              <strong className="font-d-din-bold">
                Functional Programming
              </strong>
              .
              <br />
              <br />I created the Web Dev Rocket program because it is exactly
              what I would have loved when I was ramping up my career. Someone
              to support and accelerate my growth, and someone to help me build
              cool stuff. Together is more fun than alone.
              <br />
              <br />
              If you think your career would benefit from having someone
              experienced around you who’s only goal is to help you grow. Claim
              your free call now!
            </p>
            <CTAButton theme="synthwave-500" />
          </div>
          <div className="flex w-full justify-center px-10 py-10 sm:px-40 xl:px-0 xl:py-40 xl:pl-10">
            <Image
              sizes="(min-width: 512px) 16rem, 10rem"
              className="aspect-square rotate-3 rounded-2xl bg-gray-100 object-cover dark:bg-gray-800"
              src={withMaki}
              alt="Stefan Wullems"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
