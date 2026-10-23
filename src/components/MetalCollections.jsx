import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { featuredCard, metalCards } from '../data/home'
import { MOTION_OK, gsap, revealOnScroll, useGSAP } from '../lib/gsap'
import SectionHeading from './SectionHeading'

export default function MetalCollections() {
  const scope = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        revealOnScroll(scope.current, '[data-reveal="head"]', { trigger: scope.current, stagger: 0.08 })
        revealOnScroll(scope.current, '.metal-card', { trigger: '.metal-grid', y: 40, stagger: 0.12, start: 'top 82%' })
      })
    },
    { scope },
  )

  return (
    <section ref={scope} className="section metals" aria-labelledby="metals-title">
      <div className="container">
        <SectionHeading eyebrow="Gold & Silver" title="Precious Metals, Beautifully Worked" id="metals-title" />
        <div className="metal-grid">
          {metalCards.map((card) => (
            <Link key={card.id} to={card.to} className="metal-card">
              <span className="metal-card__media">
                <img src={card.image} alt="" loading="lazy" decoding="async" style={{ objectPosition: card.imagePosition }} />
              </span>
              <span className="metal-card__body">
                <span className="metal-card__title">{card.title}</span>
                <span className="metal-card__text">{card.text}</span>
                <span className="metal-card__cta">
                  Shop {card.title} <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" />
                </span>
              </span>
            </Link>
          ))}

          <Link to={featuredCard.to} className="metal-card metal-card--feature">
            <span className="metal-card__media">
              <img src={featuredCard.image} alt="" loading="lazy" decoding="async" style={{ objectPosition: featuredCard.imagePosition }} />
            </span>
            <span className="metal-card__overlay">
              <span className="eyebrow">{featuredCard.eyebrow}</span>
              <span className="metal-card__title">{featuredCard.title}</span>
              <span className="metal-card__text">{featuredCard.text}</span>
              <span className="metal-card__cta">
                Explore <ArrowRight size={14} strokeWidth={1.5} aria-hidden="true" />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
