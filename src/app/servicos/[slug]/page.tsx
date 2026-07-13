import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getService } from "@/lib/services";
import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";
import CtaBand from "@/components/CtaBand";
import Testimonials from "@/components/Testimonials";
import { Check, ArrowRight } from "@/components/icons";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Serviço — Rem Soft" };
  return {
    title: `${service.title} — Rem Soft Sistemas`,
    description: service.heroSubtitle,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const { icon: Icon } = service;

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
        breadcrumb={[
          { label: "Início", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: service.navTitle },
        ]}
      />

      {/* Consultoria gratuita note */}
      <section className="mx-auto max-w-7xl px-5 pt-14 md:px-8">
        <div className="flex flex-col items-start gap-6 rounded-3xl border border-line bg-white p-7 shadow-[var(--shadow-card)] md:flex-row md:items-center md:justify-between md:p-9">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl brand-gradient text-white">
              <Icon />
            </span>
            <div>
              <h2 className="text-[20px] font-bold text-ink">
                Consultoria gratuita
              </h2>
              <p className="mt-1 text-[15px] text-body">
                Fale com um especialista e receba um diagnóstico sem compromisso.
              </p>
            </div>
          </div>
          <Link
            href="/contato"
            className="group inline-flex shrink-0 items-center gap-2 rounded-[var(--radius-pill)] bg-primary px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Agendar conversa
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-eyebrow text-[13px] text-primary">Benefícios</p>
          <h2 className="mt-3 font-sans text-[clamp(1.8rem,4vw,2.6rem)] font-bold tracking-tight text-ink">
            Por que investir nesse serviço
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-3xl border border-line bg-white p-6 transition-shadow hover:shadow-[var(--shadow-card)]"
            >
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Check />
              </span>
              <h3 className="text-[17px] font-bold text-ink">{b.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-body">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
      <FAQ items={service.faq} />
      <CtaBand />
    </>
  );
}
