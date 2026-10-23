import { useRef } from 'react'
import { ArrowRight, Gift } from 'lucide-react'
import { Link } from 'react-router-dom'
import { gifting } from '../data/home'
import { MOTION_OK, gsap, revealOnScroll, useGSAP } from '../lib/gsap'

export default function GiftingSection() {
  const scope = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        revealOnScroll(scope.current, '[data-reveal]', { trigger: scope.current, stagger: 0.09, start: 'top 75%' })
        revealOnScroll(scope.current, '.gifting__small', { trigger: '.gifting__pair', y: 30, stagger: 0.12, start: 'top 85%' })
        gsap.from('.gifting__feature', {
          clipPath: 'inset(0 0 0 100%)',
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: '.gifting__feature', start: 'top 80%', once: true },
        })
      })
    },
    { scope },
  )

  return (
    <section ref={scope} className="section gifting" aria-labelledby="gifting-title">
      <div className="container gifting__grid">
        <div className="gifting__copy">
          <p className="eyebrow" data-reveal>
            Craftsmanship &amp; Gifting
          </p>
          <h2 id="gifting-title" className="section-title" data-reveal>
            Made by Hand, Given With Heart
          </h2>
          <p data-reveal>
            Birthdays, anniversaries, a first salary or simply because — some moments deserve something that lasts. Each piece
            arrives in a Luxora keepsake box, ready to give.
          </p>
          <div className="gifting__pair">
            {gifting.small.map((item) => (
              <div key={item.alt} className="gifting__small">
                <img src={item.image} alt={item.alt} loading="lazy" decoding="async" style={{ objectPosition: item.imagePosition }} />
              </div>
            ))}
          </div>
          <div className="gifting__actions" data-reveal>
            <Link to="/collections?price=under-50k" className="btn btn--primary">
              <Gift size={16} strokeWidth={1.5} aria-hidden="true" /> Gifts Under ₹50,000
            </Link>
            <Link to="/collections?collection=everyday" className="link-arrow">
              Everyday Gifts <ArrowRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="gifting__feature">
          <img src={gifting.lifestyle} alt="A woman smiling as she opens a wrapped gift" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  )
}
