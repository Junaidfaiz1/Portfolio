"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";

const Links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/projects", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  // Animation variants
  const Topvariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
  };
  const middleVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
  };
  const ListVariants = {
    closed: { x: "100vh" },
    opened: {
      x: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.15 },
    },
  };
  const listsItemVariants = {
    closed: { opacity: 0, x: 50 },
    opened: { opacity: 1, x: 0 },
  };
  return (
    <nav className="w-full flex items-center justify-between px-4 sm:px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 dark:bg-black shadow-xl fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <span className="text-2xl font-extrabold text-white drop-shadow-lg tracking-wide">
          Junaid Faiz
        </span>
      </Link>
      {/* Desktop NavLinks */}
      <div className="hidden md:flex gap-8">
        <NavLinks links={Links} />
      </div>
      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          className="flex flex-col gap-1 w-8 h-8 justify-center items-center focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          <motion.span
            className="block w-8 h-1 bg-white rounded"
            variants={Topvariants}
            animate={open ? "opened" : "closed"}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-8 h-1 bg-white rounded"
            variants={middleVariants}
            animate={open ? "opened" : "closed"}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-8 h-1 bg-white rounded"
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>
      {/* Mobile NavLinks */}
      <motion.div
        className={`fixed top-16 right-0 w-64 h-screen bg-gradient-to-b from-blue-600 via-purple-500 to-pink-400 dark:bg-black shadow-2xl flex flex-col gap-8 p-8 md:hidden transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        variants={ListVariants}
        animate={open ? "opened" : "closed"}
        initial="closed"
      >
        <NavLinks links={Links} />
      </motion.div>
    </nav>
  );
};

export default Navbar;
