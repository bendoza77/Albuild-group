import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import Container from '../../components/ui/Container'

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/80" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, #f2a65a 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full translate-x-1/3 -translate-y-1/4 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl" />

      {/* Geometric accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.08, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute right-12 top-1/2 -translate-y-1/2 w-96 h-96 border-2 border-accent rounded-full hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute right-24 top-1/2 -translate-y-1/2 w-64 h-64 border border-beige rounded-full hidden lg:block"
      />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-accent" />
            <span className="font-body text-accent text-xs uppercase tracking-[0.25em] font-semibold">
              Ready to Build?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-beige leading-tight mb-6"
          >
            Let's Create Something
            <br />
            <span className="text-gradient">Extraordinary</span> Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-highlight/70 text-lg leading-relaxed mb-10 max-w-xl"
          >
            From the first consultation to the final handover, our team is committed to turning your vision into a landmark structure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/contact">
              <motion.span
                whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(242, 166, 90, 0.5)' }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2.5 bg-accent text-primary font-body font-bold px-8 py-4 rounded-xl text-base cursor-pointer transition-shadow"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
            <a href="tel:+99532123456">
              <motion.span
                whileHover={{ scale: 1.04, backgroundColor: 'rgba(247, 230, 211, 0.1)' }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2.5 border-2 border-beige/30 text-beige font-body font-semibold px-8 py-4 rounded-xl text-base cursor-pointer transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </motion.span>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
