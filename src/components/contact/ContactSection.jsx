import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram, Clock } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import ContactForm from './ContactForm'
import { WhatsApp } from '../common/FloatingActions'
import { site } from '../../data/site'
import { fadeUp, staggerContainer, revealViewport } from '../../utils/motion'

const details = [
  { icon: Phone, label: 'Call or Text', value: site.phoneDisplay, href: `tel:${site.phone}` },
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: 'Studio', value: 'Home Based Nail Studio', href: null },
  { icon: Clock, label: 'Hours', value: 'Mon – Sun · 10am – 8pm', href: null },
]

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-cream-fade py-20 sm:py-28">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Say Hello"
          title="Let’s Talk Nails"
          intro="Questions, custom design ideas, or just want to say hi? I’d love to hear from you."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Info + map */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2">
              {details.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blush-gradient text-rose-deep">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-sans text-[11px] uppercase tracking-wider text-rosegold">{label}</p>
                      <p className="break-words font-sans text-sm text-charcoal/75">{value}</p>
                    </div>
                  </>
                )
                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 rounded-2xl border border-rose/40 bg-white/70 p-4 backdrop-blur transition hover:shadow-soft"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl border border-rose/40 bg-white/70 p-4 backdrop-blur"
                  >
                    {inner}
                  </div>
                )
              })}
            </motion.div>

            {/* quick action buttons */}
            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white shadow-soft transition hover:brightness-95"
              >
                <WhatsApp className="h-5 w-5" /> WhatsApp
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-br from-rose to-rosegold px-6 py-3 text-sm font-medium text-white shadow-soft transition hover:brightness-105"
              >
                <Instagram className="h-5 w-5" /> Instagram
              </a>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              variants={fadeUp}
              className="relative overflow-hidden rounded-[1.75rem] border border-rose/40 shadow-soft"
            >
              <iframe
                title="Studio location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.0%2C28.4%2C77.4%2C28.7&layer=mapnik"
                className="h-56 w-full grayscale-[15%]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-rosegold/5" />
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ duration: 0.7 }}
            className="glass rounded-[2rem] p-6 shadow-soft-lg sm:p-9"
          >
            <h3 className="font-display text-2xl text-charcoal">Send a Message</h3>
            <p className="mt-1 font-sans text-sm text-charcoal/55">
              I’ll get back to you as soon as I can 💖
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
