import type { ReactNode } from "react";
import { Logo } from "./Logo";

export function AuthShell({ title, subtitle, children, footer }: { title: string; subtitle: string; children: ReactNode; footer?: ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <aside className="relative hidden flex-col justify-between bg-deep-gradient p-12 text-deep-foreground lg:flex">
        <Logo light />
        <div>
          <h2 className="text-4xl font-bold leading-tight">Seu próximo post viral começa aqui.</h2>
          <p className="mt-4 max-w-md text-deep-foreground/70">Legendas, hashtags, roteiros e ideias para o Instagram — tudo em português e no tom da sua marca.</p>
        </div>
        <p className="text-sm text-deep-foreground/50">© {new Date().getFullYear()} Styllus Content AI</p>
      </aside>
      <main className="flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-sm space-y-6">
          <div className="lg:hidden"><Logo /></div>
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
          </div>
          {children}
          {footer && <div className="text-center text-sm text-muted-foreground">{footer}</div>}
        </div>
      </main>
    </div>
  );
}
