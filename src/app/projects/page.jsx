import Projects from "./components/Projects";

export const metadata = {
  title: "Projects",
  description:
    "Explore projects by Junaid Faiz — from AI-powered dental networking platforms and eCommerce sites to full-stack library management systems, built with React, Next.js, NestJS, and OpenAI API.",
  openGraph: {
    title: "Projects by Junaid Faiz",
    description:
      "Selected work focused on practical product outcomes, maintainable architecture, and AI-powered features.",
  },
};

const page = () => {
  return (
    <>
      <Projects />
    </>
  );
};

export default page;
