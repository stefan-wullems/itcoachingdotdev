import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'Thank you',
  description: 'Thanks for expressing interest, I will reach out ASAP.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thanks for expressing interest."
      intro="I will contact you by email as soon as possible. Let's get this thing going shall we?"
    />
  )
}
