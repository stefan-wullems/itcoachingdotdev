import clsx from 'clsx'

const CTA = 'https://bit.ly/coachstefan'

export function CTAButton({
  theme,
}: {
  theme: 'synthwave-300' | 'synthwave-500'
}) {
  return (
    <div className="mt-6">
      <a
        href={CTA}
        className={clsx(
          'rounded-full border  bg-gradient-to-br from-gray-700 from-5% to-synthwave-900 px-6 py-4 font-d-din-bold text-xl leading-8 text-gray-300 shadow-md ',
          {
            'synthwave-300':
              'border-synthwave-300 shadow-synthwave-300 hover:border-synthwave-500 hover:shadow-synthwave-500',
            'synthwave-500':
              'border-synthwave-500 shadow-synthwave-500 hover:border-synthwave-300 hover:shadow-synthwave-300',
          }[theme],
        )}
      >
        Free Discovery Call
      </a>
    </div>
  )
}
