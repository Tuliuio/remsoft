import type { ComponentType, SVGProps } from "react";
import {
  IconLayers,
  IconCode,
  IconGlobe,
  IconGauge,
  IconChart,
  IconScale,
  IconStrategy,
  IconSpark,
} from "@/components/icons";

export type Service = {
  slug: string;
  title: string; // full title (detail pages)
  navTitle: string; // short title (menus / grid)
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  eyebrow: string;
  short: string; // grid / menu description
  heroTitle: string;
  heroSubtitle: string;
  benefits: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "integracao-flepic",
    title: "Flepic — Integração de Sistemas",
    navTitle: "Integração de Sistemas",
    icon: IconLayers,
    eyebrow: "Flepic",
    short:
      "Integre qualquer sistema, a qualquer hora, com metodologia ágil e comunicação transparente.",
    heroTitle: "Integre qualquer sistema, a qualquer hora",
    heroSubtitle:
      "Com o Flepic, conectamos suas ferramentas, ERPs e plataformas em um fluxo único de dados — sem retrabalho e sem ilhas de informação.",
    benefits: [
      { title: "Especialistas apaixonados", desc: "Um time que domina APIs, webhooks e middlewares para conectar o que parecia impossível." },
      { title: "Metodologia ágil", desc: "Entregas em ciclos curtos, com validação constante e ajustes rápidos de rota." },
      { title: "Tecnologia de ponta", desc: "Arquiteturas modernas e escaláveis, prontas para o volume do seu negócio." },
      { title: "Foco no cliente", desc: "Entendemos o seu processo antes de escrever a primeira linha de código." },
      { title: "Comunicação transparente", desc: "Você acompanha cada etapa, com previsibilidade e sem surpresas." },
      { title: "Dados unificados", desc: "Elimine a digitação dupla e tenha uma fonte única de verdade." },
    ],
    faq: [
      { q: "Vocês integram com qualquer sistema?", a: "Sim. Trabalhamos com integrações via API, webhooks, bancos de dados e arquivos, inclusive com sistemas legados sem documentação." },
      { q: "Quanto tempo leva uma integração?", a: "Depende da complexidade, mas a metodologia ágil permite entregas de valor já nas primeiras semanas." },
      { q: "E se meu sistema não tiver API?", a: "Avaliamos alternativas como RPA, leitura de banco ou camadas intermediárias para viabilizar a integração." },
    ],
  },
  {
    slug: "sistemas-web-apps",
    title: "Sistemas Web & Aplicativos de Celular",
    navTitle: "Sistemas Web & Apps",
    icon: IconCode,
    eyebrow: "Desenvolvimento",
    short:
      "Apps iOS, Android e multiplataforma, softwares web e integrações sob demanda.",
    heroTitle: "Software sob medida para o seu negócio",
    heroSubtitle:
      "Do aplicativo mobile ao sistema web completo — desenhamos, desenvolvemos e evoluímos produtos digitais que resolvem problemas reais.",
    benefits: [
      { title: "Apps iOS & Android", desc: "Nativos ou multiplataforma, com performance e experiência de primeira." },
      { title: "Sistemas web", desc: "Plataformas robustas, seguras e prontas para escalar com a sua operação." },
      { title: "Integrações", desc: "Conectamos o novo produto ao seu ecossistema de ferramentas atual." },
      { title: "UX orientada a resultado", desc: "Interfaces claras que aumentam a adoção e reduzem o suporte." },
      { title: "Código sustentável", desc: "Boas práticas e testes que facilitam a manutenção e a evolução." },
      { title: "Squad dedicado", desc: "Um time multidisciplinar focado no seu projeto do início ao fim." },
    ],
    faq: [
      { q: "Vocês desenvolvem para iOS e Android?", a: "Sim, tanto nativo quanto multiplataforma. Recomendamos a melhor abordagem conforme o seu caso." },
      { q: "Posso começar com um MVP?", a: "Com certeza. Ajudamos a priorizar o essencial para validar rápido e reduzir riscos." },
      { q: "Vocês dão suporte após o lançamento?", a: "Sim, oferecemos manutenção evolutiva e sustentação contínua do produto." },
    ],
  },
  {
    slug: "websites",
    title: "Websites",
    navTitle: "Websites",
    icon: IconGlobe,
    eyebrow: "Presença digital",
    short:
      "Presença digital que gera visibilidade, oportunidades de venda e disponibilidade 24h.",
    heroTitle: "Sua presença digital trabalhando por você",
    heroSubtitle:
      "Um site profissional é o seu melhor vendedor: disponível 24 horas, gerando visibilidade e oportunidades enquanto você foca no negócio.",
    benefits: [
      { title: "Visibilidade", desc: "Seja encontrado por quem procura o que você oferece." },
      { title: "Presença digital", desc: "Transmita credibilidade e profissionalismo em qualquer tela." },
      { title: "Fechar negócios", desc: "Canais de contato e CTAs pensados para converter visitas em clientes." },
      { title: "Oportunidade de vendas", desc: "Capture leads e nutra o relacionamento com o seu público." },
      { title: "Expandir negócios", desc: "Uma base sólida para crescer com marketing e novos canais." },
      { title: "Disponibilidade 24h", desc: "Seu negócio ativo mesmo fora do horário comercial." },
    ],
    faq: [
      { q: "O site será responsivo?", a: "Sim, todos os nossos sites são otimizados para celular, tablet e desktop." },
      { q: "Vocês cuidam do domínio e hospedagem?", a: "Podemos orientar e configurar toda a infraestrutura necessária para o seu site." },
      { q: "Consigo atualizar o conteúdo depois?", a: "Sim, entregamos com painel de gestão para você manter o site atualizado." },
    ],
  },
  {
    slug: "otimizacao-de-websites",
    title: "Otimização de Websites",
    navTitle: "Otimização de Websites",
    icon: IconGauge,
    eyebrow: "Performance",
    short:
      "Performance, conversão, SEO, segurança e proteção de dados para o seu site render mais.",
    heroTitle: "Seu site mais rápido, seguro e convertendo mais",
    heroSubtitle:
      "Analisamos e otimizamos performance, SEO e segurança para reduzir o tempo de carregamento e aumentar a taxa de conversão.",
    benefits: [
      { title: "Performance", desc: "Melhoria de Core Web Vitals e tempo de carregamento." },
      { title: "Conversão", desc: "Ajustes de UX e CTAs para transformar mais visitas em clientes." },
      { title: "SEO on-page", desc: "Estrutura e conteúdo otimizados para os buscadores." },
      { title: "Segurança", desc: "Boas práticas e proteção contra vulnerabilidades comuns." },
      { title: "Proteção de dados", desc: "Adequação às boas práticas de privacidade e LGPD." },
      { title: "Monitoramento", desc: "Acompanhamento contínuo de métricas e melhorias." },
    ],
    faq: [
      { q: "Vocês otimizam sites feitos por terceiros?", a: "Sim. Fazemos um diagnóstico e propomos um plano de otimização independente de quem construiu." },
      { q: "Quanto de ganho de performance é possível?", a: "Varia conforme o ponto de partida, mas costumamos reduzir significativamente o tempo de carregamento." },
      { q: "A otimização ajuda no Google?", a: "Sim, performance e SEO são fatores diretos de posicionamento nos buscadores." },
    ],
  },
  {
    slug: "business-intelligence",
    title: "Dashboard de Business Intelligence (BI)",
    navTitle: "Business Intelligence",
    icon: IconChart,
    eyebrow: "Power BI",
    short:
      "Visualização 360° e decisões orientadas a dados, com flexibilidade e suporte.",
    heroTitle: "Decisões orientadas a dados, em tempo real",
    heroSubtitle:
      "Transformamos seus dados em dashboards claros no Power BI, com uma visão 360° do negócio para decisões mais rápidas e seguras.",
    benefits: [
      { title: "Personalização", desc: "Painéis desenhados para os indicadores que importam para você." },
      { title: "Visualização 360°", desc: "Uma visão completa da operação em um só lugar." },
      { title: "Suporte", desc: "Acompanhamento para evoluir os painéis conforme o negócio muda." },
      { title: "Flexibilidade", desc: "Conexão com diversas fontes de dados e ferramentas." },
      { title: "Decisões por dados", desc: "Menos achismo, mais informação para agir." },
      { title: "Automação", desc: "Atualização automática dos dados, sem planilhas manuais." },
    ],
    faq: [
      { q: "Vocês usam qual ferramenta?", a: "Trabalhamos principalmente com Power BI, integrando às suas fontes de dados existentes." },
      { q: "De onde vêm os dados?", a: "Conectamos ERPs, planilhas, bancos de dados e APIs para consolidar tudo no painel." },
      { q: "Preciso de equipe técnica para usar?", a: "Não. Entregamos dashboards prontos e intuitivos, com treinamento de uso." },
    ],
  },
  {
    slug: "sistemas-advocacia",
    title: "Sistema para Escritórios de Advocacia",
    navTitle: "Sistemas para Advocacia",
    icon: IconScale,
    eyebrow: "Jurídico",
    short:
      "Automação e customização que elevam a eficiência e a produtividade do escritório.",
    heroTitle: "Mais produtividade para o seu escritório",
    heroSubtitle:
      "Automatize prazos, processos e rotinas jurídicas com um sistema sob medida que libera tempo da sua equipe para o que importa.",
    benefits: [
      { title: "Automação", desc: "Reduza tarefas manuais e o risco de perder prazos importantes." },
      { title: "Eficiência", desc: "Fluxos organizados que aceleram o dia a dia do escritório." },
      { title: "Customização", desc: "Um sistema que se adapta à sua área de atuação e processos." },
      { title: "Produtividade", desc: "Sua equipe focada em casos, não em burocracia." },
      { title: "Organização", desc: "Documentos, processos e clientes centralizados e acessíveis." },
      { title: "Segurança", desc: "Controle de acesso e proteção das informações sensíveis." },
    ],
    faq: [
      { q: "O sistema é adaptável ao meu escritório?", a: "Sim, desenvolvemos sob medida para a realidade e os fluxos do seu escritório." },
      { q: "Integra com sistemas de tribunais?", a: "Avaliamos integrações e automações conforme as fontes disponíveis." },
      { q: "Meus dados ficam seguros?", a: "Adotamos boas práticas de segurança e controle de acesso às informações." },
    ],
  },
  {
    slug: "websites-medicos",
    title: "Websites para Médicos",
    navTitle: "Websites para Médicos",
    icon: IconStrategy,
    eyebrow: "Saúde",
    short:
      "Agendamento online e mais destaque para converter visitas em consultas.",
    heroTitle: "Mais destaque e mais agendamentos",
    heroSubtitle:
      "Sites profissionais para médicos e clínicas, com agendamento online que transforma visitantes em pacientes.",
    benefits: [
      { title: "Agendamento online", desc: "Pacientes marcam consultas a qualquer hora, direto pelo site." },
      { title: "Destaque", desc: "Uma presença que transmite confiança e autoridade." },
      { title: "Mais agendamentos", desc: "Menos fricção no contato significa mais consultas." },
      { title: "Presença profissional", desc: "Imagem à altura do seu atendimento." },
      { title: "Otimizado para mobile", desc: "Experiência impecável no celular, onde a maioria acessa." },
      { title: "Conformidade", desc: "Boas práticas de privacidade para dados de pacientes." },
    ],
    faq: [
      { q: "O agendamento integra com minha agenda?", a: "Sim, podemos integrar com ferramentas de agenda e confirmação por mensagem." },
      { q: "Atende às normas do CFM?", a: "Sim, construímos respeitando as diretrizes de publicidade médica." },
      { q: "Serve para clínicas com vários profissionais?", a: "Sim, o site pode contemplar múltiplos profissionais e especialidades." },
    ],
  },
  {
    slug: "inteligencia-artificial",
    title: "Ferramentas de Inteligência Artificial",
    navTitle: "Ferramentas de IA",
    icon: IconSpark,
    eyebrow: "Inteligência Artificial",
    short:
      "Curadoria e implementação de inteligência artificial aplicada ao seu negócio.",
    heroTitle: "Inteligência artificial aplicada ao seu negócio",
    heroSubtitle:
      "Da curadoria das melhores ferramentas à implementação sob medida, ajudamos você a colocar a IA para trabalhar de verdade.",
    benefits: [
      { title: "Curadoria", desc: "Selecionamos as ferramentas certas para o seu objetivo." },
      { title: "Implementação", desc: "Integração de IA aos seus processos e produtos." },
      { title: "Automação inteligente", desc: "Reduza tarefas repetitivas com fluxos assistidos por IA." },
      { title: "Atendimento", desc: "Assistentes e chatbots que escalam o seu suporte." },
      { title: "Geração de conteúdo", desc: "Acelere marketing e comunicação com IA generativa." },
      { title: "Análise de dados", desc: "Extraia insights e previsões dos seus dados." },
    ],
    faq: [
      { q: "IA serve para o meu negócio?", a: "Praticamente todo negócio tem processos que se beneficiam de IA. Ajudamos a identificar onde começar." },
      { q: "Preciso trocar meus sistemas?", a: "Não necessariamente. Integramos a IA às ferramentas que você já usa." },
      { q: "Como garantem a segurança dos dados?", a: "Definimos políticas de uso e privacidade adequadas a cada implementação." },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
