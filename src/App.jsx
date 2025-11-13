import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Overview, Trailer, Characters, VFX } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Overview />
      <Trailer />
      <Characters />
      <VFX />
      <footer className="bg-black/80 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white/60">Fan site concept for Season 5 • High-motion immersive experience</div>
          <a href="#hero" className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:scale-105 transition">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
