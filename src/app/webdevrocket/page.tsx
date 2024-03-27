import Image from 'next/image'
import landscapeRocketCentered from './images/lanscaperocketcentered.png'
import { CountdownTimer } from './CountdownTimer'
import withMaki from '@/images/with-maki.jpg'
import {
  ArrowTrendingUpIcon,
  BanknotesIcon,
  BoltIcon,
  ClipboardDocumentIcon,
  ClipboardDocumentListIcon,
  ListBulletIcon,
  PuzzlePieceIcon,
  ScaleIcon,
  UserGroupIcon,
  UsersIcon,
  WrenchIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { LinkedInIcon } from '@/components/SocialIcons'
import Link from 'next/link'

import gqlLogo from './images/gql.png'
import rustLogo from './images/rust.png'
import webAssemblyLogo from './images/webassembly.png'

import awsCertDevAssLogo from './images/aws-certified-dev-associate.png'
import compTiaLinuxPlusLogo from './images/comp-tia-linux-plus.png'
import k8sAppDevLogo from './images/certified-k8s-app-dev.png'

const program = {
  author: 'Stefan Wullems',
  date: '2024-03-19',
  title: 'The Web Dev Rocket',
  description:
    'Work with a Tech Career Coach to achieve goals common to Web Engineers like you.',
}

export const metadata = {
  title: program.title,
  description: program.description,
  openGraph: {
    title: program.title,
    description: program.description,
    type: 'website',
    url: `https://stefanwullemscoaching.com/webdevrocket`,
    images: [
      {
        url: `https://stefanwullemscoaching.com/og-webdevrocket.png`,
        width: 2170,
        height: 1150,
        alt: program.title,
      },
    ],
  },
}
const COUNT_DOWN_DATE = new Date('2024-03-31:23:59:59')

const KEYWORDS = [
  'apply to web developer jobs', // 1k to 10k
  'go fullstack', // 10 to 100
  'promotion to senior', // 10 to 100
  'earn above the average web developer salary', // 100 to 1k
  'prepare for the technical interview', // 100 to 1k
  'negotiate more study time',
]

function Hero() {
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
        <CountdownTimer countDownDate={COUNT_DOWN_DATE} />
      </div>
      <div className="flex overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-4xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full max-w-xl flex-col text-center lg:shrink-0 xl:max-w-4xl ">
              <h2 className="min-w-md mb-4 font-gothic text-2xl text-synthwave-300">
                AN IT CAREER COACHING PROGRAM TAILORED TO WEB DEVELOPERS
              </h2>
              <h1 className="min-w-md font-gothic text-6xl font-bold tracking-tight text-white sm:text-7xl">
                THE WEB DEV ROCKET
              </h1>
              <p className="min-w-md mt-8 font-gothic text-xl leading-8 text-gray-300 lg:max-w-none">
                Take agency over your career.
              </p>
              <ul className="min-w-md text-md mt-60 font-gothic leading-8 text-gray-200 lg:max-w-none">
                {KEYWORDS.map((keyword) => (
                  <li key={keyword} className="mx-4 inline-block">
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

function SEOKeywords() {
  return (
    <div className="relative isolate mx-10 mt-10 overflow-hidden rounded-3xl py-12 shadow-lg shadow-synthwave-800 sm:py-16">
      <div className="absolute inset-0 z-0">
        <div
          className=" absolute inset-0 bg-gradient-to-b from-gray-900 from-10% to-synthwave-800 to-90% "
          aria-hidden="true"
        ></div>
      </div>
      <div className="relative mx-auto flex max-w-7xl justify-center px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="mt-6 font-d-din text-lg leading-8 text-gray-200">
            Work with a Tech Career Coach to achieve goals common to Web
            Engineers like you. For example, increase your software engineering
            level, compose a growth plan to negotiate a raise, identify
            high-value tech training, go IT Job Hunting, get advice on how to
            prepare for a tech interview, and build an optimized tech resume.
          </p>
        </div>
      </div>
    </div>
  )
}

function AboutYou() {
  return (
    <div className=" relative isolate overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" aria-hidden="true"></div>
      </div>
      <div className="relative mx-auto flex max-w-7xl justify-center px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="font-gothic text-2xl font-semibold leading-7 text-synthwave-300">
            The problem of invisible skill
          </p>
          <h2 className="font-gothic text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Do you recognize this?
          </h2>
          {/* <p className="mt-6 font-d-din text-lg leading-8 text-gray-300">
            Building awesome software is all about skill, but sadly, skill isn’t
            immediately visible to others. You can be skilled but still
            undervalued by your employer. This might be happening to you if you
            recognize the following things:
          </p> */}
          <ul className="mt-6 list-inside list-disc font-d-din text-lg leading-8 text-gray-300">
            <li>Difficulty finding a high paying, exciting job</li>
            <li>Get lowball job offers from potential employers</li>
            <li>Not being paid your worth from current employers</li>
            <li>
              Lack of opportunities to take on more responsibility or get
              promoted{' '}
            </li>
            <li>Lack of credibility and freedom to do things your way</li>
          </ul>
          <p className="mt-6 font-d-din text-lg leading-8 text-gray-300">
            Skill and knowledge are crucial for a succesful software development
            career, but sadly salaries, job titles and respobsibilities are
            often based on first impressions, which means that if your skill
            isn't visible, you will be undervalued. This means you have to prove
            your worth to get what you deserve.
            <br />
            <br />
            The trick to sidestep this problem is to continue to grow and build
            cool stuff, but do so in a visible way. I designed the Web Dev
            Rocket to help driven individuals like you get rewarded for their
            work by making by doing exactly this: make your skill and growth
            visible.
          </p>
          {button}
        </div>
      </div>
    </div>
  )
}

const button = (
  <button className="mt-6 rounded-full  border border-synthwave-300 bg-gradient-to-br from-gray-700 from-5% to-synthwave-900 px-4 py-2 font-d-din-bold text-lg leading-8 text-gray-300 shadow-md shadow-synthwave-300">
    Get in touch
  </button>
)

const LEVERS = [
  {
    title: 'Social Impact',
    description:
      'Are you solving impactful problems that you personally care about?',
    icon: PuzzlePieceIcon,
    className: 'col-start-2 col-end-4',
  },
  {
    title: 'Process',
    description:
      'Is the process serving you? Is it clear what needs to be done and why?',
    icon: ClipboardDocumentListIcon,
    className: 'col-start-4 col-end-6',
  },
  {
    title: 'Team',
    description: 'Are your teammates helpful, kind and admirable?',
    icon: UserGroupIcon,
    className: 'col-start-1 col-end-3',
  },
  {
    title: 'Responsibilities',
    description:
      'Do you enjoy the responsibilities and tasks your are expected to fulfill?',
    icon: ListBulletIcon,
    className: 'col-start-3 col-end-5',
  },
  {
    title: 'Technologies',
    description:
      'Are you using technologies that you love? Do they do the job well?',
    icon: WrenchScrewdriverIcon,
    className: 'col-start-5 col-end-7',
  },
  {
    title: 'Growth',
    description:
      'Are you being pushed out of your comfort zone? Do you have opportunities to grow?',
    icon: ArrowTrendingUpIcon,
    className: 'col-start-1 col-end-3',
  },
  {
    title: 'Pay',
    description: 'Are you being compensated fairly for the value you deliver?',
    icon: BanknotesIcon,
    className: 'col-start-3 col-end-5',
  },
  {
    title: 'Work Life Balance',
    description: 'Do you have enough time/energy for rest and recreation?',
    icon: ScaleIcon,
    className: 'col-start-5 col-end-7',
  },
]

const EightFactorsGrid = ({}: {}) => {
  return (
    <div className="relative isolate mt-6">
      <div className="relative flex grid-cols-6 flex-col gap-x-10 gap-y-6 rounded-2xl px-5 pb-12 pt-5 md:grid">
        {LEVERS.map((row, index) => (
          <div key={index} className={clsx(row.className, 'relative')}>
            <div className="relative">
              <div
                className={clsx(
                  'absolute inset-0',
                  ' rounded-full border border-l-0 border-t-0 border-synthwave-500 bg-gradient-to-br from-gray-800 from-10% via-synthwave-900 via-90% to-synthwave-500 shadow-md shadow-synthwave-500',
                )}
              ></div>

              <div
                className={clsx(
                  'relative flex h-auto flex-col items-center  p-6 text-base leading-7 sm:p-6',
                )}
              >
                <div className="flex items-center">
                  <row.icon className="mr-2 h-6 w-6" />
                  <h3 className="font-gothic text-xl font-semibold text-white">
                    {row.title}
                  </h3>
                </div>
                <div>
                  <p className="text-md mt-2 text-center font-d-din text-gray-300">
                    {row.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

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

function TheEightFactors() {
  return (
    <div className=" relative isolate overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 z-0">
        <div
          className=" absolute inset-0 bg-gradient-to-b from-synthwave-900 from-10% via-synthwave-800 to-synthwave-900 to-90% "
          aria-hidden="true"
        ></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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
            I will design, implement and deploy a portfolio website to establish
            your personal brand. This portfolio will have a brag document to
            highlight your achievements and a fully functional blog to broadcast
            your experience to the world in a professional way.
          </p>
          <p className="mt-6 font-d-din text-lg leading-8 text-gray-300">
            Additionally, I will help you expand your brag document with weekly
            1-on-1 accountability coaching sessions. We will make a growth plan
            that aligns with your goals and interests. We'll build impressive
            yet manageable projects using exciting tools you'll attain the most
            prestigious certifications.
          </p>
        </div>
        <div className="mt-10">
          <div className="mt-10">
            <h3 className="text-center font-gothic text-2xl font-bold tracking-tight text-white sm:text-5xl">
              Build Impressive Projects
            </h3>
            <ul className="min-w-md mt-10 py-6 text-center font-d-din text-xl leading-10 text-gray-300 sm:py-12 lg:max-w-none">
              {PROJECTS.map((keyword) => (
                <li key={keyword} className="mx-10 my-2 inline-block">
                  {keyword}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <h3 className=" text-center font-gothic text-2xl font-bold tracking-tight text-white  sm:text-5xl">
              Using Reputable Tools
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

// (AI, Open Source
//   Libraries, Custom Programming Languages, Web Frameworks, Game
//   Engines)

// (Rust, Zig, Gleam, htmx etc.)
// (AWS Certifications, CompTia, Kubernetes)

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-gray-500 transition group-hover:fill-gray-600 dark:fill-gray-400 dark:group-hover:fill-gray-300" />
    </Link>
  )
}

function AboutMe() {
  return (
    <div className="relative isolate overflow-hidden bg-synthwave-900 py-16 sm:py-24">
      <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:px-8  xl:flex-row">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="font-gothic text-2xl font-semibold leading-7 text-synthwave-300">
            Meet Stefan
          </p>
          <h2 className="font-gothic text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Why am I doing this?
          </h2>
          <p className="mt-6 font-d-din text-lg leading-8 text-gray-300">
            I’m Stefan Wullems, a tech career coach who helps Web Developers
            like you progress in their careers. I have 7 years of experience as
            a software developer, 5 of which have been in the workforce, facing
            the same kinds of problems we are talking about here and that you
            are facing today.
            <br />
            <br />
            I’ve built this program to guide you through those actions that move
            you further away from the nightmare job and closer towards the dream
            job.
            <br />
            <br />I have carefully crafted step-by-step systems, checklists, and
            templates to help you improve on The Eight Factors. I will continue
            adding more for the foreseeable future.
            <br />
            <br />
            Some examples:
          </p>
          <ul className="mt-6 list-inside list-disc font-d-din text-lg leading-8 text-gray-300">
            <li>
              Identify unique high-value skills to build rather than commodity
              skills
            </li>
            <li>Formulate a growth plan to negotiate a raise or promotion.</li>
            <li>Build a business case for a tool you love. </li>
            <li>Advice on how to prepare for a tech interview. </li>
            <li>Creating an optimized tech resume and portfolio.</li>
          </ul>
          <p className="mt-6 font-d-din text-lg leading-8 text-gray-300">
            Most of these resources can be found for free on my website, but
            this one-on-one coaching program is for people who want to take the
            fast and direct path. If you’re interested, send me a LinkedIn DM,
            and let’s talk!
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.linkedin.com/in/stefan-wullems-572854242/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
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
  )
}

export default function WebDevRocket() {
  return (
    <main className="bg-synthwave-900">
      <Hero />
      <SEOKeywords />
      <AboutYou />
      <TheEightFactors />
      <AboutMe />
    </main>
  )
}
