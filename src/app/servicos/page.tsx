import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { ArrowRight, IconBlueprint } from "@/components/icons";

export const metadata: Metadata = {
  title: "Serviços — Rem Soft Sistemas",
  description:
    "Desenvolvimento sob demanda, integração de sistemas, websites, BI, IA e mais. Conheça as soluções da Rem Soft para o seu negócio.",
};

export default function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Soluções sob medida,"
        titleMuted="do início ao fim."
        subtitle="Do primeiro diagrama ao deploy — cobrimos toda a jornada digital do seu negócio com times ágeis e tecnologia de ponta."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Serviços" }]}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        {/* Design Sprint — solução de entrada em destaque */}
        <Link
          href="/design-sprint"
          className="group relative mb-6 flex flex-col items-start gap-6 overflow-hidden rounded-3xl border border-primary/20 p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-float)] md:flex-row md:items-center md:p-10"
          style={{
            backgroundImage:
              "linear-gradient(120deg, var(--color-primary-dark), var(--color-primary) 55%, var(--color-accent))",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-cyan/20 blur-3xl"
          />
          <span className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
            <IconBlueprint className="h-8 w-8" />
          </span>
          <div className="relative flex-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
              Etapa 1 · Solução de entrada
            </span>
            <h2 className="mt-3 font-sans text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight tracking-tight text-white">
              Design Sprint
            </h2>
            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-white/85">
              Antes de desenvolver, desenhamos a planta do seu sistema: documentação,
              Figma das telas e protótipo navegável em 3 semanas — com orçamento
              preciso para a etapa seguinte.
            </p>
          </div>
          <span className="relative inline-flex shrink-0 items-center gap-2 rounded-[var(--radius-pill)] bg-white px-6 py-3 text-[15px] font-bold text-primary transition-transform group-hover:scale-[1.03]">
            Conhecer o Design Sprint
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map(({ slug, icon: Icon, title, short, eyebrow }) => (
            <Link
              key={slug}
              href={`/servicos/${slug}`}
              className="group flex items-start gap-5 rounded-3xl border border-line bg-white p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:brand-gradient group-hover:text-white">
                <Icon />
              </span>
              <div className="flex-1">
                <p className="label-eyebrow text-[11px] text-primary/70">
                  {eyebrow}
                </p>
                <h2 className="mt-1 text-[20px] font-bold leading-snug text-ink">
                  {title}
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-body">
                  {short}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary">
                  Saiba mais
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
