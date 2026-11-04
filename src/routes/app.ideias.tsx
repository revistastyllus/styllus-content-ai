import { createFileRoute } from "@tanstack/react-router";
import { GeneratorWorkspace } from "@/components/styllus/GeneratorWorkspace";
import { getTool } from "@/lib/tools";

export const Route = createFileRoute("/app/ideias")({
  head: () => ({ meta: [{ title: "Ideias — Styllus Content AI" }, { name: "description", content: getTool("ideias").description }] }),
  component: () => <GeneratorWorkspace tool={getTool("ideias")} />,
});
