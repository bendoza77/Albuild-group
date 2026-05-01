import { motion } from 'framer-motion'
import { LogoIcon } from '../ui/Logo'

export default function Loader({ onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.75, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-5"
      >
        {/* Animated logo icon */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <LogoIcon className="w-20 h-20" />
        </motion.div>

        {/* Wordmark */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="font-display text-3xl font-bold text-beige tracking-tight"
          >
            ALBuild Group
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="font-body text-[10px] uppercase tracking-[0.35em] text-accent mt-1.5"
          >
            Building Excellence Since 2009
          </motion.div>
        </div>
      </motion.div>

      {/* Loading bar */}
      <div className="absolute bottom-10 w-44 h-px bg-beige/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="h-full bg-accent rounded-full"
        />
      </div>
    </motion.div>
  )
}
