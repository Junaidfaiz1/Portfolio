import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CtaBand = ({
  title,
  text,
  primary = { href: "/contact", label: "Get in touch" },
  secondary,
}) => (
  <section className="wrap pt-28">
    <div className="card flex flex-wrap items-center justify-between gap-6 p-8 sm:p-12">
      <div>
        <h2 className="text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
          {title}
        </h2>
        {text && <p className="mt-2 text-[17px] text-zinc-600">{text}</p>}
      </div>
      <div className="flex flex-wrap gap-2.5">
        {secondary &&
          (secondary.download ? (
            <a href={secondary.href} download={secondary.download} className="btn-light">
              {secondary.label}
            </a>
          ) : (
            <Link href={secondary.href} className="btn-light">
              {secondary.label}
            </Link>
          ))}
        <Link href={primary.href} className="btn-dark">
          {primary.label} <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
  </section>
);

export default CtaBand;
