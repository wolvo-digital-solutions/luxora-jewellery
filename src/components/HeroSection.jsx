import { useRef } from 'react'
import { ArrowRight, Gem, ShieldCheck, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroModel from '../assets/images/hero-model.webp'
import { EASE, MOTION_OK, gsap, useGSAP } from '../lib/gsap'

const trust = [
  { Icon: Gem, lines: ['Certified', 'BIS Hallmarked'] },
  { Icon: ShieldCheck, lines: ['100% Secure', 'Checkout'] },
  { Icon: Truck, lines: ['Free Shipping', 'Across India'] },
]

export default function HeroSection() {
  const scope = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap
          .timeline({ defaults: { ease: EASE }, delay: 0.25 })
          .from('.hero__media', { clipPath: 'inset(0 0 0 100%)', duration: 1.3, ease: 'power3.inOut' }, 0)
          .from('.hero__media img', { scale: 1.08, duration: 1.6 }, 0)
          .from('.hero__eyebrow', { autoAlpha: 0, y: 14, duration: 0.6 }, 0.35)
          .from('.hero__title-line', { autoAlpha: 0, y: 26, duration: 0.85, stagger: 0.12 }, 0.45)
          .from('.hero__text', { autoAlpha: 0, y: 16, duration: 0.7 }, 0.75)
          .from('.hero__cta', { autoAlpha: 0, y: 16, duration: 0.7 }, 0.9)
          .from('.hero__trust li', { autoAlpha: 0, y: 12, duration: 0.6, stagger: 0.08 }, 1.05)
      })
    },
    { scope },
  )

  return (
    <section ref={scope} className="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        <img
          src={heroModel}
          alt="Model in a blush lehenga wearing a pink-stone diamond necklace, matching chandelier earrings and a cocktail ring"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">Crafted to Celebrate You</p>
          <h1 id="hero-title" className="hero__title">
            <span className="hero__title-line">Timeless Elegance.</span>
            <span className="hero__title-line hero__title-line--accent">Forever You.</span>
          </h1>
          <p className="hero__text">
            Discover exquisite jewellery that
            <br /> blends tradition with modern elegance.
          </p>
          <Link to="/collections" className="btn btn--primary btn--circle-arrow hero__cta">
            Explore Collections
            <span className="btn__circle" aria-hidden="true">
              <ArrowRight size={16} strokeWidth={1.75} />
            </span>
          </Link>
          <ul className="hero__trust">
            {trust.map(({ Icon, lines }) => (
              <li key={lines.join(' ')}>
                <Icon size={34} strokeWidth={1.25} aria-hidden="true" />
                <span>
                  {lines[0]}
                  <br />
                  {lines[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
