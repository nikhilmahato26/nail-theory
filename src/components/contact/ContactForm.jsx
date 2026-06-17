import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, Check, Loader2 } from 'lucide-react'

// General enquiry form. Logs to console — wire to a backend/EmailJS in production.
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = (data) => {
    setLoading(true)
    setTimeout(() => {
      console.log('Contact message:', data)
      setLoading(false)
      setSent(true)
      reset()
      setTimeout(() => setSent(false), 4000)
    }, 1000)
  }

  const errCls = 'font-sans text-[11px] text-rose-deep'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <input
            className="input-luxe"
            placeholder="Your name"
            {...register('name', { required: 'Please enter your name' })}
          />
          {errors.name && <span className={errCls}>{errors.name.message}</span>}
        </div>
        <div className="flex flex-col gap-1.5">
          <input
            className="input-luxe"
            type="email"
            placeholder="Email address"
            {...register('email', {
              required: 'Please enter your email',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
            })}
          />
          {errors.email && <span className={errCls}>{errors.email.message}</span>}
        </div>
      </div>

      <input className="input-luxe" placeholder="Phone (optional)" type="tel" {...register('phone')} />

      <div className="flex flex-col gap-1.5">
        <textarea
          rows={5}
          className="input-luxe resize-none"
          placeholder="Tell me about the look you’re dreaming of…"
          {...register('message', { required: 'Please add a message' })}
        />
        {errors.message && <span className={errCls}>{errors.message.message}</span>}
      </div>

      <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto">
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : sent ? (
          <>
            <Check className="h-4 w-4" /> Message Sent!
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Send Message
          </>
        )}
      </button>
    </form>
  )
}
