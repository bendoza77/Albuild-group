import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import Container from '../../components/ui/Container'
import { PAGE_HERO_IMAGES } from '../../utils/constants'

export default function CTA() {
  return (
    <section className="relative min-h-[50vh] overflow-hidden">

      {/* 4K background — outer div fills section, inner img fills it */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src={`${PAGE_HERO_IMAGES.cta}?auto=format&fit=crop&w=3840&q=90`}
          alt=""
          aria-hidden="true"
          style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      {/* Warm orange overlay */}
      <div
        style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(192,96,20,0.92) 0%, rgba(242,166,90,0.82) 100%)',
        }}
      />

      {/* Subtle dot pattern */}
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px',
        }}
      />

      <Container className="relative z-10 py-28">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-beige/60" />
            <span className="font-body text-beige/80 text-xs uppercase tracking-[0.25em] font-semibold">
              Ready to Build?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-beige leading-tight mb-6"
          >
            Let's Build Something<br />Great Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-beige/80 text-base sm:text-lg leading-relaxed mb-10 max-w-xl"
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
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2.5 bg-beige text-secondary font-body font-bold px-8 py-4 rounded-xl text-base cursor-pointer"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
            <a href="tel:+99532123456">
              <motion.span
                whileHover={{ scale: 1.04, backgroundColor: 'rgba(250,246,240,0.15)' }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2.5 border-2 border-beige/60 text-beige font-body font-semibold px-8 py-4 rounded-xl text-base cursor-pointer transition-colors"
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
