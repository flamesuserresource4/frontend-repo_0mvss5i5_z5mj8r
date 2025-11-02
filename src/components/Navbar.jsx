import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-cyan-400 shadow-lg shadow-fuchsia-500/20" />
          <span className="text-xl font-semibold tracking-tight text-white">
            Aura8<span className="text-white/70">.ai</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#solutions" className="hover:text-white transition">Solutions</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#docs" className="hover:text-white transition">Docs</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur hover:bg-white/15 transition">
            Contact
          </button>
          <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30 transition">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
