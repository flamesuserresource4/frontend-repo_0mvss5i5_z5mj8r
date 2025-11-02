export default function CTA() {
  return (
    <section id="get-started" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 md:p-12">
          <div className="pointer-events-none absolute -inset-px rounded-3xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(168,85,247,0.35),rgba(99,102,241,0.35),rgba(34,211,238,0.35),rgba(168,85,247,0.35))] opacity-30" />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Bring Aura8 to your product in days, not months
            </h3>
            <p className="mt-3 text-white/70">
              SDKs for web, iOS, and server. A single API to manage agents, tools, and telemetry.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-semibold hover:bg-white/90 transition">
                Request access
              </a>
              <a href="#docs" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
                Read the docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
