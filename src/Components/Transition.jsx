"use client";

import React from "react";
import Navbar from "./Navbar";

const Transition = ({ children }) => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="pt-20 pb-10 sm:pt-24">{children}</main>
    </div>
  );
};

export default Transition;
