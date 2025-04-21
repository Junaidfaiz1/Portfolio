"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import {motion} from "framer-motion"


const Links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/projects", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const Topvariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    }
  }

  const middleVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    }
  }
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
    }
  }

  const ListVariants = {
    closed: {
      x: "100vh",
    },
    opened: {
      x: 0,
      transition:{
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    }
  }

  const listsItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    }
  }


  return (
    <div className="h-full flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg relative">
      <div className="hidden md:flex gap-4">
        <NavLinks links={Links} />
      </div>

      {/* Logo */}
      <div className="md:hidden lg:flex justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 flex items-center"
        >
          <span className="text-white mr-1">Junaid</span>
          <span className="w-12 h-8 text-black bg-white rounded-md flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>

      {/* social media icons */}
      <div className="hidden md:flex gap-4">
        <Link
          href={"https://github.com/junaidfaiz1"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/github.png" alt="GitHub" width={24} height={24} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/junaid-faiz/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
        </Link>
      </div>
      {/* Navigation Links */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between relative cursor-pointer z-50"
          onClick={() => setOpen(!open)}
        >
          <motion.div variants={Topvariants} animate= {open ? "opened": "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
          <motion.div variants={middleVariants} animate= {open ? "opened": "closed"} className="w-10 h-1 bg-black rounded"></motion.div>
          <motion.div variants={bottomVariants} animate= {open ? "opened": "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
        </button>
        {open && (
          <motion.div variants={ListVariants} initial="closed" animate= "opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center z-40 gap-8 ">
            {Links.map((link) => (
              <motion.div  key={link.title} variants={listsItemVariants}>
              <Link
                href={link.url}
                className="text-sm font-medium"
                >
                {link.title}
              </Link>
                </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
