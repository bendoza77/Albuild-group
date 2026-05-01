import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Container from '../../components/ui/Container'
import SectionTitle from '../../components/ui/SectionTitle'

const HIGHLIGHTS = [
  'Over 250 completed projects across Georgia',
  'ISO-certified quality management processes',
  'In-house engineering and architectural teams',
  'Strict adherence to international safety standards',
  'Transparent project management and reporting',
  'Sustainable and eco-conscious construction methods',
]

/* Construction-themed gradient panels */
const PANELS = [
  {
    gradient: 'linear-gradient(140deg, #1a0e06 0%, #C06014 100%)',
    label: 'Precision Engineering',
    icon: '◈',
    tall: true,
  },
  {
    gradient: 'linear-gradient(140deg, #2C1A12 0%, #4a2810 100%)',
    label: 'Quality Materials',
    icon: '⬡',
    tall: false,
  },
  {
    gradient: 'linear-gradient(140deg, #3d2010 0%, #8a4418 100%)',
    label: 'Expert Craftsmanship',
    icon: '◉',
    tall: false,
  },
  {
    gradient: 'linear-gradient(140deg, #0e0804 0%, #2C1A12 60%, #C06014 100%)',
    label: 'On-Time Delivery',
    icon: '◈',
    tall: true,
  },
]

function ArchPanel({ panel }) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden warm-shadow flex flex-col justify-end p-5 group"
      style={{ background: panel.gradient }}
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(rgba(242,166,90,1) 1px, transparent 1px), linear-gradient(90deg, rgba(242,166,90,1) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />
      {/* Large symbol */}
      <div className="absolute top-4 right-4 text-white/10 font-display text-7xl font-bold select-none leading-none pointer-events-none">
        {panel.icon}
      </div>
      {/* Label */}
      <div className="relative z-10">
        <div className="h-px w-8 bg-accent mb-2" />
        <p className="font-body text-xs uppercase tracking-widest text-beige/70 font-semibold">
          {panel.label}
        </p>
      </div>
    </div>
  )
}

export default function CompanyOverview() {
  return (
    <section className="py-24 bg-beige">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Panel collage — no random photos */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Left column */}
              <div className="space-y-4">
                <div className="h-64"><ArchPanel panel={PANELS[0]} /></div>
                <div className="h-40"><ArchPanel panel={PANELS[1]} /></div>
              </div>
              {/* Right column — offset */}
              <div className="space-y-4 pt-8">
                <div className="h-40"><ArchPanel panel={PANELS[2]} /></div>
                <div className="h-64"><ArchPanel panel={PANELS[3]} /></div>
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 bg-secondary text-beige rounded-2xl px-6 py-5 warm-shadow-lg"
            >
              <div className="font-display text-4xl font-bold text-accent">15+</div>
              <div className="font-body text-xs uppercase tracking-wider text-beige/70 mt-1">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div>
            <SectionTitle
              eyebrow="Our Story"
              title="Who We Are"
              subtitle="Founded in 2009 in Tbilisi, ALBuild Group has grown from a small specialized team into Georgia's most trusted construction company."
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-warm-gray leading-relaxed mb-8 mt-2"
            >
              We believe that great buildings are the result of great partnerships. Our collaborative approach means we listen deeply, plan meticulously, and execute with uncompromising precision — ensuring every structure we deliver stands as a testament to the trust our clients place in us.
            </motion.p>

            <motion.ul className="space-y-3 mb-10">
              {HIGHLIGHTS.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                  className="flex items-start gap-3 font-body text-sm text-dark"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
