import { Sparkles, Clapperboard, CircleDashed, GalleryHorizontal, Lightbulb, type LucideIcon } from "lucide-react";

export type ToolKey = "gerador" | "reels" | "stories" | "carrossel" | "ideias" | "imagens";

export interface ToolConfig {
  key: ToolKey;
  to: "/app/gerador" | "/app/reels" | "/app/stories" | "/app/carrossel" | "/app/ideias" | "/app/imagens";
  name: string;
  description: string;
  icon: LucideIcon;
  kind?: "text" | "image";
  /** Blocos de resultado que essa ferramenta vai preencher quando a IA for conectada. */
  outputs: { id: string; label: string; hint: string }[];
}

const postOutputs = [
  { id: "titulos", label: "Títulos", hint: "Sugestões de títulos chamativos" },
  { id: "legenda", label: "Legenda", hint: "Texto completo da publicação" },
  { id: "hashtags", label: "Hashtags", hint: "Hashtags relevantes para o nicho" },
  { id: "cta", label: "Chamadas para ação", hint: "CTAs para engajar o público" },
  { id: "comentario", label: "Comentário fixado", hint: "Comentário para fixar no post" },
];

export const TOOLS: ToolConfig[] = [
  { key: "gerador", to: "/app/gerador", name: "Gerador de publicações", description: "Títulos, legenda, hashtags, CTA e comentário fixado.", icon: Sparkles, outputs: postOutputs },
  {
    key: "reels", to: "/app/reels", name: "Roteiro de Reels", description: "Gancho, roteiro cena a cena e legenda.", icon: Clapperboard,
    outputs: [
      { id: "gancho", label: "Gancho inicial", hint: "Primeiros 3 segundos" },
      { id: "roteiro", label: "Roteiro", hint: "Cenas, falas e textos na tela" },
      ...postOutputs.slice(1),
    ],
  },
  {
    key: "stories", to: "/app/stories", name: "Sequência de Stories", description: "Sequência de telas com enquetes e caixinhas.", icon: CircleDashed,
    outputs: [
      { id: "sequencia", label: "Sequência de telas", hint: "Texto de cada story" },
      { id: "interacoes", label: "Interações", hint: "Enquetes, perguntas e quizzes" },
      { id: "cta", label: "Chamadas para ação", hint: "Fechamento da sequência" },
    ],
  },
  {
    key: "carrossel", to: "/app/carrossel", name: "Carrossel", description: "Texto slide a slide com capa e fechamento.", icon: GalleryHorizontal,
    outputs: [
      { id: "capa", label: "Capa", hint: "Título do primeiro slide" },
      { id: "slides", label: "Slides", hint: "Conteúdo de cada slide" },
      ...postOutputs.slice(1),
    ],
  },
  {
    key: "ideias", to: "/app/ideias", name: "Ideias de publicações", description: "Pautas e calendário de ideias para o seu nicho.", icon: Lightbulb,
    outputs: [
      { id: "ideias", label: "Ideias", hint: "Lista de pautas sugeridas" },
      { id: "formatos", label: "Formato indicado", hint: "Reels, carrossel, stories ou post" },
    ],
  },
  {
    key: "imagens", to: "/app/imagens", name: "Gerador de imagens", description: "Crie visuais para capa, conceito e anúncios com IA.", icon: Sparkles,
    kind: "image",
    outputs: [
      { id: "imagem", label: "Imagem gerada", hint: "Visual final em alta qualidade" },
    ],
  },
];

export const getTool = (key: ToolKey) => TOOLS.find((t) => t.key === key)!;

export const CONTENT_TYPES = ["Post de feed", "Reels", "Stories", "Carrossel"];
export const STYLES = ["Profissional", "Descontraído", "Inspirador", "Educativo", "Persuasivo", "Divertido"];
export const GOALS = ["Engajamento", "Vendas", "Autoridade", "Alcance", "Educar o público", "Gerar leads"];

export const PLANS = [
  { name: "Gratuito", price: "R$ 0", period: "/mês", generations: "10 gerações por mês", features: ["Gerador de publicações", "Histórico de 7 dias", "Suporte por e-mail"], highlight: false },
  { name: "Pro", price: "R$ 49", period: "/mês", generations: "300 gerações por mês", features: ["Todas as ferramentas", "Reels, Stories e Carrossel", "Histórico ilimitado", "Suporte prioritário"], highlight: true },
  { name: "Business", price: "R$ 129", period: "/mês", generations: "Gerações ilimitadas", features: ["Tudo do Pro", "Múltiplas marcas", "Até 5 usuários", "Atendimento dedicado"], highlight: false },
];
