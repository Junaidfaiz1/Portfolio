import Footer from "@/Components/Footer";
import JsonLd from "@/Components/JsonLd";
import CtaBand from "@/Components/sections/CtaBand";
import { Expertise, Services } from "@/Components/sections/Content";
import {
  SITE_URL,
  buildPageMetadata,
  breadcrumbList,
  absoluteUrl,
} from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Skills",
  description:
    "Skills and expertise of Junaid Faiz — LangChain, LangGraph, OpenAI, Claude and Gemini APIs, React, Next.js, NestJS, GraphQL, MongoDB, Prisma and Tailwind CSS — and the services they power.",
  path: "/skills",
  keywords: [
    "Junaid Faiz skills",
    "LangChain developer",
    "Next.js NestJS skills",
    "AI engineer tech stack",
  ],
});

const SkillsPage = () => (
  <>
    <JsonLd
      data={[
        {
          "@type": "WebPage",
          "@id": absoluteUrl("/skills#webpage"),
          url: absoluteUrl("/skills"),
          name: "Skills | Junaid Faiz",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#person` },
        },
        breadcrumbList([
          { name: "Home", item: SITE_URL },
          { name: "Skills", item: absoluteUrl("/skills") },
        ]),
      ]}
    />
    <section className="wrap pt-20 text-center md:pt-24">
      <p className="lbl">Skills &amp; expertise</p>
      <h1 className="mx-auto mt-4 max-w-[900px] text-[clamp(44px,6.4vw,88px)] font-extrabold leading-none tracking-[-0.05em]">
        My toolkit, <span className="text-[#8A8A93]">front to back.</span>
      </h1>
      <p className="mx-auto mt-6 max-w-[600px] text-lg leading-relaxed text-zinc-600 md:text-xl">
        TypeScript end to end — React on the front, NestJS and GraphQL behind,
        and LLM tooling on top.
      </p>
    </section>
    <Expertise label="01 · Expertise" />
    <Services label="02 · Services" title="Where these skills land" />
    <CtaBand
      title="Need these skills on your team?"
      text="Let's talk about your project or role."
      primary={{ href: "/contact", label: "Get in touch" }}
      secondary={{ href: "/projects", label: "View projects" }}
    />
    <Footer />
  </>
);

export default SkillsPage;
