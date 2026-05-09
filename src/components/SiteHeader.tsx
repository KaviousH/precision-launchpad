import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="relative h-8 w-8 rounded-sm bg-primary glow-signal">
            <div className="absolute inset-1 rounded-[2px] bg-background" />
            <div className="absolute inset-0 m-auto h-1.5 w-1.5 rounded-full bg-primary blink" />
          </div>
          <div className="leading-none">
            <div className="text-display text-base font-bold tracking-tight">VOLTRIX</div>
            <div className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              instruments · pcb
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {[
            { to: "/", label: "Home" },
            { to: "/products", label: "Products" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="text-mono rounded-sm px-3 py-2 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="text-mono hidden rounded-sm border border-primary/40 bg-primary/10 px-4 py-2 text-xs uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:glow-signal sm:inline-block"
        >
          Request Quote
        </Link>
      </div>
    </header>
  );
}
