import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Images } from 'lucide-react'
import { site } from '../../data/site'
import { useMouseParallax } from '../../hooks/useMouseParallax'
import { FloatingBlob, Sparkle } from '../common/Decorations'
import { staggerContainer, fadeUp } from '../../utils/motion'

// Floating Pinterest-style collage images.
const collage = [
  {
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=500&q=80',
    className: 'top-0 left-4 w-40 sm:w-52 rotate-[-6deg] z-20',
    depth: 1.4,
    rotate: '-6deg',
  },
  {
    src: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=500&q=80',
    className: 'top-16 right-0 w-44 sm:w-56 rotate-[5deg] z-30',
    depth: 0.8,
    rotate: '5deg',
  },
  {
    src: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=500&q=80',
    className: 'bottom-4 left-0 w-40 sm:w-48 rotate-[4deg] z-30',
    depth: 1.1,
    rotate: '4deg',
  },
  {
    src: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?auto=format&fit=crop&w=500&q=80',
    className: 'bottom-0 right-8 w-36 sm:w-44 rotate-[-5deg] z-20',
    depth: 1.7,
    rotate: '-5deg',
  },
]

export default function Hero() {
  const m = useMouseParallax(12)

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-cream-fade pt-28 sm:pt-32">
      {/* ambient blobs */}
      <FloatingBlob className="-left-20 top-10" size={360} color="#FADADD" />
      <FloatingBlob className="right-0 top-40" size={300} color="#F8C8DC" delay={2} />
      <FloatingBlob className="bottom-0 left-1/3" size={280} color="#FCE4EC" delay={1} />

      <Sparkle className="absolute left-[12%] top-[22%] text-rose animate-pulse-soft" size={26} />
      <Sparkle className="absolute right-[14%] bottom-[18%] text-rosegold/60 animate-pulse-soft" size={20} />

      <div className="container-luxe relative grid items-center gap-12 pb-20 lg:grid-cols-2 lg:gap-8">
        {/* LEFT */}
        <motion.div
          variants={staggerContainer(0.14, 0.1)}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center lg:text-left"
        >
          <motion.span
            variants={fadeUp}
            className="eyebrow justify-center rounded-full border border-rosegold/25 bg-white/60 px-4 py-2 backdrop-blur lg:justify-start"
          >
            <Sparkles className="h-3.5 w-3.5" /> Luxury Nail Artist
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-[2.75rem] leading-[1.05] text-charcoal sm:text-6xl lg:text-7xl"
          >
            Pretty Nails,
            <span className="block italic text-gradient">Pretty Mood ✨</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-md font-sans text-base leading-relaxed text-charcoal/65 sm:text-lg lg:mx-0"
          >
            Custom nail artistry designed to reflect your style, mood, and personality —
            crafted with luxury-level care.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Link to="/contact" className="btn-primary group w-full sm:w-auto">
              Book Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/gallery" className="btn-outline w-full sm:w-auto">
              <Images className="h-4 w-4" /> View Gallery
            </Link>
          </motion.div>

          {/* trust row */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-center justify-center gap-6 lg:justify-start"
          >
            <div className="text-center lg:text-left">
              <p className="font-display text-2xl text-rosegold">500+</p>
              <p className="font-sans text-xs text-charcoal/55">Happy clients</p>
            </div>
            <span className="h-8 w-px bg-rose/60" />
            <div className="text-center lg:text-left">
              <p className="font-display text-2xl text-rosegold">5.0★</p>
              <p className="font-sans text-xs text-charcoal/55">Average rating</p>
            </div>
            <span className="h-8 w-px bg-rose/60" />
            <div className="text-center lg:text-left">
              <p className="font-display text-2xl text-rosegold">100%</p>
              <p className="font-sans text-xs text-charcoal/55">Custom designs</p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — floating collage */}
        <div className="relative mx-auto h-[420px] w-full max-w-md sm:h-[480px] lg:h-[540px]">
          {/* glass halo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blush-gradient blur-2xl sm:h-80 sm:w-80"
          />

          {collage.map((img, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ x: m.x * img.depth, y: m.y * img.depth }}
              className={`absolute overflow-hidden rounded-[1.75rem] border-[6px] border-white bg-white shadow-soft-lg ${img.className}`}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src={img.src}
                  alt="Luxury nail design"
                  loading={i < 2 ? 'eager' : 'lazy'}
                  className="aspect-[3/4] w-full object-cover"
                />
              </motion.div>
            </motion.figure>
          ))}

          {/* glass badge card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            style={{ x: m.x * 0.5, y: m.y * 0.5 }}
            className="glass absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 rounded-2xl px-5 py-4 shadow-soft-lg"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-rosegold/15 text-rosegold">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm text-charcoal">Made just for you</p>
                <p className="font-sans text-[11px] text-charcoal/55">Hand-crafted artistry</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-rosegold/40 p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-rosegold"
          />
        </div>
      </motion.div>
    </section>
  )
}
