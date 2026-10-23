import { BadgeCheck, Heart, MapPin, Package, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useWishlist } from '../hooks/useStore'

export default function AnnouncementBar() {
  const { count } = useWishlist()

  return (
    <div className="announce" data-anim="announce">
      <div className="container announce__inner">
        <ul className="announce__group" aria-label="Store promises">
          <li>
            <Truck size={14} strokeWidth={1.5} aria-hidden="true" />
            Free Shipping on all orders
          </li>
          <li className="announce__secondary">
            <BadgeCheck size={14} strokeWidth={1.5} aria-hidden="true" />
            Certified BIS Hallmarked Jewellery
          </li>
        </ul>
        <ul className="announce__group announce__links" aria-label="Quick links">
          <li className="announce__secondary">
            <Link to="/store-locator">
              <MapPin size={14} strokeWidth={1.5} aria-hidden="true" />
              Store Locator
            </Link>
          </li>
          <li className="announce__secondary">
            <Link to="/track-order">
              <Package size={14} strokeWidth={1.5} aria-hidden="true" />
              Track Order
            </Link>
          </li>
          <li>
            <Link to="/wishlist" aria-label={`Wishlist, ${count} ${count === 1 ? 'item' : 'items'}`}>
              <Heart size={14} strokeWidth={1.5} aria-hidden="true" />
              Wishlist ({count})
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
