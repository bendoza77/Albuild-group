import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import ContactForm from '../sections/contact/ContactForm'
import MapSection from '../sections/contact/Map'
import { pageTransition } from '../utils/animations'
import usePageTitle from '../hooks/usePageTitle'

export default function Contact() {
  usePageTitle('Contact Us')
  return (
    <motion.div {...pageTransition}>
      {/* Page hero */}
      <section className="relative pt-40 pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #f2a65a 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/12 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="h-px w-8 bg-accent" />
            <span className="font-body text-accent text-xs uppercase tracking-widest font-semibold">Get in Touch</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-bold text-beige mb-6 max-w-xl leading-tight"
          >
            Let's Build Something Great Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-warm-gray text-lg max-w-lg leading-relaxed mb-8"
          >
            Our team is ready to discuss your project, answer questions, and provide a free consultation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 font-body text-sm text-warm-gray"
          >
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-accent">Contact</span>
          </motion.div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-24 bg-beige">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                eyebrow="Contact Us"
                title="Start the Conversation"
                subtitle="Share your vision and we'll respond within 24 hours with a tailored consultation."
                className="mb-8"
              />
              <ContactForm />
            </div>
            <div className="lg:pt-24">
              <MapSection />
            </div>
          </div>
        </Container>
      </section>
    </motion.div>
  )
}
