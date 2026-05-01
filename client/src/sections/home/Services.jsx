import { motion } from 'framer-motion'
import { Home, Building2, Factory, Hammer, ClipboardList, Paintbrush, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../../components/ui/Container'
import SectionTitle from '../../components/ui/SectionTitle'
import { SERVICES_DATA } from '../../utils/constants'
import { staggerContainer, scaleIn } from '../../utils/animations'

const ICON_MAP = { Home, Building2, Factory, Hammer, ClipboardList, Paintbrush }

export default function Services() {
  return (
    <section id="services" className="py-24 bg-beige">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionTitle
            eyebrow="რას ვაშენებთ"
            title={<>ჩვენი<br />მომსახურებები</>}
            subtitle="საძირკვლიდან ჩამოსამთავრებლამდე — ვაწვდით ყოვლისმომცველ სამშენებლო გადაწყვეტილებებს."
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/projects">
              <motion.span
                whileHover={{ gap: '14px' }}
                className="hidden lg:inline-flex items-center gap-2 font-body font-semibold text-secondary hover:text-accent transition-colors text-sm"
              >
                ყველა პროექტი <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SERVICES_DATA.map((service, i) => {
            const Icon = ICON_MAP[service.icon]
            return (
              <motion.div
                key={service.id}
                variants={scaleIn}
                whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(192, 96, 20, 0.14)' }}
                className="group bg-white rounded-2xl p-7 border border-warm-gray/30 border-t-4 border-t-accent/30 hover:border-t-accent transition-all duration-300 cursor-default"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5 group-hover:bg-accent/25 transition-colors duration-300">
                  {Icon && <Icon className="w-5 h-5 text-secondary" />}
                </div>

                {/* Number */}
                <div className="font-display text-5xl font-bold text-accent/15 leading-none mb-1 select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <h3 className="font-display text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-body text-warm-gray text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-px w-5 bg-accent" />
                  <span className="font-body text-xs uppercase tracking-wider text-secondary font-semibold">გაიგე მეტი</span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
