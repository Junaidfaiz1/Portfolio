import React from "react";

const CallToAction = () => (
  <section className="flex items-center justify-center min-h-[20vh] bg-gradient-to-br from-blue-600 via-purple-500 to-pink-400 px-4 py-12 animate-fadeIn">
    <div className="max-w-xl w-full bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-6">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-600 text-center mb-2">
        Ready to Collaborate?
      </h2>
      <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 text-center">
        Let&apos;s turn your ideas into reality. Reach out for web development,
        UI/UX, or creative projects!
      </p>
      <a
        href="/contact"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition-all font-semibold text-base"
      >
        Contact Me
      </a>
    </div>
  </section>
);

export default CallToAction;
