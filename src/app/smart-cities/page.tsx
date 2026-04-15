import { Metadata } from "next";
import Link from "next/link";
import {
  Landmark, Wifi, MapPin, BarChart3, Users, Cpu,
  ArrowRight, CheckCircle2, Globe, Search,
} from "lucide-react";
import { Section, SectionHeader, SectionTag } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Connectivity Intelligence for Smart Cities | Optimize Urban Networks in Real Time",
  description:
    "Power smarter cities with real-time connectivity insights. Monitor coverage, optimize urban infrastructure, and support IoT, mobility, and public services with AI-driven network intelligence.",
  alternates: { canonical: "/smart-cities" },
  openGraph: {
    title: "Connectivity Intelligence for Smart Cities | Optimize Urban Networks in Real Time",
    description:
      "Power smarter cities with real-time connectivity insights. Monitor coverage, optimize urban infrastructure, and support IoT, mobility, and public services with AI-driven network intelligence.",
    url: "/smart-cities",
  },
};

const capabilities = [
  { icon: MapPin, title: "City-Wide Coverage Map", desc: "Visualize cellular coverage across every neighborhood, building, and transit route. Identify connectivity deserts and prioritize investments." },
  { icon: Cpu, title: "IoT Readiness Assessment", desc: "Assess network capacity for smart infrastructure — traffic sensors, environmental monitors, smart lighting, and connected vehicles." },
  { icon: Users, title: "Citizen Connectivity Portal", desc: "Measure and report on the digital divide. Citizens check which provider works best at their address with real, independent data." },
  { icon: BarChart3, title: "MNO Accountability", desc: "Compare coverage across operators with objective data. Hold providers accountable to coverage obligations and SLAs." },
  { icon: Wifi, title: "Public WiFi & DAS Planning", desc: "Plan and optimize public WiFi, DAS, and small cell deployments in transit hubs, parks, and high-traffic public spaces." },
  { icon: Globe, title: "Open Data Portal", desc: "Share anonymized coverage intelligence with citizens, businesses, and urban planners through customizable dashboards and APIs." },
];

const scenarios = [
  { title: "Transportation & Transit", desc: "Ensure seamless connectivity along bus routes, metro lines, and highways. Enable real-time passenger information and connected vehicle infrastructure." },
  { title: "Emergency Services", desc: "Verify first-responder network coverage across the city. Identify dead zones that could impact public safety communications." },
  { title: "Economic Development", desc: "Attract businesses and residents with verified connectivity data. Demonstrate broadband availability for commercial districts." },
  { title: "Environmental Monitoring", desc: "Validate network capacity for sensor networks — air quality, noise, water level, and weather monitoring across urban areas." },
];

const metrics = [
  { value: "35%", label: "Faster gap resolution" },
  { value: "3x", label: "MNO accountability" },
  { value: "90%", label: "Citizen satisfaction" },
  { value: "15%", label: "Coverage improvement" },
];

export default function SmartCitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-brand-bg/30" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-center">
            <div className="max-w-2xl stagger">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-3.5 py-1.5 text-sm text-accent mb-6">
                <Landmark className="h-4 w-4" />
                Smart Cities & Municipalities
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] font-[family-name:var(--font-space-grotesk)] mb-6">
                Build a <span className="text-accent">Connected City</span>
              </h1>

              <p className="text-lg text-text-secondary leading-relaxed mb-4">
                Monitor citywide coverage, collaborate with mobile operators to close gaps,
                and give citizens transparency into which provider works best at their address.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="#contact" className="btn-primary">
                  Request Municipal Demo <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="#capabilities" className="btn-secondary">
                  Explore Capabilities
                </Link>
              </div>

              {/* Impact stats */}
              <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-2xl md:text-3xl font-bold text-accent font-[family-name:var(--font-space-grotesk)]">{m.value}</div>
                    <div className="text-sm text-text-muted mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero image */}
            <div className="hidden lg:flex justify-center">
              <div className="w-72 h-72 rounded-2xl overflow-hidden border border-border glow">
                <img src="/marketimg/Smart CIties.png" alt="Smart Cities" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <Section id="capabilities" bg="elevated">
        <SectionHeader
          tag="Municipal Intelligence"
          title="Your City's Connectivity Command Center"
          description="See the complete picture of wireless coverage across your city. Make data-driven decisions about infrastructure and MNO partnerships."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger">
          {capabilities.map((c) => (
            <div key={c.title} className="card-static p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 border border-accent/15 mb-4">
                <c.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-base font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">{c.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Citizen Portal Highlight */}
      <Section bg="grid">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <SectionTag>Citizen Transparency</SectionTag>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-5">
              Empower Your Residents
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Citizens deserve to know which mobile provider actually works best at their home, office, or
              anywhere in the city. The Flycomm Citizen Portal gives residents access to real-world coverage
              data — no more relying on operator marketing claims.
            </p>
            <div className="space-y-3">
              {[
                "Address-level coverage results for any location",
                "Side-by-side comparison of every MNO",
                "Independent data — not from operators",
                "Privacy-first: no personal data collected",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mock citizen portal card */}
          <div className="card-static p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-5 pb-4 border-b border-border/50">
              <Search className="h-4 w-4 text-text-muted" />
              <span className="text-sm text-text-muted">123 Main Street, Downtown</span>
            </div>
            <div className="space-y-3">
              {[
                { rank: 1, name: "Operator A", tech: "4G LTE / 5G", signal: "Excellent", badge: "BEST" },
                { rank: 2, name: "Operator B", tech: "4G LTE", signal: "Good", badge: null },
                { rank: 3, name: "Operator C", tech: "4G LTE", signal: "Fair", badge: null },
              ].map((op) => (
                <div key={op.rank} className="flex items-center gap-4 p-3 rounded-lg bg-bg-elevated border border-border/50">
                  <span className="text-xs font-bold text-text-muted">#{op.rank}</span>
                  <div className="flex-1">
                    <span className="text-sm font-semibold">{op.name}</span>
                    <span className="text-xs text-text-muted ml-2">{op.tech}</span>
                  </div>
                  <span className="text-xs text-text-secondary">{op.signal}</span>
                  {op.badge && (
                    <span className="text-[0.625rem] px-2 py-0.5 rounded bg-accent/15 text-accent font-bold">{op.badge}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Scenarios */}
      <Section bg="gradient">
        <SectionHeader tag="Use Cases" title="Smart City Scenarios" />
        <div className="grid gap-6 md:grid-cols-2">
          {scenarios.map((s) => (
            <div key={s.title} className="card-static p-7">
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">{s.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Flycomm */}
      <Section bg="elevated">
        <div className="max-w-3xl mx-auto">
          <SectionHeader tag="Built for City Scale" title="Why Municipalities Choose Flycomm" />
          <div className="space-y-4">
            {[
              "No hardware deployment — leverage existing mobile devices as sensors",
              "Vendor-neutral coverage data independent of operator claims",
              "Privacy-first design with anonymized, aggregated analytics",
              "Open APIs for GIS, planning, and smart city platform integration",
              "Scalable from neighborhoods to entire metropolitan areas",
              "Dashboards for city officials, urban planners, and citizen portals",
              "MNO collaboration tools for gap identification and improvement tracking",
              "Franchise and permit negotiation support with objective data",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <ContactForm />
    </>
  );
}
