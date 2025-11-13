import { motion } from 'framer-motion'
import { Sparkles, Play, Film, Stars, Rocket, Clapperboard, Zap, Crown } from 'lucide-react'

export function Overview() {
  const items = [
    { title: 'Cosmic Stakes', desc: 'The Upside Down bleeds into our universe, warping space and time with neon fractures.', icon: Stars },
    { title: 'Final Alliance', desc: 'Eleven, Mike, and the crew unite with new allies to face a multiversal predator.', icon: Rocket },
    { title: 'Neon Horror', desc: 'Vortex storms, psionic echoes, and holographic creatures haunt Hawkins at night.', icon: Sparkles },
  ]
  return (
    <section id="overview" className="relative bg-gradient-to-b from-black to-black min-h-[60vh] py-24">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(217,70,239,0.35),transparent),radial-gradient(40%_40%_at_90%_20%,rgba(59,130,246,0.25),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-extrabold text-white">A Season Forged in Neon</motion.h2>
        <p className="mt-4 text-white/70 max-w-3xl">A high-velocity blend of 80s nostalgia and futuristic VFX. Every frame engineered with premium-grade spectacle and heart.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ title, desc, icon: Icon }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-white/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-fuchsia-500/30 to-cyan-400/30 text-white">
                  <Icon />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{title}</h3>
                  <p className="text-white/70 mt-1">{desc}</p>
                </div>
              </div>
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Trailer({ onOpen }) {
  return (
    <section id="trailer" className="relative bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-extrabold text-white">Official Trailer</motion.h2>
        <p className="mt-4 text-white/70 max-w-3xl">Turn the lights off. Headphones on. Dive into a dimensional rift of sound and picture.</p>
        <div className="mt-8 relative rounded-2xl overflow-hidden border border-white/10">
          <div className="aspect-video bg-gradient-to-br from-fuchsia-600/20 to-cyan-500/20 grid place-items-center">
            <button onClick={onOpen} className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-semibold shadow-xl hover:scale-105 transition">
              <Play className="group-hover:scale-110 transition" /> Play Teaser
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Characters() {
  const cast = [
    { name: 'Eleven', role: 'Telekinetic', color: 'from-red-500 to-rose-500' },
    { name: 'Mike', role: 'Strategist', color: 'from-blue-500 to-cyan-500' },
    { name: 'Dustin', role: 'Inventor', color: 'from-amber-500 to-orange-500' },
    { name: 'Max', role: 'Fearless', color: 'from-fuchsia-500 to-pink-500' },
    { name: 'Lucas', role: 'Sharpshooter', color: 'from-green-500 to-emerald-500' },
    { name: 'Steve', role: 'Guardian', color: 'from-indigo-500 to-violet-500' },
  ]
  return (
    <section id="characters" className="relative bg-gradient-to-b from-black to-black py-24">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(60%_60%_at_30%_0%,rgba(99,102,241,0.35),transparent),radial-gradient(40%_40%_at_90%_20%,rgba(236,72,153,0.25),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-extrabold text-white">Meet the Heroes</motion.h2>
        <p className="mt-4 text-white/70 max-w-3xl">A squad forged by friendship, ready to bend fate. Tap a card to feel the aura.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cast.map((c) => (
            <motion.div key={c.name} whileHover={{ y: -6 }} className="relative rounded-2xl border border-white/10 overflow-hidden group bg-white/5 backdrop-blur-xl">
              <div className={`h-24 bg-gradient-to-r ${c.color} opacity-60`} />
              <div className="p-6">
                <div className="text-white text-xl font-bold">{c.name}</div>
                <div className="text-white/70">{c.role}</div>
                <div className="mt-4 h-1 rounded-full bg-gradient-to-r from-white/20 to-transparent group-hover:from-white/50 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function VFX() {
  const features = [
    { title: 'Neon Rift Simulation', icon: Zap, desc: 'GPU-accelerated particle rifts with volumetric fog and refractive shaders.' },
    { title: 'Holographic Creatures', icon: Clapperboard, desc: 'Raymarched silhouettes with emissive patterns synced to the score.' },
    { title: 'Cosmic Environments', icon: Crown, desc: 'Spline-driven 3D scenes fused with procedural auroras and starfields.' },
  ]
  return (
    <section id="vfx" className="relative bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-extrabold text-white">Behind the VFX</motion.h2>
        <p className="mt-4 text-white/70 max-w-3xl">A tour through bleeding-edge techniques powering this season’s look.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, icon: Icon, desc }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <div className="flex items-center gap-3 text-white">
                <Icon />
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="text-white/70 mt-2">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
