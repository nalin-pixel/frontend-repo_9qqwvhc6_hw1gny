import { useEffect, useRef } from 'react'

export default function ParallaxBG() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window
      const x = (e.clientX - w / 2) / w
      const y = (e.clientY - h / 2) / h
      el.style.setProperty('--tx', `${x * 8}px`)
      el.style.setProperty('--ty', `${y * 8}px`)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute -inset-32 blur-3xl opacity-30" style={{ transform: 'translate(var(--tx,0), var(--ty,0))' }}>
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-fuchsia-600/30" />
        <div className="absolute bottom-10 right-10 w-[28rem] h-[28rem] rounded-full bg-cyan-500/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-red-500/20" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,rgba(255,255,255,0.08),transparent)]" />
    </div>
  )
}
