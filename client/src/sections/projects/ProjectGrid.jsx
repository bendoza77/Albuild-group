import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../../components/ui/Container'
import SectionTitle from '../../components/ui/SectionTitle'
import ProjectCard from './ProjectCard'
import ProjectFilter from './ProjectFilter'
import { PROJECTS_DATA } from '../../utils/constants'

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('ყველა')

  const filtered = activeFilter === 'ყველა'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter)

  return (
    <section className="py-24 bg-beige">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <SectionTitle
            eyebrow="ჩვენი პორტფოლიო"
            title="ყველა პროექტი"
            subtitle={`ნაჩვენებია ${filtered.length} პროექტი${activeFilter !== 'ყველა' ? ` — ${activeFilter}` : ''}`}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ProjectFilter active={activeFilter} onChange={setActiveFilter} />
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <p className="font-body text-warm-gray text-lg">ამ კატეგორიაში პროექტი არ მოიძებნა.</p>
          </motion.div>
        )}
      </Container>
    </section>
  )
}
