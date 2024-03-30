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
              Why am I doing this?
            </h2>
            <p className="mt-6 font-d-din text-lg leading-8 text-gray-300">
              I’m Stefan Wullems, an IT career coach who helps Web Developers
              like you progress in their careers. I have 7 years of experience
              as a software developer, 5 of which have been in the workforce.
              <br />
              <br />A challenge I faced was that I worked hard and a lot, but I
              didn‘t finish projects. Years deep in my career and I didn‘t have
              anything to show.
              <br />
              <br /> To my dismay, I found it difficult to convince others of
              the value I knew I could bring without going the extra mile to
              prove it. Everytime, it felt like I started from scratch because I
              didn‘t have any work that could speak for itself.
              <br />
              <br />I created the Web Dev Rocket program so that you can learn
              from this mistake without the scar. We will build and finish
              awesome projects and study hard to earn prestigious certificates!
              You‘ll find companies and teammates will take great interest in
              you!
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
