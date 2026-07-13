"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { ArrowRight } from "./icons";

type Category = "Sistema Web" | "Website" | "Aplicativo";

type Case = {
  title: string;
  client: string;
  category: Category;
  image: string;
};

const cases: Case[] = [
  {
    title: "Plataforma de gestão hospitalar",
    client: "Saúde",
    category: "Sistema Web",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "App de agendamento de consultas",
    client: "Médico",
    category: "Aplicativo",
    image: "https://images.unsplash.com/photo-1580281658626-ee379f3cce93?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Portal institucional corporativo",
    client: "Construção",
    category: "Website",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Dashboard financeiro em Power BI",
    client: "Financeiro",
    category: "Sistema Web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "App de delivery multiplataforma",
    client: "Varejo",
    category: "Aplicativo",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Site para escritório de advocacia",
    client: "Jurídico",
    category: "Website",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sistema de matrículas online",
    client: "Educação",
    category: "Sistema Web",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "App de fidelidade e cashback",
    client: "Varejo",
    category: "Aplicativo",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Landing page de alta conversão",
    client: "Financeiro",
    category: "Website",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
  },
];

const filters = ["Todos", "Sistema Web", "Website", "Aplicativo"] as const;

export default function CasesGallery() {
  const [active, setActive] = useState<(typeof filters)[number]>("Todos");
  const visible =
    active === "Todos" ? cases : cases.filter((c) => c.category === active);

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
      {/* Filter pills */}
      <div className="flex flex-wrap justify-center gap-3">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-[var(--radius-pill)] px-6 py-2.5 text-[15px] font-semibold transition-colors ${
              active === f
                ? "bg-primary text-white"
                : "border border-line bg-white text-ink hover:border-primary/40 hover:text-primary"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((c) => (
          <article
            key={c.title}
            className="group overflow-hidden rounded-3xl border border-line bg-white transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
          >
            <div className="relative overflow-hidden">
              <img
                src={c.image}
                alt={c.title}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-[var(--radius-pill)] bg-white/90 px-3 py-1 text-[12px] font-semibold text-primary backdrop-blur">
                {c.category}
              </span>
            </div>
            <div className="p-6">
              <p className="text-[12px] font-medium uppercase tracking-wider text-subtle">
                {c.client}
              </p>
              <h3 className="mt-1.5 text-[18px] font-bold leading-snug text-ink">
                {c.title}
              </h3>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary">
                Ver projeto
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
