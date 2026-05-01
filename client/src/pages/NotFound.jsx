import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import Container from '../components/ui/Container'
import usePageTitle from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Page Not Found')
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, #f2a65a 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      <Container className="relative z-10 text-center py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-display text-[10rem] md:text-[14rem] font-bold text-gradient-light opacity-20 leading-none select-none">
            404
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="-mt-8 relative z-10"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-beige mb-4">
              Page Not Found
            </h1>
            <p className="font-body text-warm-gray text-lg mb-10 max-w-md mx-auto">
              This page doesn't exist. It may have been moved or the address was entered incorrectly.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 bg-accent text-primary font-body font-bold px-7 py-3.5 rounded-xl text-base cursor-pointer"
                >
                  <Home className="w-4 h-4" />
                  Back to Home
                </motion.span>
              </Link>
              <button onClick={() => window.history.back()}>
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 border-2 border-beige/30 text-beige font-body font-semibold px-7 py-3.5 rounded-xl text-base cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Go Back
                </motion.span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}
