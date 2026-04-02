import React from "react";

const Testimonials = () => (
  <section className="flex items-center justify-center min-h-[30vh] bg-gradient-to-br from-purple-900 via-pink-700 to-yellow-400 px-2 sm:px-4 py-8 sm:py-16 animate-fadeIn">
    <div className="max-w-2xl w-full bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 drop-shadow-lg text-center mb-2">
        Testimonials
      </h2>
      <div className="w-full text-center">
        <blockquote className="italic text-lg text-gray-700 dark:text-gray-300 mb-4">
          &ldquo;Junaid transformed our business platform with a robust,
          scalable web app. His communication and technical skills are
          top-notch.&rdquo;
        </blockquote>
        <span className="font-semibold text-blue-600">
          Sarah Ahmed, Product Manager, BizPlatform
        </span>
      </div>
      <div className="w-full text-center">
        <blockquote className="italic text-lg text-gray-700 dark:text-gray-300 mb-4">
          &ldquo;Working with Junaid on our design system was seamless. He
          delivered pixel-perfect UI and optimized performance beyond
          expectations.&rdquo;
        </blockquote>
        <span className="font-semibold text-purple-600">
          Alex Kim, Lead Designer, CreativeCollab
        </span>
      </div>
      <div className="w-full text-center">
        <blockquote className="italic text-lg text-gray-700 dark:text-gray-300 mb-4">
          &ldquo;Junaid&apos;s expertise in API development and backend
          architecture helped us scale our SaaS product efficiently. Highly
          recommended.&rdquo;
        </blockquote>
        <span className="font-semibold text-emerald-600">
          Michael Lee, CTO, SaaSify
        </span>
      </div>
    </div>
  </section>
);

export default Testimonials;
