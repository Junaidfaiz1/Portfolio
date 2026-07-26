import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = {
  ...buildPageMetadata({
    title: "No page found",
    description:
      "The page you requested does not exist on Junaid Faiz's portfolio. Return home, browse projects, or get in touch.",
    path: "/404",
    keywords: ["404", "page not found", "Junaid Faiz"],
    noIndex: true,
  }),
  title: "No page found",
};

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "View projects" },
  { href: "/about", label: "About Junaid Faiz" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <section className="section-shell flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="section-label mb-4">404</p>
      <h1 className="section-title">No page found</h1>
      <p className="section-desc mx-auto mt-4 max-w-md">
        This URL does not exist. Use the links below to continue exploring the
        portfolio.
      </p>
      <nav
        aria-label="Helpful links"
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="btn-secondary">
            {link.label}
          </Link>
        ))}
      </nav>
    </section>
  );
}
