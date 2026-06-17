import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { navLinks, site } from '../../data/site'
import logo from '../../assets/logo/logo.jpg'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [location.pathname])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/50 bg-cream/80 py-2.5 shadow-soft backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent py-4'
      }`}
    >
      <nav className="container-luxe flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="group flex items-center gap-3">
          <span className="relative block h-11 w-11 overflow-hidden rounded-full ring-1 ring-rose/60 shadow-soft transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
            <img src={logo} alt="Nail Theory by Soumya logo" className="h-full w-full object-cover" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg text-charcoal sm:text-xl">Nail Theory</span>
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-rosegold">
              by Soumya
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative font-sans text-sm tracking-wide transition-colors duration-300 hover:text-rosegold ${
                  isActive ? 'text-rosegold' : 'text-charcoal/70'
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 h-px w-full bg-rosegold"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link to="/contact" className="hidden btn-primary !px-6 !py-2.5 lg:inline-flex">
          <Phone className="h-4 w-4" />
          Book Now
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="grid h-11 w-11 place-items-center rounded-full border border-rose/60 bg-white/70 text-rosegold backdrop-blur lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden lg:hidden"
          >
            <div className="container-luxe flex flex-col gap-1 py-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block rounded-2xl px-4 py-3 font-sans text-base transition-colors ${
                        isActive ? 'bg-blush-soft text-rosegold' : 'text-charcoal/75 hover:bg-blush-soft/60'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <Link to="/contact" className="btn-primary mt-2 w-full">
                <Phone className="h-4 w-4" /> Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
