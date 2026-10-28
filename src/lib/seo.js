const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  process.env.SITE_URL?.trim() ||
  "https://www.junaid-faiz.pk";

/** Canonical production origin — no trailing slash. Override via NEXT_PUBLIC_SITE_URL. */
export const SITE_URL = rawSiteUrl.replace(/\/+$/, "");
export const SITE_HOST = new URL(SITE_URL).host;
export const SITE_NAME = "Junaid Faiz";
export const SITE_TITLE_DEFAULT =
  "Junaid Faiz | Full Stack Developer | React, Next.js, NestJS";
export const SITE_DESCRIPTION =
  "Junaid Faiz is a Full Stack Developer & AI Engineer based in Lahore, Pakistan. Specializing in React, Next.js, Node.js, NestJS, LangChain, LangGraph, GraphQL, MongoDB, and Prisma — building production web apps and AI-powered products.";

export const PERSON = {
  name: "Junaid Faiz",
  jobTitle: "Full Stack Developer & AI Engineer",
  email: "junaidfaizpk5@gmail.com",
  telephone: "+923106846035",
  image: `${SITE_URL}/junaid-faiz.png`,
  url: SITE_URL,
  sameAs: [
    "https://linkedin.com/in/junaid-faiz/",
    "https://github.com/Junaidfaiz1",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "LangChain",
    "LangGraph",
    "OpenAI API",
    "GraphQL",
    "MongoDB",
    "Prisma",
    "Socket.IO",
    "Full Stack Development",
    "AI Engineering",
    "LLM Applications",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Cipher Developers",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "University of Education",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
};

export const DEFAULT_KEYWORDS = [
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
  "Hire Full Stack Developer",
];

export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Junaid Faiz — Full Stack Developer & AI Engineer",
};

/**
 * Build page-level Metadata for the App Router.
 * @param {{
 *  title: string,
 *  description: string,
 *  path: string,
 *  keywords?: string[],
 *  type?: string,
 *  images?: Array<{url: string, width?: number, height?: number, alt?: string}>,
 *  noIndex?: boolean,
 * }} options
 */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
  images = [OG_IMAGE],
  noIndex = false,
}) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const ogTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;
  const pageTitle =
    path === "/"
      ? { absolute: title }
      : title;

  return {
    title: pageTitle,
    description,
    keywords: [...keywords, ...DEFAULT_KEYWORDS].filter(
      (keyword, index, all) => all.indexOf(keyword) === index
    ),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: ogTitle,
      description,
      url,
      type,
      siteName: SITE_NAME,
      locale: "en_US",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: images.map((img) => img.url),
      creator: "@JunaidFaiz",
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
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
  };
}

export function absoluteUrl(path = "/") {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function breadcrumbList(items) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${items[items.length - 1]?.item || SITE_URL}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function personSchema() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: PERSON.name,
    jobTitle: PERSON.jobTitle,
    description: SITE_DESCRIPTION,
    url: PERSON.url,
    image: PERSON.image,
    email: `mailto:${PERSON.email}`,
    telephone: PERSON.telephone,
    sameAs: PERSON.sameAs,
    knowsAbout: PERSON.knowsAbout,
    worksFor: PERSON.worksFor,
    alumniOf: PERSON.alumniOf,
    address: PERSON.address,
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}/#person` },
    author: { "@id": `${SITE_URL}/#person` },
  };
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    sameAs: PERSON.sameAs,
    founder: { "@id": `${SITE_URL}/#person` },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "professional",
      email: PERSON.email,
      telephone: PERSON.telephone,
      areaServed: "PK",
      availableLanguage: ["English", "Urdu"],
    },
  };
}
