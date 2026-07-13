import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Central de Privacidade — Rem Soft Sistemas",
  description:
    "Como a Rem Soft trata seus dados pessoais, seus direitos como titular e nossos canais de privacidade e denúncias.",
};

const sections = [
  {
    title: "Compromisso com a sua privacidade",
    body: "A Rem Soft Sistemas respeita a sua privacidade e trata dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018). Coletamos apenas os dados necessários para prestar nossos serviços e nos comunicar com você.",
  },
  {
    title: "Quais dados coletamos",
    body: "Podemos coletar dados de contato fornecidos por você em nossos formulários (nome, e-mail, telefone e mensagem), além de dados de navegação para melhorar a experiência no site. Não vendemos seus dados a terceiros.",
  },
  {
    title: "Seus direitos como titular",
    body: "Você pode solicitar a qualquer momento a confirmação, o acesso, a correção, a portabilidade ou a exclusão dos seus dados, bem como revogar consentimentos. Basta entrar em contato pelos nossos canais oficiais.",
  },
  {
    title: "Canal de denúncias",
    body: "Mantemos um canal externo e independente para o registro de denúncias, disponível em portaldenuncias.com.br. As manifestações podem ser feitas de forma anônima e são tratadas com confidencialidade.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Central de Privacidade"
        title="Transparência com"
        titleMuted="os seus dados."
        subtitle="Entenda como tratamos seus dados pessoais, quais são os seus direitos e como falar com a gente sobre privacidade."
        breadcrumb={[
          { label: "Início", href: "/" },
          { label: "Central de Privacidade" },
        ]}
      />

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-sans text-[22px] font-bold text-ink">
                {s.title}
              </h2>
              <p className="mt-3 text-[16px] leading-relaxed text-body">
                {s.body}
              </p>
            </div>
          ))}

          <div className="rounded-3xl border border-line bg-soft p-7">
            <h2 className="text-[18px] font-bold text-ink">
              Fale com nosso time de privacidade
            </h2>
            <p className="mt-2 text-[15px] text-body">
              Para exercer seus direitos ou tirar dúvidas sobre o tratamento de
              dados, escreva para{" "}
              <a
                href="mailto:contato@remsoft.com.br"
                className="font-semibold text-primary hover:underline"
              >
                contato@remsoft.com.br
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
