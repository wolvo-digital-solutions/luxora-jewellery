import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { trending } from '../data/home'
import { MOTION_OK, gsap, revealOnScroll, useGSAP } from '../lib/gsap'
import SectionHeading from './SectionHeading'

export default function TrendingCollections() {
  const scope = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        revealOnScroll(scope.current, '[data-reveal="head"]', { trigger: scope.current, stagger: 0.08 })
        revealOnScroll(scope.current, '.trend-card', { trigger: '.trend-grid', y: 40, stagger: 0.1, start: 'top 85%' })
      })
    },
    { scope },
  )

  return (
    <section ref={scope} className="section trending" aria-labelledby="trending-title">
      <div className="container">
        <SectionHeading eyebrow="Now Trending" title="Our Trending Collections" id="trending-title" align="center" />
        <p className="trending__intro">
          The pieces our customers keep coming back to — from heirloom gold to contemporary silver.
        </p>
        <ul className="trend-grid">
          {trending.map((item) => (
            <li key={item.id}>
              <Link to={item.to} className="trend-card">
                <span className="trend-card__media">
                  <img src={item.image} alt="" loading="lazy" decoding="async" style={{ objectPosition: item.imagePosition }} />
                </span>
                <span className="trend-card__title">{item.title}</span>
                <span className="trend-card__cta">
                  Explore <ArrowRight size={13} strokeWidth={1.5} aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
