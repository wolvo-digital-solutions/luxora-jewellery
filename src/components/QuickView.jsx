import { useState } from 'react'
import { Minus, Plus, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getCategory } from '../data/categories'
import { formatPrice, getProduct } from '../data/products'
import useOverlay from '../hooks/useOverlay'
import { useCart, useUI } from '../hooks/useStore'
import StarRating from './StarRating'
import WishlistButton from './WishlistButton'

export default function QuickView() {
  const { quickViewId, closeQuickView } = useUI()
  const { addToCart } = useCart()
  const open = Boolean(quickViewId)
  const panelRef = useOverlay(open, closeQuickView)
  const [qty, setQty] = useState(1)
  // Keep the last product rendered while the modal fades out.
  const [shownId, setShownId] = useState(quickViewId)

  if (quickViewId && quickViewId !== shownId) {
    setShownId(quickViewId)
    setQty(1)
  }

  const product = getProduct(shownId)

  return (
    <div className={`overlay overlay--center${open ? ' is-open' : ''}`} aria-hidden={!open} inert={!open}>
      <div className="overlay__scrim" onClick={closeQuickView} />
      {product && (
        <div ref={panelRef} className="modal quick-view" role="dialog" aria-modal="true" aria-labelledby="qv-title">
          <button type="button" className="icon-btn modal__close" aria-label="Close quick view" onClick={closeQuickView}>
            <X size={22} strokeWidth={1.5} />
          </button>
          <div className="quick-view__media">
            <img src={product.image} alt={product.name} style={{ objectPosition: product.imagePosition }} />
          </div>
          <div className="quick-view__body">
            <p className="eyebrow">{getCategory(product.category)?.name}</p>
            <h2 id="qv-title" className="quick-view__title">
              {product.name}
            </h2>
            <p className="quick-view__price">{formatPrice(product.price)}</p>
            <StarRating value={product.rating} />
            <p className="quick-view__desc">{product.description}</p>
            <dl className="spec-list">
              <div>
                <dt>Metal</dt>
                <dd>{product.metal}</dd>
              </div>
              <div>
                <dt>Stones</dt>
                <dd>{product.stones}</dd>
              </div>
            </dl>
            <div className="buy-row">
              <div className="qty qty--lg" role="group" aria-label="Quantity">
                <button type="button" aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))} disabled={qty <= 1}>
                  <Minus size={14} />
                </button>
                <span aria-live="polite">{qty}</span>
                <button type="button" aria-label="Increase quantity" onClick={() => setQty((q) => Math.min(10, q + 1))} disabled={qty >= 10}>
                  <Plus size={14} />
                </button>
              </div>
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => {
                  closeQuickView()
                  addToCart(product.id, qty)
                }}
              >
                Add to Bag
              </button>
              <WishlistButton product={product} className="wish-btn--outline" />
            </div>
            <Link to={`/product/${product.id}`} className="btn btn--link" onClick={closeQuickView}>
              View full details
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
