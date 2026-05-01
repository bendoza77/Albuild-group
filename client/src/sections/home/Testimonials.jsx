import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Container from '../../components/ui/Container'
import SectionTitle from '../../components/ui/SectionTitle'
import { TESTIMONIALS_DATA } from '../../utils/constants'

/* Initials avatar — no random photos */
function Avatar({ name, size = 'lg' }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const dim = size === 'lg' ? 'w-14 h-14 text-lg' : 'w-10 h-10 text-sm'

  return (
    <div
      className={`${dim} rounded-full flex items-center justify-center font-display font-bold text-accent shrink-0 border-2 border-highlight`}
      style={{ background: 'linear-gradient(135deg, #2C1A12 0%, #C06014 100%)' }}
    >
      {initials}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const total = TESTIMONIALS_DATA.length
  const prev = () => setActive((a) => (a - 1 + total) % total)
  const next = () => setActive((a) => (a + 1) % total)
  const t = TESTIMONIALS_DATA[active]

  return (
    <section className="py-24 bg-beige overflow-hidden">
      <Container>
        <SectionTitle
          eyebrow="კლიენტების ამბები"
          title="რას ამბობენ ჩვენი კლიენტები"
          subtitle="ჩვენ მიერ შენდება ურთიერთობები იმდენად მნიშვნელოვანია, რამდენადაც შენობები, რომლებსაც ვქმნით."
          centered
          className="mb-16"
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Quote className="absolute -top-4 -left-2 w-14 h-14 text-accent/15 fill-accent/15 select-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="bg-white rounded-3xl p-8 md:p-12 warm-shadow-lg relative border border-accent/10"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>

                <blockquote className="font-display text-xl md:text-2xl text-primary/90 leading-relaxed mb-8 italic">
                  "{t.text}"
                </blockquote>

                <div className="flex items-center gap-4 pt-6 border-t border-warm-gray/20">
                  <Avatar name={t.name} />
                  <div>
                    <p className="font-body font-bold text-primary">{t.name}</p>
                    <p className="font-body text-secondary text-sm">{t.role}, {t.company}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <span className="font-display text-2xl font-bold text-accent">{String(active + 1).padStart(2, '0')}</span>
                    <span className="font-body text-warm-gray text-sm">/ {String(total).padStart(2, '0')}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center gap-2">
                {TESTIMONIALS_DATA.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === active ? 'w-7 h-2 bg-secondary' : 'w-2 h-2 bg-warm-gray hover:bg-accent'
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={prev}
                  className="w-11 h-11 rounded-xl border-2 border-warm-gray/40 flex items-center justify-center text-primary hover:border-secondary hover:text-secondary transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={next}
                  className="w-11 h-11 rounded-xl bg-secondary text-beige flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
