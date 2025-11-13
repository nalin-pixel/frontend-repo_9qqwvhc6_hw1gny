import { lazy, Suspense, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParallaxBG from './components/ParallaxBG'
import { Overview, Trailer as TrailerSection, Characters, VFX } from './components/Sections'
import { EpisodeGuide, Soundtrack, HawkinsMap, BTSGallery, Newsletter, TechSpecs } from './components/SectionsExpanded'
const TrailerModal = lazy(() => import('./components/TrailerModal'))

function App() {
  const [openTrailer, setOpenTrailer] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/30 selection:text-white">
      <ParallaxBG />
      <Navbar />
      <Hero />
      <Overview />
      <TrailerSection onOpen={() => setOpenTrailer(true)} />
      <Characters />
      <VFX />
      <EpisodeGuide />
      <Soundtrack />
      <HawkinsMap />
      <BTSGallery />
      <Newsletter />
      <TechSpecs />

      <footer className="bg-black/80 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white/60">Fan site concept for Season 5 • High-motion immersive experience</div>
          <a href="#hero" className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:scale-105 transition">Back to top</a>
        </div>
      </footer>

      <Suspense fallback={null}>
        <TrailerModal open={openTrailer} onClose={() => setOpenTrailer(false)} />
      </Suspense>
    </div>
  )
}

export default App
