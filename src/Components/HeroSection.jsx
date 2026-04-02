"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="section-shell py-8 sm:py-12 lg:py-20">
      <div className="panel grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:p-14">
        <div className="order-2 space-y-6 lg:order-1">
          <p className="inline-flex rounded-full border border-amber-300/30 bg-amber-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-300">
            1+ Years Building Web Products
          </p>
          <h1 className="text-4xl font-bold leading-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Full Stack Developer Delivering Reliable, Scalable Digital Platforms
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            I am Junaid Faiz, a developer focused on shipping production-ready
            applications with clean architecture, fast performance, and
            maintainable code. I work across React, Next.js, Node.js, NestJS,
            and Prisma to turn complex requirements into products users trust.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-slate-200">
              React & Next.js
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-slate-200">
              API & Backend Systems
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-slate-200">
              Performance & UX
            </span>
          </div>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-300"
            >
              Explore Projects
            </Link>
            <a
              download={true}
              href="/Junaid Faiz MERN Stack.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/10"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative w-64 overflow-hidden rounded-3xl border border-white/20 bg-slate-900/70 p-3 shadow-2xl sm:w-80">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl sm:h-96">
              <Image
                src="/junaidfaiz.jpg"
                alt="Junaid Faiz - Full Stack Developer"
                className="object-cover"
                fill
                priority
              />
            </div>
            <div className="mt-3 rounded-xl border border-white/10 bg-slate-900/80 p-3 text-sm text-slate-300">
              Focused on long-term maintainability, product thinking, and
              measurable engineering impact.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
