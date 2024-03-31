import gqlLogo from './images/gql.png'
import rustLogo from './images/rust.png'
import webAssemblyLogo from './images/webassembly.png'

import awsCertDevAssLogo from './images/aws-certified-dev-associate.png'
import compTiaLinuxPlusLogo from './images/comp-tia-linux-plus.png'
import k8sAppDevLogo from './images/certified-k8s-app-dev.png'
import Image from 'next/image'

const PROJECTS = [
  'Open Source Libraries',
  'Games',
  'Programming Languages',
  'Game Engines',
  'Blockchain Applications',
  'AI Applications',
  'Social Media Clones',
  'IoT Applications',
  'Handwritten LLMs',
  'UI Libraries',
  'Web Frameworks',
]

export function WebDevRocketProgram() {
  return (
    <div className="bg-gradient-to-b from-synthwave-900 from-10% via-synthwave-300/30 to-synthwave-900 to-90% py-16 sm:py-24">
      <div className=" mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="font-gothic text-2xl font-semibold leading-7 text-synthwave-300">
            The Web Dev Rocket Program
          </p>
          <h2 className="font-gothic text-4xl font-bold tracking-tight text-white sm:text-6xl">
            What will you get?
          </h2>
        </div>
        <div className="grid gap-10 sm:grid-cols-2">
          <p className="mt-6 font-d-din text-lg leading-8 text-gray-300">
            I will design, implement, deploy and manage{' '}
            <strong className="font-d-din-bold">
              a portfolio website to establish your personal brand and show off
              your skills
            </strong>
            . This portfolio will have a brag document to highlight your
            achievements and a fully functional blog to broadcast your
            experience to the world in a professional way.
          </p>
          <p className="mt-6 font-d-din text-lg leading-8 text-gray-300">
            Additionally, I will help you expand your brag document with{' '}
            <strong className="font-d-din-bold">
              weekly 1-on-1 accountability coaching sessions.
            </strong>{' '}
            We will make a growth plan that aligns with your goals and interests
            and I will keep you focused and moving forward. You‘ll{' '}
            <strong className="font-d-din-bold">
              build impressive projects using exciting tools
            </strong>
            , and you‘ll{' '}
            <strong className="font-d-din-bold">
              earn prestigious certifications
            </strong>
            .
          </p>
        </div>

        <div className="mt-10">
          <div className="mt-40">
            <h3 className="text-center font-gothic text-2xl font-bold tracking-tight text-white sm:text-5xl">
              Build Impressive Projects
            </h3>
            <ul className="min-w-md mt-10 py-6 text-center font-d-din text-2xl leading-10 text-gray-300 sm:py-12 lg:max-w-none">
              {PROJECTS.map((keyword) => (
                <li key={keyword} className="mx-10 my-2 inline-block">
                  {keyword}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <h3 className=" text-center font-gothic text-2xl font-bold tracking-tight text-white  sm:text-5xl">
              Use Interesting Tools
            </h3>
            <div className="flex flex-col items-center justify-evenly py-10 opacity-50 sm:flex-row">
              <div className="py-6 sm:py-12">
                <Image
                  src={webAssemblyLogo}
                  alt="Webassembly"
                  width={150}
                  height={150}
                />
              </div>
              <div className="py-6 sm:py-12">
                <Image src={rustLogo} alt="Rust" width={150} height={150} />
              </div>
              <div className="py-6 sm:py-12">
                <Image src={gqlLogo} alt="GraphQL" width={150} height={150} />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-center font-gothic text-2xl font-bold tracking-tight text-white sm:text-5xl">
              Earn Prestigious Certifications
            </h3>
            <div className="flex flex-col items-center justify-evenly py-10 opacity-50 sm:flex-row">
              <div className="py-6 sm:py-12">
                <Image
                  src={awsCertDevAssLogo}
                  alt="AWS Certified Developer Associate"
                  width={150}
                  height={150}
                />
              </div>
              <div className="py-6 sm:py-12">
                <Image
                  src={compTiaLinuxPlusLogo}
                  alt="CompTia Linux+"
                  width={150}
                  height={150}
                />
              </div>
              <div className="py-6 sm:py-12">
                <Image
                  src={k8sAppDevLogo}
                  alt="Certified Kubernetes Application Developer"
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
