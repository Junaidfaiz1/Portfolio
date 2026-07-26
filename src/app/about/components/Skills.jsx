"use client";

import React from "react";

const skills = [
  { name: "React.js", level: 95 },
  { name: "Next.js", level: 95 },
  { name: "Tailwind CSS", level: 94 },
  { name: "Shadcn", level: 94 },
  { name: "Express.js", level: 93 },
  { name: "Node.js", level: 92 },
  { name: "Responsive Design", level: 95 },
  { name: "RESTful APIs", level: 90 },
  { name: "MongoDB", level: 90 },
  { name: "Prisma ORM", level: 90 },
  { name: "GraphQL", level: 88 },
  { name: "NestJS", level: 85 },
  { name: "Redux Toolkit", level: 85 },
  { name: "Socket.IO", level: 85 },
  { name: "LangChain", level: 82 },
  { name: "LangGraph", level: 80 },
];

const getColor = (level) => {
  if (level >= 93) return "from-violet-500 to-indigo-500";
  if (level >= 88) return "from-indigo-500 to-blue-500";
  if (level >= 83) return "from-blue-500 to-cyan-500";
  return "from-emerald-500 to-teal-500";
};

const Skills = () => {
  return (
    <section className="section-shell py-16 ">
      <div className="mb-12 text-center">
        <div className="mb-4 flex justify-center">
          <span className="section-label">Skills</span>
        </div>
        <h2 className="section-title">
          Proficiency <span className="gradient-text">level</span>
        </h2>
      </div>

      <div className="glass-card p-6 sm:p-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name} className="group">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">
                  {skill.name}
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-500 transition-colors group-hover:bg-violet-50 group-hover:text-violet-600">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${getColor(skill.level)} transition-all duration-700 ease-out`}
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
