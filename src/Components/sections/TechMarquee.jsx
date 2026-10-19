import { techRows } from "@/data/site";

const Pill = ({ mono, name, hidden }) => (
  <span
    aria-hidden={hidden ? "true" : undefined}
    className="inline-flex h-14 items-center gap-3 whitespace-nowrap rounded-full border border-stone-200 bg-white pl-2.5 pr-[22px] text-[17px] font-semibold shadow-[0_1px_2px_rgba(24,24,27,0.04)]">
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-xs font-medium text-white">
      {mono}
    </span>
    {name}
  </span>
);

const Row = ({ items, reverse }) => (
  <div className="overflow-hidden">
    <div className={`marquee-track${reverse ? " reverse" : ""}`}>
      {/* Rendered twice so the -50% translate loops seamlessly */}
      {[...items, ...items].map(([mono, name], i) => (
        <Pill
          key={`${name}-${i}`}
          mono={mono}
          name={name}
          hidden={i >= items.length}
        />
      ))}
    </div>
  </div>
);

const TechMarquee = () => (
  <section className="pt-24" aria-label="Tech I work with">
    <div className="wrap flex items-center gap-4">
      <span className="h-px flex-1 bg-stone-200" />
      <p className="lbl">Tech I work with</p>
      <span className="h-px flex-1 bg-stone-200" />
    </div>
    <div className="marquee mt-7 flex flex-col gap-3.5">
      <Row items={techRows[0]} />
      <Row items={techRows[1]} reverse />
    </div>
  </section>
);

export default TechMarquee;
