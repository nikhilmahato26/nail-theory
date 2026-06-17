import PageTransition from '../components/common/PageTransition'
import PageHeader from '../components/common/PageHeader'
import About from '../components/about/About'
import WhyChoose from '../components/about/WhyChoose'
import Testimonials from '../components/testimonials/Testimonials'
import BookingSection from '../components/booking/BookingSection'

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="The Artist"
        title="About Soumya"
        subtitle="The heart, hands and philosophy behind Nail Theory — luxury nail artistry made just for you."
        crumb="About"
      />
      <About />
      <WhyChoose />
      <Testimonials />
      <BookingSection />
    </PageTransition>
  )
}
