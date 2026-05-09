import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-pcb.jpg";
import scopeImg from "@/assets/product-scope.jpg";
import pcbImg from "@/assets/product-pcb.jpg";
import meterImg from "@/assets/product-meter.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { UpdatesPanel } from "@/components/UpdatesPanel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Voltrix — Precision PCB & Test Instruments" },
      {
        name: "description",
        content:
          "Voltrix designs and manufactures multilayer circuit boards and calibrated measurement instruments for engineers who demand precision.",
      },
      { property: "og:title", content: "Voltrix — Precision PCB & Test Instruments" },
      {
        property: "og:description",
        content: "Multilayer PCB fabrication and benchtop test equipment, engineered in-house.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <UpdatesPanel />
      <Specs />
      <Products />
      <Capabilities />
      <CTA />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:py-28">
        <div className="flex flex-col justify-center">
          <div className="text-mono inline-flex w-fit items-center gap-2 rounded-sm border border-border bg-secondary/50 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary blink" />
            Est. 2008 · Fremont, CA
          </div>
          <h1 className="text-display mt-6 text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
            Signals you can{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              trust
            </span>
            .
            <br />
            Boards you can ship.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Voltrix builds multilayer PCBs and calibrated test instruments under one roof —
            so the hardware you design and the gear you measure with come from the same
            engineering culture.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="text-mono rounded-sm bg-primary px-5 py-3 text-xs uppercase tracking-widest text-primary-foreground transition-all hover:glow-signal"
            >
              Browse instruments →
            </Link>
            <Link
              to="/contact"
              className="text-mono rounded-sm border border-border bg-secondary/40 px-5 py-3 text-xs uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Request PCB quote
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["18+", "Years in fab"],
              ["50µm", "Min. trace/space"],
              ["±0.02%", "Cal. accuracy"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="text-display text-3xl font-bold text-primary">{v}</dt>
                <dd className="text-mono mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="panel relative overflow-hidden rounded-md">
            <img
              src={heroImg}
              alt="Macro photograph of a Voltrix multilayer PCB illuminated next to oscilloscope waveforms"
              width={1920}
              height={1080}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute left-3 top-3 flex items-center gap-2 rounded-sm bg-background/70 px-2 py-1 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary blink" />
              <span className="text-mono text-[10px] uppercase tracking-widest text-foreground">
                live · vx-7204
              </span>
            </div>
            <div className="absolute bottom-3 right-3 rounded-sm bg-background/70 px-2 py-1 backdrop-blur-sm">
              <span className="text-mono text-[10px] tracking-widest text-primary">
                CH1 · 1.024 GHz · 50Ω
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Specs() {
  const items = [
    { k: "ISO 9001:2015", v: "Quality management certified" },
    { k: "IPC-A-600 Class 3", v: "High-reliability electronics" },
    { k: "RoHS · REACH", v: "Compliant materials" },
    { k: "NIST traceable", v: "Calibration on every unit" },
  ];
  return (
    <section className="border-y border-border bg-secondary/20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-4">
        {items.map((i) => (
          <div key={i.k} className="bg-background p-6">
            <div className="text-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              {i.k}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{i.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Products() {
  const products = [
    {
      img: scopeImg,
      tag: "OSCILLOSCOPE",
      name: "VX-7204 Series",
      spec: "4 GHz · 12-bit · 16 ch logic",
      desc: "Mixed-signal benchtop oscilloscope with HD capture and remote streaming.",
    },
    {
      img: pcbImg,
      tag: "PCB FABRICATION",
      name: "HDI Multilayer",
      spec: "Up to 14 layers · 50µm trace",
      desc: "Rigid, flex, and rigid-flex stack-ups for aerospace, medical, and telecom.",
    },
    {
      img: meterImg,
      tag: "INSTRUMENTATION",
      name: "Bench Suite Pro",
      spec: "DMM · DC load · arb. waveform",
      desc: "Stackable lab instruments with shared remote control and logging.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex items-end justify-between">
        <div>
          <div className="text-mono text-[10px] uppercase tracking-[0.25em] text-primary">
            // 02 · catalog
          </div>
          <h2 className="text-display mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            What we manufacture
          </h2>
        </div>
        <Link
          to="/products"
          className="text-mono hidden text-xs uppercase tracking-widest text-muted-foreground hover:text-primary md:block"
        >
          full catalog →
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {products.map((p) => (
          <article
            key={p.name}
            className="panel group overflow-hidden rounded-md transition-all hover:-translate-y-1 hover:glow-signal"
          >
            <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
              <img
                src={p.img}
                alt={p.name}
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="text-mono absolute left-3 top-3 rounded-sm bg-background/70 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
                {p.tag}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-display text-xl font-bold">{p.name}</h3>
              <div className="text-mono mt-1 text-[11px] uppercase tracking-widest text-primary">
                {p.spec}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Capabilities() {
  const caps = [
    ["DESIGN", "DFM review, signal-integrity simulation, stack-up engineering."],
    ["FABRICATION", "1–14 layer rigid, flex & rigid-flex. HDI, blind/buried vias, controlled impedance."],
    ["ASSEMBLY", "SMT down to 01005, BGA rework, conformal coat, full turnkey."],
    ["TEST & CAL", "AOI, X-ray, flying probe, NIST-traceable calibration on every instrument."],
  ];
  return (
    <section className="border-t border-border bg-secondary/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-mono text-[10px] uppercase tracking-[0.25em] text-primary">
          // 03 · capabilities
        </div>
        <h2 className="text-display mt-2 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
          One facility. From schematic to shipped instrument.
        </h2>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {caps.map(([k, v]) => (
            <div key={k} className="bg-background p-8">
              <div className="text-mono text-[11px] uppercase tracking-[0.25em] text-primary">
                {k}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="panel scan rounded-md p-10 md:p-16">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-display text-3xl font-bold tracking-tight md:text-4xl">
                Have a board to build or a signal to capture?
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Send us your gerbers or your spec sheet — our engineers respond within one business day.
              </p>
            </div>
            <Link
              to="/contact"
              className="text-mono rounded-sm bg-primary px-6 py-4 text-xs uppercase tracking-widest text-primary-foreground transition-all hover:glow-signal"
            >
              Start a project →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
