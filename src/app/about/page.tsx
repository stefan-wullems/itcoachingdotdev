import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/with-maki.jpg'
import { Layout } from '@/components/Layout'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-emerald-500 dark:text-zinc-200 dark:hover:text-emerald-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-emerald-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Stefan Wullems. I live in Amsterdam and help people level up their web careers.',
}

export default function About() {
  return (
    <Layout>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              I’m Stefan Wullems. I live in Amsterdam and help people level up
              their web careers.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I loved building things and solving problems for as long as I
                can remember. School was never my thing. Instead, I used to skip
                class to write games, read physics books, and hit the gym.
              </p>
              <p>
                I love learning about tech and I’m equally enthusiastic about
                helping others. I was a personal trainer for 2 years before I
                got into tech, and as a programmer, I loved to help my
                colleagues and work directly with customers. Of all of the code
                I’ve written, the most rewarding hasn’t been the most
                challenging problem, but the code that made the lives of my
                colleagues or the user a bit better.
              </p>
              <p>
                After 7 years of being focused on the tech side, I realized that
                I would find it most fulfilling if I concentrated my efforts on
                lifting up other people rather than only worrying about my own
                craft. I started following the management learning path that my
                employer was offering at the time, went back to school to start
                studying psychology, got certified as a coach, and finally quit
                my job to start my own coaching practice.
              </p>
              <p>
                Today, I’m a Web Career Coach. I specifically help Web
                Developers level up their careers by improving their skills in
                the three levers of value: Tech, Organization, and Self.
              </p>
              <p>
                If any of this speaks to you, feel free to{' '}
                <Link
                  href="mailto:stefan@stefanwullemscoaching.com"
                  className="font-medium text-emerald-500 underline"
                >
                  email me
                </Link>{' '}
                or{' '}
                <Link
                  href="https://www.linkedin.com/in/stefan-wullems-572854242/"
                  className="font-medium text-emerald-500 underline"
                >
                  DM me on Linkedin
                </Link>
                !
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://www.linkedin.com/in/stefan-wullems-572854242/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="https://github.com/stefan-wullems"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="mailto:stefan@stefanwullemscoaching.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                stefan@stefanwullemscoaching.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
