import { motion } from 'framer-motion'
import { Calendar, Map, Music2, Share2, Shield, Sparkles, Users2, Camera, Timer, BookOpen, Flame, Cpu } from 'lucide-react'

export function EpisodeGuide() {
  const episodes = Array.from({ length: 8 }).map((_, i) => ({
    num: i + 1,
    title: `Chapter ${i + 1}: Rift of ${['Echoes','Neon','Shadows','Fate','Aurora','Pulse','Memory','Light'][i]}`,
    runtime: `${58 + i} min`
  }))
  return (
    <section id="episodes" className="relative bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-extrabold text-white">Episode Guide</motion.h2>
        <p className="mt-4 text-white/70 max-w-3xl">A spoiler-light itinerary through the final arc.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {episodes.map(ep => (
            <motion.div key={ep.num} whileHover={{ y: -6 }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <div className="flex items-center justify-between text-white">
                <div className="text-sm uppercase tracking-widest text-white/60">Episode {ep.num}</div>
                <Calendar className="opacity-80" size={18} />
              </div>
              <div className="mt-3 text-lg font-semibold text-white">{ep.title}</div>
              <div className="mt-2 text-white/60">Runtime • {ep.runtime}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Soundtrack() {
  const tracks = [
    { title: 'Neon Heartbeat', artist: 'Kyle Dixon & Michael Stein' },
    { title: 'Rift Walker', artist: 'SURVIVE' },
    { title: 'Echoes of Hawkins', artist: 'M83' },
  ]
  return (
    <section id="soundtrack" className="relative bg-gradient-to-b from-black to-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-extrabold text-white">Soundtrack</motion.h2>
        <p className="mt-4 text-white/70 max-w-3xl">Analog synths and cinematic pulses that define the season.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tracks.map(t => (
            <motion.div key={t.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <div className="flex items-center justify-between text-white">
                <div className="font-semibold">{t.title}</div>
                <Music2 />
              </div>
              <div className="text-white/60">{t.artist}</div>
              <div className="mt-4 h-16 rounded-md bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.2)_0_2px,transparent_2px_6px)] relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-fuchsia-500/40 to-cyan-500/40 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HawkinsMap() {
  return (
    <section id="map" className="relative bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-extrabold text-white">Hawkins Map</motion.h2>
        <p className="mt-4 text-white/70 max-w-3xl">Explore hotspots across Hawkins. Hover to reveal anomalies.</p>
        <div className="mt-8 relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="aspect-[16/9]">
            <div className="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop" alt="Map" className="w-full h-full object-cover opacity-40" />
              {[{x:'20%',y:'30%',label:'Starcourt Mall'},{x:'48%',y:'52%',label:'Byers House'},{x:'70%',y:'38%',label:'Hawkins Lab'}].map(p => (
                <div key={p.label} className="absolute" style={{ left: p.x, top: p.y }}>
                  <div className="group relative">
                    <div className="h-5 w-5 rounded-full bg-fuchsia-500 shadow-[0_0_30px_rgba(217,70,239,.7)] animate-ping" />
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 px-3 py-1 rounded-md bg-black/80 border border-white/10 text-white/80 opacity-0 group-hover:opacity-100 transition">{p.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function BTSGallery() {
  const shots = Array.from({ length: 6 }).map((_, i) => `https://images.unsplash.com/photo-15${80 + i}204974-0e2f4a8b3b09?q=80&w=1600&auto=format&fit=crop`)
  return (
    <section id="bts" className="relative bg-gradient-to-b from-black to-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-extrabold text-white">Behind The Scenes</motion.h2>
        <p className="mt-4 text-white/70 max-w-3xl">Concept art, set photos, and VFX plates.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shots.map((src, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-2xl border border-white/10">
              <img src={src} alt="BTS" className="w-full h-56 object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Newsletter() {
  return (
    <section id="newsletter" className="relative bg-black py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-extrabold text-white">Get Updates</motion.h2>
        <p className="mt-4 text-white/70">Join the Hawkins bulletin for trailers, release dates, and exclusive BTS.</p>
        <form onSubmit={(e)=>e.preventDefault()} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <input type="email" required placeholder="you@hawkinsmail.com" className="w-full sm:w-[380px] px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition inline-flex items-center gap-2">
            <Share2 size={16} /> Subscribe
          </button>
        </form>
        <div className="mt-4 text-xs text-white/50">No spam. Unsubscribe any time.</div>
      </div>
    </section>
  )
}

export function TechSpecs() {
  const specs = [
    { label: 'Motion Engine', value: 'Framer Motion v11', icon: Sparkles },
    { label: '3D Layer', value: 'Spline Scene', icon: Camera },
    { label: 'Runtime', value: 'Vite + React', icon: Timer },
    { label: 'UI System', value: 'Tailwind + Radix', icon: BookOpen },
    { label: 'Design', value: 'Neon Noir', icon: Flame },
    { label: 'Perf', value: 'Code-split + lazy', icon: Cpu },
  ]
  return (
    <section id="tech" className="relative bg-gradient-to-b from-black to-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-extrabold text-white">Tech Specs</motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <div className="flex items-center gap-3 text-white">
                <s.icon />
                <div className="font-semibold">{s.label}</div>
              </div>
              <div className="text-white/70 mt-1">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
