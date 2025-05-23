"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import NavLink from "@/components/common/navlink";

export default function Navbar() {
  const { lang } = useParams();

  return (
    <nav className="flex items-center justify-between h-24 mb-4">
      <Link href="/" className="text-2xl font-bold hover:text-gray-400">
        <p>Diego Surita</p>
        <p className="text-sm text-gray-500">Software Engineer</p>
      </Link>
      <ul className="flex gap-4">
        <NavLink href={`/${lang}/about`}>About</NavLink>
        <NavLink className="hidden" href={`/${lang}/blog`}>
          Blog
        </NavLink>
        <NavLink href="mailto:suritadev@gmail.com">Contact</NavLink>
      </ul>
    </nav>
  );
}
