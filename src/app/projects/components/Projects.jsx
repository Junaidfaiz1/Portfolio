"use client";

import { Github, ExternalLink, Star } from "lucide-react";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "Dent-Ment",
    description:
      "A LinkedIn-style professional networking and learning platform for the dental community, featuring social feeds, mentor-student booking, events, live audio group calls, course management with quizzes, and an AI-powered streaming chatbot with function/tool calling and AI-driven contract analysis.",
    image: "/smartlib.png",
    demoLink: "https://dent-ment.com",
    githubLink: "",
    tags: [
      "Next.js",
      "NestJS",
      "Prisma",
      "MongoDB",
      "GraphQL",
      "OpenAI API",
      "LangChain",
      "AWS",
      "Stripe",
      "LiveKit",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Lubaan Roots",
    description:
      "An eCommerce website for skincare products offering a modern, user-friendly shopping experience with product listings, checkout flows, and Strapi CMS for content and order management.",
    image: "/shopcart.png",
    demoLink: "https://lubaanroots.com",
    githubLink: "",
    tags: ["React", "Strapi CMS", "Tailwind CSS"],
    featured: true,
  },
  {
    id: 3,
    title: "Smart Library",
    description:
      "A smart library management system with user authentication, borrowing books features, pay fine and return books.",
    image: "/smartlib.png",
    demoLink: "https://smartlib.vercel.app/",
    githubLink: "https://github.com/Junaidfaiz1/LibraryManagement",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Shadcn UI"],
  },
  {
    id: 4,
    title: "Shop Cart Website",
    description:
      "The platform includes intuitive navigation, favourite products, and an optimized shopping cart for enhanced functionality.",
    image: "/shopcart.png",
    demoLink: "https://ecom145.vercel.app/",
    githubLink: "https://github.com/Junaidfaiz1/ECOM",
    tags: ["React", "Redux Toolkit", "MUI (Material UI)"],
  },
  {
    id: 5,
    title: "Blog Insite",
    description:
      "A scalable multi-user blogging platform where users can write and share articles across diverse topics, including Finance, Technology, and Lifestyle.",
    image: "/blogger.png",
    demoLink: "https://blogger-insite.vercel.app/",
    githubLink: "https://github.com/Junaidfaiz1/blogger",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
  {
    id: 6,
    title: "Tennis Website",
    description:
      "A Tennis website that provides information about tennis tournaments, players, and news with a user-friendly and responsive design.",
    image: "/Sports-web.png",
    demoLink: "https://sportz-gala.vercel.app/",
    githubLink: "https://github.com/Junaidfaiz1/Sportz-Gala",
    tags: ["React", "Firebase", "Material UI"],
  },
  {
    id: 7,
    title: "Antique Preservation System",
    description:
      "A React-based DApp that stores antique data on the Ethereum blockchain using Truffle, Web3.js, and MetaMask for secure transactions.",
    image: "/Fyp.jpg",
    demoLink: "",
    githubLink:
      "https://github.com/Junaidfaiz1/Preserve-antique-using-blockchain-and-crowd-sourcing",
    tags: ["React", "Ethereum Blockchain", "Bootstrap", "Solidity"],
  },
];

const FeaturedProject = ({ project }) => (
  <div className="glass-card group overflow-hidden sm:grid sm:grid-cols-2">
    <div className="relative h-56 overflow-hidden sm:h-full sm:min-h-[280px]">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 sm:bg-gradient-to-r sm:from-transparent sm:to-white/40" />
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
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
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
            className="rounded border border-slate-100 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-400"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="rounded border border-slate-100 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-400">
            +{project.tags.length - 4}
          </span>
        )}
      </div>
      <div className="flex gap-3">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-400 transition-colors hover:text-slate-700"
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
          >
            <ExternalLink size={13} /> Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const featured = projectsData.filter((p) => p.featured);
  const rest = projectsData.filter((p) => !p.featured);

  return (
    <section className="section-shell py-16 sm:py-20">
      <div className="mb-12 text-center">
        <div className="mb-4 flex justify-center">
          <span className="section-label">Projects</span>
        </div>
        <h2 className="section-title">
          Selected <span className="gradient-text">work</span>
        </h2>
        <p className="section-desc mx-auto mt-4">
          Focused on practical product outcomes, maintainable architecture, and
          user-centered experiences.
        </p>
      </div>

      {/* Featured projects */}
      <div className="mb-6 space-y-5">
        {featured.map((project) => (
          <FeaturedProject key={project.id} project={project} />
        ))}
      </div>

      {/* Other projects grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
