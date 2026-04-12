import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { Section, SectionHeader, SectionTag } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { products } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions | Flycomm",
  description: "Explore Flycomm's modular solutions: Cloud Platform, FlycommC2 SOC, Indoor Intelligence, and Churn Prevention.",
};

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-grid overflow-hidden">
        <div className="absolute inset-0 gradient-radial-tl" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
          <div className="max-w-3xl stagger">
            <SectionTag>Solutions</SectionTag>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-[family-name:var(--font-space-grotesk)] mb-5">
              Modular Intelligence for Every Challenge
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Each module deploys standalone or combines into a unified suite. Zero core integration — operational in under an hour.
            </p>
          </div>
        </div>
      </section>

      {/* Product deep-dives */}
      {products.map((product, idx) => (
        <Section key={product.id} id={product.id} bg={idx % 2 === 0 ? "elevated" : "grid"}>
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className={idx % 2 !== 0 ? "md:order-2" : ""}>
              <div className="flex items-center gap-4 mb-6">
                <Image src={product.icon} alt="" width={52} height={52} className="h-13 w-13 rounded-xl object-contain brightness-0 invert" />
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)]">
                    {product.title}
                  </h2>
                  <span className="text-sm text-text-muted">{product.badge}</span>
                </div>
              </div>

              <p className="text-xl text-brand font-medium mb-4 font-[family-name:var(--font-space-grotesk)]">
                {product.headline}
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {product.id === "indoor" && product.platformUrl && (
                  <a href={product.platformUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                    See our Platform <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
                <Link href="/#contact" className="btn-secondary text-sm">
                  Request Demo <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className={idx % 2 !== 0 ? "md:order-1" : ""}>
              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-bg-card border border-border/50 text-sm text-text-secondary">
                    <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                    {f}
                  </div>
                ))}
              </div>

              {/* Stats row */}
              {product.stats && (
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {product.stats.map((s) => (
                    <div key={s.label} className="text-center p-3 rounded-lg bg-bg-elevated border border-border/30">
                      <div className="text-xl font-bold text-brand font-[family-name:var(--font-space-grotesk)]">{s.value}</div>
                      <div className="text-xs text-text-muted mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section>
        <div className="relative text-center p-12 md:p-16 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-bg-card rounded-2xl border border-border" />
          <div className="absolute inset-0 gradient-radial-center" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
              Not Sure Which Solution Fits?
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
              Our team will help you identify the right combination of modules for your operational needs.
            </p>
            <Link href="/#contact" className="btn-primary">
              Talk to Solutions Team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <ContactForm />
    </>
  );
}
