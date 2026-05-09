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
      { title: "Saunders & Associates — Quartz Crystal Test & Production Systems" },
      {
        name: "description",
        content:
          "S&A is the industry leader in frequency adjustment, measurement, and test of frequency control devices. Phoenix, Arizona — supporting manufacturers for over 50 years.",
      },
      { property: "og:title", content: "Saunders & Associates — Frequency Control Test Systems" },
      {
        property: "og:description",
        content:
          "Pioneers of quartz crystal measurement. 250-series network analyzers, frequency adjustment, temperature test, and automatic test systems.",
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
      <div className="bg-grid absolute inset-0 opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:py-28">
        <div className="flex flex-col justify-center">
          <div className="text-mono inline-flex w-fit items-center gap-2 rounded-sm border border-border bg-secondary px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary blink" />
            Est. 1967 · Phoenix, Arizona
          </div>
          <h1 className="text-display mt-6 text-5xl font-bold leading-[0.95] tracking-tight text-primary md:text-7xl">
            The standard for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              frequency
            </span>
            <br />
            control measurement.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Saunders &amp; Associates designs and manufactures test and production systems
            for quartz resonators, oscillators, ceramic resonators, filters, MEMs, and
            capacitors — trusted by manufacturers worldwide for over 50 years.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="text-mono rounded-sm bg-primary px-5 py-3 text-xs uppercase tracking-widest text-primary-foreground transition-all hover:glow-signal"
            >
              View product line →
            </Link>
            <Link
              to="/contact"
              className="text-mono rounded-sm border border-border bg-background px-5 py-3 text-xs uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Talk to an engineer
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["50+", "Years in industry"],
              ["12,000+", "Analyzers shipped"],
              ["10 ppb", "Frequency resolution"],
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
              alt="Quartz crystal under test on a Saunders & Associates 250B network analyzer"
              width={1920}
              height={1080}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute left-3 top-3 flex items-center gap-2 rounded-sm bg-background/85 px-2 py-1 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary blink" />
              <span className="text-mono text-[10px] uppercase tracking-widest text-primary">
                live · 250B-2 capture
              </span>
            </div>
            <div className="absolute bottom-3 right-3 rounded-sm bg-background/85 px-2 py-1 backdrop-blur-sm">
              <span className="text-mono text-[10px] tracking-widest text-primary">
                15 kHz – 220 MHz · 50Ω
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
    { k: "Pioneered 1967", v: "First crystal impedance meters" },
    { k: "PC-Based NA", v: "World's first crystal network analyzer card" },
    { k: "Ion-Beam Tech", v: "In-house frequency adjustment systems" },
    { k: "24/7 Production", v: "Trusted in demanding manufacturing" },
  ];
  return (
    <section className="border-y border-border bg-secondary/40">
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
      tag: "MEASUREMENT",
      name: "250-Series Network Analyzers",
      spec: "15 kHz – 900 MHz · PCIe",
      desc: "The industry-standard PCIe network analyzer card for quartz crystal measurement. Models 250B-2, 250C-2, 250D-2.",
    },
    {
      img: pcbImg,
      tag: "AUTOMATIC TEST",
      name: "W-Series Test Systems",
      spec: "SMD pallet · blank sorting",
      desc: "W-910A SMD crystal pallet test and W-940A blank sorter for high-volume production environments.",
    },
    {
      img: meterImg,
      tag: "TEMPERATURE TEST",
      name: "W-5910 Dual-Channel TTS",
      spec: "100% electronic switching",
      desc: "Production-grade temperature test system with 10 ppb frequency resolution — the world's only fully electronic TTS.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex items-end justify-between">
        <div>
          <div className="text-mono text-[10px] uppercase tracking-[0.25em] text-primary">
            // 02 · catalog
          </div>
          <h2 className="text-display mt-2 text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Built for the production floor
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
              <span className="text-mono absolute left-3 top-3 rounded-sm bg-background/85 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
                {p.tag}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-display text-xl font-bold text-primary">{p.name}</h3>
              <div className="text-mono mt-1 text-[11px] uppercase tracking-widest text-accent">
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
    ["MEASUREMENT", "PCIe network analyzers, crystal test fixtures, high-drive and low-frequency heads, multiple-unit controllers."],
    ["FREQUENCY ADJUSTMENT", "In-house ion-beam systems delivering best-in-class throughput and adjustment accuracy."],
    ["TEMPERATURE TEST", "Production TTS with 100% electronic switching and 10 ppb resolution since 1975 — still made today."],
    ["AUTOMATIC TEST", "SMD pallet test, blank sorters, and integration with customer MES for 24/7 manufacturing."],
  ];
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-mono text-[10px] uppercase tracking-[0.25em] text-primary">
          // 03 · capabilities
        </div>
        <h2 className="text-display mt-2 max-w-2xl text-4xl font-bold tracking-tight text-primary md:text-5xl">
          Test, adjust, and qualify — in one ecosystem.
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
              <h2 className="text-display text-3xl font-bold tracking-tight text-primary md:text-4xl">
                Solving the crystal industry's hardest problems since 1967.
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Tell us about your application — quartz, MEMs, ceramic resonators, or filters —
                and our engineers will scope a system that fits your production line.
              </p>
            </div>
            <Link
              to="/contact"
              className="text-mono rounded-sm bg-primary px-6 py-4 text-xs uppercase tracking-widest text-primary-foreground transition-all hover:glow-signal"
            >
              Contact S&amp;A →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
