import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { bestsellers } from '../data/products'
import { MOTION_OK, gsap, revealOnScroll, useGSAP } from '../lib/gsap'
import ProductCard from './ProductCard'
import SectionHeading from './SectionHeading'

export default function BestsellerSection() {
  const scope = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        revealOnScroll(scope.current, '[data-reveal="head"]', { trigger: scope.current, stagger: 0.08 })
        revealOnScroll(scope.current, '.product-grid > *', { trigger: '.product-grid', y: 40, stagger: 0.1, start: 'top 85%' })
      })
    },
    { scope },
  )

  return (
    <section ref={scope} id="bestsellers" className="section bestsellers" aria-labelledby="bestsellers-title">
      <div className="container">
        <SectionHeading eyebrow="Our Bestsellers" title="Handpicked For You" id="bestsellers-title">
          <Link to="/collections" className="link-arrow">
            View All Products <ArrowRight size={15} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </SectionHeading>
        <div className="product-grid product-grid--home">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
