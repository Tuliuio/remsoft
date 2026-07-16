import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import CtaBand from "@/components/CtaBand";
import {
  ArrowRight,
  Check,
  IconX,
  IconBlueprint,
  IconDoc,
  IconDesign,
  IconMonitor,
  IconClock,
  IconShield,
  IconExport,
  IconCoins,
  IconBadge,
  IconGauge,
  IconChart,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Design Sprint — A planta do seu sistema | Rem Soft Sistemas",
  description:
    "O Design Sprint é a etapa 1 do seu projeto de software: documentação completa, Figma das telas e protótipo navegável em 3 semanas. Enxergue o sistema e receba um orçamento preciso antes de desenvolver.",
};

const deliverables = [
  {
    icon: IconDoc,
    title: "Documentação completa",
    desc: "Cada módulo do sistema descrito em detalhes: regras, fluxos e funcionalidades. A fonte da verdade do seu projeto.",
  },
  {
    icon: IconDesign,
    title: "Figma estrutural das telas",
    desc: "O desenho de todas as telas, com interface, estrutura e identidade visual do seu produto — cores, tipografia e a cara do sistema.",
  },
  {
    icon: IconMonitor,
    title: "Protótipo navegável (HTML)",
    desc: "Um protótipo que você abre e navega, para enxergar exatamente como o sistema vai funcionar antes de escrever a primeira linha de código.",
  },
];

const weeks = [
  {
    n: "01",
    tag: "Semana 1 · Imersão",
    title: "Coletamos cada detalhe, módulo a módulo",
    desc: "A semana mais importante. Reunimos você e as pessoas-chave da sua equipe — financeiro, operacional, o que for necessário — para mapear tudo que o sistema precisa ter. Suas planilhas de hoje viram o nosso ponto de partida. Tudo é gravado e documentado.",
  },
  {
    n: "02",
    tag: "Semana 2 · Construção",
    title: "Montamos a documentação e as telas",
    desc: "Com o material coletado, começamos a estruturar a documentação e desenhar as telas. Dúvidas são resolvidas rápido no grupo de WhatsApp, e uma reunião extra acontece se for preciso.",
  },
  {
    n: "03",
    tag: "Semana 3 · Telas e entrega",
    title: "Finalizamos e você valida",
    desc: "O material ganha corpo, as telas são finalizadas e entregamos tudo para a sua validação. Está exatamente como conversamos? Aprovou, o material é seu — todos os arquivos, documentados.",
  },
];

const benefits = [
  {
    icon: IconGauge,
    title: "Orçamento preciso",
    desc: "Você para de estimar “no olho”. Sai daqui com um número real e coerente para desenvolver o sistema.",
  },
  {
    icon: IconShield,
    title: "Menos risco, menos retrabalho",
    desc: "Erros que custariam caro no desenvolvimento são resolvidos ainda no papel, antes de qualquer linha de código.",
  },
  {
    icon: IconExport,
    title: "O material é 100% seu",
    desc: "Leve a documentação com você. Dá para cotar com outras empresas com precisão — ou seguir com a gente.",
  },
  {
    icon: IconCoins,
    title: "Investimento enxuto",
    desc: "Pela nossa experiência, o Design Sprint custa de 3% a, no máximo, 10% do valor final do projeto.",
  },
  {
    icon: IconChart,
    title: "Pronto para investidores",
    desc: "Um material sólido e profissional para o seu pitch — muito mais forte do que apresentar só uma ideia.",
  },
  {
    icon: IconBadge,
    title: "Assinado pela Rem Soft",
    desc: "Não é qualquer material: é um projeto de uma empresa especializada, com mais de 12 anos de estrada.",
  },
];

const audience = [
  "Precisa de um sistema sob medida e não encontrou nada pronto que resolva 100% do seu problema.",
  "Quer transformar planilhas e processos manuais em um sistema de verdade.",
  "Está construindo um produto para usar no seu negócio — e depois vender ou licenciar.",
  "Quer segurança e um orçamento realista antes de investir no desenvolvimento.",
  "Busca um material sólido para apresentar a investidores.",
];

const faq = [
  {
    q: "Estou com pressa. Não posso ir direto para o desenvolvimento?",
    a: "Pode — mas qual é o custo do erro da pressa? Começar a desenvolver sem um plano detalhado quase sempre gera retrabalho, que custa muito mais caro (em dinheiro e em tempo) do que as 3 semanas do Design Sprint.",
  },
  {
    q: "Quanto custa o Design Sprint?",
    a: "Depende do tamanho do projeto, mas, pela nossa experiência, fica entre 3% e no máximo 10% do valor final do desenvolvimento. Fale com um especialista para uma estimativa do seu caso.",
  },
  {
    q: "O que exatamente eu recebo no final?",
    a: "A documentação completa do sistema, o Figma estrutural com o desenho das telas e um protótipo navegável em HTML. Tudo é seu, com todos os arquivos entregues e documentados.",
  },
  {
    q: "Posso usar o material para cotar com outras empresas?",
    a: "Sim. A documentação é sua e serve para qualquer empresa entender exatamente o que você quer e te dar um orçamento coerente. É essa a nossa confiança na metodologia.",
  },
  {
    q: "Quanto tempo leva?",
    a: "Cerca de 3 semanas (15 dias úteis). A primeira semana é a mais intensa, com reuniões de imersão distribuídas de segunda a sexta.",
  },
  {
    q: "Preciso ter meus processos organizados antes de começar?",
    a: "Não precisa estar tudo pronto. Suas planilhas atuais ajudam a dar um norte, mas somos nós que conduzimos a coleta módulo a módulo com o seu time.",
  },
  {
    q: "Sou obrigado a desenvolver com a Rem Soft depois?",
    a: "Não. Você sai com o material em mãos e a decisão é sua. Na prática, quem faz o Design Sprint conosco segue com a gente para o desenvolvimento.",
  },
];

export default function DesignSprintPage() {
  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="dot-grid pointer-events-none absolute inset-0" />
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

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-24">
          {/* Left */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-primary/15 bg-primary-soft px-4 py-1.5 text-[13px] font-semibold text-primary">
              <span className="flex h-4 w-4 items-center justify-center">
                <IconBlueprint className="h-4 w-4" />
              </span>
              Etapa 1 · a porta de entrada do seu sistema
            </span>

            <h1 className="mt-6 font-sans text-[clamp(2.3rem,5.2vw,3.7rem)] font-extrabold leading-[1.03] tracking-tight text-primary-dark">
              Antes de construir o sistema,
              <br />
              desenhamos a planta.
              <br />
              <span className="text-muted">Com precisão, sem retrabalho.</span>
            </h1>

            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-body">
              O <strong className="font-semibold text-ink">Design Sprint</strong> é a
              etapa 1 do seu projeto: documentação completa, o Figma das telas e um
              protótipo navegável. Você enxerga exatamente como o sistema vai
              funcionar — e recebe um orçamento preciso para desenvolvê-lo — antes de
              investir pesado.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contato"
                className="group inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-primary px-7 py-4 text-[16px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(3,93,187,0.7)] transition-all duration-200 hover:bg-primary-dark hover:shadow-[0_18px_36px_-10px_rgba(3,93,187,0.8)] active:scale-[0.97]"
              >
                Fale com o nosso especialista
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#como-funciona"
                className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-line bg-white px-7 py-4 text-[16px] font-semibold text-ink transition-all duration-200 hover:border-primary/40 hover:text-primary active:scale-[0.97]"
              >
                Como funciona
              </Link>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-[14px] font-medium text-subtle">
              {["3 semanas", "Documentação + Figma + HTML navegável", "O material é seu"].map(
                (chip) => (
                  <li key={chip} className="flex items-center gap-2">
                    <span className="text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {chip}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Right — blueprint mock */}
          <div className="animate-fade-up [animation-delay:120ms]">
            <div className="relative mx-auto w-full max-w-md">
              {/* main window */}
              <div className="overflow-hidden rounded-[26px] border border-line bg-white shadow-[var(--shadow-float)]">
                <div className="flex items-center gap-2 border-b border-line bg-soft px-5 py-3.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-line" />
                  <span className="h-2.5 w-2.5 rounded-full bg-line" />
                  <span className="h-2.5 w-2.5 rounded-full bg-line" />
                  <span className="ml-3 text-[12px] font-medium text-subtle">
                    seu-sistema · protótipo navegável
                  </span>
                </div>
                <div className="grid grid-cols-[64px_1fr] gap-4 p-5">
                  {/* sidebar */}
                  <div className="space-y-2.5">
                    <span className="block h-8 rounded-xl brand-gradient" />
                    <span className="block h-3 rounded-full bg-soft" />
                    <span className="block h-3 w-5/6 rounded-full bg-soft" />
                    <span className="block h-3 w-4/6 rounded-full bg-soft" />
                    <span className="block h-3 w-5/6 rounded-full bg-soft" />
                  </div>
                  {/* content */}
                  <div className="space-y-3">
                    <span className="block h-4 w-2/5 rounded-full bg-primary-soft" />
                    <div className="grid grid-cols-3 gap-2">
                      <span className="block h-12 rounded-xl border border-line bg-soft" />
                      <span className="block h-12 rounded-xl border border-line bg-soft" />
                      <span className="block h-12 rounded-xl border border-line bg-soft" />
                    </div>
                    <div className="flex items-end gap-2 rounded-xl border border-line bg-soft p-3">
                      <span className="block h-8 w-full rounded bg-primary/20" />
                      <span className="block h-12 w-full rounded bg-primary/30" />
                      <span className="block h-6 w-full rounded bg-cyan/40" />
                      <span className="block h-14 w-full rounded brand-gradient" />
                      <span className="block h-9 w-full rounded bg-primary/25" />
                    </div>
                    <span className="block h-3 rounded-full bg-soft" />
                    <span className="block h-3 w-4/5 rounded-full bg-soft" />
                  </div>
                </div>
              </div>

              {/* floating badge — top */}
              <div className="absolute -right-3 -top-4 hidden rounded-2xl border border-line bg-white px-4 py-2.5 shadow-[var(--shadow-card)] sm:block">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg brand-gradient text-white">
                    <IconClock className="h-4 w-4" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-[11px] text-subtle">Do começo ao fim</p>
                    <p className="text-[13px] font-bold text-ink">3 semanas</p>
                  </div>
                </div>
              </div>

              {/* floating badge — bottom */}
              <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-line bg-white px-4 py-3 shadow-[var(--shadow-card)] sm:block">
                <p className="text-[11px] text-subtle">Você recebe</p>
                <div className="mt-1 flex items-center gap-2 text-[13px] font-bold text-ink">
                  <IconDoc className="h-4 w-4 text-primary" />
                  <IconDesign className="h-4 w-4 text-primary" />
                  <IconMonitor className="h-4 w-4 text-primary" />
                  <span className="ml-0.5">3 entregáveis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Problem                                                          */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-3xl px-5 pt-16 text-center md:px-8 md:pt-24">
        <Reveal>
          <p className="label-eyebrow text-[13px] text-primary">O ponto de partida</p>
          <h2 className="mt-3 font-sans text-[clamp(1.8rem,4vw,2.6rem)] font-bold tracking-tight text-ink">
            Nenhum sistema pronto faz
            <br className="hidden sm:block" /> exatamente o que você precisa
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-body">
            Você já procurou no mercado. Encontrou ferramentas que atendem 40%, 60%
            do que você quer — e nunca 100%. Pagar todo mês por algo que resolve pela
            metade não faz sentido. O caminho é um sistema sob medida. Mas começar a
            desenvolver sem um plano detalhado é como subir uma casa sem planta: o
            erro é quase certo, e ele custa caro.
          </p>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* House analogy                                                    */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="label-eyebrow text-[13px] text-primary">
            A analogia da construção
          </p>
          <h2 className="mt-3 font-sans text-[clamp(1.8rem,4vw,2.6rem)] font-bold tracking-tight text-ink">
            Você contrataria um pedreiro ou uma construtora?
          </h2>
        </Reveal>

        <Reveal stagger className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
          {/* Without */}
          <div className="rounded-3xl border border-line bg-soft/60 p-7">
            <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-subtle shadow-[var(--shadow-card)]">
              <IconX className="h-5 w-5" />
            </span>
            <h3 className="text-[18px] font-bold text-ink">
              Direto para a obra, sem planta
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-body">
              Você pede um orçamento “no olho”, começa a construção e, durante a obra,
              os erros aparecem — de projeto, de estrutura. Perde dinheiro em material,
              perde em mão de obra e, principalmente, perde tempo.
            </p>
            <ul className="mt-5 space-y-2.5 text-[14px] text-subtle">
              {["Orçamento impreciso", "Retrabalho quase certo", "Dinheiro e tempo desperdiçados"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2.5">
                    <IconX className="h-4 w-4 shrink-0 text-muted" />
                    {t}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* With */}
          <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-white p-7 shadow-[var(--shadow-card)]">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan/10 blur-2xl"
            />
            <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl brand-gradient text-white">
              <IconBlueprint className="h-5 w-5" />
            </span>
            <h3 className="text-[18px] font-bold text-ink">
              A construtora especializada
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-body">
              Primeiro o engenheiro entende a sua ideia e a coloca em uma planta. Você
              valida cada detalhe — estrutura, elétrica, hidráulica — antes de qualquer
              tijolo. A chance de erro despenca e o orçamento fica preciso.
            </p>
            <ul className="mt-5 space-y-2.5 text-[14px] text-body">
              {["Cada detalhe validado antes de começar", "Orçamento preciso e coerente", "Muito menos risco de erro"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2.5">
                    <span className="text-primary">
                      <Check className="h-4 w-4 shrink-0" />
                    </span>
                    {t}
                  </li>
                )
              )}
            </ul>
          </div>
        </Reveal>

        <Reveal className="mt-8 text-center">
          <p className="text-[18px] font-semibold text-ink">
            O Design Sprint é{" "}
            <span className="text-brand-gradient">a planta do seu software.</span>
          </p>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Cost-of-error quote                                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[32px] px-6 py-14 text-center md:px-16"
            style={{
              backgroundImage:
                "linear-gradient(120deg, var(--color-primary-dark), var(--color-primary) 55%, var(--color-cyan))",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl"
            />
            <p className="relative mx-auto max-w-3xl font-sans text-[clamp(1.5rem,3.4vw,2.3rem)] font-bold leading-tight tracking-tight text-white">
              “Qual é o custo do seu erro? E o custo da sua pressa?”
            </p>
            <p className="relative mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-white/80">
              O Design Sprint é um pequeno investimento — de 3% a 10% do projeto —
              para você não pôr dinheiro fora num desenvolvimento mal planejado.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Deliverables                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="label-eyebrow text-[13px] text-primary">O que você recebe</p>
          <h2 className="mt-3 font-sans text-[clamp(1.8rem,4vw,2.6rem)] font-bold tracking-tight text-ink">
            Um projeto que você vê, navega e leva com você
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-body">
            Ao final das três semanas, você tem em mãos tudo que precisa para enxergar
            o sistema — e para desenvolvê-lo com segurança.
          </p>
        </Reveal>

        <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {deliverables.map((d) => (
            <div
              key={d.title}
              className="rounded-3xl border border-line bg-white p-7 transition-all duration-300 [transition-timing-function:var(--ease-out)] hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                <d.icon />
              </span>
              <h3 className="text-[17px] font-bold text-ink">{d.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-body">{d.desc}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* How it works — timeline                                          */}
      {/* ---------------------------------------------------------------- */}
      <section
        id="como-funciona"
        className="border-y border-line bg-soft/60 py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="label-eyebrow text-[13px] text-primary">Como funciona</p>
            <h2 className="mt-3 font-sans text-[clamp(1.8rem,4vw,2.6rem)] font-bold tracking-tight text-ink">
              Começo, meio e fim em 3 semanas
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-body">
              Cerca de 15 dias úteis, com um time dedicado ao seu lado — e tudo gravado
              e documentado.
            </p>
          </Reveal>

          <Reveal stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {weeks.map((w) => (
              <div
                key={w.n}
                className="relative rounded-3xl border border-line bg-white p-7 shadow-[var(--shadow-card)]"
              >
                <span className="font-sans text-[38px] font-extrabold leading-none text-primary/15">
                  {w.n}
                </span>
                <p className="mt-4 label-eyebrow text-[12px] text-primary">{w.tag}</p>
                <h3 className="mt-2 text-[18px] font-bold text-ink">{w.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-body">{w.desc}</p>
              </div>
            ))}
          </Reveal>

          {/* handoff to phase 2 */}
          <Reveal className="mt-6">
            <div className="flex flex-col items-start gap-6 rounded-3xl border border-primary/20 bg-white p-7 shadow-[var(--shadow-card)] md:flex-row md:items-center md:justify-between md:p-9">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl brand-gradient text-white">
                  <ArrowRight className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[18px] font-bold text-ink">
                    Depois da entrega: o orçamento da etapa 2
                  </h3>
                  <p className="mt-1 max-w-2xl text-[15px] leading-relaxed text-body">
                    Com o Design Sprint em mãos, o time estima as horas de
                    desenvolvimento e você recebe uma proposta comercial precisa para
                    construir o sistema.
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-2 text-[13px] font-semibold">
                <span className="rounded-full bg-primary-soft px-3 py-1.5 text-primary">
                  Etapa 1 · Design Sprint
                </span>
                <ArrowRight className="h-4 w-4 text-subtle" />
                <span className="rounded-full border border-line px-3 py-1.5 text-subtle">
                  Etapa 2 · Desenvolvimento
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Benefits                                                         */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="label-eyebrow text-[13px] text-primary">Por que vale a pena</p>
          <h2 className="mt-3 font-sans text-[clamp(1.8rem,4vw,2.6rem)] font-bold tracking-tight text-ink">
            Um pequeno investimento que evita um grande erro
          </h2>
        </Reveal>

        <Reveal stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-3xl border border-line bg-white p-6 transition-shadow hover:shadow-[var(--shadow-card)]"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <b.icon />
              </span>
              <h3 className="text-[17px] font-bold text-ink">{b.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-body">{b.desc}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Who it's for                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-5 pb-4 md:px-8">
        <div className="grid items-center gap-10 rounded-[32px] border border-line bg-soft/60 p-8 md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <Reveal>
            <p className="label-eyebrow text-[13px] text-primary">Para quem é</p>
            <h2 className="mt-3 font-sans text-[clamp(1.7rem,3.6vw,2.4rem)] font-bold tracking-tight text-ink">
              O Design Sprint é para você que…
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-body">
              É a etapa de entrada ideal para tirar uma ideia do papel com segurança —
              seja para uso interno, seja para virar um produto.
            </p>
          </Reveal>

          <Reveal stagger className="space-y-3">
            {audience.map((a) => (
              <div
                key={a}
                className="flex items-start gap-3.5 rounded-2xl border border-line bg-white p-4"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <p className="text-[15px] leading-relaxed text-body">{a}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* FAQ + CTA                                                        */}
      {/* ---------------------------------------------------------------- */}
      <FAQ items={faq} title="Perguntas frequentes sobre o Design Sprint" />
      <CtaBand
        title="Vamos desenhar a planta do seu sistema?"
        subtitle="Comece pela etapa 1. Fale com um especialista e entenda como o Design Sprint se aplica ao seu projeto — sem compromisso."
      />
    </>
  );
}
