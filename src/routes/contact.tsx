import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Saunders & Associates" },
      {
        name: "description",
        content:
          "Contact Saunders & Associates in Phoenix, Arizona. Phone (602) 971-9977. Engineering and sales support for crystal test and production systems.",
      },
      { property: "og:title", content: "Contact — Saunders & Associates" },
      {
        property: "og:description",
        content: "Sales and engineering support from S&A in Phoenix, Arizona.",
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
              // get in touch
            </div>
            <h1 className="text-display mt-2 text-5xl font-bold tracking-tight text-primary md:text-6xl">
              Talk to S&amp;A engineering.
            </h1>
            <p className="mt-4 max-w-md text-muted-foreground">
              Whether you need a quote, application support, or service for an installed system —
              our team in Phoenix is here to help.
            </p>

            <dl className="text-mono mt-10 space-y-5 text-sm">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Address
                </dt>
                <dd className="mt-1">
                  Saunders &amp; Associates, LLC<br />
                  2520 East Rose Garden Lane<br />
                  Phoenix, Arizona 85050 USA
                </dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Phone
                </dt>
                <dd className="mt-1 text-primary">(602) 971-9977</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Fax
                </dt>
                <dd className="mt-1">(602) 971-5522</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Hours
                </dt>
                <dd className="mt-1">Mon–Fri · 8:00 AM – 5:00 PM MST</dd>
              </div>
            </dl>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you — an S&A representative will contact you shortly.");
            }}
            className="panel rounded-md p-6 md:p-8"
          >
            <div className="grid gap-4">
              <Field label="Name" name="name" />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" />
              <div>
                <label className="text-mono mb-2 block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Inquiry type
                </label>
                <select className="text-mono w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none">
                  <option>Sales / quote request</option>
                  <option>Technical support</option>
                  <option>Service &amp; calibration</option>
                  <option>Datasheet request</option>
                  <option>General inquiry</option>
                </select>
              </div>
              <div>
                <label className="text-mono mb-2 block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="text-mono w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
                  placeholder="Device type, frequency range, application…"
                />
              </div>
              <button
                type="submit"
                className="text-mono mt-2 rounded-sm bg-primary px-5 py-3 text-xs uppercase tracking-widest text-primary-foreground transition-all hover:glow-signal"
              >
                Send to S&amp;A →
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
