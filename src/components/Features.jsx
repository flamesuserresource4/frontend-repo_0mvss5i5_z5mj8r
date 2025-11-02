import { Mic, Shield, Zap, Check } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Human‑level voice',
    desc: 'Ultra‑low latency turn‑taking, emotional prosody, and multilingual support out of the box.'
  },
  {
    icon: Shield,
    title: 'Enterprise‑grade trust',
    desc: 'SOC2‑ready controls, PII redaction, granular permissions, and audit trails built‑in.'
  },
  {
    icon: Zap,
    title: 'Realtime orchestration',
    desc: 'Stream events to your stack, route tools, and compose agents with millisecond precision.'
  }
];

const tiers = [
  {
    name: 'Builder',
    price: 'Free',
    blurb: 'Everything to prototype and test ideas',
    features: [
      'Up to 1k monthly minutes',
      'Community support',
      'Web SDK access'
    ],
    cta: { label: 'Start free', href: '#get-started' },
    highlighted: false
  },
  {
    name: 'Scale',
    price: '$499/mo',
    blurb: 'Production‑ready with priority support',
    features: [
      'Priority SLA & support',
      'Advanced observability',
      'SSO & role‑based access'
    ],
    cta: { label: 'Upgrade', href: '#get-started' },
    highlighted: true
  }
];

// Lightweight inline SVGs to visually populate the console + mobile mock frames without external assets.
function ConsoleSVG() {
  return (
    <svg viewBox="0 0 800 450" className="h-full w-full rounded-xl" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="pill" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="800" height="450" fill="url(#g1)" stroke="rgba(255,255,255,0.08)" />
      {/* Top bar */}
      <rect x="16" y="16" rx="10" ry="10" width="768" height="40" fill="rgba(255,255,255,0.04)" />
      <circle cx="36" cy="36" r="6" fill="#ef4444" />
      <circle cx="56" cy="36" r="6" fill="#f59e0b" />
      <circle cx="76" cy="36" r="6" fill="#10b981" />
      <rect x="650" y="24" rx="8" ry="8" width="120" height="24" fill="url(#pill)" opacity="0.9" />
      {/* Left nav */}
      <rect x="16" y="72" width="160" height="362" rx="12" fill="rgba(255,255,255,0.03)" />
      {Array.from({ length: 6 }).map((_, i) => (
        <rect key={i} x="28" y={90 + i * 48} width="136" height="20" rx="6" fill={i === 1 ? 'rgba(168,85,247,0.45)' : 'rgba(255,255,255,0.08)'} />
      ))}
      {/* Main graph panel */}
      <rect x="192" y="72" width="592" height="200" rx="12" fill="rgba(255,255,255,0.03)" />
      {/* Grid lines */}
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={i} x1="204" y1={100 + i * 28} x2="772" y2={100 + i * 28} stroke="rgba(255,255,255,0.06)" />
      ))}
      {/* Trend line */}
      <polyline
        fill="none"
        stroke="url(#pill)"
        strokeWidth="3"
        points="200,240 260,210 320,220 380,180 440,190 500,140 560,160 620,120 680,150 740,110"
      />
      {/* Transcript panel */}
      <rect x="192" y="288" width="592" height="146" rx="12" fill="rgba(255,255,255,0.03)" />
      {Array.from({ length: 5 }).map((_, i) => (
        <>
          <circle key={`c-${i}`} cx="216" cy={318 + i * 24} r="8" fill={i % 2 ? '#22d3ee' : '#a855f7'} />
          <rect key={`r-${i}`} x="232" y={308 + i * 24} width={i % 2 ? 320 : 420} height="16" rx="4" fill="rgba(255,255,255,0.24)" />
        </>
      ))}
    </svg>
  );
}

function MobileSVG() {
  return (
    <svg viewBox="0 0 300 600" className="h-full w-full rounded-xl" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="pulse" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      {/* Phone body */}
      <rect x="10" y="10" width="280" height="580" rx="40" fill="url(#g2)" stroke="rgba(255,255,255,0.10)" />
      <rect x="36" y="80" width="228" height="494" rx="24" fill="rgba(255,255,255,0.03)" />
      {/* Notch */}
      <rect x="120" y="24" width="60" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
      {/* Waveform bars */}
      {Array.from({ length: 27 }).map((_, i) => (
        <rect
          key={i}
          x={48 + i * 8}
          y={320 - (Math.sin(i / 2) * 40 + 60)}
          width="4"
          height={Math.sin(i / 2) * 80 + 140}
          rx="2"
          fill="url(#pulse)"
          opacity={0.7}
        />
      ))}
      {/* Mic pill */}
      <rect x="96" y="520" width="108" height="32" rx="16" fill="rgba(255,255,255,0.12)" />
      <circle cx="110" cy="536" r="6" fill="#22d3ee" />
      <rect x="124" y="528" width="70" height="16" rx="8" fill="rgba(255,255,255,0.4)" />
      {/* Top labels */}
      <rect x="52" y="96" width="64" height="16" rx="6" fill="rgba(168,85,247,0.45)" />
      <rect x="120" y="96" width="92" height="16" rx="6" fill="rgba(255,255,255,0.15)" />
    </svg>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(30%_30%_at_15%_0%,rgba(168,85,247,0.10),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Designed for scale, engineered for magic</h2>
          <p className="mt-4 text-white/70">
            Everything you need to build delightful, reliable, and secure voice experiences.
          </p>
        </div>

        {/* Customers strip */}
        <div className="mt-10">
          <p className="text-center text-xs uppercase tracking-widest text-white/50">Trusted by forward‑thinking teams</p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center">
            {['Nebula', 'Synapse', 'Quanta', 'Helix', 'Orbit', 'Lattice'].map((brand) => (
              <div key={brand} className="flex items-center justify-center">
                <div className="px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-white/70 text-sm w-full text-center">
                  {brand}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg hover:bg-white/10 transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-cyan-400 text-white shadow-lg shadow-fuchsia-500/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>

        {/* Showcase: product screenshots (now with inline SVG illustrations) */}
        <div id="solutions" className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(70%_60%_at_40%_0%,rgba(34,211,238,0.20),transparent_60%)]" />
              <div className="relative aspect-[16/9] p-4">
                <div className="h-full w-full rounded-2xl border border-white/10 overflow-hidden bg-slate-900">
                  <ConsoleSVG />
                </div>
              </div>
              <div className="relative p-6">
                <h4 className="text-white font-semibold">Live Console</h4>
                <p className="mt-1 text-sm text-white/70">Monitor sessions, inspect transcripts, and route tools in real time.</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(70%_60%_at_60%_0%,rgba(168,85,247,0.20),transparent_60%)]" />
              <div className="relative aspect-[9/16] p-4">
                <div className="h-full w-full rounded-2xl border border-white/10 overflow-hidden bg-slate-900">
                  <MobileSVG />
                </div>
              </div>
              <div className="relative p-6">
                <h4 className="text-white font-semibold">Mobile SDK</h4>
                <p className="mt-1 text-sm text-white/70">Drop‑in voice surfaces for iOS with sub‑100ms latency.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div id="pricing" className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Simple, transparent pricing</h3>
            <p className="mt-3 text-white/70">Start free. Scale when you’re ready. Enterprise plans available on request.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={
                  'relative rounded-3xl border p-6 md:p-8 transition ' +
                  (tier.highlighted
                    ? 'border-indigo-400/30 bg-gradient-to-b from-white/10 to-white/5 shadow-lg shadow-indigo-500/10'
                    : 'border-white/10 bg-white/5')
                }
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white text-xl font-semibold">{tier.name}</h4>
                    <p className="mt-1 text-sm text-white/70">{tier.blurb}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-semibold text-white">{tier.price}</div>
                  </div>
                </div>
                <ul className="mt-6 space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/80">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-emerald-400">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.cta.href}
                  className={
                    'mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ' +
                    (tier.highlighted
                      ? 'bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30'
                      : 'border border-white/15 bg-white/5 text-white hover:bg-white/10')
                  }
                >
                  {tier.cta.label}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-white/60">
            Need custom minutes, on‑prem, or dedicated regions? <a href="#get-started" className="underline decoration-white/20 hover:decoration-white">Contact sales</a>.
          </p>
        </div>

        {/* Docs teaser inline */}
        <div id="docs" className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <h4 className="text-white text-xl font-semibold">Build with our developer‑first API</h4>
          <p className="mt-2 text-white/70">Comprehensive guides, typed SDKs, and examples to get you shipping fast.</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a href="#docs" className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition">
              Read the docs
            </a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition">
              Explore examples
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
