import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import { features } from '../../data/features'
import { staggerContainer, fadeUp, revealViewport } from '../../utils/motion'

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="The Difference"
          title="Why Choose Nail Theory"
          intro="A little luxury, a lot of care — here’s what makes every appointment feel special."
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group rounded-[1.5rem] border border-rose/40 bg-white/70 p-6 text-center shadow-soft backdrop-blur transition-shadow hover:shadow-soft-lg"
            >
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-blush-gradient text-rose-deep transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg text-charcoal">{title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-charcoal/60">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
