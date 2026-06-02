"use client";
import { useState, FormEvent } from "react";
import { Send, Mail, MapPin, MessageCircle, CheckCircle, AlertCircle } from "lucide-react";
import { Section, SectionHeader } from "@/components/Section";
import { brand } from "@/lib/content";

type Status = "idle" | "sending" | "success" | "error";

export function EarlyBirdForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      market: (form.elements.namedItem("market") as HTMLSelectElement).value,
      message: (form.elements.namedItem("msg") as HTMLTextAreaElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      source: "ISS Europe 2026",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to submit");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <Section id="early-bird" bg="gradient">
      <SectionHeader
        tag="ISS Europe 2026 Exclusive"
        title="Claim Your 50% Early-Bird Access"
        description="Reserve your ECGI batch tier at the booth. Lock in early-bird pricing — 50% off list for ISS World Europe 2026 attendees."
      />

      <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
        {/* Form */}
        {status === "success" ? (
          <div className="card p-10 flex flex-col items-center justify-center text-center">
            <CheckCircle className="h-14 w-14 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] mb-2">
              You&apos;re In!
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Your early-bird reservation has been received. We&apos;ll send your early-bird
              credit terms and next steps within 24 hours.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="btn-secondary mt-6 text-sm"
            >
              Send Another Request
            </button>
          </div>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Honeypot — hidden from real users, bots auto-fill it */}
            <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px", opacity: 0, height: 0, overflow: "hidden" }}>
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm text-text-secondary mb-1.5">Full Name</label>
                <input
                  id="name" name="name" type="text" placeholder="Your name" required
                  className="w-full rounded-lg border border-border bg-bg-card px-4 py-2.5 text-text placeholder:text-text-muted/50 focus:outline-none focus:border-brand/40 focus:ring-1 focus:ring-brand/20 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-text-secondary mb-1.5">Work Email</label>
                <input
                  id="email" name="email" type="email" placeholder="you@company.com" required
                  className="w-full rounded-lg border border-border bg-bg-card px-4 py-2.5 text-text placeholder:text-text-muted/50 focus:outline-none focus:border-brand/40 focus:ring-1 focus:ring-brand/20 transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm text-text-secondary mb-1.5">Company</label>
              <input
                id="company" name="company" type="text" placeholder="Company name" required
                className="w-full rounded-lg border border-border bg-bg-card px-4 py-2.5 text-text placeholder:text-text-muted/50 focus:outline-none focus:border-brand/40 focus:ring-1 focus:ring-brand/20 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="market" className="block text-sm text-text-secondary mb-1.5">Batch Tier</label>
              <select
                id="market" name="market" defaultValue=""
                className="w-full rounded-lg border border-border bg-bg-card px-4 py-2.5 text-text focus:outline-none focus:border-brand/40 focus:ring-1 focus:ring-brand/20 transition-colors cursor-pointer"
              >
                <option value="" disabled>Select a batch tier</option>
                <option>ECGI 1K</option>
                <option>ECGI 5K</option>
                <option>ECGI 10K</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div>
              <label htmlFor="msg" className="block text-sm text-text-secondary mb-1.5">Message</label>
              <textarea
                id="msg" name="msg" rows={4} placeholder="Tell us about your use case..."
                className="w-full rounded-lg border border-border bg-bg-card px-4 py-2.5 text-text placeholder:text-text-muted/50 focus:outline-none focus:border-brand/40 focus:ring-1 focus:ring-brand/20 transition-colors resize-none"
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2.5">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Claim 50% Early-Bird Access
                </>
              )}
            </button>
          </form>
        )}

        {/* What happens next */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="card-static p-7 rounded-2xl">
            <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-5">
              What Happens Next
            </h3>
            <ol className="space-y-4">
              {[
                "Reserve your early-bird credit tier",
                "API key + sandbox access",
                "Onboarding call with our solutions team",
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
            <a href="https://wa.me/+972545359521" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-text-secondary hover:text-brand transition-colors">
              <MessageCircle className="h-4 w-4 text-brand" />
              WhatsApp
            </a>
            <a href={`mailto:${brand.email}`} className="flex items-center gap-3 text-sm text-text-secondary hover:text-brand transition-colors">
              <Mail className="h-4 w-4 text-brand" />
              {brand.email}
            </a>
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
