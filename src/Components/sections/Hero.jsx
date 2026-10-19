import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, MessageSquare } from "lucide-react";
import { RESUME_URL, RESUME_FILENAME, YEARS_OF_EXPERIENCE } from "@/data/site";

const Hero = () => (
  <>
    <section className="wrap pt-20 text-center md:pt-24">
      <span className="inline-flex h-9 items-center gap-2 rounded-full border border-stone-200 bg-white pl-1 pr-3.5 text-sm font-medium">
        <Image
          src="/junaidfaiz.jpg"
          alt=""
          width={28}
          height={28}
          className="h-7 w-7 rounded-full object-cover object-top"
        />
        <span className="h-2 w-2 rounded-full bg-green-600" />
        Available for opportunities
      </span>
      <h1 className="mx-auto mt-7 max-w-[1000px] text-[clamp(48px,7.2vw,100px)] font-extrabold leading-[0.98] tracking-[-0.05em]">
        Building the web,
        <br />
        <span className="text-[#8A8A93]">powered by AI.</span>
      </h1>
      <p className="mx-auto mt-7 max-w-[620px] text-lg leading-relaxed text-zinc-600 md:text-xl">
        I&apos;m Junaid — a Full Stack Developer &amp; AI Engineer crafting
        production-ready apps with React, Next.js, NestJS and LLM features using
        LangChain &amp; LangGraph.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Link href="/projects" className="btn-dark h-[54px] px-[26px] text-base">
          View projects <ArrowRight size={16} aria-hidden="true" />
        </Link>
        <Link href="/contact" className="btn-light h-[54px] px-[26px] text-base">
          Contact me
        </Link>
        <a
          href={RESUME_URL}
          download={RESUME_FILENAME}
          className="btn-light h-[54px] px-[26px] text-base"
        >
          <Download size={16} aria-hidden="true" /> Resume
        </a>
      </div>
    </section>

    <section className="wrap pt-[72px]">
      <div className="relative mx-auto max-w-[1040px]">
        <div className="rounded-[28px] border border-stone-200 bg-zinc-100 px-4 pt-4 md:px-9 md:pt-9">
          <div className="overflow-hidden rounded-t-[14px] border border-b-0 border-stone-200 bg-white">
            <div className="flex h-10 items-center gap-2 border-b border-stone-100 px-4">
              <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
              <span className="mx-auto flex h-6 items-center rounded-lg bg-zinc-100 px-3.5 text-xs text-zinc-600">
                dent-ment.com
              </span>
            </div>
            <div className="relative aspect-[16/8.5]">
              <Image
                src="/dent-ment.png"
                alt="Dent-Ment platform built by Junaid Faiz"
                fill
                priority
                sizes="(max-width: 1100px) 100vw, 1000px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
        <div className="absolute -left-8 top-[90px] hidden items-center gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-[0_16px_36px_rgba(24,24,27,0.08)] md:flex">
          <span className="icon-box">
            <MessageSquare size={20} aria-hidden="true" />
          </span>
          <span className="text-left">
            <span className="block text-[15px] font-bold">
              AI streaming chatbot
            </span>
            <span className="block text-[13px] text-zinc-500">
              with tool calling
            </span>
          </span>
        </div>
        <div className="absolute -right-8 top-[200px] hidden items-center gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-[0_16px_36px_rgba(24,24,27,0.08)] md:flex">
          <span className="text-3xl font-extrabold tracking-[-0.03em]">
            {YEARS_OF_EXPERIENCE}
          </span>
          <span className="text-left text-[13px] leading-tight text-zinc-500">
            years shipping
            <br />
            production code
          </span>
        </div>
      </div>
    </section>
  </>
);

export default Hero;
