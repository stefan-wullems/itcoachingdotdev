'use client'
import Link from 'next/link'
import React from 'react'

function getCountdown(countDownDate: Date) {
  // Get the current date and time
  const now = new Date().getTime()

  // Calculate the distance between now and the count down date
  const distance = countDownDate.getTime() - now

  // Calculate hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  )
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  return (
    'T-' +
    `${days < 10 ? '0' : ''}${days}:${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  )
}

export function CountdownTimer({ countDownDate }: { countDownDate: Date }) {
  const [countdown, setCountdown] = React.useState('T-00:00:00')

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdown(countDownDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [countDownDate])

  return (
    <div className="relative flex h-24 flex-col justify-center bg-synthwave-900 bg-opacity-80 font-gothic">
      <Link href={'/'} className="absolute inset-0 left-4 top-8 ">
        &larr; Home
      </Link>
      {/* <p id="countdown" className="text-center text-2xl text-white">
        {countdown}
      </p> */}
      {/* <p className="text-center text-xs text-white">START OF NEXT COHORT</p> */}
    </div>
  )
}
