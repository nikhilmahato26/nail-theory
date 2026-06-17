import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import BookingForm from './BookingForm'
import { staggerContainer, fadeUp, revealViewport } from '../../utils/motion'

const perks = [
  'Flexible weekday & weekend slots',
  'Calm, hygienic home studio',
  'Personalised design consultation',
  'Premium, long-lasting products',
]

export default function BookingSection() {
  return (
    <section id="booking" className="relative overflow-hidden bg-rose-gradient py-20 sm:py-28">
      {/* soft overlay for legibility */}
      <div className="absolute inset-0 bg-cream/55 backdrop-blur-[2px]" />

      <div className="container-luxe relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          <motion.span variants={fadeUp} className="eyebrow">
            <span className="h-px w-6 bg-rosegold/50" /> Reserve Your Slot
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-3xl leading-tight text-charcoal sm:text-4xl lg:text-[2.75rem]"
          >
            Let’s create your <span className="italic text-gradient">dream set</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 max-w-md font-sans text-base leading-relaxed text-charcoal/70">
            Tell me a little about what you’re dreaming of and your preferred time. I’ll take care of
            the rest — from design to that final glossy finish.
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-8 space-y-3">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3 font-sans text-sm text-charcoal/75">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-rosegold" />
                {p}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <BookingForm />
      </div>
    </section>
  )
}
