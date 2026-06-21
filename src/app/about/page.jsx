import React from "react";
import Skills from "@/app/about/components/Skills";
import AboutMe from "./components/AboutMe";
import Expertise from "./components/Expertise";
import Certification from "./components/Certification";
import Services from "./components/Services";
import Achievements from "./components/Achievements";

export const metadata = {
  title: "About",
  description:
    "Learn about Junaid Faiz — Full Stack Developer & AI Engineer with 1+ years of experience in React, Next.js, Node.js, NestJS, LangChain, LangGraph, and building AI-powered web applications.",
  openGraph: {
    title: "About Junaid Faiz — Full Stack Developer & AI Engineer",
    description:
      "Skills, expertise, certifications, and services offered by Junaid Faiz. Specializing in MERN stack development and AI/LLM engineering.",
  },
};

const About = () => {
  return (
    <div className="space-y-1">
      <AboutMe />
      <Expertise />
      <Certification />
      <Skills />
      <Services />
      <Achievements />
    </div>
  );
};
export default About;
