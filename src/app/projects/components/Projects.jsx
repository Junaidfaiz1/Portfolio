"use client";

import { motion } from "framer-motion";
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

    githubLink:
      "https://github.com/Junaidfaiz1/Preserve-antique-using-blockchain-and-crowd-sourcing",
    tags: ["React", "ETh Blockchhain", "Boostrap", "Solidity"],
  },
];

const Projects = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-purple-50 ">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl font-extrabold pb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My Projects
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Explore a selection of my projects across web development, showcasing creativity and technical expertise.
          </motion.p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-full h-56 md:w-[300px] md:h-[200px] mx-auto">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-purple-10 text-purple-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-700 hover:underline"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;