"use client";

import Image from "next/image";

/**
 * Animated network / command-center visual for the hero section.
 * FlycommC2 hexagonal badge icon in center with orbiting tech nodes.
 * Pure CSS + SVG animations.
 */
export function HeroVisual() {
  const center = { x: 200, y: 200 };
  const nodes = [
    { x: 200, y: 52, label: "SOC", delay: "0s" },
    { x: 340, y: 115, label: "5G", delay: "0.8s" },
    { x: 340, y: 285, label: "AI", delay: "1.6s" },
    { x: 200, y: 348, label: "IoT", delay: "2.4s" },
    { x: 60, y: 285, label: "Wi-Fi", delay: "3.2s" },
    { x: 60, y: 115, label: "RF", delay: "0.4s" },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[440px]">
      <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
        <defs>
          <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(0,166,244,0.15)" />
            <stop offset="70%" stopColor="rgba(0,166,244,0.04)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <filter id="glow-filter">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Background glow */}
        <circle cx="200" cy="200" r="190" fill="url(#center-glow)" />

        {/* Orbit rings */}
        {[95, 135, 175].map((r) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke="rgba(0,166,244,0.08)"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
        ))}

        {/* Connection lines to center */}
        {nodes.map((n, i) => (
          <line
            key={`line-${i}`}
            x1={center.x}
            y1={center.y}
            x2={n.x}
            y2={n.y}
            stroke="rgba(0,166,244,0.12)"
            strokeWidth="1"
          >
            <animate
              attributeName="stroke-opacity"
              values="0.06;0.25;0.06"
              dur="3s"
              begin={n.delay}
              repeatCount="indefinite"
            />
          </line>
        ))}

        {/* Data flow particles */}
        {nodes.map((n, i) => (
          <circle key={`particle-${i}`} r="2.5" fill="rgba(0,166,244,0.7)">
            <animateMotion
              dur="3s"
              begin={n.delay}
              repeatCount="indefinite"
              path={`M${center.x},${center.y} L${n.x},${n.y}`}
            />
          </circle>
        ))}

        {/* Outer nodes */}
        {nodes.map((n) => (
          <g key={`node-${n.label}`}>
            <rect
              x={n.x - 24}
              y={n.y - 24}
              width="48"
              height="48"
              rx="12"
              fill="rgba(15,23,42,0.95)"
              stroke="rgba(0,166,244,0.2)"
              strokeWidth="1"
            />
            <text
              x={n.x}
              y={n.y + 5}
              textAnchor="middle"
              className="font-[family-name:var(--font-jetbrains-mono)]"
              fontSize={n.label.length > 3 ? "9" : "12"}
              fill="rgba(148,163,184,0.9)"
              fontWeight="500"
            >
              {n.label}
            </text>
          </g>
        ))}

        {/* Scanning arc */}
        <path
          d="M200,200 m-170,0 a170,170 0 0,1 340,0"
          fill="none"
          stroke="rgba(0,166,244,0.2)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="30 340"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 200 200"
            to="360 200 200"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      {/* FlycommC2 icon in center — the hexagonal badge in brand colors */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[96px] h-[96px] rounded-2xl bg-bg-card/95 border border-brand/30 shadow-[0_0_50px_rgba(0,166,244,0.3),0_0_100px_rgba(0,166,244,0.12)] flex items-center justify-center backdrop-blur-sm">
          <Image
            src="/icons/soc.png"
            alt="FlycommC2"
            width={72}
            height={72}
            className="w-[68px] h-[68px] object-contain"
            style={{
              filter: "brightness(0) saturate(100%) invert(55%) sepia(80%) saturate(2000%) hue-rotate(175deg) brightness(105%) contrast(95%)",
            }}
            priority
          />
        </div>
      </div>

      {/* Status indicator */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bg-card/90 border border-border text-xs text-text-secondary backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-success animate-pulse-soft" />
        Systems Online
      </div>
    </div>
  );
}
