import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="py-16">
    <div className="container mx-auto px-6">
      <div className="glass-panel p-10">
        <div className="lavender-line mb-10 max-w-xs" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="text-primary font-semibold text-lg tracking-wide mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>AETHER</p>
            <p className="text-sm text-muted-foreground">Exclusividade em Movimento</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Navegação</p>
            <div className="flex flex-col gap-2">
              {[
                { to: "/", label: "Início" },
                { to: "/grupos", label: "Frota" },
                { to: "/sobre", label: "Sobre" },
                { to: "/contato", label: "Contato" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Contato</p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>hello@aethertransfer.com.br</span>
              <span>+55 11 99999-9999</span>
            </div>
          </div>
        </div>

        <div className="lavender-line mt-10 mb-6 max-w-xs" />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aether Transfer — Todos os direitos reservados
        </p>
      </div>
    </div>
  </footer>
);
