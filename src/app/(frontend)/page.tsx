import Button from '@/components/frontend/button'
import Link from 'next/dist/client/link'
import React from 'react'

export const metadata = {
  description: "Hi, I'm Diego Surita, a software engineer.",
  title: 'Diego Surita',
}

const getYearsOfExperience = () => {
  const start = new Date('2012-10-01')
  const now = new Date()
  let yearsOfExperience = now.getFullYear() - start.getFullYear()
  const monthDiff = now.getMonth() - start.getMonth()

  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < start.getDate())) {
    yearsOfExperience--
  }

  return yearsOfExperience
}

export default async function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center mt-[30vh] h-[70vh]">
        <h1 className="text-7xl text-center text-shadow-[0_0_10rem] text-shadow-indigo-400">
          Diego Surita
          <br />
          <span className="text-blue-500 text-6xl">Software Engineer</span>
        </h1>
        <p className="text-xl text-gray-500 mt-5">
          Building web applications for over {getYearsOfExperience()} years
        </p>
        <div className="mt-[15vh] flex justify-center">
          <div aria-label="Scroll down" className="flex flex-col items-center">
            <svg
              className="w-12 h-12 text-blue-500 drop-shadow"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7 7 7-7" />
            </svg>
            <svg
              className="w-12 h-12 text-blue-500 drop-shadow -mt-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7 7 7-7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl text-blue-500">A bit about me</h2>
        <p className="text-gray-400 max-w-xl text-center">
          Software engineer with over {getYearsOfExperience()} years of experience building web
          applications of various sizes, using diverse technologies across different industries. I'm
          passionate about creating high-quality software and continuously learning new
          technologies.
        </p>
        <Link href="/about">
          <Button text="Learn more about me" variant="soft" />
        </Link>
      </div>
    </>
  )
}
