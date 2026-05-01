import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Calendar } from 'lucide-react'
import Container from '../../components/ui/Container'
import SectionTitle from '../../components/ui/SectionTitle'
import Badge from '../../components/ui/Badge'
import { PROJECTS_DATA } from '../../utils/constants'
import { staggerContainer, fadeInUp } from '../../utils/animations'


const FEATURED = PROJECTS_DATA.filter((p) => p.featured)

export default function ProjectsPreview() {
  return (
    <section className="py-24 bg-highlight/50">
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
              {/* Real project photo with gradient overlay */}
              <div
                className={`relative overflow-hidden ${i === 0 ? 'h-64 sm:h-80 md:h-96' : 'h-52 sm:h-64 md:h-80'}`}
              >
                {/* Project photo */}
                <img
                  src={`${project.image}?auto=format&fit=crop&w=1800&q=90`}
                  alt={project.title}
                  style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark gradient so bottom text stays legible */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(18,9,0,0.82) 25%, rgba(18,9,0,0.30) 65%, transparent 100%)' }}
                />

                {/* Warm hover tint */}
                <motion.div
                  className="absolute inset-0 bg-accent/20"
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
