import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contato — Rem Soft Sistemas",
  description:
    "Fale com um especialista da Rem Soft. Somos 100% remotos e atendemos todo o Brasil. contato@remsoft.com.br · (48) 4042-2634.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre"
        titleMuted="o seu projeto."
        subtitle="Somos 100% remotos e atendemos todo o Brasil. Preencha o formulário ou fale direto pelos nossos canais — um especialista retorna rapidinho."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Contato" }]}
      />
      <Contact />
    </>
  );
}
