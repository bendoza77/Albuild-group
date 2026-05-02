import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'
import { staggerContainer, fadeInUp } from '../../utils/animations'

const SERVICES = ['საცხოვრებელი მშენებლობა', 'კომერციული შენობები', 'სამრეწველო ობიექტები', 'რემონტი', 'პროექტის მენეჯმენტი', 'ინტერიერის მოწყობა', 'სხვა']

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-10 warm-shadow text-center"
      >
        <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8 text-secondary" />
        </div>
        <h3 className="font-display text-2xl font-bold text-primary mb-3">შეტყობინება გაიგზავნა!</h3>
        <p className="font-body text-warm-gray leading-relaxed mb-6">
          გმადლობთ, რომ დაგვიკავშირდით. ჩვენი გუნდი 24 საათის განმავლობაში დაგიბრუნდებათ.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="font-body font-semibold text-secondary hover:text-accent transition-colors text-sm"
        >
          კიდევ ერთი შეტყობინების გაგზავნა →
        </button>
      </motion.div>
    )
  }

  const inputClass = `w-full font-body text-sm bg-beige border border-warm-gray/40 rounded-xl px-4 py-3.5 text-dark placeholder:text-warm-gray focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300`

  return (
    <motion.form
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-7 md:p-9 warm-shadow"
    >
      <motion.h3 variants={fadeInUp} className="font-display text-2xl font-bold text-primary mb-2">
        გამოგვიგზავნეთ შეტყობინება
      </motion.h3>
      <motion.p variants={fadeInUp} className="font-body text-warm-gray text-sm mb-7">
        შეავსეთ ქვემოთ მოცემული ფორმა და ჩვენ მალე დაგიკავშირდებით.
      </motion.p>

      <div className="space-y-4">
        <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="font-body text-xs font-semibold uppercase tracking-wider text-secondary mb-1.5 block">
              სახელი და გვარი <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Giorgi Beridze"
              className={inputClass}
            />
          </div>
          <div>
            <label className="font-body text-xs font-semibold uppercase tracking-wider text-secondary mb-1.5 block">
              ელ. ფოსტა <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className={inputClass}
            />
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="font-body text-xs font-semibold uppercase tracking-wider text-secondary mb-1.5 block">
              ტელეფონის ნომერი
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+995 5XX XXX XXX"
              className={inputClass}
            />
          </div>
          <div>
            <label className="font-body text-xs font-semibold uppercase tracking-wider text-secondary mb-1.5 block">
              სასურველი სერვისი
            </label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className={`${inputClass} cursor-pointer`}
            >
              <option value="">აირჩიეთ სერვისი...</option>
              {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <label className="font-body text-xs font-semibold uppercase tracking-wider text-secondary mb-1.5 block">
            თქვენი შეტყობინება <span className="text-accent">*</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="გვიამბეთ თქვენი პროექტის შესახებ — მოცულობა, ვადები, მდებარეობა..."
            className={`${inputClass} resize-none`}
          />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(192, 96, 20, 0.35)' }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2.5 bg-secondary text-beige font-body font-bold py-4 rounded-xl text-base transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:bg-accent hover:text-primary"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-beige/30 border-t-beige rounded-full animate-spin" />
                იგზავნება...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                შეტყობინების გაგზავნა
              </>
            )}
          </motion.button>
        </motion.div>
      </div>
    </motion.form>
  )
}
