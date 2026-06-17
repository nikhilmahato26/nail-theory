import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/common/PageTransition'
import PageHeader from '../components/common/PageHeader'
import GalleryGrid from '../components/gallery/GalleryGrid'
import InstagramSection from '../components/gallery/InstagramSection'
import BookingSection from '../components/booking/BookingSection'
import { galleryFilters } from '../data/gallery'

export default function GalleryPage() {
  const [filter, setFilter] = useState('All')

  return (
    <PageTransition>
      <PageHeader
        eyebrow="The Nail Theory Board"
        title="Gallery"
        subtitle="A curated board of real sets — tap any design to view it up close. Like scrolling an Instagram Explore page."
        crumb="Gallery"
      />

      <section className="bg-cream py-12 sm:py-16">
        <div className="container-luxe">
          {/* Filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-2.5">
            {galleryFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative rounded-full px-5 py-2 font-sans text-sm transition-colors duration-300 ${
                  filter === f ? 'text-cream' : 'text-charcoal/65 hover:text-rosegold'
                }`}
              >
                {filter === f && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-rosegold shadow-soft"
                    transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                  />
                )}
                <span className="relative">{f}</span>
              </button>
            ))}
          </div>

          <GalleryGrid filter={filter} />
        </div>
      </section>

      <InstagramSection />
      <BookingSection />
    </PageTransition>
  )
}
