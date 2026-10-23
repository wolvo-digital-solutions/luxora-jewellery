import { useRef } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { about } from '../data/home'
import { MOTION_OK, gsap, revealOnScroll, useGSAP } from '../lib/gsap'

export default function AboutSection() {
  const scope = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap.from('.about__main', {
          clipPath: 'inset(0 100% 0 0)',
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: scope.current, start: 'top 75%', once: true },
        })
        gsap.from('.about__inset', {
          autoAlpha: 0,
          scale: 0.85,
          duration: 0.8,
          delay: 0.6,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: { trigger: scope.current, start: 'top 75%', once: true },
        })
        revealOnScroll(scope.current, '[data-reveal]', { trigger: scope.current, stagger: 0.09, start: 'top 72%' })
      })
    },
    { scope },
  )

  return (
    <section ref={scope} id="about" className="section about" aria-labelledby="about-title">
      <div className="container about__grid">
        <div className="about__media">
          <span className="about__tag" aria-hidden="true">
            Crafted with care
          </span>
          <div className="about__main">
            <img src={about.image} alt="Diamond and gold necklaces displayed on ivory busts" loading="lazy" decoding="async" />
          </div>
          <div className="about__inset">
            <img src={about.inset} alt="" loading="lazy" decoding="async" />
          </div>
        </div>

        <div className="about__copy">
          <p className="eyebrow" data-reveal>
            About Luxora
          </p>
          <h2 id="about-title" className="section-title" data-reveal>
            A Legacy of Grace in Gold, Diamonds and Silver
          </h2>
          <p className="about__lead" data-reveal>
            Luxora began with a simple idea: jewellery should feel as personal as the moments it marks.
          </p>
          <p data-reveal>
            Our designers draw on India&rsquo;s kundan, polki and temple traditions, then refine each piece for comfort and
            everyday ease, so the heirloom you wear to a wedding can also be the one you reach for on an ordinary day.
          </p>
          <ul className="check-list" data-reveal>
            {about.points.map((point) => (
              <li key={point}>
                <Check size={16} strokeWidth={2} aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
          <Link to="/about" className="btn btn--primary btn--circle-arrow" data-reveal>
            Discover Our Story
            <span className="btn__circle" aria-hidden="true">
              <ArrowRight size={14} strokeWidth={1.75} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
