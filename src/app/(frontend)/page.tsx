import React from 'react'

export const metadata = {
  description: "Hi I'm Diego Surita, a Software Engineer.",
  title: 'Diego Surita',
}

export default async function HomePage() {
  return (
    <div className="flex h-[calc(100vh-4.5rem)] items-center justify-center">
      <h1 className="text-4xl">Diego Surita</h1>
    </div>
  )
}
