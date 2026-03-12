import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <section className="flex items-center justify-center min-h-[60vh] bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 px-4 py-16 animate-fadeIn">
      <div className="max-w-2xl w-full bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 drop-shadow-lg text-center mb-2">
          About Me
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 text-center leading-relaxed">
          Hi, I&apos;m{" "}
          <span className="font-bold text-blue-600">Junaid Faiz</span>—a
          creative developer passionate about crafting digital experiences that
          inspire and engage.
          <br />
          <br />
          My journey began with the MERN stack, but I quickly expanded my
          expertise to Next.js, NestJS, and Prisma ORM, building robust,
          scalable, and high-performance web applications.
          <br />
          <br />
          I thrive on turning ideas into reality, blending clean code with
          modern design. Whether it&apos;s architecting APIs, optimizing
          databases, or designing responsive interfaces, I love solving complex
          challenges and pushing boundaries.
          <br />
          <br />
          My approach is user-focused, always aiming for seamless, accessible,
          and visually stunning solutions. I stay ahead by exploring new
          technologies and continuously improving my skills.
          <br />
          <br />
          <span className="font-semibold text-blue-600">
            Let&apos;s connect and create something extraordinary together!
          </span>
        </p>
        <div className="flex mt-6 justify-center w-full">
          <Image
            src="/signature.svg"
            width={90}
            height={90}
            alt="Signature"
            className="mt-4 drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
