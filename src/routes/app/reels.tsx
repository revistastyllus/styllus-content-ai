import { createFileRoute } from "@tanstack/react-router";
import { GeneratorWorkspace } from "@/components/styllus/GeneratorWorkspace";
import { getTool } from "@/lib/tools";

export const Route = createFileRoute("/app/reels")({
  head: () => ({ 
    meta: [
      { title: "Roteiro de Reels — Styllus Content AI" }, 
      { name: "description", content: getTool("reels").description }
    ] 
  }),
  component: () => <GeneratorWorkspace tool={getTool("reels")} defaultType="Reels" />,
});
