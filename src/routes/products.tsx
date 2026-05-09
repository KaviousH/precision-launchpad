import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import scopeImg from "@/assets/product-scope.jpg";
import pcbImg from "@/assets/product-pcb.jpg";
import meterImg from "@/assets/product-meter.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Saunders & Associates" },
      {
        name: "description",
        content:
          "S&A network analyzers, frequency adjustment systems, temperature test systems, automatic test systems, and crystal test fixtures.",
      },
      { property: "og:title", content: "Products — Saunders & Associates" },
      {
        property: "og:description",
        content:
          "Quartz crystal test and production equipment from Saunders & Associates, Phoenix AZ.",
      },
    ],
  }),
  component: ProductsPage,
});

const catalog = [
  {
    img: scopeImg,
    tag: "MEASUREMENT",
    sku: "250B-2",
    name: "PCIe Network Analyzer · 15 kHz – 220 MHz",
    specs: ["PCIe form factor", "15 kHz to 220 MHz range", "Industry-standard for crystal test", "Windows 11 supported"],
    price: "Datasheet 6300425",
  },
  {
    img: scopeImg,
    tag: "MEASUREMENT",
    sku: "250C-2",
    name: "PCIe Network Analyzer · 15 kHz – 400 MHz",
    specs: ["Extended frequency range", "PCIe interface", "OLE automation example pack", "Multi-unit controller compatible"],
    price: "Datasheet 6300427",
  },
  {
    img: scopeImg,
    tag: "MEASUREMENT",
    sku: "250D-2",
    name: "PCIe Network Analyzer · 15 kHz – 900 MHz",
    specs: ["Highest range in the family", "PCIe interface", "Production-line proven", "Compatible with all S&A fixtures"],
    price: "Datasheet 6300431",
  },
  {
    img: pcbImg,
    tag: "AUTOMATIC TEST",
    sku: "W-910A",
    name: "SMD Crystal Pallet Test System",
    specs: ["High-volume SMD pallet test", "Configurable test sequences", "Production-line ready", "Integrates with 250-series"],
    price: "Datasheet 6300367",
  },
  {
    img: pcbImg,
    tag: "AUTOMATIC TEST",
    sku: "W-940A",
    name: "Blank Sorter",
    specs: ["Automated blank sorting", "Configurable bins", "High throughput", "Low-frequency heads supported"],
    price: "Datasheet 6300392",
  },
  {
    img: meterImg,
    tag: "TEMPERATURE TEST",
    sku: "W-5910",
    name: "Dual-Channel Temperature Test System",
    specs: ["100% electronic switching", "10 ppb frequency resolution", "Dual-channel throughput", "Production grade"],
    price: "Datasheet 6300402",
  },
  {
    img: meterImg,
    tag: "TEMPERATURE TEST",
    sku: "W-2220MR",
    name: "Multi-Resonator Test Head",
    specs: ["Multiple resonator types", "Single fixture footprint", "Watch crystal capable", "Drop-in replacement"],
    price: "Datasheet 6300406",
  },
  {
    img: pcbImg,
    tag: "FIXTURES",
    sku: "FX-50R",
    name: "50 Ohm Reflection SMD Fixture",
    specs: ["Optimized for SMD devices", "50 Ω reflection mode", "High-drive option available", "Pairs with 250-series"],
    price: "Datasheet 6300434",
  },
  {
    img: pcbImg,
    tag: "FIXTURES",
    sku: "FX-WTC",
    name: "Low-Frequency / Watch Crystal Fixture",
    specs: ["Tuning-fork compatible", "Low-frequency optimized", "32.768 kHz workflow", "OEM-proven design"],
    price: "Datasheet 6300332",
  },
];

function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b border-border bg-grid">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-mono text-[10px] uppercase tracking-[0.25em] text-primary">
            // catalog
          </div>
          <h1 className="text-display mt-2 text-5xl font-bold tracking-tight text-primary md:text-6xl">
            Quartz crystal test &amp; production
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Every system is designed, manufactured, and supported from our Phoenix, Arizona
            facility. Datasheet numbers correspond to S&amp;A document IDs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {catalog.map((p) => (
            <article key={p.sku} className="panel overflow-hidden rounded-md">
              <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover"
                />
                <span className="text-mono absolute left-3 top-3 rounded-sm bg-background/85 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
                  {p.tag}
                </span>
                <span className="text-mono absolute right-3 top-3 rounded-sm bg-background/85 px-2 py-1 text-[9px] tracking-widest text-muted-foreground backdrop-blur-sm">
                  {p.sku}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-display text-lg font-bold text-primary">{p.name}</h2>
                <ul className="text-mono mt-3 space-y-1 text-[11px] tracking-wider text-muted-foreground">
                  {p.specs.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="text-primary">›</span>
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-mono text-[10px] uppercase tracking-widest text-accent">
                    {p.price}
                  </span>
                  <button className="text-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary">
                    Request PDF →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
