import React from "react";
import Skills from "@/app/about/components/Skills";
import AboutMe from "./components/AboutMe";
import Expertise from "./components/Expertise";
import Certification from "./components/Certification";
import Services from "./components/Services";
import Achievements from "./components/Achievements";
import Footer from "@/Components/Footer";
import CallToAction from "./components/CallToAction";
import JsonLd from "@/Components/JsonLd";
import {
  SITE_URL,
  buildPageMetadata,
  breadcrumbList,
  absoluteUrl,
} from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About",
  description:
    "About Junaid Faiz — Full Stack Developer & AI Engineer with 1.5+ years of experience building React, Next.js, NestJS, LangChain, and LangGraph applications. Skills, services, certifications, and professional background in Lahore, Pakistan.",
  path: "/about",
  keywords: [
    "About Junaid Faiz",
    "Full Stack Developer Lahore",
    "AI Engineer experience",
    "NestJS LangChain developer",
    "web development services Pakistan",
  ],
  type: "profile",
});

const About = () => {
  return (
    <>
      <JsonLd
        data={[
          {
            "@type": "AboutPage",
            "@id": absoluteUrl("/about#webpage"),
            url: absoluteUrl("/about"),
            name: "About Junaid Faiz",
            description:
              "Background, skills, services, and experience of Full Stack Developer & AI Engineer Junaid Faiz.",
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#person` },
            mainEntity: { "@id": `${SITE_URL}/#person` },
          },
          breadcrumbList([
            { name: "Home", item: SITE_URL },
            { name: "About", item: absoluteUrl("/about") },
          ]),
        ]}
      />
      <div className="space-y-1">
        <AboutMe titleAs="h1" />
        <Expertise />
        <Certification />
        <Skills />
        <Services />
        <Achievements />
        <CallToAction />
      </div>
      <Footer />
    </>
  );
};

export default About;
