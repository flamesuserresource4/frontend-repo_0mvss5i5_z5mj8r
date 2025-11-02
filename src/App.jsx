import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0B0F] text-white">
      {/* Global subtle starry backdrop */}
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(1000px_600px_at_20%_-10%,rgba(124,58,237,0.20),transparent),radial-gradient(800px_500px_at_80%_10%,rgba(34,211,238,0.15),transparent)]" />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-10 text-center text-white/60">
        © {new Date().getFullYear()} Aura8.ai — Crafted for the future of voice
      </footer>
    </div>
  );
}

export default App;
