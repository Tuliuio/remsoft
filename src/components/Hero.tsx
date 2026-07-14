/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight } from "./icons";
import HeroVideo from "./HeroVideo";

const avatars = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* soft brand glow backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(20,202,244,0.35), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-[-8%] h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(3,93,187,0.25), transparent)",
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-2 lg:gap-8 lg:py-24">
        {/* Left */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-primary/15 bg-primary-soft px-4 py-1.5 text-[13px] font-semibold text-primary">
            <span className="h-2 w-2 rounded-full bg-cyan" />
            Além da solução
          </span>

          <h1 className="mt-6 font-sans text-[clamp(2.3rem,5.2vw,3.75rem)] font-extrabold leading-[1.02] tracking-tight text-primary-dark">
            Somos especialistas
            <br />
            em software.
            <br />
            <span className="text-muted">Tecnologia que move negócios.</span>
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-body">
            Damos total suporte aos nossos parceiros para gerar valor no âmbito
            digital
            <br className="hidden md:block" />— da estratégia ao desenvolvimento.
            Uma software house 100% remota,
            <br className="hidden md:block" /> há mais de 12 anos impulsionando
            resultados.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contato"
              className="group inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-primary px-7 py-4 text-[16px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(3,93,187,0.7)] transition-all hover:bg-primary-dark"
            >
              Fale com um especialista
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-line bg-white px-7 py-4 text-[16px] font-semibold text-ink transition-colors hover:border-primary/40 hover:text-primary"
            >
              Nossos serviços
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {avatars.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <p className="text-[14px] font-medium text-subtle">
              +300 projetos entregues para 160 clientes em todo o Brasil
            </p>
          </div>
        </div>

        {/* Right — institutional video with floating cards */}
        <div className="animate-fade-up [animation-delay:120ms]">
          <HeroVideo />
        </div>
      </div>
    </section>
  );
}
