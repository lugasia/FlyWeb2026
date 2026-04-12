import Link from "next/link";
import Image from "next/image";
import { brand } from "@/lib/content";

const sections = [
  {
    title: "Platform",
    links: [
      { label: "Cloud Platform", href: "/#platform" },
      { label: "FlycommC2 / SOC", href: "/solutions#soc" },
      { label: "Indoor Intelligence", href: "/solutions#indoor" },
      { label: "Churn Prevention", href: "/solutions#churn" },
    ],
  },
  {
    title: "Markets",
    links: [
      { label: "MNO & Telco", href: "/telco" },
      { label: "Defense & HLS", href: "/defense" },
      { label: "Smart Cities", href: "/smart-cities" },
      { label: "Critical Infrastructure", href: "/defense#ci" },
      { label: "Towercos", href: "/#markets" },
      { label: "Regulators", href: "/#markets" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/#contact" },
      { label: "Careers", href: "/#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center mb-5 cursor-pointer">
              <Image src="/icons/flycomm-logo.png" alt="Flycomm" width={120} height={32} className="h-6 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs mb-5">
              AI-powered wireless intelligence for telecom, defense, and critical
              infrastructure. See what others can&apos;t.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/flycomm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Flycomm on LinkedIn"
                className="text-text-muted hover:text-brand transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@Flycomm_Social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Flycomm on YouTube"
                className="text-text-muted hover:text-brand transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/+972545359521"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Flycomm on WhatsApp"
                className="text-text-muted hover:text-brand transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">
                {s.title}
              </h4>
              <ul className="space-y-2.5">
                {s.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-text-secondary hover:text-brand transition-colors cursor-pointer"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <span>&copy; {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-text transition-colors cursor-pointer">Privacy</Link>
            <Link href="/terms" className="hover:text-text transition-colors cursor-pointer">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
