import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import Container from '../../components/ui/Container'
import SectionTitle from '../../components/ui/SectionTitle'
import { TEAM_DATA } from '../../utils/constants'
import { staggerContainer } from '../../utils/animations'

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

/* Fallback gradient per team member (shown if photo fails to load) */
const MEMBER_GRADIENTS = [
  'linear-gradient(140deg, #2C1A12 0%, #C06014 100%)',
  'linear-gradient(140deg, #1a0e06 0%, #4a2810 70%, #C06014 100%)',
  'linear-gradient(140deg, #3d2010 0%, #8a4418 100%)',
  'linear-gradient(140deg, #120a04 0%, #2C1A12 50%, #6b3515 100%)',
]

function MemberAvatar({ name, image, gradient }) {
  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{ background: gradient }}
    >
      <img
        src={`${image}?auto=format&fit=crop&w=800&h=800&q=90`}
        alt={name}
        style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
        className="transition-transform duration-500 group-hover:scale-105"
        onError={(e) => { e.currentTarget.style.display = 'none' }}
      />
    </div>
  )
}

export default function Team() {
  return (
    <section className="py-24 bg-highlight/40">
      <Container>
        <SectionTitle
          eyebrow="ჩვენი გუნდი"
          title="გაიცანით ჩვენი ხელმძღვანელობა"
          subtitle="პროფესიონალ სპეციალისტთა გუნდი, რომელიც ყოველ პროექტზე სრულყოფილების მიღწევას ისახავს მიზნად."
          centered
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {TEAM_DATA.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden warm-shadow hover:warm-shadow-lg transition-all duration-400"
            >
              {/* Avatar */}
              <div className="relative h-56 overflow-hidden">
                <MemberAvatar
                  name={member.name}
                  image={member.image}
                  gradient={MEMBER_GRADIENTS[i % MEMBER_GRADIENTS.length]}
                />
                {/* Warm overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Social links */}
                <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                  <a href="#" className="w-8 h-8 rounded-lg bg-white/90 flex items-center justify-center text-primary hover:bg-accent transition-colors">
                    <LinkedinIcon />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-lg bg-white/90 flex items-center justify-center text-primary hover:bg-accent transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-primary mb-1 group-hover:text-secondary transition-colors">
                  {member.name}
                </h3>
                <p className="font-body text-secondary text-xs uppercase tracking-wider font-semibold mb-3">
                  {member.role}
                </p>
                <p className="font-body text-warm-gray text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
