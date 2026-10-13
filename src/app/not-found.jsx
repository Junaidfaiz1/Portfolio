import Link from "next/link";
import { Search } from "lucide-react";
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

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[70vh] flex-col items-center justify-center py-16 text-center">
      <div className="flex items-center gap-3" aria-hidden="true">
        <span className="text-[clamp(120px,16vw,220px)] font-extrabold leading-none tracking-[-0.06em]">
          4
        </span>
        <span className="flex h-[clamp(110px,14vw,190px)] w-[clamp(110px,14vw,190px)] items-center justify-center rounded-full bg-ink text-white">
          <Search className="h-2/5 w-2/5" />
        </span>
        <span className="text-[clamp(120px,16vw,220px)] font-extrabold leading-none tracking-[-0.06em]">
          4
        </span>
      </div>
      <h1 className="mt-6 text-4xl font-extrabold tracking-[-0.04em] md:text-[44px]">
        Oops — this page doesn&apos;t exist.
      </h1>
      <p className="mt-3 text-lg text-zinc-600">
        It may have moved, or the link is broken.
      </p>
      <nav aria-label="Helpful links" className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-dark h-14 px-7">
          Back to home
        </Link>
        <Link href="/projects" className="btn-light h-14 px-7">
          View projects
        </Link>
      </nav>
    </section>
  );
}
