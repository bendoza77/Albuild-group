import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function VideoModal({ videoId, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 lg:p-16"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-primary/92 backdrop-blur-sm" />

        <motion.div
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.88, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-4xl z-10"
          style={{ aspectRatio: '16/9' }}
          onClick={(e) => e.stopPropagation()}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title="ALBuild Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ display: 'block', width: '100%', height: '100%', border: 'none', borderRadius: '16px' }}
          />

          <button
            onClick={onClose}
            aria-label="Close video"
            className="absolute -top-5 -right-2 sm:-right-5 w-10 h-10 rounded-full bg-accent text-primary flex items-center justify-center hover:bg-accent/80 transition-colors warm-shadow"
          >
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
