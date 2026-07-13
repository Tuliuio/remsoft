"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo, ArrowRight, ChevronDown } from "./icons";
import { services } from "@/lib/services";

const nav = [
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Serviços", href: "/servicos", mega: true },
  { label: "Cases", href: "/cases" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-line shadow-[0_4px_20px_-12px_rgba(15,30,46,0.25)]"
          : "bg-white/60 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-[21px] md:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Rem Soft — início">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.mega ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <Link
                  href={item.href}
                  className="group inline-flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium text-ink/80 transition-colors hover:text-primary"
                >
                  {item.label}
                  <ChevronDown
                    className={`opacity-60 transition-transform ${
                      megaOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                {/* Mega-menu */}
                <div
                  className={`absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3 transition-all ${
                    megaOpen
                      ? "pointer-events-auto opacity-100 translate-y-0"
                      : "pointer-events-none opacity-0 translate-y-1"
                  }`}
                >
                  <div className="grid grid-cols-2 gap-1 rounded-3xl border border-line bg-white p-3 shadow-[var(--shadow-float)]">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/servicos/${s.slug}`}
                        className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-soft"
                      >
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:brand-gradient group-hover:text-white">
                          <s.icon className="h-[18px] w-[18px]" />
                        </span>
                        <span className="leading-tight">
                          <span className="block text-[14px] font-semibold text-ink">
                            {s.navTitle}
                          </span>
                          <span className="mt-0.5 block text-[12px] text-subtle line-clamp-2">
                            {s.short}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-[15px] font-medium text-ink/80 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contato"
            className="group inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-primary px-6 py-3 text-[15px] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(3,93,187,0.7)] transition-all hover:bg-primary-dark hover:shadow-[0_14px_28px_-8px_rgba(3,93,187,0.8)]"
          >
            Fale com um especialista
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line text-ink lg:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-all ${
                open ? "top-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-all ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-5 bg-current transition-all ${
                open ? "top-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-[15px] font-medium text-ink/80 hover:bg-soft"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contato"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-primary px-6 py-3 text-[15px] font-semibold text-white"
            >
              Fale com um especialista
              <ArrowRight />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
