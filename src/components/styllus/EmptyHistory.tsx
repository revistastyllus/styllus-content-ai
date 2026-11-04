import { Link } from "@tanstack/react-router";
import { FileClock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmptyHistory() {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed bg-card px-6 py-12 text-center">
      <FileClock className="h-10 w-10 text-accent" />
      <h3 className="mt-3 font-semibold">Nenhum conteúdo ainda</h3>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">Os conteúdos que você gerar ficarão salvos aqui para consultar, copiar e reutilizar.</p>
      <Button asChild className="mt-5 bg-brand"><Link to="/app/gerador">Criar primeiro conteúdo</Link></Button>
    </div>
  );
}
