import { createFileRoute, Link, Outlet, redirect, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { History, LayoutDashboard, LogOut, Menu, X } from "lucide-react";
import { Logo } from "@/components/styllus/Logo";
import { TOOLS } from "@/lib/tools";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/app")({
  beforeLoad: async () => {
    const { data } = await supabase.auth.getSession();

    if (!data.session) {
      throw redirect({ to: "/entrar" });
    }
  },
  component: AppLayout,
});

const linkCls = "flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-sidebar-foreground/80 transition hover:bg-sidebar-accent hover:text-sidebar-accent-foreground";
const activeCls = "bg-sidebar-accent text-sidebar-accent-foreground font-semibold";

function Nav({ onNavigate }: { onNavigate?: () => void }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const loadSession = async () => {
      const { data } = await supabase.auth.getSession();
      setEmail(data.session?.user?.email ?? "");
    };

    loadSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setEmail(session?.user?.email ?? "");
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/entrar" });
  };

  return (
    <nav className="flex flex-1 flex-col gap-1" onClick={onNavigate}>
      <Link to="/app" activeOptions={{ exact: true }} className={linkCls} activeProps={{ className: activeCls }}><LayoutDashboard className="h-4 w-4" /> Painel</Link>
      <p className="mt-4 px-3 text-xs uppercase tracking-wider text-sidebar-foreground/50">Ferramentas</p>
      {TOOLS.map((t) => (
        <Link key={t.key} to={t.to} className={linkCls} activeProps={{ className: activeCls }}><t.icon className="h-4 w-4" /> {t.name}</Link>
      ))}
      <p className="mt-4 px-3 text-xs uppercase tracking-wider text-sidebar-foreground/50">Conta</p>
      <Link to="/app/historico" className={linkCls} activeProps={{ className: activeCls }}><History className="h-4 w-4" /> Histórico</Link>
      <button type="button" onClick={handleSignOut} className={cn(linkCls, "mt-auto justify-start w-full text-left")}> 
        <LogOut className="h-4 w-4" />
        <span>{email ? `Sair (${email})` : "Sair"}</span>
      </button>
    </nav>
  );
}

function AppLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[260px_1fr]">
      <aside className="sticky top-0 hidden h-screen flex-col gap-6 bg-sidebar p-5 lg:flex">
        <Logo light />
        <Nav />
      </aside>
      <header className="sticky top-0 z-30 flex items-center justify-between border-b bg-background/90 px-4 py-3 backdrop-blur lg:hidden">
        <Logo />
        <button onClick={() => setOpen(true)} aria-label="Abrir menu" className="rounded-lg p-2 hover:bg-muted"><Menu className="h-5 w-5" /></button>
      </header>
      {open && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          <aside className="flex w-72 flex-col gap-6 bg-sidebar p-5">
            <div className="flex items-center justify-between">
              <Logo light />
              <button onClick={() => setOpen(false)} aria-label="Fechar menu" className="text-sidebar-foreground"><X className="h-5 w-5" /></button>
            </div>
            <Nav onNavigate={() => setOpen(false)} />
          </aside>
          <div className="flex-1 bg-deep/60" onClick={() => setOpen(false)} />
        </div>
      )}
      <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-8 sm:py-10"><Outlet /></main>
    </div>
  );
}
