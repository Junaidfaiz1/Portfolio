"use client";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-shell mt-10">
      <div className="panel flex flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-300 sm:flex-row">
        <p>© {currentYear} Junaid Faiz. All rights reserved.</p>
        <p className="text-slate-400">Full Stack Developer</p>
      </div>
    </footer>
  );
};

export default Footer;
