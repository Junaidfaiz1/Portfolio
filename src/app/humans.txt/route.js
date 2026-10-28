import { SITE_URL, PERSON } from "@/lib/seo";
import { contact } from "@/data/site";

export const dynamic = "force-static";

export function GET() {
  const body = `/* TEAM */
Developer: ${PERSON.name}
Role: ${PERSON.jobTitle}
Contact: ${contact.email}
GitHub: ${contact.github}
LinkedIn: ${contact.linkedin}
From: ${contact.location}, Pakistan

/* SITE */
Last update: ${new Date().toISOString().slice(0, 10)}
Language: English
Standards: HTML5, CSS3
Components: Next.js, React, Tailwind CSS, Framer Motion
Site: ${SITE_URL}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
