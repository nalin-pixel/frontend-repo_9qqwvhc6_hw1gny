import { useState, useEffect } from 'react'
import { Menu, X, Play, Tv2, Sparkles, Info } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Overview', href: '#overview', icon: Info },
    { label: 'Trailer', href: '#trailer', icon: Play },
    { label: 'Characters', href: '#characters', icon: Tv2 },
    { label: 'Behind the VFX', href: '#vfx', icon: Sparkles },
  ]

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'backdrop-blur-xl bg-black/30 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-red-500 via-fuchsia-500 to-indigo-500 animate-pulse shadow-lg shadow-red-500/30" />
          <span className="text-white font-black tracking-wider text-lg">Stranger Things • S5</span>
        </a>
        <div className="hidden md:flex items-center gap-2">
          {links.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} className="text-sm text-white/80 hover:text-white px-3 py-2 rounded-md hover:bg-white/5 transition-colors flex items-center gap-2">
              <Icon size={16} />
              {label}
            </a>
          ))}
          <a href="#trailer" className="ml-2 inline-flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-red-500 hover:to-fuchsia-500 hover:text-white transition-all shadow-lg">
            <Play size={16} /> Watch Trailer
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2 rounded-md hover:bg-white/10">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden px-4 pb-4">
            <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-2">
              {links.map(({ label, href }) => (
                <a key={label} href={href} onClick={() => setOpen(false)} className="block w-full text-left text-white/90 px-4 py-3 rounded-xl hover:bg-white/10">
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
