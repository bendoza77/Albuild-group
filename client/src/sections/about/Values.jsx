import { motion } from 'framer-motion'
import { Star, Shield, Lightbulb, ShieldCheck } from 'lucide-react'
import Container from '../../components/ui/Container'
import SectionTitle from '../../components/ui/SectionTitle'
import { VALUES_DATA } from '../../utils/constants'
import { staggerContainer } from '../../utils/animations'

const ICON_MAP = { Star, Shield, Lightbulb, ShieldCheck }

const TIMELINE_EVENTS = [
  { year: '2009', title: 'Foundation', text: 'Established in Tbilisi with a mission to redefine construction standards in Georgia.' },
  { year: '2012', title: 'Commercial Breakthrough', text: 'Delivered our first large-scale commercial building, earning industry recognition.' },
  { year: '2016', title: 'Regional Expansion', text: 'Extended operations across Batumi, Kutaisi, and Rustavi.' },
  { year: '2019', title: '10-Year Milestone', text: 'Celebrated a decade of excellence with 150+ completed projects.' },
  { year: '2022', title: 'Green Building Program', text: 'Launched our sustainability initiative integrating eco-conscious methods.' },
  { year: '2024', title: 'Present Day', text: 'Over 250 projects and growing — Georgia\'s most trusted builder.' },
]

export default function Values() {
  return (
    <>
      {/* Values */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }}
        />
        <Container className="relative z-10">
          <SectionTitle
            eyebrow="Our Principles"
            title="Built on Values"
            subtitle="The beliefs that drive every decision we make and every building we create."
            centered
            light
            className="mb-16"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {VALUES_DATA.map((value, i) => {
              const Icon = ICON_MAP[value.icon]
              return (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group bg-white/10 p-7 rounded-2xl border border-beige/20 hover:border-beige/40 hover:bg-white/18 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-beige/20 flex items-center justify-center mb-5 group-hover:bg-beige/30 transition-colors">
                    {Icon && <Icon className="w-6 h-6 text-beige" />}
                  </div>
                  <h3 className="font-display font-bold text-xl text-beige mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-beige/70 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-beige">
        <Container>
          <SectionTitle
            eyebrow="Our Journey"
            title="A Legacy of Building"
            subtitle="From a small team with big ambitions to Georgia's premier construction group."
            centered
            className="mb-16"
          />

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-warm-gray/30" />

            <div className="space-y-8">
              {TIMELINE_EVENTS.map((event, i) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className={`relative flex items-center gap-6 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block bg-white rounded-xl px-6 py-4 warm-shadow border border-warm-gray/20">
                      <h4 className="font-display font-bold text-primary mb-1">{event.title}</h4>
                      <p className="font-body text-warm-gray text-sm leading-relaxed">{event.text}</p>
                    </div>
                  </div>

                  {/* Year dot */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-secondary text-beige flex items-center justify-center font-display font-bold text-xs shrink-0">
                      {event.year.slice(2)}
                    </div>
                    <div className="font-body text-secondary font-semibold text-xs mt-1 whitespace-nowrap">{event.year}</div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
