import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, PERSON } from "@/lib/seo";
import {
  RESUME_URL,
  YEARS_OF_EXPERIENCE,
  contact,
  expertise,
  services,
  achievements,
  certifications,
  faqs,
} from "@/data/site";
import { projectsData } from "@/data/projects";

const pages = [
  ["Home", "/", "Overview, featured work, services and FAQ"],
  ["Projects", "/projects", "Portfolio of AI, SaaS, eCommerce and full stack projects"],
  ["About", "/about", "Background, experience, education and certifications"],
  ["Skills", "/skills", "Tech stack: LLM frameworks, frontend, backend and data"],
  ["Contact", "/contact", "Email, phone, location and contact form"],
];

const projectLine = (p) => {
  const link = p.demoLink || p.githubLink;
  const title = link ? `[${p.title}](${link})` : p.title;
  return `- ${title}: ${p.summary} (${p.tags.slice(0, 6).join(", ")})`;
};

const header = () =>
  [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    `${PERSON.name} is a ${PERSON.jobTitle} with ${YEARS_OF_EXPERIENCE}+ years of experience, based in ${contact.location}, Pakistan. Open to full-time roles and freelance projects, remote-friendly (GMT+5).`,
  ].join("\n");

const contactSection = () =>
  [
    "## Contact",
    "",
    `- Email: ${contact.email}`,
    `- Phone: ${contact.phone}`,
    `- LinkedIn: ${contact.linkedin}`,
    `- GitHub: ${contact.github}`,
    `- Resume (PDF): ${SITE_URL}${RESUME_URL}`,
  ].join("\n");

/** Concise index for LLMs — https://llmstxt.org */
export function buildLlmsTxt() {
  return [
    header(),
    "",
    "## Pages",
    "",
    ...pages.map(([title, path, desc]) => `- [${title}](${SITE_URL}${path}): ${desc}`),
    "",
    "## Featured projects",
    "",
    ...projectsData.slice(0, 5).map(projectLine),
    "",
    contactSection(),
    "",
    "## Optional",
    "",
    `- [Full profile](${SITE_URL}/llms-full.txt): Complete skills, services, projects and FAQ in one file`,
    `- [Sitemap](${SITE_URL}/sitemap.xml)`,
    "",
  ].join("\n");
}

/** Full single-file profile for LLMs. */
export function buildLlmsFullTxt() {
  return [
    header(),
    "",
    "## Skills",
    "",
    ...expertise.map((g) => `- ${g.title}: ${g.items.join(", ")}`),
    "",
    "## Services",
    "",
    ...services.map((s) => `- ${s.title}: ${s.text}`),
    "",
    "## Highlights",
    "",
    ...achievements.map((a) => `- ${a}`),
    "",
    "## Projects",
    "",
    ...projectsData.flatMap((p) => [
      `### ${p.title} (${p.label || p.category})`,
      "",
      p.description || p.summary,
      "",
      `- Stack: ${p.tags.join(", ")}`,
      ...(p.demoLink ? [`- Live: ${p.demoLink}`] : []),
      ...(p.githubLink ? [`- Code: ${p.githubLink}`] : []),
      "",
    ]),
    "## Education & certifications",
    "",
    `- ${PERSON.alumniOf.name}`,
    ...certifications.map((c) => `- ${c.title} — ${c.issuer}`),
    "",
    "## FAQ",
    "",
    ...faqs.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
    contactSection(),
    "",
  ].join("\n");
}
