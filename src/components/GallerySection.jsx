import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { gallery } from '../data/home'
import { MOTION_OK, gsap, useGSAP } from '../lib/gsap'
import SectionHeading from './SectionHeading'

export default function GallerySection() {
  const scope = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        const trigger = { trigger: scope.current, start: 'top 75%', once: true }
        gsap.from('[data-reveal="head"]', { autoAlpha: 0, y: 24, duration: 0.8, stagger: 0.08, ease: 'power3.out', clearProps: 'transform', scrollTrigger: trigger })
        gsap.from('.gallery__tile', {
          clipPath: 'inset(100% 0 0 0)',
          duration: 1.1,
          stagger: 0.12,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: '.gallery__grid', start: 'top 80%', once: true },
        })
      })
    },
    { scope },
  )

  return (
    <section ref={scope} className="section gallery" aria-labelledby="gallery-title">
      <div className="container">
        <SectionHeading eyebrow="In Detail" title="The Luxora Gallery" id="gallery-title" align="center" />
        <ul className="gallery__grid">
          {gallery.map((item) => (
            <li key={item.id} className={`gallery__tile gallery__tile--${item.id}`}>
              <Link to={item.to} className="gallery__link" aria-label={`${item.label}: ${item.alt}`}>
                <img src={item.image} alt="" loading="lazy" decoding="async" style={{ objectPosition: item.imagePosition }} />
                <span className="gallery__label" aria-hidden="true">
                  {item.label}
                  <ArrowUpRight size={14} strokeWidth={1.5} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
