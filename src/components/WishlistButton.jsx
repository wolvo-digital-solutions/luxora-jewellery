import { useRef } from 'react'
import { Heart } from 'lucide-react'
import { useWishlist } from '../hooks/useStore'
import { gsap } from '../lib/gsap'

export default function WishlistButton({ product, className = '', withLabel = false }) {
  const { has, toggle } = useWishlist()
  const iconRef = useRef(null)
  const active = has(product.id)

  const onClick = (event) => {
    event.preventDefault()
    event.stopPropagation()
    toggle(product.id)
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.fromTo(iconRef.current, { scale: 0.7 }, { scale: 1, duration: 0.45, ease: 'back.out(3)', clearProps: 'transform' })
    }
  }

  return (
    <button
      type="button"
      className={`wish-btn${active ? ' is-active' : ''} ${className}`}
      aria-pressed={active}
      aria-label={active ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
      onClick={onClick}
    >
      <span ref={iconRef} className="wish-btn__icon">
        <Heart size={18} strokeWidth={1.5} aria-hidden="true" />
      </span>
      {withLabel && <span>{active ? 'Saved to Wishlist' : 'Add to Wishlist'}</span>}
    </button>
  )
}
