import { motion } from 'framer-motion'
import { MapPin, Calendar, Maximize2 } from 'lucide-react'
import Badge from '../../components/ui/Badge'

/* One gradient per category */
const CATEGORY_GRADIENT = {
  Residential: 'linear-gradient(140deg, #3d2010 0%, #C06014 100%)',
  Commercial:  'linear-gradient(140deg, #1a0e06 0%, #4a2810 60%, #8a4418 100%)',
  Industrial:  'linear-gradient(140deg, #0e0804 0%, #2C1A12 60%, #3d2010 100%)',
}

/* Subtle building silhouette unique per card */
function CardBg({ index }) {
  const shift = (index * 53) % 60
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.13] pointer-events-none"
      viewBox="0 0 360 220"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <rect x={10 + shift}  y="50"  width="42" height="170" fill="white" />
      <rect x={65 + shift}  y="20"  width="55" height="200" fill="white" />
      <rect x={135 + shift} y="65"  width="38" height="155" fill="white" />
      <rect x={185 + shift} y="10"  width="60" height="210" fill="white" />
      <rect x={260 + shift} y="55"  width="45" height="165" fill="white" />
      <rect x={315 + shift} y="30"  width="40" height="190" fill="white" />
      <line x1="0" y1="217" x2="360" y2="217" stroke="white" strokeWidth="2" />
    </svg>
  )
}

export default function ProjectCard({ project, index = 0 }) {
  const gradient = CATEGORY_GRADIENT[project.category] ?? CATEGORY_GRADIENT.Commercial

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover="hover"
      animate="rest"
      className="group rounded-2xl overflow-hidden bg-white warm-shadow hover:warm-shadow-xl transition-all duration-400 cursor-pointer"
    >
      {/* Image area — gradient + architectural pattern */}
      <div
        className="relative h-56 overflow-hidden"
        style={{ background: gradient }}
      >
        <CardBg index={index} />

        {/* Large faded project number */}
        <div className="absolute bottom-2 right-4 font-display font-bold text-[5rem] leading-none text-white/10 select-none pointer-events-none">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

        {/* Warm tint on hover */}
        <motion.div
          className="absolute inset-0 bg-accent/20"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1, transition: { duration: 0.35 } },
          }}
        />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <Badge variant="light">{project.category}</Badge>
        </div>

        {/* Expand icon on hover */}
        <motion.div
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center text-white"
          variants={{
            rest: { opacity: 0, scale: 0.8 },
            hover: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
          }}
        >
          <Maximize2 className="w-4 h-4" />
        </motion.div>
      </div>

      {/* Card content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
          {project.title}
        </h3>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-warm-gray font-body text-xs mb-4">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-accent" /> {project.location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-accent" /> {project.year}
          </span>
          {project.area && (
            <span className="flex items-center gap-1">
              <Maximize2 className="w-3 h-3 text-accent" /> {project.area}
            </span>
          )}
        </div>
        <div className="h-px bg-warm-gray/20 mb-4" />
        <div className="flex items-center justify-between">
          <span className="font-body text-xs text-warm-gray uppercase tracking-wider">View Details</span>
          <motion.div
            className="w-7 h-7 rounded-lg bg-highlight flex items-center justify-center"
            variants={{
              rest: { backgroundColor: 'var(--color-highlight)' },
              hover: { backgroundColor: 'var(--color-accent)', transition: { duration: 0.3 } },
            }}
          >
            <svg className="w-3.5 h-3.5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.article>
  )
}
