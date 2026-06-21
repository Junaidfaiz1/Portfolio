import React from "react";
import {
  Globe,
  BrainCircuit,
  Cable,
  Paintbrush,
  Database,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Designing and delivering secure, scalable web apps with modern frontend and backend architecture.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: BrainCircuit,
    title: "AI & LLM Engineering",
    description:
      "Building intelligent features powered by LangChain, LangGraph, and model APIs — from streaming chatbots to AI-driven document analysis.",
    color: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Cable,
    title: "API Design & Integration",
    description:
      "Building REST and GraphQL APIs with clear contracts, validation, and performance-focused patterns.",
    color: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: Paintbrush,
    title: "UI Engineering",
    description:
      "Crafting responsive, accessible interfaces with strong component systems and consistent design quality.",
    color: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    icon: Database,
    title: "Backend & Database Optimization",
    description:
      "Improving query performance, data modeling, and service reliability for production systems.",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];

const Services = () => (
  <section className="relative overflow-hidden py-16 sm:py-20">
    {/* Decorative background */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-violet-100/40 blur-[100px]" />
    </div>

    <div className="section-shell relative">
      <div className="mb-12 text-center">
        <div className="mb-4 flex justify-center">
          <span className="section-label">Services</span>
        </div>
        <h2 className="section-title">
          What I can <span className="gradient-text">do for you</span>
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="glass-card group p-6"
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${service.color} transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon className={`h-6 w-6 ${service.iconColor}`} />
              </div>
              <h3 className="mb-2 text-base font-bold text-slate-800">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
