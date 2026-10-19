import React from "react";
import Navbar from "./Navbar";

const Transition = ({ children }) => {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Transition;
