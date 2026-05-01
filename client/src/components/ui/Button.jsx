import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const MotionLink = motion.create(Link)

const VARIANTS = {
  primary: 'bg-secondary text-beige hover:bg-accent hover:text-primary border-2 border-transparent',
  outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-primary bg-transparent',
  'outline-light': 'border-2 border-beige/60 text-beige hover:bg-beige hover:text-primary bg-transparent',
  ghost: 'text-secondary hover:text-accent bg-transparent border-2 border-transparent',
  dark: 'bg-primary text-beige hover:bg-secondary border-2 border-transparent',
  accent: 'bg-accent text-primary hover:bg-secondary hover:text-beige border-2 border-transparent',
}

const SIZES = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
}

export default function Button({ children, variant = 'primary', size = 'md', to, href, className = '', glowing = false, ...props }) {
  const base = `inline-flex items-center justify-center font-body font-semibold rounded-lg transition-all duration-300 cursor-pointer select-none ${VARIANTS[variant]} ${SIZES[size]} ${glowing ? 'glow-accent' : ''} ${className}`

  const motionProps = {
    whileHover: { scale: 1.025 },
    whileTap: { scale: 0.975 },
    transition: { duration: 0.2 },
  }

  if (to) {
    return <MotionLink to={to} className={base} {...motionProps} {...props}>{children}</MotionLink>
  }
  if (href) {
    return <motion.a href={href} className={base} {...motionProps} {...props}>{children}</motion.a>
  }
  return <motion.button className={base} {...motionProps} {...props}>{children}</motion.button>
}
