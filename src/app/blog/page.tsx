/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Blog — Rem Soft Sistemas",
  description:
    "Conteúdos e insights sobre tecnologia, desenvolvimento de software, times ágeis e transformação digital.",
};

const posts = [
  {
    title: "Squads ágeis: por que essa é a base de um bom projeto",
    excerpt:
      "Entenda como a organização em squads multidisciplinares eleva a qualidade e a previsibilidade das entregas de software.",
    category: "Metodologia",
    date: "10 jul 2026",
    read: "5 min",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Integração de sistemas: como acabar com as ilhas de dados",
    excerpt:
      "APIs, webhooks e middlewares na prática para conectar suas ferramentas e ter uma fonte única de verdade.",
    category: "Integração",
    date: "28 jun 2026",
    read: "6 min",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Core Web Vitals: o que são e por que impactam suas vendas",
    excerpt:
      "Performance é conversão. Veja como as métricas do Google afetam a experiência e o resultado do seu site.",
    category: "Performance",
    date: "15 jun 2026",
    read: "4 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "IA aplicada: por onde começar no seu negócio",
    excerpt:
      "Um guia prático para identificar processos que se beneficiam de inteligência artificial sem trocar seus sistemas.",
    category: "Inteligência Artificial",
    date: "02 jun 2026",
    read: "7 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Power BI: transformando planilhas em decisão",
    excerpt:
      "Como montar dashboards que dão uma visão 360° do negócio e substituem relatórios manuais.",
    category: "Business Intelligence",
    date: "20 mai 2026",
    read: "5 min",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80",
  },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Tecnologia que"
        titleMuted="move negócios."
        subtitle="Conteúdos e insights sobre desenvolvimento, times ágeis, performance e transformação digital."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Blog" }]}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        {/* Featured */}
        <a
          href="#"
          className="group grid items-center gap-8 overflow-hidden rounded-[32px] border border-line bg-white transition-shadow hover:shadow-[var(--shadow-card)] lg:grid-cols-2"
        >
          <div className="overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:h-full"
            />
          </div>
          <div className="p-7 md:p-10">
            <div className="flex items-center gap-3 text-[13px] text-subtle">
              <span className="rounded-[var(--radius-pill)] bg-primary-soft px-3 py-1 font-semibold text-primary">
                {featured.category}
              </span>
              <span>{featured.date}</span>
              <span>· {featured.read} de leitura</span>
            </div>
            <h2 className="mt-4 font-sans text-[clamp(1.5rem,3vw,2.1rem)] font-bold leading-tight text-ink">
              {featured.title}
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-body">
              {featured.excerpt}
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-primary">
              Ler artigo
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </a>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {rest.map((p) => (
            <a
              key={p.title}
              href="#"
              className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)] sm:flex-row"
            >
              <div className="overflow-hidden sm:w-52 sm:shrink-0">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-full"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 text-[12px] text-subtle">
                  <span className="font-semibold text-primary">{p.category}</span>
                  <span>· {p.date}</span>
                </div>
                <h3 className="mt-2 text-[18px] font-bold leading-snug text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-body">
                  {p.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
