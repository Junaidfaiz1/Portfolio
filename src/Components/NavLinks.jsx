"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ links, mobile = false, onNavigate }) => {
  const pathName = usePathname();

  return links.map((link, index) => (
    <Link
      key={index}
      href={link.url}
      onClick={onNavigate}
      className={`rounded-lg px-4 py-2 text-[13px] font-medium transition-all duration-200 ${
        mobile ? "flex w-full py-2.5" : ""
      } ${
        pathName === link.url
          ? "bg-violet-50 text-violet-700"
          : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
      }`}
    >
      {link.title}
    </Link>
  ));
};

export default NavLinks;
