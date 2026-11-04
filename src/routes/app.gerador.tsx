import { createFileRoute } from "@tanstack/react-router";
import { GeneratorWorkspace } from "@/components/styllus/GeneratorWorkspace";
import { getTool } from "@/lib/tools";

export const Route = createFileRoute("/app/gerador")({
  head: () => ({ 
    meta: [
      { title: "Gerador — Styllus Content AI" }, 
      { name: "description", content: getTool("gerador").description }
    ] 
  }),
  component: () => <GeneratorWorkspace tool={getTool("gerador")} />,
});
