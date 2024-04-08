"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export const NavItem = ({ link, children, customClasses, customStyles }) => {
  const router = useRouter();
  return (
    <Link
      href={link.href || "/"}
      style={{
        ...customStyles,
      }}
    >
      {link.text}
      {children}
    </Link>
  );
};
