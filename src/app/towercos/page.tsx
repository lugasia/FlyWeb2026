import { Metadata } from "next";
import Link from "next/link";
import {
  Building, TrendingUp, DollarSign, Map, BarChart3, Users,
  ArrowRight, CheckCircle2, Search, Layers,
} from "lucide-react";
import { Section, SectionHeader, SectionTag } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Towercos & REITs | Flycomm — Maximize Tower Assets",
  description: "AI-powered network intelligence to optimize tower portfolios, enhance tenant satisfaction, and drive new revenue streams.",
};

const metrics = [
  { icon: DollarSign, value: "30%", label: "Lower planning costs", desc: "Replace manual site surveys with data-driven insights for faster, smarter deployment." },
  { icon: BarChart3, value: "3x", label: "Faster site evaluation", desc: "Assess tower site value and coverage gaps in minutes, not weeks." },
  { icon: Users, value: "40%", label: "Better tenant retention", desc: "Proactive coverage monitoring ensures tenant SLAs are consistently met." },
  { icon: TrendingUp, value: "2x", label: "Revenue per tower", desc: "Identify co-location opportunities and demonstrate site value to potential tenants." },
];

const features = [
  {
    icon: Map,
    title: "Coverage Gap Identification",
    desc: "Pinpoint exact locations where coverage falls short. Identify underserved areas that represent new tower site opportunities for portfolio expansion.",
    details: ["Gap priority scoring", "Heat map visualization", "Demand forecasting"],
  },
  {
    icon: Search,
    title: "Site Value Assessment",
    desc: "Evaluate every tower's strategic value with real-world data. Understand which operators need coverage where and craft winning co-location proposals.",
    details: ["Multi-operator analysis", "Revenue potential scoring", "Competitive landscape"],
  },
  {
    icon: Layers,
    title: "Portfolio Analytics",
    desc: "Monitor performance across your entire tower portfolio. Track tenant coverage quality, identify at-risk sites, and prioritize capital allocation.",
    details: ["Portfolio-wide dashboards", "Tenant SLA tracking", "Investment prioritization"],
  },
  {
    icon: BarChart3,
    title: "Data-Driven Proposals",
    desc: "Build compelling, data-backed proposals for operators. Demonstrate coverage gaps that your sites uniquely solve, accelerating lease negotiations.",
    details: ["Operator-specific gap reports", "Site value benchmarks", "ROI projections"],
  },
];

const stakeholders = [
  { role: "Asset Management", desc: "Optimize tower portfolio value with granular coverage analytics and demand-driven site selection." },
  { role: "Business Development", desc: "Craft winning proposals backed by real-world coverage data that demonstrates site value to operators." },
  { role: "Network Operations", desc: "Monitor tenant coverage quality across the portfolio and proactively address performance issues." },
];

export default function TowercosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 gradient-radial-tl" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-center">
            <div className="max-w-2xl stagger">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-bg border border-brand-dim/25 px-3.5 py-1.5 text-sm text-brand mb-6">
                <Building className="h-4 w-4" />
                Towercos &amp; REITs
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] font-[family-name:var(--font-space-grotesk)] mb-6">
                Maximize Tower Assets.{" "}
                <span className="text-brand glow-text">Optimize Performance.</span>
              </h1>

              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                In today&apos;s dynamic telecom landscape, Tower Companies face increasing pressure to optimize assets,
                enhance tenant satisfaction, and drive new revenue streams. Flycomm&apos;s AI-powered Network Intelligence
                Platform delivers granular, actionable insights to maximize infrastructure ROI.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="btn-primary">
                  Request Demo <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="#impact" className="btn-secondary">
                  See the Impact
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="w-72 h-72 rounded-2xl overflow-hidden border border-border glow">
                <img src="/marketimg/Towers.png" alt="Towercos & REITs" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact metrics */}
      <Section id="impact" bg="elevated">
        <SectionHeader
          tag="Measurable Impact"
          title="Increase Profits by Decreasing Costs and Increasing Revenue"
          description="Flycomm's platform delivers clear, data-driven insights for the entire organization."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 stagger">
          {metrics.map((m) => (
            <div key={m.label} className="card-static p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-bg border border-brand-dim/20 mx-auto mb-4">
                <m.icon className="h-6 w-6 text-brand" />
              </div>
              <div className="text-3xl font-bold text-brand font-[family-name:var(--font-space-grotesk)] mb-1">{m.value}</div>
              <h3 className="text-sm font-semibold mb-2">{m.label}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Stakeholders */}
      <Section bg="grid">
        <SectionHeader
          tag="Who Benefits"
          title="Actionable Insights for Key Stakeholders"
          description="Flycomm empowers every team across your tower organization."
        />
        <div className="grid gap-6 md:grid-cols-3 stagger">
          {stakeholders.map((s) => (
            <div key={s.role} className="card-static p-7">
              <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-3">{s.role}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section bg="elevated">
        <SectionHeader tag="Capabilities" title="How Flycomm Helps Towercos" />
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="card-static p-7">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-bg border border-brand-dim/20">
                  <f.icon className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)]">{f.title}</h3>
                </div>
              </div>
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

      {/* Why Flycomm */}
      <Section bg="grid">
        <div className="max-w-3xl mx-auto">
          <SectionHeader tag="The Tower Advantage" title="Why Leading Towercos Choose Flycomm" />
          <div className="space-y-4">
            {[
              "Identify opportunities for new venue sites with coverage gap analysis",
              "Reduce planning costs with powerful data-driven insights",
              "Craft winning proposals — demonstrate a tower's site value for different operators",
              "Optimize network deployment across your entire portfolio",
              "Improve network visibility with real-time monitoring",
              "Enhance tenant satisfaction through proactive SLA management",
              "Zero core integration — no network changes, no downtime",
              "Deploy in under one hour",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-brand mt-0.5 shrink-0" />
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
