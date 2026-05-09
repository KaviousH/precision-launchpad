import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Voltrix" },
      {
        name: "description",
        content:
          "Voltrix is an engineer-led PCB fabricator and test-instrument manufacturer based in Fremont, California.",
      },
      { property: "og:title", content: "About — Voltrix" },
      {
        property: "og:description",
        content: "An engineer-led PCB fabricator and test-instrument manufacturer.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="text-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              // 01 · who we are
            </div>
            <h1 className="text-display mt-2 text-5xl font-bold tracking-tight md:text-6xl">
              Built by engineers,
              <br />
              for engineers.
            </h1>
          </div>
          <div className="space-y-5 text-base text-muted-foreground">
            <p>
              Voltrix was founded in 2008 by three EE graduates who were tired of waiting six
              weeks for a PCB and another four for a calibrated scope to verify it. We built
              our first board house in a Fremont garage and shipped our first oscilloscope —
              the VX-100 — three years later.
            </p>
            <p>
              Today we operate a 38,000 ft² facility with surface-mount lines, an HDI
              fabrication shop, an RF anechoic chamber, and a NIST-traceable calibration lab.
              Roughly 70% of our 142 employees are engineers or technicians.
            </p>
            <p>
              We design our own instruments because we use them. We fabricate our own boards
              because we ship them inside those instruments. The two disciplines sharpen
              each other — and the result is hardware that does what its datasheet says.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {[
            ["2008", "Founded"],
            ["38k ft²", "Manufacturing"],
            ["142", "Employees"],
            ["62", "Countries shipped"],
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

      <SiteFooter />
    </div>
  );
}
