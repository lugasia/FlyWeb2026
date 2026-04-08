import { ReactNode } from "react";

/* ----- Section wrapper ----- */
interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bg?: "default" | "elevated" | "grid" | "gradient";
}

export function Section({ id, children, className = "", bg = "default" }: SectionProps) {
  const bgClass =
    bg === "elevated"  ? "bg-bg-elevated" :
    bg === "grid"      ? "bg-grid" :
    bg === "gradient"  ? "gradient-radial-tl" :
    "";

  return (
    <section id={id} className={`relative py-16 md:py-20 ${bgClass} ${className}`}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">{children}</div>
    </section>
  );
}

/* ----- Section header ----- */
interface HeaderProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-brand-bg border border-brand-dim/25 text-brand mb-5">
      <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-soft" />
      {children}
    </span>
  );
}

export function SectionHeader({ tag, title, description, align = "center" }: HeaderProps) {
  const center = align === "center";
  return (
    <div className={`mb-10 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {tag && <SectionTag>{tag}</SectionTag>}
      <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight leading-[1.15] font-[family-name:var(--font-space-grotesk)]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
