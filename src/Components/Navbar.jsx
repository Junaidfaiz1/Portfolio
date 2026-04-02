"use client";
import React from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";

const Links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/projects", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const closeMenu = () => setOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <Link href="/" className="group flex flex-col leading-tight">
          <span className="text-lg font-semibold tracking-wide text-slate-100">
            Junaid Faiz
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400 group-hover:text-amber-300 transition-colors duration-200">
            Full Stack Engineer
          </span>
        </Link>

        <div className="hidden md:flex">
          <NavLinks links={Links} />
        </div>

        <button
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-slate-100 transition-colors hover:bg-white/10"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      <div
        className={`md:hidden border-t border-white/10 bg-slate-950/95 transition-all duration-200 ${open ? "max-h-64" : "max-h-0 overflow-hidden"}`}
      >
        <div className="section-shell py-4">
          <NavLinks links={Links} onNavigate={() => setOpen(false)} mobile />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
