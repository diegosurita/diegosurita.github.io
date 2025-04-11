import Link from "next/link";

type NavLinkProps = Readonly<{
  href: string;
  children: React.ReactNode;
}>;

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <li className="hover:text-gray-400">
      <Link href={href}>{children}</Link>
    </li>
  );
}
