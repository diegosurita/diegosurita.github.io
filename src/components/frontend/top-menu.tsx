'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import TopMenuFlag from '@/components/frontend/top-menu-flag'

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
        scrolled ? 'bg-blue-950/40 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto h-16 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-xl hover:text-blue-500 text-shadow-lg text-shadow-slate-900">
            {'</>'} Diego Surita
          </h1>
        </Link>
        <div className="flex gap-2 relative">
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link href="/about" className="hover:text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-500">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-500">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <span>|</span>
          <TopMenuFlag />
        </div>
      </div>
    </div>
  )
}

export default TopMenu
