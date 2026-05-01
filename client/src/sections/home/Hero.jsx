import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, Award, Users, Briefcase, Play } from 'lucide-react'
import Container from '../../components/ui/Container'
import VideoModal from '../../components/shared/VideoModal'
import { HERO_IMAGE, VIDEO_DATA } from '../../utils/constants'

const HERO_STATS = [
  { icon: Award,    value: '15+',  label: 'Years'    },
  { icon: Briefcase, value: '250+', label: 'Projects' },
  { icon: Users,    value: '50+',  label: 'Experts'  },
]

/* City-skyline silhouette – pure SVG, always on-brand */
function SkyllineSVG() {
  return (
    <svg
      viewBox="0 0 900 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 right-0 w-[55%] h-auto opacity-[0.07] hidden lg:block pointer-events-none select-none"
      aria-hidden="true"
      preserveAspectRatio="xMaxYMax meet"
    >
      {/* ── Buildings ── */}
      <rect x="0"   y="200" width="75"  height="220" />
      <rect x="10"  y="160" width="55"  height="260" />
      <rect x="90"  y="120" width="90"  height="300" />
      <rect x="195" y="80"  width="80"  height="340" />
      <rect x="205" y="50"  width="60"  height="370" />
      <rect x="290" y="140" width="65"  height="280" />
      <rect x="370" y="60"  width="100" height="360" />
      <rect x="385" y="20"  width="70"  height="400" />
      <rect x="485" y="110" width="75"  height="310" />
      <rect x="575" y="150" width="85"  height="270" />
      <rect x="575" y="90"  width="55"  height="330" />
      <rect x="675" y="180" width="70"  height="240" />
      <rect x="760" y="130" width="90"  height="290" />
      <rect x="780" y="70"  width="60"  height="350" />
      <rect x="860" y="200" width="40"  height="220" />

      {/* ── Crane mast ── */}
      <rect x="310" y="0"   width="8"   height="145" />
      {/* jib */}
      <rect x="200" y="5"   width="220" height="5"   />
      {/* counter-jib */}
      <rect x="198" y="5"   width="5"   height="50"  />
      {/* hook line */}
      <rect x="368" y="10"  width="3"   height="80"  />

      {/* ── Ground line ── */}
      <rect x="0"   y="418" width="900" height="4"   />
    </svg>
  )
}

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)
  const scrollDown = () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Background: real photo + layered warm gradients ── */}
      <div className="absolute inset-0 z-0">
        {/* Hero construction photo — wrapper fills section, img fills wrapper */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <img
            src={`${HERO_IMAGE}?auto=format&fit=crop&w=3840&q=90`}
            alt=""
            aria-hidden="true"
            style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
          />
        </div>

        {/* Warm overlay — lets the photo breathe while keeping text readable */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 90% 10%, rgba(192,96,20,0.60) 0%, transparent 60%),
              radial-gradient(ellipse 60% 50% at 10% 90%, rgba(242,166,90,0.30) 0%, transparent 55%),
              linear-gradient(140deg, rgba(18,9,0,0.72) 0%, rgba(44,26,18,0.62) 45%, rgba(61,34,21,0.50) 100%)
            `,
          }}
        />

        {/* Blueprint grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(242,166,90,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(242,166,90,1) 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
          }}
        />

        {/* Bottom fade to page background */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-beige/80 to-transparent" />
      </div>

      {/* City skyline silhouette */}
      <SkyllineSVG />

      {/* Decorative circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.10, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-24 right-16 w-72 h-72 border border-accent rounded-full hidden lg:block"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.06, scale: 1 }}
        transition={{ duration: 2, delay: 0.8 }}
        className="absolute top-36 right-36 w-48 h-48 border border-accent rounded-full hidden lg:block"
      />

      {/* Vertical text strip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.14, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute right-7 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4"
      >
        <div className="w-px h-20 bg-accent" />
        <p className="font-body text-[11px] uppercase tracking-[0.4em] text-beige rotate-90 whitespace-nowrap">
          Building Georgia's Future
        </p>
        <div className="w-px h-20 bg-accent" />
      </motion.div>

      {/* ── Content ── */}
      <Container className="relative z-10 pt-28 pb-32">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-10 bg-accent" />
            <span className="font-body text-accent text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold">
              Est. 2009 — Georgia's Premier Builder
            </span>
          </motion.div>

          {/* Headline */}
          {['Building Strong', 'Foundations', 'for Tomorrow'].map((line, i) => (
            <div className="overflow-hidden" key={i}>
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.45 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
                className={`mb-2 ${i === 1 ? 'text-gradient inline-block' : ''}`}
              >
                <h1 className={`font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.03] ${
                  i === 1 ? 'text-gradient' : 'text-beige'
                }`}>
                  {line}
                </h1>
              </motion.div>
            </div>
          ))}

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.88 }}
            className="font-body text-base sm:text-lg text-highlight/70 leading-relaxed mt-6 mb-10 max-w-lg"
          >
            ALBuild Group delivers precision-engineered construction projects across Georgia — from luxury residences to landmark commercial developments.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.02 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link to="/projects">
              <motion.span
                whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(242,166,90,0.45)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 bg-accent text-primary font-body font-bold px-7 py-4 rounded-xl text-base cursor-pointer transition-shadow duration-300"
              >
                View Our Projects <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
            <Link to="/contact">
              <motion.span
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(247,230,211,0.1)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 border-2 border-highlight/40 text-beige font-body font-semibold px-7 py-4 rounded-xl text-base cursor-pointer transition-colors duration-300"
              >
                Free Consultation
              </motion.span>
            </Link>

            <motion.button
              onClick={() => setVideoOpen(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 text-beige/80 hover:text-beige font-body font-semibold text-base cursor-pointer transition-colors duration-300 group"
            >
              <span className="w-11 h-11 rounded-full border-2 border-accent/60 group-hover:border-accent flex items-center justify-center transition-colors duration-300">
                <Play className="w-4 h-4 text-accent fill-current ml-0.5" />
              </span>
              Watch Our Story
            </motion.button>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.15 }}
            className="flex flex-wrap gap-8 items-center"
          >
            {HERO_STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="font-display font-bold text-xl text-accent leading-none">{value}</div>
                  <div className="font-body text-[10px] uppercase tracking-wider text-warm-gray mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        onClick={scrollDown}
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-warm-gray hover:text-accent transition-colors cursor-pointer"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.25em]">Explore</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>

      {videoOpen && (
        <VideoModal videoId={VIDEO_DATA[0].youtube_id} onClose={() => setVideoOpen(false)} />
      )}
    </section>
  )
}
