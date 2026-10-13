"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="wrap sticky top-4 z-50 pt-5">
      <nav
        aria-label="Main"
        className="flex min-h-16 flex-wrap items-center justify-between gap-3 rounded-[32px] border border-stone-200 bg-white/90 py-2 pl-5 pr-2 shadow-[0_4px_20px_rgba(24,24,27,0.04)] backdrop-blur-md"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[17px] font-extrabold tracking-[-0.02em]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-ink text-[13px] text-white">
            JF
          </span>
          Junaid Faiz
        </Link>

        <div className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.url;
            return (
              <Link
                key={link.url}
                href={link.url}
                aria-current={active ? "page" : undefined}
                className={`inline-flex h-11 items-center rounded-full px-4 text-[15px] transition-colors ${
                  active
                    ? "bg-zinc-100 font-bold text-ink"
                    : "font-medium text-zinc-600 hover:text-ink"
                }`}
              >
                {link.title}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn-dark h-12 px-5">
            Hire me
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-100 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="flex w-full flex-col gap-1 pb-2 pr-3 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className={`flex h-11 items-center rounded-xl px-3 text-[15px] ${
                  pathname === link.url
                    ? "bg-zinc-100 font-bold"
                    : "font-medium text-zinc-600"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
