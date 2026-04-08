"use client";
import * as LucideIcons from "lucide-react";

type IconProps = { name: string; className?: string };

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  const LucideIcon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  if (!LucideIcon) return null;
  return <LucideIcon className={className} />;
}
