import { motion } from 'framer-motion'

// Soft floating decorative blobs + sparkles used as ambient background accents.
export function FloatingBlob({ className = '', size = 320, color = '#F8C8DC', delay = 0 }) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{ width: size, height: size, background: color }}
      animate={{ y: [0, -24, 0], scale: [1, 1.06, 1], opacity: [0.45, 0.7, 0.45] }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  )
}

// Tiny decorative sparkle (CSS) for that Pinterest glimmer.
export function Sparkle({ className = '', size = 18 }) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`pointer-events-none ${className}`}
    >
      <path
        d="M12 0c.6 6 5.4 10.8 12 12-6.6 1.2-11.4 6-12 12-.6-6-5.4-10.8-12-12C6.6 10.8 11.4 6 12 0Z"
        fill="currentColor"
      />
    </svg>
  )
}
