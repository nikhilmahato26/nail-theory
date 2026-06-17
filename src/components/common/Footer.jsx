import { Link } from 'react-router-dom'
import { Instagram, Phone, Mail, MapPin, Heart } from 'lucide-react'
import { site, navLinks } from '../../data/site'
import logo from '../../assets/logo/logo.jpg'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-blush-soft to-pink-mist">
      {/* top scallop accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rosegold/40 to-transparent" />

      <div className="container-luxe grid gap-12 py-16 md:grid-cols-12">
        {/* Brand */}
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Nail Theory by Soumya"
              className="h-12 w-12 rounded-full object-cover ring-1 ring-white/70 shadow-soft"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl text-charcoal">Nail Theory</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-rosegold">
                by Soumya
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm font-sans text-sm leading-relaxed text-charcoal/65">
            {site.tagline} — luxury nail artistry crafted with care in a calm, hygienic home studio.
            Designs made just for you.
          </p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-rosegold/30 bg-white/60 px-4 py-2 text-xs font-medium text-rosegold backdrop-blur transition hover:bg-white"
          >
            <Instagram className="h-4 w-4" /> {site.instagramHandle}
          </a>
        </div>

        {/* Links */}
        <div className="md:col-span-3">
          <h4 className="font-display text-lg text-charcoal">Explore</h4>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  className="font-sans text-sm text-charcoal/65 transition hover:text-rosegold"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <h4 className="font-display text-lg text-charcoal">Get in touch</h4>
          <ul className="mt-4 space-y-3.5 font-sans text-sm text-charcoal/70">
            <li>
              <a href={`tel:${site.phone}`} className="flex items-center gap-3 transition hover:text-rosegold">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/70 text-rosegold shadow-soft">
                  <Phone className="h-4 w-4" />
                </span>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all transition hover:text-rosegold">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/70 text-rosegold shadow-soft">
                  <Mail className="h-4 w-4" />
                </span>
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/70 text-rosegold shadow-soft">
                <MapPin className="h-4 w-4" />
              </span>
              Home Based Studio
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/60">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <p className="font-sans text-xs text-charcoal/55">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 font-sans text-xs text-charcoal/55">
            Crafted with <Heart className="h-3.5 w-3.5 fill-rosegold text-rosegold" /> for pretty nails
          </p>
        </div>
      </div>
    </footer>
  )
}
