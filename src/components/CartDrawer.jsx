import { useState } from 'react'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products'
import useOverlay from '../hooks/useOverlay'
import { useCart } from '../hooks/useStore'

export default function CartDrawer() {
  const { items, count, subtotal, updateQty, removeFromCart, isOpen, close } = useCart()
  const panelRef = useOverlay(isOpen, close)
  const [checkoutNotice, setCheckoutNotice] = useState(false)

  return (
    <div className={`overlay overlay--right${isOpen ? ' is-open' : ''}`} aria-hidden={!isOpen} inert={!isOpen}>
      <div className="overlay__scrim" onClick={close} />
      <aside ref={panelRef} className="drawer drawer--cart" role="dialog" aria-modal="true" aria-labelledby="cart-title">
        <div className="drawer__head">
          <h2 id="cart-title" className="drawer__title">
            Your Bag <span>({count})</span>
          </h2>
          <button type="button" className="icon-btn" aria-label="Close bag" onClick={close}>
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="empty-state">
            <ShoppingBag size={40} strokeWidth={1} aria-hidden="true" />
            <p className="empty-state__title">Your bag is empty</p>
            <p>Discover pieces crafted to celebrate you.</p>
            <Link to="/collections" className="btn btn--primary" onClick={close}>
              Shop Collections
            </Link>
          </div>
        ) : (
          <>
            <ul className="cart-lines">
              {items.map(({ id, qty, product }) => (
                <li key={id} className="cart-line">
                  <Link to={`/product/${id}`} className="cart-line__media" onClick={close}>
                    <img src={product.image} alt="" style={{ objectPosition: product.imagePosition }} />
                  </Link>
                  <div className="cart-line__body">
                    <Link to={`/product/${id}`} className="cart-line__name" onClick={close}>
                      {product.name}
                    </Link>
                    <p className="cart-line__meta">{product.metal}</p>
                    <div className="cart-line__row">
                      <div className="qty" role="group" aria-label={`Quantity for ${product.name}`}>
                        <button type="button" aria-label="Decrease quantity" onClick={() => updateQty(id, qty - 1)}>
                          <Minus size={14} />
                        </button>
                        <span aria-live="polite">{qty}</span>
                        <button type="button" aria-label="Increase quantity" onClick={() => updateQty(id, qty + 1)} disabled={qty >= 10}>
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="cart-line__price">{formatPrice(product.price * qty)}</span>
                    </div>
                  </div>
                  <button type="button" className="icon-btn cart-line__remove" aria-label={`Remove ${product.name}`} onClick={() => removeFromCart(id)}>
                    <Trash2 size={16} strokeWidth={1.5} />
                  </button>
                </li>
              ))}
            </ul>

            <div className="drawer__foot">
              <div className="cart-total">
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <p className="cart-note">Free shipping across India. Taxes calculated at checkout.</p>
              <button type="button" className="btn btn--primary btn--block" onClick={() => setCheckoutNotice(true)}>
                Proceed to Checkout
              </button>
              {checkoutNotice && (
                <p className="form-note form-note--info" role="status">
                  Checkout isn&rsquo;t connected to a payment provider in this demo, so no order has been placed.
                </p>
              )}
              <button type="button" className="btn btn--link btn--block" onClick={close}>
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
