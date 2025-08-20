import React from 'react'
import './globals.css'
import TopMenu from '@/components/frontend/top-menu'

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className="bg-slate-900 text-white font-poppins">
        <TopMenu />
        <main className="flex-grow container mx-auto pt-18">{children}</main>
      </body>
    </html>
  )
}
