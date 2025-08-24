import Link from 'next/link'

const listStyles = 'flex flex-col gap-2'
const listTitleStyles = 'font-light'
const listLinkStyles = 'font-light text-slate-400 hover:text-blue-500'

const Footer = () => {
  return (
    <footer className="w-full mt-8 p-4 border-t-1 border-t-slate-700">
      <div className="flex container mx-auto gap-32">
        <Link href="/">
          <h2 className="text-xl">{'</>'} Diego Surita</h2>
          <p className="text-sm text-slate-400">Software Engineer</p>
        </Link>
        <nav>
          <ul className={listStyles}>
            <li className={listTitleStyles}>Pages</li>
            <li>
              <Link href="/about" className={listLinkStyles}>
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className={listLinkStyles}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className={listLinkStyles}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <ul className={listStyles}>
          <li className={listTitleStyles}>Medias</li>
          <li>
            <Link href="https://www.linkedin.com/in/diegosurita/" className={listLinkStyles}>
              LinkedIn
            </Link>
          </li>
          <li>
            <Link href="https://github.com/diegosurita" className={listLinkStyles}>
              GitHub
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-center text-sm text-slate-400 mt-8">
        © 2025 Diego Surita. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
