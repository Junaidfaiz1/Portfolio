import React from "react";

const Services = () => (
  <section className="flex items-center justify-center min-h-[40vh] bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 px-4 py-16 animate-fadeIn">
    <div className="max-w-3xl w-full bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 drop-shadow-lg text-center mb-2">
        Services
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        <li className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 shadow-md text-center">
          <span className="text-xl font-bold text-blue-600">
            Web Development
          </span>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Modern, scalable, and responsive web apps using React, Next.js, and
            Node.js.
          </p>
        </li>
        <li className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 shadow-md text-center">
          <span className="text-xl font-bold text-purple-600">API Design</span>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            RESTful and GraphQL APIs, optimized for performance and security.
          </p>
        </li>
        <li className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 shadow-md text-center">
          <span className="text-xl font-bold text-pink-600">
            Responsive Design
          </span>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Mobile-first layouts, adaptive grids, and seamless experiences
            across all devices.
          </p>
        </li>
        <li className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 shadow-md text-center">
          <span className="text-xl font-bold text-emerald-600">
            Database & Backend
          </span>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            MongoDB, Prisma ORM, and scalable backend solutions.
          </p>
        </li>
      </ul>
    </div>
  </section>
);

export default Services;
