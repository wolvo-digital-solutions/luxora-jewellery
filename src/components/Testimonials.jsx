import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../data/home'
import useMediaQuery from '../hooks/useMediaQuery'
import { MOTION_OK, gsap, revealOnScroll, useGSAP } from '../lib/gsap'

export default function Testimonials() {
  const scope = useRef(null)
  const listRef = useRef(null)
  const swipe = useRef(null)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const isTablet = useMediaQuery('(min-width: 680px)')
  const perView = isDesktop ? 3 : isTablet ? 2 : 1
  const pages = Math.ceil(testimonials.length / perView)
  const [rawPage, setPage] = useState(0)
  const [direction, setDirection] = useState(1)
  // Clamp when the viewport changes and there are fewer pages.
  const page = Math.min(rawPage, pages - 1)
  const visible = testimonials.slice(page * perView, page * perView + perView)

  const go = (next) => {
    const target = (next + pages) % pages
    setDirection(next > page ? 1 : -1)
    setPage(target)
  }

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        revealOnScroll(scope.current, '[data-reveal]', { trigger: scope.current, stagger: 0.1, start: 'top 80%' })
      })
    },
    { scope },
  )

  // Slide the new set of quotes in from the direction of travel.
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          listRef.current.children,
          { autoAlpha: 0, x: 36 * direction },
          { autoAlpha: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out', clearProps: 'transform' },
        )
      })
    },
    { dependencies: [page, perView], scope: listRef, revertOnUpdate: false },
  )

  const onPointerDown = (event) => {
    swipe.current = { x: event.clientX, y: event.clientY }
  }

  const onPointerUp = (event) => {
    if (!swipe.current) return
    const dx = event.clientX - swipe.current.x
    const dy = event.clientY - swipe.current.y
    swipe.current = null
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(page + (dx < 0 ? 1 : -1))
  }

  return (
    <section ref={scope} className="testimonials" aria-labelledby="testimonials-title" aria-roledescription="carousel">
      <div className="container">
        <div className="testimonials__head">
          <p className="eyebrow" data-reveal>
            Testimonials
          </p>
          <h2 id="testimonials-title" className="testimonials__title" data-reveal>
            What Our Clients Say
          </h2>
          <p className="testimonials__note" data-reveal>
            Sample testimonials shown for demonstration — genuine customer reviews coming soon.
          </p>
        </div>

        <div className="testimonials__stage">
          <button type="button" className="arrow-btn arrow-btn--light" aria-label="Previous testimonials" onClick={() => go(page - 1)}>
            <ChevronLeft size={18} strokeWidth={1.4} />
          </button>

          <ul
            ref={listRef}
            className="testimonials__list"
            style={{ '--per-view': perView }}
            aria-live="polite"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => {
              swipe.current = null
            }}
          >
            {visible.map((item, index) => (
              <li key={item.id} className={`quote-card${perView === 3 && index === 1 ? ' quote-card--center' : ''}`}>
                <Quote className="quote-card__mark" size={26} strokeWidth={1.2} aria-hidden="true" />
                <blockquote>
                  <p>{item.quote}</p>
                </blockquote>
                <p className="quote-card__by">
                  <span className="quote-card__avatar" aria-hidden="true">
                    {item.name[0]}
                  </span>
                  <span>
                    <strong>{item.name}</strong>
                    <span>{item.place} · Sample review</span>
                  </span>
                </p>
              </li>
            ))}
          </ul>

          <button type="button" className="arrow-btn arrow-btn--light" aria-label="Next testimonials" onClick={() => go(page + 1)}>
            <ChevronRight size={18} strokeWidth={1.4} />
          </button>
        </div>

        <div className="testimonials__dots" role="group" aria-label="Choose testimonials">
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              type="button"
              className={i === page ? 'is-active' : ''}
              aria-label={`Show testimonials ${i + 1} of ${pages}`}
              aria-current={i === page}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
