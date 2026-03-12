"use client";

import React from "react";
import Skills from "@/app/about/components/Skills";
import AboutMe from "./components/AboutMe";
import Expertise from "./components/Expertise";
import Certification from "./components/Certification";
import Services from "./components/Services";
import Achievements from "./components/Achievements";
// import Testimonials from "./components/Testimonials";
// import CallToAction from "./components/CallToAction";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-red-50">
      <AboutMe />
      <Expertise />
      <Certification />
      <Skills />
      <Services />
      <Achievements />
      {/* <Testimonials /> */}
      {/* <CallToAction /> */}
    </div>
  );
};
export default About;
