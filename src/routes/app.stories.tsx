import { createFileRoute } from "@tanstack/react-router";
import { GeneratorWorkspace } from "@/components/styllus/GeneratorWorkspace";
import { getTool } from "@/lib/tools";

export const Route = createFileRoute("/app/stories")({
  head: () => ({ 
    meta: [
      { title: "Stories — Styllus Content AI" }, 
      { name: "description", content: getTool("stories").description }
    ] 
  }),
  component: () => <GeneratorWorkspace tool={getTool("stories")} defaultType="Stories" />,
});
