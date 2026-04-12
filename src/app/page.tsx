import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, ChevronRight, ExternalLink } from "lucide-react";
import { Section, SectionHeader, SectionTag } from "@/components/Section";
import { Icon } from "@/components/Icons";
import { HeroVisual } from "@/components/HeroVisual";
import { ContactForm } from "@/components/ContactForm";
import {
  brand,
  heroStats,
  products,
  markets,
  platformStack,
  differentiators,
  trustedByLogos,
  blogPosts,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* =========== HERO =========== */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Bg layers */}
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 gradient-radial-tl" />
        <div className="absolute inset-0 gradient-radial-br" />

        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:px-8 py-20 lg:grid-cols-[1fr_420px] items-center relative z-10 w-full">
          <div className="max-w-2xl stagger">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-bg border border-brand-dim/25 px-3.5 py-1.5 text-sm text-brand">
              <span className="h-2 w-2 rounded-full bg-brand animate-pulse-soft" />
              {brand.subtitle}
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight leading-[1.08] font-[family-name:var(--font-space-grotesk)]">
              See What Others{" "}
              <span className="text-brand glow-text">Can&apos;t</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl">
              {brand.description}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/#contact" className="btn-primary">
                Book a Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/#platform" className="btn-secondary">
                <Play className="h-4 w-4 text-brand" /> Explore Platform
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl font-bold text-brand font-[family-name:var(--font-space-grotesk)]">
                    {s.value}
                  </div>
                  <div className="text-sm text-text-muted mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div className="hidden lg:flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <HeroVisual />
          </div>
        </div>

        {/* Trusted by logo carousel */}
        <div className="absolute bottom-0 inset-x-0 border-t border-border/40 bg-bg-elevated/80 backdrop-blur-lg">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 py-4 flex items-center gap-8 overflow-hidden">
            <span className="text-[0.65rem] text-text-muted uppercase tracking-[0.2em] whitespace-nowrap font-medium">Trusted&nbsp;by</span>
            <div className="flex-1 overflow-hidden relative">
              <div className="flex items-center gap-14 animate-[scroll-left_30s_linear_infinite]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {[...trustedByLogos, ...trustedByLogos].map((logo, i) => (
                  <img
                    key={`${logo.name}-${i}`}
                    src={logo.src}
                    alt={logo.name}
                    className="h-7 w-auto object-contain shrink-0 brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========== 3 PLATFORMS =========== */}
      <Section id="platform" bg="elevated">
        <SectionHeader
          tag="One Platform. Three Domains."
          title="Purpose-Built Intelligence for Your Wireless Environment"
          description="From urban networks to contested terrain — each product is deployable standalone or as a unified suite."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {products.slice(0, 3).map((p) => (
            <Link
              key={p.id}
              href={`/solutions#${p.id}`}
              className="group card p-0 overflow-hidden flex flex-col cursor-pointer"
            >
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-5">
                  <Image
                    src={p.icon}
                    alt={p.title}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-lg object-contain brightness-0 invert"
                  />
                  <div>
                    <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)]">
                      {p.title}
                    </h3>
                    <span className="text-xs text-text-muted">{p.badge}</span>
                  </div>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
                  {p.description}
                </p>
                {p.id === "indoor" && p.platformUrl && (
                  <span className="inline-flex items-center gap-1.5 text-sm text-brand font-medium group-hover:gap-2.5 transition-all">
                    Landing Page <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                )}
              </div>
              {p.screenshot && (
                <div className="relative border-t border-white/10 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.screenshot}
                    alt={`${p.title} dashboard`}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              )}
            </Link>
          ))}
        </div>
      </Section>

      {/* =========== PLATFORM STACK =========== */}
      <Section bg="grid">
        <SectionHeader
          tag="How It Works"
          title="From Real-World Data to Real Decisions"
          description="Four layers of intelligence working together to transform how you see your wireless environment."
        />

        <div className="grid gap-4 md:grid-cols-4 stagger">
          {platformStack.map((layer, i) => (
            <div key={layer.layer} className="card-static p-6 relative overflow-hidden">
              <span className="absolute top-3 right-4 text-[4rem] font-bold text-border/30 leading-none font-[family-name:var(--font-jetbrains-mono)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative z-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-bg border border-brand-dim/20 mb-4">
                  <Icon name={layer.icon} className="h-5 w-5 text-brand" />
                </div>
                <h3 className="text-base font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                  {layer.layer}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">{layer.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted">
          <span className="text-xs uppercase tracking-wider">Data from:</span>
          {["Device", "Vehicle", "Drone", "Sensor", "Crowd-Sourced"].map((s) => (
            <span key={s} className="px-3 py-1 rounded-full bg-bg-card border border-border text-text-secondary text-xs">
              {s}
            </span>
          ))}
        </div>
      </Section>

      {/* =========== DIFFERENTIATORS =========== */}
      <Section bg="gradient">
        <SectionHeader
          tag="Why Flycomm"
          title="The Accuracy of a Drive Test. The Scale of Simulation. The Intelligence of AI."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 stagger">
          {differentiators.map((d) => (
            <div key={d.title} className="card-static p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-dim mb-4">
                <Icon name={d.icon} className="h-5 w-5 text-gold" />
              </div>
              <h3 className="text-base font-semibold mb-1 font-[family-name:var(--font-space-grotesk)]">{d.title}</h3>
              <p className="text-xs text-brand mb-2">{d.subtitle}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* =========== SOLUTIONS =========== */}
      <Section id="solutions" bg="elevated">
        <SectionHeader
          tag="Solutions"
          title="Built for Every Challenge"
          description="Modular solutions that scale with your organization."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {products.map((p) => (
            <Link
              key={p.id}
              href={`/solutions#${p.id}`}
              className="group card p-7 cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <Image src={p.icon} alt="" width={36} height={36} className="h-9 w-9 rounded-lg object-contain mt-0.5 brightness-0 invert" />
                <div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)]">{p.title}</h3>
                  <p className="text-xs text-text-muted">{p.badge}</p>
                </div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-5">{p.headline}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.features.slice(0, 4).map((f) => (
                  <span key={f} className="text-xs px-2 py-0.5 rounded bg-bg-elevated border border-border text-text-muted">
                    {f}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm text-brand font-medium group-hover:gap-2.5 transition-all">
                Learn more <ChevronRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* =========== MARKETS =========== */}
      <Section id="markets" bg="grid">
        <SectionHeader
          tag="Markets"
          title="Purpose-Built for Your Industry"
          description="Flycomm serves the full spectrum of wireless stakeholders."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 stagger">
          {markets.map((m) => (
            <Link
              key={m.id}
              href={m.href}
              className="group card p-6 flex gap-4 cursor-pointer"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-bg border border-brand-dim/20">
                <Icon name={m.icon} className="h-5 w-5 text-brand" />
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1 font-[family-name:var(--font-space-grotesk)]">{m.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-3">{m.shortDesc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {m.tags.map((t) => (
                    <span key={t} className="text-[0.6875rem] px-2 py-0.5 rounded bg-bg-elevated border border-border text-text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* =========== ROI CTA =========== */}
      <Section bg="elevated">
        <div className="relative text-center p-10 md:p-16 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-bg-card rounded-2xl border border-border" />
          <div className="absolute inset-0 gradient-radial-center" />

          <div className="relative z-10">
            <SectionTag>Get Started</SectionTag>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
              Fast Deployment. <span className="text-brand">Real Results.</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed mb-8">
              No core integration required. No network changes. Upload your data and start
              seeing actionable insights — designed for rapid time-to-value.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact" className="btn-primary">
                Book a Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/solutions" className="btn-secondary">
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* =========== BLOG =========== */}
      <Section id="blog">
        <SectionHeader
          tag="Insights"
          title="From the Flycomm Blog"
          description="Industry analysis, product updates, and wireless intelligence thought leadership."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group card p-0 overflow-hidden flex flex-col cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-brand/90 text-white rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-text-muted mb-3">
                  <span>{post.author}</span>
                  <span className="opacity-40">·</span>
                  <time>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h3 className="text-base font-semibold font-[family-name:var(--font-space-grotesk)] mb-2 leading-snug group-hover:text-brand transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm text-brand font-medium mt-4 group-hover:gap-2.5 transition-all">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/blog" className="btn-secondary">
            View All Posts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* =========== CONTACT =========== */}
      <ContactForm />
    </>
  );
}
