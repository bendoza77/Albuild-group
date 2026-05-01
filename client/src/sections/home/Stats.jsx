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
    <section className="py-20 bg-highlight">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 bg-secondary" />
            <span className="font-body text-secondary text-xs uppercase tracking-widest font-semibold">By the Numbers</span>
            <div className="h-px w-8 bg-secondary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            Proven Track Record
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {STATS_DATA.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group text-center p-8 rounded-2xl bg-white warm-shadow border border-warm-gray/20 hover:border-accent/40 hover:warm-shadow-lg transition-all duration-300"
            >
              <div className="font-display text-5xl md:text-6xl font-bold text-secondary mb-3 group-hover:scale-105 transition-transform duration-300 inline-block">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="w-8 h-1 bg-accent/50 mx-auto mb-3 rounded-full group-hover:w-14 group-hover:bg-accent transition-all duration-400" />
              <p className="font-body text-primary/60 text-sm uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
