import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CallToAction = () => (
  <section className="section-shell py-10 sm:py-14" aria-labelledby="cta-heading">
    <div className="glass-card flex flex-col items-center gap-5 px-6 py-10 text-center sm:px-10">
      <h2 id="cta-heading" className="section-title text-2xl sm:text-3xl">
        Ready to <span className="gradient-text">collaborate</span>?
      </h2>
      <p className="section-desc max-w-xl">
        Reach out for full stack development, AI engineering, or product
        collaboration — or browse selected projects first.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link href="/contact" className="btn-primary">
          Contact Junaid Faiz <ArrowRight size={15} />
        </Link>
        <Link href="/projects" className="btn-secondary">
          View full stack projects
        </Link>
      </div>
    </div>
  </section>
);

export default CallToAction;
