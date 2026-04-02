"use client";
import HeroSection from "@/Components/HeroSection";
import Skills from "@/app/about/components/Skills";
import AboutMe from "@/app/about/components/AboutMe";
import Expertise from "@/app/about/components/Expertise";
import Certification from "@/app/about/components/Certification";
import Services from "@/app/about/components/Services";
import Achievements from "@/app/about/components/Achievements";
// import Testimonials from "@/app/about/components/Testimonials";
// import CallToAction from "@/app/about/components/CallToAction";
import Projects from "@/app/projects/components/Projects";
import ContactUs from "@/app/contact/components/contact-us";
import Footer from "@/Components/Footer";
const page = () => {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Expertise />
      <Certification />
      <Skills />
      <Services />
      <Achievements />
      {/* <Testimonials /> */}
      <Projects />
      {/* <CallToAction /> */}
      <ContactUs />
      <Footer />
    </>
  );
};

export default page;
