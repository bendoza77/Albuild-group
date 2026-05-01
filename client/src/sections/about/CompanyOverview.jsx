import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Container from '../../components/ui/Container'
import SectionTitle from '../../components/ui/SectionTitle'
import { ABOUT_IMAGES } from '../../utils/constants'

const HIGHLIGHTS = [
  'Over 250 completed projects across Georgia',
  'ISO-certified quality management processes',
  'In-house engineering and architectural teams',
  'Strict adherence to international safety standards',
  'Transparent project management and reporting',
  'Sustainable and eco-conscious construction methods',
]

const PANEL_LABELS = [
  'Precision Engineering',
  'Quality Materials',
  'Expert Craftsmanship',
  'On-Time Delivery',
]

function PhotoPanel({ image, label }) {
  return (
    <div className="relative rounded-2xl overflow-hidden warm-shadow group w-full h-full">
      <img
        src={`${image}?auto=format&fit=crop&w=1200&q=90`}
        alt={label}
        style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        className="transition-transform duration-500 group-hover:scale-105"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
      {/* Label */}
      <div className="absolute bottom-0 left-0 p-5 z-10">
        <div className="h-px w-8 bg-accent mb-2" />
        <p className="font-body text-xs uppercase tracking-widest text-beige/80 font-semibold">
          {label}
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
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Left column */}
              <div className="space-y-3 sm:space-y-4">
                <div className="h-44 sm:h-56 lg:h-64">
                  <PhotoPanel image={ABOUT_IMAGES[0]} label={PANEL_LABELS[0]} />
                </div>
                <div className="h-32 sm:h-36 lg:h-40">
                  <PhotoPanel image={ABOUT_IMAGES[1]} label={PANEL_LABELS[1]} />
                </div>
              </div>
              {/* Right column — offset */}
              <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                <div className="h-32 sm:h-36 lg:h-40">
                  <PhotoPanel image={ABOUT_IMAGES[2]} label={PANEL_LABELS[2]} />
                </div>
                <div className="h-44 sm:h-56 lg:h-64">
                  <PhotoPanel image={ABOUT_IMAGES[3]} label={PANEL_LABELS[3]} />
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-2 sm:-bottom-6 sm:-right-4 bg-secondary text-beige rounded-2xl px-5 py-4 sm:px-6 sm:py-5 warm-shadow-lg z-10"
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
