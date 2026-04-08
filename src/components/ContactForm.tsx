"use client";
import { Send, Mail, MapPin } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { brand } from "@/lib/content";

export function ContactForm() {
  return (
    <Section id="contact" bg="gradient">
      <SectionHeader
        tag="Get Started"
        title="Ready to See What You're Missing?"
        description="Book a personalized demo and discover your wireless environment like never before."
      />

      <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
        {/* Form */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm text-text-secondary mb-1.5">Full Name</label>
              <input
                id="name" type="text" placeholder="Your name"
                className="w-full rounded-lg border border-border bg-bg-card px-4 py-2.5 text-text placeholder:text-text-muted/50 focus:outline-none focus:border-brand/40 focus:ring-1 focus:ring-brand/20 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-text-secondary mb-1.5">Work Email</label>
              <input
                id="email" type="email" placeholder="you@company.com"
                className="w-full rounded-lg border border-border bg-bg-card px-4 py-2.5 text-text placeholder:text-text-muted/50 focus:outline-none focus:border-brand/40 focus:ring-1 focus:ring-brand/20 transition-colors"
              />
            </div>
          </div>
          <div>
            <label htmlFor="company" className="block text-sm text-text-secondary mb-1.5">Company</label>
            <input
              id="company" type="text" placeholder="Company name"
              className="w-full rounded-lg border border-border bg-bg-card px-4 py-2.5 text-text placeholder:text-text-muted/50 focus:outline-none focus:border-brand/40 focus:ring-1 focus:ring-brand/20 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="market" className="block text-sm text-text-secondary mb-1.5">Market</label>
            <select
              id="market"
              className="w-full rounded-lg border border-border bg-bg-card px-4 py-2.5 text-text focus:outline-none focus:border-brand/40 focus:ring-1 focus:ring-brand/20 transition-colors cursor-pointer"
            >
              <option value="">Select your market</option>
              <option>MNO / Telco</option>
              <option>Towerco / REIT</option>
              <option>Defense & HLS</option>
              <option>Regulator</option>
              <option>Smart City / Municipality</option>
              <option>Critical Infrastructure</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="msg" className="block text-sm text-text-secondary mb-1.5">Message</label>
            <textarea
              id="msg" rows={4} placeholder="Tell us about your needs..."
              className="w-full rounded-lg border border-border bg-bg-card px-4 py-2.5 text-text placeholder:text-text-muted/50 focus:outline-none focus:border-brand/40 focus:ring-1 focus:ring-brand/20 transition-colors resize-none"
            />
          </div>
          <button type="submit" className="btn-primary w-full justify-center">
            <Send className="h-4 w-4" />
            Request Demo
          </button>
        </form>

        {/* What to expect */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="card-static p-7 rounded-2xl">
            <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-5">
              What to Expect
            </h3>
            <ol className="space-y-4">
              {[
                "Personalized demo tailored to your market and use case",
                "Technical deep-dive with our solutions engineering team",
                "Proof-of-concept roadmap and ROI projection",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-bg border border-brand-dim/25 text-xs font-semibold text-brand">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-3 pl-1">
            <div className="flex items-center gap-3 text-sm text-text-secondary">
              <Mail className="h-4 w-4 text-brand" />
              {brand.email}
            </div>
            <div className="flex items-center gap-3 text-sm text-text-secondary">
              <MapPin className="h-4 w-4 text-brand" />
              Global Operations
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
