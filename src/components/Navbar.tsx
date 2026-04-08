"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { nav, brand } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-2xl border-b border-border/60 shadow-[0_1px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer">
          <Image
            src="/icons/flycomm-logo.png"
            alt="Flycomm"
            width={140}
            height={36}
            className="h-7 w-auto brightness-0 invert"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {nav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setDropdown(item.label)}
              onMouseLeave={() => setDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 px-3.5 py-2 text-[0.9rem] text-text-secondary hover:text-text transition-colors cursor-pointer"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-50" />}
              </Link>
              {item.children && dropdown === item.label && (
                <div className="absolute top-full left-0 pt-2 min-w-[220px]">
                  <div className="rounded-xl bg-bg-elevated border border-border shadow-2xl shadow-black/40 py-1.5 animate-fade-in">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-text-secondary hover:text-text hover:bg-brand-bg transition-colors cursor-pointer"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/#contact" className="btn-primary text-sm">
            Book a Demo
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 text-text-secondary hover:text-text cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="lg:hidden bg-bg-elevated border-b border-border animate-fade-in">
          <div className="mx-auto max-w-7xl px-5 py-5 space-y-1">
            {nav.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm text-text-secondary hover:text-text cursor-pointer"
                >
                  {item.label}
                </Link>
                {item.children?.map((c) => (
                  <Link
                    key={c.label}
                    href={c.href}
                    onClick={() => setOpen(false)}
                    className="block pl-7 py-1.5 text-sm text-text-muted hover:text-text cursor-pointer"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-3">
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center text-sm"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
