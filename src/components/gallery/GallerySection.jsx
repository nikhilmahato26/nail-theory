import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import GalleryGrid from './GalleryGrid'

// Home-page gallery teaser — links through to the full gallery page.
export default function GallerySection() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="The Nail Theory Board"
          title="A Pinterest-Worthy Gallery"
          intro="Scroll through a curated board of real sets — soft, glossy and editorial. Tap any design to view it up close."
        />

        <div className="mt-14">
          <GalleryGrid limit={10} />
        </div>

        <div className="mt-12 flex justify-center">
          <Link to="/gallery" className="btn-primary group">
            Explore Full Gallery
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
