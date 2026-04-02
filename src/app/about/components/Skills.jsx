"use client";

import React from "react";

const skills = [
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
  { name: "Redux Toolkit", level: 85 },
  { name: "Responsive Design", level: 95 },
];

const Skills = () => {
  return (
    <section className="section-shell py-8 sm:py-12">
      <div className="panel p-6 sm:p-10">
        <h2 className="mb-6 text-3xl font-bold text-slate-100 sm:text-4xl">
          My Skills
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-4"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-semibold text-slate-100">
                  {skill.name}
                </span>
                <span className="text-sm font-bold text-amber-300">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-slate-800">
                <div
                  className="h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-amber-300"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
