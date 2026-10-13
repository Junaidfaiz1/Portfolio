import Footer from "@/Components/Footer";
import JsonLd from "@/Components/JsonLd";
import ContactInfo from "@/Components/sections/ContactInfo";
import ContactForm from "@/Components/sections/ContactForm";
import {
  SITE_URL,
  PERSON,
  buildPageMetadata,
  breadcrumbList,
  absoluteUrl,
} from "@/lib/seo";

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
      <section className="wrap flex flex-wrap items-stretch gap-6 pt-20 md:pt-24">
        <div className="flex flex-[1_1_380px] flex-col gap-4">
          <div className="mb-4">
            <p className="lbl">Contact</p>
            <h1 className="mt-4 text-[clamp(44px,5.6vw,76px)] font-extrabold leading-none tracking-[-0.05em]">
              Let&apos;s talk about your{" "}
              <span className="text-[#8A8A93]">project.</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              Tell me what you&apos;re building and I&apos;ll get back to you.
            </p>
          </div>
          <ContactInfo />
        </div>
        <ContactForm showTopics title="Send a message" />
      </section>
      <Footer />
    </>
  );
};

export default Contact;
