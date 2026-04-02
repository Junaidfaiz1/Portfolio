"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, FolderOpen, Mail } from "lucide-react";

const iconMap = {
  Home: <Home className="w-5 h-5 mr-2" />,
  About: <User className="w-5 h-5 mr-2" />,
  Projects: <FolderOpen className="w-5 h-5 mr-2" />,
  Contact: <Mail className="w-5 h-5 mr-2" />,
};

const NavLinks = ({ links, mobile = false, onNavigate }) => {
  const pathName = usePathname();

  return links.map((link, index) => (
    <Link
      key={index}
      href={link.url}
      onClick={onNavigate}
      className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
        mobile ? "w-full" : ""
      } ${
        pathName === link.url
          ? "bg-amber-400/20 text-amber-300"
          : "text-slate-200 hover:bg-white/10 hover:text-white"
      }`}
    >
      {iconMap[link.title]}
      <span>{link.title}</span>
    </Link>
  ));
};

export default NavLinks;
