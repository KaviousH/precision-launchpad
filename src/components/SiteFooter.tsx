export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4">
        <div>
          <div className="text-display text-lg font-bold text-primary">Saunders &amp; Associates, LLC</div>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Pioneers of quartz crystal measurement technology. Test and production systems
            trusted by frequency-control manufacturers worldwide since 1967.
          </p>
        </div>
        <div>
          <div className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Products</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>250-Series Network Analyzers</li>
            <li>Frequency Adjustment Systems</li>
            <li>Temperature Test Systems</li>
            <li>Automatic Test Systems</li>
            <li>Crystal Test Fixtures</li>
          </ul>
        </div>
        <div>
          <div className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>About S&amp;A</li>
            <li>Support</li>
            <li>Datasheets</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <div className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Contact</div>
          <ul className="text-mono mt-3 space-y-2 text-sm">
            <li>2520 East Rose Garden Lane</li>
            <li>Phoenix, Arizona 85050 USA</li>
            <li>Phone: (602) 971-9977</li>
            <li>Fax: (602) 971-5522</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>© 2026 Saunders &amp; Associates, LLC. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary blink" />
            Phoenix, AZ
          </span>
        </div>
      </div>
    </footer>
  );
}
