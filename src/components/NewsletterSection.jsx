import { useRef, useState } from 'react'
import { LoaderCircle } from 'lucide-react'
import { MOTION_OK, gsap, revealOnScroll, useGSAP } from '../lib/gsap'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
// Set VITE_NEWSLETTER_ENDPOINT to a real signup endpoint to enable delivery.
const ENDPOINT = import.meta.env.VITE_NEWSLETTER_ENDPOINT

export default function NewsletterSection() {
  const scope = useRef(null)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        revealOnScroll(scope.current, '[data-reveal]', { trigger: scope.current, stagger: 0.12, start: 'top 88%' })
      })
    },
    { scope },
  )

  const onSubmit = async (event) => {
    event.preventDefault()
    const value = email.trim()
    if (!value) {
      setStatus({ state: 'error', message: 'Please enter your email address.' })
      return
    }
    if (!EMAIL_PATTERN.test(value)) {
      setStatus({ state: 'error', message: 'Please enter a valid email address, like name@example.com.' })
      return
    }

    setStatus({ state: 'loading', message: '' })

    if (!ENDPOINT) {
      // No email service is connected: be honest rather than faking a subscription.
      await new Promise((resolve) => window.setTimeout(resolve, 600))
      setStatus({
        state: 'info',
        message: 'Thanks! Our newsletter service isn’t connected yet, so you haven’t been subscribed. Please check back soon.',
      })
      return
    }

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value }),
      })
      if (!response.ok) throw new Error(`Request failed with ${response.status}`)
      setStatus({ state: 'success', message: 'You’re subscribed! Look out for our next edit in your inbox.' })
      setEmail('')
    } catch {
      setStatus({ state: 'error', message: 'We couldn’t subscribe you right now. Please try again in a moment.' })
    }
  }

  const loading = status.state === 'loading'
  const hasError = status.state === 'error'

  return (
    <section ref={scope} className="newsletter" aria-labelledby="newsletter-title">
      <div className="container newsletter__inner">
        <div className="newsletter__copy">
          <h2 id="newsletter-title" className="newsletter__title" data-reveal>
            Stay Connected
          </h2>
          <p data-reveal>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
        </div>
        <form className="newsletter__form" noValidate onSubmit={onSubmit} data-reveal>
          <div className="newsletter__field">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="Enter your email address"
              value={email}
              aria-invalid={hasError}
              aria-describedby="newsletter-status"
              onChange={(event) => {
                setEmail(event.target.value)
                if (hasError) setStatus({ state: 'idle', message: '' })
              }}
            />
            <button type="submit" className="btn btn--primary newsletter__btn" disabled={loading} aria-busy={loading}>
              {loading ? (
                <>
                  <LoaderCircle className="spin" size={16} aria-hidden="true" /> Subscribing
                </>
              ) : (
                'Subscribe'
              )}
            </button>
          </div>
          <p id="newsletter-status" className={`form-note form-note--${status.state}`} role="status" aria-live="polite">
            {status.message}
          </p>
        </form>
      </div>
    </section>
  )
}
