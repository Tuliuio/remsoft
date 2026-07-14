import Link from "next/link";
import { ArrowRight } from "./icons";

export default function CtaBand({
  title = "Vamos impulsionar o seu negócio?",
  subtitle = "Conte seu desafio e um especialista retorna com um plano — sem compromisso. A primeira conversa é por nossa conta.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
      <div
        className="relative overflow-hidden rounded-[36px] px-6 py-14 text-center md:px-14 md:py-16"
        style={{
          backgroundImage:
            "linear-gradient(130deg, var(--color-primary-dark), var(--color-primary) 55%, var(--color-accent))",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan/20 blur-3xl"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-sans text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-tight tracking-tight text-white">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-white/80">
            {subtitle}
          </p>
          <Link
            href="/contato"
            className="group mt-8 inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-white px-8 py-4 text-[16px] font-bold text-primary transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            Fale com um especialista
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
