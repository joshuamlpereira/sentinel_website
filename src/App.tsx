import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   SVG ICON COMPONENTS
   All icons are pure inline SVG — zero external dependencies.
───────────────────────────────────────────────────────────────────────────── */

interface IconProps {
  className?: string;
}

const ShieldCheckIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const EyeOffIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const LockIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    <circle cx="12" cy="16" r="1" fill="currentColor" />
  </svg>
);

const ChromeIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="21.17" y1="8" x2="12" y2="8" />
    <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
    <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
  </svg>
);

const GithubIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const DownloadIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const MenuIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const XIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const HexIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinejoin="round"
  >
    <path d="M12 2 L21.392 7 L21.392 17 L12 22 L2.608 17 L2.608 7 Z" />
  </svg>
);

/* ─────────────────────────────────────────────────────────────────────────────
   CONSTANTS & HELPERS
───────────────────────────────────────────────────────────────────────────── */

const GRID_BG_STYLE: React.CSSProperties = {
  backgroundImage: `
    linear-gradient(rgba(6, 182, 212, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.035) 1px, transparent 1px)
  `,
  backgroundSize: "64px 64px",
};

const GRID_BG_FINE_STYLE: React.CSSProperties = {
  backgroundImage: `
    linear-gradient(rgba(6, 182, 212, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.025) 1px, transparent 1px)
  `,
  backgroundSize: "32px 32px",
};

type AccentColor = "emerald" | "cyan" | "rose";

const ACCENT_CONFIG: Record<
  AccentColor,
  {
    border: string;
    borderHover: string;
    iconBg: string;
    iconText: string;
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
    titleText: string;
    glow: string;
    glowHex: string;
    cornerColor: string;
    dot: string;
  }
> = {
  emerald: {
    border: "border-emerald-500/25",
    borderHover: "hover:border-emerald-500/55",
    iconBg: "bg-emerald-500/10",
    iconText: "text-emerald-400",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-400",
    badgeBorder: "border-emerald-500/30",
    titleText: "text-emerald-400",
    glow: "hover:shadow-[0_0_40px_rgba(16,185,129,0.12)]",
    glowHex: "rgba(16,185,129,0.08)",
    cornerColor: "#10b981",
    dot: "bg-emerald-400",
  },
  cyan: {
    border: "border-cyan-500/25",
    borderHover: "hover:border-cyan-500/55",
    iconBg: "bg-cyan-500/10",
    iconText: "text-cyan-400",
    badgeBg: "bg-cyan-500/10",
    badgeText: "text-cyan-400",
    badgeBorder: "border-cyan-500/30",
    titleText: "text-cyan-400",
    glow: "hover:shadow-[0_0_40px_rgba(6,182,212,0.12)]",
    glowHex: "rgba(6,182,212,0.08)",
    cornerColor: "#06b6d4",
    dot: "bg-cyan-400",
  },
  rose: {
    border: "border-rose-500/25",
    borderHover: "hover:border-rose-500/55",
    iconBg: "bg-rose-500/10",
    iconText: "text-rose-400",
    badgeBg: "bg-rose-500/10",
    badgeText: "text-rose-400",
    badgeBorder: "border-rose-500/30",
    titleText: "text-rose-400",
    glow: "hover:shadow-[0_0_40px_rgba(244,63,94,0.12)]",
    glowHex: "rgba(244,63,94,0.08)",
    cornerColor: "#f43f5e",
    dot: "bg-rose-400",
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   FEATURE CARD COMPONENT
───────────────────────────────────────────────────────────────────────────── */

interface FeatureCardProps {
  accent: AccentColor;
  moduleId: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

function FeatureCard({
  accent,
  moduleId,
  icon,
  title,
  subtitle,
  description,
  tags,
}: FeatureCardProps) {
  const a = ACCENT_CONFIG[accent];

  return (
    <div
      className={`
        relative bg-slate-900 border ${a.border} rounded-2xl p-6
        transition-all duration-300 group cursor-default
        ${a.borderHover} ${a.glow}
      `}
    >
      {/* Corner bracket — top-left */}
      <div
        className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 rounded-tl-2xl opacity-50 transition-opacity duration-300 group-hover:opacity-100"
        style={{ borderColor: a.cornerColor }}
      />
      {/* Corner bracket — bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 rounded-br-2xl opacity-50 transition-opacity duration-300 group-hover:opacity-100"
        style={{ borderColor: a.cornerColor }}
      />

      {/* Top row: module badge + icon */}
      <div className="flex items-start justify-between mb-5">
        <span
          className={`
            inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-2.5 py-1
            rounded-md border ${a.badgeBg} ${a.badgeText} ${a.badgeBorder}
          `}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${a.dot} animate-glow-pulse`}
          />
          {moduleId}
        </span>
        <div
          className={`
            w-11 h-11 rounded-xl ${a.iconBg} border ${a.border}
            flex items-center justify-center ${a.iconText}
            transition-all duration-300 group-hover:scale-110
          `}
        >
          <div className="w-5 h-5">{icon}</div>
        </div>
      </div>

      {/* Title + subtitle */}
      <h3 className={`text-lg font-bold ${a.titleText} tracking-wide mb-0.5`}>
        {title}
      </h3>
      <p className="text-xs font-mono text-slate-500 mb-3">{subtitle}</p>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-5">
        {description}
      </p>

      {/* Tag chips */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono text-slate-600 bg-slate-800/80 border border-slate-700/50 px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   LIFECYCLE STEP COMPONENT
───────────────────────────────────────────────────────────────────────────── */

interface StepProps {
  number: string;
  phase: string;
  title: string;
  description: string;
  isLast?: boolean;
  analogy: string;
}

function Step({
  number,
  phase,
  title,
  description,
  isLast,
  analogy,
}: StepProps) {
  return (
    <div className="relative flex gap-5">
      {/* Vertical connector line */}
      {!isLast && (
        <div className="absolute left-5.5 top-14 bottom-0 w-px bg-linear-to-b from-cyan-500/40 via-cyan-500/10 to-transparent pointer-events-none" />
      )}

      {/* Step bubble */}
      <div className="shrink-0 z-10">
        <div className="w-11 h-11 rounded-full bg-slate-900 border-2 border-cyan-500/50 flex items-center justify-center font-mono text-cyan-400 font-bold text-sm shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          {number}
        </div>
      </div>

      {/* Content */}
      <div className="pb-12">
        <span className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em]">
          {phase}
        </span>
        <h3 className="text-xl font-bold text-slate-100 mt-1 mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-3">
          {description}
        </p>
        {/* Mechanical analogy callout */}
        <div className="flex items-start gap-2 bg-slate-900/60 border border-slate-700/50 rounded-lg px-3.5 py-2.5">
          <span className="text-cyan-500 font-mono text-xs mt-0.5 shrink-0">
            &#9654;&#9654;
          </span>
          <p className="text-xs text-slate-500 italic leading-relaxed">
            {analogy}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   TEAM MEMBER CARD
───────────────────────────────────────────────────────────────────────────── */

interface TeamMemberProps {
  name: string;
  initials: string;
  colorIndex: number;
}

const TEAM_COLORS: Array<{
  ring: string;
  bg: string;
  text: string;
  shadow: string;
}> = [
  {
    ring: "border-cyan-500/60",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    shadow: "shadow-[0_0_20px_rgba(6,182,212,0.15)]",
  },
  {
    ring: "border-emerald-500/60",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    shadow: "shadow-[0_0_20px_rgba(16,185,129,0.15)]",
  },
  {
    ring: "border-rose-500/60",
    bg: "bg-rose-500/10",
    text: "text-rose-400",
    shadow: "shadow-[0_0_20px_rgba(244,63,94,0.15)]",
  },
  {
    ring: "border-cyan-500/60",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    shadow: "shadow-[0_0_20px_rgba(6,182,212,0.15)]",
  },
  {
    ring: "border-emerald-500/60",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    shadow: "shadow-[0_0_20px_rgba(16,185,129,0.15)]",
  },
];

function TeamMember({ name, initials, colorIndex }: TeamMemberProps) {
  const c = TEAM_COLORS[colorIndex % TEAM_COLORS.length];

  return (
    <div className="group flex flex-col items-center gap-3 p-4 rounded-2xl transition-colors duration-300 hover:bg-slate-900/60">
      <div
        className={`
          w-16 h-16 rounded-full border-2 ${c.ring} ${c.bg}
          flex items-center justify-center font-mono font-bold text-lg ${c.text}
          transition-all duration-300 group-hover:scale-110 ${c.shadow}
        `}
      >
        {initials}
      </div>
      <span className="text-slate-300 text-sm font-medium text-center leading-snug max-w-30">
        {name}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   STAT CHIP
───────────────────────────────────────────────────────────────────────────── */

interface StatChipProps {
  value: string;
  label: string;
  accent: "cyan" | "emerald" | "rose";
}

function StatChip({ value, label, accent }: StatChipProps) {
  const colors = {
    cyan: "text-cyan-400",
    emerald: "text-emerald-400",
    rose: "text-rose-400",
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center flex flex-col gap-1">
      <span className={`text-2xl font-black font-mono ${colors[accent]}`}>
        {value}
      </span>
      <span className="text-xs text-slate-500 leading-tight">{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   EXTENSION POPUP MOCKUP
───────────────────────────────────────────────────────────────────────────── */

function ExtensionPopup() {
  const statusRows = [
    {
      label: "HSTS",
      sublabel: "Strict Transport",
      value: "ENFORCED",
      ok: true,
    },
    {
      label: "CSP",
      sublabel: "Content Security",
      value: "STRICT",
      ok: true,
    },
    {
      label: "TLS",
      sublabel: "Encryption",
      value: "v1.3 ✓",
      ok: true,
    },
    {
      label: "CANVAS",
      sublabel: "Fingerprint Guard",
      value: "OBFUSCATED",
      ok: true,
    },
    {
      label: "TRACKERS",
      sublabel: "Network Filter",
      value: "3 BLOCKED",
      ok: false,
    },
  ];

  return (
    <div className="animate-float">
      {/* Outer glow */}
      <div
        className="relative bg-slate-900 rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            "0 0 0 1px rgba(6,182,212,0.2), 0 0 60px rgba(6,182,212,0.08), 0 25px 50px rgba(0,0,0,0.5)",
          width: "280px",
        }}
      >
        {/* Top accent line */}
        <div className="h-px bg-linear-to-r from-transparent via-cyan-400/70 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 text-cyan-400">
              <ShieldCheckIcon />
            </div>
            <span
              className="text-xs font-mono font-bold tracking-[0.2em] text-cyan-400"
              style={{ textShadow: "0 0 12px rgba(6,182,212,0.6)" }}
            >
              SENTINEL
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
              style={{ boxShadow: "0 0 8px #34d399" }}
            />
            <span className="text-xs font-mono text-emerald-400 font-semibold">
              ACTIVE
            </span>
          </div>
        </div>

        {/* Trust Score Display */}
        <div className="px-4 py-5 border-b border-slate-800 text-center">
          <div className="flex items-center justify-center gap-3 mb-1">
            <div
              className="text-6xl font-black font-mono text-emerald-400 leading-none"
              style={{ textShadow: "0 0 30px rgba(52,211,153,0.5)" }}
            >
              A+
            </div>
            {/* Radial gauge decoration */}
            <div className="relative w-12 h-12">
              <svg viewBox="0 0 48 48" className="w-full h-full -rotate-90">
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  stroke="rgba(16,185,129,0.15)"
                  strokeWidth="3"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="3"
                  strokeDasharray="113"
                  strokeDashoffset="10"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[9px] font-mono text-emerald-400 font-bold">
                  96%
                </span>
              </div>
            </div>
          </div>
          <div className="text-xs text-slate-500 font-mono uppercase tracking-widest">
            Trust Score
          </div>
          <div className="text-xs text-slate-600 font-mono mt-0.5">
            github.com
          </div>
        </div>

        {/* Status Rows */}
        <div className="px-4 py-2">
          {statusRows.map((row, i) => (
            <div
              key={row.label}
              className={`flex items-center justify-between py-2 ${
                i < statusRows.length - 1 ? "border-b border-slate-800/60" : ""
              }`}
            >
              <div>
                <div className="text-xs font-mono font-semibold text-slate-300">
                  {row.label}
                </div>
                <div className="text-[10px] text-slate-600">{row.sublabel}</div>
              </div>
              <span
                className={`text-xs font-mono font-bold ${
                  row.ok ? "text-emerald-400" : "text-rose-400"
                }`}
                style={{
                  textShadow: row.ok
                    ? "0 0 8px rgba(52,211,153,0.4)"
                    : "0 0 8px rgba(244,63,94,0.4)",
                }}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>

        {/* Footer buttons */}
        <div className="px-4 py-3 border-t border-slate-800 flex gap-2">
          <button className="flex-1 text-xs font-mono font-semibold py-1.5 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-400 hover:bg-rose-500/25 transition-colors">
            Kill Switch
          </button>
          <button className="flex-1 text-xs font-mono font-semibold py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-slate-300 transition-colors">
            Dashboard
          </button>
        </div>

        {/* Bottom accent line */}
        <div className="h-px bg-linear-to-r from-transparent via-cyan-400/30 to-transparent" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   REQUEST LIFECYCLE DIAGRAM
───────────────────────────────────────────────────────────────────────────── */

function LifecycleDiagram() {
  const steps = [
    {
      icon: "→",
      label: "Browser Sends Request",
      sub: "URL typed / link clicked",
      type: "neutral",
    },
    {
      icon: "⬡",
      label: "Sentinel Intercepts",
      sub: "webRequest API hook fires",
      type: "cyan",
    },
    {
      icon: "≡",
      label: "Header Inspection",
      sub: "HSTS, CSP, TLS parsed",
      type: "neutral",
    },
    {
      icon: "★",
      label: "Trust Score Generated",
      sub: "Weighted grade calculated",
      type: "emerald",
    },
    {
      icon: "◈",
      label: "Canvas Noise Injected",
      sub: "Fingerprint hash poisoned",
      type: "cyan",
    },
    {
      icon: "⊗",
      label: "Trackers Evaluated",
      sub: "Blocklist matched + severed",
      type: "rose",
    },
    {
      icon: "✓",
      label: "Page Rendered Safely",
      sub: "Protected result delivered",
      type: "emerald",
    },
  ];

  const typeStyles: Record<
    string,
    { border: string; text: string; bg: string; glow: string }
  > = {
    neutral: {
      border: "border-slate-700",
      text: "text-slate-400",
      bg: "",
      glow: "",
    },
    cyan: {
      border: "border-cyan-500/40",
      text: "text-cyan-400",
      bg: "bg-cyan-500/5",
      glow: "shadow-[0_0_15px_rgba(6,182,212,0.08)]",
    },
    emerald: {
      border: "border-emerald-500/40",
      text: "text-emerald-400",
      bg: "bg-emerald-500/5",
      glow: "shadow-[0_0_15px_rgba(16,185,129,0.08)]",
    },
    rose: {
      border: "border-rose-500/40",
      text: "text-rose-400",
      bg: "bg-rose-500/5",
      glow: "shadow-[0_0_15px_rgba(244,63,94,0.08)]",
    },
  };

  return (
    <div className="flex flex-col gap-1.5">
      {steps.map((step, i) => {
        const s = typeStyles[step.type];
        return (
          <div key={i}>
            <div
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border ${s.border} ${s.bg} ${s.glow} transition-all duration-200 hover:scale-[1.02]`}
            >
              <span
                className={`font-mono text-base w-6 text-center shrink-0 ${s.text}`}
              >
                {step.icon}
              </span>
              <div className="flex-1 min-w-0">
                <div className={`text-sm font-semibold ${s.text}`}>
                  {step.label}
                </div>
                <div className="text-xs text-slate-600 font-mono">
                  {step.sub}
                </div>
              </div>
              <span className="text-xs font-mono text-slate-700 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center pl-6 h-1.5">
                <div className="w-px h-full bg-slate-800" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN APP COMPONENT
───────────────────────────────────────────────────────────────────────────── */

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 72; // nav height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const NAV_LINKS: Array<[string, string]> = [
    ["Features", "features"],
    ["How It Works", "how-it-works"],
    ["The Team", "team"],
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans antialiased overflow-x-hidden">
      {/* ══════════════════════════════════════════════════════════════════
          NAVIGATION
      ══════════════════════════════════════════════════════════════════ */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${
            scrolled
              ? "bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-[0_1px_30px_rgba(0,0,0,0.4)]"
              : "bg-transparent"
          }
        `}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
            aria-label="Sentinel — back to top"
          >
            <div className="w-8 h-8 rounded-lg border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center text-cyan-400 transition-all duration-300 group-hover:border-cyan-500/70 group-hover:bg-cyan-500/15 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <div className="w-4 h-4">
                <ShieldCheckIcon />
              </div>
            </div>
            <span
              className="text-lg font-black tracking-[0.25em] text-cyan-400 select-none"
              style={{ textShadow: "0 0 20px rgba(6,182,212,0.4)" }}
            >
              SENTINEL
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map(([label, id]) => (
              <button
                key={id}
                role="listitem"
                onClick={() => scrollTo(id)}
                className="text-slate-400 hover:text-cyan-400 text-sm font-medium tracking-wide transition-colors duration-200 relative group py-1"
              >
                {label}
                <span className="absolute bottom-0 left-0 right-0 h-px bg-cyan-400/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </button>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.55)] select-none"
            >
              <div className="w-4 h-4">
                <ChromeIcon />
              </div>
              Add to Chrome
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:border-slate-600 transition-colors"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <div className="w-4 h-4">
                  <XIcon />
                </div>
              ) : (
                <div className="w-4 h-4">
                  <MenuIcon />
                </div>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        <div
          className={`
            md:hidden transition-all duration-300 overflow-hidden
            ${mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}
          `}
          aria-hidden={!mobileOpen}
        >
          <div className="bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pb-5 pt-2 flex flex-col gap-1">
            {NAV_LINKS.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left text-slate-300 hover:text-cyan-400 hover:bg-slate-900 transition-colors px-3 py-2.5 rounded-lg text-sm font-medium"
              >
                {label}
              </button>
            ))}
            <div className="h-px bg-slate-800 my-1" />
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-sm justify-center shadow-[0_0_20px_rgba(6,182,212,0.35)]"
            >
              <div className="w-4 h-4">
                <ChromeIcon />
              </div>
              Add to Chrome
            </a>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-16 overflow-hidden"
        style={GRID_BG_STYLE}
        aria-label="Hero"
      >
        {/* Background radial glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          {/* Primary cyan orb */}
          <div className="absolute top-1/4 left-1/3 w-175 h-175 rounded-full bg-cyan-500/4 blur-3xl -translate-x-1/2 -translate-y-1/2" />
          {/* Secondary emerald orb */}
          <div className="absolute bottom-1/4 right-1/4 w-100 h-100 rounded-full bg-emerald-500/4 blur-3xl" />
          {/* Scan line sweep */}
          <div className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/25 to-transparent animate-scan-down top-0" />
          {/* Horizontal accent rules */}
          <div className="absolute top-[30%] left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/10 to-transparent" />
          <div className="absolute top-[70%] left-0 right-0 h-px bg-linear-to-r from-transparent via-emerald-500/8 to-transparent" />
          {/* Dot grid highlight */}
          <div
            className="absolute top-20 right-20 w-32 h-32 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(6,182,212,0.4) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* ── Left Column: Copy ── */}
            <div className="flex flex-col items-start">
              {/* Status pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/25 text-xs font-mono mb-7 shadow-[0_0_20px_rgba(6,182,212,0.06)]">
                <span
                  className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"
                  style={{ boxShadow: "0 0 6px #34d399" }}
                />
                <span className="text-slate-400">
                  LOCAL-FIRST ·{" "}
                  <span className="text-cyan-400">MANIFEST V3</span> · ACTIVE
                  DEFENSE
                </span>
              </div>

              {/* Main headline */}
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.08] mb-6">
                <span className="block text-slate-100">
                  The Check
                  <br />
                  Engine Light
                </span>
                <span
                  className="block animate-gradient-sweep"
                  style={{
                    background:
                      "linear-gradient(90deg, #22d3ee 0%, #34d399 40%, #22d3ee 80%, #34d399 100%)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  for Web Security.
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-130">
                Sentinel is a{" "}
                <span className="text-cyan-400 font-medium">local-first</span>{" "}
                browser extension that analyzes HTTP headers, blocks malicious
                trackers, and prevents device fingerprinting.{" "}
                <span className="text-slate-300">
                  No cloud servers. No data collection. Just pure client-side
                  defense.
                </span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all duration-200 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:-translate-y-0.5"
                >
                  <div className="w-4 h-4 shrink-0">
                    <DownloadIcon />
                  </div>
                  Download Prototype
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl border border-slate-600 hover:border-cyan-500/50 bg-slate-900/60 hover:bg-slate-900 text-slate-300 hover:text-cyan-400 font-bold text-sm transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="w-4 h-4 shrink-0">
                    <GithubIcon />
                  </div>
                  View Source Code
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-5 mt-8 pt-8 border-t border-slate-800/60 w-full">
                {[
                  { dot: "bg-emerald-400", label: "Zero data collection" },
                  { dot: "bg-cyan-400", label: "100% local processing" },
                  { dot: "bg-rose-400", label: "Open source" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-1.5 text-xs text-slate-500"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${item.dot} shrink-0`}
                    />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right Column: Extension Mockup ── */}
            <div className="flex items-center justify-center lg:justify-end relative">
              {/* Decorative rings */}
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div
                  className="w-85 h-85 rounded-full border border-cyan-500/6 animate-spin"
                  style={{ animationDuration: "25s" }}
                />
                <div className="absolute w-65 h-65 rounded-full border border-cyan-500/5" />
              </div>

              <div className="relative z-10">
                <ExtensionPopup />

                {/* Floating data badges */}
                <div
                  aria-hidden="true"
                  className="absolute -top-4 -left-16 bg-slate-900 border border-emerald-500/30 rounded-xl px-3 py-2 shadow-lg hidden sm:block"
                  style={{ boxShadow: "0 0 20px rgba(16,185,129,0.08)" }}
                >
                  <div className="text-xs font-mono text-emerald-400 font-bold">
                    CSP ✓
                  </div>
                  <div className="text-[10px] text-slate-500">
                    strict-policy
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="absolute -bottom-4 -right-12 bg-slate-900 border border-rose-500/30 rounded-xl px-3 py-2 shadow-lg hidden sm:block"
                  style={{ boxShadow: "0 0 20px rgba(244,63,94,0.08)" }}
                >
                  <div className="text-xs font-mono text-rose-400 font-bold">
                    3 Trackers
                  </div>
                  <div className="text-[10px] text-slate-500">
                    blocked today
                  </div>
                </div>

                {/* Bottom glow pool */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-10 bg-cyan-500/15 blur-2xl rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade to next section */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-slate-950 to-transparent pointer-events-none"
        />
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          FEATURES SECTION
      ══════════════════════════════════════════════════════════════════ */}
      <section
        id="features"
        className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="features-heading"
      >
        {/* Subtle top separator line */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-linear-to-b from-slate-800 to-transparent"
        />

        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-mono text-cyan-500 tracking-[0.2em] uppercase mb-3">
              <span className="w-8 h-px bg-cyan-500/40" />
              System Capabilities
              <span className="w-8 h-px bg-cyan-500/40" />
            </span>
            <h2
              id="features-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight mb-4"
            >
              Three Layers of Defense.
              <br />
              <span className="text-slate-500 font-light">One Extension.</span>
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
              Sentinel operates across three distinct attack surfaces
              simultaneously — delivering comprehensive client-side protection
              with{" "}
              <span className="text-slate-400">
                zero data leaving your device.
              </span>
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
            <FeatureCard
              accent="emerald"
              moduleId="MODULE 01"
              icon={<ShieldCheckIcon />}
              title="Trust Score System"
              subtitle="// real-time site grading"
              description="Evaluates website safety in real-time by inspecting HSTS rules, Content Security Policies, and TLS encryption strength. Generates an easy-to-read safety grade — think of it as a structural inspection report for every site you visit."
              tags={["HSTS", "CSP", "TLS v1.3", "X-Frame-Options"]}
            />
            <FeatureCard
              accent="cyan"
              moduleId="MODULE 02"
              icon={<EyeOffIcon />}
              title="Canvas Obfuscation"
              subtitle="// anti-fingerprinting engine"
              description="Prevents device tracking by injecting near-invisible cryptographic noise into HTML5 Canvas elements. Ruins tracker hashes without breaking visuals — like wearing a bulletproof vest under a suit. You look normal. You're protected."
              tags={["canvas API", "crypto noise", "fingerprint", "WebGL"]}
            />
            <FeatureCard
              accent="rose"
              moduleId="MODULE 03"
              icon={<LockIcon />}
              title="Local Access Control"
              subtitle="// PIN-protected kill-switch"
              description="A PIN-protected administrative menu allowing parents or admins to physically sever connections to specific domains at the browser engine level. Think of it as a circuit breaker — when it trips, no data flows. Period."
              tags={["PIN auth", "blocklist", "declarativeNetRequest", "local"]}
            />
          </div>

          {/* Stat Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <StatChip value="100%" label="Local Processing" accent="cyan" />
            <StatChip value="MV3" label="Manifest Version" accent="emerald" />
            <StatChip value="0" label="Cloud Servers Used" accent="rose" />
            <StatChip
              value="&#60;5ms"
              label="Avg. Analysis Time"
              accent="cyan"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════════════════════════════ */}
      <section
        id="how-it-works"
        className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-labelledby="how-it-works-heading"
        style={GRID_BG_FINE_STYLE}
      >
        {/* Background tint */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-b from-slate-950/70 via-slate-900/20 to-slate-950/70 pointer-events-none"
        />
        {/* Left glow */}
        <div
          aria-hidden="true"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-96 bg-cyan-500/3 blur-3xl pointer-events-none"
        />

        <div className="relative max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-mono text-cyan-500 tracking-[0.2em] uppercase mb-3">
              <span className="w-8 h-px bg-cyan-500/40" />
              Under the Hood
              <span className="w-8 h-px bg-cyan-500/40" />
            </span>
            <h2
              id="how-it-works-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight mb-4"
            >
              The Lifecycle of a Click.
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
              From the moment you press Enter to the page rendering, Sentinel
              performs three critical evaluations in{" "}
              <span className="text-cyan-400 font-medium">milliseconds</span> —
              entirely on your machine.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Steps */}
            <div>
              <Step
                number="01"
                phase="The Encounter"
                title="Blueprint &amp; Padlock Check"
                description="Before a single byte of content loads, Sentinel intercepts the outgoing request and inspects the site's Content Security Policy (the safety blueprint) and its TLS certificate (the padlock on your browser). It maps the site's security posture before your eyes ever see the page."
                analogy="Like a bouncer checking your ID before you walk into the building — nothing gets in until the credentials check out."
              />
              <Step
                number="02"
                phase="The Evaluation"
                title="Trust Score Calculation"
                description="Sentinel grades every header, rule, and encryption parameter it finds. HSTS enforcement, CSP strictness, X-Frame-Options, Referrer Policy — each is weighted and scored. The result is a live Trust Score displayed instantly in your browser toolbar."
                analogy="Think of it as a digital speedometer for safety. Green means go. Yellow means caution. Red means pull over."
              />
              <Step
                number="03"
                phase="The Control"
                title="User Kill-Switch Engagement"
                description="If the Trust Score falls below your threshold, you can manually engage the kill-switch from the local dashboard to permanently sever connections to that domain — no network requests, no exceptions. A PIN-protected admin panel gives parents and IT admins fine-grained authority."
                analogy="It's a circuit breaker at the browser engine level. The moment it trips, current stops flowing. No traffic. No exceptions."
                isLast
              />
            </div>

            {/* Lifecycle Diagram */}
            <div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                    Request Lifecycle
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
                      style={{ boxShadow: "0 0 6px #34d399" }}
                    />
                    <span className="text-xs font-mono text-emerald-400">
                      Live
                    </span>
                  </div>
                </div>
                <LifecycleDiagram />
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-4">
                  {[
                    { color: "bg-cyan-400", label: "Sentinel layer" },
                    { color: "bg-emerald-400", label: "Safe / pass" },
                    { color: "bg-rose-400", label: "Blocked / warn" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-1.5 text-[10px] font-mono text-slate-600"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${item.color}`}
                      />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          THE TEAM
      ══════════════════════════════════════════════════════════════════ */}
      <section
        id="team"
        className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="team-heading"
      >
        {/* Top separator */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-linear-to-b from-slate-800 to-transparent"
        />

        <div className="max-w-5xl mx-auto">
          {/* Section label */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-mono text-cyan-500 tracking-[0.2em] uppercase">
              <span className="w-8 h-px bg-cyan-500/40" />
              The Builders
              <span className="w-8 h-px bg-cyan-500/40" />
            </span>
          </div>

          {/* University Context Card */}
          <div
            className="relative bg-slate-900 border border-cyan-500/15 rounded-2xl p-8 mb-10 text-center overflow-hidden"
            style={{ boxShadow: "0 0 60px rgba(6,182,212,0.04)" }}
          >
            {/* Background pattern */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, rgba(6,182,212,0.04) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(52,211,153,0.03) 0%, transparent 60%)",
              }}
            />
            {/* Corner decorations */}
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-cyan-500/30 rounded-br-2xl"
            />

            <div className="relative">
              {/* Capstone badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-5">
                <div className="w-3 h-3">
                  <HexIcon />
                </div>
                SENIOR TECHNOLOGY CAPSTONE — ENGT 4050
              </div>

              <h2
                id="team-heading"
                className="text-3xl sm:text-4xl font-black text-slate-100 tracking-tight mb-3"
              >
                The Team.
              </h2>
              <p className="text-slate-400 text-base max-w-lg mx-auto leading-relaxed">
                Built at the{" "}
                <span className="text-slate-200 font-semibold">
                  University of Toledo
                </span>{" "}
                for the{" "}
                <span className="text-slate-200 font-semibold">
                  Spring 2026
                </span>{" "}
                Senior Capstone under the guidance of{" "}
                <span className="text-cyan-400 font-semibold">
                  Professor Bilal Sarsour
                </span>
                .
              </p>

              {/* Course info chips */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
                {[
                  "University of Toledo",
                  "ENGT 4050",
                  "Spring 2026",
                  "Prof. Bilal Sarsour",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="text-xs font-mono text-slate-500 bg-slate-800/70 border border-slate-700/50 px-3 py-1 rounded-full"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4">
            {[
              { name: "Joshua Pereira", initials: "JP" },
              { name: "John Best", initials: "JB" },
              { name: "Aaron Samuel", initials: "AS" },
              { name: "Bryant Greer", initials: "BG" },
              { name: "Nonso Chibuenyim Nwogu", initials: "NC" },
            ].map((member, i) => (
              <TeamMember
                key={member.name}
                name={member.name}
                initials={member.initials}
                colorIndex={i}
              />
            ))}
          </div>

          {/* Divider */}
          <div className="mt-12 pt-10 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400/60" />
              This project is a proof-of-concept developed for academic
              demonstration purposes.
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════════════════ */}
      <footer className="border-t border-slate-800/70 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 text-cyan-400/70">
                <ShieldCheckIcon />
              </div>
              <span className="text-sm font-mono font-black tracking-[0.25em] text-cyan-400/70">
                SENTINEL
              </span>
            </div>

            {/* Copyright */}
            <p className="text-xs text-slate-600 font-mono text-center leading-relaxed">
              University of Toledo &middot; ENGT 4050 &middot; Spring 2026
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> &middot; </span>
              All processing is local. No data leaves your device.
            </p>

            {/* Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-slate-600 hover:text-slate-400 transition-colors text-xs font-mono"
              >
                GitHub
              </a>
              <span className="text-slate-800 text-xs">/</span>
              <button
                onClick={() => scrollTo("features")}
                className="text-slate-600 hover:text-slate-400 transition-colors text-xs font-mono"
              >
                Features
              </button>
              <span className="text-slate-800 text-xs">/</span>
              <button
                onClick={() => scrollTo("team")}
                className="text-slate-600 hover:text-slate-400 transition-colors text-xs font-mono"
              >
                Team
              </button>
            </div>
          </div>

          {/* Bottom neon rule */}
          <div className="mt-8 h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent" />
          <div className="mt-4 text-center">
            <span className="text-[10px] font-mono text-slate-800 tracking-widest uppercase">
              Built with React + Vite + Tailwind CSS &mdash; Capstone
              Demonstration &mdash; 2026
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
