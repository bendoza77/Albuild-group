import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import ProjectGrid from '../sections/projects/ProjectGrid'
import CTA from '../sections/home/CTA'
import { pageTransition } from '../utils/animations'
import usePageTitle from '../hooks/usePageTitle'
import { PAGE_HERO_IMAGES } from '../utils/constants'

export default function Projects() {
  usePageTitle('Our Projects')
  return (
    <motion.div {...pageTransition}>
      {/* Page hero */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center overflow-hidden">
        {/* 4K background — covers 100% at all breakpoints */}
        <img
          src={`${PAGE_HERO_IMAGES.projects}?auto=format&fit=crop&w=3840&q=90`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-[center_40%]"
        />
        {/* Warm dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(140deg, rgba(18,9,0,0.82) 0%, rgba(44,26,18,0.70) 50%, rgba(61,34,21,0.55) 100%)',
          }}
        />
        <Container className="relative z-10 pt-36 pb-16 sm:pt-40 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="h-px w-8 bg-accent" />
            <span className="font-body text-accent text-xs uppercase tracking-widest font-semibold">Our Portfolio</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-bold text-beige mb-6 max-w-2xl leading-tight"
          >
            Projects That Define Georgia's Skyline
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-warm-gray text-lg max-w-xl leading-relaxed mb-8"
          >
            From private residences to commercial landmarks — explore the full breadth of our work.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 font-body text-sm text-warm-gray"
          >
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-accent">Projects</span>
          </motion.div>
        </Container>
      </section>

      <ProjectGrid />
      <CTA />
    </motion.div>
  )
}
