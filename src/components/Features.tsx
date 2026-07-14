import { IconStrategy, IconDesign, IconCode } from "./icons";
import Reveal from "./Reveal";

const features = [
  {
    icon: IconStrategy,
    title: "Squads Ágeis",
    desc: "Times multidisciplinares — com PO, Scrum Master e desenvolvedores — dedicados e organizados para entregar qualidade e eficiência em todo ciclo.",
  },
  {
    icon: IconDesign,
    title: "Software sob Demanda",
    desc: "Sistemas web, aplicativos e integrações desenhados sob medida para o seu negócio, sempre com tecnologia de ponta e foco em resultado real.",
  },
  {
    icon: IconCode,
    title: "Entrega Dev-Ready",
    desc: "Dividimos o projeto em ciclos curtos e previsíveis, entregando com mais qualidade e uma rotina constante de resultados para o seu time.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="label-eyebrow text-[13px] text-primary">
          Nosso jeito de trabalhar
        </p>
        <h2 className="mt-3 font-sans text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-tight tracking-tight text-primary-dark">
          Por que escolher a Rem Soft?
        </h2>
        <p className="mt-4 text-balance text-[17px] text-body">
          Organizamos nosso time para entregar soluções que escalam junto com os
          objetivos do seu negócio.
        </p>
      </Reveal>

      <Reveal stagger className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group text-center md:text-left">
            <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-[var(--shadow-card)] transition-transform duration-300 [transition-timing-function:var(--ease-spring)] group-hover:-translate-y-1 group-hover:scale-105 md:mx-0">
              <Icon />
            </span>
            <h3 className="text-[20px] font-bold text-ink">{title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-body">{desc}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
