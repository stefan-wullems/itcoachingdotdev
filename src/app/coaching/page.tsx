import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/Layout'
import { Card } from '@/components/Card'
import Image from 'next/image'
import landscaperocketcentered from '../webdevrocket/images/lanscaperocketcentered.png'

export const metadata: Metadata = {
  title: 'Coaching',
  description: 'Ready to take the next step? Take a look at my offerings!',
}

export default async function Coaching({}: {}) {
  return (
    <SimpleLayout
      title="Coaching"
      intro="Ready to take the next step? Take a look at my offerings!"
    >
      <div className="md:border-l md:border-gray-100 md:pl-6 md:dark:border-gray-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          <div className="md:grid md:grid-cols-4 md:items-baseline">
            <Card className="md:col-span-3">
              <Card.Title href={`/webdevrocket`}>The Web Dev Rocket</Card.Title>
              <Image
                src={landscaperocketcentered}
                alt="The Web Dev Rocket"
                width={1200}
                height={627}
                className="mt-4"
              />
              <Card.Description>
                Work with a Tech Career Coach to achieve goals common to Web
                Engineers like you.
              </Card.Description>
              <Card.Cta>View Program</Card.Cta>
            </Card>
          </div>
        </div>
      </div>
    </SimpleLayout>
  )
}
