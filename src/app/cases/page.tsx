import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CasesGallery from "@/components/CasesGallery";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Cases — Rem Soft Sistemas",
  description:
    "Projetos entregues pela Rem Soft: sistemas web, websites e aplicativos para diversos nichos de mercado.",
};

export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Cases"
        title="Projetos que geraram"
        titleMuted="resultado de verdade."
        subtitle="Mais de 300 projetos entregues para 160 clientes em nichos como saúde, financeiro, construção, educação e jurídico."
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Cases" }]}
      />
      <CasesGallery />
      <CtaBand
        title="Seu projeto pode ser o próximo case"
        subtitle="Conte sua ideia e vamos transformá-la em um produto digital de sucesso."
      />
    </>
  );
}
