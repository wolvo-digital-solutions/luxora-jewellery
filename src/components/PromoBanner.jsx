import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { promo } from '../data/home'
import { MOTION_OK, gsap, useGSAP } from '../lib/gsap'

export default function PromoBanner() {
  const scope = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap
          .timeline({ scrollTrigger: { trigger: scope.current, start: 'top 78%', once: true }, defaults: { ease: 'power3.out' } })
          .from('.promo__panel', { clipPath: 'inset(0 50% 0 50% round 8px)', duration: 1.2, ease: 'power3.inOut' })
          .from('.promo__media img', { scale: 1.1, duration: 1.4, clearProps: 'transform' }, 0.2)
          .from('.promo__copy > *', { autoAlpha: 0, y: 22, duration: 0.7, stagger: 0.1, clearProps: 'transform' }, 0.6)
      })
    },
    { scope },
  )

  return (
    <section ref={scope} className="promo" aria-labelledby="promo-title">
      <div className="container">
        <div className="promo__panel">
          <div className="promo__media">
            <img src={promo.image} alt="Rose gold bracelet and pink crystal earrings on blush silk" loading="lazy" decoding="async" />
          </div>
          <div className="promo__copy">
            <p className="eyebrow">{promo.eyebrow}</p>
            <h2 id="promo-title" className="promo__title">
              {promo.title}
            </h2>
            <span className="promo__rule" aria-hidden="true" />
            <p className="promo__text">{promo.text}</p>
            <Link to={promo.to} className="btn btn--primary btn--circle-arrow">
              {promo.cta}
              <span className="btn__circle" aria-hidden="true">
                <ArrowRight size={14} strokeWidth={1.75} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
