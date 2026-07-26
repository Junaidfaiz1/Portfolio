"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Junaid Faiz" },
    { href: "/projects", label: "View projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="section-shell mt-10 pb-8">
      <div className="rounded-2xl border border-slate-200/60 bg-white/80 px-6 py-8 shadow-sm sm:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <Link href="/" className="group flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-xs font-bold text-white">
                JF
              </div>
              <span className="text-sm font-bold text-slate-700">
                Junaid Faiz
              </span>
            </Link>
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-slate-400">
              Full Stack Developer & AI Engineer building modern web applications
              and intelligent features with React, Next.js, NestJS, and LangChain.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Explore
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs font-medium text-slate-500 transition-colors hover:text-violet-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Social
            </p>
            <div className="flex items-center gap-4 sm:justify-end">
              <a
                href="https://github.com/Junaidfaiz1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-medium text-slate-400 transition-colors hover:text-violet-600"
                aria-label="Junaid Faiz on GitHub"
              >
                GitHub <ArrowUpRight size={11} />
              </a>
              <a
                href="https://linkedin.com/in/junaid-faiz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-medium text-slate-400 transition-colors hover:text-violet-600"
                aria-label="Junaid Faiz on LinkedIn"
              >
                LinkedIn <ArrowUpRight size={11} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-100 pt-5 text-center">
          <p className="text-xs text-slate-400">
            &copy; {currentYear} Junaid Faiz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
