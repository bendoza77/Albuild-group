import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import Logo from '../ui/Logo'
import { NAV_LINKS, CONTACT_INFO } from '../../utils/constants'

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
)

const SERVICES = ['საცხოვრებელი მშენებლობა', 'კომერციული შენობები', 'სამრეწველო ობიექტები', 'რემონტი და რეკონსტრუქცია', 'პროექტის მენეჯმენტი', 'ინტერიერის მოწყობა']

export default function Footer() {
  return (
    <footer className="bg-primary text-beige">
      {/* Top bar */}
      <div className="border-b border-beige/10">
        <Container>
          <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-body text-warm-gray text-sm mb-1 uppercase tracking-widest">მზად ხართ მშენებლობისთვის?</p>
              <p className="font-display text-3xl font-bold text-beige">დავიწყოთ თქვენი პროექტი დღესვე.</p>
            </div>
            <Link to="/contact">
              <motion.span
                whileHover={{ scale: 1.03, boxShadow: '0 0 28px rgba(242, 166, 90, 0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-accent text-primary font-body font-bold px-7 py-3.5 rounded-lg text-base cursor-pointer"
              >
                მიიღეთ უფასო კონსულტაცია
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </div>
        </Container>
      </div>

      {/* Main footer content */}
      <Container>
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Logo variant="light" size="md" />
            </div>
            <p className="font-body text-warm-gray text-sm leading-relaxed mb-6">
              საქართველოს წამყვანი სამშენებლო კომპანია, რომელიც 2009 წლიდან ახორციელებს სიზუსტით შესრულებულ პროექტებს.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: FacebookIcon, href: '#' },
                { icon: InstagramIcon, href: '#' },
                { icon: LinkedinIcon, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-lg border border-beige/15 flex items-center justify-center text-warm-gray hover:text-accent hover:border-accent/40 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-widest text-accent mb-5">ნავიგაცია</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="font-body text-warm-gray hover:text-beige text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-accent transition-all group-hover:w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-widest text-accent mb-5">სერვისები</h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link to="/projects" className="font-body text-warm-gray hover:text-beige text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-accent transition-all group-hover:w-3" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-widest text-accent mb-5">კონტაქტი</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span className="font-body text-warm-gray text-sm leading-relaxed">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="font-body text-warm-gray hover:text-beige text-sm transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="font-body text-warm-gray hover:text-beige text-sm transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-beige/10">
        <Container>
          <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-body text-warm-gray text-xs">
              © {new Date().getFullYear()} ALBuild Group. ყველა უფლება დაცულია.
            </p>
            <div className="flex items-center gap-5">
              {['კონფიდენციალურობის პოლიტიკა', 'მომსახურების პირობები'].map((item) => (
                <a key={item} href="#" className="font-body text-warm-gray hover:text-accent text-xs transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
