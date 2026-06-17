import { motion } from 'framer-motion'
import { Instagram, Heart } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { site } from '../../data/site'
import { gallery } from '../../data/gallery'
import { staggerContainer, scaleIn, revealViewport } from '../../utils/motion'

// Reuse gallery imagery as an Instagram-style explore grid.
const feed = gallery.slice(0, 6)

export default function InstagramSection() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="container-luxe">
        <SectionHeading
          eyebrow={site.instagramHandle}
          title="Follow The Nail Theory Aesthetic"
          intro="A daily dose of pretty nails, behind-the-scenes artistry and fresh design inspiration."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6"
        >
          {feed.map((img) => (
            <motion.a
              key={img.id}
              variants={scaleIn}
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-soft"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 grid place-items-center bg-rosegold/45 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100">
                <Instagram className="h-7 w-7 text-white" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-primary group">
            <Instagram className="h-4 w-4" /> Follow on Instagram
            <Heart className="h-3.5 w-3.5 fill-current transition-transform group-hover:scale-125" />
          </a>
        </div>
      </div>
    </section>
  )
}
