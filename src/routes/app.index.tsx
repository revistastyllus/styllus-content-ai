import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Crown, Zap } from "lucide-react";
import { TOOLS } from "@/lib/tools";
import { EmptyHistory } from "@/components/styllus/EmptyHistory";
import { StageNotice } from "@/components/styllus/StageNotice";

export const Route = createFileRoute("/app/")({
  head: () => ({ meta: [{ title: "Painel — Styllus Content AI" }, { name: "description", content: "Seu painel de criação de conteúdo." }] }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Olá, criador! 👋</h1>
        <p className="mt-1 text-muted-foreground">O que vamos criar para o seu Instagram hoje?</p>
      </div>
      <StageNotice>Os dados de conta, plano e uso serão exibidos aqui quando o login for ativado.</StageNotice>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-deep-gradient p-6 text-deep-foreground">
          <div className="flex items-center gap-2 text-sm text-deep-foreground/70"><Crown className="h-4 w-4" /> Plano contratado</div>
          <p className="mt-2 text-2xl font-bold">—</p>
          <Link to="/" hash="planos" className="mt-4 inline-flex items-center gap-1 text-sm text-glow">Ver planos <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="rounded-2xl border bg-card p-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground"><Zap className="h-4 w-4" /> Gerações disponíveis</div>
          <p className="mt-2 text-2xl font-bold">— <span className="text-base font-normal text-muted-foreground">neste mês</span></p>
          <div className="mt-4 h-2 rounded-full bg-muted"><div className="h-2 w-0 rounded-full bg-brand" /></div>
        </div>
      </div>
      <section>
        <h2 className="mb-4 text-xl font-bold">Ferramentas</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((t) => (
            <Link key={t.key} to={t.to} className="group rounded-2xl border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-glow">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary group-hover:bg-brand group-hover:text-primary-foreground"><t.icon className="h-5 w-5" /></span>
              <h3 className="mt-3 font-semibold">{t.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Histórico recente</h2>
          <Link to="/app/historico" className="text-sm text-primary">Ver tudo</Link>
        </div>
        <EmptyHistory />
      </section>
    </div>
  );
}
