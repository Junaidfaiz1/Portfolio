import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/Components/sections/Hero";
import TechMarquee from "@/Components/sections/TechMarquee";
import SectionHeading from "@/Components/sections/SectionHeading";
import ProjectCard from "@/Components/sections/ProjectCard";
import Faq from "@/Components/sections/Faq";
import ContactInfo from "@/Components/sections/ContactInfo";
import ContactForm from "@/Components/sections/ContactForm";
import {
  AboutSection,
  Expertise,
  Certifications,
  Services,
  Process,
  Achievements,
  Testimonials,
} from "@/Components/sections/Content";
import Footer from "@/Components/Footer";
import JsonLd from "@/Components/JsonLd";
import { projectsData, homeProjectIds } from "@/data/projects";
import {
  SITE_URL,
  SITE_TITLE_DEFAULT,
  SITE_DESCRIPTION,
  buildPageMetadata,
  breadcrumbList,
  absoluteUrl,
} from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: SITE_TITLE_DEFAULT,
  description: SITE_DESCRIPTION,
  path: "/",
  keywords: [
    "Junaid Faiz portfolio",
    "Full Stack Developer portfolio",
    "AI Engineer Lahore",
    "React Next.js NestJS developer",
  ],
});

const page = () => {
  const homeProjects = homeProjectIds.map((id) =>
    projectsData.find((p) => p.id === id)
  );

  const creativeWorks = projectsData.slice(0, 5).map((project) => ({
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.description,
    url: project.demoLink || project.githubLink || absoluteUrl("/projects"),
    codeRepository: project.githubLink || undefined,
    programmingLanguage: project.programmingLanguage,
    image: absoluteUrl(project.image),
    author: { "@id": `${SITE_URL}/#person` },
  }));

  return (
    <>
      <JsonLd
        data={[
          {
            "@type": "ProfilePage",
            "@id": `${SITE_URL}/#profilepage`,
            url: SITE_URL,
            name: SITE_TITLE_DEFAULT,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#person` },
            mainEntity: { "@id": `${SITE_URL}/#person` },
          },
          breadcrumbList([{ name: "Home", item: SITE_URL }]),
          {
            "@type": "ItemList",
            "@id": `${SITE_URL}/#featured-work`,
            name: "Featured projects by Junaid Faiz",
            itemListElement: creativeWorks.map((work, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: work,
            })),
          },
        ]}
      />
      <Hero />
      <TechMarquee />
      <AboutSection />
      <Expertise />
      <Certifications />
      <Services />
      <Process />
      <Achievements />

      <section className="wrap pt-32">
        <SectionHeading
          label="07 · Projects"
          title="Selected work"
          aside={
            <Link href="/projects" className="btn-light h-12">
              All {projectsData.length} projects{" "}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          }
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {homeProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <Testimonials />
      <Faq />

      <section className="wrap pt-32">
        <p className="lbl">10 · Contact</p>
        <h2 className="h2">Let&apos;s work together</h2>
        <div className="mt-10 flex flex-wrap gap-4">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default page;
