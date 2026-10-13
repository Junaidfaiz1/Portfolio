"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { projectsData, projectCategories } from "@/data/projects";

const LinkButtons = ({ project }) => (
  <span className="flex gap-1.5">
    {project.githubLink && (
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-11 items-center rounded-full border border-stone-200 bg-white px-[18px] text-sm font-bold hover:border-stone-300"
      >
        Code
      </a>
    )}
    {project.demoLink && (
      <a
        href={project.demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-11 items-center gap-1.5 rounded-full bg-ink px-[18px] text-sm font-bold text-white hover:bg-zinc-700"
      >
        Live <ExternalLink size={14} aria-hidden="true" />
      </a>
    )}
  </span>
);

const Featured = ({ project }) => (
  <article className="col-span-full flex flex-wrap items-center gap-8 rounded-[32px] border border-stone-200 bg-white p-6 sm:p-8">
    <div className="flex flex-[1_1_340px] flex-col gap-4">
      <span className="lbl">Featured · {project.label}</span>
      <h2 className="text-[44px] font-extrabold tracking-[-0.04em]">
        {project.title}
      </h2>
      <p className="text-[17px] leading-relaxed text-zinc-600">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-dark self-start"
      >
        Visit live site <ExternalLink size={14} aria-hidden="true" />
      </a>
    </div>
    <div className="relative aspect-[16/10] min-w-0 flex-[1.3_1_480px] overflow-hidden rounded-2xl border border-stone-200">
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        fill
        sizes="(max-width: 960px) 100vw, 640px"
        className="object-cover object-top"
      />
    </div>
  </article>
);

const Card = ({ project }) => (
  <article className="flex flex-col gap-[18px] rounded-[28px] border border-stone-200 bg-white p-6 sm:p-7">
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-stone-200">
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        fill
        sizes="(max-width: 960px) 100vw, 560px"
        className="object-cover object-top"
      />
    </div>
    <div>
      <span className="lbl">{project.label}</span>
      <h3 className="mt-1.5 text-[28px] font-extrabold tracking-[-0.03em]">
        {project.title}
      </h3>
      <p className="mt-1.5 text-base leading-relaxed text-zinc-600">
        {project.description}
      </p>
    </div>
    <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>
      <LinkButtons project={project} />
    </div>
  </article>
);

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const visible = projectsData.filter(
    (p) => filter === "All" || p.category === filter
  );
  const featured = visible.find((p) => p.featured);
  const rest = visible.filter((p) => !p.featured);

  return (
    <>
      <section className="wrap pt-20 text-center md:pt-24">
        <p className="lbl">Portfolio</p>
        <h1 className="mt-4 text-[clamp(44px,6.4vw,88px)] font-extrabold leading-none tracking-[-0.05em]">
          Selected <span className="text-[#8A8A93]">work.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-[560px] text-lg leading-relaxed text-zinc-600 md:text-xl">
          {projectsData.length} projects — an AI-powered platform, a SaaS CRM,
          eCommerce, full-stack apps and a blockchain DApp.
        </p>
        <div
          role="group"
          aria-label="Filter projects"
          className="mt-8 inline-flex flex-wrap justify-center gap-1.5 rounded-[28px] border border-stone-200 bg-white p-1.5"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={`h-11 rounded-full px-5 text-[15px] transition-colors ${
                filter === cat
                  ? "bg-ink font-bold text-white"
                  : "font-semibold hover:bg-zinc-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="wrap grid gap-5 pt-14 lg:grid-cols-2">
        {featured && <Featured project={featured} />}
        {rest.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </section>
    </>
  );
};

export default Projects;
