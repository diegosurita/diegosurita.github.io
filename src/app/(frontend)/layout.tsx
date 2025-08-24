import React from 'react'
import './globals.css'
import '../../../node_modules/flag-icons/css/flag-icons.min.css'
import TopMenu from '@/components/frontend/top-menu'
import Footer from '@/components/frontend/footer'

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className="bg-slate-900 text-white font-poppins">
        <TopMenu />
        <main className="flex-grow container mx-auto pt-18">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
