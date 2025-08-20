import React from 'react'

export const metadata = {
  description: "Hi I'm Diego Surita, a Software Engineer.",
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
      <div className="flex flex-col items-center mt-64">
        <h1 className="text-7xl text-center text-shadow-[0_0_10rem] text-shadow-indigo-400">
          Diego Surita
          <br />
          <span className="text-blue-500 text-6xl">Software Engineer</span>
        </h1>
        <p className="text-xl text-gray-500 mt-5">
          Building web applications for over {getYearsOfExperience()} years
        </p>
      </div>
      <div className="flex flex-col mt-64 items-center">
        <h2 className="text-3xl text-blue-500">A bit about me</h2>
        <p className="text-gray-400">
          I'm a passionate software engineer with a love for building web applications.
        </p>
      </div>
    </>
  )
}
