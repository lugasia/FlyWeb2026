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
      { label: "About", href: "/#about" },
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
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              AI-powered wireless intelligence for telecom, defense, and critical
              infrastructure. See what others can&apos;t.
            </p>
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
