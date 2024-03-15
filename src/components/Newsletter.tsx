'use client'

import { Button } from '@/components/Button'
import { useReducer, useState } from 'react'

const CONVERTKIT_FORM_ID = '6334055'

const API_KEY = 'DLplgj0N8VZ746sUKgsQjQ'

const initialState = 'IDLE'

function reducer(
  status: 'IDLE' | 'SUBMITTING' | 'SUBSCRIBED' | 'ERROR',
  action: { type: 'SUBMIT' | 'SUBMIT_SUCCESS' | 'SUBMIT_FAILURE' },
) {
  switch (action.type) {
    case 'SUBMIT':
      return 'SUBMITTING'
    case 'SUBMIT_SUCCESS':
      return 'SUBSCRIBED'
    case 'SUBMIT_FAILURE':
      return 'ERROR'
    default:
      return status
  }
}

function useSignupForNewsletter(id: string) {
  const [status, dispatch] = useReducer(reducer, initialState)

  const signup = async (email: string, onSuccess: () => void) => {
    dispatch({ type: 'SUBMIT' })

    try {
      const data = await fetch(
        `https://api.convertkit.com/v3/forms/${id}/subscribe`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: JSON.stringify({ api_key: API_KEY, email: email }),
        },
      ).then((res) => {
        // gtag('event', 'conversion', {
        //   send_to: 'AW-11454281649/kctqCJvNlokZELHv6dUq',
        // })
        return res.json()
      })

      if (data.subscription) {
        dispatch({ type: 'SUBMIT_SUCCESS' })
        if (onSuccess) {
          onSuccess()
        }
      } else {
        dispatch({ type: 'SUBMIT_FAILURE' })
      }
    } catch (error) {
      console.log(error)
      dispatch({ type: 'SUBMIT_FAILURE' })
    }
  }

  return { status, signup }
}

export function NewsletterInput() {
  const [email, setEmail] = useState('')
  const { status, signup } = useSignupForNewsletter(CONVERTKIT_FORM_ID)

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    signup(email, () => setEmail(''))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Get in touch</span>
      </h2>

      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'SUBMITTING' || status === 'SUBSCRIBED'}
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button
          type="submit"
          className="ml-4 flex-none"
          disabled={status === 'SUBMITTING' || status === 'SUBSCRIBED'}
        >
          {status !== 'SUBSCRIBED' && 'Send'}
          {status === 'SUBSCRIBED' && 'Thank you!'}
        </Button>
      </div>
    </form>
  )
}

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
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}
