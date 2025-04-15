import Link from "next/link";
import { ReactNode, HTMLAttributes } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
} & HTMLAttributes<HTMLLIElement>;

export default function NavLink({ href, children, ...props }: NavLinkProps) {
  return (
    <li className={`hover:text-gray300 ${props.className ?? ''}`} {...props}>
      <Link href={href}>{children}</Link>
    </li>
  );
}
