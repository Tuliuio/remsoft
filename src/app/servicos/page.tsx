import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { ArrowRight } from "@/components/icons";

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
