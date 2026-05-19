import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Gauge, Signal, MapPin, Activity } from "lucide-react";
import { Section, SectionTag } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Internet Speed Test by Flycomm — Mobile App",
  description:
    "The Flycomm Networks mobile app — measure live cellular and Wi-Fi performance, run download / upload / ping speed tests, and see detailed signal data on Android.",
  alternates: { canonical: "/app" },
  openGraph: {
    title: "Internet Speed Test by Flycomm — Mobile App",
    description:
      "Measure live cellular and Wi-Fi performance, run speed tests, and see detailed signal data on Android.",
    url: "/app",
  },
};

const playStoreUrl = "https://play.google.com/store/search?q=flycomm&c=apps";

const features = [
  {
    icon: Gauge,
    title: "Speed Test",
    description:
      "Measure download, upload, and ping for cellular or Wi-Fi in seconds — results you can act on.",
  },
  {
    icon: Signal,
    title: "Live Network Performance",
    description:
      "Real-time signal strength (dBm) and quality gauges that reveal where coverage actually breaks down.",
  },
  {
    icon: MapPin,
    title: "Map View",
    description:
      "Visualize where you measured and how performance changes across locations as you move.",
  },
  {
    icon: Activity,
    title: "Pro Diagnostics",
    description:
      "Detailed view of serving and neighbor cells, technology, band, MCC/MNC, and device-side parameters.",
  },
];

export default function AppPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "MobileApplication",
          name: "Internet Speed Test by Flycomm",
          operatingSystem: "ANDROID",
          applicationCategory: "UtilitiesApplication",
          url: `${SITE_URL}/app`,
          downloadUrl: playStoreUrl,
          publisher: {
            "@type": "Organization",
            name: "Flycomm Networks",
            url: SITE_URL,
          },
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
        }}
      />

      {/* Hero */}
      <section className="relative pt-28 pb-12 bg-grid overflow-hidden">
        <div className="absolute inset-0 gradient-radial-tl" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="stagger">
              <SectionTag>Mobile App</SectionTag>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-[family-name:var(--font-space-grotesk)] mb-5">
                Internet Speed Test by Flycomm
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                See how your network really performs. Run cellular and Wi-Fi speed tests,
                track live signal quality, and inspect detailed network parameters — all
                from your Android phone.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Built by Flycomm Networks, the same team behind our AI-powered wireless
                intelligence platform. The app feeds real-world measurements that help
                operators, integrators, and enterprises see what others can&apos;t.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  Get the App on Google Play <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <Link href="/#contact" className="btn-secondary text-sm">
                  Talk to Sales
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-border/60 bg-bg-card p-4 md:p-6">
                <Image
                  src="/screenshots/flycomm-app.png"
                  alt="Flycomm Networks Android app — Live Network Performance, Speed Test, and Pro views"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <Section bg="elevated">
        <div className="mb-10 max-w-3xl">
          <SectionTag>What it does</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] font-[family-name:var(--font-space-grotesk)]">
            Four views, one source of truth for your network
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="p-5 rounded-xl bg-bg-card border border-border/50"
              >
                <div className="h-10 w-10 rounded-lg bg-brand-bg border border-brand-dim/25 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-brand" />
                </div>
                <h3 className="font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                  {f.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Why */}
      <Section>
        <div className="grid gap-12 md:grid-cols-2 items-start">
          <div>
            <SectionTag>Why install</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] font-[family-name:var(--font-space-grotesk)] mb-5">
              Real measurements beat tower-side assumptions
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Coverage maps published by operators describe predicted signal — not what your
              device experiences in a basement, on a balcony, or driving between cells.
              The Flycomm app captures the ground-truth view, with the same measurement
              quality our enterprise customers rely on.
            </p>
          </div>

          <ul className="space-y-3">
            {[
              "Free for everyone — no account required to run a speed test.",
              "Works on cellular and Wi-Fi.",
              "Background-aware location and signal measurement, with permission controls in your device settings.",
              "Detailed Pro view with serving/neighbor cells, band, and provider info.",
              "Data feeds Flycomm's wireless intelligence — measurements contribute to the broader picture of network performance.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 p-3.5 rounded-xl bg-bg-card border border-border/50 text-sm text-text-secondary"
              >
                <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* CTA + legal */}
      <Section bg="grid">
        <div className="relative text-center p-10 md:p-14 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-bg-card rounded-2xl border border-border" />
          <div className="absolute inset-0 gradient-radial-center" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
              Install on Android
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Free on the Google Play Store. By installing, you agree to the App&apos;s
              Privacy Policy and Terms and Conditions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
                className="inline-block transition-opacity hover:opacity-90"
              >
                <Image
                  src="/screenshots/GooglePlay.png"
                  alt="Get it on Google Play"
                  width={646}
                  height={200}
                  className="h-14 w-auto"
                />
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              <Link
                href="/app/privacy-policy"
                className="text-brand hover:text-brand-light underline underline-offset-2"
              >
                Privacy Policy
              </Link>
              <Link
                href="/app/terms-and-conditions"
                className="text-brand hover:text-brand-light underline underline-offset-2"
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <ContactForm />
    </>
  );
}
