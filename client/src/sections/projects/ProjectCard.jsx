import { motion } from 'framer-motion'
import { MapPin, Calendar, Maximize2 } from 'lucide-react'
import Badge from '../../components/ui/Badge'

export default function ProjectCard({ project, index = 0 }) {

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
      {/* Image area — real project photo */}
      <div className="relative h-52 sm:h-56 overflow-hidden">
        <img
          src={`${project.image}?auto=format&fit=crop&w=1400&q=90`}
          alt={project.title}
          style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
          className="transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/15 to-transparent" />

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
