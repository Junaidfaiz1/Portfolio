import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <section className="section-shell py-8 sm:py-12">
      <div className="panel grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_auto]">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
            About Me
          </h2>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            I build software that balances business goals, user experience, and
            engineering quality. Over the last 1+ years, I have delivered
            end-to-end products — from architecture and API design to polished
            frontend experiences and AI-powered features using LangChain,
            LangGraph, and leading model APIs.
          </p>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            My approach is pragmatic: strong foundations, clear communication,
            and shipping continuously. Whether it is building scalable APIs,
            crafting interactive UIs, or engineering LLM-driven tools like
            streaming chatbots and document analysis pipelines, I focus on
            delivering measurable impact.
          </p>
        </div>
        <div className="mx-auto w-fit rounded-2xl border border-white/10 bg-gray-200 p-4">
          <Image
            src="/signature.svg"
            width={120}
            height={120}
            alt="Signature"
            className="opacity-90"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
