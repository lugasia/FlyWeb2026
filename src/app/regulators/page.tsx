import { Metadata } from "next";
import Link from "next/link";
import {
  Scale, Eye, Shield, Radio, Brain, BarChart3,
  ArrowRight, CheckCircle2, Search, Cpu, Globe, AlertTriangle,
} from "lucide-react";
import { Section, SectionHeader, SectionTag } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Network Visibility for Regulators | Independent Coverage & Performance Insights",
  description:
    "Gain independent, real-world visibility into network performance. Validate coverage, benchmark operators, and support data-driven regulatory decisions with AI-powered insights.",
  alternates: { canonical: "/regulators" },
  openGraph: {
    title: "Network Visibility for Regulators | Independent Coverage & Performance Insights",
    description:
      "Gain independent, real-world visibility into network performance. Validate coverage, benchmark operators, and support data-driven regulatory decisions with AI-powered insights.",
    url: "/regulators",
  },
};

const pillars = [
  {
    title: "Network Transparency & Quality Oversight",
    features: [
      { icon: Eye, title: "100% Independent Network Visibility", desc: "Real-time visibility across all technologies (2G, 3G, 4G, 5G, IoT) for independent benchmarking. No reliance on operator self-reporting." },
      { icon: BarChart3, title: "Quality of Service (QoS) Benchmarking", desc: "Advanced ML models rate every cell site from Excellent to Bad — giving regulators the tools to enforce coverage obligations objectively." },
      { icon: Search, title: "Multi-Environment Insights", desc: "Monitor signal performance in indoor, outdoor, vehicular, and aerial contexts. Understand the real-world experience across every environment." },
    ],
  },
  {
    title: "National Security & Forensic Intelligence",
    features: [
      { icon: AlertTriangle, title: "Rogue Base Station & IMSI-Catcher Detection", desc: "TAC anomaly analytics identify suspicious cells, interception candidates, and spoofing in real-time. Protect citizens and critical communications." },
      { icon: Shield, title: "Border Spillover & Foreign PLMN Monitoring", desc: "Distinguish natural signal spillover from hostile foreign MCC intrusions. Maintain sovereign spectrum control at borders and sensitive areas." },
      { icon: Scale, title: "Intelligence-Grade Forensic Reporting", desc: "Generate bilingual 'Cellular Network Anomaly Reports' for legal and security briefings. Evidence-grade documentation for enforcement actions." },
    ],
  },
  {
    title: "Dynamic Spectrum & Compliance Management",
    features: [
      { icon: Radio, title: "Real-Time Spectrum Mapping", desc: "Live spectrum maps for immediate detection of interference and unauthorized transmissions. See the RF landscape in real-time." },
      { icon: Scale, title: "Automated Policy Enforcement", desc: "Proactively track performance, licensed MCC/MNC usage, and technical standards compliance. Automate the enforcement pipeline." },
      { icon: Cpu, title: "Infrastructure Verification", desc: "Evaluate radio equipment compliance and new deployments against national standards. Verify before you certify." },
    ],
  },
  {
    title: "AI-Powered Planning & Public Engagement",
    features: [
      { icon: Brain, title: "\"What-If\" AI Simulations", desc: "Model the impact of new antenna placements, relocations, or technology rollouts with AI precision. Plan before you build." },
      { icon: BarChart3, title: "CAPEX & OPEX Optimization", desc: "Identify rural/urban coverage gaps for targeted subsidies and efficient policy decisions. Data-driven resource allocation." },
      { icon: Globe, title: "Citizen-Facing \"Best Provider\" iFrame", desc: "Customizable tool for citizens to view a ranked list of best-performing operators in their location. Transparency drives accountability." },
    ],
  },
];

export default function RegulatorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-brand-bg/30" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-center">
            <div className="max-w-2xl stagger">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-bg border border-brand-dim/25 px-3.5 py-1.5 text-sm text-brand mb-6">
                <Scale className="h-4 w-4" />
                Regulators &amp; Government
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] font-[family-name:var(--font-space-grotesk)] mb-6">
                Precision Oversight:{" "}
                <span className="text-brand glow-text">Regulatory Intelligence</span>
              </h1>

              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                Empowering regulators with AI-powered insights for total network transparency,
                spectrum management, and national security. Independent, objective data you can trust.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="btn-primary">
                  Request Briefing <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="#capabilities" className="btn-secondary">
                  View Framework
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="w-72 h-72 rounded-2xl overflow-hidden border border-border glow">
                <img src="/marketimg/Regulators.png" alt="Regulators" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four pillars */}
      {pillars.map((pillar, i) => (
        <Section key={pillar.title} id={i === 0 ? "capabilities" : undefined} bg={i % 2 === 0 ? "elevated" : "grid"}>
          <SectionHeader
            tag={`Pillar ${i + 1}`}
            title={pillar.title}
          />
          <div className="grid gap-8 md:grid-cols-3">
            {pillar.features.map((f) => (
              <div key={f.title} className="card-static p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-bg border border-brand-dim/20 mb-4">
                  <f.icon className="h-5 w-5 text-brand" />
                </div>
                <h3 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)] mb-3">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      ))}

      {/* Why Flycomm */}
      <Section bg="elevated">
        <div className="max-w-3xl mx-auto">
          <SectionHeader tag="The Regulatory Advantage" title="Why Regulators Choose Flycomm" />
          <div className="space-y-4">
            {[
              "100% independent data — no reliance on operator self-reporting",
              "Coverage verification with real-world measurements, not theoretical models",
              "Spectrum compliance monitoring across all licensed bands",
              "Rogue base station and IMSI-catcher detection in real-time",
              "AI-powered \"what-if\" simulations for policy planning",
              "Citizen-facing transparency portals — embeddable iFrame widgets",
              "Intelligence-grade forensic reporting for legal proceedings",
              "Multi-technology: 2G, 3G, 4G, 5G, IoT in a single platform",
              "Deployable in sovereign cloud or on-premise environments",
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
