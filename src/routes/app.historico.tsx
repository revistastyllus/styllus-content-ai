import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { EmptyHistory } from "@/components/styllus/EmptyHistory";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/app/historico")({
  head: () => ({ meta: [{ title: "Histórico — Styllus Content AI" }, { name: "description", content: "Todos os conteúdos que você já gerou." }] }),
  component: Historico,
});

const FILTERS = ["Todos", "Publicações", "Reels", "Stories", "Carrosséis", "Ideias"];

function Historico() {
  const [filter, setFilter] = useState("Todos");
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Histórico de conteúdos</h1>
        <p className="text-sm text-muted-foreground">Consulte e reutilize tudo o que você já criou.</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative sm:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Buscar por assunto" className="pl-9" />
        </div>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={cn("rounded-full border px-3 py-1 text-sm transition", filter === f ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:bg-secondary")}>{f}</button>
          ))}
        </div>
      </div>
      <EmptyHistory />
    </div>
  );
}
