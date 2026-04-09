import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Shield, AlertTriangle, Radio, Eye, Zap, Lock, Box,
  ArrowRight, CheckCircle2, Server, Wifi, Globe,
} from "lucide-react";
import { Section, SectionHeader, SectionTag } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Defense & HLS | Flycomm — Spectrum Dominance Through Intelligence",
  description: "Real-time spectrum awareness, anomaly detection, and assured connectivity for mission-critical operations.",
};

const capabilities = [
  { icon: Eye, title: "Spectrum Awareness", desc: "Real-time monitoring of the RF environment. Detect, locate, and characterize emissions across the spectrum." },
  { icon: AlertTriangle, title: "Anomaly Detection", desc: "AI-powered detection of unusual spectrum activity, interference patterns, and potential threats to connectivity." },
  { icon: Zap, title: "Rapid Deployment", desc: "Field-deployable solution for expeditionary operations. Operational within hours, not days." },
  { icon: Radio, title: "Contested Environments", desc: "Maintain situational awareness in GNSS-denied and communications-degraded environments." },
  { icon: Box, title: "Digital Twin", desc: "3D visualization of the RF landscape overlaid on terrain. Plan, simulate, and wargame scenarios before deployment." },
  { icon: Lock, title: "Secure C2", desc: "FlycommC2 provides encrypted command and control. Role-based access, audit logging, and compliance reporting." },
];

const useCases = [
  { title: "Perimeter Protection", desc: "Monitor RF environment around military bases, government buildings, and sensitive facilities. Detect unauthorized transmissions and interference." },
  { title: "Force Protection", desc: "Real-time RF intelligence for deployed forces. Identify electronic warfare threats and communication vulnerabilities in the field." },
  { title: "Critical Infrastructure", desc: "Protect power grids, water systems, transportation hubs from electronic threats and intentional interference.", id: "ci" },
  { title: "Border Security", desc: "Monitor cross-border RF activity, detect unauthorized communication patterns, and support intelligence operations." },
];

const deployments = [
  { icon: Globe, label: "Cloud", desc: "Secure cloud with SOC 2 compliance" },
  { icon: Server, label: "On-Premise", desc: "Deploy within your secure enclave" },
  { icon: Wifi, label: "Edge", desc: "Tactical edge computing for field ops" },
  { icon: Shield, label: "Hybrid", desc: "Cloud + edge for global operations" },
];

export default function DefensePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-gradient-to-br from-danger-dim/50 via-transparent to-brand-bg/30" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-center">
            <div className="max-w-2xl stagger">
              <div className="inline-flex items-center gap-2 rounded-full bg-danger-dim border border-danger/20 px-3.5 py-1.5 text-sm text-danger mb-6">
                <Shield className="h-4 w-4" />
                Defense & Homeland Security
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] font-[family-name:var(--font-space-grotesk)] mb-6">
                Spectrum Dominance Through{" "}
                <span className="text-danger">Intelligence</span>
              </h1>

              <p className="text-lg text-text-secondary leading-relaxed mb-4">
                Real-time spectrum awareness, coverage intelligence, and anomaly detection for mission-critical operations.
                Maintain assured connectivity even in contested and GNSS-denied environments.
              </p>

              <p className="text-sm text-text-muted mb-8">
                Enterprise-grade security &middot; On-premise deployment available &middot; SOC 2 compliant
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="btn-primary">
                  Request Classified Briefing <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="#capabilities" className="btn-secondary">
                  View Capabilities
                </Link>
              </div>
            </div>

            {/* Hero image */}
            <div className="hidden lg:flex justify-center">
              <div className="w-72 h-72 rounded-2xl overflow-hidden border border-border glow">
                <img src="/marketimg/Defense.png" alt="Defense & HLS" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <Section id="capabilities" bg="elevated">
        <SectionHeader
          tag="Core Capabilities"
          title="Purpose-Built for Defense & Intelligence Operations"
          description="Assured connectivity and spectrum awareness for the most demanding operational environments."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger">
          {capabilities.map((c) => (
            <div key={c.title} className="card-static p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-danger-dim border border-danger/15 mb-4">
                <c.icon className="h-5 w-5 text-danger" />
              </div>
              <h3 className="text-base font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">{c.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FlycommC2 Feature Highlight */}
      <Section bg="grid">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <SectionTag>FlycommC2 — Spectral Awareness Platform</SectionTag>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-5">
              Real-Time Threat Detection & Classification
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              FlycommC2 operates in dual modes — SDK for broad device-based collection, and RSU for direct spectral analysis via Remote Sensing Units. Threats are classified across four severity tiers with automated escalation.
            </p>
            <div className="space-y-3">
              {[
                "Signal quality monitoring (RSRP, SNR, Timing Advance)",
                "2G/3G downgrade attack detection",
                "Rogue base station & IMSI catcher identification",
                "PLMN anomaly detection — unexpected operator networks",
                "Geographic & temporal threat analysis with interactive mapping",
                "Progressive anomaly accumulation with deduplication",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                  <span className="text-sm text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            {/* Severity tiers visual */}
            <div className="space-y-3">
              {[
                { level: "CRITICAL", color: "bg-red-500", desc: "Immediate response — rogue base station, active jamming" },
                { level: "HIGH", color: "bg-orange-500", desc: "RAT degradation attacks, unexpected frequency shifts" },
                { level: "MEDIUM", color: "bg-yellow-500", desc: "PLMN anomalies, unusual cell identity changes" },
                { level: "LOW", color: "bg-blue-500", desc: "Signal quality degradation, coverage fluctuations" },
              ].map((tier) => (
                <div key={tier.level} className="card-static p-4 flex items-center gap-4">
                  <span className={`h-3 w-3 rounded-full ${tier.color} shrink-0`} />
                  <div>
                    <span className="text-xs font-bold tracking-wider uppercase text-text">{tier.level}</span>
                    <p className="text-xs text-text-muted mt-0.5">{tier.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Use Cases */}
      <Section bg="gradient">
        <SectionHeader tag="Operational Scenarios" title="Protecting What Matters Most" />
        <div className="grid gap-6 md:grid-cols-2">
          {useCases.map((uc) => (
            <div key={uc.title} id={uc.id} className="card-static p-7">
              <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">{uc.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Deployment Options */}
      <Section bg="elevated">
        <SectionHeader
          tag="Flexible Deployment"
          title="Deploy Where You Need It, How You Need It"
          description="From secure cloud to tactical edge — deployment options for every classification level."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deployments.map((d) => (
            <div key={d.label} className="card-static p-6 text-center">
              <d.icon className="h-8 w-8 text-brand mx-auto mb-3" />
              <h3 className="text-base font-semibold mb-1 font-[family-name:var(--font-space-grotesk)]">{d.label}</h3>
              <p className="text-sm text-text-secondary">{d.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Flycomm */}
      <Section bg="grid">
        <div className="max-w-3xl mx-auto">
          <SectionHeader tag="Why Flycomm" title="Built for Classified Environments" />
          <div className="space-y-4">
            {[
              "Air-gapped and classified network compatible",
              "NATO-compatible data formats and integration APIs",
              "Role-based access control with full audit trail",
              "On-premise or sovereign cloud deployment",
              "Real-time multi-sensor fusion from heterogeneous sources",
              "Rapid field deployment — operational in hours, not days",
              "SDK + RSU dual-mode collection architecture",
              "White-label and multi-tenant support",
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
