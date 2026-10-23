import { useState } from 'react'
import { ChevronDown, Heart, MapPin, Package, Search, User, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { mainNav } from '../data/site'
import useOverlay from '../hooks/useOverlay'
import { useUI, useWishlist } from '../hooks/useStore'
import Logo from './Logo'

export default function MobileMenu({ open, onClose }) {
  const panelRef = useOverlay(open, onClose)
  const [expanded, setExpanded] = useState(null)
  const { openSearch } = useUI()
  const { count } = useWishlist()

  return (
    <div className={`overlay overlay--left${open ? ' is-open' : ''}`} aria-hidden={!open} inert={!open}>
      <div className="overlay__scrim" onClick={onClose} />
      <aside ref={panelRef} className="drawer drawer--menu" role="dialog" aria-modal="true" aria-label="Menu">
        <div className="drawer__head">
          <Logo onClick={onClose} />
          <button type="button" className="icon-btn" aria-label="Close menu" onClick={onClose}>
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        <button
          type="button"
          className="mobile-search"
          onClick={() => {
            onClose()
            openSearch()
          }}
        >
          <Search size={18} strokeWidth={1.5} aria-hidden="true" />
          Search for jewellery…
        </button>

        <nav aria-label="Mobile">
          <ul className="mobile-nav">
            {mainNav.map((item) =>
              item.children ? (
                <li key={item.label} className={expanded === item.label ? 'is-expanded' : ''}>
                  <button
                    type="button"
                    className="mobile-nav__link"
                    aria-expanded={expanded === item.label}
                    onClick={() => setExpanded((current) => (current === item.label ? null : item.label))}
                  >
                    {item.label}
                    <ChevronDown size={16} strokeWidth={1.5} aria-hidden="true" />
                  </button>
                  <ul className="mobile-nav__sub">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link to={child.to} onClick={onClose}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.label}>
                  <NavLink to={item.to} end className="mobile-nav__link" onClick={onClose}>
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <ul className="mobile-utility">
          <li>
            <Link to="/account" onClick={onClose}>
              <User size={17} strokeWidth={1.5} aria-hidden="true" /> My Account
            </Link>
          </li>
          <li>
            <Link to="/wishlist" onClick={onClose}>
              <Heart size={17} strokeWidth={1.5} aria-hidden="true" /> Wishlist ({count})
            </Link>
          </li>
          <li>
            <Link to="/track-order" onClick={onClose}>
              <Package size={17} strokeWidth={1.5} aria-hidden="true" /> Track Order
            </Link>
          </li>
          <li>
            <Link to="/store-locator" onClick={onClose}>
              <MapPin size={17} strokeWidth={1.5} aria-hidden="true" /> Store Locator
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  )
}
