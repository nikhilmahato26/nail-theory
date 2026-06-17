import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { CalendarHeart, Check, Loader2 } from 'lucide-react'
import { services } from '../../data/services'
import { site } from '../../data/site'
import { WhatsApp } from '../common/FloatingActions'

// Luxury appointment booking card. Submits to console (wire to a backend/EmailJS
// in production) and offers a one-tap WhatsApp booking with a prefilled message.
export default function BookingForm() {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm()
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = (data) => {
    setLoading(true)
    // Simulate async submission.
    setTimeout(() => {
      console.log('Booking request:', data)
      setLoading(false)
      setSent(true)
      reset()
      setTimeout(() => setSent(false), 4000)
    }, 1100)
  }

  const whatsappBooking = () => {
    const v = getValues()
    const msg = encodeURIComponent(
      `Hi Soumya! I'd love to book an appointment ✨\n\n` +
        `Name: ${v.name || '-'}\n` +
        `Phone: ${v.phone || '-'}\n` +
        `Service: ${v.service || '-'}\n` +
        `Date: ${v.date || '-'}\n` +
        `Time: ${v.time || '-'}\n` +
        `Note: ${v.message || '-'}`
    )
    window.open(`${site.whatsapp}?text=${msg}`, '_blank')
  }

  const fieldWrap = 'flex flex-col gap-1.5'
  const labelCls = 'font-sans text-xs font-medium text-charcoal/70'
  const errCls = 'font-sans text-[11px] text-rose-deep'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="glass relative overflow-hidden rounded-[2rem] p-6 shadow-soft-lg sm:p-9"
    >
      <div className="mb-6 flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-rosegold/15 text-rosegold">
          <CalendarHeart className="h-6 w-6" />
        </span>
        <div>
          <h3 className="font-display text-2xl text-charcoal">Book Your Appointment</h3>
          <p className="font-sans text-sm text-charcoal/55">I’ll confirm your slot personally 💖</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2">
        <div className={fieldWrap}>
          <label className={labelCls}>Name</label>
          <input
            className="input-luxe"
            placeholder="Your name"
            {...register('name', { required: 'Please enter your name' })}
          />
          {errors.name && <span className={errCls}>{errors.name.message}</span>}
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>Phone Number</label>
          <input
            className="input-luxe"
            placeholder="10-digit number"
            type="tel"
            {...register('phone', {
              required: 'Please enter your phone number',
              pattern: { value: /^[0-9+\s-]{8,15}$/, message: 'Enter a valid phone number' },
            })}
          />
          {errors.phone && <span className={errCls}>{errors.phone.message}</span>}
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>Service</label>
          <select className="input-luxe" defaultValue="" {...register('service', { required: 'Pick a service' })}>
            <option value="" disabled>
              Choose a service
            </option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
          {errors.service && <span className={errCls}>{errors.service.message}</span>}
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>Preferred Date</label>
          <input className="input-luxe" type="date" {...register('date', { required: 'Pick a date' })} />
          {errors.date && <span className={errCls}>{errors.date.message}</span>}
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>Preferred Time</label>
          <input className="input-luxe" type="time" {...register('time', { required: 'Pick a time' })} />
          {errors.time && <span className={errCls}>{errors.time.message}</span>}
        </div>

        <div className={fieldWrap}>
          <label className={labelCls}>Message (optional)</label>
          <input className="input-luxe" placeholder="Any design ideas?" {...register('message')} />
        </div>

        <div className="mt-2 flex flex-col gap-3 sm:col-span-2 sm:flex-row">
          <button type="submit" disabled={loading} className="btn-primary flex-1">
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Sending…
              </>
            ) : sent ? (
              <>
                <Check className="h-4 w-4" /> Request Sent!
              </>
            ) : (
              <>Book Appointment</>
            )}
          </button>
          <button
            type="button"
            onClick={whatsappBooking}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-medium text-white shadow-soft transition hover:brightness-95"
          >
            <WhatsApp className="h-5 w-5" /> WhatsApp Booking
          </button>
        </div>
      </form>
    </motion.div>
  )
}
