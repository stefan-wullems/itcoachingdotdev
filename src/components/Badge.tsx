'use client'

export function Tag({ children }: { children: React.ReactNode }) {
  return <span className="text-md  font-medium text-gray-300">#{children}</span>
}
