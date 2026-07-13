import { IconStrategy, IconDesign, IconCode } from "./icons";

const features = [
  {
    icon: IconStrategy,
    title: "Squads Ágeis",
    desc: "Times multidisciplinares — PO, Scrum Master e devs — dedicados e organizados para entregar qualidade e eficiência sempre.",
  },
  {
    icon: IconDesign,
    title: "Software sob Demanda",
    desc: "Sistemas web, aplicativos e integrações desenhados sob medida para o seu negócio, com tecnologia de ponta.",
  },
  {
    icon: IconCode,
    title: "Entrega Dev-Ready",
    desc: "Dividimos o projeto em ciclos curtos para entregar com mais qualidade e uma rotina previsível de resultados.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="label-eyebrow text-[13px] text-primary">
          Nosso jeito de trabalhar
        </p>
        <h2 className="mt-3 font-sans text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-tight tracking-tight text-ink">
          Por que escolher a Rem Soft
        </h2>
        <p className="mt-4 text-[17px] text-body">
          Organizamos nosso time para entregar soluções que escalam junto com os
          objetivos do seu negócio.
        </p>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="text-center md:text-left">
            <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-[var(--shadow-card)] md:mx-0">
              <Icon />
            </span>
            <h3 className="text-[20px] font-bold text-ink">{title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-body">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
