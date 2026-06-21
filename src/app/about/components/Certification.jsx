import React from "react";
import { BadgeCheck, GraduationCap } from "lucide-react";

const certifications = [
  {
    title: "Full Stack Developer Bootcamp",
    issuer: "Bitbash",
  },
  {
    title: "Advanced Git",
    issuer: "Datacamp",
  },
  {
    title: "Advanced GitHub",
    issuer: "Datacamp",
  },
  {
    title: "Advanced React",
    issuer: "Udemy",
  },
];

const Certification = () => (
  <section className="section-shell py-16 sm:py-20">
    <div className="mb-12 text-center">
      <div className="mb-4 flex justify-center">
        <span className="section-label">
          <GraduationCap className="h-3 w-3" />
          Certifications
        </span>
      </div>
      <h2 className="section-title">
        Continuous <span className="gradient-text">learning</span>
      </h2>
    </div>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {certifications.map((item) => (
        <div
          key={item.title}
          className="glass-card group flex flex-col items-center p-6 text-center"
        >
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 transition-transform duration-300 group-hover:scale-110">
            <BadgeCheck className="h-6 w-6 text-emerald-600" />
          </div>
          <h3 className="text-sm font-semibold text-slate-800">
            {item.title}
          </h3>
          <p className="mt-1 text-xs text-slate-400">{item.issuer}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Certification;
