import { Info } from "lucide-react";
import type { ReactNode } from "react";

/** Aviso honesto: indica que a função ainda será conectada em etapa futura. */
export function StageNotice({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-2 rounded-xl border border-accent/50 bg-secondary px-4 py-3 text-sm text-secondary-foreground">
      <Info className="mt-0.5 h-4 w-4 shrink-0" />
      <p>{children}</p>
    </div>
  );
}
