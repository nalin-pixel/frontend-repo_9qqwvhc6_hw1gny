import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function TrailerModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur" onClick={onClose} />
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            className="relative w-[92vw] max-w-5xl rounded-2xl overflow-hidden border border-white/10 bg-black"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Close trailer"
            >
              <X />
            </button>
            <div className="aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/bOQci5Qb6o0?autoplay=1&rel=0"
                title="Stranger Things Season 5 Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
