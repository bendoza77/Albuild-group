import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import Container from '../../components/ui/Container'
import SectionTitle from '../../components/ui/SectionTitle'
import VideoModal from '../../components/shared/VideoModal'
import { VIDEO_DATA } from '../../utils/constants'
import { staggerContainer } from '../../utils/animations'

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <section className="py-24 bg-beige">
      <Container>
        <SectionTitle
          eyebrow="მშენებლობის კულისები"
          title="გვნახეთ სამუშაოში"
          subtitle="ნახეთ, როგორ ვქმნით ნახაზებიდან სანიშნავ ნაგებობებს მთელ საქართველოში."
          centered
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {VIDEO_DATA.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={() => setActiveVideo(video.youtube_id)}
              className={`group relative rounded-2xl overflow-hidden warm-shadow cursor-pointer ${
                i === 0 ? 'md:col-span-2' : ''
              }`}
            >
              {/* Thumbnail */}
              <div className={`relative overflow-hidden ${i === 0 ? 'h-64 sm:h-72' : 'h-52 sm:h-64'}`}>
                <img
                  src={`${video.thumbnail}?auto=format&fit=crop&w=1200&q=85`}
                  alt={video.title}
                  style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />

                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="w-16 h-16 rounded-full bg-accent/90 group-hover:bg-accent flex items-center justify-center transition-colors duration-300 warm-shadow-lg"
                  >
                    <Play className="w-6 h-6 text-primary fill-current ml-1" />
                  </motion.div>
                </div>

                {/* Duration label */}
                {video.duration && (
                  <div className="absolute bottom-3 right-3 bg-primary/80 text-beige font-body text-xs px-2 py-0.5 rounded">
                    {video.duration}
                  </div>
                )}
              </div>

              {/* Card content */}
              <div className="p-5 bg-white">
                <h3 className="font-display font-bold text-base text-primary mb-1.5 group-hover:text-secondary transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="font-body text-warm-gray text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {activeVideo && (
        <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </section>
  )
}
