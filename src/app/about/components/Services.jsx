import React from "react";

const services = [
  {
    title: "Web Application Development",
    description:
      "Designing and delivering secure, scalable web apps with modern frontend and backend architecture.",
  },
  {
    title: "API Design & Integration",
    description:
      "Building REST and GraphQL APIs with clear contracts, validation, and performance-focused patterns.",
  },
  {
    title: "UI Engineering",
    description:
      "Crafting responsive, accessible interfaces with strong component systems and consistent design quality.",
  },
  {
    title: "Backend & Database Optimization",
    description:
      "Improving query performance, data modeling, and service reliability for production systems.",
  },
];

const Services = () => (
  <section className="section-shell py-8 sm:py-12">
    <div className="panel p-6 sm:p-10">
      <h2 className="mb-6 text-3xl font-bold text-slate-100 sm:text-4xl">
        Services
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <li
            key={service.title}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
          >
            <h3 className="mb-2 text-lg font-semibold text-amber-300">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              {service.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Services;
