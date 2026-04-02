"use client";

import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "Smart Library",
    description:
      "A smart library management system with user authentication, Over and borrowing Books features, pay fine and return books.",
    image: "/smartlib.png",
    demoLink: "https://smartlib.vercel.app/",
    githubLink: "https://github.com/Junaidfaiz1/LibraryManagement",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Shadcn UI",
    ],
  },
  {
    id: 2,
    title: "Shop Cart Website",
    description:
      "The platform includes intuitive navigation, Favourite products, and an optimized shopping cart for enhanced functionality.",
    image: "/shopcart.png",
    demoLink: "https://ecom145.vercel.app/",
    githubLink: "https://github.com/Junaidfaiz1/ECOM",
    tags: ["React", "ReduxToolKit", "MUI (Material UI)"],
  },
  {
    id: 3,
    title: "Blog Insite",
    description:
      "A Multi-User Blogging Platform I developed Blog Insite, a scalable and intuitive multi-user blogging platform where users can write and share articles across diverse topics, including Finance, Technology, and Lifestyle.",
    image: "/blogger.png",
    demoLink: "https://blogger-insite.vercel.app/",
    githubLink: "https://github.com/Junaidfaiz1/blogger",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Neomorphic Design",
    ],
  },
  {
    id: 4,
    title: "Tennis Website",
    description:
      "A Tennis website that provides information about tennis tournaments, players, and news. It features a user-friendly interface and responsive design.",
    image: "/Sports-web.png",
    demoLink: "https://sportz-gala.vercel.app/",
    githubLink: "https://github.com/Junaidfaiz1/Sportz-Gala",
    tags: ["React", "Firebase", "Material UI"],
  },
  {
    id: 5,
    title: "Antique Preservation System",
    description:
      "A React-based DApp that stores antique data on the Ethereum blockchain using Truffle, Web3.js, and MetaMask for secure transactions.",
    image: "/Fyp.jpg",
    demoLink: "",
    githubLink:
      "https://github.com/Junaidfaiz1/Preserve-antique-using-blockchain-and-crowd-sourcing",
    tags: ["React", "ETh Blockchhain", "Boostrap", "Solidity"],
  },
  {
    id: 5,
    title: "Antique Preservation System",
    description:
      "A React-based DApp that stores antique data on the Ethereum blockchain using Truffle, Web3.js, and MetaMask for secure transactions.",
    image: "/Fyp.jpg",

    githubLink:
      "https://github.com/Junaidfaiz1/Preserve-antique-using-blockchain-and-crowd-sourcing",
    tags: ["React", "ETh Blockchhain", "Boostrap", "Solidity"],
  },
];

const Projects = () => {
  return (
    <section className="section-shell py-8 sm:py-12">
      <div className="panel p-6 sm:p-10">
        <div className="mb-8">
          <h2 className="pb-2 text-3xl font-bold text-slate-100 sm:text-4xl">
            My Projects
          </h2>
          <p className="max-w-3xl text-sm text-slate-300 sm:text-base">
            Selected work focused on practical product outcomes, maintainable
            architecture, and user-centered experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/65"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/35 to-transparent" />
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-xl font-semibold text-slate-100 sm:text-2xl">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-semibold text-amber-300 transition-colors hover:text-amber-200"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
