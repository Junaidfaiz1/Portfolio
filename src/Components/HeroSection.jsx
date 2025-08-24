"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <main className="flex flex-col lg:flex-row h-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-48 ">
      {/* Image Section */}
      <section className="w-full lg:w-1/2 h-[400px] lg:h-full relative flex items-center justify-center">
        <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg border-4 border-blue-600">
          <Image
            src="/junaidfaiz.jpg"
            alt="Junaid Faiz - MERN Stack Developer"
            className="object-cover"
            fill
            priority
          />
        </div>
      </section>

      {/* Text Section */}
      <section className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-8 text-center lg:text-left mt-8 lg:mt-0">
        {/* Title Section */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-800">
          Hi, I&apos;m <span className="text-blue-600">Junaid Faiz</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700">
          MERN Stack Developer
        </h2>

        {/* Description Section */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600">
          I specialize in building modern, scalable, and responsive web
          applications using MongoDB, Express.js, React, and Node.js. Let&apos;s
          create something amazing together!
        </p>

        {/* Button Section */}
        <div className="w-full flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
            aria-label="View Projects"
          >
            <Link href="projects">View Projects</Link>
          </button>
          <button
            className="text-blue-600 border border-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-blue-100 transition-all"
            aria-label="Download Resume"
          >
            <a
              download={true}
              href="/Junaid Faiz Resume(full stack).pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Download Resume
            </a>
            {/* <span className="font-semibold">Download Resume</span> */}
          </button>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
