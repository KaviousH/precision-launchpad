import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import scopeImg from "@/assets/product-scope.jpg";
import pcbImg from "@/assets/product-pcb.jpg";
import meterImg from "@/assets/product-meter.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Voltrix Instruments & PCB" },
      {
        name: "description",
        content:
          "Browse Voltrix oscilloscopes, signal generators, multimeters, and our multilayer PCB fabrication services.",
      },
      { property: "og:title", content: "Products — Voltrix" },
      {
        property: "og:description",
        content: "Oscilloscopes, signal generators, multimeters, and PCB fabrication.",
      },
    ],
  }),
  component: ProductsPage,
});

const catalog = [
  {
    img: scopeImg,
    tag: "OSCILLOSCOPE",
    sku: "VX-7204",
    name: "Mixed-Signal Oscilloscope",
    specs: ["4 GHz bandwidth", "12-bit ADC, 20 GS/s", "16 logic channels", "15.6\" HD touch"],
    price: "from $14,200",
  },
  {
    img: meterImg,
    tag: "INSTRUMENTATION",
    sku: "VX-3300",
    name: "Bench Suite Pro",
    specs: ["7½-digit DMM", "300W programmable DC load", "80 MHz arbitrary waveform gen.", "Shared LAN bus"],
    price: "from $6,890",
  },
  {
    img: pcbImg,
    tag: "PCB FABRICATION",
    sku: "FAB-HDI",
    name: "HDI Multilayer Boards",
    specs: ["1–14 layers, rigid/flex", "Min. 50µm trace/space", "Blind & buried vias", "Class 3 IPC-A-600"],
    price: "quote per design",
  },
  {
    img: scopeImg,
    tag: "RF & MICROWAVE",
    sku: "VX-9100",
    name: "Spectrum Analyzer",
    specs: ["9 kHz – 13.6 GHz", "−165 dBm DANL", "Real-time FFT", "Phase noise −110 dBc/Hz"],
    price: "from $22,400",
  },
  {
    img: meterImg,
    tag: "POWER",
    sku: "VX-2080",
    name: "Programmable DC Supply",
    specs: ["80V / 60A · 1.5kW", "0.03% load regulation", "OVP/OCP/OTP protection", "USB · LAN · GPIB"],
    price: "from $3,450",
  },
  {
    img: pcbImg,
    tag: "PCB FABRICATION",
    sku: "FAB-RFLEX",
    name: "Rigid-Flex Assemblies",
    specs: ["Up to 12 layers mixed", "Polyimide & FR4 hybrid", "Aerospace & medical grade", "Full turnkey assembly"],
    price: "quote per design",
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
          <h1 className="text-display mt-2 text-5xl font-bold tracking-tight md:text-6xl">
            Instruments & boards
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Every Voltrix product is engineered, calibrated, and tested in our Fremont facility.
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
                <span className="text-mono absolute left-3 top-3 rounded-sm bg-background/70 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
                  {p.tag}
                </span>
                <span className="text-mono absolute right-3 top-3 rounded-sm bg-background/70 px-2 py-1 text-[9px] tracking-widest text-muted-foreground backdrop-blur-sm">
                  {p.sku}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-display text-xl font-bold">{p.name}</h2>
                <ul className="text-mono mt-3 space-y-1 text-[11px] tracking-wider text-muted-foreground">
                  {p.specs.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="text-primary">›</span>
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-mono text-[11px] uppercase tracking-widest text-primary">
                    {p.price}
                  </span>
                  <button className="text-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary">
                    spec sheet →
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
