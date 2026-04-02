import React from "react";
import {
  Code,
  Layers,
  BadgeCheck,
  BookOpen,
  Database,
  ShieldCheck,
} from "lucide-react";

const items = [
  {
    icon: Layers,
    title: "Programming Languages",
    details: "JavaScript, TypeScript",
  },
  {
    icon: BadgeCheck,
    title: "Frameworks & Libraries",
    details: "React.js, Next.js, Node.js, Nest.js, Express.js, GraphQL",
  },
  {
    icon: BookOpen,
    title: "UI Engineering",
    details: "Tailwind CSS, Shadcn UI, Bootstrap",
  },
  {
    icon: Database,
    title: "Backend & Data",
    details: "MongoDB, Prisma, GraphQL",
  },
  {
    icon: ShieldCheck,
    title: "Validation & Forms",
    details: "Zod, Formik, React Hook Form, Class Validator",
  },
];

const Expertise = () => (
  <section className="section-shell py-8 sm:py-12">
    <div className="panel p-6 sm:p-10">
      <div className="mb-6 flex items-center gap-3">
        <Code className="h-7 w-7 text-cyan-300" />
        <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
          Expertise
        </h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-4"
            >
              <div className="mb-2 flex items-center gap-2">
                <Icon className="h-5 w-5 text-amber-300" />
                <h3 className="text-base font-semibold text-slate-100">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-slate-300">{item.details}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Expertise;
