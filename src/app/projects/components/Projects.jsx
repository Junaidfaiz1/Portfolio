"use client";

import { Github, ExternalLink, Star } from "lucide-react";
import Image from "next/image";
import { projectsData } from "@/data/projects";

const FeaturedProject = ({ project }) => (
  <div className="glass-card group overflow-hidden sm:grid sm:grid-cols-2">
    <div className="relative h-56 overflow-hidden sm:h-full sm:min-h-[280px]">
      <Image
        src={project.image}
        alt={`${project.title} project screenshot by Junaid Faiz`}
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute left-3 top-3">
        <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-violet-600 shadow-sm backdrop-blur-sm">
          <Star className="h-3 w-3 fill-violet-500 text-violet-500" />
          Featured
        </span>
      </div>
    </div>
    <div className="flex flex-col justify-center p-6 sm:p-8">
      <h3 className="mb-2 text-xl font-bold text-slate-800 sm:text-2xl">
        {project.title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-slate-500">
        {project.description}
      </p>
      <div className="mb-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="rounded-md border border-slate-100 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-500"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2 text-xs"
            aria-label={`Open live demo of ${project.title}`}
          >
            <ExternalLink size={13} /> Live Demo
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary py-2 text-xs"
            aria-label={`View source code for ${project.title}`}
          >
            <Github size={13} /> Code
          </a>
        )}
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project }) => (
  <div className="glass-card group overflow-hidden">
    <div className="relative h-44 overflow-hidden">
      <Image
        src={project.image}
        alt={`${project.title} project screenshot by Junaid Faiz`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-5">
      <h3 className="mb-1.5 text-base font-bold text-slate-800">
        {project.title}
      </h3>
      <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-slate-500">
        {project.description}
      </p>
      <div className="mb-4 flex flex-wrap gap-1">
        {project.tags.slice(0, 4).map((tag, index) => (
          <span
            key={index}
            className="rounded-md border border-slate-100 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-500"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-violet-600"
            aria-label={`View source code for ${project.title}`}
          >
            <Github size={13} /> Code
          </a>
        )}
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-violet-600 transition-colors hover:text-violet-700"
            aria-label={`Open live demo of ${project.title}`}
          >
            <ExternalLink size={13} /> Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = ({ titleAs = "h2" }) => {
  const featured = projectsData.filter((p) => p.featured);
  const rest = projectsData.filter((p) => !p.featured);
  const TitleTag = titleAs === "h1" ? "h1" : "h2";

  return (
    <section className="section-shell py-16" aria-labelledby="projects-heading">
      <div className="mb-12 text-center">
        <div className="mb-4 flex justify-center">
          <span className="section-label">Projects</span>
        </div>
        <TitleTag id="projects-heading" className="section-title">
          Selected <span className="gradient-text">work</span>
        </TitleTag>
        <p className="section-desc mx-auto mt-4">
          Focused on practical product outcomes, maintainable architecture, and
          user-centered experiences.
        </p>
      </div>

      <div className="mb-6 space-y-5">
        {featured.map((project) => (
          <FeaturedProject key={project.id} project={project} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
