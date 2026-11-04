import React, { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CONTENT_TYPES, GOALS, STYLES, TOOLS, type ToolConfig } from "@/lib/tools";
import { generateGeminiImage, generateGeminiText } from "@/lib/gemini";

type GeneratorWorkspaceProps = {
  tool?: ToolConfig;
  defaultType?: string;
};

function resolveTool(tool?: ToolConfig) {
  if (tool) return tool;

  if (typeof window !== "undefined") {
    const pathname = window.location.pathname;
    return TOOLS.find((candidate) => candidate.to === pathname) ?? TOOLS[0];
  }

  return TOOLS[0];
}

export function GeneratorWorkspace({ tool, defaultType }: GeneratorWorkspaceProps = {}) {
  const currentTool = resolveTool(tool);

  if (!currentTool) {
    return <div className="p-6">Ferramenta indisponível.</div>;
  }

  const isImageTool = currentTool.kind === "image";
  const defaultContentType =
    defaultType && CONTENT_TYPES.includes(defaultType)
      ? defaultType
      : currentTool.key === "reels"
        ? "Reels"
        : currentTool.key === "stories"
          ? "Stories"
          : currentTool.key === "carrossel"
            ? "Carrossel"
            : CONTENT_TYPES[0] || "Post de feed";

  const generateTextFn = useServerFn(generateGeminiText);
  const generateImageFn = useServerFn(generateGeminiImage);

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    assunto: "",
    tipo: defaultContentType,
    estilo: STYLES[0] || "Profissional",
    publico: "",
    objetivo: GOALS[0] || "Engajamento",
  });
  const [results, setResults] = useState<Record<string, string>>({});

  const handleGenerate = async () => {
    setLoading(true);
    try {
      if (isImageTool) {
        const prompt = `Crie uma imagem profissional para a ferramenta "${currentTool.name}" com estilo ${form.estilo}. Contexto: ${form.assunto || "conceito visual para campanha digital"}. Público: ${form.publico || "Geral"}. Objetivo: ${form.objetivo}. Faça a imagem com composição visual forte, foco editorial, boa iluminação, paleta consistente e estética moderna.`;

        const imageResult = await generateImageFn({ data: { prompt } });
        const imageOutputId = currentTool.outputs[0]?.id || "imagem";

        const newResults: Record<string, string> = {};
        if (imageResult.imageDataUri) {
          newResults[imageOutputId] = imageResult.imageDataUri;
        } else {
          newResults[imageOutputId] = imageResult.text || "Imagem não gerada. Tente novamente.";
        }

        setResults(newResults);
        return;
      }

      const outputsList = currentTool.outputs.map((o) => `- ${o.label} (ID: ${o.id}): ${o.hint}`).join("\n");

      const aiPrompt = `Você é um produtor de conteúdos digital expert e estrategista do canal Revista Styllus.
Crie conteúdo profissional para a ferramenta "${currentTool.name}" (${currentTool.description}).
Parâmetros fornecidos:
- Assunto: "${form.assunto}"
- Tipo de Conteúdo: "${form.tipo}"
- Estilo: "${form.estilo}"
- Público-Alvo: "${form.publico || "Geral"}"
- Objetivo: "${form.objetivo}"

Preciso que você gere respostas separadas exatamente para cada um dos seguintes blocos de saída da ferramenta:
${outputsList}

Formate a sua resposta estritamente utilizando blocos identificados por chaves com o ID de cada saída, por exemplo:
[ID_DA_SAIDA]
Texto correspondente gerado...

[OUTRO_ID]
Texto correspondente gerado...`;

      const text = await generateTextFn({ data: { prompt: aiPrompt } });
      const stableText = typeof text === "string" ? text : "";
      const firstOutputId = currentTool.outputs[0]?.id ?? "resultado";

      const newResults: Record<string, string> = {};
      currentTool.outputs.forEach((o) => {
        const regex = new RegExp(`\\[${o.id}\\]([\\s\\S]*?)(?=\\[[a-z0-9_-]+\\]|$)`, "i");
        const match = stableText.match(regex);
        if (match && match[1]) {
          newResults[o.id] = match[1].trim();
        }
      });

      if (Object.keys(newResults).length === 0) {
        newResults[firstOutputId] = stableText;
      } else {
        currentTool.outputs.forEach((o) => {
          if (!newResults[o.id]) {
            newResults[o.id] = stableText;
          }
        });
      }

      setResults(newResults);
    } catch (error: any) {
      console.error("Erro detalhado ao gerar conteúdo com Gemini:", error);
      const message = error?.message || "Erro desconhecido";
      alert("Erro ao comunicar com a IA: " + message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{currentTool.name}</h1>
      <p className="text-gray-600 mb-6">{currentTool.description}</p>

      <div className="space-y-4 max-w-xl">
        <div>
          <label className="block text-sm font-medium mb-1">Assunto</label>
          <textarea
            className="w-full p-2 border rounded"
            value={form.assunto}
            onChange={(e) => setForm({ ...form, assunto: e.target.value })}
            placeholder={isImageTool ? "Ex: capa minimalista para loja de skincare" : "Ex: 5 dias para organizar rotinas"}
          />
        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 disabled:opacity-50"
        >
          {loading ? "A gerar..." : isImageTool ? "Gerar imagem" : "Gerar conteúdo"}
        </button>
      </div>

      <div className="mt-8 grid gap-4">
        {isImageTool ? (
          <div className="overflow-hidden rounded-2xl border bg-white p-4">
            <h3 className="font-semibold">{currentTool.outputs[0]?.label || "Imagem gerada"}</h3>
            {results[currentTool.outputs[0]?.id || "imagem"] ? (
              <img
                src={results[currentTool.outputs[0]?.id || "imagem"]}
                alt={currentTool.name}
                className="mt-4 w-full rounded-xl border object-cover"
              />
            ) : (
              <p className="mt-2 text-gray-700">O resultado aparecerá aqui.</p>
            )}
          </div>
        ) : (
          currentTool.outputs.map((o) => (
            <div key={o.id} className="p-4 border rounded bg-white">
              <h3 className="font-semibold">{o.label}</h3>
              <p className="text-gray-700 mt-2 whitespace-pre-wrap">
                {results[o.id] || "O resultado aparecerá aqui."}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}