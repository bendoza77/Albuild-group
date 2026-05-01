import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '../../components/ui/Container'
import { STATS_DATA } from '../../utils/constants'

function Counter({ value, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const step = value / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Texture dots */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #f2a65a 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Warm gradient accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/8 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-accent" />
            <span className="font-body text-accent text-xs uppercase tracking-widest font-semibold">By the Numbers</span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-beige">
            Proven Track Record
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS_DATA.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group text-center p-8 rounded-2xl border border-beige/8 hover:border-accent/30 hover:bg-beige/4 transition-all duration-400"
            >
              <div className="font-display text-5xl md:text-6xl font-bold text-gradient-light mb-3 group-hover:scale-105 transition-transform duration-300 inline-block">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="w-8 h-0.5 bg-accent/40 mx-auto mb-3 group-hover:w-14 group-hover:bg-accent transition-all duration-400" />
              <p className="font-body text-warm-gray text-sm uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
