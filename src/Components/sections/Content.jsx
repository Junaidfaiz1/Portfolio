import { Award, BrainCircuit, Code2, Lightbulb, Rocket } from "lucide-react";
import SectionHeading from "./SectionHeading";
import {
  YEARS_OF_EXPERIENCE,
  principles,
  expertise,
  certifications,
  services,
  processSteps,
  achievements,
  testimonials,
} from "@/data/site";

const principleIcons = { code: Code2, idea: Lightbulb, ship: Rocket };

export const Principles = () => (
  <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
    {principles.map((p) => {
      const Icon = principleIcons[p.icon];
      return (
        <div key={p.title} className="card p-6">
          <span className="icon-box">
            <Icon size={20} aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
          <p className="mt-1.5 text-[15px] leading-relaxed text-zinc-600">
            {p.text}
          </p>
        </div>
      );
    })}
  </div>
);

export const AboutSection = ({ label = "01 · About" }) => (
  <section className="wrap pt-32">
    <div className="flex flex-wrap items-start gap-12">
      <div className="flex-[1_1_360px]">
        <p className="lbl">{label}</p>
        <h2 className="h2">Building software that makes a difference.</h2>
      </div>
      <div className="flex-[1.3_1_480px] text-lg leading-[1.7] text-zinc-600">
        <p>
          I build software that balances business goals, user experience and
          engineering quality. Over the last {YEARS_OF_EXPERIENCE} years
          I&apos;ve delivered end-to-end products — from architecture and API
          design to polished frontends and AI-powered features using LangChain,
          LangGraph and leading model APIs.
        </p>
        <p className="mt-4">
          My approach is pragmatic: strong foundations, clear communication and
          shipping continuously.
        </p>
      </div>
    </div>
    <div className="mt-10">
      <Principles />
    </div>
  </section>
);

export const Expertise = ({ label = "02 · Expertise" }) => (
  <section className="wrap pt-32">
    <SectionHeading label={label} title="Technical expertise" />
    <div className="mt-10 grid gap-4 md:grid-cols-2">
      {expertise.map((group) =>
        group.highlight ? (
          <div
            key={group.title}
            className="card col-span-full flex flex-wrap items-center gap-x-8 gap-y-5 p-7"
          >
            <div className="flex flex-[1_1_280px] items-center gap-4">
              <span className="icon-box border-ink bg-ink text-white">
                <BrainCircuit size={20} aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold">{group.title}</h3>
            </div>
            <div className="flex flex-[2_1_420px] flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className={
                    group.highlight.includes(item)
                      ? "chip bg-ink text-white"
                      : "chip"
                  }
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div
            key={group.title}
            className={`card p-7 ${group.wide ? "col-span-full" : ""}`}
          >
            <h3 className="text-lg font-bold">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  </section>
);

export const CertificationCards = () => (
  <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
    {certifications.map((c) => (
      <div key={c.title} className="card flex flex-col gap-7 p-6">
        <span className="icon-box">
          <Award size={20} aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-[17px] font-bold leading-snug">{c.title}</h3>
          <p className="mt-1.5 text-sm text-zinc-500">{c.issuer}</p>
        </div>
      </div>
    ))}
  </div>
);

export const Certifications = ({ label = "03 · Certifications" }) => (
  <section className="wrap pt-32">
    <SectionHeading label={label} title="Continuous learning" />
    <div className="mt-10">
      <CertificationCards />
    </div>
  </section>
);

export const Services = ({ label = "04 · Services", title = "What I can do for you" }) => (
  <section className="wrap pt-32">
    <SectionHeading label={label} title={title} />
    <div className="mt-10 border-t border-stone-200">
      {services.map((s, i) => (
        <div
          key={s.title}
          className="flex flex-wrap items-baseline gap-x-8 gap-y-2 border-b border-stone-200 py-6"
        >
          <span className="lbl w-10">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="flex-[1_1_300px] text-[22px] font-bold tracking-[-0.02em]">
            {s.title}
          </h3>
          <p className="flex-[1.4_1_380px] text-base leading-relaxed text-zinc-600">
            {s.text}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export const Process = ({ label = "05 · Process" }) => (
  <section className="wrap pt-32">
    <SectionHeading
      label={label}
      title="How I work"
      aside={
        <p className="max-w-[420px] text-base leading-relaxed text-zinc-600">
          A simple, transparent process — you always know what&apos;s being
          built and why.
        </p>
      }
    />
    <ol className="mt-10 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
      {processSteps.map((step, i) => (
        <li key={step.title} className="card flex flex-col gap-4 p-7">
          <div className="flex items-center justify-between">
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full text-[15px] font-bold ${
                i === 0
                  ? "bg-ink text-white"
                  : "border border-stone-200 bg-zinc-100"
              }`}
            >
              {i + 1}
            </span>
            <span className="lbl">Step {String(i + 1).padStart(2, "0")}</span>
          </div>
          <h3 className="mt-2 text-xl font-extrabold tracking-[-0.02em]">
            {step.title}
          </h3>
          <p className="text-[15px] leading-relaxed text-zinc-600">
            {step.text}
          </p>
        </li>
      ))}
    </ol>
  </section>
);

export const Achievements = ({ label = "06 · Achievements" }) => (
  <section className="wrap pt-32">
    <SectionHeading label={label} title="Key achievements" />
    <div className="mt-10 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
      {achievements.map((text, i) => (
        <div key={text} className="card p-6">
          <div className="text-[40px] font-extrabold tracking-[-0.04em] text-zinc-300">
            {String(i + 1).padStart(2, "0")}
          </div>
          <p className="mt-4 text-base leading-relaxed">{text}</p>
        </div>
      ))}
    </div>
  </section>
);

const initials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("");

export const Testimonials = ({ label = "08 · Testimonials" }) => {
  if (!testimonials.length) return null;
  return (
    <section className="wrap pt-32">
      <SectionHeading label={label} title="What people say" />
      <div className="mt-10 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
        {testimonials.map((t) => (
          <figure key={t.name} className="card flex flex-col gap-6 p-7">
            <blockquote className="text-[17px] leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-zinc-100 text-sm font-bold">
                {initials(t.name)}
              </span>
              <span>
                <span className="block text-[15px] font-bold">{t.name}</span>
                <span className="block text-[13px] text-zinc-500">
                  {t.role}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
