"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 px-4 py-16">
      <div className="max-w-3xl w-full bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-8 animate-fadeIn">
        <div className="relative w-44 h-44 sm:w-60 sm:h-60 rounded-full overflow-hidden shadow-xl border-4 border-blue-600 mb-6">
          <Image
            src="/junaidfaiz.jpg"
            alt="Junaid Faiz - Full Stack Developer"
            className="object-cover"
            fill
            priority
          />
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 drop-shadow-lg text-center">
          Junaid Faiz
        </h1>
        <span className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">
          Transforming Ideas Into Impactful Web Solutions
        </span>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-200 text-center">
          Full Stack & Modern Web Developer
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center max-w-xl">
          Turning ideas into beautiful, scalable web apps. Expert in React,
          Next.js, NestJS, Prisma ORM, and more. I blend clean code with
          creative design for seamless digital experiences.
          <br />
          <span className="font-semibold text-blue-600">
            Let&apos;s build something remarkable together!
          </span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-2">
          <Link href="/projects" passHref>
            <button
              className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 focus:ring-2 focus:ring-blue-400 transition-all font-semibold text-base"
              aria-label="View Projects"
            >
              View Projects
            </button>
          </Link>
          <a
            download={true}
            href="/Junaid Faiz Resume(full stack).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 border border-blue-600 px-6 py-3 rounded-xl shadow-lg hover:bg-blue-100 focus:ring-2 focus:ring-blue-400 transition-all font-semibold text-base"
            aria-label="Download Resume"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
