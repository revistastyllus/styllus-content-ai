import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell } from "@/components/styllus/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/recuperar-senha")({
  head: () => ({ meta: [{ title: "Recuperar senha — Styllus Content AI" }, { name: "description", content: "Receba um link para redefinir sua senha." }] }),
  component: () => (
    <AuthShell title="Recuperar senha" subtitle="Enviaremos um link de redefinição para o seu e-mail." footer={<Link to="/entrar" className="font-semibold text-primary">Voltar para o login</Link>}>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1.5"><Label htmlFor="email">E-mail</Label><Input id="email" type="email" placeholder="voce@email.com" /></div>
        <Button type="submit" disabled className="w-full bg-brand">Enviar link</Button>
      </form>
    </AuthShell>
  ),
});
