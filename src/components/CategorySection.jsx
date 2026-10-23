import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { categories } from '../data/categories'
import { MOTION_OK, gsap, revealOnScroll, useGSAP } from '../lib/gsap'
import CategoryCarousel from './CategoryCarousel'
import SectionHeading from './SectionHeading'

export default function CategorySection() {
  const scope = useRef(null)
  const carousel = useRef(null)
  const [edges, setEdges] = useState({ atStart: true, atEnd: false })

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        revealOnScroll(scope.current, '[data-reveal="head"]', { trigger: scope.current, stagger: 0.08 })
        revealOnScroll(scope.current, '[data-reveal="category"]', {
          trigger: '.category-track',
          y: 36,
          stagger: 0.09,
          start: 'top 85%',
        })
      })
    },
    { scope },
  )

  return (
    <section ref={scope} id="categories" className="section categories" aria-labelledby="categories-title">
      <div className="container">
        <SectionHeading eyebrow="Shop by Category" title="Find Your Perfect Piece" id="categories-title">
          <div className="arrow-group">
            <button
              type="button"
              className="arrow-btn"
              aria-label="Previous categories"
              disabled={edges.atStart}
              onClick={() => carousel.current?.scroll(-1)}
            >
              <ChevronLeft size={18} strokeWidth={1.4} />
            </button>
            <button
              type="button"
              className="arrow-btn"
              aria-label="Next categories"
              disabled={edges.atEnd}
              onClick={() => carousel.current?.scroll(1)}
            >
              <ChevronRight size={18} strokeWidth={1.4} />
            </button>
          </div>
        </SectionHeading>
        <CategoryCarousel ref={carousel} items={categories} onEdgeChange={setEdges} />
      </div>
    </section>
  )
}
