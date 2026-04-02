import React from "react";
import {
  Server,
  // Zap,
  Database,
  // Users,
  Link,
} from "lucide-react";

const achievements = [
  {
    icon: Server,
    text: "Delivered and maintained scalable MERN and Next.js products in production.",
  },
  {
    icon: Link,
    text: "Integrated REST and GraphQL services with robust validation and error handling.",
  },
  // {
  //   icon: Zap,
  //   text: "Improved release flow with CI/CD automation and deployment standardization.",
  // },
  {
    icon: Database,
    text: "Optimized API/database performance for better response time and lower costs.",
  },
  // {
  //   icon: Users,
  //   text: "Mentored developers through code reviews, architecture sessions, and pair programming.",
  // },
];

const Achievements = () => (
  <section className="section-shell py-8 sm:py-12">
    <div className="panel p-6 sm:p-10">
      <h2 className="mb-6 text-3xl font-bold text-slate-100 sm:text-4xl">
        Achievements
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.text}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4"
            >
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
              <p className="text-sm leading-relaxed text-slate-300">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Achievements;
