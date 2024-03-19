import Image from 'next/image'
import landscapeRocketCentered from './images/lanscaperocketcentered.png'
import { CountdownTimer } from './CountdownTimer'
import withMaki from '@/images/with-maki.jpg'
import {
  ArrowTrendingUpIcon,
  BanknotesIcon,
  BoltIcon,
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
    url: `https://stefanwullemscoaching.com/coaching/webdevrocket`,
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
          className="from-synthwave-900 absolute inset-0 bg-gradient-to-b to-transparent"
          aria-hidden="true"
        ></div>
        <span className="opacity-10">
          <div
            className="hero-background-animate from-synthwave-900 via-synthwave-700 to-synthwave-600 absolute inset-0 bg-gradient-to-r"
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
              <h2 className="text-synthwave-300 font-gothic min-w-md mb-4 text-2xl">
                AN IT CAREER COACHING PROGRAM TAILORED TO WEB DEVELOPERS
              </h2>
              <h1 className="font-gothic min-w-md text-6xl font-bold tracking-tight text-white sm:text-7xl">
                THE WEB DEV ROCKET
              </h1>
              <p className="font-gothic min-w-md mt-8 text-xl leading-8 text-gray-300 lg:max-w-none">
                Take agency over your career.
              </p>
              <ul className="font-gothic min-w-md text-md mt-60 leading-8 text-gray-200 lg:max-w-none">
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
    <div className="shadow-synthwave-800 relative isolate mx-10 mt-10 overflow-hidden rounded-3xl py-12 shadow-lg sm:py-16">
      <div className="absolute inset-0 z-0">
        <div
          className=" to-synthwave-800 absolute inset-0 bg-gradient-to-b from-gray-900 from-10% to-90% "
          aria-hidden="true"
        ></div>
      </div>
      <div className="relative mx-auto flex max-w-7xl justify-center px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="font-d-din mt-6 text-lg leading-8 text-gray-200">
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
          <p className="text-synthwave-300 font-gothic text-2xl font-semibold leading-7">
            The two extremes
          </p>
          <h2 className="font-gothic text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Chase, Avoid
          </h2>
          <p className="font-d-din mt-6 text-lg italic leading-8 text-gray-300">
            Let’s imagine for a second what a nightmare job would look like.
            <br />
            <br />
            <span className="ml-2 inline-block">
              In a nightmare job, you would be working on{' '}
              <strong className="font-d-din-bold text-gray-200">
                problems you could care less about
              </strong>{' '}
              or even oppose, together with{' '}
              <strong className="font-d-din-bold text-gray-200">
                toxic colleagues
              </strong>
              , performing{' '}
              <strong className="font-d-din-bold text-gray-200">
                mindless tasks
              </strong>
              , using{' '}
              <strong className="font-d-din-bold text-gray-200">
                tools you hate
              </strong>
              ,{' '}
              <strong className="font-d-din-bold text-gray-200">
                stagnating
              </strong>
              , and getting{' '}
              <strong className="font-d-din-bold text-gray-200">
                paid too little
              </strong>
              , all while needing to{' '}
              <strong className="font-d-din-bold text-gray-200">
                crunch and work overtime
              </strong>
              .
            </span>
            <br />
            <br />
            As a contrast, here is a definition of a dream job.
            <br />
            <br />
            <span className="ml-2 inline-block italic">
              The dream job is working on the{' '}
              <strong className="font-d-din-bold text-gray-200">
                problems you care about
              </strong>{' '}
              with{' '}
              <strong className="font-d-din-bold text-gray-200">
                awesome colleagues
              </strong>
              , performing the{' '}
              <strong className="font-d-din-bold text-gray-200">
                tasks you enjoy
              </strong>
              , using the{' '}
              <strong className="font-d-din-bold text-gray-200">
                tools you love
              </strong>
              , and continually{' '}
              <strong className="font-d-din-bold text-gray-200">
                improving your craft
              </strong>{' '}
              while getting{' '}
              <strong className="font-d-din-bold text-gray-200">
                paid a fair salary
              </strong>{' '}
              with a{' '}
              <strong className="font-d-din-bold text-gray-200">
                solid work-life balance
              </strong>
              .
            </span>
            <br />
            <br />
            What if I told you that each and every one of the differences
            between these two extrememes is within your control. It is in your
            hands to move away from the nightmare job and towards the dream job.
          </p>
        </div>
      </div>
    </div>
  )
}

const LEVERS = [
  {
    title: 'Domain',
    description:
      'Are you solving impactful problems that you personally have a stake in?',
    icon: PuzzlePieceIcon,
    className: 'col-start-3 col-end-5',
  },
  {
    title: 'Team',
    description: 'Are your teammates helpful, kind and admirable?',
    icon: UserGroupIcon,
    className: 'col-start-1 col-end-3',
  },
  {
    title: 'Tasks',
    description: 'Are you regularly performing tasks that you enjoy?',
    icon: ListBulletIcon,
    className: 'col-start-3 col-end-5',
  },
  {
    title: 'Tools',
    description: 'Are you using tools that you love? Do they do the job well?',
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

const SevenLeversGrid = ({}: {}) => {
  return (
    <div className="relative isolate mt-6">
      <div className="relative flex grid-cols-6 flex-col gap-x-10 gap-y-6 rounded-2xl px-5 pb-12 pt-5 md:grid">
        {LEVERS.map((row, index) => (
          <div key={index} className={clsx(row.className, 'relative')}>
            <div className="relative">
              <div
                className={clsx(
                  'absolute inset-0',
                  ' via-synthwave-900 border-synthwave-500 to-synthwave-500 shadow-synthwave-500 rounded-full border border-l-0 border-t-0 bg-gradient-to-br from-gray-800 from-10% via-90% shadow-md',
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
                  <p className="font-d-din text-md mt-2 text-center text-gray-300">
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

function TheSevenLevers() {
  return (
    <div className=" relative isolate overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 z-0">
        <div
          className=" from-synthwave-900 via-synthwave-800 to-synthwave-900 absolute inset-0 bg-gradient-to-b from-10% to-90% "
          aria-hidden="true"
        ></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-synthwave-300 font-gothic text-2xl font-semibold leading-7">
            The Web Dev Rocket Program
          </p>
          <h2 className="font-gothic text-4xl font-bold tracking-tight text-white sm:text-6xl">
            The Seven Levers
          </h2>
          <p className="font-d-din mt-6 text-lg leading-8 text-gray-300">
            In my 7 years as a software developer, I’ve observed in myself and
            others that the satisfaction of a development job is roughly
            dependent on 7 factors, which I call The 7 Levers of Job
            Satisfaction.
          </p>
        </div>

        <SevenLeversGrid />
      </div>
    </div>
  )
}

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
    <div className="bg-synthwave-900 relative isolate overflow-hidden py-16 sm:py-24">
      <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:px-8  xl:flex-row">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-synthwave-300 font-gothic text-2xl font-semibold leading-7">
            Meet Stefan
          </p>
          <h2 className="font-gothic text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Why am I doing this?
          </h2>
          <p className="font-d-din mt-6 text-lg leading-8 text-gray-300">
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
            templates to help you improve on The 7 Factors. I will continue
            adding more for the foreseeable future.
            <br />
            <br />
            Some examples:
          </p>
          <ul className="font-d-din mt-6 list-inside list-disc text-lg leading-8 text-gray-300">
            <li>
              Identify unique high-value skills to build rather than commodity
              skills
            </li>
            <li>Formulate a growth plan to negotiate a raise or promotion.</li>
            <li>Build a business case for a tool you love. </li>
            <li>Advice on how to prepare for a tech interview. </li>
            <li>Creating an optimized tech resume and portfolio.</li>
          </ul>
          <p className="font-d-din mt-6 text-lg leading-8 text-gray-300">
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
            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
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
      <TheSevenLevers />
      <AboutMe />
    </main>
  )
}
