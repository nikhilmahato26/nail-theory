import PageTransition from '../components/common/PageTransition'
import PageHeader from '../components/common/PageHeader'
import ContactSection from '../components/contact/ContactSection'
import BookingSection from '../components/booking/BookingSection'

export default function ContactPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact"
        subtitle="Nail Theory by Soumya — a home based nail studio & freelance nail artist. Let’s make something pretty together."
        crumb="Contact"
      />
      <ContactSection />
      <BookingSection />
    </PageTransition>
  )
}
