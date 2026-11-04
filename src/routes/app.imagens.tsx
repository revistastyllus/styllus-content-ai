import { createFileRoute } from "@tanstack/react-router";
import { GeneratorWorkspace } from "@/components/styllus/GeneratorWorkspace";
import { getTool } from "@/lib/tools";

export const Route = createFileRoute("/app/imagens")({
  head: () => ({
    meta: [
      { title: "Gerador de imagens — Styllus Content AI" },
      { name: "description", content: getTool("imagens").description },
    ],
  }),
  component: () => <GeneratorWorkspace tool={getTool("imagens")} />,
});
