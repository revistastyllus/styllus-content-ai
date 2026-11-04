import { createServerFn } from "@tanstack/react-start";
import { GoogleGenAI } from "@google/genai";

export type GeminiTextRequest = {
  prompt: string;
};

export type GeminiImageRequest = {
  prompt: string;
};

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;


function resolveGeminiApiKey() {
  return GEMINI_API_KEY;
}

export function getGeminiApiKey() {
  return resolveGeminiApiKey();
}

export const generateGeminiText = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    if (!data || typeof data !== "object" || typeof (data as GeminiTextRequest).prompt !== "string") {
      throw new Error("Prompt inválido para geração de texto.");
    }

    const prompt = (data as GeminiTextRequest).prompt.trim();
    if (!prompt) {
      throw new Error("Prompt inválido para geração de texto.");
    }

    return { prompt };
  })
  .handler(async ({ data }) => {
    const ai = new GoogleGenAI({ apiKey: resolveGeminiApiKey() });
    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: data.prompt,
    });

    const text = typeof response.text === "string" ? response.text : "";
    return text || "Nenhuma resposta gerada pelo Gemini.";
  });

export const generateGeminiImage = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    if (!data || typeof data !== "object" || typeof (data as GeminiImageRequest).prompt !== "string") {
      throw new Error("Prompt inválido para geração de imagem.");
    }

    const prompt = (data as GeminiImageRequest).prompt.trim();
    if (!prompt) {
      throw new Error("Prompt inválido para geração de imagem.");
    }

    return { prompt };
  })
  .handler(async ({ data }) => {
    const ai = new GoogleGenAI({ apiKey: resolveGeminiApiKey() });
    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: data.prompt,
      config: {
        responseModalities: ["TEXT", "IMAGE"],
      },
    });

    const imagePart = (response.candidates ?? [])
      .flatMap((candidate: any) => candidate?.content?.parts ?? [])
      .find((part: any) => part?.inlineData?.mimeType?.startsWith("image/"));

    const text = typeof response.text === "string" ? response.text : "";
    const imageData = imagePart?.inlineData?.data;
    const mimeType = imagePart?.inlineData?.mimeType || "image/png";

    if (!imageData) {
      return {
        imageDataUri: "",
        text: text || "Imagem não gerada. Tente novamente.",
      };
    }

    return {
      imageDataUri: `data:${mimeType};base64,${imageData}`,
      text,
    };
  });
