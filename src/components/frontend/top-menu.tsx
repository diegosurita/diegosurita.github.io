'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoLanguage } from 'react-icons/io5'

const NAV_HEIGHT = 64 // h-16 (Tailwind)

const TopMenu = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= NAV_HEIGHT)
    }
    handleScroll() // initialize
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 backdrop-blur transition-colors duration-300 ${
        scrolled ? 'bg-blue-950/60 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto h-16 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl">Diego Surita</h1>
        </Link>
        <nav>
          <ul className="flex gap-6">
            <li className="relative">
              <Link href="/">Home</Link>
              <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-white" />
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="ml-4">
          <IoLanguage className="text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default TopMenu
