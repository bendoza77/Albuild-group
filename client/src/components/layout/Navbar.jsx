import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Container from '../ui/Container'
import Logo from '../ui/Logo'
import { NAV_LINKS } from '../../utils/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 60)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 bg-accent z-[60]"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.05 }}
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0.5 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled ? 'glass-warm warm-shadow py-3' : 'bg-transparent py-5'
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div onClick={() => setMobileOpen(false)}>
              <Logo variant={scrolled ? 'dark' : 'light'} size="md" />
            </div>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `relative font-body font-medium text-sm px-4 py-2 rounded-lg transition-all duration-300 group ${
                        isActive
                          ? scrolled ? 'text-secondary' : 'text-accent'
                          : scrolled ? 'text-primary/70 hover:text-primary' : 'text-beige/80 hover:text-beige'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        {isActive && (
                          <motion.div
                            layoutId="nav-indicator"
                            className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+99532123456"
                className={`hidden lg:flex items-center gap-2 font-body font-semibold text-sm px-4 py-2 rounded-lg border transition-all duration-300 ${
                  scrolled
                    ? 'border-secondary/30 text-secondary hover:border-secondary hover:bg-secondary hover:text-beige'
                    : 'border-accent/40 text-accent hover:border-accent hover:bg-accent hover:text-primary'
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                +995 32 123 4567
              </a>

              <button
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle navigation"
                className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                  scrolled ? 'text-primary hover:bg-primary/5' : 'text-beige hover:bg-beige/10'
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={mobileOpen ? 'close' : 'open'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-primary/97 flex flex-col pt-24 pb-10 px-6 overflow-y-auto"
          >
            <ul className="flex flex-col gap-2 flex-1">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block font-display font-bold text-3xl py-3 border-b border-beige/10 transition-colors ${
                        isActive ? 'text-accent' : 'text-beige/80 hover:text-beige'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <a
                href="tel:+99532123456"
                className="flex items-center gap-2 text-accent font-body font-semibold text-base"
              >
                <Phone className="w-4 h-4" />
                +995 32 123 4567
              </a>
              <p className="mt-2 text-warm-gray font-body text-sm">info@albuildgroup.ge</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
