import Projects from "./components/Projects";
import Footer from "@/Components/Footer";
import JsonLd from "@/Components/JsonLd";
import { projectsData } from "@/data/projects";
import {
  SITE_URL,
  buildPageMetadata,
  breadcrumbList,
  absoluteUrl,
} from "@/lib/seo";
import CtaBand from "@/Components/sections/CtaBand";

export const metadata = buildPageMetadata({
  title: "Projects",
  description:
    "Projects by Junaid Faiz — AI-powered dental networking (Dent-Ment), Technova CRM, the Vorqen PC-builder store, Lubaan Roots eCommerce, and more built with Next.js, NestJS, GraphQL, OpenAI API, and LangChain.",
  path: "/projects",
  keywords: [
    "Junaid Faiz projects",
    "Dent-Ment",
    "Lubaan Roots",
    "Technova CRM",
    "Vorqen",
    "Next.js NestJS portfolio",
    "AI chatbot projects",
    "full stack case studies",
  ],
});

const page = () => {
  const softwareWorks = projectsData.map((project) => ({
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.description,
    url: project.demoLink || project.githubLink || absoluteUrl("/projects"),
    codeRepository: project.githubLink || undefined,
    programmingLanguage: project.programmingLanguage,
    keywords: project.tags.join(", "),
    image: absoluteUrl(project.image),
    author: { "@id": `${SITE_URL}/#person` },
    creator: { "@id": `${SITE_URL}/#person` },
  }));

  return (
    <>
      <JsonLd
        data={[
          {
            "@type": "CollectionPage",
            "@id": absoluteUrl("/projects#webpage"),
            url: absoluteUrl("/projects"),
            name: "Projects | Junaid Faiz",
            description:
              "Selected software projects and creative work by Junaid Faiz.",
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#person` },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: softwareWorks.map((work, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: work,
              })),
            },
          },
          breadcrumbList([
            { name: "Home", item: SITE_URL },
            { name: "Projects", item: absoluteUrl("/projects") },
          ]),
          ...softwareWorks.map((work) => ({
            ...work,
            "@type": ["SoftwareSourceCode", "CreativeWork"],
          })),
        ]}
      />
      <Projects />
      <CtaBand
        title="Your project could be next."
        text="Full stack builds, SaaS platforms and AI features."
        primary={{ href: "/contact", label: "Start a project" }}
        secondary={{ href: "/about", label: "About me" }}
      />
      <Footer />
    </>
  );
};

export default page;
