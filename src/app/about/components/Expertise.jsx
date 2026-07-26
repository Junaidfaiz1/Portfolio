import React from "react";
import {
  Layers,
  BadgeCheck,
  BookOpen,
  Database,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";

const items = [
  {
    icon: BrainCircuit,
    title: "LLM Frameworks & Model APIs",
    details: "LangChain, LangGraph, OpenAI API, Anthropic Claude API, Google Gemini API",
    color: "from-violet-500 to-purple-500",
    bg: "bg-violet-50",
    text: "text-violet-600",
    span: true,
  },
  {
    icon: Layers,
    title: "Programming Languages",
    details: "JavaScript, TypeScript",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    text: "text-blue-600",
  },
  {
    icon: BadgeCheck,
    title: "Frameworks & Libraries",
    details: "React.js, Next.js, Node.js, Nest.js, Express.js, GraphQL, Socket.IO",
    color: "from-indigo-500 to-violet-500",
    bg: "bg-indigo-50",
    text: "text-indigo-600",
  },
  {
    icon: BookOpen,
    title: "UI Engineering",
    details: "Tailwind CSS, Shadcn UI, Bootstrap",
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    text: "text-pink-600",
  },
  {
    icon: Database,
    title: "Backend & Data",
    details: "MongoDB, Prisma, GraphQL",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
  {
    icon: ShieldCheck,
    title: "Validation & Forms",
    details: "Zod, Formik, React Hook Form, Class Validator, Class Transformer",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    text: "text-amber-600",
  },
];

const Expertise = () => (
  <section className="section-shell py-16 ">
    <div className="mb-12 text-center">
      <div className="mb-4 flex justify-center">
        <span className="section-label">Expertise</span>
      </div>
      <h2 className="section-title">
        Tools & technologies I{" "}
        <span className="gradient-text">work with</span>
      </h2>
    </div>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className={`glass-card group p-5 ${item.span ? "sm:col-span-2 lg:col-span-1" : ""}`}
          >
            <div className="mb-3 flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.bg} transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon className={`h-5 w-5 ${item.text}`} />
              </div>
              <h3 className="text-sm font-bold text-slate-800">
                {item.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {item.details.split(", ").map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-slate-100 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-500 transition-colors group-hover:border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default Expertise;
