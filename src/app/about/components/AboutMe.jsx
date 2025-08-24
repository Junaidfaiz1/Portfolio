import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center md:mt-0 mt-24  p-4">
      <h1 className="text-4xl font-bold mb-4 mt-6 text-center">About Me</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-start md:w-screen md:text-start">
        I am a passionate and dedicated MERN stack developer with a knack for
        building dynamic, responsive, and scalable web applications. Leveraging
        modern technologies like MongoDB, Express.js, React, and Node.js, I
        craft full-stack solutions that are not only seamless but also
        user-focused.
        <br />
        <br />
        Currently, I specialize in working with Next.js, a powerful framework
        that enhances React&apos;s capabilities, enabling me to deliver fast,
        SEO-friendly, and feature-rich web applications. From solving complex
        problems to continuously exploring emerging technologies, I thrive on
        staying at the forefront of the ever-evolving web development landscape.
        <br />
        <br />
        With a strong foundation in both front-end and back-end development, I
        am driven to create impactful digital experiences. I invite you to
        explore my portfolio and see how my skills and passion come to life in
        the projects I&apos;ve built. Let&apos;s build something amazing
        together!
      </p>
      <div className="flex mt-6 justify-end md:justify-self-end w-full md:w-2/3">
        <Image
          src="/signature.svg"
          width={90}
          height={90}
          alt="Signature"
          className="mt-4 "
        />
      </div>
    </div>
  );
};

export default AboutMe;
