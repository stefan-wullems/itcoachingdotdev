import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'Thank you',
  description: 'Thanks for getting in touch.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thanks for getting in touch."
      intro="I will contact you as soon as possible. Let's get this thing going shall we?"
    />
  )
}
