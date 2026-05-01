import { Link } from 'react-router-dom'

/* -------------------------------------------------------------------------- */
/*  ALBuild Group SVG Icon                                                     */
/* -------------------------------------------------------------------------- */
export function LogoIcon({ className = 'w-9 h-9' }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="11" fill="#2C1A12" />
      {/* A-frame construction truss */}
      <path d="M24 6 L7 42 H14.5 L24 18 L33.5 42 H41 L24 6Z" fill="#F2A65A" />
      {/* Structural crossbar — terracotta */}
      <rect x="16" y="27.5" width="16" height="3.5" rx="1.75" fill="#C06014" />
      {/* Foundation line */}
      <rect x="8" y="42" width="32" height="2" rx="1" fill="#F7E6D3" opacity="0.25" />
    </svg>
  )
}

/* -------------------------------------------------------------------------- */
/*  Full Logo — icon + wordmark                                                */
/*  variant: "dark" (for light/scrolled bg) | "light" (for dark/hero bg)     */
/* -------------------------------------------------------------------------- */
export default function Logo({ variant = 'light', size = 'md', className = '', asLink = true }) {
  const sizes = {
    sm: { icon: 'w-7 h-7', title: 'text-base', sub: 'text-[9px]', gap: 'gap-2' },
    md: { icon: 'w-9 h-9', title: 'text-lg',   sub: 'text-[10px]', gap: 'gap-3' },
    lg: { icon: 'w-12 h-12', title: 'text-2xl', sub: 'text-xs',    gap: 'gap-4' },
  }
  const s = sizes[size] ?? sizes.md

  const textColor = variant === 'dark' ? 'text-primary' : 'text-beige'
  const subColor  = variant === 'dark' ? 'text-secondary' : 'text-accent'

  const content = (
    <span className={`flex items-center ${s.gap} ${className}`}>
      <LogoIcon className={s.icon} />
      <span className="leading-none select-none">
        <span className={`font-display font-bold block transition-colors duration-300 ${s.title} ${textColor}`}>
          ALBuild
        </span>
        <span className={`font-body uppercase tracking-[0.22em] block transition-colors duration-300 ${s.sub} ${subColor}`}>
          Group
        </span>
      </span>
    </span>
  )

  if (!asLink) return content

  return (
    <Link to="/" aria-label="ALBuild Group — Home">
      {content}
    </Link>
  )
}
