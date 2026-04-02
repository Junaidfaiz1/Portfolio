import React from "react";
import { BadgeCheck } from "lucide-react";

const certifications = [
  "Full Stack Developer Bootcamp - Bitbash",
  "Advanced Git - Datacamp",
  "Advanced GitHub - Datacamp",
  "Advanced React - Udemy",
];

const Certification = () => (
  <section className="section-shell py-8 sm:py-12">
    <div className="panel p-6 sm:p-10">
      <div className="mb-6 flex items-center gap-3">
        <BadgeCheck className="h-7 w-7 text-cyan-300" />
        <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">
          Certifications
        </h2>
      </div>
      <ul className="grid gap-3 text-left">
        {certifications.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-slate-200"
          >
            <BadgeCheck className="h-5 w-5 text-amber-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Certification;
