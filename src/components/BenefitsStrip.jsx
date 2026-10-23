import { useRef } from 'react'
import { Gem, Headset, RefreshCw, ShieldCheck } from 'lucide-react'
import { contact } from '../data/site'
import { MOTION_OK, gsap, revealOnScroll, useGSAP } from '../lib/gsap'

// Service policies are demonstration content — confirm before production.
const benefits = [
  { Icon: Gem, title: 'Certified Jewellery', lines: ['BIS Hallmarked', 'Authentic & Trusted'] },
  { Icon: RefreshCw, title: 'Easy Returns', lines: ['15 Days Return', 'No Questions Asked'] },
  { Icon: ShieldCheck, title: 'Lifetime Exchange', lines: ['Exchange or Upgrade', 'Anytime'] },
  { Icon: Headset, title: 'Customer Support', lines: ["We're here to help", contact.phone] },
]

export default function BenefitsStrip() {
  const scope = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        revealOnScroll(scope.current, '.benefit', { trigger: scope.current, y: 20, stagger: 0.12, start: 'top 88%' })
        revealOnScroll(scope.current, '.benefit__icon', {
          trigger: scope.current,
          y: 0,
          scale: 0.6,
          stagger: 0.12,
          delay: 0.15,
          ease: 'back.out(2)',
          start: 'top 88%',
        })
      })
    },
    { scope },
  )

  return (
    <section ref={scope} className="benefits" aria-label="Our promises">
      <ul className="container benefits__grid">
        {benefits.map(({ Icon, title, lines }) => (
          <li key={title} className="benefit">
            <span className="benefit__icon">
              <Icon size={36} strokeWidth={1} aria-hidden="true" />
            </span>
            <div>
              <h3 className="benefit__title">{title}</h3>
              <p className="benefit__text">
                {lines[0]}
                <br />
                {title === 'Customer Support' ? <a href={contact.phoneHref}>{lines[1]}</a> : lines[1]}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
