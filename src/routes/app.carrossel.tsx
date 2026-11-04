import { createFileRoute } from "@tanstack/react-router";
import { GeneratorWorkspace } from "@/components/styllus/GeneratorWorkspace";
import { getTool } from "@/lib/tools";

export const Route = createFileRoute("/app/carrossel")({
  head: () => ({ 
    meta: [
      { title: "Carrossel — Styllus Content AI" }, 
      { name: "description", content: getTool("carrossel").description }
    ] 
  }),
  component: () => <GeneratorWorkspace tool={getTool("carrossel")} defaultType="Carrossel" />,
});
