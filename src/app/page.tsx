import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import barbell from '@/images/photos/barbell.jpg'
import dumbbell2 from '@/images/photos/dumbbell2.jpeg'
import avatarImage from '@/images/avatar.png'
import avatarNoBGImage from '@/images/avatarthumb2.png'

import amsterdam from '@/images/photos/amsterdam.jpg'

import datacenter from '@/images/photos/datacenter.jpg'
import image4 from '@/images/photos/IMG_8399.jpg'
import image5 from '@/images/photos/cliff.jpg'
import dumbbels from '@/images/photos/dumbbelss.png'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { Layout } from '@/components/Layout'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-gray-100 stroke-gray-400 dark:fill-gray-100/10 dark:stroke-gray-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-gray-400 dark:stroke-gray-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-gray-100 stroke-gray-400 dark:fill-gray-100/10 dark:stroke-gray-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-gray-400 dark:stroke-gray-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
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

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-gray-100 p-6 dark:border-gray-700/40"
    >
      <h2 className="flex text-sm font-semibold text-gray-900 dark:text-gray-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-gray-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-gray-800/5 placeholder:text-gray-400 focus:border-synthwave-300 focus:outline-none focus:ring-4 focus:ring-synthwave-300/10 sm:text-sm dark:border-gray-700 dark:bg-gray-700/[0.15] dark:text-gray-200 dark:placeholder:text-gray-500 dark:focus:border-synthwave-300 dark:focus:ring-synthwave-300/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 dark:border dark:border-gray-700/50 dark:bg-gray-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-gray-900 dark:text-gray-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-gray-500 dark:text-gray-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-gray-400 dark:text-gray-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Planetaria',
      title: 'CEO',
      logo: logoPlanetaria,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Airbnb',
      title: 'Product Designer',
      logo: logoAirbnb,
      start: '2014',
      end: '2019',
    },
    {
      company: 'Facebook',
      title: 'iOS Software Engineer',
      logo: logoFacebook,
      start: '2011',
      end: '2014',
    },
    {
      company: 'Starbucks',
      title: 'Shift Supervisor',
      logo: logoStarbucks,
      start: '2008',
      end: '2011',
    },
  ]

  return (
    <div className="rounded-2xl border border-gray-100 p-6 dark:border-gray-700/40">
      <h2 className="flex text-sm font-semibold text-gray-900 dark:text-gray-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-gray-400 transition group-active:stroke-gray-600 dark:group-hover:stroke-gray-50 dark:group-active:stroke-gray-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[
          { image: barbell, alt: 'Barbell' },
          { image: amsterdam, alt: 'Amsterdam' },
          { image: image3, alt: 'Do more' },
          { image: datacenter, alt: 'Datacenter' },
          { image: image5, alt: 'Achieve your tech goals' },
        ].map((image, imageIndex) => (
          <div
            key={image.image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-gray-100 sm:w-72 sm:rounded-2xl dark:bg-gray-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image.image}
              alt={image.alt}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-gray-950 to-gray-700 font-d-din">
      <div className="grid grid-cols-12">
        <div className="col-span-6 px-6 pb-24 pt-10 sm:pb-32 lg:pb-56 lg:pl-12 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-24 inline-block bg-gradient-to-b from-synthwave-300 via-synthwave-500 to-synthwave-300 bg-clip-text  font-d-din-bold text-4xl tracking-tight text-transparent drop-shadow-[0_1.6px_1.6px_rgba(0,0,0,0.8)] sm:mt-10 sm:text-8xl">
              Take Agency Over Your Career
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
        </div>
        <div className="relative col-span-4 flex items-end justify-end">
          <Image
            className="absolute bottom-0 h-[500px] w-[500px] "
            src={avatarNoBGImage}
            alt=""
          />
        </div>
        <div className="col-span-2 h-full bg-black"></div>
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <Layout>
      {/* <Hero /> */}
      <Container className="mt-6">
        <div className=" max-w-2xl">
          <h1 className="font-d-din-bold text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-gray-100">
            Stefan Wullems - Tech Career Coach
          </h1>
          <p className="mt-6 text-base text-gray-600 dark:text-gray-400">
            Hey, I’m Stefan Wullems.
            <br />
            <br />
            I help Web Engineers like you reach common career goals, like
            increasing your software engineering level, negotiating a raise, or
            integrating your interests into your job.
            <br />
            <br />
            I’m an Online Tech Career Coach and entrepreneur based in Amsterdam,
            and I have 7 years of experience in software development.
            <br />
            <br />
            If you want to take ownership of your career, consider the{' '}
            <Link className="link-component" href="/webdevrocket">
              Web Dev Rocket program
            </Link>
            . Let’s work together on building the career you want!
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.linkedin.com/in/stefan-wullems-572854242/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://github.com/stefan-wullems"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            {/* <Resume /> */}
          </div>
        </div>
      </Container>
    </Layout>
  )
}
