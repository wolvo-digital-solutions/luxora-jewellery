import { Eye, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products'
import { useCart, useUI } from '../hooks/useStore'
import StarRating from './StarRating'
import WishlistButton from './WishlistButton'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { openQuickView } = useUI()
  const href = `/product/${product.id}`

  return (
    <article className="product-card">
      <div className="product-card__media">
        <Link to={href} tabIndex={-1} aria-hidden="true">
          <img
            src={product.image}
            alt=""
            loading="lazy"
            decoding="async"
            style={{ objectPosition: product.imagePosition }}
          />
        </Link>
        <WishlistButton product={product} className="product-card__wish" />
        <div className="product-card__actions">
          <button type="button" onClick={() => openQuickView(product.id)} aria-label={`Quick view ${product.name}`}>
            <Eye size={15} strokeWidth={1.5} aria-hidden="true" /> Quick View
          </button>
          <button type="button" onClick={() => addToCart(product.id)} aria-label={`Add ${product.name} to bag`}>
            <ShoppingBag size={15} strokeWidth={1.5} aria-hidden="true" /> Add to Bag
          </button>
        </div>
      </div>
      <div className="product-card__body">
        <h3 className="product-card__name">
          <Link to={href}>{product.name}</Link>
        </h3>
        <p className="product-card__price">{formatPrice(product.price)}</p>
        <StarRating value={product.rating} />
      </div>
    </article>
  )
}
