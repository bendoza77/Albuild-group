import { motion } from 'framer-motion'
import { PROJECT_CATEGORIES } from '../../utils/constants'

export default function ProjectFilter({ active, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {PROJECT_CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className="relative font-body font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors duration-300 focus:outline-none"
          style={{ color: active === cat ? undefined : undefined }}
        >
          {active === cat && (
            <motion.div
              layoutId="filter-pill"
              className="absolute inset-0 bg-secondary rounded-xl"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className={`relative z-10 transition-colors duration-200 ${active === cat ? 'text-beige' : 'text-warm-gray hover:text-primary'}`}>
            {cat}
          </span>
        </button>
      ))}
    </div>
  )
}
