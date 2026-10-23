import { useCallback, useEffect, useImperativeHandle, useRef } from 'react'
import { Link } from 'react-router-dom'

/**
 * Native scroll-snap track (so touch swiping and trackpads just work) with an
 * imperative API for the section's previous/next buttons.
 */
export default function CategoryCarousel({ items, ref, onEdgeChange }) {
  const trackRef = useRef(null)

  const updateEdges = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const maxScroll = track.scrollWidth - track.clientWidth
    onEdgeChange?.({ atStart: track.scrollLeft <= 2, atEnd: track.scrollLeft >= maxScroll - 2 })
  }, [onEdgeChange])

  useEffect(() => {
    const track = trackRef.current
    updateEdges()
    track.addEventListener('scroll', updateEdges, { passive: true })
    const observer = new ResizeObserver(updateEdges)
    observer.observe(track)
    return () => {
      track.removeEventListener('scroll', updateEdges)
      observer.disconnect()
    }
  }, [updateEdges])

  useImperativeHandle(ref, () => ({
    scroll(direction) {
      const track = trackRef.current
      const item = track.querySelector('.category-card')
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0
      const step = item ? item.getBoundingClientRect().width + gap : track.clientWidth
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      track.scrollBy({ left: direction * step, behavior: reduce ? 'auto' : 'smooth' })
    },
  }))

  return (
    <ul ref={trackRef} className="category-track" aria-label="Jewellery categories">
      {items.map((category) => (
        <li key={category.id} className="category-card" data-reveal="category">
          <Link to={`/collections?category=${category.id}`} className="category-card__link">
            <span className="category-card__media">
              <span className="category-card__frame">
                <img
                  src={category.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: category.imagePosition }}
                />
              </span>
            </span>
            <span className="category-card__name">{category.name}</span>
            <span className="category-card__cta">Explore Now</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
