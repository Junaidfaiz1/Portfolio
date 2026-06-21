"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-violet-200/30 blur-[120px]" />
        <div className="absolute -bottom-32 -left-20 h-[400px] w-[400px] rounded-full bg-indigo-200/20 blur-[100px]" />
        <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-emerald-200/15 blur-[80px]" />
      </div>

      <div className="section-shell relative py-10 sm:py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="order-2 space-y-8 lg:order-1">
            <div className="space-y-5">
              <div className="section-label">
                <Sparkles className="h-3 w-3" />
                Available for opportunities
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-slate-900">Hi, I&apos;m </span>
                <span className="gradient-text">Junaid</span>
                <br />
                <span className="text-slate-900">I build </span>
                <span className="gradient-text-accent">web</span>
                <span className="text-slate-900"> &</span>
                <br />
                <span className="gradient-text">AI products</span>
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
                Full Stack Developer & AI Engineer crafting production-ready
                applications with React, Next.js, NestJS, and LLM-powered
                features using LangChain & LangGraph.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "React & Next.js",
                "Node.js & NestJS",
                "AI / LLM",
                "GraphQL",
                "MongoDB",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-500 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/projects" className="btn-primary">
                View Projects <ArrowRight size={15} />
              </Link>
              <a
                download={true}
                href="/Junaid Fiaz (Full Stack Developer & AI Engineer).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Download size={15} /> Resume
              </a>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-200 via-indigo-100 to-emerald-100 opacity-60 blur-sm" />

              <div className="relative w-60 overflow-hidden rounded-3xl border border-white bg-white p-2 shadow-xl shadow-slate-200/50 sm:w-72">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src="/junaidfaiz.jpg"
                    alt="Junaid Faiz - Full Stack Developer & AI Engineer"
                    className="object-cover"
                    fill
                    priority
                  />
                </div>

                {/* Floating badge */}
                {/* <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-white bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-violet-200/50">
                  1+ Years Experience
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
