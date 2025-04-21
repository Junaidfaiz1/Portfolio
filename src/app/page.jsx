
import HeroSection from "../components/HeroSection.jsx"
import Skills from "@/app/about/components/Skills";
import AboutMe from "@/app/about/components/AboutMe";
import Projects from "@/app/projects/components/Projects";
import ContactUs from "@/app/contact/components/contact-us";
import Footer from "../components/Footer.jsx";
const Homepage = () => {
  return (
    <>
    <HeroSection/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <ContactUs/>
    <Footer/>
   
    
   </>
  );
};

export default Homepage;