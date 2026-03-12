"use client";

import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4 animate-slideUp">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-12 drop-shadow-lg">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { name: "React.js", level: 95 },
            { name: "Next.js", level: 95 },
            { name: "Node.js", level: 92 },
            { name: "Express.js", level: 93 },
            { name: "NestJS", level: 80 },
            { name: "Prisma ORM", level: 90 },
            { name: "RESTful APIs", level: 90 },
            { name: "MongoDB", level: 90 },
            { name: "Tailwind CSS", level: 94 },
            { name: "Shadcn", level: 94 },
            { name: "React Redux Toolkit", level: 85 },
            { name: "Responsive Design", level: 95 },
          ].map((skill, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-base font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </span>
                <span className="text-sm font-bold text-emerald-500">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                <motion.div
                  className="bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-500 h-4 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Skills;
