import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, subtitle, centered = false, light = false, className = '' }) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}
        >
          <div className="w-6 h-px bg-accent" />
          <span className={`font-body font-semibold text-sm uppercase tracking-widest ${light ? 'text-accent' : 'text-secondary'}`}>
            {eyebrow}
          </span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        className={`font-display text-4xl md:text-5xl font-bold leading-tight mb-5 ${light ? 'text-beige' : 'text-primary'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className={`text-lg leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-highlight/80' : 'text-warm-gray'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
