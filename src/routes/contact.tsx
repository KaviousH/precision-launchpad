import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Voltrix" },
      {
        name: "description",
        content: "Request a PCB quote or instrument demo. Voltrix engineers reply within one business day.",
      },
      { property: "og:title", content: "Contact — Voltrix" },
      {
        property: "og:description",
        content: "Request a PCB quote or instrument demo from Voltrix engineers.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="text-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              // talk to engineering
            </div>
            <h1 className="text-display mt-2 text-5xl font-bold tracking-tight md:text-6xl">
              Send us your spec.
            </h1>
            <p className="mt-4 max-w-md text-muted-foreground">
              Gerbers, BOMs, test-bench requirements — give us the details and a real engineer
              will respond within one business day.
            </p>

            <dl className="text-mono mt-10 space-y-5 text-sm">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Sales
                </dt>
                <dd className="mt-1 text-primary">sales@voltrix.io</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Support
                </dt>
                <dd className="mt-1 text-primary">support@voltrix.io</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Phone
                </dt>
                <dd className="mt-1">+1 (415) 555 · 0142</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Facility
                </dt>
                <dd className="mt-1">2204 Industrial Pkwy, Fremont, CA 94538</dd>
              </div>
            </dl>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks — we'll be in touch within 1 business day.");
            }}
            className="panel rounded-md p-6 md:p-8"
          >
            <div className="grid gap-4">
              <Field label="Name" name="name" />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" />
              <div>
                <label className="text-mono mb-2 block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Project type
                </label>
                <select className="text-mono w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none">
                  <option>PCB fabrication quote</option>
                  <option>Instrument purchase</option>
                  <option>Custom engineering</option>
                  <option>Calibration service</option>
                </select>
              </div>
              <div>
                <label className="text-mono mb-2 block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Details
                </label>
                <textarea
                  rows={5}
                  className="text-mono w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
                  placeholder="Layer count, quantity, target spec…"
                />
              </div>
              <button
                type="submit"
                className="text-mono mt-2 rounded-sm bg-primary px-5 py-3 text-xs uppercase tracking-widest text-primary-foreground transition-all hover:glow-signal"
              >
                Transmit request →
              </button>
            </div>
          </form>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-mono mb-2 block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        className="text-mono w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}
