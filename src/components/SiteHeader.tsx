import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-sm bg-primary text-primary-foreground">
            <span className="text-display text-base font-bold leading-none">S&amp;A</span>
          </div>
          <div className="leading-tight">
            <div className="text-display text-sm font-bold tracking-tight text-primary">
              Saunders &amp; Associates
            </div>
            <div className="text-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
              Frequency control · since 1967
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
          className="text-mono hidden rounded-sm border border-primary bg-primary px-4 py-2 text-xs uppercase tracking-widest text-primary-foreground transition-all hover:glow-signal sm:inline-block"
        >
          Request Info
        </Link>
      </div>
    </header>
  );
}
