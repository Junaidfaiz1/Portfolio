import React from "react";
import ContactUs from "./components/contact-us";
import Footer from "@/Components/Footer";
import JsonLd from "@/Components/JsonLd";
import {
  SITE_URL,
  PERSON,
  buildPageMetadata,
  breadcrumbList,
  absoluteUrl,
} from "@/lib/seo";
import Link from "next/link";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Contact Junaid Faiz for full stack development, AI engineering, NestJS APIs, or LLM-powered product work. Based in Garden Town, Lahore, Pakistan. Email junaidfaizpk5@gmail.com.",
  path: "/contact",
  keywords: [
    "Contact Junaid Faiz",
    "hire full stack developer Lahore",
    "AI engineer consultation",
    "Next.js NestJS developer contact",
  ],
});

const Contact = () => {
  return (
    <>
      <JsonLd
        data={[
          {
            "@type": "ContactPage",
            "@id": absoluteUrl("/contact#webpage"),
            url: absoluteUrl("/contact"),
            name: "Contact Junaid Faiz",
            description:
              "Get in touch with Junaid Faiz for full stack development and AI engineering.",
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#person` },
            mainEntity: {
              "@type": "Person",
              "@id": `${SITE_URL}/#person`,
              name: PERSON.name,
              email: `mailto:${PERSON.email}`,
              telephone: PERSON.telephone,
              url: SITE_URL,
            },
          },
          breadcrumbList([
            { name: "Home", item: SITE_URL },
            { name: "Contact", item: absoluteUrl("/contact") },
          ]),
        ]}
      />
      <ContactUs titleAs="h1" />
      <div className="section-shell pb-8 text-center">
        <p className="text-sm text-slate-500">
          Explore{" "}
          <Link
            href="/projects"
            className="font-semibold text-violet-600 hover:text-violet-700"
          >
            selected projects
          </Link>{" "}
          or read more{" "}
          <Link
            href="/about"
            className="font-semibold text-violet-600 hover:text-violet-700"
          >
            about Junaid Faiz
          </Link>
          .
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
