export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4">
        <div>
          <div className="text-display text-lg font-bold">VOLTRIX</div>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Precision PCB manufacturing & calibrated test instruments. Engineered in-house since 2008.
          </p>
        </div>
        <div>
          <div className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Products</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Multilayer PCB</li>
            <li>RF & High-Speed</li>
            <li>Oscilloscopes</li>
            <li>Signal Generators</li>
          </ul>
        </div>
        <div>
          <div className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>ISO 9001 Cert.</li>
          </ul>
        </div>
        <div>
          <div className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Contact</div>
          <ul className="mt-3 space-y-2 text-sm text-mono">
            <li>+1 (415) 555 · 0142</li>
            <li>sales@voltrix.io</li>
            <li>2204 Industrial Pkwy<br />Fremont, CA 94538</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>© 2026 Voltrix Instruments, Inc.</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary blink" />
            Systems nominal
          </span>
        </div>
      </div>
    </footer>
  );
}
