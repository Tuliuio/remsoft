import { ArrowRight, IconMail, IconPhone, IconPin } from "./icons";

const info = [
  { icon: IconMail, label: "E-mail", value: "contato@remsoft.com.br", href: "mailto:contato@remsoft.com.br" },
  { icon: IconPhone, label: "Telefone / WhatsApp", value: "+55 (48) 4042-2634", href: "tel:+554840422634" },
  { icon: IconPin, label: "Onde estamos", value: "100% remoto — atendemos todo o Brasil", href: null },
];

const field =
  "w-full rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-[15px] text-white placeholder:text-white/60 outline-none transition focus:border-white/60 focus:bg-white/15";

export default function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <div
        className="relative overflow-hidden rounded-[36px] px-6 py-14 md:px-14 md:py-16"
        style={{
          backgroundImage:
            "linear-gradient(130deg, var(--color-primary-dark), var(--color-primary) 55%, var(--color-accent))",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 -bottom-24 h-72 w-72 rounded-full bg-cyan/20 blur-3xl"
        />
        <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy + info */}
          <div>
            <p className="label-eyebrow text-[13px] text-cyan">Fale conosco</p>
            <h2 className="mt-3 font-sans text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-tight tracking-tight text-white">
              Vamos impulsionar
              <br />o seu negócio?
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-white/80">
              Conte seu desafio e um especialista retorna com um plano — sem
              compromisso. A primeira conversa é por nossa conta.
            </p>

            <ul className="mt-9 space-y-5">
              {info.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/12 text-white">
                    <Icon />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-[12px] uppercase tracking-wider text-white/60">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="text-[16px] font-semibold text-white hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-[16px] font-semibold text-white">
                        {value}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <form
            action="#"
            className="rounded-[28px] bg-white/5 p-6 backdrop-blur-sm md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input className={field} type="text" placeholder="Nome" aria-label="Nome" />
              <input className={field} type="tel" placeholder="Telefone" aria-label="Telefone" />
            </div>
            <input className={`${field} mt-4`} type="email" placeholder="E-mail" aria-label="E-mail" />
            <input className={`${field} mt-4`} type="text" placeholder="Assunto" aria-label="Assunto" />
            <textarea
              className={`${field} mt-4 min-h-[120px] resize-y`}
              placeholder="Sua mensagem"
              aria-label="Mensagem"
            />
            <label className="mt-4 flex items-start gap-3 text-[13px] text-white/70">
              <input type="checkbox" className="mt-1 h-4 w-4 accent-cyan" />
              Autorizo o contato e concordo com a Central de Privacidade da Rem
              Soft.
            </label>
            <button
              type="submit"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-white px-7 py-4 text-[16px] font-bold text-primary transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Fale com um especialista
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
