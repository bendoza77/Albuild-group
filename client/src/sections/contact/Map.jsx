import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { CONTACT_INFO } from '../../utils/constants'

const INFO_ITEMS = [
  { icon: MapPin, label: 'Address', value: CONTACT_INFO.address },
  { icon: Phone, label: 'Phone', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
  { icon: Mail, label: 'Email', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  { icon: Clock, label: 'Working Hours', value: CONTACT_INFO.hours },
]

export default function MapSection() {
  return (
    <div className="space-y-6">
      {/* Info cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {INFO_ITEMS.map(({ icon: Icon, label, value, href }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-white rounded-xl p-5 warm-shadow flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-highlight flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <p className="font-body text-[10px] uppercase tracking-widest text-warm-gray font-semibold mb-0.5">{label}</p>
              {href ? (
                <a href={href} className="font-body text-sm text-primary hover:text-secondary transition-colors font-medium">
                  {value}
                </a>
              ) : (
                <p className="font-body text-sm text-primary font-medium">{value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Map embed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="rounded-2xl overflow-hidden warm-shadow h-72"
      >
        <iframe
          title="ALBuild Group Office Location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=44.79%2C41.69%2C44.81%2C41.71&layer=mapnik&marker=41.6977%2C44.8015"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        />
      </motion.div>

      <motion.a
        href="https://www.google.com/maps/search/Rustaveli+Avenue+Tbilisi+Georgia"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="inline-flex items-center gap-2 font-body text-sm text-secondary hover:text-accent font-semibold transition-colors"
      >
        <MapPin className="w-4 h-4" />
        Open in Google Maps →
      </motion.a>
    </div>
  )
}
