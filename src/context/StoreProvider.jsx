import { useCallback, useEffect, useMemo, useState } from 'react'
import { getProduct } from '../data/products'
import { CartContext, UIContext, WishlistContext } from './contexts'

const CART_KEY = 'luxora:cart'
const WISHLIST_KEY = 'luxora:wishlist'

const readStored = (key, fallback) => {
  try {
    const raw = window.localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

const writeStored = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Storage can be unavailable (private mode); state still works in memory.
  }
}

export function StoreProvider({ children }) {
  // Cart lines are stored as { id, qty } and hydrated against the catalogue.
  const [cartLines, setCartLines] = useState(() =>
    readStored(CART_KEY, []).filter((line) => getProduct(line.id)),
  )
  const [wishlistIds, setWishlistIds] = useState(() =>
    readStored(WISHLIST_KEY, []).filter((id) => getProduct(id)),
  )
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [quickViewId, setQuickViewId] = useState(null)
  const [toast, setToast] = useState(null)

  useEffect(() => writeStored(CART_KEY, cartLines), [cartLines])
  useEffect(() => writeStored(WISHLIST_KEY, wishlistIds), [wishlistIds])

  useEffect(() => {
    if (!toast) return undefined
    const timer = window.setTimeout(() => setToast(null), 2600)
    return () => window.clearTimeout(timer)
  }, [toast])

  const notify = useCallback((message) => setToast({ message, key: Date.now() }), [])

  const addToCart = useCallback(
    (id, qty = 1) => {
      setCartLines((lines) => {
        const existing = lines.find((line) => line.id === id)
        if (existing) {
          return lines.map((line) => (line.id === id ? { ...line, qty: Math.min(line.qty + qty, 10) } : line))
        }
        return [...lines, { id, qty }]
      })
      setCartOpen(true)
    },
    [],
  )

  const updateQty = useCallback((id, qty) => {
    setCartLines((lines) =>
      qty < 1 ? lines.filter((line) => line.id !== id) : lines.map((line) => (line.id === id ? { ...line, qty: Math.min(qty, 10) } : line)),
    )
  }, [])

  const removeFromCart = useCallback((id) => {
    setCartLines((lines) => lines.filter((line) => line.id !== id))
  }, [])

  const toggleWishlist = useCallback(
    (id) => {
      const product = getProduct(id)
      setWishlistIds((ids) => (ids.includes(id) ? ids.filter((item) => item !== id) : [...ids, id]))
      if (product) {
        notify(wishlistIds.includes(id) ? `Removed ${product.name} from your wishlist` : `Saved ${product.name} to your wishlist`)
      }
    },
    [notify, wishlistIds],
  )

  const cart = useMemo(() => {
    const items = cartLines.map((line) => ({ ...line, product: getProduct(line.id) })).filter((line) => line.product)
    return {
      items,
      count: items.reduce((sum, line) => sum + line.qty, 0),
      subtotal: items.reduce((sum, line) => sum + line.qty * line.product.price, 0),
      addToCart,
      updateQty,
      removeFromCart,
      isOpen: cartOpen,
      open: () => setCartOpen(true),
      close: () => setCartOpen(false),
    }
  }, [cartLines, cartOpen, addToCart, updateQty, removeFromCart])

  const wishlist = useMemo(
    () => ({
      ids: wishlistIds,
      count: wishlistIds.length,
      items: wishlistIds.map(getProduct).filter(Boolean),
      has: (id) => wishlistIds.includes(id),
      toggle: toggleWishlist,
    }),
    [wishlistIds, toggleWishlist],
  )

  const ui = useMemo(
    () => ({
      searchOpen,
      openSearch: () => setSearchOpen(true),
      closeSearch: () => setSearchOpen(false),
      quickViewId,
      openQuickView: setQuickViewId,
      closeQuickView: () => setQuickViewId(null),
      toast,
      notify,
    }),
    [searchOpen, quickViewId, toast, notify],
  )

  return (
    <CartContext.Provider value={cart}>
      <WishlistContext.Provider value={wishlist}>
        <UIContext.Provider value={ui}>{children}</UIContext.Provider>
      </WishlistContext.Provider>
    </CartContext.Provider>
  )
}
