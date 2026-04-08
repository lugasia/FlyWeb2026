import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Signal, TrendingUp, DollarSign, Map, BarChart3, Users,
  ArrowRight, CheckCircle2, Brain, Eye,
} from "lucide-react";
import { Section, SectionHeader, SectionTag } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "MNO & Telco | Flycomm — Turn Network Data Into Revenue",
  description: "AI-powered coverage analytics, competitive benchmarking, and churn prevention for mobile operators.",
};

const metrics = [
  { icon: DollarSign, value: "40%", label: "Reduction in complaint tickets", desc: "Identify and fix coverage issues before customers complain." },
  { icon: BarChart3, value: "60%", label: "Faster coverage analysis", desc: "Replace expensive drive tests with continuous crowd-sourced monitoring." },
  { icon: Users, value: "25%", label: "Better churn prediction", desc: "Link network quality directly to customer behavior patterns." },
  { icon: TrendingUp, value: "3x", label: "ROI on investments", desc: "Data-driven CAPEX allocation with clear revenue impact projections." },
];

const features = [
  {
    icon: Map,
    title: "Coverage Gap Identification",
    desc: "Pinpoint exact locations where coverage fails with real-world measurements, not theoretical models. See coverage as terrain — signal strength rendered as elevation data.",
    details: ["Heat map visualization", "Contour line mapping", "Gap priority scoring"],
  },
  {
    icon: Eye,
    title: "Competitive Benchmarking",
    desc: "Your competitors' network performance is no longer a black box. Side-by-side comparisons at any location — understand where you're winning and losing customers.",
    details: ["Multi-operator comparison", "Win/loss zone mapping", "Market share correlation"],
  },
  {
    icon: Brain,
    title: "AI-Powered Analytics",
    desc: "Pattern recognition, predictive analytics, and automated insights trained on billions of measurements. Root cause analysis in minutes, not weeks.",
    details: ["Anomaly detection", "Demand forecasting", "Automated optimization"],
  },
  {
    icon: Signal,
    title: "Churn Prevention Engine",
    desc: "Correlate network experience with subscriber behavior. Identify at-risk customers before they leave and trigger proactive remediation campaigns.",
    details: ["At-risk scoring", "Revenue impact per cell", "Campaign tracking"],
  },
];

const beforeAfter = {
  without: [
    "Coverage based on simulations, not reality",
    "Competitor networks are a black box",
    "Churn happens without understanding why",
    "Investment decisions based on gut feeling",
    "Drive tests are expensive and outdated",
  ],
  with: [
    "Real-world measurements from actual devices",
    "Competitive benchmarking at street level",
    "Churn linked to specific coverage issues",
    "ROI-driven investment prioritization",
    "Continuous monitoring at scale",
  ],
};

export default function TelcoPage() {
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
                <Signal className="h-4 w-4" />
                Telecom & Network Operators
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] font-[family-name:var(--font-space-grotesk)] mb-6">
                Turn Network Data Into{" "}
                <span className="text-brand glow-text">Revenue Insight</span>
              </h1>

              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                Identify coverage gaps, benchmark against competitors, and link network quality directly
                to customer churn and revenue impact. Make investment decisions with data, not guesswork.
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
              <div className="w-56 h-56 rounded-2xl bg-bg-card border border-border flex items-center justify-center glow">
                <Image src="/icons/flycomm-icon.png" alt="Flycomm Platform" width={120} height={120} className="opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact metrics */}
      <Section id="impact" bg="elevated">
        <SectionHeader
          tag="Measurable Impact"
          title="Results That Speak for Themselves"
          description="Flycomm customers consistently achieve significant improvements in network performance and customer satisfaction."
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

      {/* Before / After */}
      <Section bg="grid">
        <SectionHeader
          tag="The Transformation"
          title="From Blind to Revealed"
          description="Traditional tools leave you guessing. Flycomm shows you the complete picture."
        />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card-static p-7">
            <h3 className="text-base font-semibold text-text-muted mb-5 uppercase tracking-wider text-xs">Without Flycomm</h3>
            <div className="space-y-3">
              {beforeAfter.without.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-text-muted mt-2 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="card-static p-7 border-brand/20">
            <h3 className="text-base font-semibold text-brand mb-5 uppercase tracking-wider text-xs">With Flycomm</h3>
            <div className="space-y-3">
              {beforeAfter.with.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                  <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Features deep-dive */}
      <Section bg="elevated">
        <SectionHeader tag="Capabilities" title="How Flycomm Helps" />
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
          <SectionHeader tag="The Operator Advantage" title="Why Leading MNOs Choose Flycomm" />
          <div className="space-y-4">
            {[
              "Replace expensive drive tests with continuous crowd-sourced monitoring",
              "Unified platform for planning, monitoring, and optimization",
              "Integrate with existing OSS/BSS and network management systems",
              "Multi-technology: 2G, 3G, 4G LTE, 5G NR",
              "White-label and API options for custom integrations",
              "Proven ROI within the first 6 months of deployment",
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
