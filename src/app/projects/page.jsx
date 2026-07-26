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
import Link from "next/link";

export const metadata = buildPageMetadata({
  title: "Projects",
  description:
    "Projects by Junaid Faiz — AI-powered dental networking (Dent-Ment), eCommerce (Lubaan Roots), library systems, blogging platforms, and blockchain apps built with React, Next.js, NestJS, OpenAI API, and LangChain.",
  path: "/projects",
  keywords: [
    "Junaid Faiz projects",
    "Dent-Ment",
    "Lubaan Roots",
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
      <Projects titleAs="h1" />
      <div className="section-shell pb-8 text-center">
        <p className="text-sm text-slate-500">
          Want something similar?{" "}
          <Link
            href="/contact"
            className="font-semibold text-violet-600 hover:text-violet-700"
          >
            Contact Junaid Faiz for full stack or AI engineering
          </Link>{" "}
          or learn more{" "}
          <Link
            href="/about"
            className="font-semibold text-violet-600 hover:text-violet-700"
          >
            about his experience and services
          </Link>
          .
        </p>
      </div>
      <Footer />
    </>
  );
};

export default page;
