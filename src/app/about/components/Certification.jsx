import React from "react";
import { BadgeCheck } from "lucide-react";

const Certification = () => (
  <section className="flex items-center justify-center min-h-[30vh] bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50 px-4 py-16 animate-fadeIn">
    <div className="max-w-3xl w-full bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-8">
      <div className="flex items-center gap-3 mb-2">
        <BadgeCheck className="text-purple-600 w-8 h-8" />
        <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-600">
          Certifications
        </h2>
      </div>
      <ul className="text-left text-gray-700 dark:text-gray-300 space-y-4 w-full">
        <li className="flex items-center gap-3 text-lg">
          <BadgeCheck className="w-6 h-6 text-blue-500" />
          Full Stack Developer BootCamp at Bitbash
        </li>
        <li className="flex items-center gap-3 text-lg">
          <BadgeCheck className="w-6 h-6 text-purple-500" />
          Advanced Git on Datacamp
        </li>
        <li className="flex items-center gap-3 text-lg">
          <BadgeCheck className="w-6 h-6 text-pink-500" />
          Advanced Github on Datacamp
        </li>
        <li className="flex items-center gap-3 text-lg">
          <BadgeCheck className="w-6 h-6 text-emerald-500" />
          Advanced React on Udemy
        </li>
      </ul>
    </div>
  </section>
);

export default Certification;
