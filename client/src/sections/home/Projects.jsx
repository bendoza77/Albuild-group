import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Calendar } from 'lucide-react'
import Container from '../../components/ui/Container'
import SectionTitle from '../../components/ui/SectionTitle'
import Badge from '../../components/ui/Badge'
import { PROJECTS_DATA } from '../../utils/constants'
import { staggerContainer, fadeInUp } from '../../utils/animations'

/* Warm gradient palettes per card index */
const CARD_GRADIENTS = [
  'linear-gradient(140deg, #1a0e06 0%, #3d2010 50%, #C06014 100%)',
  'linear-gradient(140deg, #2C1A12 0%, #6b3515 60%, #3d2010 100%)',
  'linear-gradient(140deg, #120a04 0%, #2C1A12 50%, #4a2810 100%)',
]

/* Abstract building-block pattern for card backgrounds */
function CardPattern({ index }) {
  const offset = index * 37
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.12]"
      viewBox="0 0 400 280"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Building silhouettes */}
      <rect x={20 + offset % 30}  y="60"  width="55" height="220" fill="white" />
      <rect x={90 + offset % 20}  y="30"  width="70" height="250" fill="white" />
      <rect x={175 + offset % 25} y="80"  width="50" height="200" fill="white" />
      <rect x={240 + offset % 15} y="20"  width="80" height="260" fill="white" />
      <rect x={335 + offset % 10} y="70"  width="60" height="210" fill="white" />
      {/* Grid lines */}
      <line x1="0" y1="275" x2="400" y2="275" stroke="white" strokeWidth="2" />
    </svg>
  )
}

const FEATURED = PROJECTS_DATA.filter((p) => p.featured)

export default function ProjectsPreview() {
  return (
    <section className="py-24 bg-highlight/40">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <SectionTitle
            eyebrow="Our Portfolio"
            title={<>Featured<br />Projects</>}
            subtitle="A curated selection of our most impactful work across Georgia."
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/projects">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-primary text-beige font-body font-semibold px-6 py-3 rounded-xl text-sm cursor-pointer"
              >
                All Projects <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {FEATURED.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              whileHover="hover"
              animate="rest"
              className={`group relative rounded-2xl overflow-hidden warm-shadow cursor-pointer ${
                i === 0 ? 'md:col-span-2' : ''
              }`}
            >
              {/* Gradient background with building pattern */}
              <div
                className={`relative overflow-hidden ${i === 0 ? 'h-80 md:h-96' : 'h-64 md:h-80'}`}
                style={{ background: CARD_GRADIENTS[i % CARD_GRADIENTS.length] }}
              >
                <CardPattern index={i} />

                {/* Large faded project number */}
                <div className="absolute bottom-4 right-5 font-display font-bold text-[6rem] leading-none text-white/10 select-none pointer-events-none">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Warm hover tint */}
                <motion.div
                  className="absolute inset-0 bg-accent/15"
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1, transition: { duration: 0.35 } },
                  }}
                />
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Badge variant="light" className="mb-3">{project.category}</Badge>
                <h3 className="font-display text-xl font-bold text-beige mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 text-warm-gray text-xs font-body">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {project.year}
                  </span>
                </div>
                <motion.div
                  className="mt-3 flex items-center gap-2"
                  variants={{
                    rest: { opacity: 0, y: 8 },
                    hover: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                  }}
                >
                  <span className="font-body text-accent text-xs font-semibold uppercase tracking-wider">View Project</span>
                  <ArrowRight className="w-3 h-3 text-accent" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
