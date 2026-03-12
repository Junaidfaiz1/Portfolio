"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ links }) => {
  const pathName = usePathname();
  return links.map((link, index) => (
    <Link
      key={index}
      href={link.url}
      className={`rounded-lg px-4 py-2 transition-all font-semibold text-base tracking-wide hover:bg-white hover:text-blue-600 dark:hover:bg-gray-800 dark:hover:text-purple-400 ${pathName === link.url ? "bg-white text-blue-600 shadow-md dark:bg-gray-800 dark:text-purple-400" : "text-white"}`}
    >
      {link.title}
    </Link>
  ));
};

export default NavLinks;
