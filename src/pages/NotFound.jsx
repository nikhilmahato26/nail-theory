import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import PageTransition from '../components/common/PageTransition'
import { FloatingBlob } from '../components/common/Decorations'

export default function NotFound() {
  return (
    <PageTransition>
      <section className="relative grid min-h-[70vh] place-items-center overflow-hidden bg-cream-fade px-6 pt-28">
        <FloatingBlob className="-left-10 top-20" size={280} color="#FADADD" />
        <FloatingBlob className="-right-10 bottom-10" size={240} color="#F8C8DC" delay={1} />
        <div className="relative text-center">
          <p className="font-display text-7xl text-gradient sm:text-8xl">404</p>
          <h1 className="mt-4 font-display text-2xl text-charcoal sm:text-3xl">
            This page is still drying ✨
          </h1>
          <p className="mx-auto mt-3 max-w-sm font-sans text-sm text-charcoal/60">
            The page you’re looking for doesn’t exist — but your dream set does.
          </p>
          <Link to="/" className="btn-primary mt-8">
            <Home className="h-4 w-4" /> Back Home
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}
