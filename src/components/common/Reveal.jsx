import { motion } from 'framer-motion'
import { fadeUp, revealViewport } from '../../utils/motion'

// Lightweight scroll-reveal wrapper. Defaults to a soft fade-up.
export default function Reveal({ children, variants = fadeUp, className = '', delay = 0, as = 'div' }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  )
}
