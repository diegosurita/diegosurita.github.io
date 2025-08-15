import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="home">
      <div className="content">
        <picture>
          <source srcSet="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg" />
          <Image
            alt="Payload Logo"
            height={65}
            src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
            width={65}
            priority
          />
        </picture>
        {!user && <h1>Welcome to Diego Surita&apos;s Website</h1>}
        {user && <h1>Welcome back, {user.email}</h1>}
        
        {!user && (
          <p>
            This is the personal website of Diego Surita, built with Next.js and Payload CMS.
            Explore the admin panel to manage content or browse the documentation to learn more.
          </p>
        )}
        
        <div className="links">
          <a
            className="admin"
            href={payloadConfig.routes.admin}
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Go to admin panel"
          >
            Go to admin panel
          </a>
          <a
            className="docs"
            href="https://payloadcms.com/docs"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Read Payload CMS documentation"
          >
            Documentation
          </a>
        </div>
      </div>
      
      <footer className="footer">
        <p>Built with Next.js and Payload CMS</p>
        <a 
          className="codeLink" 
          href={fileURL}
          aria-label="View source code"
        >
          <code>app/(frontend)/page.tsx</code>
        </a>
      </footer>
    </div>
  )
}
