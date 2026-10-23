import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ProductCard from '../components/ProductCard'
import { useWishlist } from '../hooks/useStore'

export default function Wishlist() {
  const { items } = useWishlist()

  return (
    <>
      <PageHeader eyebrow="Saved Pieces" title="Your Wishlist" crumbs={[{ label: 'Wishlist' }]} />
      <div className="container page-body">
        {items.length ? (
          <div className="product-grid product-grid--home">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty-state empty-state--page">
            <Heart size={40} strokeWidth={1} aria-hidden="true" />
            <p className="empty-state__title">Your wishlist is empty</p>
            <p>Tap the heart on any piece to save it here.</p>
            <Link to="/collections" className="btn btn--primary">
              Explore Collections
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
