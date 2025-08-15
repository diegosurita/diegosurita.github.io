import React from 'react'
import './styles.css'

export const metadata = {
  title: 'Diego Surita | Personal Website',
  description: 'Personal website and portfolio of Diego Surita - Full Stack Developer',
  keywords: 'Diego Surita, developer, portfolio, web development, full stack',
  authors: [{ name: 'Diego Surita' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
