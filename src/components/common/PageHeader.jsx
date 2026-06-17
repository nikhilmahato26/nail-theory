import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { FloatingBlob, Sparkle } from './Decorations'
import { staggerContainer, fadeUp } from '../../utils/motion'

// Editorial hero band for inner pages.
export default function PageHeader({ eyebrow, title, subtitle, crumb }) {
  return (
    <section className="relative overflow-hidden bg-cream-fade pt-32 pb-16 sm:pt-40 sm:pb-20">
      <FloatingBlob className="-left-16 top-16" size={300} color="#FADADD" />
      <FloatingBlob className="-right-10 bottom-0" size={260} color="#F8C8DC" delay={1.5} />
      <Sparkle className="absolute right-[16%] top-[30%] text-rose animate-pulse-soft" size={22} />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        animate="show"
        className="container-luxe relative text-center"
      >
        {eyebrow && (
          <motion.span variants={fadeUp} className="eyebrow justify-center">
            <span className="h-px w-6 bg-rosegold/50" /> {eyebrow}
          </motion.span>
        )}
        <motion.h1
          variants={fadeUp}
          className="mt-4 font-display text-4xl leading-tight text-charcoal sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-charcoal/65"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.nav
          variants={fadeUp}
          className="mt-6 flex items-center justify-center gap-1.5 font-sans text-xs text-charcoal/50"
        >
          <Link to="/" className="transition hover:text-rosegold">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-rosegold">{crumb || title}</span>
        </motion.nav>
      </motion.div>
    </section>
  )
}
