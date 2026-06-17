import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, X } from 'lucide-react'
import { gallery } from '../../data/gallery'
import { revealViewport } from '../../utils/motion'

// Pinterest-style masonry. `filter` is an optional category from the Gallery page.
export default function GalleryGrid({ filter = 'All', limit }) {
  const [active, setActive] = useState(null) // lightbox image

  let items = filter === 'All' ? gallery : gallery.filter((g) => g.category === filter)
  if (limit) items = items.slice(0, limit)

  return (
    <>
      <motion.div
        layout
        className="masonry columns-2 md:columns-3 lg:columns-4"
      >
        <AnimatePresence>
          {items.map((img, i) => (
            <motion.figure
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              viewport={revealViewport}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActive(img)}
              className="group relative cursor-pointer overflow-hidden rounded-[1.5rem] shadow-soft"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110 ${
                  img.span === 'tall' ? 'aspect-[3/4]' : 'aspect-square'
                }`}
              />
              {/* hover overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/55 via-charcoal/0 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                <div className="flex items-center justify-between p-4">
                  <span className="font-sans text-xs font-medium text-cream">{img.category}</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white/90 text-rosegold">
                    <Heart className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-charcoal/70 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-lg overflow-hidden rounded-[2rem] border-[6px] border-white bg-white shadow-soft-lg"
            >
              <img src={active.src} alt={active.alt} className="max-h-[78vh] w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-charcoal/60 to-transparent p-5">
                <p className="font-serif text-lg italic text-cream">{active.alt}</p>
              </div>
            </motion.div>
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-charcoal shadow-soft transition hover:scale-110"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
