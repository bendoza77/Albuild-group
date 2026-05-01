export default function Badge({ children, variant = 'accent', className = '' }) {
  const variants = {
    accent: 'bg-accent/15 text-secondary border border-accent/30',
    primary: 'bg-primary/10 text-primary border border-primary/20',
    light: 'bg-beige/20 text-beige border border-beige/30',
    warm: 'bg-highlight text-secondary border border-accent/20',
  }
  return (
    <span className={`inline-block font-body font-semibold text-xs uppercase tracking-widest px-3 py-1 rounded-full ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
