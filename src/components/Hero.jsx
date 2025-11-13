import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-24">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: 'easeOut' }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur text-white/80 text-xs mb-4">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" /> Official Sneak Peek
          </div>
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[0.95] tracking-tight">
            Stranger Things Season 5
          </h1>
          <p className="mt-5 text-white/80 text-lg md:text-xl leading-relaxed">
            Return to Hawkins for the final showdown. Experience a cosmic journey through neon-lit dimensions and mind-bending VFX.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#trailer" className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-[1.02] transition-transform">Watch Trailer</a>
            <a href="#overview" className="px-6 py-3 rounded-full bg-black/50 border border-white/20 text-white hover:bg-white/10 transition">Read Overview</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
