import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Container from '../components/ui/Container'
import usePageTitle from '../hooks/usePageTitle'
import CompanyOverview from '../sections/about/CompanyOverview'
import Team from '../sections/about/Team'
import Values from '../sections/about/Values'
import Stats from '../sections/home/Stats'
import { pageTransition } from '../utils/animations'

export default function About() {
  usePageTitle('About Us')
  return (
    <motion.div {...pageTransition}>
      {/* Page hero */}
      <section className="relative pt-40 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #f2a65a 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="h-px w-8 bg-accent" />
            <span className="font-body text-accent text-xs uppercase tracking-widest font-semibold">About ALBuild Group</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-bold text-beige mb-6 max-w-2xl leading-tight"
          >
            Crafting Georgia's Built Environment Since 2009
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-warm-gray text-lg max-w-xl leading-relaxed mb-8"
          >
            Discover the story, people, and principles behind Georgia's most trusted construction group.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 font-body text-sm text-warm-gray"
          >
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-accent">About</span>
          </motion.div>
        </Container>
      </section>

      <CompanyOverview />
      <Stats />
      <Team />
      <Values />

      {/* CTA strip */}
      <section className="py-16 bg-highlight">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-body text-secondary text-sm uppercase tracking-widest font-semibold mb-1">Ready to work together?</p>
              <p className="font-display text-2xl font-bold text-primary">Let's discuss your project.</p>
            </div>
            <Link to="/contact">
              <motion.span
                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(192, 96, 20, 0.3)' }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 bg-secondary text-beige font-body font-bold px-7 py-3.5 rounded-xl text-sm cursor-pointer"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </div>
        </Container>
      </section>
    </motion.div>
  )
}
