export default function Container({ children, className = '', narrow = false, wide = false }) {
  const maxW = wide ? 'max-w-screen-2xl' : narrow ? 'max-w-4xl' : 'max-w-7xl'
  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${maxW} ${className}`}>
      {children}
    </div>
  )
}
