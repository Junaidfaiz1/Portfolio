import Image from "next/image";
import Link from "next/link";
import { Check, Download } from "lucide-react";
import Footer from "@/Components/Footer";
import JsonLd from "@/Components/JsonLd";
import CtaBand from "@/Components/sections/CtaBand";
import { Principles } from "@/Components/sections/Content";
import { projectsData } from "@/data/projects";
import {
  RESUME_URL,
  RESUME_FILENAME,
  YEARS_OF_EXPERIENCE,
  achievements,
  certifications,
} from "@/data/site";
import {
  SITE_URL,
  buildPageMetadata,
  breadcrumbList,
  absoluteUrl,
} from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About",
  description: `About Junaid Faiz — Full Stack Developer & AI Engineer with ${YEARS_OF_EXPERIENCE} years of experience building React, Next.js, NestJS, LangChain, and LangGraph applications. Principles, achievements and certifications from Lahore, Pakistan.`,
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

const stats = [
  { value: YEARS_OF_EXPERIENCE, label: "Years of experience" },
  { value: String(projectsData.length), label: "Projects shipped" },
  { value: "5", label: "LLM tools & model APIs" },
  { value: String(certifications.length), label: "Certifications" },
];

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
              "Background, principles, achievements and certifications of Full Stack Developer & AI Engineer Junaid Faiz.",
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

      <section className="wrap flex flex-wrap items-center gap-12 pt-20 md:pt-24">
        <div className="flex-[1.3_1_480px]">
          <p className="lbl">About me</p>
          <h1 className="mt-4 text-[clamp(44px,6vw,80px)] font-extrabold leading-none tracking-[-0.05em]">
            Hey, I&apos;m <span className="text-[#8A8A93]">Junaid.</span>
          </h1>
          <p className="mt-6 text-lg leading-[1.65] text-zinc-600 md:text-xl">
            A Full Stack Developer &amp; AI Engineer from Lahore. For{" "}
            {YEARS_OF_EXPERIENCE} years I&apos;ve delivered end-to-end products —
            from architecture and API design to polished frontends and AI
            features using LangChain, LangGraph and leading model APIs.
          </p>
          <p className="mt-4 text-lg leading-[1.65] text-zinc-600 md:text-xl">
            My approach is pragmatic: strong foundations, clear communication
            and shipping continuously.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={RESUME_URL} download={RESUME_FILENAME} className="btn-dark h-14 px-7 text-base">
              <Download size={16} aria-hidden="true" /> Download CV
            </a>
            <Link href="/contact" className="btn-light h-14 px-7 text-base">
              Get in touch
            </Link>
          </div>
        </div>
        <div className="relative flex-[1_1_340px]">
          <div className="rounded-[32px] border border-stone-200 bg-zinc-100 p-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[22px]">
              <Image
                src="/junaidfaiz.jpg"
                alt="Portrait of Junaid Faiz"
                fill
                priority
                sizes="(max-width: 960px) 100vw, 440px"
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="absolute -left-5 bottom-10 flex items-center gap-2.5 rounded-2xl border border-stone-200 bg-white px-[18px] py-3.5 text-[15px] font-semibold shadow-[0_16px_36px_rgba(24,24,27,0.08)]">
            <span className="h-2.5 w-2.5 rounded-full bg-green-600" />
            Garden Town, Lahore
          </div>
        </div>
      </section>

      <section className="wrap pt-24">
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
          {stats.map((s) => (
            <div key={s.label} className="card p-7">
              <div className="text-5xl font-extrabold tracking-[-0.04em]">
                {s.value}
              </div>
              <div className="mt-1 text-zinc-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap pt-28">
        <div className="text-center">
          <p className="lbl">How I work</p>
          <h2 className="h2">Three principles</h2>
        </div>
        <div className="mt-10">
          <Principles />
        </div>
      </section>

      <section className="wrap flex flex-wrap gap-4 pt-28">
        <div className="card flex-[1.4_1_480px] p-9">
          <p className="lbl">Achievements</p>
          <h2 className="mb-5 mt-2.5 text-[32px] font-extrabold tracking-[-0.03em]">
            What I&apos;ve delivered
          </h2>
          <ul className="flex flex-col gap-2.5">
            {achievements.map((a) => (
              <li
                key={a}
                className="flex items-start gap-3.5 rounded-2xl bg-[#FAFAF9] p-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                  <Check size={14} strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="pt-0.5 text-base leading-relaxed">{a}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card flex-[1_1_340px] p-9">
          <p className="lbl">Certifications</p>
          <h2 className="mb-5 mt-2.5 text-[32px] font-extrabold tracking-[-0.03em]">
            Always learning
          </h2>
          <ul className="flex flex-col gap-2.5">
            {certifications.map((c) => (
              <li
                key={c.title}
                className="flex items-center gap-3.5 rounded-2xl border border-stone-200 p-3.5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-stone-200 bg-zinc-100 font-extrabold">
                  {c.issuer[0]}
                </span>
                <span>
                  <span className="block font-bold">{c.title}</span>
                  <span className="block text-sm text-zinc-600">{c.issuer}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Let's build something great."
        text="Open to full-time roles and freelance projects."
        secondary={{ href: "/projects", label: "View projects" }}
      />
      <Footer />
    </>
  );
};

export default About;
