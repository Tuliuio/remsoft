import Link from "next/link";
import { ArrowRight } from "./icons";
import { services } from "@/lib/services";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="label-eyebrow text-[13px] text-primary">Serviços</p>
        <h2 className="mt-3 font-sans text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-tight tracking-tight text-primary-dark">
          Soluções sob medida,
          <br />
          do início ao fim.
        </h2>
        <p className="mt-4 text-[17px] text-body">
          Do primeiro diagrama ao deploy — cobrimos toda a jornada digital do seu
          negócio.
        </p>
      </Reveal>

      <Reveal stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ slug, icon: Icon, navTitle, short }) => (
          <Link
            key={slug}
            href={`/servicos/${slug}`}
            className="group flex flex-col rounded-3xl border border-line bg-white p-6 transition-all duration-300 [transition-timing-function:var(--ease-out)] hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[var(--shadow-card)] active:scale-[0.99]"
          >
            <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:brand-gradient group-hover:text-white">
              <Icon />
            </span>
            <h3 className="text-[17px] font-bold leading-snug text-ink">
              {navTitle}
            </h3>
            <p className="mt-2 flex-1 text-[14px] leading-relaxed text-body">
              {short}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary">
              Saiba mais
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </Reveal>
    </section>
  );
}
