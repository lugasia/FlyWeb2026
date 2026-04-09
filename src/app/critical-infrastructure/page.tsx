import { Metadata } from "next";
import Link from "next/link";
import {
  Factory, Shield, Wifi, Radio, Zap, Server,
  ArrowRight, CheckCircle2, AlertTriangle, Eye,
} from "lucide-react";
import { Section, SectionHeader, SectionTag } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Critical Infrastructure | Flycomm — Ensure Uninterrupted Connectivity",
  description: "AI-driven network intelligence for ports, airports, utilities, and logistics — ensuring reliable communications for mission-critical systems.",
};

const pillars = [
  { icon: Eye, title: "Real-Time Visibility & Control", desc: "Continuous monitoring of network performance across your entire infrastructure footprint." },
  { icon: Shield, title: "Mission-Critical Reliability", desc: "Guarantee the reliable communications vital for safety systems and emergency response." },
  { icon: Zap, title: "Future-Proof & Scalable", desc: "Scale your infrastructure with 5G-ready network planning and IoT device support." },
  { icon: AlertTriangle, title: "Proactive Problem Solving", desc: "Identify and address potential connectivity issues before they impact operations." },
];

const features = [
  {
    icon: Radio,
    title: "Network Coverage Analysis",
    desc: "Monitor and analyze coverage quality across vital infrastructure networks. Identify potential dead zones before they become operational blind spots.",
    details: ["Multi-environment mapping", "Dead zone detection", "Coverage quality scoring"],
  },
  {
    icon: AlertTriangle,
    title: "Performance Monitoring",
    desc: "Real-time tracking of network reliability with instant alerts for connectivity issues. Never be caught off guard by a communications failure.",
    details: ["Real-time alerts", "Trend analysis", "SLA compliance"],
  },
  {
    icon: Shield,
    title: "Emergency Response Integration",
    desc: "Ensure seamless communications for critical response systems and safety operations. Verify first-responder network coverage across your facilities.",
    details: ["Safety system verification", "Response protocol mapping", "Redundancy analysis"],
  },
  {
    icon: Wifi,
    title: "Multi-Environment Coverage",
    desc: "Optimize connectivity across outdoor, indoor, and underground infrastructure areas. One platform for every environment in your facility.",
    details: ["Indoor/outdoor mapping", "Underground coverage", "Aerial monitoring"],
  },
  {
    icon: Eye,
    title: "Carrier Performance Analysis",
    desc: "Compare and evaluate network providers to maintain consistent coverage quality. Hold carriers accountable with objective, independent data.",
    details: ["Multi-carrier comparison", "Performance benchmarks", "Contract compliance"],
  },
  {
    icon: Server,
    title: "Predictive Maintenance",
    desc: "AI-powered prediction of connectivity issues before they impact operations. Move from reactive firefighting to proactive prevention.",
    details: ["Anomaly detection", "Failure prediction", "Maintenance scheduling"],
  },
];

const stakeholders = [
  { role: "Infrastructure Operations Managers", desc: "Monitor and maintain reliable connectivity across the entire infrastructure network for optimal operational safety." },
  { role: "Network Planning Teams", desc: "Leverage AI-driven analytics to identify coverage gaps and strategically plan infrastructure improvements." },
  { role: "Safety & Security Officers", desc: "Ensure consistent communications coverage for critical safety systems and emergency response protocols." },
];

export default function CriticalInfrastructurePage() {
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
                <Factory className="h-4 w-4" />
                Critical Infrastructure
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] font-[family-name:var(--font-space-grotesk)] mb-6">
                Ensure Uninterrupted{" "}
                <span className="text-accent">Connectivity &amp; Safety</span>
              </h1>

              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                Our AI-driven platform empowers critical infrastructure to eliminate network challenges,
                achieve unparalleled operational efficiency, and guarantee the reliable communications
                vital for your mission-critical systems.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="btn-primary">
                  Request Assessment <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="#capabilities" className="btn-secondary">
                  View Capabilities
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="w-72 h-72 rounded-2xl overflow-hidden border border-border glow">
                <img src="/marketimg/Regulators.png" alt="Critical Infrastructure" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <Section bg="elevated">
        <SectionHeader
          tag="Core Pillars"
          title="Optimize Network Performance & Enhance Safety"
          description="Data-driven insights that enable proactive maintenance, strategic planning, and reliable communications."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 stagger">
          {pillars.map((p) => (
            <div key={p.title} className="card-static p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 border border-accent/15 mx-auto mb-4">
                <p.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-sm font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">{p.title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Stakeholders */}
      <Section bg="grid">
        <SectionHeader
          tag="Who Benefits"
          title="Increase Operational Efficiency While Enhancing Safety"
          description="Our platform delivers actionable insights for key stakeholders."
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
      <Section id="capabilities" bg="elevated">
        <SectionHeader tag="Capabilities" title="Comprehensive Network Management Solution" />
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="card-static p-7">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 border border-accent/15">
                  <f.icon className="h-5 w-5 text-accent" />
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
          <SectionHeader tag="The Infrastructure Advantage" title="Maximize Critical Infrastructure Performance" />
          <div className="space-y-4">
            {[
              "Smart infrastructure planning — data-driven deployment to optimize coverage across expanding networks",
              "Predictive maintenance — identify and address connectivity issues before they impact operations",
              "Safety system enhancement — boost reliability of emergency communications and critical response systems",
              "Cost optimization — reduce operational costs through optimized network deployment and management",
              "Future-proof solutions — scale with 5G-ready network planning and IoT device support",
              "Multi-environment coverage — outdoor, indoor, and underground in one platform",
              "Zero core integration — no network changes, no downtime",
              "Deploy in under one hour",
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
