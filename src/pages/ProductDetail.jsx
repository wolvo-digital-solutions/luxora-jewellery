import { useState } from 'react'
import { BadgeCheck, Minus, Plus, RefreshCw, Truck } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ProductCard from '../components/ProductCard'
import StarRating from '../components/StarRating'
import WishlistButton from '../components/WishlistButton'
import { getCategory } from '../data/categories'
import { formatPrice, getProduct, products } from '../data/products'
import { useCart } from '../hooks/useStore'
import NotFound from './NotFound'

export default function ProductDetail() {
  const { id } = useParams()
  // Keyed by id so quantity resets when moving between products.
  return <ProductView key={id} product={getProduct(id)} />
}

function ProductView({ product }) {
  const { addToCart } = useCart()
  const [qty, setQty] = useState(1)

  if (!product) return <NotFound />

  const category = getCategory(product.category)
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <>
      <PageHeader
        title={product.name}
        crumbs={[
          { label: category?.name ?? 'Collections', to: `/collections?category=${product.category}` },
          { label: product.name },
        ]}
      />
      <div className="container pdp">
        <div className="pdp__media">
          <img src={product.image} alt={product.name} style={{ objectPosition: product.imagePosition }} />
        </div>
        <div className="pdp__info">
          <p className="eyebrow">{category?.name}</p>
          <p className="pdp__price">{formatPrice(product.price)}</p>
          <div className="pdp__rating">
            <StarRating value={product.rating} size={15} />
            <span>Sample rating</span>
          </div>
          <p className="pdp__desc">{product.description}</p>
          <dl className="spec-list">
            <div>
              <dt>Metal</dt>
              <dd>{product.metal}</dd>
            </div>
            <div>
              <dt>Stones</dt>
              <dd>{product.stones}</dd>
            </div>
            <div>
              <dt>Certification</dt>
              <dd>BIS Hallmarked</dd>
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
            <button type="button" className="btn btn--primary" onClick={() => addToCart(product.id, qty)}>
              Add to Bag
            </button>
            <WishlistButton product={product} className="wish-btn--outline" />
          </div>
          <ul className="pdp__perks">
            <li>
              <Truck size={18} strokeWidth={1.3} aria-hidden="true" /> Free shipping across India
            </li>
            <li>
              <RefreshCw size={18} strokeWidth={1.3} aria-hidden="true" /> 15-day returns &amp; lifetime exchange
            </li>
            <li>
              <BadgeCheck size={18} strokeWidth={1.3} aria-hidden="true" /> Certified BIS Hallmarked gold
            </li>
          </ul>
        </div>
      </div>

      {related.length > 0 && (
        <section className="section related" aria-labelledby="related-title">
          <div className="container">
            <div className="section-head">
              <div className="section-head__titles">
                <p className="eyebrow">You May Also Like</p>
                <h2 id="related-title" className="section-title">
                  More {category?.name}
                </h2>
              </div>
              <Link to={`/collections?category=${product.category}`} className="link-arrow">
                View All
              </Link>
            </div>
            <div className="product-grid product-grid--home">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
