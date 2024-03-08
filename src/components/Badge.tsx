'use client'

export function Badge({
  children,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <span className="text-md rounded-full bg-opacity-20 px-2 py-1 font-medium text-zinc-300">
      #{children}
    </span>
  )
}
