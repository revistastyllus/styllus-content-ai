import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Clock, Hash, Languages, MessageSquareQuote, Target, Wand2 } from "lucide-react";
import { Logo } from "@/components/styllus/Logo";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PLANS, TOOLS } from "@/lib/tools";
import { cn } from "@/lib/utils";

const SITE_URL = ["https://", "stylluscontentai", ".netlify.app"].join("");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Styllus Content AI — Conteúdo para Instagram com IA" },
      { name: "description", content: "Crie legendas, hashtags, roteiros de Reels, Stories e carrosséis para o Instagram em segundos, em português." },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Styllus Content AI — Conteúdo para Instagram com IA" },
      { property: "og:description", content: "Crie conteúdos incríveis para o Instagram em segundos." },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
    ],
  }),
  component: Home,
});

const BENEFITS = [
  { icon: Clock, title: "Economize horas", text: "Do assunto ao post pronto em poucos cliques." },
  { icon: Languages, title: "100% em português", text: "Textos naturais, pensados para o público brasileiro." },
  { icon: Target, title: "Feito para o seu objetivo", text: "Engajamento, vendas, autoridade ou alcance." },
  { icon: Hash, title: "Hashtags estratégicas", text: "Sugestões relevantes para o seu nicho." },
  { icon: MessageSquareQuote, title: "CTA e comentário fixado", text: "Tudo o que um post precisa para converter." },
  { icon: Wand2, title: "Vários formatos", text: "Feed, Reels, Stories, carrosséis e ideias." },
];

const STEPS = [
  { n: "01", title: "Conte o assunto", text: "Descreva o tema, o público-alvo e o objetivo do post." },
  { n: "02", title: "Escolha o estilo", text: "Profissional, descontraído, inspirador, educativo…" },
  { n: "03", title: "Receba e publique", text: "Títulos, legenda, hashtags, CTA e comentário fixado prontos." },
];

const FAQ = [
  { q: "Preciso saber escrever bem para usar?", a: "Não. Você informa o assunto e o objetivo, e a ferramenta sugere os textos para você revisar e publicar." },
  { q: "O conteúdo é em português?", a: "Sim, toda a plataforma e todos os conteúdos são em português brasileiro." },
  { q: "Posso cancelar quando quiser?", a: "Sim. Os planos são mensais e sem fidelidade." },
  { q: "Quais formatos posso criar?", a: "Posts de feed, roteiros de Reels, sequências de Stories, carrosséis e ideias de publicações." },
  { q: "Funciona no celular?", a: "Sim, a plataforma foi pensada para funcionar bem no computador e no celular." },
];

function Home() {
  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Logo light />
          <nav className="hidden items-center gap-6 text-sm text-deep-foreground/80 md:flex">
            <a href="#beneficios">Benefícios</a><a href="#como-funciona">Como funciona</a><a href="#planos">Planos</a><a href="#faq">Dúvidas</a>
          </nav>
          <div className="flex gap-2">
            <Button asChild variant="ghost" className="text-deep-foreground hover:bg-sidebar-accent hover:text-deep-foreground"><Link to="/entrar">Entrar</Link></Button>
            <Button asChild className="hidden bg-brand sm:inline-flex"><Link to="/cadastro">Começar</Link></Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-deep-gradient pb-24 pt-36 text-deep-foreground">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <span className="inline-block rounded-full border border-sidebar-border px-4 py-1 text-xs uppercase tracking-widest text-glow">Inteligência artificial para Instagram</span>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl">
            Crie conteúdos incríveis para o Instagram <span className="text-brand">em segundos!</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-deep-foreground/70">Legendas, hashtags, roteiros de Reels, Stories e carrosséis no tom da sua marca — para criadores, empreendedores e empresas.</p>
</p>
                      <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-brand shadow-glow"><Link to="/cadastro">Criar conta grátis</Link></Button>
            <Button asChild size="lg" variant="outline" className="border-sidebar-border bg-transparent text-deep-foreground hover:bg-sidebar-accent hover:text-deep-foreground"><Link to="/app">Ver o painel</Link></Button>
          </div>
          <div className="mx-auto mt-12 w-full max-w-3xl">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-purple-500/40 shadow-[0_20px_50px_rgba(126,34,206,0.25)]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://youtube.com/embed/suINBblvORs"
                title="Demonstração Styllus Content AI"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

            {TOOLS.map((t) => (
              <div key={t.key} className="rounded-2xl border border-sidebar-border bg-sidebar-accent/40 p-4 text-left backdrop-blur">
                <t.icon className="h-5 w-5 text-glow" />
                <p className="mt-2 text-sm font-semibold">{t.name}</p>
              </div>

            ))}
          </div>
        </div>
      </section>

      <section id="beneficios" className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Por que usar o Styllus</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <div key={b.title} className="rounded-2xl border bg-card p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary"><b.icon className="h-5 w-5" /></span>
              <h3 className="mt-4 font-semibold">{b.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="como-funciona" className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">Como funciona</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-2xl bg-card p-6">
                <span className="font-display text-4xl font-extrabold text-brand">{s.n}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="planos" className="mx-auto max-w-6xl px-5 py-24">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Planos</h2>
        <p className="mt-2 text-center text-muted-foreground">Valores de referência. A contratação será liberada em breve.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div key={p.name} className={cn("flex flex-col rounded-3xl border p-7", p.highlight ? "bg-deep-gradient text-deep-foreground shadow-glow" : "bg-card")}>
              {p.highlight && <span className="mb-3 w-fit rounded-full bg-brand px-3 py-1 text-xs font-semibold text-primary-foreground">Mais escolhido</span>}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="mt-3"><span className="font-display text-4xl font-extrabold">{p.price}</span><span className="opacity-70">{p.period}</span></p>
              <p className={cn("mt-1 text-sm", p.highlight ? "text-glow" : "text-primary")}>{p.generations}</p>
              <ul className="mt-6 flex-1 space-y-2 text-sm">
                {p.features.map((f) => <li key={f} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-accent" /> {f}</li>)}
              </ul>
              <Button disabled className={cn("mt-8", p.highlight && "bg-brand")} variant={p.highlight ? "default" : "outline"}>Em breve</Button>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="bg-secondary py-24">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">Perguntas frequentes</h2>
          <Accordion type="single" collapsible className="mt-10 rounded-2xl border bg-card px-6">
            {FAQ.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="border-t py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Styllus Content AI. Todos os direitos reservados.
      </footer>
    </div>
  );
}
