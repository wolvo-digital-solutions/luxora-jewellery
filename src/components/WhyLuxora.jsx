import { useRef } from 'react'
import { BadgeIndianRupee, CircleCheck, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { promises, why } from '../data/home'
import { MOTION_OK, gsap, revealOnScroll, useGSAP } from '../lib/gsap'

const icons = { Sparkles, BadgeIndianRupee, HeartHandshake, ShieldCheck }

// "Why choose Luxora" and the four Luxora promises share one section so the
// same benefits aren't repeated in two places on the page.
export default function WhyLuxora() {
  const scope = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        revealOnScroll(scope.current, '[data-reveal]', { trigger: scope.current, stagger: 0.09, start: 'top 75%' })
        gsap.from('.why__media img', {
          scale: 1.12,
          autoAlpha: 0,
          duration: 1.3,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: { trigger: '.why__media', start: 'top 80%', once: true },
        })
        revealOnScroll(scope.current, '.promise', { trigger: '.promises', y: 30, stagger: 0.1, start: 'top 88%' })
      })
    },
    { scope },
  )

  return (
    <section ref={scope} className="section why" aria-labelledby="why-title">
      <div className="container">
        <div className="why__grid">
          <div className="why__copy">
            <p className="eyebrow" data-reveal>
              Why Choose Luxora
            </p>
            <h2 id="why-title" className="section-title" data-reveal>
              Jewellery You Can Wear With Confidence
            </h2>
            <p className="why__intro" data-reveal>
              From the first sketch to the final polish, every Luxora piece is made to look beautiful, feel comfortable and
              last.
            </p>
            <ul className="why__points">
              {why.points.map((point) => (
                <li key={point.title} data-reveal>
                  <CircleCheck size={20} strokeWidth={1.4} aria-hidden="true" />
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn--outline" data-reveal>
              Talk to Our Stylists
            </Link>
          </div>
          <div className="why__media">
            <img src={why.image} alt="Model wearing a gold and pearl necklace with matching drop earrings" loading="lazy" decoding="async" />
          </div>
        </div>

        <div className="promises">
          <h3 className="promises__title">
            <span>The Luxora Promise</span>
          </h3>
          <ul className="promises__grid">
            {promises.map((item) => {
              const Icon = icons[item.icon]
              return (
                <li key={item.id} className="promise">
                  <span className="promise__icon">
                    <Icon size={26} strokeWidth={1.3} aria-hidden="true" />
                  </span>
                  <h4 className="promise__title">{item.title}</h4>
                  <p className="promise__text">{item.text}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
