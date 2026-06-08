import { Metadata } from "next";
import Link from "next/link";
import {
  MapPin, Hexagon, Layers, Radio, Crosshair, Database, Coins,
  ArrowRight, CheckCircle2, Zap, Globe,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";
import { EarlyBirdForm } from "./EarlyBirdForm";

export const metadata: Metadata = {
  title: "ECGI Coverage API — Cell / Sector Footprint, On Demand | Flycomm",
  description:
    "Productizing RF intelligence. Polygon queries, pay-per-match, GeoJSON + H3 output. Claim 50% early-bird access to the Flycomm ECGI Coverage API — limited-time pricing through 30 June 2026.",
  // Hidden campaign page — must not be indexed or followed.
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  alternates: { canonical: "/iss-europe-2026" },
};

const wildcards = [
  { value: "5B+", label: "Measurements" },
  { value: "50+", label: "Countries" },
  { value: "Zero", label: "Core access · third-party data" },
];

const queryModel = [
  {
    icon: Hexagon,
    title: "Polygon Queries",
    desc: "Submit any AOI as a polygon. Get the ECGI-level coverage footprint — which cells and sectors actually serve that area — back as GeoJSON.",
    details: ["Arbitrary AOI polygons", "ECGI / sector resolution", "GeoJSON + H3 cells"],
  },
  {
    icon: Coins,
    title: "Pay-Per-Match",
    desc: "Prepaid credit model. You're billed per match returned, not per seat. Predictable, batchable, and built for automation.",
    details: ["Prepaid credit balance", "Billed per match", "Batch or real-time"],
  },
  {
    icon: Database,
    title: "External API",
    desc: "A clean external REST API with key-based auth. Drop it into your planning stack, BI, or field tools.",
    details: ["Key-based auth", "REST + JSON", "GeoJSON & H3 output"],
  },
];

const pinValue = [
  "All MNOs at once — every operator's cell and RSRP at the chosen point, side by side.",
  "Per-cell detail — ECGI, PLMN, band, and measured RSRP for each serving cell.",
  "Pin or polyline — query a single coordinate or sample continuously along a route.",
  "Real measurements — grounded in crowd-sourced field data, not propagation models.",
];

const outputFormats = [
  { icon: Globe, title: "GeoJSON", desc: "Standard, map-ready geometry." },
  { icon: Hexagon, title: "H3", desc: "Uber H3 hexagon indexing for fast spatial joins." },
  { icon: Layers, title: "ECGI + PLMN + Band + RSRP", desc: "Per-cell attributes on every match." },
];

const exampleJson = `{
  "query": { "type": "Polygon", "h3_res": 9 },
  "matches": [
    { "ecgi": "234-15-0073261", "plmn": "Telcel", "band": "B28", "rsrp_dbm": -101 },
    { "ecgi": "234-15-0073104", "plmn": "AT&T",   "band": "B2",  "rsrp_dbm": -108 }
  ],
  "credits_charged": 2
}`;

const tiers = [
  {
    name: "Batch Tier ECGI 1K",
    code: "FCF-API-1K",
    list: "$50,000",
    price: "$25,000",
    note: "Annual quota of 1K ECGI matches per batch.",
    popular: false,
  },
  {
    name: "Batch Tier ECGI 5K",
    code: "FCF-API-5K",
    list: "$200,000",
    price: "$100,000",
    note: "Annual quota of 5K ECGI matches per batch.",
    popular: true,
  },
  {
    name: "Batch Tier ECGI 10K",
    code: "FCF-API-10K",
    list: "$320,000",
    price: "$160,000",
    note: "Annual quota of 10K ECGI matches per batch.",
    popular: false,
  },
];

export default function IssEurope2026Page() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative min-h-[75vh] flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 gradient-radial-tl" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-center">
            <div className="max-w-2xl stagger">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 border border-gold-dim px-3.5 py-1.5 text-sm text-gold mb-6">
                <MapPin className="h-4 w-4" />
                Limited-Time Early-Bird · 50% Off Through June 2026
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] font-[family-name:var(--font-space-grotesk)] mb-6">
                ECGI Coverage API —{" "}
                <span className="text-brand glow-text">Cell / Sector Footprint, On Demand</span>
              </h1>

              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                Productizing RF intelligence. Polygon queries. Pay-per-match. Turn Flycomm&apos;s
                real-world measurement layer into a programmable coverage footprint service your
                systems can call directly.
              </p>

              <div className="flex flex-wrap gap-2.5 mb-8">
                {["External API", "Prepaid Credit Model", "GeoJSON + H3 Output"].map((chip) => (
                  <span
                    key={chip}
                    className="text-xs px-3 py-1.5 rounded-md bg-bg-card border border-border text-text-secondary font-[family-name:var(--font-jetbrains-mono)]"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="#early-bird" className="btn-primary">
                  Claim 50% Early-Bird Access <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="#how" className="btn-secondary">
                  How It Works
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-md lg:max-w-none aspect-square rounded-2xl overflow-hidden border border-border glow">
                <img src="/iss/coverage-polygon.png" alt="ECGI coverage footprint — cellular planning polygon" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wild cards — trust metrics */}
      <section className="relative border-y border-border bg-bg-elevated">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border stagger">
            {wildcards.map((w) => (
              <div key={w.label} className="flex flex-col items-center text-center py-4 sm:py-0 px-4">
                <div className="text-3xl md:text-4xl font-bold text-brand glow-text font-[family-name:var(--font-space-grotesk)] mb-1.5">
                  {w.value}
                </div>
                <div className="text-sm text-text-secondary">{w.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. What it is */}
      <Section id="how" bg="elevated">
        <SectionHeader
          tag="The Product"
          title="RF Intelligence, Productized as an API"
          description="Draw a polygon — or drop a pin — and get back every operator's cell/sector footprint and signal level for that exact geometry. No drive tests, no simulations. Real measurements, served as data your platform consumes."
        />
        <div className="grid gap-6 md:grid-cols-3 stagger">
          {queryModel.map((f) => (
            <div key={f.title} className="card p-7">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-bg border border-brand-dim/20 mb-4">
                <f.icon className="h-5 w-5 text-brand" />
              </div>
              <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-3">{f.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">{f.desc}</p>
              <div className="flex flex-wrap gap-2">
                {f.details.map((d) => (
                  <span key={d} className="text-xs px-2.5 py-1 rounded bg-bg-elevated border border-border text-text-muted">{d}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Drop-a-Pin + Polyline */}
      <Section bg="grid">
        <SectionHeader
          tag="Live Query"
          title="Drop a Pin. See Every Operator's RSRP."
          description="Drop a pin or trace a polyline anywhere on the map. Instantly get all MNOs' RSRP per serving cell at that point — ranked, with ECGI, band, and PLMN. The same intelligence behind Flycomm's planning platform, now callable as an API."
        />
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            {pinValue.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                <span className="text-text-secondary leading-relaxed">{item}</span>
              </div>
            ))}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded bg-bg-card border border-border text-text-muted">
                <Crosshair className="h-3.5 w-3.5 text-brand" /> Pin query
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded bg-bg-card border border-border text-text-muted">
                <Radio className="h-3.5 w-3.5 text-brand" /> Polyline sampling
              </span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border glow">
            <img src="/iss/pin-rsrp.png" alt="Drop-a-pin RSRP per serving cell per MNO" className="w-full h-full object-cover" />
          </div>
        </div>
      </Section>

      {/* 4. Output format */}
      <Section bg="elevated">
        <SectionHeader
          tag="Machine-Ready"
          title="Output Built for Machines"
          description="Every match comes back as structured, standards-based data — ready to join, map, and automate against."
        />
        <div className="grid gap-6 md:grid-cols-3 mb-10">
          {outputFormats.map((o) => (
            <div key={o.title} className="card-static p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-bg border border-brand-dim/20 mb-4">
                <o.icon className="h-5 w-5 text-brand" />
              </div>
              <h3 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)] mb-2">{o.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="card-static overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-elevated">
              <span className="h-2.5 w-2.5 rounded-full bg-danger/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
              <span className="ml-2 text-xs text-text-muted font-[family-name:var(--font-jetbrains-mono)]">POST /v1/coverage/query</span>
            </div>
            <pre className="p-5 overflow-x-auto text-sm leading-relaxed font-[family-name:var(--font-jetbrains-mono)] text-text-secondary">
              <code>{exampleJson}</code>
            </pre>
          </div>
        </div>
      </Section>

      {/* 5. Pricing & Early-Bird */}
      <Section id="pricing" bg="grid">
        <SectionHeader
          tag="Limited-Time Offer"
          title="50% Early-Bird — Through June 2026"
          description="Annual batch tiers, priced per ECGI-match volume. Lock in early-bird pricing — 50% off list through 30 June 2026."
        />
        <div className="grid gap-6 md:grid-cols-3 items-stretch max-w-5xl mx-auto">
          {tiers.map((t) => (
            <div
              key={t.code}
              className={`relative flex flex-col p-7 ${
                t.popular ? "card-static border-brand glow-strong" : "card"
              }`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-gold text-bg">
                  Most Popular
                </span>
              )}
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)]">{t.name}</h3>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-gold/10 border border-gold-dim text-gold">50% OFF</span>
              </div>
              <p className="text-xs text-text-muted font-[family-name:var(--font-jetbrains-mono)] mb-5">{t.code}</p>

              <div className="mb-1 text-sm line-through text-text-muted font-[family-name:var(--font-jetbrains-mono)]">
                {t.list} / yr list
              </div>
              <div className="flex items-baseline gap-1.5 mb-4">
                <span className="text-3xl md:text-4xl font-bold text-brand font-[family-name:var(--font-jetbrains-mono)]">{t.price}</span>
                <span className="text-sm text-text-muted">/ yr</span>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mb-6">{t.note}</p>

              <Link
                href="#early-bird"
                className={`mt-auto w-full justify-center ${t.popular ? "btn-primary" : "btn-secondary"}`}
              >
                Claim This Tier <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl mx-auto text-center text-xs text-text-muted leading-relaxed">
          Early-bird pricing is a limited-time offer, valid through 30 June 2026. Prepaid annual
          credits; overage billed per match. Software / API license.
        </p>
      </Section>

      {/* 6. CTA / lead form */}
      <EarlyBirdForm />

      {/* 7. Footer note */}
      <section className="border-t border-border bg-bg-elevated">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-text-muted flex items-center gap-2">
            <Zap className="h-4 w-4 text-brand" />
            Flycomm · ECGI Coverage API · Early-Bird through 30 June 2026
          </p>
          <a
            href="https://flycomm.co"
            className="text-sm text-text-secondary hover:text-brand transition-colors inline-flex items-center gap-1.5"
          >
            Back to flycomm.co <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>
    </>
  );
}
