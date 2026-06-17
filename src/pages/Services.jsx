import PageTransition from '../components/common/PageTransition'
import PageHeader from '../components/common/PageHeader'
import Services from '../components/services/Services'
import WhyChoose from '../components/about/WhyChoose'
import BookingSection from '../components/booking/BookingSection'

export default function ServicesPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="What I Offer"
        title="Luxury Nail Services"
        subtitle="From soft gel extensions to bespoke hand-painted art — explore the full menu, each finished with premium care."
        crumb="Services"
      />
      <Services />
      <WhyChoose />
      <BookingSection />
    </PageTransition>
  )
}
