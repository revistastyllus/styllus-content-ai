import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className, light }: { className?: string; light?: boolean }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2", className)}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-primary-foreground shadow-glow">
        <Sparkles className="h-5 w-5" />
      </span>
      <span className={cn("font-display text-lg font-bold tracking-tight", light ? "text-deep-foreground" : "text-foreground")}>
        STYLLUS <span className="text-brand">CONTENT AI</span>
      </span>
    </Link>
  );
}
