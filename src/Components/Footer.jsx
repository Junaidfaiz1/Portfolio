import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { contact } from "@/data/site";

const explore = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="wrap pb-8 pt-28">
      <div className="flex flex-wrap justify-between gap-8 border-t border-stone-200 pt-8">
        <div className="max-w-[340px]">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-[17px] font-extrabold"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-ink text-[13px] text-white">
              JF
            </span>
            Junaid Faiz
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500">
            Full Stack Developer &amp; AI Engineer building modern web
            applications and intelligent features.
          </p>
        </div>
        <div className="flex flex-wrap gap-16 text-[15px]">
          <nav aria-label="Footer" className="flex flex-col gap-2.5">
            <span className="lbl">Explore</span>
            {explore.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-zinc-500">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2.5">
            <span className="lbl">Social</span>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-zinc-500"
            >
              GitHub <ExternalLink size={14} aria-hidden="true" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-zinc-500"
            >
              LinkedIn <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <p className="mt-8 text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} Junaid Faiz. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
