'use client'

export function Tag({ children }: { children: React.ReactNode }) {
  return <span className="text-md  font-medium text-zinc-300">#{children}</span>
}
