import { useEffect, useState } from "react";

type Update = {
  date: string;
  tag: "NEW PRODUCT" | "FIRMWARE" | "ANNOUNCEMENT" | "RELEASE";
  title: string;
  body: string;
};

// Edit this list to publish announcements on the landing page.
const updates: Update[] = [
  {
    date: "2026-05-08",
    tag: "NEW PRODUCT",
    title: "VX-7204 · 4 GHz Mixed-Signal Oscilloscope",
    body: "12-bit ADC, 16 logic channels, and a 15.6\" HD touch display. Now shipping worldwide.",
  },
  {
    date: "2026-04-22",
    tag: "FIRMWARE",
    title: "Bench Suite v3.1 — Remote Capture",
    body: "Stream waveforms over LAN to any browser. Free update for all VX-series instruments.",
  },
  {
    date: "2026-04-03",
    tag: "RELEASE",
    title: "HDI Stack-up: 14-layer rigid-flex now available",
    body: "Production line 3 expanded for high-density interconnect with 50µm trace/space.",
  },
  {
    date: "2026-03-15",
    tag: "ANNOUNCEMENT",
    title: "Embedded World 2026 — Booth H4-211",
    body: "Demo our new RF measurement platform live. Schedule a 1:1 with our engineers.",
  },
];

export function UpdatesPanel() {
  const [active, setActive] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", { hour12: false }) +
          " UTC" +
          new Date().toString().match(/GMT([+-]\d{2})/)?.[1],
      );
    tick();
    const i = setInterval(tick, 1000);
    const rotate = setInterval(() => setActive((a) => (a + 1) % updates.length), 6000);
    return () => {
      clearInterval(i);
      clearInterval(rotate);
    };
  }, []);

  const u = updates[active];

  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="panel scan relative rounded-md p-1">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-border bg-secondary/60 px-4 py-2">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-amber/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-primary blink" />
            </div>
            <span className="text-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              voltrix · broadcast feed
            </span>
          </div>
          <span className="text-mono text-[10px] tracking-widest text-muted-foreground">
            {time || "--:--:--"}
          </span>
        </div>

        <div className="grid gap-0 md:grid-cols-[1fr_280px]">
          {/* Active update */}
          <div className="relative overflow-hidden p-8">
            <div className="bg-grid-fine absolute inset-0 opacity-40" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="text-mono inline-flex items-center rounded-sm border border-primary/50 bg-primary/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-primary">
                  {u.tag}
                </span>
                <span className="text-mono text-[11px] tracking-widest text-muted-foreground">
                  {u.date}
                </span>
              </div>
              <h3 className="text-display mt-4 text-2xl font-bold leading-tight md:text-3xl">
                {u.title}
              </h3>
              <p className="mt-3 max-w-xl text-base text-muted-foreground">{u.body}</p>
              <div className="mt-6 flex items-center gap-3">
                <button className="text-mono rounded-sm bg-primary px-4 py-2 text-[11px] uppercase tracking-widest text-primary-foreground transition-all hover:glow-signal">
                  Read details →
                </button>
                <span className="text-mono text-[10px] tracking-widest text-muted-foreground">
                  Auto-rotates · {active + 1}/{updates.length}
                </span>
              </div>
            </div>
          </div>

          {/* Feed list */}
          <ul className="border-t border-border md:border-l md:border-t-0">
            {updates.map((item, i) => (
              <li key={i}>
                <button
                  onClick={() => setActive(i)}
                  className={`group flex w-full items-start gap-3 border-b border-border/60 px-4 py-3 text-left transition-colors last:border-b-0 ${
                    i === active ? "bg-primary/5" : "hover:bg-secondary/40"
                  }`}
                >
                  <span
                    className={`mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                      i === active ? "bg-primary" : "bg-muted-foreground/40"
                    }`}
                  />
                  <span className="min-w-0 flex-1">
                    <span className="text-mono block text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                      {item.tag} · {item.date}
                    </span>
                    <span className="mt-1 block truncate text-sm text-foreground">
                      {item.title}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
