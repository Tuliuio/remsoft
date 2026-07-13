"use client";

import { useState } from "react";

export default function FAQ({
  items,
  title = "Perguntas frequentes",
}: {
  items: { q: string; a: string }[];
  title?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <h2 className="text-center font-sans text-[clamp(1.8rem,4vw,2.6rem)] font-bold tracking-tight text-ink">
        {title}
      </h2>
      <div className="mt-10 divide-y divide-line rounded-3xl border border-line bg-white">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-[16px] font-semibold text-ink">
                  {item.q}
                </span>
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-primary transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-[15px] leading-relaxed text-body">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
