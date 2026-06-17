import PageTransition from '../components/common/PageTransition'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Services from '../components/services/Services'
import GallerySection from '../components/gallery/GallerySection'
import WhyChoose from '../components/about/WhyChoose'
import Testimonials from '../components/testimonials/Testimonials'
import BookingSection from '../components/booking/BookingSection'
import InstagramSection from '../components/gallery/InstagramSection'

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <Services limit={6} />
      <GallerySection />
      <WhyChoose />
      <Testimonials />
      <BookingSection />
      <InstagramSection />
    </PageTransition>
  )
}
