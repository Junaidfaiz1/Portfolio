"use client";
import { useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { faqs } from "@/data/site";

const Faq = ({ label = "09 · FAQ" }) => {
  const [open, setOpen] = useState(0);

  return (
    <section className="wrap pt-32">
      <div className="flex flex-wrap items-start gap-12">
        <div className="flex-[1_1_320px]">
          <p className="lbl">{label}</p>
          <h2 className="h2">Frequently asked questions</h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-600">
            Can&apos;t find your answer?{" "}
            <Link
              href="/contact"
              className="font-semibold underline underline-offset-[3px]"
            >
              Send me a message
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-[1.6_1_520px] flex-col gap-2.5">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            const id = `faq-panel-${i}`;
            return (
              <div key={f.q} className="card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={id}
                  className="flex min-h-16 w-full items-center justify-between gap-4 px-[22px] py-[18px] text-left text-[17px] font-bold"
                >
                  {f.q}
                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                      isOpen ? "rotate-45 bg-ink text-white" : "bg-zinc-100"
                    }`}
                  >
                    <Plus size={14} strokeWidth={2.4} />
                  </span>
                </button>
                {isOpen && (
                  <p
                    id={id}
                    className="px-[22px] pb-[22px] text-base leading-relaxed text-zinc-600"
                  >
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
