import {
  Logo,
  IconMail,
  IconPhone,
  IconPin,
  IconLinkedin,
  IconInstagram,
  IconFacebook,
  ArrowRight,
} from "./icons";

const nav = [
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Serviços", href: "/servicos" },
  { label: "Cases", href: "/cases" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

const footerServices = [
  { label: "Design Sprint", href: "/design-sprint" },
  { label: "Integração de Sistemas", href: "/servicos/integracao-flepic" },
  { label: "Sistemas Web & Apps", href: "/servicos/sistemas-web-apps" },
  { label: "Websites", href: "/servicos/websites" },
  { label: "Business Intelligence", href: "/servicos/business-intelligence" },
  { label: "Ferramentas de IA", href: "/servicos/inteligencia-artificial" },
];

const socials = [
  { icon: IconLinkedin, href: "https://linkedin.com/company/rem-soft-sistemas", label: "LinkedIn" },
  { icon: IconInstagram, href: "https://instagram.com/remsoftsistemas", label: "Instagram" },
  { icon: IconFacebook, href: "https://facebook.com/remsoftbr", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="mt-8 bg-ink text-white/70">
      {/* Newsletter strip */}
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-6 border-b border-white/10 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-sans text-[22px] font-bold text-white">
              Novidades em tecnologia, em primeira mão
            </h3>
            <p className="mt-1 text-[15px] text-white/60">
              Receba conteúdos e insights direto no seu e-mail.
            </p>
          </div>
          <form action="#" className="flex w-full max-w-md gap-3">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              aria-label="E-mail para newsletter"
              className="w-full rounded-[var(--radius-pill)] border border-white/15 bg-white/5 px-5 py-3 text-[15px] text-white placeholder:text-white/50 outline-none focus:border-cyan"
            />
            <button
              type="submit"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-[var(--radius-pill)] brand-gradient px-6 py-3 text-[15px] font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
            >
              Assinar
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] md:px-8">
        <div>
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/60">
            Software house 100% remota há mais de 12 anos. Impulsionamos negócios
            por meio da tecnologia, da estratégia ao desenvolvimento.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-white transition-colors hover:bg-primary"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[15px] font-bold text-white">Navegação</h4>
          <ul className="mt-4 space-y-3">
            {nav.map((n) => (
              <li key={n.label}>
                <a href={n.href} className="text-[15px] transition-colors duration-200 hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[15px] font-bold text-white">Serviços</h4>
          <ul className="mt-4 space-y-3">
            {footerServices.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="text-[15px] transition-colors duration-200 hover:text-white">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[15px] font-bold text-white">Contato</h4>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center gap-3">
              <IconMail className="shrink-0 text-cyan" />
              <a href="mailto:contato@remsoft.com.br" className="text-[15px] transition-colors duration-200 hover:text-white">
                contato@remsoft.com.br
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IconPhone className="shrink-0 text-cyan" />
              <a href="tel:+554840422634" className="text-[15px] transition-colors duration-200 hover:text-white">
                +55 (48) 4042-2634
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IconPin className="shrink-0 text-cyan" />
              <span className="text-[15px]">100% remoto — todo o Brasil</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-[13px] text-white/50 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} Rem Soft Sistemas · CNPJ
            10.232.996/0001-14
          </p>
          <div className="flex gap-6">
            <a href="/central-de-privacidade" className="hover:text-white">
              Central de Privacidade
            </a>
            <a href="/central-de-privacidade" className="hover:text-white">
              Políticas de Candidato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
