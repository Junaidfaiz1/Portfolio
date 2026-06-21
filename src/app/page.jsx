import HeroSection from "@/Components/HeroSection";
import Skills from "@/app/about/components/Skills";
import AboutMe from "@/app/about/components/AboutMe";
import Expertise from "@/app/about/components/Expertise";
import Certification from "@/app/about/components/Certification";
import Services from "@/app/about/components/Services";
import Achievements from "@/app/about/components/Achievements";
import Projects from "@/app/projects/components/Projects";
import ContactUs from "@/app/contact/components/contact-us";
import Footer from "@/Components/Footer";

function TechMarquee() {
  const techs = [
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "GraphQL",
    "MongoDB",
    "Prisma",
    "LangChain",
    "LangGraph",
    "OpenAI",
    "Tailwind CSS",
    "Socket.IO",
    "AWS",
  ];

  return (
    <div className="relative overflow-hidden py-10">
      <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#fafafa] to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#fafafa] to-transparent" />
      <div className="flex animate-marquee whitespace-nowrap">
        {[...techs, ...techs].map((tech, i) => (
          <span
            key={i}
            className="mx-4 text-lg font-semibold text-gray-600 sm:mx-6 sm:text-xl"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="section-shell">
      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </div>
  );
}

const page = () => {
  return (
    <>
      <HeroSection />
      <TechMarquee />
      <AboutMe />
      <Divider />
      <Expertise />
      <Divider />
      <Certification />
      <Divider />
      <Skills />
      <Services />
      <Divider />
      <Achievements />
      <Projects />
      <ContactUs />
      <Footer />
    </>
  );
};

export default page;
