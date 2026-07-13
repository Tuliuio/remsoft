/* eslint-disable @next/next/no-img-element */
import { Star } from "./icons";

const testimonials = [
  {
    quote:
      "A Rem Soft traduziu requisitos complexos em uma solução digital escalável. A abordagem em squads deixou todo o processo fluido e eficiente.",
    name: "Alexandre R.",
    role: "Gerente de Produto",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote:
      "Trabalhar com a Rem Soft foi como ter um time interno. A expertise técnica e a atenção aos detalhes foram excepcionais do início ao fim.",
    name: "Mariana T.",
    role: "Head de Engenharia",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote:
      "O time entendeu nossos objetivos de negócio e entregou um produto confiável e fácil de escalar. A comunicação foi clara durante todo o projeto.",
    name: "Sara L.",
    role: "Fundadora de Startup",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <h2 className="text-center font-sans text-[clamp(1.9rem,4vw,2.8rem)] font-bold tracking-tight text-ink">
        O que dizem nossos clientes
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-3xl border border-line bg-white p-7 shadow-[0_1px_2px_rgba(15,30,46,0.03)]"
          >
            <div className="flex gap-1 text-star">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-[16px] leading-relaxed text-ink/85">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-11 w-11 rounded-full object-cover"
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
    </section>
  );
}
