import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Menu, Search, ShoppingBag, User } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { mainNav } from '../data/site'
import { useCart, useUI } from '../hooks/useStore'
import { EASE, MOTION_OK, gsap, useGSAP } from '../lib/gsap'
import AnnouncementBar from './AnnouncementBar'
import Logo from './Logo'
import MobileMenu from './MobileMenu'

function NavDropdown({ item, open, onOpen, onClose, onToggle }) {
  const id = `nav-menu-${item.label.toLowerCase()}`
  return (
    // Hover opening is for mouse users only; touch taps go through onClick.
    <li
      className={`nav__item nav__item--has-menu${open ? ' is-open' : ''}`}
      onPointerEnter={(event) => event.pointerType === 'mouse' && onOpen()}
      onPointerLeave={(event) => event.pointerType === 'mouse' && onClose()}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) onClose()
      }}
    >
      <button
        type="button"
        className="nav__link"
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
      >
        {item.label}
        <ChevronDown className="nav__chevron" size={13} strokeWidth={1.75} aria-hidden="true" />
      </button>
      <div className="nav__menu" id={id} role="region" aria-label={item.label}>
        <ul>
          {item.children.map((child) => (
            <li key={child.label}>
              <Link to={child.to} onClick={onClose}>
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { count, open: openCart } = useCart()
  const { openSearch } = useUI()
  const location = useLocation()
  const headerRef = useRef(null)

  // Close menus whenever the route changes (including browser back/forward).
  const routeKey = location.pathname + location.search
  const [lastRoute, setLastRoute] = useState(routeKey)
  if (lastRoute !== routeKey) {
    setLastRoute(routeKey)
    setOpenMenu(null)
    setMobileOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!openMenu) return undefined
    const onKey = (event) => event.key === 'Escape' && setOpenMenu(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openMenu])

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap
          .timeline({ defaults: { ease: EASE } })
          .from(document.querySelector('[data-anim="announce"]'), { autoAlpha: 0, duration: 0.5 }, 0)
          .from('.logo', { autoAlpha: 0, y: 10, duration: 0.7 }, 0.1)
          .from('.nav__list > li', { autoAlpha: 0, y: -8, duration: 0.5, stagger: 0.05 }, 0.2)
          .from('.nav__actions > *', { autoAlpha: 0, y: -8, duration: 0.45, stagger: 0.06 }, 0.35)
      })
    },
    { scope: headerRef },
  )

  return (
    <>
      <AnnouncementBar />
      <header ref={headerRef} className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="container nav__inner">
          <button
            type="button"
            className="icon-btn nav__burger"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>

          <Logo />

          <nav className="nav__primary" aria-label="Main">
            <ul className="nav__list">
              {mainNav.map((item) =>
                item.children ? (
                  <NavDropdown
                    key={item.label}
                    item={item}
                    open={openMenu === item.label}
                    onOpen={() => setOpenMenu(item.label)}
                    onClose={() => setOpenMenu((current) => (current === item.label ? null : current))}
                    onToggle={() => setOpenMenu((current) => (current === item.label ? null : item.label))}
                  />
                ) : (
                  <li key={item.label} className="nav__item">
                    <NavLink to={item.to} end className="nav__link">
                      {item.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="nav__actions">
            <button type="button" className="icon-btn" aria-label="Search jewellery" onClick={openSearch}>
              <Search size={20} strokeWidth={1.5} />
            </button>
            <Link to="/account" className="icon-btn nav__account" aria-label="Account">
              <User size={20} strokeWidth={1.5} />
            </Link>
            <button
              type="button"
              className="icon-btn nav__bag"
              aria-label={`Shopping bag, ${count} ${count === 1 ? 'item' : 'items'}`}
              onClick={openCart}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="badge" aria-hidden="true">
                {count}
              </span>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
