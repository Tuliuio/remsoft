/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight, Check } from "./icons";
import Reveal from "./Reveal";

const pillars = [
  "Confiança, comprometimento e evolução contínua",
  "Seu parceiro de tecnologia, não apenas um fornecedor",
  "Metodologia própria de gestão de times 100% remotos",
];

export default function About() {
  return (
    <section id="quem-somos" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <Reveal className="max-w-2xl">
        <p className="label-eyebrow text-[13px] text-primary">Quem Somos</p>
        <h2 className="mt-3 font-sans text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.08] tracking-tight text-primary-dark">
          Onde a estratégia
          <br />
          <span className="text-muted">encontra a tecnologia.</span>
        </h2>
      </Reveal>

      <Reveal delay={100} className="mt-12 grid items-center gap-10 lg:grid-cols-[340px_1fr]">
        {/* CEO photo */}
        <div className="flex flex-col items-center gap-4">
          <div className="overflow-hidden rounded-[28px] shadow-[var(--shadow-card)]">
            <img
              src="/Edu_remsoft.png"
              alt="Eduardo Negrão — CEO e Fundador da Rem Soft"
              className="w-full object-cover"
            />
          </div>
          <div className="text-center">
            <p className="text-[18px] font-bold text-ink">Eduardo Negrão</p>
            <p className="text-[14px] text-primary">CEO &amp; Fundador</p>
          </div>
        </div>

        {/* CEO message */}
        <div className="rounded-[28px] border border-line bg-soft p-7 md:p-10">
          <p className="mb-1 text-[13px] font-semibold uppercase tracking-widest text-primary">
            Mensagem do CEO
          </p>
          <h3 className="mb-5 text-[22px] font-bold leading-tight text-ink">
            &ldquo;Tecnologia só faz sentido quando gera valor real.&rdquo;
          </h3>
          <p className="text-[16px] leading-relaxed text-body">
            Fundei a Rem Soft há mais de{" "}
            <span className="font-semibold text-primary">12 anos</span> com uma
            convicção simples: é possível construir software de altíssima qualidade
            com times 100% remotos — desde que haja método, cultura e pessoas certas.
            Éramos remotos antes da pandemia, e isso nos deu uma metodologia própria
            de gestão que hoje é o nosso maior diferencial.
          </p>
          <p className="mt-4 text-[16px] leading-relaxed text-body">
            Ao longo dessa jornada, atendemos dezenas de empresas em setores como
            saúde, financeiro, construção, educação, jurídico e médico. Em cada
            projeto, o nosso compromisso é o mesmo: ser um{" "}
            <span className="font-semibold text-ink">parceiro de tecnologia</span>,
            não apenas um fornecedor. Caminhamos lado a lado com nossos clientes,
            da estratégia ao desenvolvimento, para que cada solução gere impacto
            real nos resultados do negócio.
          </p>
          <p className="mt-4 text-[16px] leading-relaxed text-body">
            Acredito que confiança, comprometimento e evolução contínua são os pilares
            que sustentam tudo o que construímos. É isso que entregamos — e é isso
            que nos move todos os dias.
          </p>

          <ul className="mt-6 space-y-3">
            {pillars.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                  <Check />
                </span>
                <span className="text-[15px] text-ink">{p}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/contato"
            className="group mt-8 inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-primary px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Iniciar um projeto
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
