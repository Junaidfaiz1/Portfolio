import React from "react";
import { Code2, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Architecture",
    desc: "Scalable APIs, modular frontends, and maintainable code",
  },
  {
    icon: Lightbulb,
    title: "AI-Powered Features",
    desc: "LLM chatbots, document analysis, and intelligent tools",
  },
  {
    icon: Rocket,
    title: "Ship Continuously",
    desc: "Pragmatic engineering focused on measurable impact",
  },
];

const AboutMe = ({ titleAs = "h2" }) => {
  const TitleTag = titleAs === "h1" ? "h1" : "h2";

  return (
    <section
      className="section-shell py-16"
      aria-labelledby="about-heading"
    >
      <div className="mb-12 text-center">
        <div className="mb-4 flex justify-center">
          <span className="section-label">About</span>
        </div>
        <TitleTag id="about-heading" className="section-title text-balance">
          Building software that{" "}
          <span className="gradient-text">makes a difference</span>
        </TitleTag>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
        <div className="glass-card space-y-5 p-6 sm:p-8">
          <p className="text-base leading-relaxed text-slate-500 sm:text-lg">
            I build software that balances business goals, user experience, and
            engineering quality. Over the last 1.5+ years, I have delivered
            end-to-end products, from architecture and API design to polished
            frontend experiences and AI-powered features using LangChain,
            LangGraph, and leading model APIs.
          </p>
          <p className="text-base leading-relaxed text-slate-500 sm:text-lg">
            My approach is pragmatic: strong foundations, clear communication,
            and shipping continuously. Whether it is building scalable APIs,
            crafting interactive UIs, or engineering LLM-driven tools like
            streaming chatbots and document analysis pipelines, I focus on
            delivering measurable impact.
          </p>

          <div className="grid gap-3 pt-2 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-100 bg-slate-50/80 p-4"
                >
                  <Icon className="mb-2 h-5 w-5 text-violet-600" />
                  <h3 className="text-sm font-semibold text-slate-800">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className="flex items-center justify-center">
          <div className="glass-card flex flex-col items-center gap-4 p-6">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <Image
                src="/signature.svg"
                width={100}
                height={100}
                alt="Signature"
                className="opacity-70"
              />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-slate-700">
                Junaid Faiz
              </p>
              <p className="text-xs text-slate-400">
                Full Stack Developer & AI Engineer
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutMe;
