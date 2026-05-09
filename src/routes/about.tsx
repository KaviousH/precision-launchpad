import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Saunders & Associates" },
      {
        name: "description",
        content:
          "Saunders & Associates was formed in 1967 to serve the quartz crystal industry. We pioneered crystal impedance measurement and built the de facto standard 250B network analyzer.",
      },
      { property: "og:title", content: "About — Saunders & Associates" },
      {
        property: "og:description",
        content: "Pioneers of quartz crystal measurement technology since 1967.",
      },
    ],
  }),
  component: AboutPage,
});

const milestones: Array<[string, string]> = [
  ["1967", "Saunders & Associates founded to serve the quartz crystal industry."],
  ["1970s", "Pioneered Crystal Impedance Meters — the first electrical-parameter measurement equipment for the industry."],
  ["1975", "Introduced first temperature test system; the architecture remains in production today."],
  ["1990s", "World's first PC-based network analyzer card for quartz crystal measurement."],
  ["2000s", "250B Network Analyzer becomes the de facto industry standard with thousands of units installed worldwide."],
  ["2010s", "Combined network-analyzer measurement with proprietary ion-beam frequency adjustment."],
  ["Today", "Test and production systems for quartz, oscillators, ceramic resonators, filters, MEMs, and capacitors."],
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="text-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              // about S&amp;A
            </div>
            <h1 className="text-display mt-2 text-5xl font-bold tracking-tight text-primary md:text-6xl">
              Pioneers of quartz crystal measurement.
            </h1>
          </div>
          <div className="space-y-5 text-base text-muted-foreground">
            <p>
              <strong className="text-foreground">Saunders &amp; Associates</strong> was formed in
              1967 to provide consultation to the quartz crystal industry. We soon pioneered
              quartz crystal electrical parameter measurement technology with the introduction of
              our Crystal Impedance Meters. The first model of our temperature test system was
              introduced in 1975 — and these systems are still being manufactured today.
            </p>
            <p>
              As personal-computer technology evolved, S&amp;A was the first company in the world
              to introduce a PC-based network analyzer card for quartz crystal measurements. The{" "}
              <strong className="text-foreground">250B Network Analyzer</strong> has become a de
              facto industry standard with thousands of units installed worldwide.
            </p>
            <p>
              We combined this measurement capability with our own ion-beam technology to deliver
              frequency-adjustment systems that continually set the standard for throughput and
              adjustment accuracy. Our quartz crystal temperature test systems are the world's
              only production systems with 100% electronic switching and frequency-measurement
              resolution of 10 parts per billion.
            </p>
            <p>
              Our current portfolio includes test and production systems for quartz resonators,
              oscillators, ceramic resonators, filters, MEMs, capacitors, and other devices —
              relied upon in demanding 24/7 production environments.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {[
            ["1967", "Founded"],
            ["50+", "Years of innovation"],
            ["12,000+", "250-series shipped"],
            ["10 ppb", "TTS resolution"],
          ].map(([k, v]) => (
            <div key={v} className="bg-background p-8">
              <div className="text-display text-4xl font-bold text-primary">{k}</div>
              <div className="text-mono mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {v}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-mono text-[10px] uppercase tracking-[0.25em] text-primary">
          // company history
        </div>
        <h2 className="text-display mt-2 text-4xl font-bold tracking-tight text-primary">
          Six decades of firsts.
        </h2>
        <ol className="mt-10 space-y-0 border-l-2 border-primary/30">
          {milestones.map(([year, body]) => (
            <li key={year} className="relative pl-8 pb-8 last:pb-0">
              <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-primary" />
              <div className="text-mono text-[11px] uppercase tracking-[0.25em] text-primary">
                {year}
              </div>
              <p className="mt-2 max-w-2xl text-base text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <SiteFooter />
    </div>
  );
}
