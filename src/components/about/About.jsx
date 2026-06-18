import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Quote } from 'lucide-react'
import Reveal from '../common/Reveal'
import { Sparkle } from '../common/Decorations'
import { fadeUp, staggerContainer, scaleIn, revealViewport } from '../../utils/motion'
import aboutImg from '../../assets/about-soumya.jpg'

const stats = [
  { value: '4+', label: 'Years of artistry' },
  { value: '20+', label: 'Signature designs' },
  { value: '100%', label: 'Personalised care' },
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <Sparkle className="absolute right-[8%] top-[12%] text-rose animate-pulse-soft" size={22} />

      <div className="container-luxe grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Portrait */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          className="relative mx-auto w-full max-w-md lg:mx-0"
        >
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[2.5rem] border border-rose/60" />
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-soft-lg">
            <img
              src={aboutImg}
              alt="Soumya, luxury nail artist at work"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rosegold/20 to-transparent" />
          </div>

          {/* floating quote card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="glass absolute -bottom-6 -right-2 max-w-[220px] rounded-2xl p-5 shadow-soft-lg sm:-right-8"
          >
            <Quote className="h-5 w-5 text-rosegold" />
            <p className="mt-2 font-serif text-base italic leading-snug text-charcoal/80">
              “Every set is a little piece of art.”
            </p>
            <p className="mt-2 font-sans text-xs font-medium text-rosegold">— Soumya</p>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          <motion.span variants={fadeUp} className="eyebrow">
            <span className="h-px w-6 bg-rosegold/50" /> The Artist
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-3xl leading-tight text-charcoal sm:text-4xl lg:text-[2.75rem]"
          >
            Hi, I’m <span className="italic text-gradient">Soumya Arora</span>, the founder of Nail Theory by Soumya.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 font-sans text-base leading-relaxed text-charcoal/70"
          >
            I am a certified nail artist passionate about creating beautiful, high-quality nails that help clients feel confident and express their personal style. Nail Theory is a home-based nail studio in Delhi NCR specializing in soft gel extensions, custom nail art, gel polish applications, press-on nails, nail maintenance, and basic nail care.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 font-sans text-base leading-relaxed text-charcoal/70"
          >
            My goal is to provide a comfortable, personalized experience while delivering trendy, long-lasting nail designs tailored to each client’s preferences.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-6 font-display text-xl italic text-rosegold font-semibold"
          >
            ✨ Pretty Nails, Pretty Mood ✨
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-rose/50 bg-white/60 px-3 py-4 text-center backdrop-blur"
              >
                <p className="font-display text-2xl text-rosegold sm:text-3xl">{s.value}</p>
                <p className="mt-1 font-sans text-[11px] leading-tight text-charcoal/55">{s.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-9">
            <Link to="/about" className="btn-primary group">
              My Story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
