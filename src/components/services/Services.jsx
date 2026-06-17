import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import ServiceCard from './ServiceCard'
import { services } from '../../data/services'
import { staggerContainer, revealViewport } from '../../utils/motion'

// `limit` lets the Home page show a subset; Services page shows all.
export default function Services({ limit }) {
  const list = limit ? services.slice(0, limit) : services

  return (
    <section id="services" className="relative overflow-hidden bg-cream-fade py-20 sm:py-28">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="What I Offer"
          title="Luxury Nail Services"
          intro="From natural-looking extensions to hand-painted artistry — every service is tailored to you and finished with premium care."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
