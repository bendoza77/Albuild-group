import { motion } from 'framer-motion'
import Hero from '../sections/home/Hero'
import Services from '../sections/home/Services'
import ProjectsPreview from '../sections/home/Projects'
import Stats from '../sections/home/Stats'
import Testimonials from '../sections/home/Testimonials'
import CTA from '../sections/home/CTA'
import { pageTransition } from '../utils/animations'
import usePageTitle from '../hooks/usePageTitle'

export default function Home() {
  usePageTitle(null)
  return (
    <motion.div {...pageTransition}>
      <Hero />
      <Services />
      <ProjectsPreview />
      <Stats />
      <Testimonials />
      <CTA />
    </motion.div>
  )
}
