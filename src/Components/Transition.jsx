"use client";

import React from "react";
import Navbar from "./Navbar";

const Transition = ({ children }) => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="pt-24 pb-10">{children}</main>
    </div>
  );
};

export default Transition;
