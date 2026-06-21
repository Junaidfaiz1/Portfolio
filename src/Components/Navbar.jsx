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
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const closeMenu = () => setOpen(false);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("resize", closeMenu);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", closeMenu);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/60 bg-white/90 shadow-sm shadow-slate-200/50 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-sm font-bold text-white shadow-md shadow-violet-200/50">
            JF
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-wide text-slate-800">
              Junaid Faiz
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.15em] text-slate-400 sm:block">
              Developer & AI Engineer
            </span>
          </div>
        </Link>

        <div className="hidden md:flex md:items-center md:gap-1">
          <NavLinks links={Links} />
        </div>

        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-all hover:bg-slate-100 hover:text-slate-800"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-[5px]">
            <span
              className={`h-[1.5px] w-[18px] bg-current transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`h-[1.5px] w-[18px] bg-current transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`h-[1.5px] w-[18px] bg-current transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      <div
        className={`md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl transition-all duration-300 ease-out ${
          open ? "max-h-72 opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="section-shell py-3 pb-5">
          <NavLinks links={Links} onNavigate={() => setOpen(false)} mobile />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
