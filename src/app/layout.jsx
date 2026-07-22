import { Inter } from "next/font/google";
import "./globals.css";
import Transition from "@/Components/Transition";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://junaidfaiz.vercel.app"),
  title: {
    default: "Junaid Faiz — Full Stack Developer & AI Engineer",
    template: "%s | Junaid Faiz",
  },
  description:
    "Portfolio of Junaid Faiz — Full Stack Developer & AI Engineer based in Lahore, Pakistan. Specializing in React, Next.js, Node.js, NestJS, LangChain, LangGraph, and AI-powered web applications.",
  keywords: [
    "Junaid Faiz",
    "Full Stack Developer",
    "AI Engineer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "NestJS Developer",
    "LangChain Developer",
    "LangGraph",
    "OpenAI API",
    "LLM Engineer",
    "GraphQL",
    "MongoDB",
    "Prisma",
    "Socket.IO",
    "Lahore Pakistan",
    "Web Developer Pakistan",
  ],
  authors: [{ name: "Junaid Faiz" }],
  creator: "Junaid Faiz",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Junaid Faiz — Portfolio",
    title: "Junaid Faiz — Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer & AI Engineer building production-ready web apps and LLM-powered features with React, Next.js, Node.js, NestJS, LangChain, and LangGraph.",
    images: [
      {
        url: "/junaidfaiz.jpg",
        width: 800,
        height: 600,
        alt: "Junaid Faiz — Full Stack Developer & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junaid Faiz — Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer & AI Engineer building production-ready web apps and LLM-powered features with React, Next.js, Node.js, NestJS, LangChain, and LangGraph.",
    images: ["/junaidfaiz.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "2SmbFkTTbLXA0U7S8OUPsmR8F2Ulfa3SAa1-XjSZDrU",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Junaid Faiz",
              url: "https://junaidfaiz.vercel.app",
              image: "https://junaidfaiz.vercel.app/junaidfaiz.jpg",
              jobTitle: "Full Stack Developer & AI Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Cipher Developers",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lahore",
                addressCountry: "PK",
              },
              email: "junaidfaizpk5@gmail.com",
              telephone: "+923106846035",
              sameAs: [
                "https://linkedin.com/in/junaid-faiz/",
                "https://github.com/Junaidfaiz1",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "NestJS",
                "LangChain",
                "LangGraph",
                "OpenAI API",
                "GraphQL",
                "MongoDB",
                "Prisma",
                "TypeScript",
                "Socket.IO",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "University of Education",
              },
            }),
          }}
        />
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}
