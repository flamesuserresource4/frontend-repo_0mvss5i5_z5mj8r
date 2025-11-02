import { Mic, Shield, Zap } from 'lucide-react';

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

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(30%_30%_at_15%_0%,rgba(168,85,247,0.10),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Designed for scale, engineered for magic</h2>
          <p className="mt-4 text-white/70">
            Everything you need to build delightful, reliable, and secure voice experiences.
          </p>
        </div>
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
      </div>
    </section>
  );
}
