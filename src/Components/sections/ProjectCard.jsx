import Image from "next/image";
import { ExternalLink } from "lucide-react";

/** Compact card used in the home page "Selected work" grid. */
const ProjectCard = ({ project }) => {
  const href = project.demoLink || project.githubLink;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card group flex flex-col p-3 transition-shadow hover:shadow-[0_12px_32px_rgba(24,24,27,0.08)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-stone-100">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(max-width: 960px) 100vw, 580px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex items-start justify-between gap-4 px-3 pb-3 pt-5">
        <div>
          <h3 className="text-[22px] font-extrabold tracking-[-0.02em]">
            {project.title}
          </h3>
          <p className="mt-1.5 text-[15px] leading-relaxed text-zinc-600">
            {project.summary}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {(project.homeTags || project.tags).slice(0, 3).map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-stone-200 transition-colors group-hover:bg-ink group-hover:text-white"
        >
          <ExternalLink size={18} />
        </span>
      </div>
    </a>
  );
};

export default ProjectCard;
