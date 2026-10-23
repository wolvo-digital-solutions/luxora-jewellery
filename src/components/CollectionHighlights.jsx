import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { collections } from '../data/categories'
import { MOTION_OK, gsap, revealOnScroll, useGSAP } from '../lib/gsap'

// Slim strip of small collection roundels under the hero (collections, not
// categories, so it doesn't repeat the category carousel below).
export default function CollectionHighlights() {
  const scope = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        revealOnScroll(scope.current, '.highlight', { trigger: scope.current, y: 18, stagger: 0.06, start: 'top 92%' })
      })
    },
    { scope },
  )

  return (
    <nav ref={scope} className="highlights" aria-label="Shop by collection">
      <ul className="container highlights__track">
        {collections.map((collection) => (
          <li key={collection.id} className="highlight">
            <Link to={`/collections?collection=${collection.id}`} className="highlight__link">
              <span className="highlight__ring">
                <img src={collection.image} alt="" loading="lazy" decoding="async" style={{ objectPosition: collection.imagePosition }} />
              </span>
              <span className="highlight__label">{collection.short}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
