import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp } from '../../utils/motion'

// Luxury service card with image zoom + hover lift.
export default function ServiceCard({ service }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-rose/40 bg-white shadow-card"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-transparent" />
        <span className="absolute right-4 top-4 rounded-full bg-white/85 px-3 py-1 font-sans text-xs font-medium text-rosegold backdrop-blur">
          {service.price}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl text-charcoal">{service.title}</h3>
        <p className="mt-2 font-sans text-sm leading-relaxed text-charcoal/60">
          {service.short}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {service.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-blush-soft px-3 py-1 font-sans text-[11px] text-rose-deep"
            >
              {t}
            </span>
          ))}
        </div>

        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-1.5 font-sans text-sm font-medium text-rosegold transition group-hover:gap-2.5"
        >
          Book this service
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  )
}
