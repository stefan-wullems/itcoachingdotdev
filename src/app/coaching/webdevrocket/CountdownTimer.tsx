'use client'
import React from 'react'

function getCountdown(countDownDate: Date) {
  // Get the current date and time
  const now = new Date().getTime()

  // Calculate the distance between now and the count down date
  const distance = countDownDate.getTime() - now
  const daysBetween = Math.floor(distance / (1000 * 60 * 60 * 24))

  // Calculate hours, minutes, and seconds
  const hours =
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) +
    daysBetween * 24
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  return (
    'T-' +
    `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
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
    <div className="bg-synthwave-900 font-gothic flex h-24 flex-col justify-center bg-opacity-80">
      <p id="countdown" className="text-center text-2xl text-white">
        {countdown}
      </p>
      <p className="text-center text-xs text-white">START OF NEXT COHORT</p>
    </div>
  )
}
