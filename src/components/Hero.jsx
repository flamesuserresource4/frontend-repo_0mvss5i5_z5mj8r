import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative isolate min-h-[80vh] overflow-hidden">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glow overlays - non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(124,58,237,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_70%_60%,rgba(6,182,212,0.20),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 animate-pulse" />
          Introducing Aura8 Voice Intelligence
        </span>
        <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight text-white">
          Ultra‑premium AI voice agents for the real world
        </h1>
        <p className="mt-6 max-w-2xl text-base md:text-lg text-white/70">
          Aura8 brings natural, responsive, and context‑aware voice to your products. Crafted
          with cutting‑edge research, deployed with reliability, and designed to feel otherworldly.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30 transition"
          >
            Start building
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
          >
            Hear the demo
          </a>
        </div>
      </div>
    </section>
  );
}
