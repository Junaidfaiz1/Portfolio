"use client";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year
  return (
    <footer className="w-full flex justify-center items-center h-24 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 text-white shadow-xl mt-12">
      <p className="text-xs sm:text-sm md:text-base font-semibold tracking-wide drop-shadow-lg">
        © {currentYear} <span className="font-bold">Junaid Faiz</span>. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
