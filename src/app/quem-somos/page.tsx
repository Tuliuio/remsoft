/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Metrics from "@/components/Metrics";
import CtaBand from "@/components/CtaBand";
import { Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "Quem Somos — Rem Soft Sistemas",
  description:
    "REMote SOFTware: uma software house 100% remota há mais de 12 anos, com metodologia própria de gestão de times e cultura ágil.",
};

const values = [
  {
    title: "Confiança, comprometimento e evolução",
    desc: "Os valores que guiam cada projeto e cada relação com nossos parceiros.",
  },
  {
    title: "Parceiro de tecnologia",
    desc: "Não somos apenas um fornecedor — caminhamos junto para gerar valor no seu negócio.",
  },
  {
    title: "Squads como base",
    desc: "Times multidisciplinares e autônomos, organizados para entregar qualidade sempre.",
  },
];

const leaders = [
  {
    name: "Eduardo Negrão",
    role: "CEO & Fundador",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Karina Negrão",
    role: "Head de Processos e Inovação",
    avatar: "https://randomuser.me/api/portraits/women/48.jpg",
  },
];

const team = [
  {
    quote:
      "Aqui a autonomia gera motivação. Cada squad tem liberdade para encontrar a melhor solução, e isso se reflete na qualidade da entrega.",
    name: "Vinícius José",
    role: "Tech Lead",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    quote:
      "Qualidade não é uma etapa, é uma cultura. Trabalhar remoto desde sempre nos deu processos maduros e foco no que realmente importa.",
    name: "Iara Stevani",
    role: "Head de Qualidade",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
  },
];

const certs = ["PMP · PMI", "PSM · Scrum.org", "OCJP · Oracle", "CPTF · IBQTS"];

export default function QuemSomos() {
  return (
    <>
      <PageHero
        eyebrow="Quem Somos"
        title="REMote SOFTware —"
        titleMuted="talento e tecnologia lado a lado."
        subtitle="Somos uma software house 100% remota há mais de 12 anos. Éramos remotos antes da pandemia, e isso nos deu uma metodologia própria de gestão de times e uma cultura ágil de verdade."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Quem Somos" }]}
      />

      {/* Story */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-[28px] shadow-[var(--shadow-card)]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
              alt="Time da Rem Soft colaborando"
              className="h-full min-h-[360px] w-full object-cover"
            />
          </div>
          <div>
            <p className="label-eyebrow text-[13px] text-primary">Nossa história</p>
            <h2 className="mt-3 font-sans text-[clamp(1.8rem,4vw,2.6rem)] font-bold leading-tight tracking-tight text-ink">
              Mais de 12 anos impulsionando negócios
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-body">
              Nascemos com o home office no DNA e construímos, ao longo dos anos,
              uma forma própria de organizar times remotos de alta performance.
              Atendemos todo o Brasil, em nichos como saúde, financeiro,
              construção, educação, jurídico e médico.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-body">
              Nossa única missão é impulsionar negócios por meio da tecnologia —
              dando total suporte aos parceiros para gerarem valor no âmbito
              digital, da estratégia ao desenvolvimento.
            </p>

            <ul className="mt-7 space-y-3">
              {values.map((v) => (
                <li key={v.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                    <Check />
                  </span>
                  <span className="text-[15px] text-ink">
                    <strong className="font-semibold">{v.title}.</strong>{" "}
                    <span className="text-body">{v.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Metrics />

      {/* Leadership */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-eyebrow text-[13px] text-primary">Liderança</p>
          <h2 className="mt-3 font-sans text-[clamp(1.8rem,4vw,2.6rem)] font-bold tracking-tight text-ink">
            Quem conduz a Rem Soft
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-2xl gap-6 sm:grid-cols-2">
          {leaders.map((l) => (
            <div
              key={l.name}
              className="flex flex-col items-center rounded-3xl border border-line bg-white p-8 text-center"
            >
              <img
                src={l.avatar}
                alt={l.name}
                className="h-24 w-24 rounded-full object-cover"
              />
              <h3 className="mt-5 text-[19px] font-bold text-ink">{l.name}</h3>
              <p className="mt-1 text-[14px] text-primary">{l.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team voices */}
      <section className="bg-soft">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="label-eyebrow text-[13px] text-primary">Nosso time</p>
            <h2 className="mt-3 font-sans text-[clamp(1.8rem,4vw,2.6rem)] font-bold tracking-tight text-ink">
              A voz de quem constrói com a gente
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {team.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-3xl border border-line bg-white p-7"
              >
                <blockquote className="flex-1 text-[16px] leading-relaxed text-ink/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <span className="leading-tight">
                    <span className="block text-[15px] font-bold text-ink">
                      {t.name}
                    </span>
                    <span className="block text-[13px] text-subtle">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-14 text-center">
            <p className="text-[14px] font-medium text-subtle">
              Certificações do nosso time
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              {certs.map((c) => (
                <span
                  key={c}
                  className="rounded-[var(--radius-pill)] border border-line bg-white px-5 py-2.5 text-[14px] font-semibold text-ink"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
