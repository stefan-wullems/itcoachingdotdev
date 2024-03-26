import typographyPlugin from '@tailwindcss/typography'
import { type Config } from 'tailwindcss'

import typographyStyles from './typography'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'selector',
  plugins: [typographyPlugin],
  theme: {
    extend: {
      animation: {
        'ping-xs': 'ping-xs 2s cubic-bezier(0, 0, 0.2, 0.1) infinite',
        'ping-xs-offset':
          'ping-xs-offset 2s cubic-bezier(0, 0, 0.2, 0.1) infinite',

        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 10s linear infinite',
        'bounce-slow': 'bounce 10s infinite',
      },
      colors: {
        synthwave: {
          '100': '#79fdfb',
          '200': '#5663bd',
          '300': '#5e3aa8',
          '400': '#771f95',
          '500': '#8e0f84',
          '600': '#620463',
          '700': '#4b055b',
          '800': '#2f0045',
          '900': '#090019',
        },
      },
      fontFamily: {
        gothic: ['var(--bank-gothic)'],
        'd-din': ['var(--d-din)'],
        'd-din-bold': ['var(--d-din-bold)'],
      },
    },
    fontSize: {
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    typography: typographyStyles,
  },
} satisfies Config
