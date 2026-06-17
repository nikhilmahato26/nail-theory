import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, revealViewport } from '../../utils/motion'

// Consistent editorial section header: eyebrow + display title + optional intro.
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'center',
  light = false,
}) {
  const alignment =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      className={`flex max-w-2xl flex-col gap-4 ${alignment}`}
    >
      {eyebrow && (
        <motion.span variants={fadeUp} className="eyebrow">
          <span className="h-px w-6 bg-rosegold/50" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={`font-display text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? 'text-cream' : 'text-charcoal'
        }`}
      >
        {title}
      </motion.h2>
      {intro && (
        <motion.p
          variants={fadeUp}
          className={`font-sans text-base leading-relaxed ${
            light ? 'text-cream/80' : 'text-charcoal/65'
          }`}
        >
          {intro}
        </motion.p>
      )}
    </motion.div>
  )
}
