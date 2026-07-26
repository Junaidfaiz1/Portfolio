import React from "react";
import {
  Server,
  Database,
  Link,
  BrainCircuit,
  Trophy,
} from "lucide-react";

const achievements = [
  {
    icon: Server,
    text: "Delivered and maintained scalable MERN and Next.js products in production.",
  },
  {
    icon: BrainCircuit,
    text: "Engineered AI-powered features using OpenAI API, including streaming chatbots with function/tool calling and AI-driven contract analysis tools.",
  },
  {
    icon: Link,
    text: "Integrated REST and GraphQL services with robust validation and error handling.",
  },
  {
    icon: Database,
    text: "Optimized API/database performance for better response time and lower costs.",
  },
];

const Achievements = () => (
  <section className="section-shell py-16 ">
    <div className="mb-12 text-center">
      <div className="mb-4 flex justify-center">
        <span className="section-label">
          <Trophy className="h-3 w-3" />
          Achievements
        </span>
      </div>
      <h2 className="section-title">
        What I&apos;ve <span className="gradient-text">accomplished</span>
      </h2>
    </div>

    <div className="grid gap-4 sm:grid-cols-2">
      {achievements.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="glass-card group flex items-start gap-4 p-5"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 transition-transform duration-300 group-hover:scale-110">
              <Icon className="h-5 w-5 text-emerald-600" />
            </div>
            <p className="pt-1 text-sm leading-relaxed text-slate-500">
              {item.text}
            </p>
          </div>
        );
      })}
    </div>
  </section>
);

export default Achievements;
