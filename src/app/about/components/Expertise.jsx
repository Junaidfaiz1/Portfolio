import React from "react";
import {
  Code,
  Layers,
  BadgeCheck,
  BookOpen,
  Database,
  ShieldCheck,
} from "lucide-react";

const Expertise = () => (
  <section className="flex items-center justify-center min-h-[30vh] bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 px-4 py-16 animate-fadeIn">
    <div className="max-w-3xl w-full bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-8">
      <div className="flex items-center gap-3 mb-2">
        <Code className="text-blue-600 w-8 h-8" />
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-600">
          Area of Expertise
        </h2>
      </div>
      <ul className="text-left text-gray-700 dark:text-gray-300 space-y-4 w-full">
        <li className="flex items-center gap-3 text-lg">
          <Layers className="w-6 h-6 text-blue-500" />
          <span className="font-semibold">Programming Languages:</span>{" "}
          JavaScript, TypeScript
        </li>
        <li className="flex items-center gap-3 text-lg">
          <BadgeCheck className="w-6 h-6 text-purple-500" />
          <span className="font-semibold">Frameworks & Libraries:</span>{" "}
          React.js, Next.js, Node.js, Nest.js, Express.js, GraphQL
        </li>
        <li className="flex items-center gap-3 text-lg">
          <BookOpen className="w-6 h-6 text-pink-500" />
          <span className="font-semibold">UI Frameworks & Libraries:</span>{" "}
          Tailwind CSS, Shadcn UI, Bootstrap
        </li>
        <li className="flex items-center gap-3 text-lg">
          <Database className="w-6 h-6 text-emerald-500" />
          <span className="font-semibold">Backend & Databases:</span> MongoDB,
          Prisma, GraphQL
        </li>
        <li className="flex items-center gap-3 text-lg">
          <ShieldCheck className="w-6 h-6 text-blue-400" />
          <span className="font-semibold">Validation Libraries:</span> Zod,
          Formik, React Hook Form, Class Validator, Class Transformer
        </li>
      </ul>
    </div>
  </section>
);

export default Expertise;
